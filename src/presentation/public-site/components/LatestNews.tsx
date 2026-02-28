import LectureCard from "./LectureCard";

export default function LatestNews() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col  border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-primary tracking-tight">
          Agenda da Semana
        </h3>
        <LectureCard date={new Date()} lecturer="João Silva" location="CEEB" />
        <LectureCard date={new Date()} lecturer="João Silva" location="CEEB" />
        <LectureCard
          date={new Date()}
          lecturer="Estudo do Evangelho"
          location="CEEB"
        />
      </div>
    </div>
  );
}
