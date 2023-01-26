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

  carro: Auto []= [
    {
      marca: 'Volkswagen',
      precio: 50000
    },
    {
      marca: 'Renault',
      precio: 40000
    },
    {
      marca: 'Mazda',
      precio: 60000
    }
  ];


  nuevo:Auto = {
    marca: '',
    precio: 0
  }

  agregar(){
    this.carro.push(this.nuevo);
    console.log(this.nuevo);
  }

}
