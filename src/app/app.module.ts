import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { DataService } from './services/data.service';
import { CorbeilleComponent } from './corbeille/corbeille.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    CorbeilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

  // providers: [DataService, StorageService],
  // bootstrap: [ArticlesComponent]  // Assurez-vous que votre composant est défini comme point d'entrée


})
export class AppModule { }
