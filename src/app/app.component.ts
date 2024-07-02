import { Component, inject, OnInit } from '@angular/core';
import { FetchProductService } from './fetch-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'ModuleForm';
  products : any
  product_service = inject(FetchProductService)

ngOnInit(): void {
  this.product_service.getProducts().subscribe({
    next:(data)=>{
      console.log(data)

      this.products = data
    },
    error:(error)=>{
      console.log(error)
    },
  })
}



}
