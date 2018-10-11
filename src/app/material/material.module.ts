import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule]
})
export class MaterialModule {

}
