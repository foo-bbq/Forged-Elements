import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sportfolio',
  templateUrl: './sportfolio.component.html',
  styleUrls: ['./sportfolio.component.css']
})
export class SportfolioComponent implements OnInit {

  images: any[] = [
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (2).jpg',
      'caption': 'Wall mounted wine rack & corkscrew.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (3).jpg',
      'caption': 'Corkscrew detail'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (4).jpg',
      'caption': 'Barnwood boot bench. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (5).jpg',
      'caption': 'Custom Railing. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (6).jpg',
      'caption': 'Upset square pipes for queue posts. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (7).jpg',
      'caption': 'Hinged fireplace screen with forged copper handles. Made at Dry Canyon Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (8).jpg',
      'caption': 'Hinged fireplace screen with forged copper rivets. Made at Dry Canyon Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (9).jpg',
      'caption': 'Cinnamon bun handrail. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (10).jpg',
      'caption': 'Custom wall hooks. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (11).jpg',
      'caption': 'Setting tenons on a coffee table at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (12).jpg',
      'caption': 'Wine cabinet handles and latch. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (13).jpg',
      'caption': 'Screen railing. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (14).jpg',
      'caption': 'Stamped flourish coat hanger. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (15).jpg',
      'caption': 'Steel clad point of sale booth. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (16).jpg',
      'caption': 'Wine bottle rack.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (17).jpg',
      'caption': 'Cabinet hardware. Made at Orion Forge.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (18).jpg',
      'caption': 'Cast iron wall hangers'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (19).jpg',
      'caption': 'Chess set.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (20).jpg',
      'caption': 'Basket hanger.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (21).jpg',
      'caption': 'Basket hanger detail.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (22).jpg',
      'caption': 'Shepherds crooks.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (23).jpg',
      'caption': 'Set of coat hooks.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (24).jpg',
      'caption': 'Firepit art piece.'
    },
    {
      'imageUrl': '../../../assets/images/portfoliopics/portfolio (25).jpg',
      'caption': 'Anvil stamp in 2" x 4" block. Made at Orion Forge.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
