---
title: "Food Price List"
date: 2022-02-20 # last time rates were updated
layout: menu
prices:
  snacks:
    - item: "Fruit Snack"
      price: "$0.25"
    - item: "Biscuits"
      price: "$0.50"
    - item: "Chips"
      price: "$0.50"
    - item: "Granola Bar"
      price: "$0.50"
    - item: "Ice Cream Sandwhich"
      price: "$0.75"
    - item: "Chocolate Bar"
      price: "$1.00"
    - item: "Ice Cream Bar"
      price: "$1.00"
  meals:
    - item: "Chimichanga"
      price: "$1.25"
    - item: "Fried Rice"
      price: "$3.00"
    - item: "Noodles"
      price: "$3.00"
  beverages:
    - item: "Pop"
      price: "$0.50"
    - item: "Yogurt"
      price: "$0.50"
    - item: "Tea"
      price: "$0.50"
    - item: "Coffee"
      price: "$1.00"
    - item: "Redbull"
      price: "$3.00"
---

<style>td { white-space: nowrap }</style>

Pay by putting money in the money jar.

Online at https://ubccsss.org/cube/menu/.

<div class="row">
    <div class="col-md-6 col-xs-6">
        <h2>Snacks</h2>
        {{< prices "prices" "snacks" >}}
    </div>
    <div class="col-md-6 col-xs-6">
        <h2>Meals</h2>
        {{< prices "prices" "meals" >}}
        <h2>Beverages</h2>
        {{< prices "prices" "beverages" >}}
    </div>
</div>
