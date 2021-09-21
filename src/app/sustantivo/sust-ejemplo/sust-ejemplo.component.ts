import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-sust-ejemplo',
  templateUrl: './sust-ejemplo.component.html',
  styleUrls: ['./sust-ejemplo.component.scss'],
  animations:[ trigger('entrada',[
    state('void', style({
      transform: 'translateX(-40%)',
      background: "blue" ,
      opacity: 0
    })),

    transition(":enter", [
      animate(800, style({
        transform: 'translateX(0%)',
        background: "light-blue" ,
        opacity: 1

      })),

          ])

         
  ] )

  ]
})
export class SustEjemploComponent implements OnInit {

    public seleccion: string;
    public mensaje: string;
    public contador:number;
    

  constructor() { 

          
          this.seleccion="";
          this.mensaje="";
          this.contador=0;
         
         
  }

  ngOnInit(): void {
  }
  probar(){
    
        this.mensaje="acertada";
        this.contador++;
      

  }
  mal(){
    this.contador--;
    this.mensaje="opción incorrecta";
 
  }
  
  }

  





