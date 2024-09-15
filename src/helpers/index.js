const formatMoney = value => {
    const formatter = new Intl.NumberFormat('es-Es', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(value)
}

export {
    formatMoney
}