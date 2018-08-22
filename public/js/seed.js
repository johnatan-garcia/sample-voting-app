window.Seed = (function () {
  function generateVoteCount() {
    return 0;
  }

  const products = [
    {
      id: 1,
      title: 'VIDEO SPORTS',
      members: [
        'Valeria Álvarez Rey', 'Alejandra Sánchez Tristancho', 'Juan Pablo Flores Chávez', 'Luiz Henrique de Andrade', 'Isaac Daniel Garzón Moreno'
      ],
      votes: generateVoteCount()
    },
    {
      id: 2,
      title: 'WHAT WILL IT BE?',
      members: [
        'Julia Beiler Oleskovicz', 'Sabrina Beiler Oleskovicz', 'Marcela Santos do Spirito Santo', 'Manuela Coello'
      ],
      votes: generateVoteCount()
    },
    {
      id: 3,
      title: 'CRIMINAL MINDS',
      members: [
        'Paula Mariana Medina Obregoso', 'Anasol Sobrino Vargas', 'Corina Gabriela Peláez Gallego', 'Gabriela Sofía Pinzón Gómez', 'Ángela María Ortiz Gómez'
      ],
      votes: generateVoteCount()
    },
    {
      id: 4,
      title: 'VIDEOGAMES',
      members: [
        'Ghilherme Magarao Neto ',
        'Mateo Ríos Lozada',
        'Sara Isabella Ramírez Lizcano'
      ],
      votes: generateVoteCount()
    },
    {
      id: 5,
      title: 'THE INTELLIGENCE GAME',
      members: [
        'Valery Ramírez Mejía',
        'Mariajosse Nieto Ortiz ',
        'Mariana Galindo Soto',
        'Kanxia Ying',
        'Sarah Juliana Gutiérrez Medina',

      ],
      votes: generateVoteCount()
    },
    {
      id: 6,
      title: 'CAEDES CITY',
      members: [
        'Juliana Chaves',
        'Luisa Barreto',
        'Sofía carrillo  ',
        'Mariana Mojica',

      ],
      votes: generateVoteCount()
    },
    {
      id: 7,
      title: 'VIDEO GAMES',
      members: [
        'Emma Milanes',
        'Alexandra Mejía      ',    
        'Laura correa',

      ],
      votes: generateVoteCount()
    },
    {
      id: 8,
      title: 'WHO WANTS TO BE A MILLIONAIRE ',
      members: [
        'Tania Villalobos',
        'Sofía Pérez',            
        'Sara Abadía', 
        'Ana María Pinilla',


      ],
      votes: generateVoteCount()
    },
    {
      id: 9,
      title: 'DRAW',
      members: [
        'Sarah Gutiérrez',
        'Malena Reinoso',
        'Andrea Díaz ',
        'Kelly Castro ',
        'María Alejandra Suescún',
        'Mariana Mejía',

      ],
      votes: generateVoteCount()
    },
    {
      id: 10,
      title: 'MALACABA',
      members: [
        'Valentina Gil',
        'María José Galvis',
        'Laura Ramírez ',
        'Camila Vergel',
        'Melissa Reyes ',

      ],
      votes: generateVoteCount()
    },
    {
      id: 11,
      title: 'TIC TAC BASKET',
      members: [
        'Manuela Acosta ',
        'María José Mora',
        'Mariana Triana',
        'Victoria Buscema',
        'Mariana Ponce',
        'Valentina Méndez ',

      ],
      votes: generateVoteCount()
    },
    {
      id: 12,
      title: 'THE FUTURE IS NOW',
      members: [
        'María Paula Salgado',
        'María Fernanda Velandia',
        'Daniela Rubio',
        'Valentina Añez',
        'Verónica Marchena',

      ],
      votes: generateVoteCount()
    },
    {
      id: 13,
      title: 'TECHNOLOGY GAMES TIMELINE',
      members: [
        'Isabella Escobar',
        'Camila Castañeda',
        'Natalia Guevara',
        'Laura Ruíz ',
        'Laura Rincón',

      ],
      votes: generateVoteCount()
    },
    {
      id: 14,
      title: '*HIDDEN KEYS*',
      members: [
        'Lorena Moronte',
        'Nicole Pérez López',
        'Angie Mariana González Ovalle',
        'Valentina Henao González',
      ],
      votes: generateVoteCount()
    },
    {
      id: 15,
      title: 'SCORE AND DESCRIBE ',
      members: [
        'María  Alejandra Machado',
'Laura Barrero          ',
'Alejandra Rincón',

      ],
      votes: generateVoteCount()
    },
    {
      id: 16,
      title: 'SPORTS CHART ',
      members: [
        'Lina Torres',
'María Alejandra Ceveriche',
'María Paz Jiménez       ',                  
'Isabella Jiménez',

      ],
      votes: generateVoteCount()
    },
    {
      id: 17,
      title: 'THE VAXJA GAME',
      members: [
        'Angelina Orozco',
        'Jerónimo Sánchez ',
        'Xue Muller',
        'Valentina Álvarez ',
        'Adriana Campos',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 18,
      title: 'SHOOT THE MAN',
      members: [
        'Juana Márquez ',
        'Paola Serrato',
        'Chloé Varallo',
        'Mariana Melo',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 19,
      title: 'THE MAGIC SQUARE',
      members: [
        'Mariana Castro',
        'Catalina Restrepo',
        'Sara Frayle',
        'Natalia Baquero ',
        'Isabel Zuluaga',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 20,
      title: 'BASKINI',
      members: [
        'Yaeli Karo',
        'María Gabriela Cahuana',
        'Nicolás Chica',
        'Manuela Castillo',
        'Maria Alejandra Barrera',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 21,
      title: 'PROS & CONS',
      members: [
        'Stephanie Díaz ',
        'Ana Valentina Niño',
        'Camila Cruz',
        'Valentina Figueroa',
        'Ana Sofi Ramírez ',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 22,
      title: '10 BOX CHALLENGE',
      members: [
        'Camila Pérez',
        'María Paula Cruz',
        'María Isabella Salazar Morales',
        
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 23,
      title: '5 SENSES CHALLENGE',
      members: [
        'Camila Parilli Torcat',
        'María Paula Giraldo Rivera',
        'Mariana Turriago Medina',
        'Sarah María Cortázar Bedoya ',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 24,
      title: 'TIME\'S CRUSHER',
      members: [
        'Juliana Laforet Barragán',
        'Julia Pina Vieira',
        'Daniela Rosa Karo Bareño',
        'María Lucía Escobar',
        'Molly Toledo Vega',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 25,
      title: 'A HISTORY OF SUPER MARIO BROS.',
      members: [
        'Guiliana Castro Burbano',
        'Valentina Barragán González    ',    
      ],
      votes: generateVoteCount()
    },
    {
      id: 26,
      title: 'ROULETTE CHALLENGE',
      members: [
        'Camila da Silva Rebon',
        'Valentina González Moreno',
        'Valentina Rodríguez Téllez',
        'Nicole Alessandra Parilli Torcat',
        'Valeria Vega Mora',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 27,
      title: 'PHRASE MAKER',
      members: [
        'Sarah María Rey Camperos',
        'Giovanna Gutiérrez',
        'María José Yabrudy Dickens',
        'Juanita Mendoza',
        'Paola Durán Mosquera',
        'Fabiana Torres Jaramillo',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 28,
      title: 'HISTORY OF WII',
      members: [
        'Stephanie Herrbach',
        'Nicole Gallo',
        'Maria Paola',
        'Juliana García',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 29,
      title: 'BOXING',
      members: [
        'Mariana Alzáte',
        'Camila Gaviria',
        'Ángela Castro',
        'Daniela Ortega',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 30,
      title: 'BOWLING',
      members: [
        'Juanita Ángel',
        'Juliana Salazar',
        'Lina Sanchez',
        'Margarita Suarez',
        
      ],
      votes: generateVoteCount()
    },
    {
      id: 31,
      title: 'TENNIS',
      members: [
        'María Teresa Salazar',
        'Juanita Venegas',
        'Leslie Toscano',
        'Ana Sofía Romero',
        
      ],
      votes: generateVoteCount()
    },
  ];

  return { products: products };
}());
