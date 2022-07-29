import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent,
    DetailPanelComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DashboardModule { }
