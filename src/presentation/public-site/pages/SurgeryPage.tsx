import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import RedirectSchedule from "../components/RedirectSchedule";

export default function SurgeryPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Cirurgias Espirituais
          </h1>

          <div>
            As <b>Cirurgias Espirituais</b> têm por objetivo a realização de
            procedimentos visando auxiliar o tratamento
            psíquico-clínico-espiritual de todo aquele que apresentar estas
            necessidades.
            <br />
            <span className="font-bold mt-4 flex">
              Na Casa Espírita Eurípedes Barsanulpho, os procedimentos
              espirituais são realizados em sala própria (ambulatório),
              devidamente higienizada, através de um médium e de um auxiliar.
            </span>
            <br />
            <span className="font-bold mt-4 flex">
              As Cirurgias Espirituais são realizadas mediante agendamento
              prévio através do Atendimento Fraterno.
            </span>
            <br />
            <span className="font-normal mt-4 flex">
              Para mais informações sobre o Atendimento Fraterno clique{" "}
              <a
                href="/atendimento-fraterno"
                className="text-primary underline pl-2"
              >
                aqui
              </a>
            </span>
          </div>
          <RedirectSchedule />
        </section>
      </main>
      <Footer />
    </div>
  );
}
