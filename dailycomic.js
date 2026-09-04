const comics = [
    {
    date: "test",
    title: "テスト",
    link: "test.html",
    image: "20260827.png"
  },
  
  {
    date: "2026.08.27",
    title: "きまぐれねこちゃん",
    link: "20260827.html",
    image: "20260827.png"
  },
  {
    date: "2026.08.13",
    title: "格安チェーン店あるある",
    link: "20260813.html",
    image: "20260813.png"
  },
  {
    date: "2026.08.10",
    title: "高級レストランあるある",
    link: "20260810.html",
    image: "20260810-4.png"
  },
  {
    date: "2026.06.26",
    title: "ふえる",
    link: "20260626.html",
    image: "20260626.png"
  },
  {
    date: "2023.11.16",
    title: "帽子屋のできごと",
    link: "20231116.html",
    image: "20231116.png"
  },
  {
    date: "2022.04.25",
    title: "広告",
    link: "20220425.html",
    image: "20220425.png"
  },
  {
    date: "2022.02.19",
    title: "インスタであった話",
    link: "20220219.html",
    image: "20220219-1.png"
  },
  {
    date: "2022.01.10",
    title: "香水",
    link: "20220110.html",
    image: "20220110-1.png"
  },
  {
    date: "2021.12.22",
    title: "靴下",
    link: "20211222.html",
    image: "20211222.png"
  },
  {
    date: "2021.09.22",
    title: "納豆キムチ",
    link: "20210922.html",
    image: "20210922.png"
  }
];


// 1ページに表示する漫画数
const comicsPerPage = 7;


// 現在のページを自動判定
const fileName = location.pathname.split("/").pop();

let currentPage = 1;

const pageMatch = fileName.match(/^dailycomic-(\d+)\.html$/);

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

    item.className = "comic-item";

    item.innerHTML = `
      <a href="${comic.link}">
        <img src="${comic.image}" alt="${comic.title}">
      </a>

      <div class="comic-date">${comic.date}</div>

      <div class="comic-title">
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
        ? "dailycomic.html"
        : `dailycomic-${currentPage - 1}.html`;

    pagination.innerHTML += `
      <a href="${previousPage}">&lt;前ページ</a>
    `;
  }


  // 次ページ
  // → 古い漫画があるページへ進む
  if (currentPage < totalPages) {

    const nextPage =
      currentPage === 1
        ? "dailycomic-2.html"
        : `dailycomic-${currentPage + 1}.html`;

    pagination.innerHTML += `
      <a href="${nextPage}">次ページ&gt;</a>
    `;
  }
}
