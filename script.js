
// EDIT "get_val" AT YOUR OWN RISK!
var get_val = function (sel) {
  value = $(sel).val();
  return parseFloat(value);
};

// EDIT "cashify" AT YOUR OWN RISK!
var cashify = function (sel, fill) {
  return $(sel).val(fill.toFixed(2));
};

var calculate_tip = function () {
  // EDIT THESE LINES AT YOUR OWN RISK!
  var tax_percentage = get_val("#tax-percentage");
  var tip_percentage = get_val("#tip-percentage");
  var meal_one_price = get_val("#meal-one-price");
  var meal_two_price = get_val("#meal-two-price");
  var meal_three_price = get_val("#meal-three-price");

  // YOUR CODE STARTS HERE! ///////////////////////////////////////

  var meal_one_total = 0;
  var meal_two_total = 0;
  var meal_three_total = 0;
  var total = 0;

  // YOUR CODE ENDS HERE! /////////////////////////////////////////

  // EDIT THESE LINES AT YOUR OWN RISK!
  cashify("#meal-one-total", meal_one_total);
  cashify("#meal-two-total", meal_two_total);
  cashify("#meal-three-total", meal_three_total);
  cashify("#total", total);
};

// DO NOT EDIT THIS LINE!
$("#calculate-button").click(calculate_tip);
