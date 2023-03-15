const reviews = [
  {
    id: 1,
    name: "alia hamadan",
    job: "web developer",
    img: "./images/avatar-ali.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit'\
          Quidem vel vero, autem earum repudiandae illo, autem earum repudianda",
  },
  {
    id: 2,
    name: "anisha parati",
    job: "ux/ui designer",
    img: "./images/avatar-anisha.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit'\
          Quidem vel vero, autem earum repudiandae illo.autem earum repudianda",
  },
  {
    id: 3,
    name: "richard ford",
    job: "frontend developer",
    img: "./images/avatar-richard.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit'\
          Quidem vel vero, autem earum repudiandae illo.autem earum repudianda",
  },
  {
    id: 4,
    name: "shanai xue",
    job: "backend developer",
    img: "./images/avatar-shanai.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit'\
          Quidem vel vero, autem earum repudiandae illo.autem earum repudianda",
  },
];

// select items from index
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

// show person based item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * reviews.length);
  currentItem = random;
  showPerson(currentItem);
});
