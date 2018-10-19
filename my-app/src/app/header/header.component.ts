import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  link = 'logo';
  link2 = 'patagonia provisions';
  link3 = 'action works';
  link4 = 'blog';


  constructor() { }

  ngOnInit() {
  }

}
