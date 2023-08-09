import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { FeedbackList } from 'src/app/shared/feedbackVm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  feedbackList: FeedbackList[] = []
  constructor(private dataService: DataService) {
    console.log(this.feedbackList);
    this.feedbackList = JSON.parse(sessionStorage.getItem('feedback')!)
  }
}
