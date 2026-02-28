import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import RedirectSchedule from "../components/RedirectSchedule";
import LectureCard from "../components/LectureCard";
import { useLectureCalendar } from "../../../shared/hooks/useLectureCalendar";

export default function ScalePage() {
  const now = new Date();
  const { lectures, loading, error } = useLectureCalendar(
    now.getMonth() + 1,
    now.getFullYear(),
  );

  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Escala de Exposições Doutrinárias
          </h1>

          {loading && (
            <p className="text-slate-400 text-sm text-center py-8">
              Carregando escala...
            </p>
          )}

          {error && (
            <p className="text-red-500 text-sm text-center py-8">
              Erro ao carregar a escala
            </p>
          )}

          {!loading && !error && lectures.length === 0 && (
            <p className="text-slate-400 text-sm text-center py-8">
              Nenhuma exposição encontrada para este mês.
            </p>
          )}

          {!loading &&
            !error &&
            lectures.map((lecture) => (
              <LectureCard
                key={lecture.id}
                date={new Date(lecture.date)}
                lecturer={lecture.speaker.name}
                location={lecture.speaker.house}
              />
            ))}

          <RedirectSchedule />
        </section>
      </main>
      <Footer />
    </div>
  );
}
