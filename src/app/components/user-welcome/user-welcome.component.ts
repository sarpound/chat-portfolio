import { Component, OnInit } from '@angular/core';
import { getGreeting } from 'src/app/shared/utils/date.util';

@Component({
  selector: 'user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.less']
})
export class UserWelcomeComponent implements OnInit {

  greeting: string = 'Good day!';

  ngOnInit(): void {
    this.greeting = getGreeting();
  }
}
