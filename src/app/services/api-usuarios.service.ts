import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisplayModalService } from './display-modal.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {
  aprovadoRecusado;

  private validacaoApi = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  constructor(
    private httpService: HttpClient,
    private displays: DisplayModalService
    ) { }
  
    dadosUsuario(){
    return this.httpService.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
  }

  resultadoPagamento(){

  }
  
  analisarPagamento(cards) {

    this.httpService.post( this.validacaoApi , cards).subscribe(resultado => {
            console.log(resultado)
            this.aprovadoRecusado = resultado
            return resultado
          },erro => {
            if(erro.status == 400) {
              console.log(erro);
            }
          }
      );
  }
}
