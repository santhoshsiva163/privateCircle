import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocalApiService } from 'src/app/local-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchedHeaderValue: any;  
  tableData: any;
  getOveralllist: any;
  sidePanelVisible: any;
  clickedRowData:any
  colData = [
    { name: "Date", header: "Date" },
    { name: "List Name", header: "List Name" },
    { name: "No Of Entities", header: "No Of Entities" },
    { name: "Actions", header: [{
        "post": "",
        "share": "",
        "edit": "",
        "delete": ""
      }]
    },
    { name: "", header: "header" }
  ];
  
  constructor(private http: HttpClient, private modalService: LocalApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  sendHeaderValue($event: []) { this.searchedHeaderValue = $event; }

  getUsers() {
    this.http.get("./assets/mockData/data.json").subscribe(
      response => {
        this.tableData = JSON.parse(JSON.stringify(response));
      }
    );
  }
  

  getRowDetails() {
    this.sidePanelVisible = this.modalService.toggleSidepanel();
    // console.log("visible :" + this.visible);
    this.modalService.passdataState.subscribe(data => {
      this.clickedRowData = data;
    });
  }

}
