# global-automation-test-challenge

Write automation test for : http://automationpractice.com/index.php

1. Add to the cart a Faded Short Sleeve T Shirt, size medium, colour blue
2. Add to the cart an Evening Dress, size small, colour beige
3. Add to the cart a Printed Summer Dress, size medium, colour orange
4. Checkout
5. Remove the Evening Dress from the cart
6. Add a second Faded Short Sleeve T Shirt of the same size and colour
7. Assert the total for each line in the cart
8. Assert the cart total is $65.53

### How to run the test? ###

```sh
Go to main directory and run 

yarn run cypress open
```

### Test ###
[The test](https://github.com/wonmaungthein/global-challenge/blob/main/cypress/e2e/1-getting-started/buy-shirt.cy.js)

### The approach I followed ###
1. Visit Main Page
    1. Verify the main components in the page
    2. Eg. Header, body and footer
2. Visit to another page (Eg. Tshirts)
    1. Verify the Tshirts page
    2. Verify product list component
3. Visit to product More Detail Landing Page (They should have specific page, Eg. Tshirt, Evening Dress)
    1. I have used only tshirt landing page instead of all because we don't have specific pages
    2. Verify Product list selection component
    3. Select size and colour
4. Verify item added confirmation popup
5. Verify continue shopping landing page
6. Verify check out landing page
7. Remove item page

### The findings ###
1. They should have specific pages
2. We don't have a specific data-qa-id, it would be great to have them.
3. When removing the items, it took quite sometime to be removed
4. The categories section is not well displayed for the dress
5. Although I have chosen the colour Blue, it didn't change to the colour blue in the cart.
    1. So choosing the colour from the category doesn't reflect with the item in the cart. ( it’s still orange , small )
    2. So I had to choose the right colour from ( More ) section.
6. When you choose the colour and size from ( More ) section, there is no particular description for the customers to be visible ( although we can see a small indicator ).
7. It would be nice to see what colour and size had been chosen by customers like we can see in the first page.
8. Categories are still useful when you have more than one type of clothes, although you can't entirely rely on them. It’s easier to select the items you want.
9. Loading time is very long sometime to see the page
10. After checkout ( don’t really know which one is the evening dress ) No description
11. There is nowhere to describe how many total items in the cart when adding or removing in Shopping Cart Summary
12. You wanted me to assert $65.53 but total cost is 64.00
13. After some runs, it shows 508 status. Displayed "Resource Limit reach"
14. Url end points are not consistent ( when choosing the tshirt colour and size, it has colour and size but when selecting evening dress it doesn't have it)
15. Added some images in issues folder

