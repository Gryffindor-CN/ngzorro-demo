import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  validateForm: FormGroup;
  @Input() layout: string = 'horizontal';
  @Output() voted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      number: ['']
    });
  }

  ngOnInit() {
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  handleSearch(e: MouseEvent) {
    e.preventDefault();
    this.voted.emit(this.validateForm.value);
  }



}
