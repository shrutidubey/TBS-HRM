import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:Http) { 
   
  }

  sendEmail(argparam){
    return this.http.post('httpspakainfo.com/email/',argparam)
    .pipe(map(res=>res.json()))
    .pipe(catchError(this._errorHandler));
  }

  private _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error||'Server Error');
  }




}
