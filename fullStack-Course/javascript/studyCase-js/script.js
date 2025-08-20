const nomes = [
  "Helena",
  "Sabrina",
  "Yasmin",
  "Daniela",
  "Kleber",
  "Zeca",
  "Eduardo",
  "Tiago",
  "Joana",
  "Natalia",
  "Xuxa",
  "Sabrina",
  "Carlos",
  "Bruno",
  "Igor",
  "Wesley",
  "Xuxa",
  "Ursula",
  "Tiago",
  "Kleber",
  "Ana",
  "Fernanda",
  "Natalia",
  "Daniela",
  "Joana",
  "Marcos",
  "Victor",
  "Eduardo",
  "Eduardo",
  "Xuxa",
  "Ursula",
  "Vinicius",
  "Wesley",
  "Otavio",
  "Fernanda",
  "Helena",
  "Wesley",
  "Yasmin",
  "Fernanda",
  "Wesley",
  "Victor",
  "Zeca",
  "Yasmin",
  "Kleber",
  "Fernanda",
  "Wesley",
  "Yasmin",
  "Carlos",
  "Vinicius",
  "Yasmin",
  "Daniela",
  "Daniela",
  "Otavio",
  "Eduardo",
  "Xuxa",
  "Helena",
  "Victor",
  "Joana",
  "Eduardo",
  "Bruno",
  "Rafael",
  "Eduardo",
  "Gabriel",
  "Carlos",
  "Otavio",
  "Wesley",
  "Gabriel",
  "Marcos",
  "Igor",
  "Otavio",
  "Helena",
  "Larissa",
  "Rafael",
  "Daniela",
  "Joana",
  "Larissa",
  "Larissa",
  "Wesley",
  "Fernanda",
  "Kleber",
  "Ursula",
  "Fernanda",
  "Xuxa",
  "Igor",
  "Ursula",
  "Gabriel",
  "Natalia",
  "Zeca",
  "Xuxa",
  "Natalia",
  "Natalia",
  "Helena",
  "Helena",
  "Otavio",
  "Zeca",
  "Igor",
  "Otavio",
  "Daniela",
  "Tiago",
  "Marcos",
  "Victor",
  "Gabriel",
  "Carlos",
  "Fernanda",
  "Victor",
  "Rafael",
  "Carlos",
  "Daniela",
  "Otavio",
  "Daniela",
  "Gabriel",
  "Victor",
  "Tiago",
  "Gabriel",
  "Bruno",
  "Ana",
  "Victor",
  "Patricia",
  "Patricia",
  "Xuxa",
  "Tiago",
  "Xuxa",
  "Daniela",
  "Vinicius",
  "Yasmin",
  "Otavio",
  "Marcos",
  "Gabriel",
  "Rafael",
  "Igor",
  "Xuxa",
  "Igor",
  "Rafael",
  "Vinicius",
  "Igor",
  "Natalia",
  "Natalia",
  "Yasmin",
  "Tiago",
  "Bruno",
  "Sabrina",
  "Victor",
  "Vinicius",
  "Marcos",
  "Natalia",
  "Patricia",
  "Rafael",
  "Rafael",
  "Carlos",
  "Rafael",
  "Tiago",
  "Patricia",
  "Victor",
  "Otavio",
  "Ursula",
  "Carlos",
  "Zeca",
  "Natalia",
  "Rafael",
  "Otavio",
  "Wesley",
  "Yasmin",
  "Eduardo",
  "Tiago",
  "Rafael",
  "Rafael",
  "Wesley",
  "Fernanda",
  "Xuxa",
  "Natalia",
  "Kleber",
  "Carlos",
  "Ursula",
  "Bruno",
  "Wesley",
  "Marcos",
  "Joana",
  "Zeca",
  "Ursula",
  "Patricia",
  "Tiago",
  "Joana",
  "Helena",
  "Daniela",
  "Igor",
  "Vinicius",
  "Wesley",
  "Rafael",
  "Vinicius",
  "Fernanda",
  "Igor",
  "Natalia",
  "Gabriel",
  "Kleber",
  "Igor",
  "Fernanda",
  "Joana",
  "Victor",
  "Larissa",
  "Otavio",
  "Eduardo",
  "Wesley",
  "Wesley",
  "Kleber",
  "Fernanda",
  "Natalia",
  "Marcos",
  "Xuxa",
  "Otavio",
  "Eduardo",
  "Vinicius",
  "Kleber",
  "Carlos",
  "Fernanda",
  "Sabrina",
  "Wesley",
  "Rafael",
  "Wesley",
  "Xuxa",
  "Helena",
  "Wesley",
  "Yasmin",
  "Bruno",
  "Daniela",
  "Zeca",
  "Xuxa",
  "Otavio",
  "Rafael",
  "Tiago",
  "Sabrina",
  "Kleber",
  "Carlos",
  "Wesley",
  "Marcos",
  "Vinicius",
  "Ana",
  "Larissa",
  "Wesley",
  "Sabrina",
  "Larissa",
  "Larissa",
  "Xuxa",
  "Helena",
  "Natalia",
  "Xuxa",
  "Ursula",
  "Ursula",
  "Igor",
  "Ana",
  "Igor",
  "Gabriel",
  "Bruno",
  "Bruno",
  "Joana",
  "Vinicius",
  "Daniela",
  "Victor",
  "Rafael",
  "Bruno",
  "Igor",
  "Rafael",
  "Vinicius",
  "Natalia",
  "Daniela",
  "Zeca",
  "Victor",
  "Igor",
  "Joana",
  "Igor",
  "Igor",
  "Sabrina",
  "Sabrina",
  "Natalia",
  "Larissa",
  "Kleber",
  "Ursula",
  "Helena",
  "Joana",
  "Joana",
  "Kleber",
  "Tiago",
  "Kleber",
  "Victor",
  "Vinicius",
  "Patricia",
  "Igor",
  "Victor",
  "Xuxa",
  "Ursula",
  "Tiago",
  "Kleber",
  "Larissa",
  "Rafael",
  "Victor",
  "Xuxa",
  "Natalia",
  "Gabriel",
  "Marcos",
  "Tiago",
  "Ursula",
  "Rafael",
  "Otavio",
  "Vinicius",
  "Otavio",
  "Bruno",
  "Carlos",
  "Victor",
  "Daniela",
  "Ana",
  "Fernanda",
  "Tiago",
  "Wesley",
  "Larissa",
  "Yasmin",
  "Xuxa",
  "Kleber",
  "Daniela",
  "Vinicius",
  "Marcos",
  "Ursula",
  "Kleber",
  "Vinicius",
  "Vinicius",
  "Bruno",
  "Daniela",
  "Zeca",
  "Marcos",
  "Fernanda",
  "Zeca",
  "Larissa",
  "Fernanda",
  "Carlos",
  "Igor",
  "Victor",
  "Helena",
  "Daniela",
  "Natalia",
  "Yasmin",
  "Rafael",
  "Patricia",
  "Rafael",
  "Sabrina",
  "Carlos",
  "Larissa",
  "Bruno",
  "Larissa",
  "Ursula",
  "Yasmin",
  "Vinicius",
  "Otavio",
  "Xuxa",
  "Igor",
  "Otavio",
  "Eduardo",
  "Sabrina",
  "Marcos",
  "Larissa",
  "Otavio",
  "Gabriel",
  "Marcos",
  "Larissa",
  "Natalia",
  "Zeca",
  "Natalia",
  "Joana",
  "Ursula",
  "Joana",
  "Marcos",
  "Ana",
  "Xuxa",
  "Fernanda",
  "Eduardo",
  "Zeca",
  "Yasmin",
  "Otavio",
  "Ursula",
  "Igor",
  "Marcos",
  "Fernanda",
  "Ursula",
  "Otavio",
  "Kleber",
  "Sabrina",
  "Natalia",
  "Xuxa",
  "Patricia",
  "Eduardo",
  "Patricia",
  "Rafael",
  "Victor",
  "Kleber",
  "Carlos",
  "Bruno",
  "Marcos",
  "Kleber",
  "Xuxa",
  "Larissa",
  "Gabriel",
  "Bruno",
  "Ursula",
  "Natalia",
  "Eduardo",
  "Larissa",
  "Victor",
  "Yasmin",
  "Patricia",
  "Ana",
  "Tiago",
  "Otavio",
  "Victor",
  "Rafael",
  "Gabriel",
  "Patricia",
  "Marcos",
  "Ursula",
  "Gabriel",
  "Helena",
  "Victor",
  "Wesley",
  "Helena",
  "Helena",
  "Yasmin",
  "Otavio",
  "Marcos",
  "Marcos",
  "Carlos",
  "Igor",
  "Larissa",
  "Ana",
  "Ana",
  "Fernanda",
  "Patricia",
  "Ursula",
  "Natalia",
  "Natalia",
  "Kleber",
  "Sabrina",
  "Ana",
  "Wesley",
  "Victor",
  "Xuxa",
  "Natalia",
  "Ana",
  "Tiago",
  "Kleber",
  "Victor",
  "Zeca",
  "Helena",
  "Kleber",
  "Gabriel",
  "Tiago",
  "Sabrina",
  "Marcos",
  "Carlos",
  "Vinicius",
  "Vinicius",
  "Patricia",
  "Igor",
  "Fernanda",
  "Helena",
  "Natalia",
  "Rafael",
  "Igor",
  "Helena",
  "Rafael",
  "Xuxa",
  "Xuxa",
  "Tiago",
  "Victor",
  "Joana",
  "Ana",
  "Eduardo",
  "Ana",
  "Rafael",
  "Yasmin",
  "Ana",
  "Zeca",
  "Vinicius",
  "Xuxa",
  "Sabrina",
  "Joana",
  "Helena",
  "Sabrina",
  "Ana",
  "Marcos",
  "Kleber",
  "Helena",
  "Joana",
  "Patricia",
  "Natalia",
  "Vinicius",
  "Daniela",
  "Xuxa",
  "Ursula",
  "Otavio",
  "Rafael",
  "Vinicius",
  "Eduardo",
  "Patricia",
  "Tiago"
];

