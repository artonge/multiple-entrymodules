import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `<div>
                    Hello App
                    <a routerLink='/login'>Go to Login</a>
               </div>
               <shared-component></shared-component>`
})
export class AppComponent {}
