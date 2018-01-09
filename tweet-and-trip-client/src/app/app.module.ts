import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app.home';
import { ListComponent } from './list/list.component';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [{
  path: '',
  component: AppHomeComponent
}, {
  path: 'results/:name',
  component: ListComponent
}];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    RootComponent,
    AppHomeComponent,
    ListComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {
}
