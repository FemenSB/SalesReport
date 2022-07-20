import { Brand } from "./brand";

export class Product {
    name: string;
    brands: Brand[];

    constructor(name : string, brands : Brand[]) {
        this.name = name;
        this.brands = brands;
    }
}