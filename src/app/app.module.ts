import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from "../shared/shared.module";

import { AppComponent } from "./app.component";

const appRoutes: Routes = [
    { path: '', component: AppComponent, data: { title: 'App' } },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        SharedModule
    ],
    declarations: [AppComponent],
})
export class AppModule {}
