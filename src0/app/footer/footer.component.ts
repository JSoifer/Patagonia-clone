import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logoWW_small = 'WW';
  faq = 'FAQ';
  pp = 'Privacy Policy';
  locations = 'Stores';
  value_statement = 'Corporate responsibilty';
  legal = 'CA transparency act';
  contact = 'Contact Us';
  sign_up = 'Sign up for our email list';


  constructor() { }

  ngOnInit() {
  }

}
