import { Component, OnInit } from '@angular/core';
import { DisplayModalService } from 'src/app/services/display-modal.service';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-modal-aprovado-recusado',
  templateUrl: './modal-aprovado-recusado.component.html',
  styleUrls: ['./modal-aprovado-recusado.component.css']
})
export class ModalAprovadoRecusadoComponent implements OnInit {

  valorModal = this.displays.valorModal;
  
  constructor(
    public displays: DisplayModalService,
    private apiUsuarios: ApiUsuariosService) { }

  ngOnInit(): void { 
  }

}
