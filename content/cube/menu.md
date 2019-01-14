---
title: 'Food Price List'
date: 2018-09-30 # last time rates were updated
aliases:
  - /club/prices
layout: menu
prices:
  snacks:
    - item: 'Candy Bar'
      price: '$1.25'
    - item: 'Candy, Mix + Match'
      price: '4 for $1.00'
    - item: 'Chips'
      price: '$0.50'
    - item: 'Clif Bar'
      price: '$1.00'
    - item: 'Cookies'
      price: '$0.75'
    - item: 'Fruit Cups'
      price: '$0.75'
    - item: 'Fruit Snacks'
      price: '$0.25'
    - item: 'Gum'
      price: '$0.75'
    - item: 'Popcorn'
      price: '$0.50'
    - item: 'Oikos Yogurt'
      price: '$0.75'
    - item: 'Drumsticks'
      price: '$1.00'
    - item: 'Ice Cream Sandwich'
      price: '$0.50'
    - item: 'Hashbrowns'
      price: '$1.25'
    - item: 'Häagen Dazs'
      price: '$2.00'
    - item: 'Goldfish'
      price: '$0.50'
  meals:
    - item: 'Nong Shim Bowl Noodles'
      price: '$1.25'
    - item: 'Asian Meal Bowl Noodles'
      price: '$2.00'
    - item: 'Chimichanga'
      price: '$1.25'
    - item: 'Pizza Pop'
      price: '$1.50'
    - item: 'Pizzas'
      price: '$1.25'
    - item: 'Lasagna'
      price: '$2.75'
    - item: 'Chicken Pot Pie'
      price: '$2.00'
    - item: 'Edamame'
      price: '$1.25'
    - item: 'Cereal'
      price: '$1.00'
    - item: 'UDON'
      price: '$1.00'
  drinks:
    - item: 'Juice Box'
      price: '$0.50'
    - item: 'Water'
      price: '$0.50'
    - item: 'Soda'
      price: '$0.50'
    - item: 'Apple Cider'
      price: '$0.25'
    - item: 'Tea Bag'
      price: '2 for $0.25'
    - item: 'Hot Chocolate'
      price: '$0.50'
    - item: 'Keurig Cups'
      price: '$0.75'
    - item: 'Redbull'
      price: '$1.75'
    - item: 'Coconut Water'
      price: '$1.25'
---

<style>td { white-space: nowrap }</style>

Pay by putting money in the money jar.

Online at https://ubccsss.org/club/prices.

<div class="row">
    <div class="col-md-6 col-xs-6">
        <h2>Snacks</h2>
        {{< prices "prices" "snacks" >}}
    </div>
    <div class="col-md-6 col-xs-6">
        <h2>Meals</h2>
        {{< prices "prices" "meals" >}}
        <h2>Drinks</h2>
        {{< prices "prices" "drinks" >}}
    </div>
</div>
