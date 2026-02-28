import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export type LectureCardProps = {
  date: Date;
  lecturer: string;
  location: string;
};

export default function LectureCard({
  date,
  lecturer,
  location,
}: LectureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border-l-4 border-primary overflow-hidden flex flex-col p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <span className="text-primary text-xs font-bold uppercase tracking-wider">
          {dayjs(date).locale("pt-br").format("dddd, D [de] MMMM")}
        </span>
      </div>
      <h3 className="text-slate-900 text-lg font-bold leading-tight mb-2">
        {lecturer}
      </h3>
      <div className="flex items-center gap-2 text-slate-500">
        <span className="material-symbols-outlined text-[18px]">home</span>
        <span className="text-sm font-medium">{location}</span>
      </div>
    </div>
  );
}
