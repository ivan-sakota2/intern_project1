import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new Subject<string>(); 
  currentSubject = this.subject.asObservable();

  constructor() { }

  sendData(data: string){
    this.subject.next(data);
  }

  receivedData():Observable<string>{
    return this.subject.asObservable();
  }

}


