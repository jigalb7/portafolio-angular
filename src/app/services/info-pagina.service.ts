import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
info: InfoPagina = {};
cargada = false;
equipo: any[] = [];//arreglo donde se almacena toda la info de la BD
  
  constructor(private http: HttpClient) {     
    //leer el archivo json
    this.cargarInfo();
    this.cargarEquipo();
}//end constructor http

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-fc7e9.firebaseio.com/equipo.json')//se pone este enace y esto asegura que viene de la BD y que es dinamico, pues está haciendo la consulta directamente al json de la Bd
      .subscribe((resp: any[]) => {
        this.cargada=true;
        this.equipo = resp;

      });
  }
}//end export class InfoPaginaService
