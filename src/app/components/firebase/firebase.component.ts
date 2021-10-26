import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {FirebaseService} from '../../services/firebase.service';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  // isSubmitted = false;
  submitted = false;
  myForm: FormGroup;
  dataShow: any;
  banner = [
    { key: 'Bật', value: true },
    { key: 'Tắt', value: false },
  ];
  _type = [
    { key: 'Bảo trì nâng cấp hệ thống', value: 'MAINTAINENCE' },
    { key: 'Cao tải', value: 'OVERLOADED' },
    { key: 'Chết hệ thống', value: 'SUPPENDED' },
  ];
  _environment = ['sit', 'uat', 'live'];
  _update = [
    { key: 'Bật', value: true },
    { key: 'Tắt', value: false },
  ];
  constructor(
    public fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {}
  ngOnInit() {
    this.inItForm();
    this.onFormChange();
    this.getAll();
  }

  onFormChange() {
    this.myForm.valueChanges.subscribe(formData=>{
      if(formData.banner_config_status == true || formData.banner_config_status == 'true') {
          this.setValidate('type');
      } else {
        this.clearValidate('type');
      }

      if(formData.type == 'MAINTAINENCE') {
        this.setValidate('is_updating');
        this.setValidate('time_date');
        this.setValidate('time_from');
        this.setValidate('time_to');
      } else {
        this.clearValidate('is_updating');
        this.clearValidate('time_date');
        this.clearValidate('time_from');
        this.clearValidate('time_to');
      }
    })
  }

  setValidate(formControl) {
    this.myForm.get(formControl).setValidators(Validators.required);
    this.myForm.get(formControl).updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }
  clearValidate(formControl) {
    this.myForm.get(formControl).clearValidators();
    this.myForm.get(formControl).updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  inItForm() {
    this.myForm = this.fb.group({
      banner_config_status: [null, [Validators.required]],
      type: [null],
      environment: ['', [Validators.required]],
      is_updating: [''],
      time_date: [''],
      time_from: [''],
      time_to: [''],
    });
  }
  getAll() {
    this.firebaseService.getAll().subscribe((data: any) => {
      this.myForm.patchValue({...data, time_date: this.convertDate(data.time_date), time_from: (data.time_from.replace('h',':')),time_to: (data.time_to.replace('h',':'))});
    });
  }
  convertDate(date) {
    const arr = date.split('/');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }
  
  // getForm
  get f() {
    return this.myForm.controls;
  }
  // submit BTN
  onSubmit() {
    this.submitted = true;
    let valueForm = this.myForm;
    console.log('data1111', valueForm.value);
  }

}
