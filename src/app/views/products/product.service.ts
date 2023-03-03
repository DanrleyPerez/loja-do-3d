import { Injectable } from '@angular/core';
import ListaProdutos from './allProducts'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return ListaProdutos;

  }
}
