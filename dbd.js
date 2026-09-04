const comics = [
  {
    date: "2022.12.12",
    title: "鯖ならギリ飯食える説",
    link: "20221212.html",
    image: "20221212.png"
  },
  {
    date: "2021.11.11",
    title: "やるせない想い",
    link: "20211111.html",
    image: "20211111.png"
  },
  {
    date: "2021.10.24",
    title: "アーカイブやるマン",
    link: "20211024.html",
    image: "20211024-1.png"
  },
  {
    date: "2021.09.03",
    title: "本当にあった怖い話",
    link: "20210903.html",
    image: "20210903.png"
  },
  {
    date: "2021.05.18",
    title: "血族",
    link: "bloodrelative.html",
    image: "20210518.png"
  },
  {
    date: "2021.01.16〜",
    title: "【サバイバー】あるある",
    link: "survivoraruaru.html",
    image: "20210116-1.png"
  },
  {
    date: "2021.01.03",
    title: "【キラー】初心者あるある",
    link: "dbdbeginnerkiller.html",
    image: "20210103-1.png"
  },
  {
    date: "2020.12.22〜",
    title: "【サバイバー】初心者あるある",
    link: "dbdbeginnersurvivor.html",
    image: "dbdbeginnersurvivor.png"
  },
  {
    date: "2020.12.15",
    title: "初心者キラー",
    link: "20201215.html",
    image: "20201215-7.png"
  },
  {
    date: "2020.01.20",
    title: "すれ違う想い",
    link: "20200120.html",
    image: "20200120.png"
  }
];


// 1ページに表示する漫画数
const comicsPerPage = 7;


// 現在のページを自動判定
const fileName = location.pathname.split("/").pop();

let currentPage = 1;

const pageMatch = fileName.match(/^dbd-(\d+)\.html$/);

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
        ? "dbd.html"
        : `dbd-${currentPage - 1}.html`;

    pagination.innerHTML += `
      <a href="${previousPage}">&lt;前ページ</a>
      <br><br>
    `;
  }


  // 次ページ
  // → 古い漫画があるページへ進む
  if (currentPage < totalPages) {

    const nextPage =
      currentPage === 1
        ? "dbd-2.html"
        : `dbd-${currentPage + 1}.html`;

    pagination.innerHTML += `
      <a href="${nextPage}">次ページ&gt;</a>
      <br><br>
    `;
  }


  // カテゴリに戻る
  pagination.innerHTML += `
    <a href="comic.html">&lt;&lt;カテゴリに戻る</a>
    <br><br>
    <a href="index.html">TOP</a>
  `;
}
