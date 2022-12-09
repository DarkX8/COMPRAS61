import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  title= "Crear Productos"
  mode = true
  product: Product=new Product()

  constructor(private router: Router,
    private productService: ProductsService) {
      let params=this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.product=new Product()
        /*this.product.code=params['code'];
        this.product.name=params['name'];
        this.product.price=params['price'];*/
        this.product=params['product'];
      }
     }

  ngOnInit(): void {
  }

  guardar(){
    this.mode =this.product.uid? true: false;
    if(this.mode){
      console.log(this.product)
      this.productService.addProductFire(this.product)
      this.product=new Product()

    }else{
      console.log(this.product)
      this.productService.updateProductsFire(this.product)
      this.product=new Product()
    }
  }
  editar(){
    console.log(this.product)
  }

  goListProducts(){
    console.log("llamando listado")
    this.router.navigate(['products/list'])
  }

  

}
