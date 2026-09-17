import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produk } from '../produk';
@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})
export class TambahProdukPage implements OnInit {

  // 1. Variabel penampung inputan form
  nama: string = '';
  kategori: string = '';
  harga_beli: number = 0;
  harga_jual: number = 0;
  stok: number = 0;
  gambar: string = '';

  // 2. Variabel pemicu munculnya pesan error
  isSubmit: boolean = false;

  constructor(private produkService: Produk, private router: Router) { }

  ngOnInit() {
  }
  // 3. Logika Getter untuk mengecek masing-masing field (Syarat validasi dari soal UTS)
  get isNamaValid() { return this.nama.trim() !== ''; }
  get isHargaBeliValid() { return this.harga_beli > 0; }
  get isHargaJualValid() { return this.harga_jual > 0; }
  get isStokValid() { return this.stok >= 0; } // Stok tidak boleh negatif (0 boleh)

  simpan() {
    this.isSubmit = true; // Tandai bahwa tombol simpan sudah ditekan

    // 4. Jika semua validasi bernilai TRUE, eksekusi penyimpanan
    if (this.isNamaValid && this.isHargaBeliValid && this.isHargaJualValid && this.isStokValid) {

      // Auto-generate ID sederhana
      const idBaru = 'p' + (this.produkService.dataProduk.length + 1).toString().padStart(2, '0');

      const produkBaru = {
        id: idBaru,
        nama: this.nama,
        kategori: this.kategori,  
        stok: this.stok,
        harga_beli: this.harga_beli,
        harga_jual: this.harga_jual,
        terjual: 0,
        gambar: this.gambar
      };

      // Push data baru ke Service
      this.produkService.dataProduk.push(produkBaru);

      // Reset form ke kondisi awal
      this.resetForm();

      // Kembali ke halaman daftar produk
      this.router.navigate(['/produk']);
    }
  }

  resetForm() {
    this.nama = '';
    this.kategori = '';
    this.harga_beli = 0;
    this.harga_jual = 0;
    this.stok = 0;
    this.gambar = '';
    this.isSubmit = false;
  }
}
