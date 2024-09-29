import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderrComponent } from './componentes/headerr/headerr.component';
import { Body1Component } from './componentes/QuemSomos/body1.component';

import { CarouselComponent } from './componentes/depoimentos/carousel.component';
import { BodyComponent } from './componentes/body/body.component';
import { AlbumComponent } from './componentes/album/album.component';
import { LinksComponent } from './componentes/links/links.component';






@NgModule({

  declarations: [
    AppComponent,
    HeaderrComponent,
    Body1Component,
   CarouselComponent,
   BodyComponent,
   AlbumComponent,
   LinksComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
