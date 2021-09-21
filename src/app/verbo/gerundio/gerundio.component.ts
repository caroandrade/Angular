import { Component } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-gerundio',
  templateUrl: './gerundio.component.html',
  styleUrls: ['./gerundio.component.scss'],
  animations:[ trigger('entrada',[
    state('void', style({
      transform: 'translateX(-500%)',
      

      opacity: 0
    })),

    transition(":enter", [
      animate(800, style({
        transform: 'translateX(50%)',
        
        opacity: 1

      })),
    ])
  ] )

  ]
})


export class GerundioComponent  {
    public respuesta: string;
    public gerundio : any[];
    public mensaje: string;
    
    public respuesta2: string;
    public gerundio2 : any[];
    public mensaje2: string;
   
  constructor() {
    this.respuesta="";
    this.gerundio =['leyendo', 'caminar', 'leer', 'leído'];
    this.mensaje="";

    this.respuesta2="";
    this.gerundio2=['estudió', 'estudiando', 'leyendo', 'estudiar'];
    this.mensaje2="";
  }
  comprobar(){
    
  if (this.respuesta==="leyendo"){
  this.mensaje="correcto";
  }else{
  this.mensaje="sigue probando";
  };
};

comprobar2(){
    
  if (this.respuesta2==="estudiando"){
  this.mensaje2="correcto";
  }else{
  this.mensaje2="sigue probando";
  };
};
}
