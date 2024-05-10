import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CartaProductoComponent } from '../carta-producto/carta-producto.component';
import { Producto } from '../../producto';

@Component({
  selector: 'app-scroll-spy',
  standalone: true,
  imports: [CommonModule, CartaProductoComponent],
  templateUrl: './scroll-spy.component.html',
  styleUrl: './scroll-spy.component.css'
})
export class ScrollSpyComponent {
  Producto: Producto = {
    id: "9999",
    nombre: "Camiseta",
    precio: 580,
    imagenUrl: 'https://ladudapublicidad.b-cdn.net/wp-content/uploads/2014/04/Camiseta-Heavy-T-blanca-fruit-of-the-loom-61-212-30_cutout_front-scaled.jpg'
  }
}
