import { Component, OnInit } from '@angular/core';
import { Produk } from '../produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  // Variabel untuk Two-Way Binding pencarian
  searchQuery: string = '';
  
  // Penampung data dari service
  semuaProduk: any[] = [];
  constructor(private produk: Produk) { }

  ngOnInit() {
    this.semuaProduk = this.produk.dataProduk;
  }
  // Fungsi untuk memfilter produk secara real-time
  getFilteredProduk() {
    if (this.searchQuery === '') {
      return this.semuaProduk;
    }
    return this.semuaProduk.filter(p => 
      p.nama.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Fungsi pemecah array untuk layout Grid 
  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  // Fungsi Event Binding sementara (nanti dihubungkan ke KeranjangService)
  tambahKeKeranjang(item: any) {
    console.log('Berhasil menambahkan', item.nama, 'ke keranjang!');
  }
}
