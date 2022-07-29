import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {
  visibleSidepanel: boolean = true;
  
  emptyObj = [{}];
  
  public passClickedRowData = new BehaviorSubject<any>(this.emptyObj);
  public passdataState = this.passClickedRowData.asObservable();
  
  constructor(private http: HttpClient) { }
  
  passValue(data:any) {
    //passing the data as the next observable
    this.passClickedRowData.next(data);
  }

  toggleSidepanel() {
    this.visibleSidepanel = !this.visibleSidepanel;
    // console.log('test', this.serviceText);
    return this.visibleSidepanel;
  }

}
