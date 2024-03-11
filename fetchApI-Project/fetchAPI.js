const url = {
  menu: "https://reanweb.com/api/teaching/get-menu.php",
  news: "https://reanweb.com/api/teaching/get-news.php?mid=0",
  detail: "https://reanweb.com/api/teaching/get-news-detail.php?id=1",
};
const loading = `
            <div class="loading">
                Loading...
            </div>`;

const waiting = () => {
  const body = document.body;
  const popup = document.createElement("div");
  const loading2 = document.createElement("div");
  loading2.classList.add("loading2");
  popup.classList.add("popup");
  popup.appendChild(loading2);
  body.appendChild(popup);
};
async function getMenu() {
  document.querySelector(".menu").innerHTML = loading;
  let rp = await fetch(url.menu);
  let rs = await rp.json();
  console.log(rs)
  let txt = `<li>
    <a class="m1 active" data-mid = '0'>
        <i class="fa-solid fa-house"></i>
    </a>
</li>`;
  rs.forEach((el, i) => {
    txt += `<li>
        <a class="m1" data-mid = '${el['id']}'>${el.name}</a>
    </li>`;
    document.querySelector(".menu").innerHTML = `<ul>${txt}</ul>`;
  });
  //get news by menu
  const m1 = document.querySelectorAll(".m1");
  m1.forEach((el, i) => {
    el.addEventListener("click", function () {
      console.log(el.dataset.mid);
      const mActive = document.querySelectorAll('.active');
      mActive.forEach((el) => {
        el.classList.remove('active');
      });
      el.classList.add('active');
      getNews(el.dataset.mid);
    });
  });
}
async function getNews(mid) {
  waiting();
  const url = `https://reanweb.com/api/teaching/get-news.php?mid=${mid}`;
  let rp = await fetch(url);
  let rs = await rp.json();
  console.log(rs)
  let txt = "";
  rs.forEach((e, i) => {
    txt += `<div class="col-xxl-3 col-xl-3 col-lg-3 item-box">
        <div class="box">
        <img src="${e.img}" alt="">
        <h1>${e.title}</h1>
        </div>
      </div>`;
  });
  document.getElementById("item-data").innerHTML = txt;
  document.querySelector(".popup").remove();
}
getMenu();
getNews(0);
