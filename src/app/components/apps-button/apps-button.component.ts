import { Component, Input } from '@angular/core';

@Component({
  selector: 'apps-button',
  templateUrl: './apps-button.component.html',
  styleUrls: ['./apps-button.component.less']
})
export class AppsButtonComponent {

  @Input() width = '';
  @Input() height = '';
  @Input() icon = 'help';
  @Input() label = 'unknown';
  @Input() isActive = false;
  @Input() borderRadius = '0%';
  @Input() padding = '5px';
}
