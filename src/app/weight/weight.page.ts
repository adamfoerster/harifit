import { Objective } from './../interfaces';
import { ObjectiveService } from './../core/objective.service';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { CoreService } from '../core/core.service';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';
import { PopoverController } from '@ionic/angular';

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
  dialog: any;

  constructor(
    public core: CoreService,
    public objService: ObjectiveService,
    public popoverCtrl: PopoverController
  ) {}

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
    this.createDialog(ProgressDialogComponent).then(_ => this.getObjective());
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

  async createDialog(component) {
    this.dialog = await this.popoverCtrl.create({
      component: component,
      translucent: true
    });
    await this.dialog.present();
    return this.dialog.onDidDismiss();
  }

  closeDialog() {
    if (!this.dialog) {
      return null;
    }
    this.dialog.dismiss();
  }
}
