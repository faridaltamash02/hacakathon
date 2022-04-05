import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from './directives/sort.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.modules';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpServicesService } from './common/http-services.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddHackathonComponent } from './add-hackathon/add-hackathon.component';
import { EditHacakathonComponent } from './edit-hacakathon/edit-hacakathon.component'; 

@NgModule({
  declarations: [  
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AddHackathonComponent,
    SortDirective,
    EditHacakathonComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
