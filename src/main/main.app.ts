import "../polyfills";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { MainModule } from "./main.module";

if (process.env.ENV === "production") {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule);
