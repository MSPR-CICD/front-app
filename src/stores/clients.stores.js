import { readable, writable, derived } from 'svelte/store';
import { apiUrl } from '../config';

export const clients = readable([], async function start(set) {
  const res = await fetch(`${apiUrl}/clients`, { method: 'GET' });
  const clients = await res.json();
  if (res.ok) set(clients);
  else throw res;

  return function stop() {};
});

export const getClientsPurchases = async clientId => {
  const res = await fetch(`${apiUrl}/clients/${clientId}/purchases`);
  const purchases = await res.json();
  if (res.ok) return purchases;
  else throw res;
};

export const currentClient = writable(null);

export const clientPurchases = derived(currentClient, ($currentClient, set) => {
  getClientsPurchases($currentClient.id_client).then(products => {
    set(products);
  });
  return function stop() {};
});
