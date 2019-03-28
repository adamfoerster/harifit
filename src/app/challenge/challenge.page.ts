import { Component, OnInit } from '@angular/core';
import { Objective } from '../interfaces';
import { ObjectiveService } from '../core/objective.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {
  objective: Objective;
  currentWeight = 0;
  currentProgress = 0;
  previousMonth = new Date().getMonth();

  constructor(public objService: ObjectiveService) {}

  ngOnInit() {
    this.getObjective();
  }

  getObjective() {
    this.objService.john$.subscribe(obj => {
      console.log(obj);
      this.objective = obj;
      this.currentWeight = obj.progress[this.previousMonth + 1]
        ? obj.progress[this.previousMonth + 1]
        : obj.progress[this.previousMonth];
      this.calculateProgress();
    });
  }

  calculateProgress() {
    if (!this.currentWeight) {
      return null;
    }
    this.currentProgress =
      this.objective.progress[this.previousMonth] - this.currentWeight;
  }

}
