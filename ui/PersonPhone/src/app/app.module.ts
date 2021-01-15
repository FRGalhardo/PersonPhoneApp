import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonPhoneMainComponent } from './person-phone-main/person-phone-main.component';
import { PhoneTypeComponent } from './phone-type/phone-type.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditPpmComponent } from './person-phone-main/add-edit-ppm/add-edit-ppm.component';
import { AddEditPtComponent } from './phone-type/add-edit-pt/add-edit-pt.component';
import { ShowPpmComponent } from './person-phone-main/show-ppm/show-ppm.component';
import { ShowPtComponent } from './phone-type/show-pt/show-pt.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonPhoneMainComponent,
    PhoneTypeComponent,
    ShowPpmComponent,
    AddEditPpmComponent,
    AddEditPtComponent,
    ShowPtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
