import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';

const SAMPLE_SERVERS: Server[] = [
  { id: 1, name: 'dev-web', isOnline: true },
  { id: 2, name: 'dev-mail', isOnline: false },
  { id: 3, name: 'prod-web', isOnline: true },
  { id: 4, name: 'prod-mail', isOnline: true }
];
@Component({
  selector: 'app-section-health',
  standalone: false,
  templateUrl: './section-health.component.html',
  styleUrl: './section-health.component.scss'
})
export class SectionHealthComponent implements OnInit {
  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

  handleStatusChanged(serverID: number) {
    const toggledServerIndex = this.servers.findIndex(s => {
      return s.id === serverID;
    });

    if(toggledServerIndex > -1) {
      this.servers[toggledServerIndex].isOnline = !this.servers[toggledServerIndex].isOnline;
    }
  }
}
