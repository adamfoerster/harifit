import { Component } from '@angular/core';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public core: CoreService) {}

}
