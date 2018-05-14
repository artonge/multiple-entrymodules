import { NgModule } from "@angular/core";
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from "../shared/shared.module";

import { LoginComponent } from "./login.component";

const appRoutes: Routes = [
    { path: '', component: LoginComponent, data: { title: 'Login' } },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        SharedModule,
    ],
    declarations: [LoginComponent],
})
export class LoginModule {}
