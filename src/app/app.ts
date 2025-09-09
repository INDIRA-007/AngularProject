import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
  
})
export class App {
  // protected readonly title = signal('app1');
  title = 'app1';
  formGroup!: FormGroup;
  counter: number =0;


  constructor(private builder: FormBuilder) { 
    //to inject the dependencies
    this.formGroup = builder.group({
      Name:["",Validators.min(3)],
      EmailId:["",Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")],
      Age:[""]
    })
  }

  onSubmit(){
    console.log(this.formGroup);
    
  }

  increment(){
    this.counter++;
    console.log("Count increment: "+this.counter);
  }
  decrement()
  {
    this.counter--;
    console.log("Count decrement: "+this.counter);
  }


}
