import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators,AbstractControl } from "@angular/forms";
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  
  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef, private _localservis: LocalService) { }
  registrationForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['', [Validators.required]]
    }),
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    age: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$')]],
    gender: ['male'],
    PasswordValidation: this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      // validator: ValidatePassword.MatchPassword // your validation method
    }
    ),
    addDynamicElement: this.fb.array([])
  })
  get myForm() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.registrationForm.value)
    }
  }
  ngOnInit(): void {
  }

}