const pessoas = [
  {
    "id": 1,
    "nome": "Zeca",
    "idade": 20,
    "sexo": "M"
  },
  {
    "id": 2,
    "nome": "Rafael",
    "idade": 55,
    "sexo": "M"
  },
  {
    "id": 3,
    "nome": "Gabriel",
    "idade": 80,
    "sexo": "F"
  },
  {
    "id": 4,
    "nome": "Ana",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 5,
    "nome": "Ana",
    "idade": 58,
    "sexo": "F"
  },
  {
    "id": 6,
    "nome": "Ana",
    "idade": 45,
    "sexo": "M"
  },
  {
    "id": 7,
    "nome": "Fernanda",
    "idade": 42,
    "sexo": "F"
  },
  {
    "id": 8,
    "nome": "Helena",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 9,
    "nome": "Carlos",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 10,
    "nome": "Joana",
    "idade": 42,
    "sexo": "F"
  },
  {
    "id": 11,
    "nome": "Fernanda",
    "idade": 30,
    "sexo": "M"
  },
  {
    "id": 12,
    "nome": "Wesley",
    "idade": 28,
    "sexo": "M"
  },
  {
    "id": 13,
    "nome": "Tiago",
    "idade": 12,
    "sexo": "M"
  },
  {
    "id": 14,
    "nome": "Daniela",
    "idade": 10,
    "sexo": "M"
  },
  {
    "id": 15,
    "nome": "Natalia",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 16,
    "nome": "Patricia",
    "idade": 33,
    "sexo": "M"
  },
  {
    "id": 17,
    "nome": "Igor",
    "idade": 20,
    "sexo": "F"
  },
  {
    "id": 18,
    "nome": "Carlos",
    "idade": 65,
    "sexo": "M"
  },
  {
    "id": 19,
    "nome": "Zeca",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 20,
    "nome": "Marcos",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 21,
    "nome": "Ursula",
    "idade": 15,
    "sexo": "M"
  },
  {
    "id": 22,
    "nome": "Gabriel",
    "idade": 27,
    "sexo": "F"
  },
  {
    "id": 23,
    "nome": "Bruno",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 24,
    "nome": "Carlos",
    "idade": 55,
    "sexo": "M"
  },
  {
    "id": 25,
    "nome": "Helena",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 26,
    "nome": "Xuxa",
    "idade": 80,
    "sexo": "F"
  },
  {
    "id": 27,
    "nome": "Bruno",
    "idade": 66,
    "sexo": "F"
  },
  {
    "id": 28,
    "nome": "Zeca",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 29,
    "nome": "Xuxa",
    "idade": 66,
    "sexo": "M"
  },
  {
    "id": 30,
    "nome": "Rafael",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 31,
    "nome": "Wesley",
    "idade": 60,
    "sexo": "M"
  },
  {
    "id": 32,
    "nome": "Igor",
    "idade": 50,
    "sexo": "F"
  },
  {
    "id": 33,
    "nome": "Fernanda",
    "idade": 41,
    "sexo": "F"
  },
  {
    "id": 34,
    "nome": "Ana",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 35,
    "nome": "Ana",
    "idade": 27,
    "sexo": "F"
  },
  {
    "id": 36,
    "nome": "Daniela",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 37,
    "nome": "Helena",
    "idade": 44,
    "sexo": "F"
  },
  {
    "id": 38,
    "nome": "Yasmin",
    "idade": 54,
    "sexo": "F"
  },
  {
    "id": 39,
    "nome": "Xuxa",
    "idade": 54,
    "sexo": "F"
  },
  {
    "id": 40,
    "nome": "Rafael",
    "idade": 27,
    "sexo": "M"
  },
  {
    "id": 41,
    "nome": "Marcos",
    "idade": 77,
    "sexo": "M"
  },
  {
    "id": 42,
    "nome": "Helena",
    "idade": 54,
    "sexo": "M"
  },
  {
    "id": 43,
    "nome": "Carlos",
    "idade": 24,
    "sexo": "F"
  },
  {
    "id": 44,
    "nome": "Ursula",
    "idade": 38,
    "sexo": "F"
  },
  {
    "id": 45,
    "nome": "Natalia",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 46,
    "nome": "Wesley",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 47,
    "nome": "Marcos",
    "idade": 13,
    "sexo": "M"
  },
  {
    "id": 48,
    "nome": "Gabriel",
    "idade": 19,
    "sexo": "M"
  },
  {
    "id": 49,
    "nome": "Otavio",
    "idade": 17,
    "sexo": "F"
  },
  {
    "id": 50,
    "nome": "Vinicius",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 51,
    "nome": "Wesley",
    "idade": 39,
    "sexo": "F"
  },
  {
    "id": 52,
    "nome": "Rafael",
    "idade": 22,
    "sexo": "M"
  },
  {
    "id": 53,
    "nome": "Otavio",
    "idade": 70,
    "sexo": "M"
  },
  {
    "id": 54,
    "nome": "Otavio",
    "idade": 31,
    "sexo": "F"
  },
  {
    "id": 55,
    "nome": "Igor",
    "idade": 41,
    "sexo": "M"
  },
  {
    "id": 56,
    "nome": "Joana",
    "idade": 41,
    "sexo": "M"
  },
  {
    "id": 57,
    "nome": "Carlos",
    "idade": 29,
    "sexo": "M"
  },
  {
    "id": 58,
    "nome": "Rafael",
    "idade": 73,
    "sexo": "F"
  },
  {
    "id": 59,
    "nome": "Carlos",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 60,
    "nome": "Otavio",
    "idade": 59,
    "sexo": "M"
  },
  {
    "id": 61,
    "nome": "Wesley",
    "idade": 19,
    "sexo": "M"
  },
  {
    "id": 62,
    "nome": "Helena",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 63,
    "nome": "Zeca",
    "idade": 69,
    "sexo": "M"
  },
  {
    "id": 64,
    "nome": "Patricia",
    "idade": 35,
    "sexo": "F"
  },
  {
    "id": 65,
    "nome": "Yasmin",
    "idade": 59,
    "sexo": "M"
  },
  {
    "id": 66,
    "nome": "Natalia",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 67,
    "nome": "Marcos",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 68,
    "nome": "Patricia",
    "idade": 78,
    "sexo": "F"
  },
  {
    "id": 69,
    "nome": "Carlos",
    "idade": 76,
    "sexo": "M"
  },
  {
    "id": 70,
    "nome": "Gabriel",
    "idade": 42,
    "sexo": "F"
  },
  {
    "id": 71,
    "nome": "Helena",
    "idade": 21,
    "sexo": "F"
  },
  {
    "id": 72,
    "nome": "Carlos",
    "idade": 42,
    "sexo": "M"
  },
  {
    "id": 73,
    "nome": "Vinicius",
    "idade": 60,
    "sexo": "M"
  },
  {
    "id": 74,
    "nome": "Otavio",
    "idade": 72,
    "sexo": "M"
  },
  {
    "id": 75,
    "nome": "Bruno",
    "idade": 80,
    "sexo": "F"
  },
  {
    "id": 76,
    "nome": "Fernanda",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 77,
    "nome": "Eduardo",
    "idade": 66,
    "sexo": "M"
  },
  {
    "id": 78,
    "nome": "Qu\u00e9sia",
    "idade": 15,
    "sexo": "F"
  },
  {
    "id": 79,
    "nome": "Eduardo",
    "idade": 21,
    "sexo": "F"
  },
  {
    "id": 80,
    "nome": "Marcos",
    "idade": 72,
    "sexo": "F"
  },
  {
    "id": 81,
    "nome": "Qu\u00e9sia",
    "idade": 44,
    "sexo": "M"
  },
  {
    "id": 82,
    "nome": "Rafael",
    "idade": 40,
    "sexo": "F"
  },
  {
    "id": 83,
    "nome": "Eduardo",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 84,
    "nome": "Rafael",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 85,
    "nome": "Helena",
    "idade": 17,
    "sexo": "M"
  },
  {
    "id": 86,
    "nome": "Sabrina",
    "idade": 55,
    "sexo": "M"
  },
  {
    "id": 87,
    "nome": "Carlos",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 88,
    "nome": "Igor",
    "idade": 21,
    "sexo": "F"
  },
  {
    "id": 89,
    "nome": "Patricia",
    "idade": 41,
    "sexo": "M"
  },
  {
    "id": 90,
    "nome": "Marcos",
    "idade": 61,
    "sexo": "F"
  },
  {
    "id": 91,
    "nome": "Igor",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 92,
    "nome": "Ursula",
    "idade": 80,
    "sexo": "F"
  },
  {
    "id": 93,
    "nome": "Rafael",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 94,
    "nome": "Zeca",
    "idade": 77,
    "sexo": "F"
  },
  {
    "id": 95,
    "nome": "Patricia",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 96,
    "nome": "Vinicius",
    "idade": 38,
    "sexo": "M"
  },
  {
    "id": 97,
    "nome": "Qu\u00e9sia",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 98,
    "nome": "Larissa",
    "idade": 26,
    "sexo": "F"
  },
  {
    "id": 99,
    "nome": "Marcos",
    "idade": 17,
    "sexo": "M"
  },
  {
    "id": 100,
    "nome": "Qu\u00e9sia",
    "idade": 33,
    "sexo": "F"
  },
  {
    "id": 101,
    "nome": "Ursula",
    "idade": 72,
    "sexo": "F"
  },
  {
    "id": 102,
    "nome": "Zeca",
    "idade": 10,
    "sexo": "F"
  },
  {
    "id": 103,
    "nome": "Xuxa",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 104,
    "nome": "Zeca",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 105,
    "nome": "Ana",
    "idade": 58,
    "sexo": "F"
  },
  {
    "id": 106,
    "nome": "Otavio",
    "idade": 13,
    "sexo": "F"
  },
  {
    "id": 107,
    "nome": "Kleber",
    "idade": 49,
    "sexo": "M"
  },
  {
    "id": 108,
    "nome": "Igor",
    "idade": 52,
    "sexo": "M"
  },
  {
    "id": 109,
    "nome": "Otavio",
    "idade": 60,
    "sexo": "F"
  },
  {
    "id": 110,
    "nome": "Fernanda",
    "idade": 62,
    "sexo": "F"
  },
  {
    "id": 111,
    "nome": "Vinicius",
    "idade": 70,
    "sexo": "F"
  },
  {
    "id": 112,
    "nome": "Helena",
    "idade": 55,
    "sexo": "F"
  },
  {
    "id": 113,
    "nome": "Kleber",
    "idade": 36,
    "sexo": "F"
  },
  {
    "id": 114,
    "nome": "Wesley",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 115,
    "nome": "Otavio",
    "idade": 65,
    "sexo": "M"
  },
  {
    "id": 116,
    "nome": "Rafael",
    "idade": 41,
    "sexo": "F"
  },
  {
    "id": 117,
    "nome": "Carlos",
    "idade": 15,
    "sexo": "F"
  },
  {
    "id": 118,
    "nome": "Joana",
    "idade": 68,
    "sexo": "M"
  },
  {
    "id": 119,
    "nome": "Yasmin",
    "idade": 47,
    "sexo": "F"
  },
  {
    "id": 120,
    "nome": "Zeca",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 121,
    "nome": "Eduardo",
    "idade": 44,
    "sexo": "M"
  },
  {
    "id": 122,
    "nome": "Otavio",
    "idade": 34,
    "sexo": "M"
  },
  {
    "id": 123,
    "nome": "Fernanda",
    "idade": 70,
    "sexo": "F"
  },
  {
    "id": 124,
    "nome": "Kleber",
    "idade": 22,
    "sexo": "F"
  },
  {
    "id": 125,
    "nome": "Yasmin",
    "idade": 32,
    "sexo": "F"
  },
  {
    "id": 126,
    "nome": "Natalia",
    "idade": 78,
    "sexo": "F"
  },
  {
    "id": 127,
    "nome": "Patricia",
    "idade": 69,
    "sexo": "F"
  },
  {
    "id": 128,
    "nome": "Wesley",
    "idade": 22,
    "sexo": "F"
  },
  {
    "id": 129,
    "nome": "Fernanda",
    "idade": 45,
    "sexo": "F"
  },
  {
    "id": 130,
    "nome": "Igor",
    "idade": 78,
    "sexo": "F"
  },
  {
    "id": 131,
    "nome": "Bruno",
    "idade": 57,
    "sexo": "F"
  },
  {
    "id": 132,
    "nome": "Gabriel",
    "idade": 21,
    "sexo": "F"
  },
  {
    "id": 133,
    "nome": "Xuxa",
    "idade": 70,
    "sexo": "F"
  },
  {
    "id": 134,
    "nome": "Zeca",
    "idade": 72,
    "sexo": "F"
  },
  {
    "id": 135,
    "nome": "Zeca",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 136,
    "nome": "Joana",
    "idade": 76,
    "sexo": "M"
  },
  {
    "id": 137,
    "nome": "Sabrina",
    "idade": 58,
    "sexo": "F"
  },
  {
    "id": 138,
    "nome": "Bruno",
    "idade": 17,
    "sexo": "M"
  },
  {
    "id": 139,
    "nome": "Otavio",
    "idade": 23,
    "sexo": "M"
  },
  {
    "id": 140,
    "nome": "Helena",
    "idade": 42,
    "sexo": "M"
  },
  {
    "id": 141,
    "nome": "Eduardo",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 142,
    "nome": "Ursula",
    "idade": 14,
    "sexo": "F"
  },
  {
    "id": 143,
    "nome": "Carlos",
    "idade": 60,
    "sexo": "F"
  },
  {
    "id": 144,
    "nome": "Bruno",
    "idade": 25,
    "sexo": "M"
  },
  {
    "id": 145,
    "nome": "Joana",
    "idade": 41,
    "sexo": "M"
  },
  {
    "id": 146,
    "nome": "Helena",
    "idade": 67,
    "sexo": "M"
  },
  {
    "id": 147,
    "nome": "Otavio",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 148,
    "nome": "Ursula",
    "idade": 29,
    "sexo": "F"
  },
  {
    "id": 149,
    "nome": "Otavio",
    "idade": 28,
    "sexo": "F"
  },
  {
    "id": 150,
    "nome": "Kleber",
    "idade": 62,
    "sexo": "F"
  },
  {
    "id": 151,
    "nome": "Natalia",
    "idade": 70,
    "sexo": "M"
  },
  {
    "id": 152,
    "nome": "Larissa",
    "idade": 46,
    "sexo": "M"
  },
  {
    "id": 153,
    "nome": "Xuxa",
    "idade": 46,
    "sexo": "M"
  },
  {
    "id": 154,
    "nome": "Patricia",
    "idade": 54,
    "sexo": "F"
  },
  {
    "id": 155,
    "nome": "Eduardo",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 156,
    "nome": "Vinicius",
    "idade": 65,
    "sexo": "F"
  },
  {
    "id": 157,
    "nome": "Otavio",
    "idade": 36,
    "sexo": "F"
  },
  {
    "id": 158,
    "nome": "Rafael",
    "idade": 72,
    "sexo": "M"
  },
  {
    "id": 159,
    "nome": "Fernanda",
    "idade": 29,
    "sexo": "M"
  },
  {
    "id": 160,
    "nome": "Fernanda",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 161,
    "nome": "Larissa",
    "idade": 23,
    "sexo": "M"
  },
  {
    "id": 162,
    "nome": "Rafael",
    "idade": 53,
    "sexo": "F"
  },
  {
    "id": 163,
    "nome": "Bruno",
    "idade": 50,
    "sexo": "M"
  },
  {
    "id": 164,
    "nome": "Carlos",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 165,
    "nome": "Bruno",
    "idade": 28,
    "sexo": "M"
  },
  {
    "id": 166,
    "nome": "Carlos",
    "idade": 42,
    "sexo": "F"
  },
  {
    "id": 167,
    "nome": "Vinicius",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 168,
    "nome": "Gabriel",
    "idade": 40,
    "sexo": "F"
  },
  {
    "id": 169,
    "nome": "Qu\u00e9sia",
    "idade": 44,
    "sexo": "F"
  },
  {
    "id": 170,
    "nome": "Rafael",
    "idade": 33,
    "sexo": "F"
  },
  {
    "id": 171,
    "nome": "Yasmin",
    "idade": 15,
    "sexo": "M"
  },
  {
    "id": 172,
    "nome": "Ursula",
    "idade": 25,
    "sexo": "M"
  },
  {
    "id": 173,
    "nome": "Gabriel",
    "idade": 20,
    "sexo": "M"
  },
  {
    "id": 174,
    "nome": "Joana",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 175,
    "nome": "Igor",
    "idade": 11,
    "sexo": "M"
  },
  {
    "id": 176,
    "nome": "Bruno",
    "idade": 55,
    "sexo": "F"
  },
  {
    "id": 177,
    "nome": "Bruno",
    "idade": 77,
    "sexo": "F"
  },
  {
    "id": 178,
    "nome": "Daniela",
    "idade": 53,
    "sexo": "F"
  },
  {
    "id": 179,
    "nome": "Ana",
    "idade": 12,
    "sexo": "M"
  },
  {
    "id": 180,
    "nome": "Vinicius",
    "idade": 28,
    "sexo": "M"
  },
  {
    "id": 181,
    "nome": "Patricia",
    "idade": 32,
    "sexo": "M"
  },
  {
    "id": 182,
    "nome": "Qu\u00e9sia",
    "idade": 41,
    "sexo": "M"
  },
  {
    "id": 183,
    "nome": "Rafael",
    "idade": 59,
    "sexo": "M"
  },
  {
    "id": 184,
    "nome": "Tiago",
    "idade": 33,
    "sexo": "F"
  },
  {
    "id": 185,
    "nome": "Kleber",
    "idade": 29,
    "sexo": "F"
  },
  {
    "id": 186,
    "nome": "Vinicius",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 187,
    "nome": "Eduardo",
    "idade": 76,
    "sexo": "F"
  },
  {
    "id": 188,
    "nome": "Eduardo",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 189,
    "nome": "Zeca",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 190,
    "nome": "Daniela",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 191,
    "nome": "Helena",
    "idade": 71,
    "sexo": "F"
  },
  {
    "id": 192,
    "nome": "Igor",
    "idade": 11,
    "sexo": "F"
  },
  {
    "id": 193,
    "nome": "Kleber",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 194,
    "nome": "Qu\u00e9sia",
    "idade": 66,
    "sexo": "F"
  },
  {
    "id": 195,
    "nome": "Qu\u00e9sia",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 196,
    "nome": "Sabrina",
    "idade": 26,
    "sexo": "F"
  },
  {
    "id": 197,
    "nome": "Zeca",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 198,
    "nome": "Helena",
    "idade": 14,
    "sexo": "M"
  },
  {
    "id": 199,
    "nome": "Ursula",
    "idade": 56,
    "sexo": "F"
  },
  {
    "id": 200,
    "nome": "Rafael",
    "idade": 52,
    "sexo": "M"
  },
  {
    "id": 201,
    "nome": "Rafael",
    "idade": 71,
    "sexo": "F"
  },
  {
    "id": 202,
    "nome": "Carlos",
    "idade": 18,
    "sexo": "M"
  },
  {
    "id": 203,
    "nome": "Zeca",
    "idade": 77,
    "sexo": "M"
  },
  {
    "id": 204,
    "nome": "Bruno",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 205,
    "nome": "Igor",
    "idade": 57,
    "sexo": "M"
  },
  {
    "id": 206,
    "nome": "Gabriel",
    "idade": 47,
    "sexo": "F"
  },
  {
    "id": 207,
    "nome": "Eduardo",
    "idade": 62,
    "sexo": "F"
  },
  {
    "id": 208,
    "nome": "Tiago",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 209,
    "nome": "Joana",
    "idade": 58,
    "sexo": "F"
  },
  {
    "id": 210,
    "nome": "Larissa",
    "idade": 27,
    "sexo": "M"
  },
  {
    "id": 211,
    "nome": "Carlos",
    "idade": 73,
    "sexo": "M"
  },
  {
    "id": 212,
    "nome": "Carlos",
    "idade": 73,
    "sexo": "F"
  },
  {
    "id": 213,
    "nome": "Qu\u00e9sia",
    "idade": 47,
    "sexo": "M"
  },
  {
    "id": 214,
    "nome": "Zeca",
    "idade": 73,
    "sexo": "M"
  },
  {
    "id": 215,
    "nome": "Joana",
    "idade": 27,
    "sexo": "F"
  },
  {
    "id": 216,
    "nome": "Gabriel",
    "idade": 29,
    "sexo": "M"
  },
  {
    "id": 217,
    "nome": "Wesley",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 218,
    "nome": "Eduardo",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 219,
    "nome": "Otavio",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 220,
    "nome": "Vinicius",
    "idade": 26,
    "sexo": "F"
  },
  {
    "id": 221,
    "nome": "Joana",
    "idade": 26,
    "sexo": "M"
  },
  {
    "id": 222,
    "nome": "Helena",
    "idade": 67,
    "sexo": "M"
  },
  {
    "id": 223,
    "nome": "Yasmin",
    "idade": 11,
    "sexo": "F"
  },
  {
    "id": 224,
    "nome": "Vinicius",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 225,
    "nome": "Yasmin",
    "idade": 18,
    "sexo": "M"
  },
  {
    "id": 226,
    "nome": "Joana",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 227,
    "nome": "Otavio",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 228,
    "nome": "Natalia",
    "idade": 15,
    "sexo": "M"
  },
  {
    "id": 229,
    "nome": "Rafael",
    "idade": 15,
    "sexo": "F"
  },
  {
    "id": 230,
    "nome": "Rafael",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 231,
    "nome": "Helena",
    "idade": 78,
    "sexo": "M"
  },
  {
    "id": 232,
    "nome": "Gabriel",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 233,
    "nome": "Tiago",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 234,
    "nome": "Ana",
    "idade": 10,
    "sexo": "F"
  },
  {
    "id": 235,
    "nome": "Vinicius",
    "idade": 39,
    "sexo": "M"
  },
  {
    "id": 236,
    "nome": "Tiago",
    "idade": 79,
    "sexo": "M"
  },
  {
    "id": 237,
    "nome": "Qu\u00e9sia",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 238,
    "nome": "Eduardo",
    "idade": 36,
    "sexo": "F"
  },
  {
    "id": 239,
    "nome": "Fernanda",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 240,
    "nome": "Qu\u00e9sia",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 241,
    "nome": "Ana",
    "idade": 20,
    "sexo": "M"
  },
  {
    "id": 242,
    "nome": "Joana",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 243,
    "nome": "Gabriel",
    "idade": 19,
    "sexo": "M"
  },
  {
    "id": 244,
    "nome": "Helena",
    "idade": 75,
    "sexo": "F"
  },
  {
    "id": 245,
    "nome": "Ana",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 246,
    "nome": "Natalia",
    "idade": 29,
    "sexo": "M"
  },
  {
    "id": 247,
    "nome": "Vinicius",
    "idade": 50,
    "sexo": "F"
  },
  {
    "id": 248,
    "nome": "Ursula",
    "idade": 72,
    "sexo": "F"
  },
  {
    "id": 249,
    "nome": "Otavio",
    "idade": 20,
    "sexo": "F"
  },
  {
    "id": 250,
    "nome": "Zeca",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 251,
    "nome": "Fernanda",
    "idade": 17,
    "sexo": "M"
  },
  {
    "id": 252,
    "nome": "Rafael",
    "idade": 26,
    "sexo": "M"
  },
  {
    "id": 253,
    "nome": "Yasmin",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 254,
    "nome": "Marcos",
    "idade": 14,
    "sexo": "M"
  },
  {
    "id": 255,
    "nome": "Rafael",
    "idade": 69,
    "sexo": "M"
  },
  {
    "id": 256,
    "nome": "Gabriel",
    "idade": 53,
    "sexo": "F"
  },
  {
    "id": 257,
    "nome": "Zeca",
    "idade": 21,
    "sexo": "M"
  },
  {
    "id": 258,
    "nome": "Joana",
    "idade": 60,
    "sexo": "F"
  },
  {
    "id": 259,
    "nome": "Joana",
    "idade": 68,
    "sexo": "M"
  },
  {
    "id": 260,
    "nome": "Daniela",
    "idade": 53,
    "sexo": "M"
  },
  {
    "id": 261,
    "nome": "Tiago",
    "idade": 24,
    "sexo": "F"
  },
  {
    "id": 262,
    "nome": "Carlos",
    "idade": 29,
    "sexo": "F"
  },
  {
    "id": 263,
    "nome": "Natalia",
    "idade": 23,
    "sexo": "M"
  },
  {
    "id": 264,
    "nome": "Igor",
    "idade": 15,
    "sexo": "M"
  },
  {
    "id": 265,
    "nome": "Patricia",
    "idade": 50,
    "sexo": "F"
  },
  {
    "id": 266,
    "nome": "Kleber",
    "idade": 71,
    "sexo": "M"
  },
  {
    "id": 267,
    "nome": "Natalia",
    "idade": 45,
    "sexo": "F"
  },
  {
    "id": 268,
    "nome": "Zeca",
    "idade": 66,
    "sexo": "M"
  },
  {
    "id": 269,
    "nome": "Otavio",
    "idade": 51,
    "sexo": "F"
  },
  {
    "id": 270,
    "nome": "Gabriel",
    "idade": 72,
    "sexo": "M"
  },
  {
    "id": 271,
    "nome": "Ursula",
    "idade": 62,
    "sexo": "F"
  },
  {
    "id": 272,
    "nome": "Natalia",
    "idade": 67,
    "sexo": "M"
  },
  {
    "id": 273,
    "nome": "Natalia",
    "idade": 24,
    "sexo": "M"
  },
  {
    "id": 274,
    "nome": "Larissa",
    "idade": 18,
    "sexo": "M"
  },
  {
    "id": 275,
    "nome": "Qu\u00e9sia",
    "idade": 80,
    "sexo": "F"
  },
  {
    "id": 276,
    "nome": "Joana",
    "idade": 20,
    "sexo": "M"
  },
  {
    "id": 277,
    "nome": "Zeca",
    "idade": 80,
    "sexo": "M"
  },
  {
    "id": 278,
    "nome": "Marcos",
    "idade": 27,
    "sexo": "M"
  },
  {
    "id": 279,
    "nome": "Wesley",
    "idade": 36,
    "sexo": "F"
  },
  {
    "id": 280,
    "nome": "Vinicius",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 281,
    "nome": "Wesley",
    "idade": 52,
    "sexo": "M"
  },
  {
    "id": 282,
    "nome": "Vinicius",
    "idade": 50,
    "sexo": "M"
  },
  {
    "id": 283,
    "nome": "Qu\u00e9sia",
    "idade": 36,
    "sexo": "M"
  },
  {
    "id": 284,
    "nome": "Qu\u00e9sia",
    "idade": 22,
    "sexo": "F"
  },
  {
    "id": 285,
    "nome": "Wesley",
    "idade": 19,
    "sexo": "F"
  },
  {
    "id": 286,
    "nome": "Otavio",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 287,
    "nome": "Marcos",
    "idade": 55,
    "sexo": "M"
  },
  {
    "id": 288,
    "nome": "Otavio",
    "idade": 70,
    "sexo": "M"
  },
  {
    "id": 289,
    "nome": "Otavio",
    "idade": 27,
    "sexo": "M"
  },
  {
    "id": 290,
    "nome": "Sabrina",
    "idade": 17,
    "sexo": "F"
  },
  {
    "id": 291,
    "nome": "Vinicius",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 292,
    "nome": "Wesley",
    "idade": 65,
    "sexo": "M"
  },
  {
    "id": 293,
    "nome": "Ursula",
    "idade": 27,
    "sexo": "F"
  },
  {
    "id": 294,
    "nome": "Patricia",
    "idade": 26,
    "sexo": "M"
  },
  {
    "id": 295,
    "nome": "Xuxa",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 296,
    "nome": "Wesley",
    "idade": 49,
    "sexo": "M"
  },
  {
    "id": 297,
    "nome": "Vinicius",
    "idade": 12,
    "sexo": "M"
  },
  {
    "id": 298,
    "nome": "Marcos",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 299,
    "nome": "Ana",
    "idade": 80,
    "sexo": "M"
  },
  {
    "id": 300,
    "nome": "Sabrina",
    "idade": 61,
    "sexo": "F"
  },
  {
    "id": 301,
    "nome": "Sabrina",
    "idade": 38,
    "sexo": "F"
  },
  {
    "id": 302,
    "nome": "Igor",
    "idade": 28,
    "sexo": "M"
  },
  {
    "id": 303,
    "nome": "Daniela",
    "idade": 79,
    "sexo": "F"
  },
  {
    "id": 304,
    "nome": "Ursula",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 305,
    "nome": "Fernanda",
    "idade": 54,
    "sexo": "F"
  },
  {
    "id": 306,
    "nome": "Zeca",
    "idade": 36,
    "sexo": "M"
  },
  {
    "id": 307,
    "nome": "Helena",
    "idade": 61,
    "sexo": "F"
  },
  {
    "id": 308,
    "nome": "Patricia",
    "idade": 19,
    "sexo": "M"
  },
  {
    "id": 309,
    "nome": "Marcos",
    "idade": 22,
    "sexo": "F"
  },
  {
    "id": 310,
    "nome": "Ursula",
    "idade": 15,
    "sexo": "F"
  },
  {
    "id": 311,
    "nome": "Fernanda",
    "idade": 54,
    "sexo": "F"
  },
  {
    "id": 312,
    "nome": "Gabriel",
    "idade": 50,
    "sexo": "M"
  },
  {
    "id": 313,
    "nome": "Tiago",
    "idade": 61,
    "sexo": "F"
  },
  {
    "id": 314,
    "nome": "Gabriel",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 315,
    "nome": "Fernanda",
    "idade": 59,
    "sexo": "M"
  },
  {
    "id": 316,
    "nome": "Rafael",
    "idade": 73,
    "sexo": "F"
  },
  {
    "id": 317,
    "nome": "Kleber",
    "idade": 28,
    "sexo": "F"
  },
  {
    "id": 318,
    "nome": "Eduardo",
    "idade": 40,
    "sexo": "M"
  },
  {
    "id": 319,
    "nome": "Eduardo",
    "idade": 70,
    "sexo": "M"
  },
  {
    "id": 320,
    "nome": "Patricia",
    "idade": 79,
    "sexo": "M"
  },
  {
    "id": 321,
    "nome": "Qu\u00e9sia",
    "idade": 63,
    "sexo": "F"
  },
  {
    "id": 322,
    "nome": "Kleber",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 323,
    "nome": "Fernanda",
    "idade": 44,
    "sexo": "F"
  },
  {
    "id": 324,
    "nome": "Wesley",
    "idade": 51,
    "sexo": "F"
  },
  {
    "id": 325,
    "nome": "Patricia",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 326,
    "nome": "Otavio",
    "idade": 33,
    "sexo": "M"
  },
  {
    "id": 327,
    "nome": "Marcos",
    "idade": 56,
    "sexo": "M"
  },
  {
    "id": 328,
    "nome": "Yasmin",
    "idade": 34,
    "sexo": "F"
  },
  {
    "id": 329,
    "nome": "Larissa",
    "idade": 41,
    "sexo": "F"
  },
  {
    "id": 330,
    "nome": "Igor",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 331,
    "nome": "Xuxa",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 332,
    "nome": "Larissa",
    "idade": 50,
    "sexo": "F"
  },
  {
    "id": 333,
    "nome": "Qu\u00e9sia",
    "idade": 71,
    "sexo": "M"
  },
  {
    "id": 334,
    "nome": "Wesley",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 335,
    "nome": "Zeca",
    "idade": 30,
    "sexo": "M"
  },
  {
    "id": 336,
    "nome": "Wesley",
    "idade": 67,
    "sexo": "F"
  },
  {
    "id": 337,
    "nome": "Igor",
    "idade": 76,
    "sexo": "M"
  },
  {
    "id": 338,
    "nome": "Gabriel",
    "idade": 74,
    "sexo": "M"
  },
  {
    "id": 339,
    "nome": "Joana",
    "idade": 55,
    "sexo": "F"
  },
  {
    "id": 340,
    "nome": "Rafael",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 341,
    "nome": "Ana",
    "idade": 34,
    "sexo": "F"
  },
  {
    "id": 342,
    "nome": "Bruno",
    "idade": 36,
    "sexo": "F"
  },
  {
    "id": 343,
    "nome": "Eduardo",
    "idade": 80,
    "sexo": "F"
  },
  {
    "id": 344,
    "nome": "Fernanda",
    "idade": 47,
    "sexo": "F"
  },
  {
    "id": 345,
    "nome": "Eduardo",
    "idade": 68,
    "sexo": "M"
  },
  {
    "id": 346,
    "nome": "Helena",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 347,
    "nome": "Sabrina",
    "idade": 28,
    "sexo": "M"
  },
  {
    "id": 348,
    "nome": "Bruno",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 349,
    "nome": "Rafael",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 350,
    "nome": "Zeca",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 351,
    "nome": "Fernanda",
    "idade": 54,
    "sexo": "M"
  },
  {
    "id": 352,
    "nome": "Eduardo",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 353,
    "nome": "Ana",
    "idade": 23,
    "sexo": "M"
  },
  {
    "id": 354,
    "nome": "Otavio",
    "idade": 33,
    "sexo": "F"
  },
  {
    "id": 355,
    "nome": "Yasmin",
    "idade": 17,
    "sexo": "M"
  },
  {
    "id": 356,
    "nome": "Helena",
    "idade": 34,
    "sexo": "F"
  },
  {
    "id": 357,
    "nome": "Gabriel",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 358,
    "nome": "Xuxa",
    "idade": 62,
    "sexo": "F"
  },
  {
    "id": 359,
    "nome": "Marcos",
    "idade": 36,
    "sexo": "F"
  },
  {
    "id": 360,
    "nome": "Vinicius",
    "idade": 44,
    "sexo": "F"
  },
  {
    "id": 361,
    "nome": "Yasmin",
    "idade": 56,
    "sexo": "F"
  },
  {
    "id": 362,
    "nome": "Eduardo",
    "idade": 26,
    "sexo": "F"
  },
  {
    "id": 363,
    "nome": "Fernanda",
    "idade": 26,
    "sexo": "F"
  },
  {
    "id": 364,
    "nome": "Xuxa",
    "idade": 22,
    "sexo": "M"
  },
  {
    "id": 365,
    "nome": "Xuxa",
    "idade": 63,
    "sexo": "M"
  },
  {
    "id": 366,
    "nome": "Helena",
    "idade": 76,
    "sexo": "F"
  },
  {
    "id": 367,
    "nome": "Otavio",
    "idade": 66,
    "sexo": "F"
  },
  {
    "id": 368,
    "nome": "Larissa",
    "idade": 21,
    "sexo": "M"
  },
  {
    "id": 369,
    "nome": "Carlos",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 370,
    "nome": "Qu\u00e9sia",
    "idade": 53,
    "sexo": "M"
  },
  {
    "id": 371,
    "nome": "Zeca",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 372,
    "nome": "Daniela",
    "idade": 62,
    "sexo": "M"
  },
  {
    "id": 373,
    "nome": "Zeca",
    "idade": 63,
    "sexo": "F"
  },
  {
    "id": 374,
    "nome": "Joana",
    "idade": 50,
    "sexo": "M"
  },
  {
    "id": 375,
    "nome": "Ursula",
    "idade": 77,
    "sexo": "F"
  },
  {
    "id": 376,
    "nome": "Patricia",
    "idade": 74,
    "sexo": "F"
  },
  {
    "id": 377,
    "nome": "Carlos",
    "idade": 63,
    "sexo": "F"
  },
  {
    "id": 378,
    "nome": "Daniela",
    "idade": 42,
    "sexo": "F"
  },
  {
    "id": 379,
    "nome": "Gabriel",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 380,
    "nome": "Sabrina",
    "idade": 67,
    "sexo": "M"
  },
  {
    "id": 381,
    "nome": "Joana",
    "idade": 41,
    "sexo": "F"
  },
  {
    "id": 382,
    "nome": "Sabrina",
    "idade": 39,
    "sexo": "M"
  },
  {
    "id": 383,
    "nome": "Ursula",
    "idade": 69,
    "sexo": "M"
  },
  {
    "id": 384,
    "nome": "Joana",
    "idade": 39,
    "sexo": "M"
  },
  {
    "id": 385,
    "nome": "Xuxa",
    "idade": 35,
    "sexo": "M"
  },
  {
    "id": 386,
    "nome": "Marcos",
    "idade": 32,
    "sexo": "M"
  },
  {
    "id": 387,
    "nome": "Marcos",
    "idade": 18,
    "sexo": "M"
  },
  {
    "id": 388,
    "nome": "Joana",
    "idade": 76,
    "sexo": "M"
  },
  {
    "id": 389,
    "nome": "Carlos",
    "idade": 44,
    "sexo": "F"
  },
  {
    "id": 390,
    "nome": "Eduardo",
    "idade": 74,
    "sexo": "F"
  },
  {
    "id": 391,
    "nome": "Sabrina",
    "idade": 46,
    "sexo": "M"
  },
  {
    "id": 392,
    "nome": "Eduardo",
    "idade": 72,
    "sexo": "M"
  },
  {
    "id": 393,
    "nome": "Vinicius",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 394,
    "nome": "Ana",
    "idade": 72,
    "sexo": "M"
  },
  {
    "id": 395,
    "nome": "Natalia",
    "idade": 77,
    "sexo": "M"
  },
  {
    "id": 396,
    "nome": "Natalia",
    "idade": 22,
    "sexo": "M"
  },
  {
    "id": 397,
    "nome": "Ursula",
    "idade": 61,
    "sexo": "M"
  },
  {
    "id": 398,
    "nome": "Helena",
    "idade": 50,
    "sexo": "F"
  },
  {
    "id": 399,
    "nome": "Zeca",
    "idade": 57,
    "sexo": "M"
  },
  {
    "id": 400,
    "nome": "Marcos",
    "idade": 23,
    "sexo": "M"
  },
  {
    "id": 401,
    "nome": "Bruno",
    "idade": 58,
    "sexo": "F"
  },
  {
    "id": 402,
    "nome": "Carlos",
    "idade": 11,
    "sexo": "F"
  },
  {
    "id": 403,
    "nome": "Otavio",
    "idade": 71,
    "sexo": "F"
  },
  {
    "id": 404,
    "nome": "Joana",
    "idade": 54,
    "sexo": "M"
  },
  {
    "id": 405,
    "nome": "Xuxa",
    "idade": 54,
    "sexo": "F"
  },
  {
    "id": 406,
    "nome": "Xuxa",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 407,
    "nome": "Rafael",
    "idade": 33,
    "sexo": "F"
  },
  {
    "id": 408,
    "nome": "Qu\u00e9sia",
    "idade": 17,
    "sexo": "F"
  },
  {
    "id": 409,
    "nome": "Joana",
    "idade": 77,
    "sexo": "F"
  },
  {
    "id": 410,
    "nome": "Carlos",
    "idade": 56,
    "sexo": "F"
  },
  {
    "id": 411,
    "nome": "Wesley",
    "idade": 64,
    "sexo": "M"
  },
  {
    "id": 412,
    "nome": "Natalia",
    "idade": 37,
    "sexo": "F"
  },
  {
    "id": 413,
    "nome": "Daniela",
    "idade": 13,
    "sexo": "M"
  },
  {
    "id": 414,
    "nome": "Eduardo",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 415,
    "nome": "Igor",
    "idade": 66,
    "sexo": "F"
  },
  {
    "id": 416,
    "nome": "Sabrina",
    "idade": 73,
    "sexo": "F"
  },
  {
    "id": 417,
    "nome": "Bruno",
    "idade": 68,
    "sexo": "M"
  },
  {
    "id": 418,
    "nome": "Otavio",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 419,
    "nome": "Joana",
    "idade": 17,
    "sexo": "M"
  },
  {
    "id": 420,
    "nome": "Ursula",
    "idade": 21,
    "sexo": "M"
  },
  {
    "id": 421,
    "nome": "Sabrina",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 422,
    "nome": "Tiago",
    "idade": 21,
    "sexo": "M"
  },
  {
    "id": 423,
    "nome": "Tiago",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 424,
    "nome": "Otavio",
    "idade": 47,
    "sexo": "F"
  },
  {
    "id": 425,
    "nome": "Joana",
    "idade": 16,
    "sexo": "M"
  },
  {
    "id": 426,
    "nome": "Wesley",
    "idade": 11,
    "sexo": "M"
  },
  {
    "id": 427,
    "nome": "Joana",
    "idade": 40,
    "sexo": "F"
  },
  {
    "id": 428,
    "nome": "Yasmin",
    "idade": 72,
    "sexo": "M"
  },
  {
    "id": 429,
    "nome": "Qu\u00e9sia",
    "idade": 38,
    "sexo": "F"
  },
  {
    "id": 430,
    "nome": "Joana",
    "idade": 42,
    "sexo": "F"
  },
  {
    "id": 431,
    "nome": "Zeca",
    "idade": 34,
    "sexo": "M"
  },
  {
    "id": 432,
    "nome": "Ana",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 433,
    "nome": "Patricia",
    "idade": 53,
    "sexo": "M"
  },
  {
    "id": 434,
    "nome": "Otavio",
    "idade": 30,
    "sexo": "M"
  },
  {
    "id": 435,
    "nome": "Wesley",
    "idade": 70,
    "sexo": "F"
  },
  {
    "id": 436,
    "nome": "Joana",
    "idade": 23,
    "sexo": "M"
  },
  {
    "id": 437,
    "nome": "Bruno",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 438,
    "nome": "Eduardo",
    "idade": 71,
    "sexo": "F"
  },
  {
    "id": 439,
    "nome": "Eduardo",
    "idade": 17,
    "sexo": "F"
  },
  {
    "id": 440,
    "nome": "Bruno",
    "idade": 46,
    "sexo": "F"
  },
  {
    "id": 441,
    "nome": "Xuxa",
    "idade": 30,
    "sexo": "F"
  },
  {
    "id": 442,
    "nome": "Rafael",
    "idade": 57,
    "sexo": "F"
  },
  {
    "id": 443,
    "nome": "Kleber",
    "idade": 32,
    "sexo": "F"
  },
  {
    "id": 444,
    "nome": "Xuxa",
    "idade": 52,
    "sexo": "F"
  },
  {
    "id": 445,
    "nome": "Daniela",
    "idade": 75,
    "sexo": "F"
  },
  {
    "id": 446,
    "nome": "Yasmin",
    "idade": 28,
    "sexo": "F"
  },
  {
    "id": 447,
    "nome": "Natalia",
    "idade": 76,
    "sexo": "F"
  },
  {
    "id": 448,
    "nome": "Helena",
    "idade": 31,
    "sexo": "M"
  },
  {
    "id": 449,
    "nome": "Eduardo",
    "idade": 69,
    "sexo": "M"
  },
  {
    "id": 450,
    "nome": "Wesley",
    "idade": 75,
    "sexo": "M"
  },
  {
    "id": 451,
    "nome": "Natalia",
    "idade": 10,
    "sexo": "F"
  },
  {
    "id": 452,
    "nome": "Sabrina",
    "idade": 47,
    "sexo": "F"
  },
  {
    "id": 453,
    "nome": "Xuxa",
    "idade": 62,
    "sexo": "F"
  },
  {
    "id": 454,
    "nome": "Bruno",
    "idade": 48,
    "sexo": "M"
  },
  {
    "id": 455,
    "nome": "Ana",
    "idade": 22,
    "sexo": "F"
  },
  {
    "id": 456,
    "nome": "Larissa",
    "idade": 64,
    "sexo": "M"
  },
  {
    "id": 457,
    "nome": "Patricia",
    "idade": 71,
    "sexo": "M"
  },
  {
    "id": 458,
    "nome": "Rafael",
    "idade": 18,
    "sexo": "F"
  },
  {
    "id": 459,
    "nome": "Joana",
    "idade": 56,
    "sexo": "F"
  },
  {
    "id": 460,
    "nome": "Marcos",
    "idade": 60,
    "sexo": "M"
  },
  {
    "id": 461,
    "nome": "Patricia",
    "idade": 66,
    "sexo": "M"
  },
  {
    "id": 462,
    "nome": "Yasmin",
    "idade": 47,
    "sexo": "F"
  },
  {
    "id": 463,
    "nome": "Rafael",
    "idade": 45,
    "sexo": "M"
  },
  {
    "id": 464,
    "nome": "Vinicius",
    "idade": 42,
    "sexo": "M"
  },
  {
    "id": 465,
    "nome": "Igor",
    "idade": 20,
    "sexo": "M"
  },
  {
    "id": 466,
    "nome": "Zeca",
    "idade": 44,
    "sexo": "M"
  },
  {
    "id": 467,
    "nome": "Patricia",
    "idade": 43,
    "sexo": "F"
  },
  {
    "id": 468,
    "nome": "Ana",
    "idade": 45,
    "sexo": "F"
  },
  {
    "id": 469,
    "nome": "Joana",
    "idade": 63,
    "sexo": "F"
  },
  {
    "id": 470,
    "nome": "Ana",
    "idade": 53,
    "sexo": "F"
  },
  {
    "id": 471,
    "nome": "Marcos",
    "idade": 45,
    "sexo": "F"
  },
  {
    "id": 472,
    "nome": "Daniela",
    "idade": 12,
    "sexo": "F"
  },
  {
    "id": 473,
    "nome": "Yasmin",
    "idade": 49,
    "sexo": "F"
  },
  {
    "id": 474,
    "nome": "Vinicius",
    "idade": 68,
    "sexo": "M"
  },
  {
    "id": 475,
    "nome": "Rafael",
    "idade": 39,
    "sexo": "F"
  },
  {
    "id": 476,
    "nome": "Carlos",
    "idade": 41,
    "sexo": "F"
  },
  {
    "id": 477,
    "nome": "Sabrina",
    "idade": 28,
    "sexo": "M"
  },
  {
    "id": 478,
    "nome": "Qu\u00e9sia",
    "idade": 74,
    "sexo": "F"
  },
  {
    "id": 479,
    "nome": "Ana",
    "idade": 12,
    "sexo": "M"
  },
  {
    "id": 480,
    "nome": "Eduardo",
    "idade": 23,
    "sexo": "F"
  },
  {
    "id": 481,
    "nome": "Eduardo",
    "idade": 67,
    "sexo": "M"
  },
  {
    "id": 482,
    "nome": "Zeca",
    "idade": 54,
    "sexo": "M"
  },
  {
    "id": 483,
    "nome": "Carlos",
    "idade": 35,
    "sexo": "F"
  },
  {
    "id": 484,
    "nome": "Igor",
    "idade": 40,
    "sexo": "M"
  },
  {
    "id": 485,
    "nome": "Larissa",
    "idade": 32,
    "sexo": "M"
  },
  {
    "id": 486,
    "nome": "Carlos",
    "idade": 61,
    "sexo": "M"
  },
  {
    "id": 487,
    "nome": "Qu\u00e9sia",
    "idade": 76,
    "sexo": "F"
  },
  {
    "id": 488,
    "nome": "Otavio",
    "idade": 73,
    "sexo": "M"
  },
  {
    "id": 489,
    "nome": "Otavio",
    "idade": 77,
    "sexo": "F"
  },
  {
    "id": 490,
    "nome": "Xuxa",
    "idade": 60,
    "sexo": "F"
  },
  {
    "id": 491,
    "nome": "Sabrina",
    "idade": 27,
    "sexo": "F"
  },
  {
    "id": 492,
    "nome": "Marcos",
    "idade": 28,
    "sexo": "F"
  },
  {
    "id": 493,
    "nome": "Marcos",
    "idade": 38,
    "sexo": "M"
  },
  {
    "id": 494,
    "nome": "Xuxa",
    "idade": 15,
    "sexo": "M"
  },
  {
    "id": 495,
    "nome": "Vinicius",
    "idade": 41,
    "sexo": "F"
  },
  {
    "id": 496,
    "nome": "Tiago",
    "idade": 53,
    "sexo": "M"
  },
  {
    "id": 497,
    "nome": "Vinicius",
    "idade": 74,
    "sexo": "M"
  },
  {
    "id": 498,
    "nome": "Bruno",
    "idade": 51,
    "sexo": "F"
  },
  {
    "id": 499,
    "nome": "Daniela",
    "idade": 50,
    "sexo": "M"
  },
  {
    "id": 500,
    "nome": "Kleber",
    "idade": 67,
    "sexo": "M"
  }
]

