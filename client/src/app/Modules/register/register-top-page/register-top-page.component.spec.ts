import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTopPageComponent } from './register-top-page.component';

describe('RegisterTopPageComponent', () => {
  let component: RegisterTopPageComponent;
  let fixture: ComponentFixture<RegisterTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
