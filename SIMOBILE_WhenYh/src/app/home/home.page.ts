import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { Produk } from '../produk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  namaUser: string = '';
  totalProduk: number = 0;
  produkTerlaris: string = '';
  
  constructor(private auth: Auth, private produk: Produk) {
    this.namaUser = this.auth.activeUser;
  }

  ngOnInit() {
    this.namaUser = this.auth.activeUser;
    
    // Mengambil ringkasan dari ProdukService
    this.totalProduk = this.produk.getTotalMacamProduk();
    this.produkTerlaris = this.produk.getProdukTerlaris();
  }
}
