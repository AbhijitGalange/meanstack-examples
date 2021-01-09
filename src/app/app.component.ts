import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './services/myhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ng-test-app';
  public name = "AbhijitG";
  public message:String = "";
  public todaydate;
  public persondata = [];

  constructor(private myhttpservice: MyhttpService) {}

  ngOnInit() { 
     this.todaydate = this.myhttpservice.showTodayDate(); 
     
     this.myhttpservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
   });

  }
}
