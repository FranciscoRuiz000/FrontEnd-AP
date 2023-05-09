import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../Servicios/persona.service';
import { persona } from '../model/persona.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {

  persona:persona = new persona ("", "", "")

  constructor(public personaService: PersonaService) { }
  
  ngOnInit():void {
    this.personaService.getPersona().subscribe( data =>{this.persona = data})
  }

//   //Crear variables de instancia para almacenar los datos con los que trata el Servicio
//   nombres:string='';
//   apellido:string='';

  
//   constructor(
// //Inyectar el Servicio para tener acceso en la clase a los Métodos.
//     private infoService:InfoService
//   ) {}

//   ngOnInit():void{
//     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
//     this.infoService.getDatos().subscribe(info =>{
//       console.log(info);
//       //Definimos los datos que vamos a utilizar
//       this.nombres=info.nombres;
//       this.apellido=info.apellido;
//     });
//   }

}
