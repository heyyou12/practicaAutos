import { Component } from '@angular/core';

interface Auto {
  marca:string,
  precio:number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  carro: Auto []= [];

  nuevo:Auto = {
    marca: '',
    precio: 0
  }

}
