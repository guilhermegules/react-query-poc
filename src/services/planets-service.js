const getPlanets = async () => {
  const response = await fetch("http://swapi.dev/api/planets/");

  return response.json();
};

export default getPlanets;
