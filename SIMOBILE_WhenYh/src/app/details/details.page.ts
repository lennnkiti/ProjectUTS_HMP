import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Produk } from '../produk';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage implements OnInit {
  produkDetail: any;
  constructor(
    private route: ActivatedRoute,
    private produkService: Produk
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      const idProduk = params['id'];
      // Mengambil data produk berdasarkan ID
      this.produkDetail = this.produkService.getProdukById(idProduk);
    });
  }

}
