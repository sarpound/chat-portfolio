import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-fxforward',
  standalone: true,
  imports: [ CommonModule, MatExpansionModule ],
  templateUrl: './app-fxforward.component.html',
  styleUrl: './app-fxforward.component.less'
})
export class AppFxforwardComponent {

}
