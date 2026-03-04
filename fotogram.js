const personal_images = [
  "assets/img/daniil_kondrashin-cat-9839788_1920.jpg",
  "assets/img/jhenning-aster-9922917_1920.jpg",
  "assets/img/kingsinnphotography-bearded-dragon-9821324_1920.jpg",
  "assets/img/kranich17-book-8664639_1920.jpg",
  "assets/img/martinophuc-succulents-9949534_1920.jpg",
  "assets/img/miezekieze-cat-9643209_1920.jpg",
  "assets/img/nick4fun-owl-10077647_1920.jpg",
  "assets/img/nordseher-castle-9198810_1920.jpg",
  "assets/img/peterperhac-squirrel-10123754_1920.jpg",
  "assets/img/ralf1403-chess-9549682_1920.jpg",
  "assets/img/wolfgang_hasselmann-sunset-10128347_1920.jpg",
  "assets/img/zlapane_chwile-tenerife-10088999_1920.jpg",
];
const images_title = [
  "NICE CAT",
  "PURPLE FLOWER",
  "LIZARDS",
  "BOOK",
  "FLOWERS IN THE MORNING",
  "LITTLE KITTEN",
  "OWL SLEEPING",
  "CASTLE",
  "SQUIRREL",
  "CHESS BOARD",
  "SNOW SUNSET",
  "FAVORITE CITY",
];
const icons = [
  "assets/icons/logo.png",
  "assets/icons/closebtn.png",
  "assets/icons/arrowleft.png",
  "assets/icons/arrowright.png",
  "assets/icons/footerlogo.png",
];

const dialog_ref = document.getElementById("dialog_main");

function open_dialog() {
  buildDialog();
  dialog_ref.showModal();
}

function close_dialog() {
  dialog_ref.close();
}

function render_header(i) {
  document.getElementById("header_logo").innerHTML =
    `<img src="${icons[i]}" alt="Fotogram logo" ">`;
}

function render_footer(i) {
  document.getElementById("footer_logo").innerHTML =
    `<img src="${icons[i]}" alt="Developer Akademie logo" ">`;
}

function render_images() {
  let img_ref = document.getElementById("main_images");

  let main = "";

  for (let i = 0; i < personal_images.length; i++) {
    main += `<img src="${personal_images[i]}" alt="Bild ${i + 1}"">`;
  }
  img_ref.innerHTML = main;
}

let current = 0;

function buildDialog() {
  let dialog = document.getElementById("dialog_main");

  dialog.innerHTML = `
        <div id="dialog_header">
          <h2 id="image_title">${images_title[current]}</h2>
          <button id="close_btn" onclick="close_dialog()">
          <img src="${icons[1]}" alt="close buttton">
          </button>
        </div>

        <div id="image_container">
          <img src="${personal_images[current]}" alt="${personal_images[current]}">
        </div>

        <div id="dialog_footer">
          <button class="nav_btn" onclick="prevImage()">
            <img src="${icons[2]}" alt="arrow left">
          </button>
          <span id="counter">${current + 1}/${personal_images.length}</span>
          <button class="nav_btn" onclick="nextImage()">
            <img src="${icons[3]}" alt="arrow right">
          </button>
        </div>
      `;
}
function nextImage() {
  current = (current + 1) % personal_images.length;
  buildDialog();
}

function prevImage() {
  current = (current - 1 + personal_images.length) % personal_images.length;
  buildDialog();
}

render_header(0);

render_images();

render_footer(4);
