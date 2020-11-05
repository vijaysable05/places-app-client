import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/userService.component'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(userService: UserService) { }

  ngOnInit(): void {
  }

}
