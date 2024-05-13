import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Producto } from '../../producto';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card  col-md-3 col-10 mt-5 pt-4">
      <div class="d-flex sale ">
          <div class="btn">Oferta</div>
      </div>
      <img class='mx-auto img-thumbnail'
          [src]="producto.imagen"
          width="250px" height="100px"/>
          <div class="btn1"> + </div>
      <div class="card-body text-center mx-auto">
          <h5 class="card-title">{{ producto.nombre }}</h5>
          <p class="card-text">{{ producto.precio}} €</p>
      </div>
  </div>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input() producto!: Producto;

}
