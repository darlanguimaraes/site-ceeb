import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import DailyMessage from "../components/DailyMessage";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />

      <main className="max-w-8xl mx-auto">
        <Hero />

        <section className="px-4 md:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <LatestNews />
            <DailyMessage />
          </div>
          <div className="max-w-8xl mx-auto px-4 md:px-12 mt-8 text-xl font-bold text-slate-500">
            A Casa Espírita Eurípedes Barsanulpho informa a todos os seus
            frequentadores que as campanhas de doação são promovidas sempre pela
            própria Instituição. Portanto, nenhuma pessoa física ou jurídica
            possui autorização para angariar doações em nome da Instituição, sob
            pena das responsabilizações previstas na Legislação Brasileira.
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
