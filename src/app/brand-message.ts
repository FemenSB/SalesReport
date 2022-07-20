import { Brand } from "./brand";

export class BrandMessage {
    brand: Brand;
    title: string;
    maxValue: number;

    constructor(brand : Brand, title : string, maxValue : number) {
        this.brand = brand;
        this.title = title;
        this.maxValue = maxValue;
    }
}