import { Component, Input, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import detailList from '../../../assets/mockData/detailList.json';
import { LocalApiService } from 'src/app/local-api.service';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss']
})
export class DetailPanelComponent implements AfterContentChecked {

  @Input() checkSearchValueExist: any;
  showIdDetails: any;
  findIndex: any;
  getClickedRowDetails: any;
  // Assigning Local Details Json
  getOveralllist = detailList;  

  constructor(private http: HttpClient, private modalService: LocalApiService) { }
  
  ngAfterContentChecked(): void {
    this.modalService.passdataState.subscribe(data => { this.getClickedRowDetails = data });
    this.displayIdDetails(this.getClickedRowDetails);
  }

  displayIdDetails(val:any) {
    if (val[1] !== undefined) {
      this.findIndex = this.getOveralllist.find((obj) => {
        return obj.listname === val[1];
      });
      this.showIdDetails = this.findIndex.list;
    } else {
      this.showIdDetails = [];
    }
    
  }

}
