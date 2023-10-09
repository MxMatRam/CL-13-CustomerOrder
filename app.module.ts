import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { FirstFiveComponent } from './first-five/first-five.component';
import { AllOthersComponent } from './all-others/all-others.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDashboardComponent,
    FirstFiveComponent,
    AllOthersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }