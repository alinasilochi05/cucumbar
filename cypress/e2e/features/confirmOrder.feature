Feature: : Confirm order

Scenario: Send an order 

Given The user have a product added in cart
When The user goes to checkout page
And The user clicks on confirm order
Then The order is confirmed