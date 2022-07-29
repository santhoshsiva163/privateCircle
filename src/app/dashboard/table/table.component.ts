import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalApiService } from 'src/app/local-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any;
  columnData: any;
  @Input() gridData: any;
  @Input() headerData: any;
  @Input() searchedValue: any;
  @Output() selectedRow = new EventEmitter();
  visible: boolean = false;

  constructor(private modalService: LocalApiService) { }

  ngOnInit() {
    this.visible = this.modalService.visibleSidepanel;
    this.data = this.gridData;
    this.columnData = this.headerData;
  }


  getRowData(event: any) {
    if(event != null) {
      this.modalService.toggleSidepanel();
      this.visible = this.modalService.visibleSidepanel;
    }
    let rowId = Number(event.path[0].id);
    let rowListname = event.path[2].childNodes[3].innerHTML;
    let rowData = [rowId + 1, rowListname]
    this.modalService.passValue(rowData);
    this.selectedRow.emit();
  }
}
