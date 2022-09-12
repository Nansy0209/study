function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum
    let shippingSum;

    // если productsSum равно 0,
    if (productsSum == 0) {
        // то shippingSum присвоить значение 0
        shippingSum = 0;
    }
    // если productsSum Больше или равна freeShippingMinSum,
    else if (productsSum >= freeShippingMinSum) {
        // то shippingSum присвоить значение 0
        shippingSum = 0;
    }
    // если productsSum больше 0 и меньше freeShippingMinSum,
    else if (productsSum > 0 && productsSum < freeShippingMinSum) {
        // то shippingSum присвоить значение shippingPrice
        shippingSum = shippingPrice;
    }
    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountSum
    let discountSum;
    // если productsSum больше или равно discountMinSum,
    if (productsSum >= discountMinSum) {
        // то присвойте discountSum значение discountPart процентов от productsSum,
        discountSum = (productsSum / 100) * discountPart;
    }
    // иначе присвойте discountSum значение 0
    else { discountSum = 0; }
    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum
    let totalSum;
    // присвойте totalSum значение productsSum
    totalSum = productsSum;
    // уменьшите totalSum на discountSum
    totalSum = totalSum - discountSum;
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавьте к totalSum значение shippingSum
    totalSum = totalSum + shippingSum;
    // создайте переменную freeShipping
    let freeShipping;
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    freeShipping = !shippingSum;
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}