import { Injectable } from '@angular/core';
import { FeedbackList } from './feedbackVm';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  feedbackList: FeedbackList[] = []
  constructor() { }

  getFeedbackList() {
    this.feedbackList = [
      {
        feedback: 'Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue',
        rating: 3,
        date: new Date(2023, 8, 4)
      },
      {
        feedback: 'What could have been a biting dark comedy is, instead, uninspired and generic. The contrived, everybody happy finale just makes things worse.',
        rating: 3,
        date: new Date(2023, 8, 5)
      }
    ];

    sessionStorage.setItem('feedback', JSON.stringify(this.feedbackList));
  }
}
