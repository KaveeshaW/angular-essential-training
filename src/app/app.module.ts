import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { MediaItemComponent } from "./media-item.component";
// metadata
@NgModule({
    imports: [
        BrowserModule
    ], // get everything you need
    declarations: [
        AppComponent,
        MediaItemComponent
    ], // used to make components
    bootstrap: [
        AppComponent
    ] // root module, which component is the starting point
})
export class AppModule {
    
}