import { LowerCasePipe } from '@angular/common';
import { Component  } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent {


    
    public verbo: String;
    public verbo2: String;
    public verbo3: String;
    public ejemplo:string;
    public mensaje:string;
    public mensaje2:string;
    public mensaje3:string;
 

constructor() { 

this.verbo= "";
this.verbo2= "";
this.verbo3= "";
this.ejemplo="";
this.mensaje="";
this.mensaje2="";
this.mensaje3="";
}


comprobar(){


if (this.verbo==="saltó"){
this.mensaje="correcto";
}else{
this.mensaje="sigue probando";
}

}
comprobar2(){


if (this.verbo2==="correrán"){
this.mensaje2="correcto";
  }else{
this.mensaje2="sigue probando";
 }
}
comprobar3(){


if (this.verbo3==="hubiera escrito"){
this.mensaje3="correcto";
  }else{
this.mensaje3="sigue probando";
 }

}



}


