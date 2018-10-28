import { Component } from '@angular/core';
import { InfoTile } from '././models/info-tile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


masterInfoTiles: InfoTile[] = [
  new InfoTile('./assets/trade-it.jpg', './assets/block-TradeItIn.png', 'Trade in your used Patagonia gear at any Patagonia retail location and receive credit to put toward another new or used garment.', '#'),
  new InfoTile('./assets/shop-used.jpeg', './assets/block-BuyItUsed.png', 'Save and reuse by shopping used Patagonia gear—quality stuff that will last, or can be traded back to us when you are done.','#'),
  new InfoTile('./assets/repair.jpg', './assets/block-RepairIt.png', 'One of the most responsible things we can do as a company is to make high-quality stuff that lasts for years and can be repaired, so you don’t have to buy more of it.','#')
];
}
