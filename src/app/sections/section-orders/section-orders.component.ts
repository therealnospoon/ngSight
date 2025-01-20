import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  standalone: false,
  
  templateUrl: './section-orders.component.html',
  styleUrl: './section-orders.component.scss'
})
export class SectionOrdersComponent implements OnInit {
  constructor() {} 

  orders: Order[] = [
    { 
      id: 1, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 12, 1), fulfilled: new Date(2020, 12, 2)
    },
    { 
      id: 2, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 12, 1), fulfilled: new Date(2020, 12, 2)
    },
    { 
      id: 3, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 12, 1), fulfilled: new Date(2020, 12, 2)
    },
    { 
      id: 4, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 12, 1), fulfilled: new Date(2020, 12, 2)
    },
    { 
      id: 5, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 12, 1), fulfilled: new Date(2020, 12, 2)
    },
  ];

  ngOnInit(): void {
    
  }
}
