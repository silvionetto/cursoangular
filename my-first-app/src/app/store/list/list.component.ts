import { Component, OnInit } from '@angular/core';
import { Store } from './../../shared/store.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  stores = [new Store(1, 'Store Name')];

  constructor() { }

  ngOnInit() {
  }

}
