import formatNumber from 'format-number';


const PriceFormat = (price) => {

    const formatter = formatNumber({ format: 'es-CL' });

    return formatter(price);
};

export default PriceFormat