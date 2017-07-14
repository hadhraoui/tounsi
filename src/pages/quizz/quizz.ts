import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { User } from '../../models/User';

@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html'
})

export class QuizzPage {

  user: User;

  constructor(public navParams: NavParams) {
    console.log(navParams.get('user'));
    this.user = navParams.get('user');
    console.log("firstname: " + this.user.firstname + ", lastname: " + this.user.lastname);
  }

  

}