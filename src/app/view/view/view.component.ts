import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsService } from 'src/services/formServices';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  
  forms:Form[] = [ ];
  modelo:any = "";
  nombre:any = "";
  fecha:any = "";
  informacion:any = "";
  email:any = "";
  personalizar:any = "";
  matricula:any = "";
  matriculaText:any = "";
  color:any = "";
  politicas:any = "";
  @ViewChild('Nombre') elementNombre!: ElementRef;
  @ViewChild('Value') elementValue!: ElementRef;
  @ViewChild('Fecha') elementFecha!: ElementRef;
  @ViewChild('Email') elementEmail!: ElementRef;
  @ViewChild('Modelo') elementModelo!: ElementRef;
  @ViewChild('Matricula') elementMatricula!: ElementRef;
  @ViewChild('MatriculaText') elementMatriculaText!: ElementRef;
  @ViewChild('Color') elementColor!: ElementRef;
  
  constructor(private formService:FormsService) {}
  numero:any = ' ';
 
  ngOnInit(): void{
    this.formService.sendForms(this.modelo,this.nombre,this.fecha,this.informacion,this.email,this.personalizar,this.matricula,this.matriculaText,this.color,this.politicas).subscribe((forms:Form[]) => {
      this.forms = forms;
      console.log(this.modelo);
    });
  }
  
 onKey(event: any) { 
    this.numero = event.target.value;
    console.log(this.numero);
    if (this.numero == ' ' || this.numero > 0 || this.numero == null){
      this.elementModelo.nativeElement.value = '';
      this.elementNombre.nativeElement.value = '';
      this.elementFecha.nativeElement.value = '';
      this.elementEmail.nativeElement.value = '';
      this.elementMatricula.nativeElement.value = '';
      this.elementMatriculaText.nativeElement.value = '';
      this.elementColor.nativeElement.value = ''; 
    }
    
    else{
      this.elementModelo.nativeElement.value = this.modelo;
      this.elementNombre.nativeElement.value = this.nombre;
      this.elementFecha.nativeElement.value = this.fecha;
      this.elementEmail.nativeElement.value = this.email;
      this.elementMatricula.nativeElement.value = this.matricula;
      this.elementMatriculaText.nativeElement.value = this.matriculaText;
      this.elementColor.nativeElement.value = this.color; 
  
    }
    /*
    if( this.elementValue.nativeElement.value  > 0 || this.elementValue.nativeElement.value == null  ){
      
    }else{
      
    }*/
    }

}
export interface Form{modelo: number  ;nombre: string;  fecha: string;  informacion: boolean;  email: string;  personalizar: boolean; matricula: string; matriculaText: string  ;color: string; politicas: boolean; }