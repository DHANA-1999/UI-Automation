import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent  {
  title = 'nlp-project';
  form_date: FormGroup = new FormGroup({});
  findResult:any;
  result:any;
 
  
 
  constructor(private router: Router,private http:HttpClient,) { }
  ngOnInit(): void {
    this.form_date = new FormGroup({
      StartDate : new FormControl('', Validators.required),
      EndDate : new FormControl('', Validators.required),
    });
    
  }

  userdata() {
    var start_date = this.form_date.value.StartDate.replace(/-/g, '')
    var end_date = this.form_date.value.EndDate.replace(/-/g, '')
    
    console.log("working fine")
    console.log(this.form_date.value.StartDate)
    console.log(this.form_date.value.EndDate)
    console.log(start_date)
    console.log(end_date)
    let inputBody = {"start_date": start_date,"end_date": end_date}
    this.http.get('http://54.172.32.92:8000/filedata/'+start_date+'-'+end_date)
      .subscribe(data => {
        console.log(data)
        console.log(typeof(data))
        
      
      });
    //window.location.href='http://54.172.32.92:8000/filedata/'+start_date+'-'+end_date;
    //this.document.location.href = 'https://stackoverflow.com';
    //return this.http.get<any>('http://54.172.32.92:8000/filedata/'+start_date+'-'+end_date);

  }


}
