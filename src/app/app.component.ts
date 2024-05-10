import { Component, HostListener, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ScrollSpyComponent } from './components/scroll-spy/scroll-spy.component';
import { CartaProductoComponent } from './components/carta-producto/carta-producto.component';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ScrollSpyComponent,CartaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stylowear';
}
