const getPeople = async () => {
  const response = await fetch("http://swapi.dev/api/people/");

  return response.json();
};

export default getPeople;
