import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

	constructor(private http: HttpClient) { }

	user = {};
	loggedinuser = {};
	error: string = null;

	addNewUser(postData) {
	  this.http.post('http://localhost:5000/createUser', postData).subscribe((responsedata) => {
	  	this.loggedinuser = responsedata
	  }, (error) => {
	  	this.error = error
	  })
	}

	loginUser(postData) {
		this.http.post('http://localhost:5000/user/login', postData).subscribe((responsedata) => {
			this.loggedinuser = responsedata
		}, (error) => {
			this.error = error
		})
	}

}