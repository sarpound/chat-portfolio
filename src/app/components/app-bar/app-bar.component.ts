import { Component } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.less']
})
export class AppBarComponent extends RouteService {

}
