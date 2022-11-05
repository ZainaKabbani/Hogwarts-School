import { Injectable } from '@angular/core';

import { IHouse } from '../interfaces/house';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  constructor() {}

  getHouses(): IHouse[] {
    return [
      {
        houseId: 1,
        houseName: 'Gryffindor',
        foundedBy: 'Godric Gryffindor',
        houseGhost: 'Nearly Headless Nick',
        houseSymbol: 'Lion',
        houseColour: 'Deep red and gold',
        description:
          'Well known for courage, bravery, daring, nerve, and chivalry.',
        commonRoom:
          'The entrance to the common room was on the seventh floor hidden behind a portrait of the Fat Lady. To enter, the correct password must be provided',
        houseImage: './../../../assets/images/Gryffindor.png',
      },
      {
        houseId: 2,
        houseName: 'Hufflepuff',
        foundedBy: 'Helga Hufflepuff',
        houseGhost: 'Fat Friar',
        houseSymbol: 'Badger',
        houseColour: 'Yellow and black',
        description:
          'Well known for loyalty, patience, hard work, fair-play, honesty, and tolerance.',
        commonRoom:
          'Located near the kitchens. To enter, one must tap a fake barrel in the rhythm "Helga Hufflepuff." It was the only common room to have a way to keep students from other houses out (by dumping vinegar on them).',
        houseImage: './../../../assets/images/Hufflepuff.png',
      },
      {
        houseId: 3,
        houseName: 'Ravenclaw',
        foundedBy: 'Rowena Ravenclaw',
        houseGhost: 'The Grey Lady',
        houseSymbol: 'Eagle',
        houseColour: 'Blue and bronze',
        description:
          'Values intelligence, wit, cleverness, creativity, and wisdom.',
        commonRoom:
          'Located in a high tower, and the interior was decorated with blue and bronze. To enter, one must answer a riddle from an eagle door knocker.',
        houseImage: './../../../assets/images/Ravenclaw.png',
      },
      {
        houseId: 4,
        houseName: 'Slytherin',
        foundedBy: 'Salazar Slytherin',
        houseGhost: 'The Bloody Baron',
        houseSymbol: 'Serpent',
        houseColour: 'Green and silver',
        description:
          'Values ambition, leadership, cunning, determination, and resourcefulness.',
        commonRoom:
          'Located in the dungeons, underneath the Black Lake, and hidden behind a stone wall. To enter, the correct password must be provided.',
        houseImage: './../../../assets/images/Slytherin.png',
      },
    ];
  }
}
