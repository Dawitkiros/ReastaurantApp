import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlobToUrlPipe } from './blob-to-url.pipe';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { MenuSearchPipe } from './menu-search.pipe';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ImgToBlobPipe } from './img-to-blob.pipe';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { ObjectMapper } from './objectMapper';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    BlobToUrlPipe,
    EditComponent,
    CreateComponent,
    HomeComponent,
    MenuSearchPipe,
    MenuListComponent,
    ImgToBlobPipe,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, GuardGuard, LoginComponent, ObjectMapper ],
  bootstrap: [AppComponent]
})
export class AppModule { }
