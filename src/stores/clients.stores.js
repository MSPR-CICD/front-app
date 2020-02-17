import { readable, writable } from 'svelte/store';

export const clients = readable([], async function start(set) {
  const res = await fetch('http://localhost:3000/clients', { method: 'GET' });
  const clients = await res.json();
  if (res.ok) set(clients);
  else throw res;

  return function stop() {};
});

export const clientsPurchases = async clientId => {
  const res = await fetch(`http://localhost:3000/clients/${clientId}/purchases`);
  const purchases = await res.json();
  if (res.ok) return purchases;
  else throw res;
};

export const currentClient = writable(null);
