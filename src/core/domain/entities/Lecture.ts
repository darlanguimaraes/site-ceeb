export interface Speaker {
  id: string;
  name: string;
  house: string;
}

export interface Lecture {
  id: string;
  date: string;
  speakerId: string;
  speaker: Speaker;
}
