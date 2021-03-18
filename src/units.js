const kToC = (k) => Math.round(k - 273.15);

const kToF = (k) => Math.round(1.8 * (k - 273.15) + 32);

export { kToC, kToF };
