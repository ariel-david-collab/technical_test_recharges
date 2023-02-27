import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule as MatFormModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechargesComponent } from './recharges/recharges.component';
import { ObtainAllComponent } from './recharges/obtain-all/obtain-all.component';
import { SaveComponent } from './recharges/save/save.component';
import { AddRechargeModalComponent } from './recharges/add-recharge-modal/add-recharge-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RechargesComponent,
    ObtainAllComponent,
    SaveComponent,
    AddRechargeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormModule,
    MatFormModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

