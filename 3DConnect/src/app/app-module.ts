import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './module/angular-material.module';
import { AppComponent } from './app.component';
import { AboutComponent } from '../component/about/about.component';
import { ContactComponent } from '../component/contact/contact.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { PresentationComponent } from '../component/presentation/presentation.component';
import { TeamComponent } from '../component/team/team.component';
import { AppRoutingModule } from './module/app-routing.module';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        NavbarComponent,
        PresentationComponent,
        TeamComponent,
    ],
    imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ClipboardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
