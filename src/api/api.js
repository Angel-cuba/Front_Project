export const fetchData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
};

export const fetchDataById = async (id) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  const data = await response.json();
  return data;
};
