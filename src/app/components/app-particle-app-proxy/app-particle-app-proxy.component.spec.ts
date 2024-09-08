import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppParticleAppProxyComponent } from './app-particle-app-proxy.component';

describe('AppParticleAppProxyComponent', () => {
  let component: AppParticleAppProxyComponent;
  let fixture: ComponentFixture<AppParticleAppProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppParticleAppProxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppParticleAppProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
