import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BodyComponent } from './components/pages/body/body.component';
import { SideBarComponent } from './components/pages/side-bar/side-bar.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { CourseComponent } from './components/pages/course/course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/pages/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    SideBarComponent,
    HeaderComponent,
    CourseComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
