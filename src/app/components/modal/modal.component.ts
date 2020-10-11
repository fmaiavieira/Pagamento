import { Component, OnInit } from '@angular/core';
import { DisplayModalService } from 'src/app/services/display-modal.service';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    showDisplay:boolean
  constructor(
    public displays: DisplayModalService,
    private apiUsuarios: ApiUsuariosService
    
  ) { }

  valorModal = false
  closeModalBtn(){
    this.valorModal = this.valorModal
    this.displays.mudarValor(this.valorModal, this.displays.getUsuarioSelecionado())
  }

  usuarioAtivo: any[];
  card;

  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  enviarPagamento(){
    console.log(this.card)
    this.apiUsuarios.analisarPagamento(this.card);
    this.displays.mudarValorModal(true);
  }

  q: any;
  maskSearch(event) {
    if (event.keyCode == 8 && this.q != "") {
      this.q = "";
    }
    if (this.q == undefined) {
      this.q ="";
    }
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
      console.log('Um numero')
      this.q = this.q + event.key
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1');
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
  }
   maskSearchDown(event) {
     event.preventDefault();
   }

   


  ngOnInit(): void {
    this.usuarioAtivo = this.displays.getUsuarioSelecionado()
    console.log(this.usuarioAtivo)
    this.displays.showModal.subscribe((valor) => {
      this.showDisplay = valor
    })
  }

}