// EXERCISES USING FUNCTION MAP

// 🧪 Exercício 1 – Maiúsculas

// Dado um array de nomes em minúsculas, use map() para transformá-los em letras maiúsculas.

const maiusculas = nomes.map(nome => nome.toUpperCase())
// document.body.innerText = JSON.stringify(maiusculas, null, 2)

// 🧪 Exercício 2 – Primeira letra maiúscula

// Dado um array de nomes, use map() para deixar apenas a primeira letra de cada nome em maiúscula.

const firstLetter = maiusculas.map(nome => `${nome.charAt(0)}${nome.slice(1).toLowerCase()}`);
// document.body.innerText = JSON.stringify(firstLetter, null, 2)

// 🧪 Exercício 3 – Tamanho das palavras

// Dado um array de strings, use map() para retornar um novo array com o tamanho (número de caracteres) de cada palavra.

const qtdLetras = firstLetter.map(nome => nome.length)
// document.body.innerText = JSON.stringify(qtdLetras, null, 2)

// 🧪 Exercício 4 – Adicionar prefixo

// Dado um array de nomes, use map() para adicionar o prefixo “Sr./Sra.” antes de cada nome

const pessoasPrefix = pessoas.map(pessoa => {
  return pessoa.sexo === 'M' ? `Mr. ${pessoa.nome}` : `Ms. ${pessoa.nome}`
  // if(pessoa.sexo === 'M') {
  //   return `Mr. ${pessoa.nome}`
  // } else if(pessoa.sexo === 'F') {
  //   return `Ms. ${pessoa.nome}`
})

