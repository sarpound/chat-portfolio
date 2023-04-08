import { Component, Input } from '@angular/core';

@Component({
  selector: 'apps-button',
  templateUrl: './apps-button.component.html',
  styleUrls: ['./apps-button.component.less']
})
export class AppsButtonComponent {

  @Input() icon = 'help';
  @Input() label = 'unknown';
  @Input() isActive = false;

}
