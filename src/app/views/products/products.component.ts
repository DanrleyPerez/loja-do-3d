import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductService } from './product.service';
import { Produto } from './Produto';
import { PrimeNGConfig } from 'primeng/api';
import { delay } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products:Produto[];
  productService:ProductService;
  
  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  constructor(private produtoService: ProductService, private primengConfig: PrimeNGConfig ){

  }
  ngOnInit(): void {
    
    this.products = this.produtoService.getProducts();
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];

  
  this.primengConfig.ripple = true;
    
  }
  ngAfterViewInit() {
    let ele = document.querySelectorAll(".p-button.p-button-icon-only")
    ele[1].setAttribute("id","buttaozao")
    window.alert(ele[1].getAttribute("class"))
    document.getElementById("buttaozao").click();

    
     
  
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
