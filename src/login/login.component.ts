import { Component } from "@angular/core";

@Component({
    selector: "login-component",
    template: `<div>
                    Hello Login
                    <a routerLink='/app'>Go to App</a>
               </div>
               <shared-component></shared-component>`
})
export class LoginComponent {}
