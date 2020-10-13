import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DisplayModalService {
  showModal:Observable<boolean>
  showAprovadoModal:Observable<boolean>


  constructor() {
    this.showSubject = new Subject<boolean>();
     this.showAprovado = new Subject<boolean>();
    this.showModal = this.showSubject.asObservable();
    this.showAprovadoModal = this.showAprovado.asObservable();
    this.showSubject.next(false)
    this.showAprovado.next(false)
   }

  usuario_Selecionado:any;

  private showSubject: Subject<boolean>
  private showAprovado: Subject<boolean>
  
  mudarValor(valor, dado) {
    this.showSubject.next(valor)
    console.log("mudarvalor")
    this.usuario_Selecionado = dado.name
    return valor
  }

  mudarValorModal(valor){
    this.showAprovado.next(valor)
    console.log("mudarvalorModal")
    return valor
  }
  
  

  public getUsuarioSelecionado(){
    return this.usuario_Selecionado;
  }

  public setUsuarioSelecionado (selecionado){
    this.usuario_Selecionado = selecionado;
  }

}
