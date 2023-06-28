import { Component,OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { first } from 'rxjs';

@Injectable()

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(private http: HttpClient){ }


  events: string[] = [];
  
  opened: boolean=false;

  shouldRun = true;




  
  ngOnInit(): void {
    
     
  }



  



}
