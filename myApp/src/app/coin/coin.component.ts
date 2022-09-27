import { Component, OnInit } from '@angular/core';
import { Coin } from '../app-layout/api/coin';
import { CoinService } from '../app-layout/service/coin.service';
import { LazyLoadEvent } from "primeng/api";
@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {


  cols!: any[];

  res:any;
  coins!: Coin[];
  virtualCoins!: Coin[];


  constructor(private service:CoinService) { }

  ngOnInit(): void {
    this.cols = [
      {field: 'name', header: 'name'},
      {field: 'nameid', header: 'nameid'},
      {field: 'id', header: 'id'},
      {field: 'symbol', header: 'symbol'}
  ];

  
  this.service.getCoins().subscribe(response => {
    this.res = response;
    this.coins = this.res.data;
    this.virtualCoins = Array.from({length: 10000});
  });

  }


  loadCarsLazy(event: LazyLoadEvent) {   

    setTimeout(() => {
        //load data of required page
        if(event && event.first && event.rows){
          const { rows, first } = event;
         
          // load data of required page
          const loadedCars = this.coins.slice(first, first + rows);

          // populate page of virtual coins
          this.virtualCoins.splice(first, rows, ...loadedCars);
        }
        
        //trigger change detection
        this.virtualCoins = [...this.virtualCoins];
        
    }, Math.random() * 1000 + 250);
}

}
