import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  list: Array<any>;
  
  constructor(private _list: Array<any>) {
      this.list = _list;
  }

  ngOnInit() {
  }

}
