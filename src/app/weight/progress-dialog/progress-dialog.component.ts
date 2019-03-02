import {
  Component,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ObjectiveService } from 'src/app/core/objective.service';
import * as dayjs from 'dayjs';
import { Objective } from 'src/app/interfaces';
import { CoreService } from 'src/app/core/core.service';
import { PopoverController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-progress-dialog',
  templateUrl: './progress-dialog.component.html',
  styleUrls: ['./progress-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressDialogComponent implements AfterViewInit, OnDestroy {
  month: string = dayjs(new Date())
    .locale('pt-br')
    .format('MMMM');
  objective: Objective;
  previousMonth = new Date().getMonth();
  currentWeight: number = null;
  currentProgress = 0;
  intFocus: any;
  @ViewChild('weight') weight: IonInput;

  constructor(
    public core: CoreService,
    public objService: ObjectiveService,
    public popoverCtrl: PopoverController,
    private app: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.getObjective();
    this.intFocus = setInterval(_ => this.weight.setFocus(), 300);
  }

  getObjective() {
    this.objService.myObjective$.subscribe(obj => {
      this.objective = obj;
      this.currentWeight = obj.progress[this.previousMonth + 1]
        ? obj.progress[this.previousMonth + 1]
        : obj.progress[this.previousMonth];
      this.app.detectChanges();
      this.weight.setFocus();
    });
  }

  setProgress(weight) {
    this.objService.setMonthProgress(weight).subscribe(_ => {
      this.getObjective();
      this.popoverCtrl.dismiss();
    });
  }

  ngOnDestroy() {
    clearInterval(this.intFocus);
  }
}
