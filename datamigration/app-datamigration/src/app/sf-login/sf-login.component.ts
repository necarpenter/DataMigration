import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sf-login',
  templateUrl: './sf-login.component.html',
  styleUrls: ['./sf-login.component.css']
})
export class SfLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(){
      window.location.href = 'https://NA136.salesforce.com/services/oauth2/authorize?'
      + 'client_id=3MVG9GYWKbMgBvbzxRM8OMd3VpH0MBZNWWFY_Lv2R20WaIH_wNWt_AQmadvOUTvULltmymzp.MnJNeZI8v5gL&'
      + 'redirect_uri=http://localhost:4200/sfcallback&'
      + 'response_type=code';
  }

}
