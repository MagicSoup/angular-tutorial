import {NgModule} from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule {
}
