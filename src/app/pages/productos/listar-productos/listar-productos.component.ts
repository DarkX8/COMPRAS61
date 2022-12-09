import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { ProductsService } from 'src/app/services/products.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
  title= "Listar Productos"
  lstProducts=new Array()
  products: any

  constructor(private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.products=this.productService.getProductsFire()
    console.log(this.lstProducts)
  }
  goNewProduct(){
    console.log("llamando crear producto")
    this.router.navigate(['products/create'])
  }
  editProduct(product: Product){
    console.log("Editar Productos"+product)
    /*let params: NavigationExtras={
      queryParams:{
        code: product.code,
        name: product.name,
        price: product.price
      }*/
      let params: NavigationExtras={
        queryParams:{
          product: product
        }
    }
    this.router.navigate(['products/create'], params)
  }
  deleteProduct(product: Product){
    this.productService.deleteProductsFire(product);
  }

}
