import React from "react";

import "./about.css";

const About = () => {
  return (
    <div className={"root__about"}>
      <div className={"about__container-wrapper"}>
        <div className={"container-wrapper__div-text"}>
          <h3 className={"div-text__h3-text"}>
            Список самых ожидаемых фильмов 2020, 2021 и 2022 годов
          </h3>
        </div>
        <div className={"container-wrapper__container-text"}>
          <div>
            <p className={"container-text__tekst"}>
              Самые ожидаемые фильмы - это лучшая категория кинофильмов, выход
              на экраны которых ждут миллионы фанатов по всему миру. В таких
              картинах, как правило, задействованы самые популярные звезды
              мирового кинематографа и бюджеты здесь достигают астрономических
              цифр. К таким фильмам выходят самые интересные трейлеры, которые
              практические мгновенно набирают миллионы просмотров. Портал
              KinoNews внимательно следит за самыми ожидаемыми фильмами и
              оперативно делится со своими посетителями любой новой информацией
              по каждой картине. С помощью выставленных оценок посетители сайта
              создали специальный топ 100 будущих премьер, с которым вы можете
              ознакомиться ниже. С помощью него можно оперативно отследить любую
              информацию по каждому из ожидаемых фильмов. Данный рейтинг
              постоянно меняется, так как из него исчезают фильмы, вышедшие в
              прокат, но на их место приходят новые киноленты, которые займут
              свое место в рейтинге самых ожидаемых фильмов. Заходите к нам
              чаще, чтобы быть в курсе всех последних обновлений
            </p>
          </div>
        </div>
        <div className={"container-wrapper__div-container"}>
          <div>
            <h5 className={"div-container__name-film"}>1. Дюна (Dune)</h5>
          </div>
          <div className={"div-container__film-container"}>
            <div className={"film-container__film-about"}>
              <img className={"film-about__film-img"}></img>
              <p className={"film-about__tekst"}>
                Страна: США, Венгрия, Канада Жанр: драма, приключения,
                фантастика Режиссер: Дени Вильнев В главных ролях: Ребекка
                Фергюсон, Зендая Премьера в России: 01.10.2021
              </p>
            </div>
            <div className={"film-container__reytinq"}>
              <h4>Ожидаемость: 8.64</h4>
            </div>
          </div>
        </div>
        <div className={"container-wrapper__div-container"}>
          <div>
            <h5 className={"div-container__name-film"}>
              2. Убийцы лунного цветка (Killers of the Flower Moon)
            </h5>
          </div>
          <div className={"div-container__film-container"}>
            <div className={"film-container__film-about"}>
              <img className={"film-about__film-img"}></img>
              <p className={"film-about__tekst"}>
                Страна: США Жанр: детектив, драма, исторический, криминал,
                триллер Режиссер: Мартин Скорсезе В главных ролях: Роберт Де
                Ниро, Леонардо ДиКаприо Год выхода: 2021
              </p>
            </div>
            <div className={"film-container__reytinq"}>
              <h4>Ожидаемость: 8.56</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
