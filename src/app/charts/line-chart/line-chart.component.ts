import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

const SAMPLE_LINECHART_DATA: any[] = [
  { 
    data: [32, 14, 46, 23, 38, 56], 
    label: 'Sentiment Analysis', 
    fill : true, 
    backgroundColor: 'rgba(6, 214, 160, 0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555',
    tension: 0.4 
  },
  { 
    data: [12, 18, 26, 23, 13, 26], 
    label: 'Image Recognition', 
    fill : true, 
    backgroundColor: 'rgba(255, 209, 102, 0.2)',
    borderColor: 'rgba(240, 180, 89, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555', 
    tension: 0.4 
  },
  { 
    data: [52, 34, 49, 53, 68, 66], 
    label: 'Forecasting', 
    fill : true, 
    backgroundColor: 'rgba(15, 78, 133, 0.2)',
    borderColor: 'rgba(3, 64, 128, 0.5)',
    pointBackgroundColor: '#000',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555', 
    tension: 0.4 
  },
];

const SAMPLE_LINECHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {
  public lineChartData: any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  public lineChartLegend = true;
  public lineChartPlugins = [];
  public lineChartOptions: any = {
    responsive: true
  };

  ngOnInit(): void {
    
  }
}
