'use strict'

console.log(`Оценка 60 баллов.

Вёрстка +10
- на странице есть несколько фото и строка поиска +5

- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5

- При загрузке приложения на странице отображаются полученные от API изображения +10

- Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10

Поиск +30
- при открытии приложения курсор находится в поле ввода +5

- есть placeholder +5

- автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5

- поисковый запрос можно отправить нажатием клавиши Enter +5

- после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5

- в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5

Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +0

    {высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо}

`);



const container = document.querySelector('.content__inner');
let urlPutRandomPhoto = 'https://api.unsplash.com/photos/random?query=spring&orientation=landscape&client_id=YDBSzeacMW-RQDSudaxOOrSJ5O4sgi_YEofRgvN1Rsk&count=30&extras=url_m';
const search = document.querySelector('.header__input');
const searchIcon = document.querySelector('.header__search-icon');

search.focus();


function showData(data) {
    for (let i = 0; i < data.length; i++) {
        const img = document.createElement('div');
        img.className = 'img';

        // console.log(data[i].urls.regular);

        img.style.backgroundImage = `url(${data[i].urls.regular})`;
        container.append(img);
    }
}

async function getData() {
    const res = await fetch(urlPutRandomPhoto);
    const data = await res.json();
    // data.forEach((el, index) => console.log(
    //     data[index].urls.regular));
    showData(data);
}

getData();



searchIcon.addEventListener('click', function () {
    if (search.value != '') {
        urlPutRandomPhoto = `https://api.unsplash.com/photos/random?query=${search.value}&orientation=landscape&client_id=YDBSzeacMW-RQDSudaxOOrSJ5O4sgi_YEofRgvN1Rsk&count=30&extras=url_m`
        console.log(urlPutRandomPhoto);
    }
    document.querySelectorAll('.img').forEach(el => el.remove());
    getData();

});

search.addEventListener("keydown", ({
    key
}) => {
    if (key === "Enter") {
        urlPutRandomPhoto = `https://api.unsplash.com/photos/random?query=${search.value}&orientation=landscape&client_id=YDBSzeacMW-RQDSudaxOOrSJ5O4sgi_YEofRgvN1Rsk&count=30&extras=url_m`

        document.querySelectorAll('.img').forEach(el => el.remove());
        getData();
    }

})
