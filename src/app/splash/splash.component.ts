import { Component, OnInit, Input } from '@angular/core';
import { InfoTile } from './../models/info-tile.model';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
@Input() childInfoTiles: InfoTile[];
  constructor() { }

  ngOnInit() {
  }

}
