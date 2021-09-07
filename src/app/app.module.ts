import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//rutas import
import { AppRoutingModule } from './app-routing.module';


//componentes import
import { HomeComponent } from './home/home.component';
import { PresentacionComponent } from './verbo/presentacion/presentacion.component';
import { GerundioComponent } from './verbo/gerundio/gerundio.component';

import { SustHomeComponent } from './sustantivo/sust-home/sust-home.component';

//material import 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';

//modulos para animaciones

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentacionComponent,
    GerundioComponent,
    SustHomeComponent
      
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatRadioModule,
    MatTooltipModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule
    
    
  ],
  providers:  [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
