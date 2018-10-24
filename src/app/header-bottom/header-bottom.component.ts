import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss']
})
export class HeaderBottomComponent implements OnInit {

  logoWW = 'Worn Wear';
  shopLink = 'Shop';
  infoLink = 'Inside Worn Wear';
  search = 'Search bar';
  cart = 'Cart';

  constructor() { }

  ngOnInit() {
  }

}
