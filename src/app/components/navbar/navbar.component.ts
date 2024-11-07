import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { delay, Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private userService: UserService
  ) {}
  isAuthenticated$: Observable<boolean> = this.auth.isAuthenticated$.pipe(delay(0));

  tryLogin(): void {
    this.auth.loginWithRedirect();
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user && user.sub && user.name && user.email) {
        const userId = user.sub;
        const userName = user.name;
        const userEmail = user.email;

        this.userService.checkAndCreateUser(userId, userName, userEmail)
          .subscribe(createdOrExistingUser => {
            console.log('Usuario processado:', createdOrExistingUser)
          });
      } else {
        console.error("Erro: Usuário não está definido.");
      }
    }
  );
  }
}
