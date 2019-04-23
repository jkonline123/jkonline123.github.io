function getPrice(itemField) {
    return itemField.value || 0;
}

function getQuantity(quantityField) {
    return parseInt(quantityField.value, 10) || 0;
}

function updateItemQuantity(itemField, quantityField) {
    var quantity = getQuantity(quantityField);
    if (quantity < 1) {
        quantity = 1;
    }
    
    if (getPrice(itemField)) {
        quantityField.value = quantity;
    } else {
        quantityField.value = quantityField.defaultValue;
    }
}

function getItemTotal(itemField, quantityField) {
    return getPrice(itemField) * getQuantity(quantityField);
}

function hide(el) {
    el.className = 'hidden';
}

function show(el) {
    el.className = '';
}

function updateTotal(el, amount) {
    hide(el);
    if (amount > 0) {
        show(el);
        el.innerHTML = "Your Order Total is $" + amount;
    }
}
    
function forEachFormItem(form, items, func) {
    return items.reduce(function (result, item) {
        return result + func(form.elements[item], form.elements[item + 'quantity']);
    }, 0);
}


function calculateTotal() {
    var form = this,
        items = ['bakery', 'mns', 'produce', 'cnd', 'wine'],
        total = 0,
        priceField = form.priceField;
    
    forEachFormItem(form, items, updateItemQuantity);
    total = forEachFormItem(form, items, getItemTotal);

    updateTotal(priceField, total);
}

var theForm = document.getElementById('order');
theForm.priceField = document.getElementById('totalPrice');
theForm.onchange = calculateTotal;
//&#8203;
