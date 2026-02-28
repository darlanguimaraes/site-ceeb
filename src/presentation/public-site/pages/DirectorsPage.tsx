import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import DirectorListItem from "../components/DirectorListItem";

export default function DirectorsPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-8xl mx-auto">
        <section className="px-4 md:px-12 py-20">
          <h1 className="text-2xl font-bold text-primary mb-8">
            Membros da Diretoria da Casa Espírita Eurípedes Barsanulpho
          </h1>
          <ul className="flex items-center justify-center flex-col list-disc ">
            <DirectorListItem name="Rosângela A. T." role="Presidente" />
            <DirectorListItem name="José G. R." role="Vice-Presidente" />
            <DirectorListItem name="Letícia M. L." role="Secretária" />
            <DirectorListItem name="Renan G. R." role="Tesoureiro" />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
