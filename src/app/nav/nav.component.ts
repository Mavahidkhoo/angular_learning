import { Component, OnInit } from '@angular/core';
import menuData from './menuItem.json';
 interface Navitem {
  name: string;
  link: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuItem:Navitem[]=menuData;
  constructor() { }

  ngOnInit(): void {
    console.log(menuData);
  }
 
}
