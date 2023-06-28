import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTopPageComponent } from './login-top-page.component';

describe('LoginTopPageComponent', () => {
  let component: LoginTopPageComponent;
  let fixture: ComponentFixture<LoginTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