// document.body.innerText = JSON.stringify(pessoasPrefix, null, 2)

// 🧪 Exercício 5 – Substituir espaços por hífens

// Dado um array de frases curtas, use map() para substituir todos os espaços por hífens (-).

const pessoasHifen = pessoasPrefix.map(pessoa => pessoa.replace('. ', '-'))
// document.body.innerText = JSON.stringify(pessoasHifen, null, 2)

// Exercícios com find()
// 1.	Filtre apenas as pessoas maiores de idade (18 anos ou mais).

const olderThem18 = pessoas.filter(pessoa => pessoa.idade >= 18)
// document.body.innerText = JSON.stringify(olderThem18, null, 2)

const younguer = olderThem18.find(pessoa => pessoa.idade < 18) || 'Nao possui'
// console.log(younguer)

/*
const resultado = olderThem18.find(pessoa => pessoa.idade < 18);
const younguer = resultado ? resultado : "não possui";
*/

// 2.	Filtre apenas as pessoas do sexo masculino.
const male = pessoas.filter(pessoa => pessoa.sexo === 'M')
// document.body.innerText = JSON.stringify(male, null, 2)

// 3.	Filtre as pessoas cujo nome começa com a letra “A”.
const initialA = pessoas.filter(pessoa => pessoa.nome.charAt(0) === 'A' ?? pessoa)
// console.log(initialA)

