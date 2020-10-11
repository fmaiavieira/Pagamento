import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DisplayModalService {
  showModal:Observable<boolean>


  constructor() {
    this.showSubject = new Subject<boolean>();
    this.showModal = this.showSubject.asObservable();
    this.showSubject.next(false)
   }

  usuario_Selecionado:any;

  private showSubject: Subject<boolean>
  
  mudarValor(valor, dado) {
    this.showSubject.next(valor)
    console.log("mudarvalor")
    this.usuario_Selecionado = dado.name
    return valor
  }

  valorModal = false;

  mudarValorModal(valor){
    this.valorModal = valor
    console.log(this.valorModal)
  }
  
  

  public getUsuarioSelecionado(){
    return this.usuario_Selecionado;
  }

  public setUsuarioSelecionado (selecionado){
    this.usuario_Selecionado = selecionado;
  }

}
