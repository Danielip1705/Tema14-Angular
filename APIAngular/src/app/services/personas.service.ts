import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {


  urlWebApi = 'https://danielip.azurewebsites.net/api/persona';
  constructor() { }

http=inject(HttpClient);

getPersonas(): Observable<Persona[]>{

return this.http.get<Persona[]>(this.urlWebApi);

}

postPersona(persona:Persona):Observable<Persona>{
  return this.http.post<Persona>(this.urlWebApi,persona)
}
}
