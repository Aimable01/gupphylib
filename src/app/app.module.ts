import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsComponent } from './pages/gifs/gifs.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GifComponent } from './components/gif/gif.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    GifComponent,
    SkeletonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
