import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  constructor(
    private httpService: HttpClient
    ) { }
  
    dadosUsuario(){
    return this.httpService.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
  }
}
