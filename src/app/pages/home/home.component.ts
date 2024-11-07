import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, AsyncPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public auth: AuthService){}

  tryLogin(): void {
    this.auth.loginWithRedirect();
    this.auth.isAuthenticated$.subscribe(isAuth => console.log('Autenticado:', isAuth));
  }
}
