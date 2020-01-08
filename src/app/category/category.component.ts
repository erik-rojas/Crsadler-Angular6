import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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
        }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
        console.log(params.category);
        })
    }

}
