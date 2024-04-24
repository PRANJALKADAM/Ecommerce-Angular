import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { products } from '../product-view/productmodal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productdata:any|products;
  showAdd:boolean =true;
  showRemove:boolean=false;
  constructor(private api:ApiService, private activatedroute:ActivatedRoute){}
  ngOnInit(){
       let productid =this.activatedroute.snapshot.paramMap.get('productid');
       //console.log('product id is',productid)
       productid && this.api.getProductbyId(productid).subscribe((res)=>{
        this.productdata = res;
        console.log(res)
       })
  }
 addToCart(productdata:products){
    this.showAdd =false;
    this.showRemove= true;
    this.api.addToCart(productdata)
 } 
 removeItem(productdata:products){

  this.showAdd =true;
    this.showRemove= false;
    this.api.removecartitem(productdata)
 }

}
