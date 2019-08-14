import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {ProductService } from '../../shared/services/product.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    
    constructor(private ds: ProductService) {
      this.createForm();
      console.log("asd");
    }
  
     createForm() {
    //    this.angForm = this.fb.group({
    //      product_name: ['', Validators.required ],
    //      product_img: ['', Validators.required ],
    //      product_description: ['', Validators.required ],
    //      product_price: ['', Validators.required ],
    //      product_category: ['', Validators.required ]
    //   });
     }
  
     addProduct(product_name,product_img,product_description,product_price,product_category) {
         console.log("sa");
       this.ds.addProduct(product_name,product_img,product_description,product_price,product_category);
       console.log("asd");
     }
  
  

    ngOnInit() {}
}










