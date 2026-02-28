import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import RedirectSchedule from "../components/RedirectSchedule";

export default function WithoutObsessionPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Tratamento de Desobsessão
          </h1>

          <div>
            O <b>Tratamento de Desobsessão</b> tem por objetivo o tratamento
            espiritual, de forma presencial ou à distância, e o auxílio aos
            encarnados e desencarnados envolvidos em processos de reajuste
            espiritual. <br />
            <br />
            <span className="font-normal mt-4 flex">
              A Casa Espírita Eurípedes Barsanulpho realiza o Tratamento de
              Desobsessão às sextas-feiras, mediante agendamento prévio
              realizado através do Atendimento Fraterno.
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
