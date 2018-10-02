import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../my-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {

  constructor(private router: Router, private service: MyserviceService, private flashMessagesService: FlashMessagesService) {
  }

  onSubmit({ value, valid }) {
    if (valid) {
      console.log(value);
      this.service.userRegister(value.email, value.password)
        .then((res) => {
          console.log(res);
          this.flashMessagesService.show('User Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/profile']);
        })
        .catch((error) => {
          console.log(error.message);
          this.flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/login']);
        });
    } else {
      console.log('Form data is invalid');
    }
  }

  // this.router.navigate(['/profile']);
}

