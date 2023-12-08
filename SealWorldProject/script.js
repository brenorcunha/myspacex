const slides = document.querySelectorAll('[id="carousel__item"]')
const nextButton = document.getElementById("carousel__button--next")
const prevButton = document.getElementById("carousel__button--prev")

let currentSlideIndex = 0
nextButton.addEventListener('click', ()=>{
  if (currentSlideIndex === slides.length-1) {
      currentSlideIndex=0
	  console.log(currentSlideIndex)
  } else {
      currentSlideIndex++
	  console.log(currentSlideIndex)
  }
  slides.forEach(slide => {
      slide.classList.remove('carousel__item--visible')
      // slide.ClassList.add("carousel__item--hidden")
  });
  slides[currentSlideIndex].classList.add('carousel__item--visible')
})

prevButton.addEventListener('click', ()=>{
  if (currentSlideIndex <= 0) {
    currentSlideIndex = slides.length-1
	console.log(currentSlideIndex)
  } else {
    currentSlideIndex--
	console.log(currentSlideIndex)
  }
  slides.forEach(slide => {
    slide.classList.remove("carousel__item--visible")
    // slide.classList.add("carousel__item--hidden")
  });
  slides[currentSlideIndex].classList.add('carousel__item--visible')
})
/*
  - Implemente um carousel.
  - Quando o botão de "próximo slide" for clicado:
    1 Remova, de todos os slides, as classes que os deixam visíveis;
    2 Adicione, em todos os slides, as classes que os deixam invisíveis;
    3 Adicione, apenas no slide que deve ser exibido, a classe que deixa um 
      slide visível;
      3.1 Para saber qual slide deve ficar visível, quando o arquivo .js for 
        carregado, inicialize uma variável com 0. Ela representa o index do 
        slide exibido atualmente;
      3.2 Antes de adicionar e remover as classes dos slides, verifique o index 
        do slide exibido atualmente;
          3.3 Se ele corresponder ao index do último slide (3º), o 1º slide deve 
            ser exibido;
          3.4 Se ele não corresponder ao index do último slide, o próximo slide 
            deve ser exibido.
  - Quando o botão de "slide anterior" for clicado:
    1 Execute os passos 1, 2 e 3 acima;
    2 No passo 3.3, se o slide exibido atualmente corresponder ao index do 1º 
      slide, o último slide (3º) deve ser exibido;
    3 No passo 3.4, se o slide exibido atualmente não corresponder ao index do 
   */