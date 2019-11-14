import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-advance-form',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      ordernumber: [''],
      orderstatus: ['']
    });
  }

  ngOnInit() {
  }

}
