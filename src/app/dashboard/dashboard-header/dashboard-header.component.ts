import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  searchText:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  @Output() filterValue_Tablecomp = new EventEmitter<any>();
  @Output() emitter: EventEmitter<string> = new EventEmitter<string> ();

  emit() {
    this.emitter.emit(this.searchText);
  }

  msgToSib() { this.filterValue_Tablecomp.emit(this.searchText) }

}
