import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAdviceComponent } from './careers-advice.component';

describe('CareersAdviceComponent', () => {
  let component: CareersAdviceComponent;
  let fixture: ComponentFixture<CareersAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
