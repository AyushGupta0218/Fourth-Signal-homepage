import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { first } from 'rxjs';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-usd-inr',
  templateUrl: './sofr-rate.component.html',
  styleUrls: ['./sofr-rate.component.css']
})
export class SofrRateComponent implements OnInit{

  constructor(private http: HttpClient){}

  forexRates:Object={};


  getGraphData(){
    // const result = this.http.get("http://data.fixer.io/api/latest?access_key=e1f6ae9f9a60c78b40567a88caee4aee");
    // fetch("http://data.fixer.io/api/latest?access_key=e1f6ae9f9a60c78b40567a88caee4aee&base=EUR&symbols=INR")
    this.http.get("http://localhost/test/sofr_rate_table.php").pipe(first()).subscribe({

      next:(data:any)=>{
        
        const labels = data.map((item: { date: any; }) => item.date);
        const rate = data.map((item: { rate: any; }) => item.rate);
        

        const canvas = <HTMLCanvasElement> document.getElementById('currencyChart');
      const ctx = canvas.getContext('2d');
          const chart = new Chart(ctx!, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Currency Rate',
                  data: rate,
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  fill: true
                }
              ]
            },
            options: {
              // Customize the chart options here
            }
          });

      },

      error:(err)=>{
        console.log(err);
      }
      
    }) 
  }


  





  ngOnInit(): void {
    this.getGraphData();

  }


}
