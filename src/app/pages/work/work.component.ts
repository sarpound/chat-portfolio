import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})

export class WorkComponent implements OnInit {
  public showFXForwards: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['work-project'] === 'fxforwards') {
        this.showFXForwards = true;
      } else {
        this.showFXForwards = false;
      }
    });
  }
}
