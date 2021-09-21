
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { aparecer } from 'src/app/animaciones';

@Component({
  selector: 'app-sust-home',
  templateUrl: './sust-home.component.html',
  styleUrls: ['./sust-home.component.scss'],
  animations: [ 
          aparecer
         ]

 
})

export class SustHomeComponent {
      public ejemplo: any[];
      public mensaje: string;
      public ver= false;
      public tipoSust: any[];
      
      show = false;


  constructor() { 
        this.ejemplo=["auto", "casa","mesa", "lapiz"]
        this.mensaje="";
        this.tipoSust=["Sustantivos Masculinos y Femeninos.",
                        "Sustantivos Singulares y Plurales.",
                        "Sustantivos Propios y Comunes.",
                        "Sustantivos Abstractos y Concretos",
                        "Sustantivos Individuales y Colectivos",
                        "Sustantivos Contables e Incontables",
                        "Sustantivos Primitivos y Derivados",
                        "Sustantivos Compuestos"
                      ];
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }
  mostrar(){
    this.mensaje="casa - casas, auto- autos";
    this.ver = !this.ver;
  }
  get estado(){
    return this.ver ? 'show' : 'hide'

  }
}

