import type { Lecture } from "../entities/Lecture";

export interface ILectureRepository {
  getByMonthAndYear(month: number, year: number): Promise<Lecture[]>;
}
