import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { AuthService } from '@auth0/auth0-angular';
import { AddItemComponent } from "../add-item/add-item.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent, AddItemComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  produtos: Produto[] = [];
  userId: string | undefined;
  isLoading: boolean = true;
  produtoParaEditar: Produto | null = null;

  constructor(
    private produtoService: ProdutoService,
    private auth: AuthService
  ){}

  ngOnInit(): void {
      this.auth.user$.subscribe((user) => {
        if(user && user.sub) {
          this.userId = user.sub;
          this.loadProducts();
        } else {
          this.isLoading = false;
        }
      })
  }

  loadProducts(): void {
    if(this.userId) {
      this.produtoService.getProductsByUserId(this.userId).subscribe(
        (data) => {
          this.produtos = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Erro ao buscar produtos', error);
          this.isLoading = false;
        }
      )
    }
  }

  addProduct(produto: Produto){
    console.log(produto);
    this.produtoService.addProduct(produto).subscribe(() => {
      this.loadProducts();
    },
    (error) => {
      console.error('Erro ao criar produto', error);
    }
    );
  }

  editProduct(produto: Produto): void {
    this.produtoParaEditar = { ...produto }; 
  }

  updateProduct(produto: Produto): void {
    this.produtoService.updateProduct(produto).subscribe(() => {
      this.loadProducts();
      this.produtoParaEditar = null; 
    }, (error) => {
      console.error('Erro ao atualizar produto', error);
    });
  }

  deleteProduct(produto: Produto) {
    console.log("testesEmmit");
    this.produtoService.deleteProduct(produto).subscribe(() => {
      this.loadProducts();
    });
  }

  toggleCompra(produto: Produto) {
    produto.comprado = !produto.comprado;
    this.produtoService.toggleCompra(produto).subscribe(() => {
      this.loadProducts();
    });
  }
}
