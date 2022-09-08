import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../app/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localStore: LocalService) { }

  ngOnInit(): void {
    this.localStore.saveData('salam', 'password');
    console.log('value of ', this.localStore.getData('salam'));
  }

}
