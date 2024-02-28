import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fxforward',
  templateUrl: './app-fxforward.component.html',
  styleUrl: './app-fxforward.component.less',
  standalone: true,
  imports: [ CommonModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule ],
})
export class AppFxforwardComponent {

}
