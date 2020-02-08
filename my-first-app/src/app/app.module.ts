import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BudgetComponent } from './budget/budget.component';
import { AnnualComponent } from './budget/annual/annual.component';
import { MonthlyComponent } from './budget/monthly/monthly.component';
import { StoreComponent } from './store/store.component';
import { UnclassifiedComponent } from './store/unclassified/unclassified.component';
import { ListComponent } from './store/list/list.component';
import { EditComponent } from './store/edit/edit.component';
import { CategoryComponent } from './store/category/category.component';
import { SubcategoryComponent } from './store/subcategory/subcategory.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BudgetComponent,
    AnnualComponent,
    MonthlyComponent,
    StoreComponent,
    UnclassifiedComponent,
    ListComponent,
    EditComponent,
    CategoryComponent,
    SubcategoryComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
