import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Schema de validação com Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(
      /^\(\d{2}\) \d{4,5}-\d{4}$/,
      "Telefone inválido. Use o formato (00) 00000-0000",
    ),
  subject: z
    .string()
    .min(3, "Assunto deve ter no mínimo 3 caracteres")
    .max(100, "Assunto deve ter no máximo 100 caracteres"),
  message: z
    .string()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Função para formatar telefone
const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 10) {
    return numbers
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return numbers
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const phoneValue = watch("phone");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue("phone", formatted);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Aqui você vai integrar com seu backend
      console.log("Dados do formulário:", data);

      // Simulando envio para API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      reset();

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-sm border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Envie-nos uma mensagem
      </h2>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm">
          <p className="text-green-800 text-sm font-medium">
            ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
              errors.name ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email <span className="text-slate-400 text-xs">(opcional)</span>
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Telefone com máscara */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Telefone <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            value={phoneValue || ""}
            onChange={handlePhoneChange}
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
              errors.phone ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="(48) 99999-9999"
            maxLength={15}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Assunto */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Assunto <span className="text-red-500">*</span>
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${
              errors.subject ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="Sobre o que você gostaria de falar?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-vertical ${
              errors.message ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="Escreva sua mensagem aqui..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Botão Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
    </div>
  );
}
