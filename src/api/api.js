export const fetchData = async () => await fetch('https://restcountries.com/v3.1/all');

export const fetchDataById = async (id) =>
  await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