// document.body.innerText = JSON.stringify(initialA, null, 2)

// 4.	Filtre as mulheres que têm mais de 18 anos.
const female18 = pessoas.filter(pessoa => (pessoa.idade >= 18 && pessoa.sexo === 'F') ?? pessoa)
// console.table(female18)

// 5.	Filtre as pessoas cujo id é um número par.
const parID = pessoas.filter(pessoa => pessoa.id % 2 === 0)
// console.log(parID)

// Exercícios com reduce()
// 	1.	Some as idades de todas as pessoas do array.
const totalAge = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0)
// console.log(totalAge)

// 	2.	Conte quantas pessoas são do sexo feminino.
const qtdWomen = pessoas.reduce((acc, pessoa) => {
  if (pessoa.sexo === 'F') {
    return acc + 1
  }
  return acc
}, 0)
// console.log(qtdWomen)

// 	3.	Calcule a média das idades das pessoas.
const average = pessoas.reduce((acc, pessoa) => {
  return (acc + pessoa.idade)
}, 0) / pessoas.length
// console.log(average)

// 	4.	Crie um objeto que agrupe os nomes por sexo (ex: um array de nomes para cada sexo).
const perGender = pessoas.reduce((acc, person) => {
  if (!acc[person.sexo]) {
    acc[person.sexo] = []
  }
  acc[person.sexo].push(person)
  return acc
}, {})

