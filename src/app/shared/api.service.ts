import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { products } from '../component/product-view/productmodal';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartItemList:any=[];
  public productList = new BehaviorSubject<any>([]) 

  constructor(private http:HttpClient) { }
getproduct(){
  return this.http.get<products[]>("https://dummyjson.com/products")
}
getProductbyId(id:string){
   return this.http.get("https://dummyjson.com/products/"+id)
}
addToCart(data:products){
  this.cartItemList.push(data);
  this.productList.next(this.cartItemList)
  //next is for whenever called it will be getting passed
  console.log(this.cartItemList)
}
product(){
  return this.productList.asObservable();
}
removecartitem(data:products){
  this.cartItemList.map((a:products,index:products)=>{
    if(data.id === a.id){
      this.cartItemList.splice(index,1)
    }

  })
  this.productList.next(this.cartItemList)
}
}
