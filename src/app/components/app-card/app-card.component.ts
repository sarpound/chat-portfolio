import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,

  ],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.less'
})
export class AppCardComponent {
  @Input() title: string = '#title';
  @Input() description: string = '#decripion';
  @Input() techStack: string = '#tech stack';
  @Input() open: boolean = true;
  @Output() close = new EventEmitter<void>();

  closeCard() {
    this.open = false;
    this.close.emit();
  }
}
