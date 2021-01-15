import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonPhoneMainComponent } from './person-phone-main/person-phone-main.component';
import { PhoneTypeComponent } from './phone-type/phone-type.component';

const routes: Routes = [

  {path:'personPhone', component:PersonPhoneMainComponent},
  {path:'phoneType', component:PhoneTypeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
