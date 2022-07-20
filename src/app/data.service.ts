import { Injectable } from "@angular/core";
import { Brand } from "./brand";
import { Category } from "./category";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor( ) { }

    retrieveData() : Category[] {
        const data = [
            new Category(
                'Food',
                    [
                        new Product('Apple', [
                            new Brand('Some Apples Brand', [50, 45, 55, 50]),
                            new Brand('Another brand of apples', [35, 30, 35, 27]),
                            new Brand('Applz', [10, 25, 30, 19])
                            ]),
                        new Product('Banana', [
                            new Brand('Best Banana', [100, 110, 109, 150]),
                            new Brand('Average Banana', [50, 50, 50, 50]),
                            new Brand('Worst Bananas Ever', [3, 5, 2, 1])
                        ]),
                        new Product('Burger', [
                            new Brand('Burger King', [300, 310, 280, 315]),
                            new Brand('McDonalds', [500, 470, 501, 400]),
                            new Brand('Bob\'s', [100, 60, 80, 95]),
                            new Brand('Gourmet Food Truck', [30, 41, 27, 50]),
                            new Brand('Cheap burger', [100, 200, 300, 250])
                        ])
                    ]
            ),
            new Category(
                'Clothing',
                    [
                        new Product('Shirt', [
                            new Brand('Lacoste', [100, 90, 95, 110]),
                            new Brand('Random brand', [150, 170, 190, 210]),
                            new Brand('Cool Shirts', [190, 230, 210, 250])
                        ]),
                        new Product('Pants', [
                            new Brand('C&A', [150, 120, 125, 170]),
                            new Brand('Balenciaga', [1, 0, 1, 2]),
                            new Brand('Korova', [5, 3, 4, 7])
                        ])
                    ]
            ),
            new Category(
                'Games',
                    [
                        new Product('Tabletop game', [
                            new Brand('Chess', [5000, 4500, 4700, 5100]),
                            new Brand('Monopoly', [2500, 2650, 2700, 3000]),
                            new Brand('Dungeons and Dragons', [3000, 3500, 3700, 3900])
                        ]),
                        new Product('Videogames', [
                            new Brand('Nintendo Wii', [6500, 6700, 6200, 5000]),
                            new Brand('Xbox 360', [3000, 2700, 3500, 3000]),
                            new Brand('PlayStation 3', [2500, 2800, 2300, 2000]),
                            new Brand('Nintendo DS', [6000, 6300, 6400, 6100])
                        ]),
                        new Product('Ball games', [
                            new Brand('Soccer', [5000, 6000, 4000, 3500]),
                            new Brand('Basketball', [2900, 3500, 3250, 3300]),
                            new Brand('Tennis', [1500, 1750, 1650, 1800]),
                            new Brand('Hockey', [1000, 800, 950, 1100])
                        ])
                    ]
            )
        ];

        return data;
    }

}