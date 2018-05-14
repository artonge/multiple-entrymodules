import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main.component";

const appRoutes: Routes = [
    { path: 'login', loadChildren: '../login/login.module#LoginModule' },
    { path: 'app', loadChildren: '../app/app.module#AppModule' },
    { path: '',   redirectTo: '/app', pathMatch: 'full' },
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
export class MainModule {}
