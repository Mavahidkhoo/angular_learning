import { Component, OnInit } from '@angular/core';
import menuData from './menuItem.model.json';
 interface Navitem {
  name: string;
  path: string;
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
