import { readable } from 'svelte/store';

export const sales = readable(0, async function start(set) {
  const res = await fetch('http://localhost:3000/purchases');
  const purchases = await res.json();
  const sales = purchases.reduce((sum, purchase) => {
    return (sum += parseInt(purchase.product.price));
  }, 0);
  set(sales);
});
