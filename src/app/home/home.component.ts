import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



abrirpaginaV(){
  window.open("https://www.youtube.com/watch?v=F31XS-rjABA");
}

abrirpaginaS(){
  window.open("https://www.youtube.com/watch?v=p0eyWoajuP8");
}



}