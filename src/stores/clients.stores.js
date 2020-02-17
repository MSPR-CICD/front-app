import { readable } from 'svelte/store';

export const clients = readable([], async function start(set) {
  // implementation goes here
  const res = await fetch('http://localhost:3000/clients', { method: 'GET' });
  const clients = await res.json();
  if (res.ok) set(clients);
  else throw res;

  return function stop() {};
});
