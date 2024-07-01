import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ContactModule, ProductsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'router-app';
  constructor(private router: Router) {

  }

  goToContact() {
    this.router.navigate(['contact']);

    // this.router.navigate(['contact','us']); // generates contact/us 

  }
}
