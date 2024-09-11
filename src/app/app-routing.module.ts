import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"userDetails",component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
