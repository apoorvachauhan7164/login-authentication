import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MyserviceService } from '../../my-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  msg: string;

  constructor(
    private routes: Router,
    private service: MyserviceService,
    private flashMessagesService: FlashMessagesService
    ) { }

  // check(uname: string, pwd: string) {
  //   // tslint:disable-next-line:prefer-const
  //   let output = this.service.checkUsernameAndPassword(uname, pwd);
  //   // tslint:disable-next-line:triple-equals
  //   if (output == true) {
  //     this.routes.navigate(['/profile']);
  //   } else {
  //     this.msg = 'Invalid username or password';
  //   }
  // }

  onSubmit({ value, valid }) {
    if (valid) {
      console.log(value);
      this.service.userLogIn(value.uname, value.pwd)
      .then((userData) => {
        console.log(userData);
        this.flashMessagesService.show('User Logged In!', {cssClass: 'alert-success', timeout: 3000});
        this.routes.navigate(['/profile']);
      })
      .catch((error) => {
        console.log(error.message);
        this.flashMessagesService.show(error.message, {cssClass: 'alert-danger', timeout: 3000});
        this.routes.navigate(['/login']);
      });
    } else {
      console.log('Form data is invalid');
    }
  }
}

