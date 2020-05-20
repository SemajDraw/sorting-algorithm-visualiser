import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private searchAlgoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchAlgoForm = this.fb.group({
      algo: ''
    });
  }

  ngOnInit() {
  }

  search(value) {
    if(value) {
      this.router.config.forEach((route) => {
        if (route.path.includes(value.algo)) {
          this.router.navigate([route.path]);
        }
      });
    }
    this.searchAlgoForm.reset();
  }
}
