import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon'

@Component({
  selector: 'app-sust-home',
  templateUrl: './sust-home.component.html',
  styleUrls: ['./sust-home.component.scss']
})
export class SustHomeComponent {
      public ejemplo: any[];
      


  constructor() { 
        this.ejemplo=["auto", "casa","mesa", "lapiz"]
  }
}

