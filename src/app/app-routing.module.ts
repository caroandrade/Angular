import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component'; //home
// verbo 
import { PresentacionComponent} from './verbo/presentacion/presentacion.component';
import { GerundioComponent } from './verbo/gerundio/gerundio.component';
//sustantivo
import { SustHomeComponent } from './sustantivo/sust-home/sust-home.component';
import { EjercicioComponent } from './sustantivo/ejercicio/ejercicio.component';




const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component:HomeComponent},
      { path: "Verbo-Presentacion", component: PresentacionComponent},
      {path: "Verbo-Ejercicio", component: GerundioComponent},
      {path: "Sust-Presentacion", component: SustHomeComponent},
      {path: "Sust-Ejercicio", component: EjercicioComponent},
      {path: '**', component:HomeComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


 }

