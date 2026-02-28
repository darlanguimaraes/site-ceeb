import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import RedirectSchedule from "../components/RedirectSchedule";

export default function EvangelizationPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-3xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Evangelização
          </h1>

          <div>
            <p>
              O{" "}
              <b>
                Departamento de Evangelização da Casa Espírita Eurípedes
                Barsanulpho
              </b>{" "}
              tem por objetivo:
            </p>
            <p>
              <b>a)</b> promover o conhecimento dos ensinos morais do Evangelho
              de Jesus à luz da Doutrina Espírita;
            </p>
            <p>
              <b>b)</b> promover a integração do evangelizando consigo mesmo,
              com o próximo e com Deus;
            </p>
            <p>
              <b>c)</b> proporcionar o estudo da lei natural que rege o
              Universo, da natureza, origem e destino dos Espíritos bem como de
              suas relações com o mundo corporal;
            </p>
            <p>
              <b>d)</b> oferecer ao evangelizando a oportunidade de perceber-se
              como homem integral, crítico, consciente, participativo, herdeiro
              de si mesmo, cidadão do Universo, agente de transformação de seu
              meio, rumo a toda perfeição de que é suscetível;
            </p>
            <p>
              <b>e)</b> conceder aos jovens oportunidades de desempenhar tarefas
              compatíveis com as suas capacidades e potencialidades na Casa
              Espírita Eurípedes Barsanulpho;
            </p>
            <p>
              <b>f)</b> conscientizar os jovens de que eles serão os
              continuadores nas atividades do Movimento Espírita;
            </p>
            <p>
              <b>g)</b> favorecer e incentivar o intercâmbio do jovem com outras
              juventudes de outras Casas Espíritas e sua integração no Movimento
              Espírita em geral.
            </p>
          </div>
          <RedirectSchedule />
        </section>
      </main>
      <Footer />
    </div>
  );
}
