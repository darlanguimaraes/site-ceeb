import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import atendimento from "../../../assets/atendimento.jpeg";
import RedirectSchedule from "../components/RedirectSchedule";

export default function FraternalAssistancePage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Atendimento Fraterno
          </h1>
          <img
            src={atendimento}
            alt="Atendimento Fraterno da Casa Espírita Eurípedes Barsanulpho"
            className="w-96 max-w-3xl mx-auto mb-8 rounded-lg shadow-md object-cover"
          />
          <div>
            O <b>Atendimento Fraterno</b> tem como objetivo acolher, auxiliar,
            orientar e encaminhar, quando necessário, para os tratamentos
            oferecidos pela Casa, por meio de um diálogo fraterno embasado nos
            princípios da Doutrina Espírita codificada por Allan Kardec e no
            Evangelho de Jesus.
            <br />
            <span className="font-bold mt-4 flex">
              Na Casa Espírita Eurípedes Barsanulpho, o Atendimento Fraterno é
              feito nos dias de exposições doutrinárias, ao término das mesmas,
              em sala reservada. Na Casa Espírita Eurípedes Barsanulho, o
              Atendimento Fraterno é feito nos dias de exposições doutrinárias,
              ao término das mesmas, em sala reservada.
            </span>
          </div>
          <RedirectSchedule />
        </section>
      </main>
      <Footer />
    </div>
  );
}
