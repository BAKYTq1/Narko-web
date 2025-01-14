const block = document.querySelector('#block');
const data = [
  { name: 'Наркомания' },
  { name: 'Алкоголизм' },
  { name: 'Реабилитация' },
  { name: 'Кодирование' },
  { name: 'Цены' },
  { name: 'О клинике' },
  { name: 'Контакты' }
];

data.forEach((item) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = `
    <div class="dropdown">
      <button class="dropdown-toggle">${item.name} +</button>
      <ul class="dropdown-menu">
        <li>Пункт меню 1</li>
        <li>Пункт меню 2</li>
        <li>...</li>
        <li>Пункт меню N</li>
      </ul>
    </div>
  `;
  block.appendChild(newElement);
});


document.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown-toggle')) {
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');


    const isOpen = dropdown.classList.contains('open');
    event.target.textContent = isOpen ? `${event.target.textContent.replace('+', '−')}` : `${event.target.textContent.replace('−', '+')}`;
  } else {

    document.querySelectorAll('.dropdown').forEach((dropdown) => {
      dropdown.classList.remove('open');
      const button = dropdown.querySelector('.dropdown-toggle');
      if (button.textContent.includes('−')) {
        button.textContent = button.textContent.replace('−', '+');
      }
    });
  }
});

const block4 = document.querySelector("#bloks")

const card = [
  {
   name: 'Лечение алкоголизма на дому',
 text:"УБОД",
 price: '30 000',
 text1:"Лечение алкоголизма в сционаре",
 price1: '6 500',
 text2:"Принудительное лечение алкозависимых",
 price2: '6 500',
 text3:"Лечение женского алкоголизма",
 price3: '6 500',
  },
]

card.forEach((card) => {
  const div = document.createElement('div')
  div.innerHTML = `
  <div class=''>
  <div class='w-[1793px] h-[304px] p-[16px] pt-[10px]'>
  <h1 class='font-bold text-[22px] '>${card.name}</h1>
  <div class='w-[1761px]  h-[56px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
   <h1 class='text-[#2770F1] '>${card.text}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price} ₽</li></ul>
  </div>
  <div class='w-[1761px]  h-[56px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
   <h1 class='text-[#2770F1] '>${card.text1}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price1} ₽</li></ul>
  </div>
  <div class='w-[1761px]  h-[56px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
   <h1 class='text-[#2770F1] '>${card.text2}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price2} ₽</li></ul>
  </div>
  <div class='w-[1761px]  h-[56px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
   <h1 class='text-[#2770F1] '>${card.text3}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price3} ₽</li></ul>
  </div>
  </div>
  `;
  block4.appendChild(div)
})
// 
// const blok = document.querySelector("#blok")

// const card2 = [
//   {
//    name: 'Реабилитация наркомании',
//  text:"УБОД",
//  price: '40 000',
//  text1:"Кодирование Налтрексоном",
//  price1: '12 000',
//  text2:"Лечение от Соли",
//  price2: '12 000',
//  text3:"Лечение от Лирики",
//  price3: '12 000',
//   },
//   {
//    name: 'Детоксикация от наркотиков',
//  text:"Лечение алкоголизма",
//  price: '3 800',
//  text1:"Реабилитация алкоголизма",
//  price1: '1 130 ₽/сутки',
//  text2:"Кодирование от алкоголизма",
//  price2: '3 800',
//  text3:"Стационарное",
//  price3: '6 000',
//   },
// ]

