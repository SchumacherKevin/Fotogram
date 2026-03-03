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
const dialog_ref = document.getElementById("dialog_main");

function open_dialog() {
  dialog_ref.showModal();
}

function close_dialog() {
  dialog_ref.close();
}

function render_images() {
  const img_ref = document.getElementById("main_images");

  let main = "";

  for (let i = 0; i < personal_images.length; i++) {
    main += `<img src="${personal_images[i]}" alt="Bild ${i + 1}"">`;
  }
  img_ref.innerHTML = main;
}

render_images();
