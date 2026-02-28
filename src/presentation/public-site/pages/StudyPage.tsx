import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import estudo from "../../../assets/pentateuco.webp";
import RedirectSchedule from "../components/RedirectSchedule";

export default function StudyPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Estudo da Doutrina Espírita
          </h1>
          <img
            src={estudo}
            alt="Estudo da Doutrina Espírita na Casa Espírita Eurípedes Barsanulpho"
            className="w-96 max-w-3xl mx-auto mb-8 rounded-lg shadow-md object-cover"
          />
          <div>
            O Estudo da Doutrina Espírita é aberto ao público e visa
            proporcionar o conhecimento amplo da Doutrina Espírita codificada
            por Allan Kardec de forma regular, metódica, contínua, séria,
            sistematizada e totalmente gratuita. <br />
            Para maiores informações sobre os grupos de estudos novos ou em
            andamento, venha a nossa Casa nos dias de Exposição Doutrinária e
            procure um trabalhador do dia.
            <br />
            <span className="font-bold mt-4 flex">
              Para maiores informações sobre os grupos de estudos novos ou em
              andamento, venha a nossa Casa nos dias de Exposição Doutrinária e
              procure um trabalhador do dia.
            </span>
          </div>
          <RedirectSchedule />
        </section>
      </main>
      <Footer />
    </div>
  );
}
