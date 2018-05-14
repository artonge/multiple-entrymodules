import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "./common.module";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, CommonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
