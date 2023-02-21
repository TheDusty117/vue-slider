const { createApp } = Vue

  createApp({
    data() {
      return {
        //ARRAY DI OGGETTI
        slideArrObjects : [
          {
            sourceImg: './img/image1.0.jpg',
            title: 'Fiume Vietnamita',
            description: 'Una bellissima alba sul fiume Mekong',
          },
          {
            sourceImg: './img/image2.0.jpg',
            title: 'Spiaggia Rocce Noosa',
            description: 'Il tramonto Australiano',
          },
          {
            sourceImg: './img/image3.0.jpg',
            title: 'Montagne Canadesi',
            description: 'La glaciale solitudine della montagna',
          },
          {
            sourceImg: './img/image4.0.jpg',
            title: 'Tramonto sulle Ande',
            description: 'Il sole tramonta sulle impervie montagne',
          },
          {
            sourceImg: './img/image5.0.jpg',
            title: 'Notte nella Savana',
            description: 'Gli astri danzano nella notte Africana',
          }
        ],

        currentIndex: 0,

        rewindright: 0,
        

      }
    },


    

    //METODI FUNZIONI
    methods:{

      nextIndex(){
        const lastIndex = this.slideArrObjects.length - 1
        this.currentIndex++
        if (this.currentIndex > lastIndex){
          this.currentIndex = 0
        }
      },

      prevIndex(){
        const lastIndex = this.slideArrObjects.length - 1
        this.currentIndex--
        if (this.currentIndex < 0){
          this.currentIndex = lastIndex
        }
      },
    
    },

    //AUTOPLAY with MOUNTED HOOK
    mounted(){
      console.log('MOUNTED')
      this.autoplay = setInterval(this.nextIndex, 3000)
    }
    
  }).mount('#carousel')
















  // const slideElements = document.getElementsByClassName('slide') //prendo tutti gli elementi con classe slide.

  // //VERSIONE ON CLICK DELLO SCORRIMENTO DELLE SLIDE
  
  // slideElements[0].classList.add('active')
  
  
  // const leftBtnElement = document.getElementById('arrow-left')
  
  // const rightBtnElement = document.getElementById('arrow-right')
  
  // console.log(slideElements)
  // console.log(leftBtnElement, rightBtnElement)
  
  // let currentIndex = 0
  // // FUNZIONALITA' AL CLICK DEL BOTTONE DESTRO (PER ANDARE AVANTI)
  
  // rightBtnElement.addEventListener('click', function() {
  //   console.log('slide next', currentIndex)
  // //USO CONDIZIONE IF ovvero appena arriva al click 6 lei smettera' di andare avanti evitando di dare errore
  
  //     //CONDIZIONE IF lunghezza dell'array -1 in modo tale da non dare erroe se vado oltre la sua LUNGHEZZA
  //   slideNext();
  
  // })
  
  
  // leftBtnElement.addEventListener('click', function() { //la slide attiva deve essere >= a 1 della slide attiva
  //   console.log('slide back', currentIndex)
    
  //   slideBack();
  
  // })
  
  
  
  
  
  
  // function slideBack() {
  //   if (currentIndex > 0) {
  
  //     let currentSlide = slideElements[currentIndex];
  //     currentSlide.classList.remove('active');
  
  //     currentIndex -= 1;
  
  //     let nextSlide = slideElements[currentIndex];
  //     nextSlide.classList.add('active');
  //   }
  // }
  
  // function slideNext() {
  //   if (currentIndex < slideElements.length - 1) {
  
  //     //nascondere la slide attiva togliendo la classe 'active'
  //     let currentSlide = slideElements[currentIndex];
  //     currentSlide.classList.remove('active');
  
  //     //incrementare l'indice
  //     currentIndex += 1;
  
  //     //spostare classe 'active' e mostrare la slide successiva
  //     let nextSlide = slideElements[currentIndex];
  //     nextSlide.classList.add('active');
  //   }
  // }