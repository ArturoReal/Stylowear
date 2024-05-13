import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Producto } from '../../producto';
import { CommonModule } from '@angular/common';
import { LeftsideComponent } from '../leftside/leftside.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, CommonModule,LeftsideComponent],
  template: `
  <div class="container-fluid">
  <app-leftside></app-leftside>
  <div class='card-group d-flex' id="prod">
    <app-products
      *ngFor="let producto of listadeproductos"
      [producto]="producto">
    </app-products>
    </div>
  </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listadeproductos: Producto[] = [
    {
      nombre: "Camiseta deportiva",
      precio: 20,
      imagen: "https://cloud-media.tous.com/medias/sys_master/images/heb/h5f/11287124082718/product_295902506_1-20220516140030/product-295902506-1-20220516140030.jpg_515Wx515H"
    },
    {
      nombre: "Pantalones deportivos ligeros",
      precio: 25,
      imagen: "https://via.placeholder.com/500x300.png?text=Pantalones+Deportivos"
    },
    {
      nombre: "Sudadera con capucha",
      precio: 30,
      imagen: "https://via.placeholder.com/500x300.png?text=Sudadera+Con+Capucha"
    },
    {
      nombre: "Zapatillas para correr",
      precio: 50,
      imagen: "https://via.placeholder.com/500x300.png?text=Zapatillas+Para+Correr"
    },
    {
      nombre: "Pantalones deportivos ligeros",
      precio: 25,
      imagen: "https://via.placeholder.com/500x300.png?text=Pantalones+Deportivos"
    },
    {
      nombre: "Sudadera con capucha",
      precio: 30,
      imagen: "https://via.placeholder.com/500x300.png?text=Sudadera+Con+Capucha"
    },
    {
      nombre: "Zapatillas para correr",
      precio: 50,
      imagen: "https://via.placeholder.com/500x300.png?text=Zapatillas+Para+Correr"
    },
    {
      nombre: "Pantalones deportivos ligeros",
      precio: 25,
      imagen: "https://via.placeholder.com/500x300.png?text=Pantalones+Deportivos"
    },
    {
      nombre: "Sudadera con capucha",
      precio: 30,
      imagen: "https://via.placeholder.com/500x300.png?text=Sudadera+Con+Capucha"
    },
    {
      nombre: "Zapatillas para correr",
      precio: 50,
      imagen: "https://via.placeholder.com/500x300.png?text=Zapatillas+Para+Correr"
    },
    {
      nombre: "Pantalones deportivos ligeros",
      precio: 25,
      imagen: "https://via.placeholder.com/500x300.png?text=Pantalones+Deportivos"
    },
    {
      nombre: "Sudadera con capucha",
      precio: 30,
      imagen: "https://via.placeholder.com/500x300.png?text=Sudadera+Con+Capucha"
    },
    {
      nombre: "Zapatillas para correr",
      precio: 50,
      imagen: "https://via.placeholder.com/500x300.png?text=Zapatillas+Para+Correr"
    }
  ];
}
