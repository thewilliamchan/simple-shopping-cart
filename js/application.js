$(document).on("click", ".btn-create", function() {
  if ($(".item-name-input").val() !== "" && $(".item-price-input").val() !== "") {
    if (!isNaN($(".item-price-input").val()) && $(".item-price-input").val() > 0) {
      var newRow = $("<div></div>", {
        "class": "row"
      });
      var itemNameDiv = $("<div></div>", {
        "class": "col-12 col-sm-3"
      });
      var itemPriceDiv = $("<div></div>", {
        "class": "col-12 col-sm-2"
      });
      var itemQtyDiv = $("<div></div>", {
        html: "<div class='input-group'><span class='input-group-addon' id='basic-addon1'>Qty</span><input type='text' class='form-control item-qty-input'><span class='input-group-btn'><button type='button' class='btn btn-default btn-clear-qty'>Clear</button></span></div>",
        "class": "col-12 col-sm-3"
      });
      var itemSubtotalDiv = $("<div></div>", {
        "class": "col-12 col-sm-2 item-subtotal"
      });
      var itemBtnRemoveDiv = $("<div></div>", {
        html: "<button type='button' class='btn btn-danger btn-remove-item'>Remove</button>",
        "class": "col-12 col-sm-2"
      });
      itemNameDiv.text($(".item-name-input").val());
      itemPriceDiv.text("$" + parseFloat($(".item-price-input").val()).toFixed(2));
      itemSubtotalDiv.text("$0.00");
      itemNameDiv.appendTo(newRow);
      itemPriceDiv.appendTo(newRow);
      itemQtyDiv.appendTo(newRow);
      itemSubtotalDiv.appendTo(newRow);
      itemBtnRemoveDiv.appendTo(newRow);
      newRow.insertBefore($(".input-form"));
      $(".item-name-input").val("");
      $(".item-price-input").val("");
      $(".btn-calculate-div").show();
    } else {
      alert("Positive number is required for the item price.");
    }
  } else {
    alert("Item name and price cannot be blank.");
  }
});
$(document).on("change", ".item-qty-input", function() {
  if ((Number.isInteger(parseFloat($(".item-qty-input").val())) || $(".item-qty-input").val() === "") && $(".item-qty-input").val() >= 0) {
    var itemPriceText = $(this).parent().parent().prev().text();
    var itemSubtotal = parseFloat(itemPriceText.substring(1, itemPriceText.length)) * $(this).val();
    var itemSubtotalText = $(this).parent().parent().next();
    itemSubtotalText.text("$" + itemSubtotal.toFixed(2));
  } else {
    alert("Positive integer is required for the item qty.")
  }
});
$(document).on("click", ".btn-clear-qty", function() {
  $(this).parent().prev().val("");
  $(this).parent().parent().parent().next().text("$0.00");
});
$(document).on("click", ".btn-remove-item", function () {
  $(this).parent().parent().remove();
})
$(document).on("click", ".btn-calculate", function() {
  var sum = 0;
  $(".item-subtotal").each(function() {
    var itemSubtotal = parseFloat($(this).text().substring(1, $(this).text().length));
    sum += parseFloat(itemSubtotal);
  })
  $(".total-price").text("Total Price: $" + sum.toFixed(2));
  $(".total-price").show();
});
