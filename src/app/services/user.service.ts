import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<User | null> {
    return this.http.get<User[]>(`${this.apiUrl}?id=${id}`).pipe(
      map(users => (users.length > 0 ? users[0] : null)), // Verifica se o usuário existe
      catchError((error) => {
        console.error('Erro ao buscar usuário:', error);
        return of(null); // Retorna null em caso de erro
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  checkAndCreateUser(userId: string, name: string, email: string): Observable<User> {
    return this.getUserById(userId).pipe(
      switchMap(existingUser => {
        if (existingUser) {
          console.log('Usuário já existente:', existingUser);
          return of(existingUser); // Retorna o usuário existente
        } else {
          const newUser = { id: userId, name, email };
          console.log('Criando novo usuário:', newUser);
          return this.createUser(newUser); // Cria e retorna o novo usuário
        }
      })
    );
  }
}
