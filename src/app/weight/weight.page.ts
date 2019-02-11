import { Objective } from './../interfaces';
import { ObjectiveService } from './../core/objective.service';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { CoreService } from '../core/core.service';
import { ProgressDialogComponent } from '../core/progress-dialog/progress-dialog.component';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss']
})
export class WeightPage implements OnInit {
  month: string = dayjs(new Date())
    .locale('pt-br')
    .format('MMMM');
  objective: Objective;
  previousMonth = new Date().getMonth();
  currentWeight = 0;
  currentProgress = 0;

  constructor(public core: CoreService, public objService: ObjectiveService) {}

  ngOnInit() {
    this.getObjective();
    this.progressDialog();
  }

  calculateProgress() {
    if (!this.currentWeight) {
      return null;
    }
    this.currentProgress =
      this.objective.progress[this.previousMonth] - this.currentWeight;
  }

  progressDialog() {
    this.core
      .createDialog(ProgressDialogComponent)
      .then(_ => this.getObjective());
  }

  getObjective() {
    this.objService.myObjective$.subscribe(obj => {
      this.objective = obj;
      this.currentWeight = obj.progress[this.previousMonth + 1]
        ? obj.progress[this.previousMonth + 1]
        : obj.progress[this.previousMonth];
    });
    this.calculateProgress();
  }

  setProgress(weight) {
    this.objService
      .setMonthProgress(weight)
      .subscribe(_ => this.getObjective());
  }
}
