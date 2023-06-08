import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsHeroComponent } from './jobs-hero.component';

describe('JobsHeroComponent', () => {
  let component: JobsHeroComponent;
  let fixture: ComponentFixture<JobsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
