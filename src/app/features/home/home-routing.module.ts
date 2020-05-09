import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IVHomeComponent } from './ivhome/ivhome.component';
import { OMSHomeComponent } from './omshome/omshome.component';

const routes: Routes = [
  {
    path: 'ivhome',
     component: IVHomeComponent,
  },
  {
    path: 'omshome',
    component: OMSHomeComponent,
  },
  {
    path: '',
    redirectTo: 'omshome',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
