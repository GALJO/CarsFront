import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car-list/car/car.component';
import { DataElementComponent } from './data-element/data-element.component';
import { GearboxesComponent } from './car-list/car/gearboxes/gearboxes.component';
import { EnginesComponent } from './car-list/car/engines/engines.component';
import { BodyTypesComponent } from './car-list/car/body-types/body-types.component';
import { DataRangeElementComponent } from './data-range-element/data-range-element.component';
import { AppRoutingModule } from './app-routing.module';
import { CarEditComponent } from './car-edit/car-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    CarListComponent,
    CarComponent,
    DataElementComponent,
    GearboxesComponent,
    EnginesComponent,
    BodyTypesComponent,
    DataRangeElementComponent,
    CarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
