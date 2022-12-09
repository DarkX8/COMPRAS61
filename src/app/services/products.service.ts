import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  lstProduts=new Array()
  products: any;
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('productos');
   }

  addProduct(product: Product){
    this.lstProduts.push(product);

  }
  getProducts(){
    return this.lstProduts;
  }
  addProductFire(product: Product){
    const id = this.afs.createId();
    product.code=id;
    this.productsCollection.doc(id).set(Object.assign({}, product));

  }
  
  deleteProductsFire(product: Product){
    this.productsCollection.doc(product.code).delete();

  }
  updateProductsFire(product: Product){
    let index=this.lstProduts.findIndex(item => item.id == product.code)
    this.lstProduts[index]=product;
    this.productsCollection.doc(product.code).set(Object.assign({}, product))
  }
  getProductsFire(){
    return this.productsCollection.valueChanges();

  }

}
