import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => console.log(users));
  }

  onSubmit(email: string): void {
    this.userService.getAll().subscribe((users) => {
      const userFound = users.find((user) => user.email === email);
      if (userFound) {
        this.userService.saveUserInLocalStorage(JSON.stringify(userFound));
        this.router.navigate(['/questions']);
      } else {
        this.userService
          .create({ email })
          .subscribe((user) => this.userService.saveUserInLocalStorage(user));
        this.router.navigate(['/questions']);
      }
    });
  }
}
