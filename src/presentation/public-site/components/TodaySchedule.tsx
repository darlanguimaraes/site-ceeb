export default function TodaySchedule() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-primary tracking-tight">
          Today's Schedule
        </h3>
        <span className="text-xs font-bold text-slate-400 uppercase">
          Nov 08, 2024
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-6 p-6 bg-slate-50 border-l-4 border-primary group hover:bg-white transition-all shadow-sm">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-primary">18:30</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              PM
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200"></div>
          <div>
            <p className="font-bold text-slate-900">Fraternal Assistance</p>
            <p className="text-xs text-slate-500 font-medium">
              Room 102 • Walk-ins
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 p-6 bg-white border border-slate-100 group hover:border-primary/20 transition-all">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-400">20:00</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              PM
            </span>
          </div>
          <div className="h-10 w-px bg-slate-100"></div>
          <div>
            <p className="font-bold text-slate-900">
              Public Lecture &amp; Healing
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Main Auditorium
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 p-6 bg-white border border-slate-100 group hover:border-primary/20 transition-all">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-400">21:15</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              PM
            </span>
          </div>
          <div className="h-10 w-px bg-slate-100"></div>
          <div>
            <p className="font-bold text-slate-900">Online Gospel Study</p>
            <p className="text-xs text-slate-500 font-medium">YouTube Live</p>
          </div>
        </div>
      </div>

      <button className="w-full py-4 border-2 border-primary/10 text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
        Full Weekly Calendar
      </button>
    </div>
  );
}
