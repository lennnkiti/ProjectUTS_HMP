import { Component } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  namaUser: string = '';
  constructor(private auth: Auth) {
    this.namaUser = this.auth.activeUser;
  }
}
