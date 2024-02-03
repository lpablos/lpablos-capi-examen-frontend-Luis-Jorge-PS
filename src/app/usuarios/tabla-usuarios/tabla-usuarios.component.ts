import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css'
})
export class TablaUsuariosComponent implements OnInit {
  datos:any[];

  constructor(private service: ApiService){
    this.datos = [];
  
  }
  ngOnInit(): void {
    this.service.getAll().subscribe((data)=>{
      this.datos = data;
      console.log("Es el request", this.datos);
    })
  }
}
