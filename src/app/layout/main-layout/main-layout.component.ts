import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(private dataService: DataService) {
    this.dataService.getFeedbackList();
  }
}
