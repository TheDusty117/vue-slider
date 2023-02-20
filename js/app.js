const { createApp } = Vue

  createApp({
    data() {
      return {
        //array di oggetti
        slideArrObjects : [
          {
            isActive: 'false',
            sourceImg: './img/image1.0.jpg',
            title: 'Fiume Vietnamita',
            description: 'Una bellissima alba sul fiume Mekong',
          },
          {
            isActive: 'false',
            sourceImg: './img/image2.0.jpg',
            title: 'Spiaggia Rocce Noosa',
            description: 'Il tramonto Australiano',
          },
          {
            isActive: 'false',
            sourceImg: './img/image3.0.jpg',
            title: 'Montagne Canadesi',
            description: 'La glaciale solitudine della montagna',
          },
          {
            isActive: 'false',
            sourceImg: './img/image4.0.jpg',
            title: 'Tramonto sulle Ande',
            description: 'Il sole tramonta sulle impervie montagne',
          },
          {
            isActive: 'false',
            sourceImg: './img/image5.0.jpg',
            title: 'Notte nella Savana',
            description: 'Gli astri danzano nella notte Africana',
          }
        ],
      }
    },
    methods:{
      classIsActive(){
        console.log('this.isActive', this.isActive)
        
      }
    }
  }).mount('#carousel')







let currentIndex = 0
  
function slideBack() {
  if (currentIndex > 0) {

    let currentSlide = slideElements[currentIndex];
    currentSlide.classList.remove('active');

    currentIndex -= 1;

    let nextSlide = slideElements[currentIndex];
    nextSlide.classList.add('active');
  }
}

function slideNext() {
  if (currentIndex < slideElements.length - 1) {

    //nascondere la slide attiva togliendo la classe 'active'
    let currentSlide = slideElements[currentIndex];
    currentSlide.classList.remove('active');

    //incrementare l'indice
    currentIndex += 1;

    //spostare classe 'active' e mostrare la slide successiva
    let nextSlide = slideElements[currentIndex];
    nextSlide.classList.add('active');
  }
}