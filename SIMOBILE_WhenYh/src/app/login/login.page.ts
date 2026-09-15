import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  isError = false;

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
  }
  login() {
    // Memanggil fungsi login dari service
    const sukses = this.auth.login(this.username, this.password);

    if (sukses) {
      this.isError = false;
      this.router.navigate(['/home']); // Arahkan ke dashboard
    } else {
      this.isError = true; // Munculkan tulisan error
    }
  }
}
