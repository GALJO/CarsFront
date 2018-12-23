import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { DataElementComponent } from './data-element/data-element.component';
import { GearboxesComponent } from './car/gearboxes/gearboxes.component';
import { EnginesComponent } from './car/engines/engines.component';
import { BodyTypesComponent } from './car/body-types/body-types.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    CarListComponent,
    CarComponent,
    DataElementComponent,
    GearboxesComponent,
    EnginesComponent,
    BodyTypesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
