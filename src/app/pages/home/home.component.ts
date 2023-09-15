import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';


type content = {
  id: string,
  title: string,
  description: string,
  photoCover: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  highLight: content = {
    "id": "",
    "title": "",
    "description": "",
    "photoCover": ""
  };
  contentList: content[] = [];

  constructor() { }


  ngOnInit(): void {
    const clone = [...dataFake]
    this.highLight = clone.shift() as content;
    this.contentList = clone
  }

}
