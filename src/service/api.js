const endApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = () => fetch(endApi)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => err);

export default getApi;
