import { Component } from "@angular/core"; 

@Component({
    selector: 'mw-app', // media watcher
    // template means you have the html inline, instead of templateUrl where the html is somewhere else
    templateUrl: './app.component.html', // inline within the component metadata
    styleUrls: ['./app.component.css'] // scope css, don't need to do too much for building stuff
})
export class AppComponent {}
