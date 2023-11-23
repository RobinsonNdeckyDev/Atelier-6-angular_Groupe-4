import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ArticlesComponent } from './articles/articles.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';

const routes: Routes = [
  { path: '', redirectTo : 'articles', pathMatch: 'full' },
  { path: '', component : ArticlesComponent},
  { path: 'users', component: UtilisateursComponent},

  { path: 'corbeille', component : CorbeilleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
