const formatMoney = value => {
    const formatter = new Intl.NumberFormat('es-Es', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(value)
}

const calculateTotalPay = (amount, term) => {
    let total;

    // Mientras mayor es la cantidad, menor es el interes
    if (amount < 10000) {
        total = amount * 1.3;
    } else if (amount >= 10000 && amount < 25000) {
        total = amount * 1.15;
    } else if (amount >= 20000 && amount < 35000) {
        total = amount * 1.1;
    } else {
        total = amount * 1.05;
    }

    // Plazo, a mayor plazo, mayor interés
    if( term === 6){
        total *= 1.1;
    } else if (term ===12){
        total *= 1.15;
    } else {
        total *= 1.2;
    }
    return total;
}

export {
    formatMoney,
    calculateTotalPay
}