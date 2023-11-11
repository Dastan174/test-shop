export const calcTotalPrice = (products) => {
  return products.reduce((acc, el) => {
    return acc += el.subPrice
  }, 0);
};
export const calcSubPrice = element => +element.count * element.item.price