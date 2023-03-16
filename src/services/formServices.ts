import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable()
export class FormsService{
    constructor(){}
   forms:Form[] = [ ];

   public sendForms(modelo: number  ,nombre: string,  fecha: string,  informacion: boolean,  email: string,  personalizar: boolean, matricula: string, matriculaText: string  ,color: string, politicas: boolean):Observable<Form[]>{
    if(  politicas != false){
        this.forms.push({modelo: modelo  ,nombre: nombre,  fecha: fecha,  informacion: informacion,  email: email,  personalizar: personalizar, matricula: matricula, matriculaText: matriculaText  ,color: color, politicas: politicas});
    }
    return of(this.forms);

   }
}
export interface Form{modelo: number  ;nombre: string;  fecha: string;  informacion: boolean;  email: string;  personalizar: boolean; matricula: string; matriculaText: string  ;color: string; politicas: boolean; }