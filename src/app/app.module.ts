import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './pages/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SummonerComponent } from './components/summoner/summoner.component';
import { CMasteryComponent } from './components/c-mastery/c-mastery.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component'

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    SummonerComponent,
    CMasteryComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
