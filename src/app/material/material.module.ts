import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTableModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule,
    MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule,
    MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {

}
