import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';
import { Router } from '@angular/router';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss'],
  providers: [ItemService]
})
export class MensComponent implements OnInit {
items: Item[];

  constructor(private router: Router, private itemService: ItemService ) {}
  ngOnInit() {
  }

}
