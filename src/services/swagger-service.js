export default class SwaggerService {
  _apiBase = "https://kinopoiskapiunofficial.tech";

  async getResorse() {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `recived  ${res.status}`);
    }

    return await res.json();
  }

  async getAllFilms() {
    const res = await this.getResorse(`/api/v2.1/films/`);
    return res.results;
  }

  getAllFilm(id) {
    return this.getResorse(`/api/v2.1/films/${id}`);
  }
}

const swagger = new SwaggerService();
swagger.getAllFilms().then((body) => {
  console.log(body);
});
