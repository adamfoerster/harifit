import { Component, OnInit } from '@angular/core';
import { ObjectiveService } from 'src/app/core/objective.service';
import * as dayjs from 'dayjs';
import { Objective } from 'src/app/interfaces';
import { CoreService } from 'src/app/core/core.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-progress-dialog',
  templateUrl: './progress-dialog.component.html',
  styleUrls: ['./progress-dialog.component.scss']
})
export class ProgressDialogComponent implements OnInit {
  month: string = dayjs(new Date()).locale('pt-br').format('MMMM');
  objective: Objective;
  previousMonth = new Date().getMonth();
  currentWeight = 0;
  currentProgress = 0;

  constructor(public core: CoreService, public objService: ObjectiveService, 
    public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  getObjective() {
    this.objService.myObjective$.subscribe(obj => {
      this.objective = obj;
      this.currentWeight = obj.progress[this.previousMonth + 1]
        ? obj.progress[this.previousMonth + 1]
        : obj.progress[this.previousMonth];
    });
  }

  setProgress(weight) {
    this.objService.setMonthProgress(weight).subscribe(_ => {
      this.getObjective();
      this.popoverCtrl.dismiss();
    });
  }

}
