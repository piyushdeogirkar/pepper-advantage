export class FeedbackList {
  feedback: string;
  rating: number;
  date: Date;

  constructor() {
    this.feedback = '';
    this.rating = 0;
    this.date = new Date();
  }
}