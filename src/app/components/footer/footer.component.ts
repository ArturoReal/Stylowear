import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
<footer class="footer">
  <div class="container-fluid">
  
    
    <img src="assets/Logo.png" alt="Logo" class="center">
<footer class="site-footer">

  <div class="footer-container">
    <div class="footer-column">
      <h4>RESOURCES</h4>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Resource listing</a></li>
        <li><a href="#">Press kit</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>HELP</h4>
      <ul>
        <li><a href="#">Stack Overflow</a></li>
        <li><a href="#">Join Discord</a></li>
        <li><a href="#">Gitter</a></li>
        <li><a href="#">Report Issues</a></li>
        <li><a href="#">Code of Conduct</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>COMMUNITY</h4>
      <ul>
        <li><a href="#">Events</a></li>
        <li><a href="#">Meetups</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Contribute</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>LANGUAGES</h4>
      <ul>
        <li><a href="#">简体中文版</a></li>
        <li><a href="#">正體中文版</a></li>
        <li><a href="#">日本語版</a></li>
        <li><a href="#">한국어</a></li>
        <li><a href="#">Complete language list</a></li>
      </ul>
    </div>
  </div>
  <p class="text-muted d-flex justify-content-center">© 2024 Stylowear, Inc. Todos los derechos reservados.</p>
</footer>

  </div>
</footer>

  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
