const itemList = [
  {
    title: "Verified Pro Supplier",
    sub: [
      {
        img: "1.webp",
        price: "$150.00",
      },
      {
        img: "2.webp",
        price: "$100.00",
      },
      {
        img: "3.webp",
        price: "$50.00",
      },
      {
        img: "4.webp",
        price: "$10.00",
      },
    ],
  },
  {
    title: "Up to 90% off sample",
    sub: [
      {
        img: "dog.jpg",
        price: "$150.00",
      },
      {
        img: "cat.jpg",
        price: "$100.00",
      },
      {
        img: "caat.jpg",
        price: "$50.00",
      },
      {
        img: "pepsi.jpg",
        price: "$10.00",
      },
    ],
  },
  {
    title: "BLACKPINK",
    sub: [
      {
        img: "jisoo.jpg",
        price: "$150.00",
      },
      {
        img: "r.jpg",
        price: "$500.00",
      },
      {
        img: "1.jpg",
        price: "$500.00",
      },
      {
        img: "jennie.jpg",
        price: "$100.00",
      },
    ],
  },
  {
    title: "Special Discount",
    sub: [
      {
        img: "1.webp",
        price: "$150.00",
      },
      {
        img: "2.webp",
        price: "$100.00",
      },
      {
        img: "3.webp",
        price: "$50.00",
      },
      {
        img: "4.webp",
        price: "$10.00",
      },
    ],
  },
];
function displayItem() {
  var txt = "";
  for (i in itemList) {
    var subdata = itemList[i].sub;
    var txt2 = "";
    for (x in subdata) {
      //console.log(subdata[x].img);
      txt2 =
        txt2 +
        ` 
    <div class="item">
        <img src="alibaba/${subdata[x].img}" alt="">
        <h2>${subdata[x].price}</h2>
    </div>`;
    }
    //console.log(itemList[i].title);
    txt =
      txt +
      `
        <div class="col-xxl-6 col-xl-6 col-lg-6 item-container">
            <div class="box">
                <h1>
                    ${itemList[i].title}
                </h1>
                <div class="item-box">
                    ${txt2}
                </div>
            </div>
        </div> `;
  }
  document.getElementById("item-data").innerHTML = txt;
}
displayItem();
