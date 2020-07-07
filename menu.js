$(document).ready(function() {
    $('.tabs').tabs();
});

$(document).ready(function() {
    $('.footer').hide();
});

const buttons = document.querySelectorAll('.add-items');
var t_amount = 0, t_quantity = 0;

buttons.forEach((button) => {
    button.addEventListener("click", function handler(e) {
        $('.footer').show();
        t_amount = t_amount + parseFloat(e.srcElement.dataset.val);
        e.currentTarget.removeEventListener(e.type, handler);
        e.srcElement.outerHTML = '<button onclick="decrement(event)">-</button><span style="padding: 0 5px 0 5px">1</span><button onclick="increment(event)">+</button>';
        $('#amount').text(t_amount);
    });
})

function decrement(e) {
    if(parseInt(e.toElement.nextSibling.innerText) === 1) {
        e.toElement.nextSibling.innerText = parseInt(e.toElement.nextSibling.innerText);
    }
    else {
        e.toElement.nextSibling.innerText = parseInt(e.toElement.nextSibling.innerText) - 1;
    }
}

function increment(e) {
    if(parseInt(e.toElement.previousSibling.innerText) === 10) {
        e.toElement.previousSibling.innerText = parseInt(e.toElement.previousSibling.innerText);
    }
    else {
        e.toElement.previousSibling.innerText = parseInt(e.toElement.previousSibling.innerText) + 1;
    }
}