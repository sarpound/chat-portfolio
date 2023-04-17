import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPortraitBarComponent } from './app-portrait-bar.component';

describe('AppPortraitBarComponent', () => {
  let component: AppPortraitBarComponent;
  let fixture: ComponentFixture<AppPortraitBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPortraitBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPortraitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
