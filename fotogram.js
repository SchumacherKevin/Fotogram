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

function openDialog(i) {
  buildDialog(i);
  dialog_ref.showModal();
}

function closeDialog() {
  dialog_ref.close();
}

function stopPropagation(event) {
  event.stopPropagation(event);
}

function renderHeader() {
  document.getElementById("header_logo").innerHTML =
    `<img src="${icons[0]}" alt="Fotogram logo" ">`;
}

function renderFooter() {
  document.getElementById("footer_logo").innerHTML =
    `<img src="${icons[4]}" alt="Developer Akademie logo" ">`;
}

function renderImages() {
  let img_ref = document.getElementById("main_images");

  for (let i = 0; i < personal_images.length; i++) {
    img_ref.innerHTML += `<img onclick="openDialog(${i})" src="${personal_images[i]}" alt="Bild ${i + 1}"">`;
  }
}

function buildDialog(i) {
  let dialog = document.getElementById("dialog_main");

  dialog.innerHTML = DialogContent(i);
}

function DialogContent(i) {
  return `
        <div id="dialog_header" onclick="stopPropagation(event)">
          <h2 id="image_title">${images_title[i]}</h2>
          <button id="close_btn" onclick="closeDialog()">
          <img src="${icons[1]}" alt="close buttton">
          </button>
        </div>

        <div id="image_container" onclick="stopPropagation(event)">
          <img src="${personal_images[i]}" alt="${personal_images[i]}">
        </div>

        <div id="dialog_footer" onclick="stopPropagation(event)">
          <button class="nav_btn" onclick="prevImage(${i})">
            <img src="${icons[2]}" alt="arrow left">
          </button>
          <span id="counter">${i + 1}/${personal_images.length}</span>
          <button class="nav_btn" onclick="nextImage(${i})">
            <img src="${icons[3]}" alt="arrow right">
          </button>
        </div>
      `;
}

function nextImage(i) {
  i = (i + 1) % personal_images.length;
  buildDialog(i);
}

function prevImage(i) {
  i = (i - 1 + personal_images.length) % personal_images.length;
  buildDialog(i);
}

function init() {
  renderHeader();
  renderImages();
  renderFooter();
}
