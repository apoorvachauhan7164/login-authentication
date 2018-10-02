import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../my-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isUserLoggedIn: boolean;
  loggedInUser: string;

  constructor(private router: Router, private service: MyserviceService, private flashMessagesService: FlashMessagesService) {

  }

  onLoginButtonClick(): void {
    this.router.navigate(['/login']);
  }

  onSignButtonClick(): void {
    this.router.navigate(['/register']);
  }

  onLogOutButtonClick(): void {
    this.service.logOut();
    this.flashMessagesService.show('User Logged Out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/']);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.service.getAuth().subscribe(auth => {
      if (auth) {
        this.isUserLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

}
