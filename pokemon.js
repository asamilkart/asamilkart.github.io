const comics = [
  {
    date: "2026.08.16",
    title: "うすチュウ",
    link: "20260816.html",
    image: "20260816.png"
  },
  {
    date: "2022.11.25",
    title: "パルデア地方へようこそ！",
    link: "20221125.html",
    image: "20221125.png"
  }
];


// 1ページに表示する漫画数
const comicsPerPage = 7;


// 現在のページを自動判定
const fileName = location.pathname.split("/").pop();

let currentPage = 1;

const pageMatch = fileName.match(/^pokemon-(\d+)\.html$/);

if (pageMatch) {
  currentPage = Number(pageMatch[1]);
}


// 現在のページに表示する漫画
const start = (currentPage - 1) * comicsPerPage;
const end = start + comicsPerPage;

const currentComics = comics.slice(start, end);


// 漫画一覧を表示
const comicList = document.getElementById("comic-list");

if (comicList) {
  currentComics.forEach(comic => {
    const item = document.createElement("div");

    item.className = "comic-card";

    item.innerHTML = `
      <a href="${comic.link}">
        <img src="${comic.image}" alt="${comic.title}">
      </a>

      <div class="date">${comic.date}</div>

      <div class="title">
        <a href="${comic.link}">${comic.title}</a>
      </div>
    `;

    comicList.appendChild(item);
  });
}


// 全ページ数
const totalPages = Math.ceil(comics.length / comicsPerPage);

const pagination = document.getElementById("pagination");

if (pagination) {

  // 前ページ
  // → 新しい漫画があるページへ戻る
  if (currentPage > 1) {

    const previousPage =
      currentPage === 2
        ? "pokemon.html"
        : `pokemon-${currentPage - 1}.html`;

    pagination.innerHTML += `
      <a href="${previousPage}">&lt;前ページ</a>
    `;
  }


  // 次ページ
  // → 古い漫画があるページへ進む
  if (currentPage < totalPages) {

    const nextPage =
      currentPage === 1
        ? "pokemon-2.html"
        : `pokemon-${currentPage + 1}.html`;

    pagination.innerHTML += `
      <a href="${nextPage}">次ページ&gt;</a>
    `;
  }
}
