import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//rutas import
import { AppRoutingModule } from './app-routing.module';


//componentes import
import { HomeComponent } from './home/home.component';
import { PresentacionComponent } from './verbo/presentacion/presentacion.component';
import { GerundioComponent } from './verbo/gerundio/gerundio.component';
import { SustHomeComponent } from './sustantivo/sust-home/sust-home.component';
import { EjercicioComponent } from './sustantivo/ejercicio/ejercicio.component';
import { SustEjemploComponent } from './sustantivo/sust-ejemplo/sust-ejemplo.component';

//material import 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

//modulos para animaciones

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
//modulo para drag and drop

import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentacionComponent,
    GerundioComponent,
    SustHomeComponent,
    EjercicioComponent,
    SustEjemploComponent
      
    
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
    MatToolbarModule,
    MatCardModule,
    DragDropModule
    
    
  ],
  providers:  [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
