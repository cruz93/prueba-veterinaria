import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
})
export class MainComponent {

  slides = [
    {
      img: 'https://uvm.mx/storage/app/uploads/public/667/5d7/153/6675d71531a93704776307.jpg',
      title: 'Cuidado Profesional',
      text: 'Tu mascota en las mejores manos con nuestros veterinarios expertos.'
    },
    {
      img: 'https://www.promedco.com/images/NOTICIAS_2020/reducir-estres-de-mascotas-1.jpg',
      title: 'Vacunación y Chequeo',
      text: 'Vacunas, desparasitación y chequeos completos para su salud.'
    },
    {
      img: 'https://vetmarketportal.com.ar/uploads/noticias/5/20231009103834_vete.jpg',
      title: 'Adopta una Mascota',
      text: 'Dale un hogar a una mascota necesitada. ¡Ven a conocerlas!'
    }
  ];

}
