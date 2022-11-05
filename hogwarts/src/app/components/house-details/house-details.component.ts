import { Component, Inject, OnInit } from '@angular/core';
import { IHouse } from '../../interfaces/house';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.house = data;
  }

  ngOnInit(): void { }

  house: IHouse = {
    houseId: 0,
    houseName: '',
    foundedBy: '',
    houseGhost: '',
    houseSymbol: '',
    houseColour: '',
    description: '',
    commonRoom: '',
    houseImage: '',
  };

}
