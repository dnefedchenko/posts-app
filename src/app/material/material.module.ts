import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule]
})
export class MaterialModule {

}
