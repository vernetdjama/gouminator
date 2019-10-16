import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-list-volume-radius',
  templateUrl: './list-volume-radius.component.html',
  styleUrls: ['./list-volume-radius.component.scss']
})
export class ListVolumeRadiusComponent implements OnInit {
  datas: Data[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.datas = this.storeService.getStore();
  }

}
