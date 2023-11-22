import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
