import type { Lecture } from "../../domain/entities/Lecture";
import type { ILectureRepository } from "../../domain/repositories/ILectureRepository";
import { api } from "../http/api";

interface LectureCalendarResponse {
  data: Lecture[];
}

export class LectureRepository implements ILectureRepository {
  async getByMonthAndYear(month: number, year: number): Promise<Lecture[]> {
    const response = await api.get<LectureCalendarResponse>(
      `/lectureCalendar/api?month=${month}&year=${year}`,
    );
    return response.data;
  }
}
