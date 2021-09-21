import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
  animations:[ trigger('entrada',[
    state('void', style({
      transform: 'translateX(300%)',
      opacity: 0
    })),

    transition(":enter", [
      animate(800, style({
        transform: 'translateX(0%)',
        opacity: 1

      })),
    ])
  ] )

  ]

  
})
export class EjercicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
}
