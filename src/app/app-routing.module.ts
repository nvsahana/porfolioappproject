import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},
  {path:'', component: IndexComponent},
  /*remove this later */
  // {path:'footer', component:FooterComponent} (not needed mostly, check is needed and then uncomment)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
