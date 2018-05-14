import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "./common.module";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [BrowserModule, CommonModule],
    declarations: [LoginComponent],
    bootstrap: [LoginComponent]
})
export class LoginModule {}
