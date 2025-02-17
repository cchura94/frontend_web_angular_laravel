import { Component, inject, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ProductoService } from '../../../services/producto.service';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
@Component({
  selector: 'app-producto',
  standalone: false,
  
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  productoService = inject(ProductoService)

  @ViewChild('dt') dt!: Table;
  productos: any[] = [];
  // cols!: Column[];
  cols: Column[] = [];

  totalRecords: number = 6;

  loading: boolean = false;

  constructor(){
    this.getProductos()
  }

  openNew(){

  }

  cargarProductos(event: any){
    console.log(event)
    let page = event.first / event.rows + 1;

    this.getProductos(page, event.rows)

  }

  getProductos(page: number = 1, limit: number = 5){

    this.loading = true
    this.productoService.listar(page, limit).subscribe(
      (res: any) => {
        console.log(res);
        this.productos = res.data;
        this.totalRecords = res.total;

        this.loading = false
      },
      (error: any) => {
        this.loading = false
      }
    )
  }
  
  exportCSV(ev: any) {
    this.dt.exportCSV();
  }

   editProduct(product: any){

  }
   deleteProduct(product:any){

  }
}
