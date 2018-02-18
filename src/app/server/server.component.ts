import {Component} from '@angular/core';

@Component(
  {
    selector: 'app-server',
    templateUrl : './server.component.html',
    styles : [`
      .online {
        color: white
      }
      .offline {
        color: yellow;
      }
    `]
  }
)

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    const number = Math.random();
    this.serverStatus = number > .5 ? 'online' : 'offline';
    console.log('ServerComponent constructor: serverStatus = ' + this.serverStatus + ' number = ' + number);
  }
  public  getServerStatus() {
    return this.serverStatus;
  }

  public getServerId() {
    return this.serverId;
  }

  public getStatusColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
