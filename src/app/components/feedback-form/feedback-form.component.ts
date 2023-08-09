import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/shared/constants';
import { Location } from '@angular/common';
import { DataService } from 'src/app/shared/data.service';
import { FeedbackList } from 'src/app/shared/feedbackVm';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  feedbackForm!: FormGroup;
  submitted = false;
  feedbackList: FeedbackList[] = []
  stars: { "position": number, selected: boolean }[] = [{ position: 1, selected: false }, { position: 2, selected: false }, { position: 3, selected: false }, { position: 4, selected: false }, { position: 5, selected: false }];
  selectedRating: number = 0;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public location: Location,
    private dataService: DataService
  ) {
    //feedback form
    this.feedbackForm = this.fb.group({
      description: ['', [Validators.required]],
    });

    this.feedbackList = JSON.parse(sessionStorage.getItem('feedback')!)
  }

  //get validators
  get validators() {
    return this.feedbackForm.controls;
  }

  //login
  submitFeedback() {
    this.toastr.clear();
    this.submitted = true;
    if (this.feedbackForm.valid) {
      this.feedbackList.push({ feedback: this.feedbackForm.value.description, rating: this.selectedRating, date: new Date() });
      sessionStorage.setItem('feedback', JSON.stringify(this.feedbackList));
      this.toastr.success('Feedback Submit successfully');
      this.router.navigate(['/home']);
    }
  }

  //on rating change
  onRating(rating: { "position": number, selected: boolean }, index: number) {
    this.resetRating();
    this.selectedRating = rating.position;
    for (let i = 0; i < rating.position; i++) {
      this.stars[i].selected = true;
    }
  }

  //reset rating
  resetRating() {
    this.stars = [{ position: 1, selected: false }, { position: 2, selected: false }, { position: 3, selected: false }, { position: 4, selected: false }, { position: 5, selected: false }];
  }
}
