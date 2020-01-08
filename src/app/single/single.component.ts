import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  public category = [
    {
        name: 'Oils',
        slug: 'oils',
        id: 0
    },
    {
        name: 'Parstels',
        slug: 'parstels',
        id: 1
    }
  ];

  public currentCategory = this.category[0];

  public products = [
    {
        name: 'Texas Longhorns',
        id: 'texas-longhorns',
        metadata: {
            price: '$1,000.00',
            author: 'C.R. Sadler',
            artist: 'C.R. Sadler'
        },
        images: [
            'http://crsadler.com/wp-content/uploads/605C-Texas-Longhorns-_-Original-Is-an-18__-x-24_-Oil-Sold-for-5000-_-Order-a-20_-x-26_-Limited@1000-First-Edition-Hand-Signed-Print-20_x-26_-750-Giclee-1375-_1978.jpg',
            'http://crsadler.com/wp-content/uploads/605C-Texas-Longhorns-_-Original-Is-an-18__-x-24_-Oil-Sold-for-5000-_-Order-a-20_-x-26_-Limited@1000-First-Edition-Hand-Signed-Print-20_x-26_-750-Giclee-1375-_1978.jpg'
        ],
        description: 'Texas Longhorns',
        num: 0
    },
    {
        name: 'Spring Time in Alberta',
        id: 'prod_DYFi8Ydc38ZPlH',
        metadata: {
            price: '$1,475.00',
            author: 'C.R. Sadler',
            artist: 'C.R. Sadler'
        },
        images: [
            'http://crsadler.com/wp-content/uploads/602-Spring-Time-in-Alberta-Gallery-Winner-_-Original-is-a-24_x-30_-Oil-Available-for-15000-_-Order-a-24_x-30_-Limited@500-First-Edition-Hand-Signed-Print-975-Giclee-1425-_2003.jpg',
            'http://crsadler.com/wp-content/uploads/602-Spring-Time-in-Alberta-Gallery-Winner-_-Original-is-a-24_x-30_-Oil-Available-for-15000-_-Order-a-24_x-30_-Limited@500-First-Edition-Hand-Signed-Print-975-Giclee-1425-_2003.jpg'
        ],
        description: 'Spring Time in Alberta',
        num: 1
    }
  ];

  public currentProduct = this.products[0];

  public skus = [
      { 
          id: 'Signed Gyclee',
          price: '1,350.00' 
      },
      { 
          id: 'Signed Reproduction',
          price: '750.00' 
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
