import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = 'https://cors-anywhere.herokuapp.com/https://ikportal.migros.com.tr/UserService/User';


  constructor(private http: HttpClient) {
  }

  signIn(sicil_number: string, password: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/xml',
        'Accept': 'text/xml',

        responseType: 'text' as 'json'
      }),
      responseType: 'text' as 'json'
    };


    const soapData = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://ws.com/user/"> <SOAP-ENV:Body> <ns1:checkUserLoginInfo> <username>' + sicil_number + '</username> <password>' + password + '</password> </ns1:checkUserLoginInfo></SOAP-ENV:Body></SOAP-ENV:Envelope>';

    return this.http.post(`${this.uri}`, soapData, httpOptions);

  }
}
