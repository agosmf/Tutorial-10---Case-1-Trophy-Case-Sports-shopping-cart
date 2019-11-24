"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Matthew Agostino
   Date:   11/24/2019
   
   Filename: tc_cart.js
	
*/

// Initialize variables
var orderTotal = 0;
var itemCost = 0;

// Initize a variable used to produce the cart html table
//     with the table headers
var cartHTML = "<table>" + 
               "<tr>" +
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
               "</tr>";

// For loop to build out the body of the cart table
for (var i = 0; i < 4; i++)  {
    
    // calculate the item and total costs
    itemCost = itemPrice[i] * itemQty[i];
    orderTotal += itemCost;
    
    // Display the cart items and their info
    cartHTML += "<tr>" +
                "<td><img src='tc_" + item[i]+ ".png' alt='" + item[i] + "' /></td>" +
                "<td>" + itemDescription[i] + "</td>" +
                "<td>$" + itemPrice[i] + "</td>" +
                "<td>" + itemQty[i] + "</td>" +
                "<td>$" + itemCost + "</td></tr>";
}

// Complete the table and display the order total
cartHTML += "<tr>" +
            "<td colspan = '4'>Subtotal</td>" +
            "<td>$" + orderTotal + "</td>" +
            "</tr>" +
            "</table>";

// insert cartHTML into the "cart" div of the html code
document.getElementById("cart").innerHTML = cartHTML;
