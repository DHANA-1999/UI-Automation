import { Injectable, Input } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form: FormGroup = new FormGroup({});

 
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      SatrtDate: new FormControl('', Validators.required),
      EndDate: new FormControl('', Validators.required)
    });
    
  }

  get StartDate() {
    return this.form.get('StartDate');
  }

  get EndDate() {
    return this.form.get('StartDate');
  }


  adduser() {

    console.log("working fine")
    console.log(this.StartDate)
    console.log(this.EndDate)

  }
 

}
