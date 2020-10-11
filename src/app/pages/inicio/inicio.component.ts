import { Component, OnInit } from '@angular/core';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';
import { DisplayModalService } from 'src/app/services/display-modal.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private apiService:ApiUsuariosService,
    public displays: DisplayModalService 
  ) { }
   
  usuarios:any = []

  buscarDados(){
    this.apiService.dadosUsuario().subscribe((resultado) =>{
      console.log(resultado)
      this.usuarios = resultado
    })
  }

  valorModal = true
  showModalBtn(dado) {
    this.valorModal = this.valorModal
    console.log("show")
    this.displays.mudarValor(this.valorModal, dado)
  }

  ngOnInit(): void {
    this.buscarDados();
  }

}
