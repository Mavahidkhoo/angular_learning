import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { LocalService } from '../../local.service';
import { Router } from '@angular/router';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private _localStore: LocalService, private router: Router) {
    this.loginform = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('', [Validators.required])
    });

  }
  ngOnInit(): void {
    // localStorage.getItem();
  }
  onSubmit() {
    if (this.loginform.valid) {
      console.log(this.loginform.value);
       
    }
  }
}