// console.log(perGender)

// 	5.	Encontre a maior idade presente no array.
// const maiorIdade = pessoas.reduce((acc, person) => person.idade > acc ? person.idade : acc = person.idade, 0)
const maiorIdade = pessoas.reduce((max, person) => person.idade > max ? person.idade : max,0)

// console.log(maiorIdade)

// console.table(pessoas)
// Exercícios com find()
// 	1.	Encontre a primeira pessoa maior de idade (idade ≥ 18).
// 	2.	Encontre a pessoa de nome igual a “João”.
// 	3.	Encontre a primeira pessoa com o id igual a 5.
// 	4.	Encontre a primeira pessoa do sexo feminino com menos de 20 anos.
// 	5.	Encontre a primeira pessoa cujo nome começa com a letra “C”.

// new Date() 
// // Cria uma nova data com o momento atual (data e hora do sistema)

// new Date("2025-06-17")
// // Cria uma data a partir de uma string (17 de junho de 2025, 00:00 UTC)

// new Date(2025, 5, 17)
// // Cria uma data com ano=2025, mês=junho (5, porque janeiro=0), dia=17 (hora=00:00)

// new Date(2025, 5, 17, 15, 30, 45, 500)
// // Cria uma data específica: 17/06/2025 15:30:45.500

// Date.now()
// // Retorna o timestamp atual (milissegundos desde 1º jan 1970 UTC)

