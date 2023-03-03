import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductService } from './views/products/product.service';
import { Produto } from './views/products/Produto';
import {ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'loja-do-3d';

  produtos:Produto[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private produtoService: ProductService ){

  }
  ngOnInit(): void {
    this.produtos = this.produtoService.getProducts();

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];
  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
