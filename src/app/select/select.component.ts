import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Brand } from '../brand';
import { BrandMessage } from '../brand-message';
import { Category } from '../category';
import { DataService } from '../data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectedCategory = '0';
  selectedProduct = '0';
  selectedBrand = '0';
  data : Category[] = [];
  
  @Output() sendBrandEvent = new EventEmitter<BrandMessage>();

  sendBrand() {
    let max = 0;
    for(let brand of this.data[+this.selectedCategory].products[+this.selectedProduct].brands) {
      for(let monthSales of brand.sales) {
        if(monthSales > max) {
          max = monthSales;
        }
      }
    }

    let message = new BrandMessage(this.data[+this.selectedCategory].products[+this.selectedProduct].brands[+this.selectedBrand],
                                   `${this.data[+this.selectedCategory].name} - ${this.data[+this.selectedCategory].products[+this.selectedProduct].name} - `,
                                   max);
    this.sendBrandEvent.emit(message);
  }

  productChange() {
    this.selectedBrand = '0';
    this.sendBrand();
  }

  categoryChange() {
    this.selectedProduct = '0';
    this.productChange();
  }

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.data = this.dataService.retrieveData();
    this.sendBrand();
  }

}
