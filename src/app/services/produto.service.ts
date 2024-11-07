import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:3000/produto';  // URL do seu json-server

  constructor(private http: HttpClient) {}

  // Método para obter os produtos filtrados pelo userId
  getProductsByUserId(userId: string): Observable<Produto[]> {
    const params = new HttpParams().set('userId', userId);  // Passando o userId como parâmetro
    return this.http.get<Produto[]>(this.apiUrl, { params });
  }

  deleteProduct(produto: Produto): Observable<Produto>{
    return this.http.delete<Produto>(`${this.apiUrl}/${produto.id}`);
  }

  addProduct(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiUrl}`, produto);
  }

  toggleCompra(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }
}
