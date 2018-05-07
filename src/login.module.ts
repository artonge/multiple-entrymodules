import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { LoginComponent } from "./login.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [LoginComponent],
    bootstrap: [LoginComponent]
})
export class LoginModule {}
