import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, HttpClientModule,ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('Form should be invalid', waitForAsync (() => {
      component.loginForm.controls['user_id'].setValue('');
      expect(component.loginForm.valid).toBeFalsy();
  }))

  it('Should set submitted to true', waitForAsync(() => {
    component.loginUser();
    expect(component.loginUser).toBeTruthy();
 }));

 it('should able to logon on success', () => {
  component.loginUser();
  expect(component.inValidLogin).toBeFalsy();
})

});
