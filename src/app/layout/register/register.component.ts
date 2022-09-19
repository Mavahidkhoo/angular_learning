import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup,ReactiveFormsModule  } from "@angular/forms";
import { ErrorStateMatcher } from '@angular/material/core';
import { LocalService } from 'src/app/local.service';
// import { ValidatePassword } from './validate-password';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   submitted = false;
  firstName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$'),Validators.min(10),Validators.max(60)]);
  gender = new FormControl('male')
  emailError() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  firstNameError() {
    if (this.firstName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.firstName.hasError('firstName' || 'minLength' ||'pattern') ? '' : 'Not a valid Name';
  }
  lastNameError() {
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.lastName.hasError('lastName' || 'minLength' ||'pattern') ? '' : 'Not a valid lastName';
  }
  ageError() {
    if (this.age.hasError('required')) {
      return 'You must enter a value';
    }
    return this.age.hasError('age' || 'maxLength' ||'pattern' ||'min' ||'max') ? '' : 'Not a valid Number';
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
  // registrationForm:FormGroup;
  constructor(private fb: FormBuilder, private _localservis: LocalService) {
 console.log(this.lastName.statusChanges)

    // this.registrationForm = this.fb.group({
    //   firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
    //   lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
    //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //   age: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$')]],
    //   gender: ['male']//,
    //   // PasswordValidation: this.fb.group({
    //   //   password: ['', Validators.required],
    //   //   confirmPassword: ['', Validators.required]
    //   // }, {
    //   //   validator: ValidatePassword.MatchPassword // your validation method
    //   // }
    //   // )
    // })

  }
  // get myForm() {
  //   return this.registrationForm.controls;
  // }
  
  ngOnInit(): void {
    console.log(this.lastName.statusChanges)
  }
}
