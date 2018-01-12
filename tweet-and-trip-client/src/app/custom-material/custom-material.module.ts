import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [MatTableModule, MatProgressSpinnerModule],
  declarations: []
})
export class CustomMaterialModule { }
