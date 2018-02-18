import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector : 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreateCount = 0;
  allowNewServer = false;
  newServerName = '';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];

  constructor() {
    // use setTimeout to change allowNewServer from false to true with lambda
    // setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  isNewServerAllowed() {
    return this.newServerName.length > 0;
  }

  getAllowedString() {
    // return 'Add Server Button is ' + (this.allowNewServer ? 'enabled' : 'disabled');
    return 'HI From getAllowedString()';
  }

  getCreateCountString() {
    // noinspection TsLint
    return 'Created ' + this.serverCreateCount + ' servers!';
  }

  onCreateServer() {
    this.serverCreateCount++;
    this.serverCreated = true;
    this.servers.push(this.newServerName);
  }



  ngOnInit() {
  }

  onFormServerName($event: Event) {
    const target = event.target;
    console.log('className: ' + target.toString());
    this.newServerName = (<HTMLInputElement> target).value;
    console.log('newServerName = ' + this.newServerName);
  }
}
