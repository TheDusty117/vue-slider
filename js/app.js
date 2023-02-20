const { createApp } = Vue

  createApp({
    data() {
      return {
        //array di oggetti
        slideArrObjects : [
          {
            sourceImg: './img/image1.0.jpg',
            title: 'Fiume Vietnamita',
            description: 'Una bellissima alba sul fiume Mekong'
          },
          {
            sourceImg: './img/image2.0.jpg',
            title: 'Spiaggia Rocce Noosa',
            description: 'Il tramonto Australiano'
          },
          {
            sourceImg: './img/image3.0.jpg',
            title: 'Montagne Canadesi',
            description: 'La glaciale solitudine della montagna'
          },
          {
            sourceImg: './img/image4.0.jpg',
            title: 'Tramonto sulle Ande',
            description: 'Il sole tramonta sulle impervie montagne'
          },
          {
            sourceImg: './img/image5.0.jpg',
            title: 'Notte nella Savana',
            description: 'Gli astri danzano nella notte Africana'
          }
        ],
        

      }
    }
  }).mount('#carousel')