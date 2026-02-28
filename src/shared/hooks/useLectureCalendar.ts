import { useEffect, useState } from "react";
import type { Lecture } from "../../core/domain/entities/Lecture";
import { GetLectureCalendar } from "../../core/domain/usecases/lectures/GetLectureCalendar";
import { LectureRepository } from "../../core/infrastructure/repositories/LectureRepository";

const lectureRepository = new LectureRepository();
const getLectureCalendar = new GetLectureCalendar(lectureRepository);

interface UseLectureCalendarState {
  lectures: Lecture[];
  loading: boolean;
  error: string | null;
}

export function useLectureCalendar(month: number, year: number) {
  const [state, setState] = useState<UseLectureCalendarState>({
    lectures: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchLectures() {
      setState({ lectures: [], loading: true, error: null });
      try {
        const lectures = await getLectureCalendar.execute(month, year);
        if (!cancelled) setState({ lectures, loading: false, error: null });
      } catch (err) {
        if (!cancelled)
          setState({
            lectures: [],
            loading: false,
            error: (err as Error).message,
          });
      }
    }

    fetchLectures();
    return () => {
      cancelled = true;
    };
  }, [month, year]);

  return state;
}
