import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import RedirectSchedule from "../components/RedirectSchedule";

export default function IrradiationPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-3xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">Irradiação</h1>
          <p>
            A <strong>Irradiação</strong> é uma assistência espiritual à
            distância através da doação de fluidos, visando o bem-estar físico,
            emocional e espiritual das pessoas que estejam doentes cujos nomes
            foram relacionados e encontram-se sobre a tribuna de exposições
            doutrinárias e de todos os enfermos em geral que estejam
            hospitalizados (emergências, centros cirúrgicos, unidades de terapia
            intensiva, salas de recuperação, enfermarias etc.), em suas
            residências, em casas de repouso, nas ruas etc.
          </p>
          <p className="mt-4">
            Os nomes para receberem a irradiação serão coletados em um
            recipiente durante a semana anterior ao dia da irradiação. Para isto
            serão disponibilizadas pequenas fichas a serem preenchidas pelos
            solicitantes da irradiação, as quais, depois de preenchidas, serão
            depositadas em um recipiente colocado na entrada do Salão de
            Exposições Doutrinárias. Nesta ficha constará o nome da pessoa que
            receberá a irradiação, endereço onde o paciente se encontra e a
            doença de que está acometido.
          </p>
          <p className="mt-4">
            A irradiação será feita no Salão de Exposições Doutrinárias às
            segundas-feiras das 19:10 horas às 19:20 horas.
          </p>
          <p className="mt-4">
            Aos sábados, a irradiação é realizada para a{" "}
            <strong>humanidade</strong>, no Salão de Exposições Doutrinárias das
            18:45 horas às 18:55 horas.
          </p>

          <RedirectSchedule />
        </section>
      </main>
      <Footer />
    </div>
  );
}
