import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LangListComponent } from './lang-list/lang-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { LangDetailsComponent } from './lang-details/lang-details.component';
import { LanguageItemComponent } from './language-item/language-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LangListComponent,
    LangDetailsComponent,
    LanguageItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
