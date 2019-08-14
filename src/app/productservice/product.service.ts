import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getProducts() {
    console.log("asd")
    return this
           .http
           .get(`${this.uri}`);
  }

  addcart(id){
      console.log(id);
  //   this.add = function(item,id){
  //     var storedItem =this.item[id];
  //     if(!storedItem){
  //         storedItem = this.item[id]={item:item,qty:0,price:0};
  //     }
  //     storedItem.qty++;
  //     storedItem.price= storedItem.item.price * storedItem,qty;
  //     this.totalQty++;
  //     this.totalPrice+=storedItem.price;
  // }
  // this.generateArray = function(){
  //     var arr=[];
  //     for (var id in this.items){
  //         arr.push(this.item[id]);
  //     }
  //     return arr;
  // };
  
  return this
            .http
            .get(`${this.uri}/add-to-cart/${id}`);
    
  }

}
