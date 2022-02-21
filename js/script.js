const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((Link) => {
      Link.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// images
const images = [
  { img: "../images/image-product-1-thumbnail.jpg" },
  { img: "../images/image-product-2-thumbnail.jpg" },
  { img: "../images/image-product-3-thumbnail.jpg" },
  { img: "../images/image-product-4-thumbnail.jpg" },
];

const product = document.getElementById("product");
const imgs = document.querySelectorAll(".img-container img");
let currentImage = images[0].img;
imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    imgs.forEach((img) => {
      img.classList.remove("active");
    });
    currentImage = images[index].img;
    product.src = currentImage;
    img.classList.add("active");
  });
});

// quantity of product

const productQuantity = (selector, productQan, isAdd) => {
  document.getElementById(selector).addEventListener("click", () => {
    const quantity = document.getElementById(productQan);
    const quantityNumber = parseInt(quantity.innerText);
    if (isAdd == true) {
      quantity.innerText = quantityNumber + 1;
    } else {
      if (quantityNumber > 1) {
        quantity.innerText = quantityNumber - 1;
      }
    }
  });
};

productQuantity("plus", "quantity", true);
productQuantity("minus", "quantity", false);

// add to cart
document.querySelector(".btn").addEventListener("click", () => {
  const cartQuantity = document.getElementById("quantity");
  document.querySelector("#cart-quantity").innerText = cartQuantity.innerText;
});
