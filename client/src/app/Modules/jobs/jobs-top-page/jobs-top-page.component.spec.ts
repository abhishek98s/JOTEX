import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsTopPageComponent } from './jobs-top-page.component';

describe('JobsTopPageComponent', () => {
  let component: JobsTopPageComponent;
  let fixture: ComponentFixture<JobsTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsTopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
