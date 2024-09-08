import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFxforwardComponent } from './app-fxforward.component';

describe('AppFxforwardComponent', () => {
  let component: AppFxforwardComponent;
  let fixture: ComponentFixture<AppFxforwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFxforwardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFxforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
