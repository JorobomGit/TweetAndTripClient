import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './home/app.home';
import { ListComponent } from './list/list.component';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HeaderComponent } from './header/header.component';

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
    CustomMaterialModule,
    HttpClientModule
  ],
  declarations: [
    RootComponent,
    AppHomeComponent,
    ListComponent,
    HeaderComponent
  ],
  bootstrap: [
    RootComponent,
    HeaderComponent
  ]
})
export class AppModule {
}
