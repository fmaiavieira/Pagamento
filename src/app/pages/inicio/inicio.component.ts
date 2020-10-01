import { Component, OnInit } from '@angular/core';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private apiService:ApiUsuariosService) { }
   
  dados:any = []

  buscarDados(){
    this.apiService.dadosUsuario().subscribe((resultado) =>{
      console.log(resultado)
      this.dados = resultado
    })
  }

  ngOnInit(): void {
    this.buscarDados();
  }

}
