import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuizzPage } from '../quizz/quizz';

import { User } from '../../models/User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User = new User();

  constructor(public navCtrl: NavController) {

  }

  onSubmit() {
    console.log("firstname: " + this.user.firstname + ", lastname: " + this.user.lastname);
    this.navCtrl.push(QuizzPage, {user: this.user});
  }

}

