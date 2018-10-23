import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  title = 'client';
  values: string[] = [];

  ngOnInit() {
    this.showValues();
  }

  showValues() {
    this.dataService.getValues()
      .subscribe((data:string[]) => {
        this.values = data;
        console.log(this.values);
      });
  }
}