// Date.parse("2025-06-17")
// // Converte uma string de data para timestamp (ms desde 1970)

// Date.UTC(2025, 5, 17, 12, 0, 0)
// // Cria timestamp em UTC (ano, mês, dia, hora, min, seg)

// getFullYear()    // Retorna o ano (ex: 2025)
// getMonth()       // Retorna o mês (0-11, janeiro=0)
// getDate()        // Retorna o dia do mês (1-31)
// getDay()         // Retorna o dia da semana (0-6, domingo=0)
// getHours()       // Retorna a hora (0-23)
// getMinutes()     // Retorna os minutos (0-59)
// getSeconds()     // Retorna os segundos (0-59)
// getMilliseconds()// Retorna os milissegundos (0-999)
// getTime()        // Retorna o timestamp (ms desde 1970)
// getTimezoneOffset() // Diferença em minutos do UTC

// getUTCFullYear()    // Ano UTC
// getUTCMonth()       // Mês UTC (0-11)
// getUTCDate()        // Dia do mês UTC (1-31)
// getUTCDay()         // Dia da semana UTC (0-6)
// getUTCHours()       // Hora UTC (0-23)
// getUTCMinutes()     // Minutos UTC
// getUTCSeconds()     // Segundos UTC
// getUTCMilliseconds()// Milissegundos UTC

