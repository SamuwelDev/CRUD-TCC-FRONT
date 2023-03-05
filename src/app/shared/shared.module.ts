import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';





@NgModule({
  declarations: [ //componentes
    ErrorDialogComponent, FormDialogComponent
  ],
  imports: [ //modulos
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent, FormDialogComponent]
})
export class SharedModule { }