// card2.forEach((card) => {
//   const div2 = document.createElement('div')
//   div2.innerHTML = `
//   <div class=''>
//   <div class='w-[550px] h-[266px] p-[16px] pt-[10px]'>
//   <h1 class='font-bold text-[22px] '>${card.name}</h1>
//   <div class='w-[534px]  h-[48px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
//    <h1 class='text-[#2770F1] '>${card.text}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price} ₽</li></ul>
//   </div>
//   <div class='w-[534px]  h-[48px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
//    <h1 class='text-[#2770F1] '>${card.text1}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price1} </li></ul>
//   </div>
//   <div class='w-[534px]  h-[48px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
//    <h1 class='text-[#2770F1] '>${card.text2}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price2} ₽</li></ul>
//   </div>
//   <div class='w-[534px]  h-[48px] rounded-[6px] hover:shadow-md cursor-pointer flex  items-center gap-[0px] p-[10px]' > 
//    <h1 class='text-[#2770F1] '>${card.text3}</h1> <div class='flex-1 h-[1px] bg-[#D7E2FF] mx-4'></div> <ul class=' h-[24px]'><li class=''>от ${card.price3} ₽</li></ul>
//   </div>
//   </div>
//   `;
//   blok.appendChild(div2)
// })

const blockSection3 = document.querySelector("#blockSection3")

const Section3 = [
  {
    img:'./img/Frame 57.svg',
    text: 'Поступление в клинику вашей заявки или звонка'
  },
  {
    img:'./img/Frame 57 (1).svg',
    text: 'Наш оператор соберет анамнез и назначит специалиста для выезда'
  },
  {
    img:'./img/Frame 57 (2).svg',
    text: 'Врач приезжает за 30 минут'
  },
  {
    img:'./img/Frame 57 (3).svg',
    text: 'Оплата врачу производится перед процедурами (наличные, переводом на карту)'
  },
  {
    img:'./img/Frame 57 (4).svg',
    text: 'Оказание пациенту медицинской помощи (капельницы, уколы и др.)'
  },
  {
    img:'./img/Frame 57 (5).svg',
    text: 'Мы обязательно  перезвоним Вам, чтобы проконтролировать качество оказанной услуги'
  },
]
Section3.forEach((item) => {
  const Creatediv = document.createElement('div')
  Creatediv.innerHTML = `
  <div class="w-[351px] h-[190px] rounded-tl-[56px] rounded-[4px] bg-white ">
      <img src='${item.img}'>
      <p class='pl-[16px] font-medium text-[16px] leading-[24px] mt-[-16px] text-[#1B315F]'>${item.text}</p>
     </div>
  `;
  blockSection3.appendChild(Creatediv)
})
// 
let currentIndex = 0;

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = src;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel img');
    const imageWidth = images[0].clientWidth + 20;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * imageWidth;
    track.style.transform = `translateX(${offset}px)`;
}

// const section7 = document.querySelector('#section7')
// const info = [
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
//   {
//     img:'./img/shutterstock_1637496319 2.png',
//   },
// ]
// info.forEach((info) => {
//   const adddiv = document.createElement('div')
//   adddiv.innerHTML = `
//   <div>
//   <div class='w-[371.5px] h-[277px] '>
//   <img src='${info.img}' class='w-[371.5px] h-[277px]'>
//   </div>
//   </div>
//   `
//   section7.appendChild(adddiv)
// })
// const section8block = document.querySelector('#section8-bloks')
// const cards = [
//   {
//     img:'./img/Frame 85 (1).png',
//     pText:'Гарантируем на 100% результат после лечения',
//   },
//   {
//     img:'./img/Frame 85 (2).png',
//     pText:'Никто не узнает, кто мы и зачем приходили',
//   },
//   {
//     img:'./img/Frame 85 (3).png',
//     pText:'Проведем диагностику для исключения нежелательной реакции',
//   },
//   {
//     img:'./img/Frame 85.png',
//     pText:'Используем только качественные и проверенные препараты',
//   },
// ]
// cards.forEach((info) => {
//   const dom = document.createElement('div')
//   dom.innerHTML = `
//   <div class='w-[359px] h-[212px] rounded-[4px] p-[24px] gap-[25px] hover:shadow-md'> 
//   <img src='${info.img}'>
//   <p>${info.pText}</p>
//   </div>
//   `;
//   section8block.appendChild(dom)
// })
// 
const slider = document.querySelector('.slider');
const track = document.querySelector('.slider-track');

let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = track.offsetLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX; // Distance dragged
    track.style.transform = `translateX(${scrollLeft + walk}px)`;
});