// setFullYear(2026)         // Define o ano
// setMonth(7)               // Define o mês (0-11 → agosto=7)
// setDate(25)               // Define o dia do mês
// setHours(14)              // Define a hora (0-23)
// setMinutes(45)            // Define os minutos
// setSeconds(30)            // Define os segundos
// setMilliseconds(500)      // Define os milissegundos
// setTime(1739836800000)    // Define o timestamp (ms desde 1970)

// setUTCFullYear(2026)    // Define o ano UTC
// setUTCMonth(7)          // Define o mês UTC
// setUTCDate(25)          // Define o dia UTC
// setUTCHours(14)         // Define a hora UTC
// setUTCMinutes(45)       // Define minutos UTC
// setUTCSeconds(30)       // Define segundos UTC
// setUTCMilliseconds(500) // Define milissegundos UTC

// toString()
// // Converte para string completa (inclui data, hora e fuso horário)

// toDateString()
// // Converte apenas para data legível (ex: "Tue Jun 17 2025")

// toTimeString()
// // Converte apenas para hora legível (ex: "15:30:45 GMT+0100")

// toUTCString()
// // Converte para string UTC (ex: "Tue, 17 Jun 2025 14:30:45 GMT")

// toISOString()
// // Converte para ISO 8601 (ex: "2025-06-17T14:30:45.000Z")

// toLocaleString()
// // Converte para string formatada localmente (ex: "17/06/2025, 15:30:45")

// toLocaleDateString()
// // Converte apenas para data no formato local (ex: "17/06/2025")

// toLocaleTimeString()
// // Converte apenas para hora no formato local (ex: "15:30:45")

// 1. Criando datas
// 	1.	Crie uma data para hoje usando new Date() e exiba no console.
// console.log(new Date())

// 	2.	Crie uma data para 25 de dezembro de 2025 e exiba usando toString().
// console.log(new Date("2025-12-25").toString())

// 	3.	Crie uma data com hora específica: 1 de janeiro de 2026, 08:30:45 e exiba com toLocaleString().
// console.log(new Date("2026-01-16T08:30:45").toLocaleString())
// ⸻

// 2. Obtendo informações da data
// 	4.	Pegue a data atual e exiba:
// let date =  new Date()
// 	•	Ano
// console.log(date.getFullYear())
// 	•	Mês
// console.log(date.getMonth())
	// •	Dia do mês
// console.log(date.getDate())
// 	•	Dia da semana
// console.log(date.getDay())
// 	•	Hora, minuto e segundo
// console.log(date.toLocaleTimeString())
// 	5.	Pegue a data 17 de junho de 2025 15:30 e exiba a hora em UTC usando getUTCHours().
date = new Date('2025-06-17T15:30:00')
// console.log(date.getHours())

let dia = 9
let mes = 3
let ano = 1996

const bday = new Date(`${ano}-${mes}-${dia}`)

// console.log(bday)

// ⸻

// 3. Modificando datas
// 	6.	Crie uma data para hoje e depois:
// 	•	Adicione 5 dias
bday.setDate(bday.getDate() + 5)
// console.log(bday)

// 	•	Subtraia 2 horas
bday.setHours(bday.getHours() - 2)
// console.log(bday)
// 	•	Adicione 30 minutos
bday.setMinutes(bday.getMinutes() + 30)
// console.log(bday)
// 	•	Exiba a data final com toLocaleString()
// console.log(bday.toLocaleString())

// 	7.	Crie uma data para 1 de janeiro de 2025 e use setFullYear(), setMonth() e setDate() para mudar para 17 de agosto de 2026.
const newDate = new Date("2025-01-01")
newDate.setFullYear(2026)
newDate.setMonth('08')
newDate.setDate(17)
// console.log(newDate)
// ⸻

// 4. Comparando datas
// 	8.	Crie duas datas:
// 	•	Data A: 17 de junho de 2025
const dateA = new Date('2025-06-17')
// 	•	Data B: 25 de dezembro de 2025
const dateB = new Date('2025-12-25')
// Calcule a diferença em dias entre elas.
const milisec = dateB-dateA;
const days = milisec / (1000*60*60*24)

// console.log(days)
// ⸻

// 5. Trabalhando com timestamps

// 	9.	Pegue a data atual e transforme em timestamp com getTime().

// Depois, crie uma nova data a partir desse timestamp e exiba.
const dateC = new Date(dateA.getTime())
// console.log(dateC)
// 	10.	Crie uma data usando Date.UTC() para 17 de junho de 2025, 12:00 UTC e exiba:
const dateD = new Date("2025-06-17T12:00:00").toUTCString()

// 	•	Hora local
// console.log(dateD.getFullYear())
// 	•	Hora UTC

const curretLocale = Intl.DateTimeFormat().resolvedOptions()
// console.log(curretLocale)
// document.body.innerText = curretLocale

// console.log( new Intl.DateTimeFormat('pt-BR').format(new Date()))
// console.log( new Intl.DateTimeFormat('en-US').format(new Date()))

const data = new Date()
// console.log(data.getTimezoneOffset())
// console.log(data.getTimezoneOffset() / 60)

// console.log(data.getDay())
// console.log("12".padStart(4, "0"))

