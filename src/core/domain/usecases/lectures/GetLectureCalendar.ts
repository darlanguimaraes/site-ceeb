import type { Lecture } from "../../entities/Lecture";
import type { ILectureRepository } from "../../repositories/ILectureRepository";

export class GetLectureCalendar {
  private lectureRepository: ILectureRepository;

  constructor(lectureRepository: ILectureRepository) {
    this.lectureRepository = lectureRepository;
  }

  async execute(month: number, year: number): Promise<Lecture[]> {
    return this.lectureRepository.getByMonthAndYear(month, year);
  }
}
