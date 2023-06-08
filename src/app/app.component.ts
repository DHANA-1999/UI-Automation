import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
@Injectable({
  providedIn:'root'
})
export class AppComponent  {
  title = 'nlp-project';
  form_date: FormGroup = new FormGroup({});
  tableData!: any;
  load_data:boolean = true;
  loading:boolean = true;
  constructor(private router: Router,private http:HttpClient, ) { }
  ngOnInit(): void {
    this.form_date = new FormGroup({
      StartDate : new FormControl('', Validators.required),
      EndDate : new FormControl('', Validators.required),
    });
     this.load_data = false;
     this.loading = true;
  }

  userdata() {
    //var start_date = this.form_date.value.StartDate.split('-').join("")
    //var end_date = this.form_date.value.EndDate.split('-').join("")
    var start_date=this.form_date.value.StartDate
    var end_date=this.form_date.value.EndDate
    console.log("working fine")
    console.log(start_date)
    console.log(end_date)

    this.http.get('http://54.165.122.233:8000/filedata/'+start_date+'&'+end_date)
      .subscribe(data => {
        if (Response) {
          hideloader();
      }
        console.log(data)
        this.tableData = data
        this.load_data = true;

      });

      function hideloader() {
        // Setting display of spinner
        // element to none
        document.getElementById('loading')!
            .style.display = 'none';
    }
  }
}
