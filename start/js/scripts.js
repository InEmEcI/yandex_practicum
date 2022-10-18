let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'img/2.png' },
  { text: 'разобраться, о чём поют рэперы', image: 'img/3.png' },
  { text: 'Юрий Дудь', image: 'img/4.png' },
  { text: 'расставить книги на полке по цвету', image: 'img/5.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'img/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'img/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'img/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'img/9.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'img/10.png' },
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  button.addEventListener('click', {
      handleEvent() {            
          let randomElement = getRandomElement(phrases);
          smoothly(phrase, 'textContent', randomElement.text);
          smoothly(image, 'src', randomElement.image);
          // phrase.textContent = randomElement.text;
          // image.src = randomElement.image;

          if (randomElement.text.length > 40) {
                  advice.style.fontSize = '33px';
                } else {
                  advice.style.fontSize = '42px';
                }
      }
    });


  for (let i = 0; i <= 2; i = i + 1) { 
      phrase.textContent = randomElement.text;
      image.src = randomElement.image;
    // smoothly(phrase, 'textContent', phrases[i].text);
    // smoothly(image, 'src', phrases[i].image);
  };

  // button.onclick = function() {
  //     alert('Клик!');
  //     console.log('Клик!');
  //     // // вывести тип события, элемент и координаты клика
  //     // alert(event.type + " на " + event.currentTarget);
  //     // alert("Координаты: " + event.clientX + ":" + event.clientY);
  // };

  // function doFunction(){
  //   alert('Клик!');
  // };

  // elem.onclick = function(event) {
  //     // вывести тип события, элемент и координаты клика
  //     alert(event.type + " на " + event.currentTarget);
  //     alert("Координаты: " + event.clientX + ":" + event.clientY);
  //   };
  
    // let randomElement = getRandomElement(phrases);
    // phrase.textContent = randomElement.text;
    // image.src = randomElement.image;
  
    // if (randomElement.text.length > 40) {
    //   advice.style.fontSize = '33px';
    // } else {
    //   advice.style.fontSize = '42px';
    // }
  // };

  // button.onclick = function () {
  //   console.log("Клик!");
  //   // let randomElement = getRandomElement(phrases);
  //   // phrase.textContent = randomElement.text;
  //   // image.src = randomElement.image;
  
  //   // if (randomElement.text.length > 40) {
  //   //   advice.style.fontSize = '33px';
  //   // } else {
  //   //   advice.style.fontSize = '42px';
  //   // }

  // };
  







/*

let phrases = [
    { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'посмотреть скидки на авиабилеты', image: 'img/2.png' },
    { text: 'разобраться, о чём поют рэперы', image: 'img/3.png' },
    { text: 'Юрий Дудь', image: 'img/4.png' },
    { text: 'расставить книги на полке по цвету', image: 'img/5.png' },
    { text: 'читать про зарплаты в Сан-Франциско', image: 'img/6.png' },
    { text: 'прочитать новости и ужаснуться в комментариях', image: 'img/7.png' },
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'img/8.png' },
    { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'img/9.png' },
    { text: 'проверить непрочитанное в Telegram-каналах', image: 'img/10.png' },
]; 

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

*/
  
//   for (let i = 0; i <= 2; i = i + 1) { 
//     smoothly(phrase, 'textContent', phrases[i].text);
//     smoothly(image, 'src', phrases[i].image);
//   };
  
/*

  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    phrase.textContent.text = randomElement;
  

    // обратите внимание, что условная конструкция
    // помещена внутри обработчика клика на кнопку
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
//Условие есть, переходите к действию.
// Для элемента advice установите размер шрифта 33px. Такой приём будет в новинку, и мы подскажем: advice.style.fontSize = '33px'.
// Но обещайте, что на днях подумаете, как можно поменять любое CSS-свойство с помощью JS.
    }
  
  });
  
  // а не снаружи
  */
