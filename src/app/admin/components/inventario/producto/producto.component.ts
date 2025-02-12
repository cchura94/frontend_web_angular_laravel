import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-producto',
  standalone: false,
  
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {


  @ViewChild('dt') dt!: Table;
  productos: any[] = [];
  // cols!: Column[];

  openNew(){

  }
  
  exportCSV(ev: any) {
    this.dt.exportCSV();
  }

   editProduct(product: any){

  }
   deleteProduct(product:any){

  }
}
