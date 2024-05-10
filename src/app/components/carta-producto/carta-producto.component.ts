import { Component, Input } from '@angular/core';
import { Producto } from '../../producto';

@Component({
  selector: 'app-carta-producto',
  standalone: true,
  imports: [],
  templateUrl: './carta-producto.component.html',
  styleUrl: './carta-producto.component.css'
})
export class CartaProductoComponent {

  @Input() producto!: Producto;

}
