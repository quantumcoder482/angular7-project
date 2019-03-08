import {Component, OnInit, Type} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import * as xml2js from 'xml2js';
import {LoginService} from '../login.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  success = false;
  loginForm: FormGroup;
  message: String;
  public showError = false;

  cookieValue = 'UNKNOWN';


  constructor(private fb: FormBuilder, private ls: LoginService, private cookieService: CookieService) {
    this.onSubmit();
  }


  onSubmit() {
    this.loginForm = this.fb.group({
      sicil_number: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(soapData, sicil_number, password): Observable<any> {
    const self = this;
    this.cookieService.deleteAll();
    // @ts-ignore
    this.ls.signIn(soapData, sicil_number, password).subscribe(res =>

      xml2js.parseString(res, function (err, result) {
        const statusCode = result['SOAP-ENV:Envelope']['SOAP-ENV:Body']['0']['ns2:checkUserLoginInfoResponse']['0'].return['0'].code['0'];
        console.log(statusCode);

        if (statusCode === '0') {
          self.message = 'Sicil numaranız hatalıdır. Lütfen tekrar deneyiniz.';
          self.showError = true;
        } else if (statusCode === '5') {
          self.message = 'Şifreniz yanlıştır. Lütfen tekrar deneyiniz.';
          self.showError = true;
        } else {
          const guidcode = result['SOAP-ENV:Envelope']['SOAP-ENV:Body']['0']['ns2:checkUserLoginInfoResponse']['0'].return['0'].guidcode['0'];
          const url = 'https://ikportal.migros.com.tr/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fcom.migros.lso.LSO!2fiviews!2fmobil!2fcom.kadrofiilidetay.kadrofiilidetay?guid=';
          const loginInfos = url + guidcode;
          window.location.href = loginInfos;
        }
      }));
    return;
  }

  ngOnInit(): void {

  }

}

/*
  onSubmit(data) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log(this.loginForm.controls.sicil.value);
      return;

    }

    this.success = true;
    console.log('oldu');


    }*/


/*data = { email: 'admin', password: 'admin' };

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/xml',
    'Accept':  'text/xml',
    responseType: 'text' as 'json'
  }),
  responseType: 'text' as 'json'
};


const soapData = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://ws.com/user/"> <SOAP-ENV:Body> <ns1:checkUserLoginInfo> <username>egitimtddest</username> <password>Test1234</password> </ns1:checkUserLoginInfo></SOAP-ENV:Body></SOAP-ENV:Envelope>';*/

/* return this.http.post<any>('https://ikportal.migros.com.tr/UserService/User', soapData,  httpOptions).pipe(
   map( response => {  // NOTE: response is of type SomeType
     // Does something on response.data
     // modify the response.data as you see fit.

     // return the modified data:
     return response; // kind of useless
     console.log(response);
   }),
   catchError( error => {
     return Observable.throw(error);
     console.log('response');
   })
 ); // end of pipe
}
*/

