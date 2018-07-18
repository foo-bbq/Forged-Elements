import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sportfolio',
  templateUrl: './sportfolio.component.html',
  styleUrls: ['./sportfolio.component.css']
})
export class SportfolioComponent implements OnInit {

  images: any[] = [
    {
      'imageUrl': '../../../assets/images/portfolio (2).jpg',
      'imageId': 2,
      'caption': 'Wall mounted wine rack & corkscrew.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (3).jpg',
      'imageId': 3,
      'caption': 'Corkscrew detail'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (4).jpg',
      'imageId': 4,
      'caption': 'Barnwood boot bench. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (5).jpg',
      'imageId': 5,
      'caption': 'Custom Railing. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (6).jpg',
      'imageId': 6,
      'caption': 'Upset square pipes for queue posts. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (7).jpg',
      'imageId': 7,
      'caption': 'Hinged fireplace screen with forged copper handles. Made at Dry Canyon Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (8).jpg',
      'imageId': 8,
      'caption': 'Hinged fireplace screen with forged copper rivets. Made at Dry Canyon Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (9).jpg',
      'imageId': 9,
      'caption': 'Cinnamon bun handrail. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (10).jpg',
      'imageId': 10,
      'caption': 'Custom wall hooks. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (11).jpg',
      'imageId': 11,
      'caption': 'Setting rivets on a coffee table at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (12).jpg',
      'imageId': 12,
      'caption': 'Wine cabinet handles and latch. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (13).jpg',
      'imageId': 13,
      'caption': 'Screen railing. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (14).jpg',
      'imageId': 14,
      'caption': 'Stamped flourish coat hanger. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfolio (15).jpg',
      'imageId': 15,
      'caption': 'Steel clad point of sale booth. Made at Orion Forge.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
