import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { LoginModule } from "./login.module";

if (process.env.ENV === "production") {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LoginModule);
