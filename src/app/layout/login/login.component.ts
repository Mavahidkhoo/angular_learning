import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalService } from '../../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerUser(form: NgForm) {
    console.log(form.value.password);
    let checkUser = this.localStore.getData(form.value.username);
    console.log(checkUser)
    if (form.value.username == '') {
      alert('Enter username');
    } else {
      if (checkUser == null) {
        setTimeout(() => {
          alert("This Username not Exist");
          this.router.navigate(['/register']);
        }, 100);
        
      }else if (form.value.password == checkUser) {
        this.router.navigate(['/about']);
      } else {
        alert('pass not match');
      }
    }

  }

  constructor(private localStore: LocalService ,private router: Router) { }

  ngOnInit(): void {
  }

}
