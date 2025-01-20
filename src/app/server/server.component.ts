import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  standalone: false,
  
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string = '';
  buttonText: string = '';

  @Input() server: Server = { id: 0, name: '', isOnline: false };
  @Output() serverStatusChange = new EventEmitter<number>();

  ngOnInit() {
    this.setServerStatus(this.server.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.server.isOnline = true;
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    } else {
      this.server.isOnline = false;
      this.color = '#ff6b6b';
      this.buttonText = 'Start';
    }
  }

  handleToggleStatus(onlineStatus: boolean) {
    // console.log('This server is: ' + this.server.id);
    // this.serverStatusChange.emit(this.server.id);
    this.setServerStatus(!onlineStatus);
  }

}
