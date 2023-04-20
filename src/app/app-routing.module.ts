import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { CheckGameComponent } from '@core/components/check-game/check-game.component';
import { FlagGamesComponent } from '@core/components/flag-games/flag-games.component';
import { CountriesListComponent } from '@core/components/countries-list/countries-list.component';
import { CountyDetailComponent } from '@core/components/county-detail/county-detail.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'check-game', component: CheckGameComponent },
  { path: 'flag-game', component: FlagGamesComponent },
  { path: 'country-list', component: CountriesListComponent },
  { path: 'country-list/:id', component: CountyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
