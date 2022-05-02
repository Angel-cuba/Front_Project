export const fetchData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
};

export const fetchDataById = async (id) =>
  await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
