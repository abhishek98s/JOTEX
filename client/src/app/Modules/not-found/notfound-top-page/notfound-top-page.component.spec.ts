import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundTopPageComponent } from './notfound-top-page.component';

describe('NotfoundTopPageComponent', () => {
  let component: NotfoundTopPageComponent;
  let fixture: ComponentFixture<NotfoundTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundTopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
