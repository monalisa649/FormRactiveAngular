import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl,  FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

createFormGroup(){
  return new FormGroup({
    email : new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    name: new FormControl('',  [Validators.required, Validators.minLength(5)]),
    message: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(100)])
  });
}
//Para que se pueda leer la propiedad invalid del formulario.
get name (){ return this.contactForm.get('name'); }
get email () { return this.contactForm.get('email');}
get message() { return this.contactForm.get('message');}

contactForm: FormGroup;

  constructor(private dbData : DataDbService) { 

    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }
onResetForm():void{
  this.contactForm.reset();
}

onSaveForm():void{
  if (this.contactForm.valid){
    this.dbData.saveMessage(this.contactForm.value);
    console.log('valid');
    this.onResetForm();
    
  }
  
 
}

}
