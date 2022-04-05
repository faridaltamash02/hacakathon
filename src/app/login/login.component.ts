import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HttpServicesService } from '../common/http-services.service';
import { User } from '../model/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private fb: FormBuilder, private router: Router, private httpService: HttpServicesService) { }
  loginForm: FormGroup;
  inValidLogin: boolean = false;
  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.loginForm = this.fb.group({
      user_id: ['', Validators.required],
    })
  }
  loginUser(){
    let userId: number = parseInt(this.loginForm.value.user_id);
    this.httpService.searchData().subscribe((resp) => {
      if(resp.indexOf(userId) > -1 ){
        sessionStorage.setItem('user_id', ''+userId);
        this.inValidLogin = false;
        this.router.navigate(['/dashboard']);
      }else{
        this.inValidLogin = true;
      }
    })
  }

}
