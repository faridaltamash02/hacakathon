import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: any;
  constructor(private route: Router) {
    
  }
  
  
  ngOnInit(): void {
  }

  logOut(){
    sessionStorage.setItem('user_id', '');
    this.route.navigate(['/login']);
  }

}
