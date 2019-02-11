import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphComponent implements OnInit {
  @Input()
  set progress(months) {
    if (months === this._prevProgress) {
      return;
    }
    this._prevProgress = months;
    if (months) {
      this._progress = [];
      this._progress.push({ name: 'Janeiro', value: months[1] });
      if (months[2]) {
        this._progress.push({ name: 'Fevereiro', value: months[2] });
      }
      if (months[3]) {
        this._progress.push({ name: 'Março', value: months[3] });
      }
      if (months[4]) {
        this._progress.push({ name: 'Abril', value: months[4] });
      }
      if (months[5]) {
        this._progress.push({ name: 'Maio', value: months[5] });
      }
      if (months[6]) {
        this._progress.push({ name: 'Junho', value: months[6] });
      }
      if (months[7]) {
        this._progress.push({ name: 'Julho', value: months[7] });
      }
      if (months[8]) {
        this._progress.push({ name: 'Agosto', value: months[8] });
      }
      if (months[9]) {
        this._progress.push({ name: 'Setembro', value: months[9] });
      }
      if (months[10]) {
        this._progress.push({ name: 'Outubro', value: months[10] });
      }
      if (months[11]) {
        this._progress.push({ name: 'Novembro', value: months[11] });
      }
      if (months[12]) {
        this._progress.push({ name: 'Dezembro', value: months[12] });
      }
    } else {
      this._progress = [];
    }
  }
  _prevProgress: any = null;
  _progress: any = [];

  @Input()
  objective = 0;

  get chartData() {
    return [this.idealLine, { name: 'Progresso', series: this._progress }];
  }

  get idealLine() {
    if (!this._prevProgress) {
      return { name: 'Linha Ideal', series: [] };
    }
    const months = this._prevProgress;
    const diff = ((months[1] ? months[1] : 100) - this.objective) / 12;
    return {
      name: 'Linha Ideal',
      series: [
        { name: 'Janeiro', value: this.objective + diff * 12 },
        { name: 'Fevereiro', value: this.objective + diff * 11 },
        { name: 'Março', value: this.objective + diff * 9 },
        { name: 'Abril', value: this.objective + diff * 8 },
        { name: 'Maio', value: this.objective + diff * 7 },
        { name: 'Junho', value: this.objective + diff * 6 },
        { name: 'Julho', value: this.objective + diff * 5 },
        { name: 'Agosto', value: this.objective + diff * 4 },
        { name: 'Setembro', value: this.objective + diff * 3 },
        { name: 'Outubro', value: this.objective + diff * 2 },
        { name: 'Novembro', value: this.objective + diff },
        { name: 'Dezembro', value: this.objective }
      ]
    };
  }

  calculate(month) {
    return dayjs(new Date(`2019-${month}`))
      .locale('pt-br')
      .format('MMMM');
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() {
    // this.randomize();
  }

  ngOnInit() {}
}
