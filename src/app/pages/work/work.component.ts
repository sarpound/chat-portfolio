import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})

export class WorkComponent implements OnInit {
  public showWorkProjects: boolean = true;
  public showFXForwards: boolean = false;
  public showParticleAppProxy: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['projects'] === 'fxforwards') {
        this.showWorkProjects = false;
        this.showFXForwards = true;
      } else if (params['projects'] === 'particle-app-proxy') {
        this.showWorkProjects = false;
        this.showParticleAppProxy = true;
      } else {
        this.showWorkProjects = true;
        this.showFXForwards = false;
        this.showParticleAppProxy = false;
      }
    });
  }
}
