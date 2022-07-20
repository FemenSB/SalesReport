import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BrandMessage } from '../brand-message';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  constructor() {
    //Chart.register(...registerables);
  }

  @Input() messageData : BrandMessage;

  barChart;

  @ViewChild('myChart', {static: true}) myChart : ElementRef;
  
  createBarChart() {
    this.barChart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [{
              label: 'Sales',
              data: this.messageData.brand.sales,
              backgroundColor: '#27285C'
          }],
      },
      options: {
            title: {
                display: true,
                text: `Sales by month for: ${this.messageData.title} ${this.messageData.brand.name}`,
                fontSize: 25
            },
            legend: {
              position: 'bottom',
            },
          scales: {
            yAxes: [{
              ticks: {
                display: true,
                suggestedMax: this.messageData.maxValue,
                beginAtZero: true
              }
            }],
          },
      },
  });
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.barChart !== undefined)
      this.barChart.destroy();
    this.createBarChart();
  }

}
