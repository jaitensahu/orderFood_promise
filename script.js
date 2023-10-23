let itemsImage = {
  Burger:
    "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  Fries:
    "https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg",
  Coldrinks: "https://cdn.cdnparenting.com/articles/2018/07/361921454-H.jpg",
};

let btn = document.querySelector("button");
let burger = document.querySelector("#burger");
let fries = document.querySelector("#fries");
let drinks = document.querySelector("#Coldrinks");
let imageContainer = document.querySelector(".image");
let orderID=document.querySelector(".orderId")

let userInput = document.querySelectorAll("input");
// fries.addEventListener("click",(e)=>{
//     console.log(e.target.labels[0].innerText);
// })
btn.addEventListener("click", (e) => {
  e.preventDefault();
  imageContainer.replaceChildren("Order");
  let myPromise = new Promise((resolve, reject) => {
    imageContainer.replaceChildren("Please Wait...");
    orderID.innerText="..."
    let itemArr = selectedItems(userInput);
    if (itemArr.length > 0) {
      setTimeout(() => {
        imageContainer.replaceChildren("Order Ready");
        resolve(itemArr);
        orderID.innerText=`${((Math.floor(Math.random()*10))+1)*100}`
      }, (Math.floor(Math.random() * 5) + 1) * 1000);
    } else {
      reject("<p>please select atleast one item</p>");
    }
  });

  myPromise
    .then((itemArr) => {
      itemArr.forEach((val) => {
        appendImages(val);
      });
      // console.log(...itemArr);
    })
    .catch((err) => {
      console.log("err");
      imageContainer.replaceChildren("Select Atleast one Item");
    });
});

function appendImages(val) {
  let newImg = document.createElement("img");
  console.log(val);
  console.log(itemsImage[val]);
  newImg.setAttribute("src", `${itemsImage[val]}`);
  imageContainer.appendChild(newImg);
}

// (Math.floor(Math.random()*5)+(1))*1000

function selectedItems(userInput) {
  let itemsArr = [];
  userInput.forEach((val) => {
    if (val.checked == true) {
      itemsArr.push(val.labels[0].innerText);
    }
  });
  return itemsArr;
}
