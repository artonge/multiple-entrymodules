import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main.component";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
    { path: 'app', component: AppComponent, data: { title: 'App' } },
    { path: 'login', loadChildren: './login.module#LoginModule' },
    { path: '',   redirectTo: '/app', pathMatch: 'full' },
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    declarations: [MainComponent, AppComponent],
    bootstrap: [MainComponent],
})
export class AppModule {}
