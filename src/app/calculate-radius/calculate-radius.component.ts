import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-calculate-radius',
  templateUrl: './calculate-radius.component.html',
  styleUrls: ['./calculate-radius.component.scss']
})
export class CalculateRadiusComponent implements OnInit {
  gouminatorFormGroup: FormGroup;
  result: number;

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.gouminatorFormGroup = this.fb.group({
      radius: [null, [Validators.required, CustomValidators.number]],
    });
  }

  get radius() {
    return this.gouminatorFormGroup.get('radius');
  }

  calculateGouminator() {
    const radius = +this.radius.value;
    const volume = (4 / 3) * Math.PI * (radius ** 3);
    this.result = volume;
    const store = this.storeService.getStore() ? this.storeService.getStore() : [];
    if (store.find(item => item.radius === radius) === undefined) {
      store.push({radius, volume});
    }
    this.storeService.setStore(store);
  }

}
