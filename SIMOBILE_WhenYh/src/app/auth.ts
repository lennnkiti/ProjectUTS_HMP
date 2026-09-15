import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // Variabel penentu apakah menu dan tab boleh ditampilkan
  public isLoggedIn: boolean = false; 
  public activeUser: string = '';
  constructor() { }

  // Fungsi hardcode untuk cek login (sementara)
  login(user: string, pass: string): boolean {
    if (user === 'admin' && pass === '1234') {
      this.isLoggedIn = true;
      this.activeUser = 'bu marni';
      return true;
    }
    else if (user === 'valent' && pass === '123') {
      this.isLoggedIn = true;
      this.activeUser = 'valent';
      return true;
    }
    return false;
  }

  // Fungsi logout
  logout() {
    this.isLoggedIn = false;
  }
}