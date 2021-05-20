import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './components/add-image/add-image.component';
import { DetailsComponent } from './components/details/details.component';
import { HeadercomponentComponent } from './components/headercomponent/headercomponent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'add-image',component:AddImageComponent},
  {path:'header',component:HeadercomponentComponent},
  {path:'details',component:DetailsComponent},
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
