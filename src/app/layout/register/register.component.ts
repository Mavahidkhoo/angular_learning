import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from "@angular/forms";
import { LocalService } from 'src/app/local.service';
// import { ValidatePassword } from './validate-password';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registrationForm:FormGroup;
  constructor(private fb: FormBuilder, private _localservis: LocalService) {
    
  this.registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    age: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$')]],
    gender: ['male']//,
    // PasswordValidation: this.fb.group({
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required]
    // }, {
    //   validator: ValidatePassword.MatchPassword // your validation method
    // }
    // )
  })
  }
  get myForm() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      // console.log(this.registrationForm.controls.firstName.valid)
      // console.log(this.registrationForm.controls.lastName.valid)
      // console.log(this.registrationForm.controls.age.valid)
      // console.log(this.registrationForm.controls.email.valid)
      // console.log(this.registrationForm.controls.gender.valid)
      // console.log(this.registrationForm.valid)
      return false;
    } else {
      console.log(this.registrationForm.value)
    }
  }
  ngOnInit(): void {
  }
}
