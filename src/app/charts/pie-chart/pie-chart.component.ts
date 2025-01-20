import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

const SAMPLE_PIECHART_DATA: any[] = [{
  data: [350, 450, 120],
    backgroundColor: [
      '#26547c', '#ff6b6b', '#ffd166'
    ],
    hoverOffset: 4
}];

const SAMPLE_PIECHART_LABELS: string[] = ['XYZ Logistics', 'Main St Bakery', 'Acme Hosting'];
@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData = SAMPLE_PIECHART_DATA;
  public pieChartLabels: string[] = SAMPLE_PIECHART_LABELS;

  ngOnInit(): void {
    
  }
}
