import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalService } from '../../local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerUser(form: NgForm) {
    // console.log(form.value);
    this.localStore.saveData(form.value.username, form.value.password);
  }

  constructor(private localStore: LocalService) { }

  ngOnInit(): void {
  }

}
