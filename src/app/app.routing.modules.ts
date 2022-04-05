import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHackathonComponent } from './add-hackathon/add-hackathon.component';

const app_routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'addHackathon', component: AddHackathonComponent},
    { path: '**', pathMatch: 'full', component: LoginComponent } // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }