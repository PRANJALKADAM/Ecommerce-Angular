import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { products } from './productmodal';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  data: products[] | any;
  constructor( private api:ApiService){}
  ngOnInit(){
     this.displayproducts();
  }
  displayproducts(){
    this.api.getproduct().subscribe(res=>{
         this.data=res;
         console.log(res)
    })
  }
  addToCart(item:products){
     this.api.addToCart(item);
  }
  removeItem(item:products){
    this.api.removecartitem(item);

  }
  
}
