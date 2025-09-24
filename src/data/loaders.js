export const destinationsLoader = async () => {
  const res = await fetch('/destinations.json');
  if (res.status !== 200) throw Error('something went wrong');
  const data = await res.json();
  return data;
};
