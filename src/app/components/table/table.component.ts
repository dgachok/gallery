import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  private show:boolean = false;
  private data:string = '';


  ngOnInit() {
  }

  view(image:string){
    this.show = true;
    this.data = image;
  }

}
