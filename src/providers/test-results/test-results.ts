import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestResultsProvider {

  //Strongloop API Explorer's request URL 
  baseUrl: string = "https://sp-17-jenny-jbrownssf.c9users.io:8080/api";
  path: string = "/TestResults";  
  

  constructor(public http: Http) {
    console.log('Hello TestResultsProvider Provider');
  }
  
  
  //Retrieve test results with access token
  getTestResults(token){
    return this.http.get(this.baseUrl + this.path + '?access_token=' + token);
  }
  
  //Save a new test result to the backend
  saveTest(token, testResult){
    return this.http.post(this.baseUrl + this.path + '?access_token=' + token, testResult);
  }
  
  //Delete a test result according to id
  deleteTest(testId){
    return this.http.delete(this.baseUrl + this.path + '/' + testId );
  }
  
  

}
