import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './screens/root/root.component';
import { TestsComponent } from './screens/tests/tests.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'root', component: RootComponent },
  { path: 'tests', component: TestsComponent },
  { path: '', redirectTo: '/root', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
