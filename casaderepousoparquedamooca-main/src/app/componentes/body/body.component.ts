import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  images = [
    '/assets/imagens/foto1.jpg',
    '/assets/imagens/foto2.jpg',
    '/assets/imagens/foto3.jpg',
    '/assets/imagens/foto4.jpg',
    '/assets/imagens/foto5.jpg'
  ];

  selectedImage: string | undefined;

  selectImage(image: string) {
    this.selectedImage = image;
  }
}


