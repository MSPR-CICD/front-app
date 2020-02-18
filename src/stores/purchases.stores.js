import { readable } from 'svelte/store';
import { apiUrl } from '../config';

export const sales = readable(0, async function start(set) {
  const res = await fetch(`${apiUrl}/purchases`);
  const purchases = await res.json();
  const sales = purchases.reduce((sum, purchase) => {
    return (sum += parseInt(purchase.product.price));
  }, 0);
  set(sales);
});
