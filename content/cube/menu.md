---
title: 'Food Price List'
date: 2019-01-27 # last time rates were updated
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
    - item: 'Bear Paws'
      price: '$0.25'
    - item: 'Ice Cream Sandwich'
      price: '$0.75'
    - item: 'Ice Cream Cone'
      price: '$1.50'
    - item: 'Granola Bars'
      price: '$0.50'
    - item: 'Pudding'
      price: '$0.75'
    - item: 'Yogurt'
      price: '$0.75'
    - item: 'Fruit Cups'
      price: '$0.75'
  meals:
    - item: 'Calzone'
      price: '$4.00'
    - item: 'Noodles'
      price: '$1.75'
    - item: 'Pizza Pop'
      price: '$1.50'
    - item: 'Pizzas'
      price: '$1.25'
  drinks:
    - item: 'Water'
      price: '$0.50'
    - item: 'Pop'
      price: '$0.50'
    - item: 'Tea Bag'
      price: '2 for $0.25'
    - item: 'Hot Chocolate'
      price: '$0.50'
    - item: 'Keurig Cups'
      price: '$0.75'
    - item: 'Redbull'
      price: '$2.00'
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
