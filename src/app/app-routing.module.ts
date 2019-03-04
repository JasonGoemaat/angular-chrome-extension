import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  { path: '', redirectTo: '/capabilities', pathMatch: 'full' },
  { path: 'other', component: OtherComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'popup', component: PopupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
