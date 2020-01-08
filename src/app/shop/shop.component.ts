import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public products = [
    {
        name: 'Texas Longhorns',
        id: 'texas-longhorns',
        metadata: {
            price: '$1,000.00',
            author: 'C.R. Sadler'
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
            author: 'C.R. Sadler'
        },
        images: [
            'http://crsadler.com/wp-content/uploads/602-Spring-Time-in-Alberta-Gallery-Winner-_-Original-is-a-24_x-30_-Oil-Available-for-15000-_-Order-a-24_x-30_-Limited@500-First-Edition-Hand-Signed-Print-975-Giclee-1425-_2003.jpg',
            'http://crsadler.com/wp-content/uploads/602-Spring-Time-in-Alberta-Gallery-Winner-_-Original-is-a-24_x-30_-Oil-Available-for-15000-_-Order-a-24_x-30_-Limited@500-First-Edition-Hand-Signed-Print-975-Giclee-1425-_2003.jpg'
        ],
        description: 'Spring Time in Alberta',
        num: 1
    },
    {
        name: 'Yippee I Ay Yippee I Oh - NaN',
        id: 'prod_DYFgePf7Jkbgpa',
        metadata: {
            price: '',
            author: 'C.R. Sadler'
        },
        images: [
            'http://crsadler.com/wp-content/uploads/601-Yippee-I-Ay-Yippee-I-Oh-_-3.5_x-5_-Oil-_-Original-Sold-for-25000-_-Order-a-20_-x-26_-Limited@500-First-Edition-Hand-Signed-Print-925-Giclee-1475-_1988.jpg',
            'http://crsadler.com/wp-content/uploads/601-Yippee-I-Ay-Yippee-I-Oh-_-3.5_x-5_-Oil-_-Original-Sold-for-25000-_-Order-a-20_-x-26_-Limited@500-First-Edition-Hand-Signed-Print-925-Giclee-1475-_1988.jpg'
        ],
        description: 'Yippee I Ay Yippee I Oh - NaN',
        num: 2
    },
    {
        name: 'The Equestrian - NaN',
        id: 'prod_DYFdP6NGXXIzFx',
        metadata: {
            price: '',
            author: 'C.R. Sadler'
        },
        images: [
            'http://crsadler.com/wp-content/uploads/606C-The-Equestrian-_-Original-is-an-Oil-Collection-Only-_-Order-a-20_-x-26_-Limited@250-First-Edition-Hand-Signed-Print-975-Giclee-1675-_.jpg',
            'http://crsadler.com/wp-content/uploads/606C-The-Equestrian-_-Original-is-an-Oil-Collection-Only-_-Order-a-20_-x-26_-Limited@250-First-Edition-Hand-Signed-Print-975-Giclee-1675-_.jpg'
        ],
        description: 'The Equestrian - NaN',
        num: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
