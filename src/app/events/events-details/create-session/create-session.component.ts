import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession,restrictedWords} from '../../shared/index';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession= new EventEmitter()
  @Output() cancelAddSession=new EventEmitter()
  newSessionForm: FormGroup
  name: FormControl
  presenter: FormControl
  duration: FormControl
  price: FormControl
  abstract: FormControl
  constructor() { }

  ngOnInit(): void {
    this.name=new FormControl('', Validators.required)
    this.presenter=new FormControl('', Validators.required)
    this.duration=new FormControl('', Validators.required)
    this.price=new FormControl('', Validators.required)
    this.abstract=new FormControl('', [Validators.required,
      Validators.maxLength(400),restrictedWords(['fuck','dick','BMP'])])
    
    this.newSessionForm=new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      price: this.price,
      abstract: this.abstract,

    })
    }
    
  saveSession(formValues){
    let session:ISession={
      id: undefined,
      name: formValues.name,
      price: +formValues.price,
      duration:+formValues.duration,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters:[]
    }
    this.saveNewSession.emit(session)
  }
  cancel(){
    this.cancelAddSession.emit()
  }
}
