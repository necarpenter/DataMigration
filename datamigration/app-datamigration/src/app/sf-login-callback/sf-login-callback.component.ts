import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sf-login-callback',
  templateUrl: './sf-login-callback.component.html',
  styleUrls: ['./sf-login-callback.component.css']
})
export class SfLoginCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['code']);
      localStorage.setItem('sfAuthCode', params['code']);
    });
  }

}
