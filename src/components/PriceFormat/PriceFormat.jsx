import formatNumber from 'format-number';

const PriceFormat = (price) => {
    // Define las opciones de formato, en este caso, para el formato 'es-CL'.
    const formatter = formatNumber({ format: 'es-CL' });

    return formatter(price);
};

export default PriceFormat