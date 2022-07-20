# SalesReport

Web app displaying charts of the monthly sales of brands, categorized by 'product' and 'category'.

## Selecting brands

When a brand is selected in SelectComponent, its sales data is sent to ChartComponent, where it will be displayed as a bar chart. Everytime the product is changed, its first brand is selected. Everytime the category is changed, its first product is selected.

## Charts scale

To better visualize and compare data between different brands, the charts for all the brands of a given product are rendered using the same scale. This scale is defined by the sales of the top selling brand in its month with the biggest amount of sales.

## Charts title

Charts have a title indicating the category, product and brand from which they are displaying sales data. This title follows the pattern: 'Sales by month for: Category - Product - Brand'

## Sales data

The data displayed is a mock hardcoded into /src/app/data.service.ts

## Technologies used

Project built with the Angular Framework. Base project and components generated by [Angular CLI](https://github.com/angular/angular-cli) 8.3.18.
Charts rendered by Chart.js.
'Select' components from Material v8.

## Install dependencies

Run `npm install` to install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.