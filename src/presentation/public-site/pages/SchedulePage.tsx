import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const borderCell = "border border-slate-400 px-2 py-2";
const labelCell = `${borderCell} flex items-center justify-center text-center font-medium`;
const middleCell = `border-t border-b border-slate-400 px-2 py-2 flex flex-col items-center justify-center`;
const rightCell = `${borderCell} flex flex-col items-center justify-center`;
const spacer = "h-2";

const activities = [
  {
    label: "Palestras Doutrinárias",
    days: ["Segundas-Feiras", "Quintas-Feiras"],
    times: ["19:30", "20:00"],
    wide: false,
  },
  {
    label: "Estudo do Evangelho",
    days: ["Sábados"],
    times: ["19:00"],
    wide: false,
  },
  {
    label: "Estudo da Doutrina Espírita",
    days: ["Segundas-Feiras", "Quintas-Feiras"],
    times: ["20:30 - 21:30", "21:00 - 22:00"],
    wide: false,
  },
  {
    label: "Cirurgias Espirituais",
    days: ["Sábados"],
    times: ["14:00 - 17:00"],
    wide: false,
  },
  {
    label: "Desobsessão",
    days: ["Sextas-Feiras"],
    times: ["18:00 - 20:00"],
    wide: false,
  },
  {
    label: "Equilíbrio Espiritual",
    days: ["Sábados"],
    times: ["14:00 - 17:00"],
    wide: false,
  },
  {
    label: "Atendimento Fraterno",
    info: "Quintas após a palestra doutrinária\nSábados após o estudo do evangelho",
    wide: true,
  },
  {
    label: "Evangelização Infanto-juvenil",
    info: "Quintas e Sábados durante as palestras",
    wide: true,
  },
  {
    label: "Recreação",
    info: "Segundas durante as palestras",
    wide: true,
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-6">Horários</h1>

          <div className="w-full">
            {/* Header */}
            <div className={`${borderCell} text-center font-bold text-base`}>
              Atividades
            </div>

            {activities.map((activity, i) => (
              <div key={i}>
                <div className={spacer} />
                {activity.wide ? (
                  <div className="grid grid-cols-3">
                    <div className={labelCell}>{activity.label}</div>
                    <div
                      className={`col-span-2 border-t border-b border-r border-slate-400 px-2 py-2 flex flex-col items-center justify-center text-center`}
                    >
                      {activity.info?.split("\n").map((line, j) => (
                        <span key={j}>{line}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3">
                    <div className={labelCell}>{activity.label}</div>
                    <div className={middleCell}>
                      {activity.days?.map((day, j) => (
                        <span key={j} className="text-center">
                          {day}
                        </span>
                      ))}
                    </div>
                    <div className={rightCell}>
                      {activity.times?.map((time, j) => (
                        <span key={j} className="text-center">
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
