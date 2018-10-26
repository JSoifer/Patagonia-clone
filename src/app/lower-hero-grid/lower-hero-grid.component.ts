import { Component, OnInit, Input } from '@angular/core';
import { InfoTile } from './../models/info-tile.model';

@Component({
  selector: 'app-lower-hero-grid',
  templateUrl: './lower-hero-grid.component.html',
  styleUrls: ['./lower-hero-grid.component.scss']
})
export class LowerHeroGridComponent implements OnInit {
@Input() childInfoTiles: InfoTile[];

  constructor() { }


  ngOnInit() {
  }

}
