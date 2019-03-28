import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  chart: Chart;
  @Input() id = 'canvas';
  @Input()
  set progress(months) {
    if (months === this._prevProgress) {
      return;
    }
    this._prevProgress = months;
    if (months) {
      this._progress = [];
      this._progress.push(months[1]);
      if (months[2]) {
        this._progress.push(months[2]);
      }
      if (months[3]) {
        this._progress.push(months[3]);
      }
      if (months[4]) {
        this._progress.push(months[4]);
      }
      if (months[5]) {
        this._progress.push(months[5]);
      }
      if (months[6]) {
        this._progress.push(months[6]);
      }
      if (months[7]) {
        this._progress.push(months[7]);
      }
      if (months[8]) {
        this._progress.push(months[8]);
      }
      if (months[9]) {
        this._progress.push(months[9]);
      }
      if (months[10]) {
        this._progress.push(months[10]);
      }
      if (months[11]) {
        this._progress.push(months[11]);
      }
      if (months[12]) {
        this._progress.push(months[12]);
      }
    } else {
      this._progress = [];
    }
  }
  _prevProgress: any = null;
  _progress: any = [];

  @Input()
  objective = 0;

  calculate(month) {
    return dayjs(new Date(`2019-${month}`))
      .locale('pt-br')
      .format('MMMM');
  }

  constructor() { }

  ngOnInit() {
    const months = this._prevProgress;
    const diff = ((months[1] ? months[1] : 100) - this.objective) / 11;
    this.chart = new Chart(this.id, {
      type: 'line',
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        datasets: [
          {
            label: 'Progresso',
            data: this._progress,
            backgroundColor: ['rgba(255, 99, 132, 0.2)']
          },
          {
            label: 'Linha Ideal',
            data: [
              this.objective + diff * 11,
              this.objective + diff * 10,
              this.objective + diff * 9,
              this.objective + diff * 8,
              this.objective + diff * 7,
              this.objective + diff * 6,
              this.objective + diff * 5,
              this.objective + diff * 4,
              this.objective + diff * 3,
              this.objective + diff * 2,
              this.objective + diff,
              this.objective
            ],
            backgroundColor: ['rgba(54, 162, 235, 0.2)']
          }
        ]
      }
    });
  }
}
