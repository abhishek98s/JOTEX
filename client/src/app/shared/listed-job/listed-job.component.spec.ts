import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedJobComponent } from './listed-job.component';

describe('ListedJobComponent', () => {
  let component: ListedJobComponent;
  let fixture: ComponentFixture<ListedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
