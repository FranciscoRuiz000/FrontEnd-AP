import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../Servicios/s-experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nombreE: string= '';
  descripcionE: string= '';
  expLab: Experiencia=null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    /*const id=this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data=> { this.expLab=data}, 
      err => {alert("Esto es nulo");
      this.router.navigate(['']);
    }
    )*/
  }
/*
  onCreate(): void{
    const expe=new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id=this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data=> {
        this.router.navigate([''])
      }, err => {alert("Error al modificar la experiencia");
    this.router.navigate(['']);
  }
  )
  }

  delete(id?: number){
    if(id!= undefined){
      this.sExperiencia.delete(id).subscribe(data=>{
        this.cargarExperiencia();
      }, err=> {
        alert("No se pudo borrar la experiencia");
      })
    }
  }*/
}
