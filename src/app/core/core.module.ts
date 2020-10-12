import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './header/header.component';
import { FilterCategoriesComponent } from './components/filter-categories/filter-categories.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';

@NgModule({
  declarations: [HeaderComponent, FilterCategoriesComponent, FilterSearchComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
  ]
})
export class CoreModule { }
