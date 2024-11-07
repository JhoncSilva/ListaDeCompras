import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {
  @Output() onAddProduct = new EventEmitter<Produto>();

  userId: string = '';
  produto: string = '';
  quantidade: number = 0;
  comprado: boolean = false;
  mostrarAddProduto: boolean = false;

  constructor(
    private auth: AuthService
  ){}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if(user && user.sub) {
        this.userId = user.sub;
      }
    })
  }

  AlteraVisualizacao(valor: boolean){
    this.mostrarAddProduto = valor;
  }

  onSubmit() {
    if(!this.produto) {
      alert('Adicione um produto!')
      return;
    }

    if(!this.quantidade) {
      alert('Adicione uma quantidade!')
      return;
    }

    const novoProduto = {
      nome: this.produto,
      quantidade: this.quantidade,
      userId: this.userId,
      comprado: this.comprado
    }

    console.log(novoProduto);

    this.onAddProduct.emit(novoProduto);

    this.produto = '';
    this.quantidade = 0;
    this.comprado = false;
  }
}
