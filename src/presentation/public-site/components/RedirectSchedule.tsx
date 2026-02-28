export default function RedirectSchedule() {
  return (
    <a
      href="/horarios"
      className="flex flex-col items-center justify-center w-full py-4"
    >
      <div className="flex flex-row items-center gap-4">
        <span className="mb-2">
          {/* Material Symbols or Heroicons clock icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </span>
        <h3 className="text-xl font-bold text-primary tracking-tight text-center">
          Consulte nossos horários
        </h3>
      </div>
    </a>
  );
}
