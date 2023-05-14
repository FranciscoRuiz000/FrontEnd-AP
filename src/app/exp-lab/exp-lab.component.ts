import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../Servicios/s-experiencia.service';
import { Experiencia } from '../model/experiencia';
import { TokenService } from '../Servicios/token.service';

@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {
  expe: Experiencia []=[];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data=> {this.expe = data;})
  }
  
}

