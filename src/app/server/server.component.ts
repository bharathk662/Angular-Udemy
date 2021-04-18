import { Component } from '@angular/core';


@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent{

    serverId = 10;
    serverStatus = 'Offline';
    serverText = 'Server not created';
    allowDisplay = false;

    changeText(){
        this.serverText = 'New Server Created';
    }
}