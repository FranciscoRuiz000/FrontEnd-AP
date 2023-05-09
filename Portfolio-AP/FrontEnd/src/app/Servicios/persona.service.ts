import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba la respuesta de forma asincrónica.
import { Observable } from 'rxjs';
//Esto es para hacer peticiones
import { HttpClient } from '@angular/common/http';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

URL='http://localhost:8080/personas/'; 

  //El primer http de acá abajo (minuscula) se llama alias.

constructor(private http:HttpClient) { }

public getPersona(): Observable<persona> {
  return this.http.get<persona>(this.URL+ 'traer/perfil');
}

}
