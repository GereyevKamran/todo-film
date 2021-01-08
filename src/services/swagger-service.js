const token = "58d451d6-729e-4419-a2d4-8547f1f99e58";

export const getRate = async () => {
  let movies = [];

  await fetch(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-API-KEY": token,
      },
    }
  )
    .then((response) => response.json())
    .then((response) => (movies = response.films))
    .catch((error) => console.log("error------>", error));

  return movies;
};
