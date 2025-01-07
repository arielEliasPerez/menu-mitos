const promosCategory = "Promos";
const comidasCategory = "Comidas";
const cervezasCategory = "Cervezas";
const botellasCategory = "Botellas";
const tragosCategory = "Tragos";
const sinAlcoholCategory = "Sin Alcohol";
const acompañamientoCategory = "acompañamientos";

const imgPath = "../img/";
const validPromotionDays = "PROMO VÁLIDA LOS DÍAS MIERCOLES, JUEVES, SÁBADOS Y DOMINGOS, HASTA LAS 22:00."

const menuData = [
    { category: promosCategory, name: "Balde de Corona", description: "6 Coronas de 330 ml", price: 25000, img: imgPath + "" },
    { category: promosCategory, name: "Promo Cosecha Tardía + Speed", description: "3 Cosecha Tardía + 6 Speed. " + validPromotionDays, price: 25000, img: imgPath + "" },
    { category: promosCategory, name: "Promo Dr Lemon", description: "3 botellas de Dr Lemon. " + validPromotionDays, price: 38000, img: imgPath + "" },
    { category: promosCategory, name: "Promo New Age + Speed", description: "3 New Age + 6 Speed. " + validPromotionDays, price: 40000, img: imgPath + "" },
    { category: promosCategory, name: "Promo Smirnoff + Sprite", description: "3 Smirnoff + 3 Sprite.", price: 25000, img: imgPath + "" },

    { category: comidasCategory, name: "Alitas de Pollo", description: "Alitas de Pollos Fritas", price: 6000, img: imgPath + "" },
    { category: comidasCategory, name: "Alitas de Pollo con Fritas", description: "Alitas de Pollos Fritas con papas fritas.", price: 12000, img: imgPath + "" },
    { category: comidasCategory, name: "Hamburguesa Simple", description: "1 Medallón de carne, lechuga y tomate.", price: 6000, img: imgPath + "" },
    { category: comidasCategory, name: "Hamburguesa Mitos", description: "1 Medallón de carne, lechuga, tomate, jamón y queso. Acompañado de papas fritas.", price: 12000, img: imgPath + "" },
    { category: comidasCategory, name: "Hamburguesa con Papas", description: "1 Medallón de carne, lechuga y tomate. Acompañado de Papas Fritas", price: 10000, img: imgPath + "" },
    { category: comidasCategory, name: "Papas Fritas", description: "Plato de Papas Fritas simple o con aderezos.", price: 6000, img: imgPath + "" },
    { category: comidasCategory, name: "Papas Fritas con Cheddar", description: "Plato de Papas Fritas con Cheddar con o sin aderezos.", price: 8000, img: imgPath + "" },

    { category: cervezasCategory, name: "Cerveza Brahma", description:"Botella de 1 Litro", price: 7000, img: imgPath + "" },
    { category: cervezasCategory, name: "Cerveza Corona", description:"Botella de 355 ml", price: 5000, img: imgPath + "" },
    { category: cervezasCategory, name: "Cerveza Stella", description:"Botella de 1 litro", price: 8000, img: imgPath + "" },
    { category: cervezasCategory, name: "Cerveza Heineken", description:"Botella de 1 litro", price: 9000, img: imgPath + "" },
    { category: cervezasCategory, name: "Chopera Brahma", description:"", price: 16000, img: imgPath + "" },
    { category: cervezasCategory, name: "Chopera Stella", description:"", price: 18000, img: imgPath + "" },
    { category: cervezasCategory, name: "Chopera Heineken", description:"", price: 20000, img: imgPath + "" },

    { category: botellasCategory, name: "Dr Lemon", description: "Botella 1 Litro", price: 8000, img: imgPath + "" },
    { category: botellasCategory, name: "Cosecha Tardía", description: "Botella 1 Litro con 2 Speed", price: 15000, img: imgPath + "" },
    { category: botellasCategory, name: "New Age", description: "Botella 1 Litro con 2 Speed", price: 16000, img: imgPath + "" },
    { category: botellasCategory, name: "Novechento", description: "Botella 750 ml con 2 Speed", price: 16000, img: imgPath + "" },
    { category: botellasCategory, name: "Federico Alvear", description: "Botella 750 ml con 2 Speed", price: 20000, img: imgPath + "" },
    { category: botellasCategory, name: "Chandón Rose/Aperitif/Delise/Extra Brut", description: "Botella 750 ml con 2 Speed.", price: 36000, img: imgPath + "" },
    { category: botellasCategory, name: "Skyy + Speed/Jugo", description: "Skyy con 2 Speed o un Jugo Baggio", price: 24000, img: imgPath + "" },
    { category: botellasCategory, name: "Skyy + Sprite", description: "Skyy con un Sprite de 1,75 L", price: 26000, img: imgPath + "" },
    { category: botellasCategory, name: "Smirnoff + Speed/Jugo", description: "Smirnoff común con 2 Speed o un Jugo Baggio", price: 22000, img: imgPath + "" },
    { category: botellasCategory, name: "Smirnoff + Sprite", description: "Smirnoff común con un Sprite de 1,75 L", price: 23000, img: imgPath + "" },
    { category: botellasCategory, name: "Smirnoff Saborizado + Speed/Jugo", description: "Smirnoff saborizado a elección (Manzana Verde, Maracuyá, sandía, cítrico, frambueza) con 2 Speed o un Jugo Baggio", price: 24000, img: imgPath + "" },
    { category: botellasCategory, name: "Smirnoff Saborizado + Sprite", description: "Smirnoff saborizado a elección (Manzana Verde, Maracuyá, sandía, cítrico, frambueza) con un Sprite de 1,75 L", price: 25000, img: imgPath + "" },
    { category: botellasCategory, name: "Jagermeister", description: "Botella de 700 ml con 3 speed", price: 90000, img: imgPath + "" },
    { category: botellasCategory, name: "Jack Daniel's old N°7", description: "Botella 750 ml", price: 90000, img: imgPath + "" },
    { category: botellasCategory, name: "Black Label", description: "Botella 750 ml", price: 90000, img: imgPath + "" },

    { category: tragosCategory, name: "Aperol Spritz", description: "Aperol y Champagne. Opcionalmente un dash de Tónica", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Blue Lagoon", description: "Vodka, Blue Curacao, Zumo de Limón y Sprite", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Caipirinha", description: "Lima machacada, azúcar, Cachaca y refresco Lima Limón", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Caipiroska", description: "Lima machacada, zúcar, Vodka y refresco Lima Limón", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Cuba Libre", description: "Ron, Zumo de limón y Coca-Cola", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Daiquiri (Frutilla/Durazno/Maracuyá/Ananá/Melón)", description: "Ron, Pulpa de la fruta a elección, Azúcar y Zumo de limón", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Esperma de Pitufo", description: "Vodka, Blue Curacao, Piña colada y Pulpa de Ananá", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Garibaldi (Campari con Jugo)", description: "Medida de Campari y Jugo de Naranja", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Gin Tonic", description: "Copón de Gin con agua tónica y rodajas de limón. Consultar por rodajas de Pomelo", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Jagermeister con Speed", description: "Medida de Jagermeister en un vaso con hielo + un Speed.", price: 10000, img: imgPath + "" },
    { category: tragosCategory, name: "Margarita Frozzen", description: "Tequila, Triple sec o Blue Curacao, Azúcar, Zumo de Limón", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Melón con Speed", description: "Medida de Melón en un vaso con hielo + una lata de Speed", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Medida de Black Label", description: "Una medida de Whisky Black Label en un vaso con hielo. ", price: 10000, img: imgPath + "" },
    { category: tragosCategory, name: "Misil", description: "Tequila, Blue Curacao, Pulpa de Ananá y Pulpa de Frutilla", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Mojito", description: "Hojas de menta, azucar, zumo de limón, ron dorado y Gaseosa de Lima limón", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Orgasmo", description: "Vodka, Piña Colada, pulpa de Durazno y Jugo de Naranja", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Pantera Rosa", description: "Vodka, Piña Colada, Granadina y Pulpa de Ananá", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Satanás", description: "Vodka, Ron dorado, Tequila, Triple Sec, dash de Granadina, dash de pulpa de frutilla y Durazno.", price: 9000, img: imgPath + "" },
    { category: tragosCategory, name: "Sex on the Beach", description: "Vodka, Pulpa de Durazno, Jugo de Naranja y dash de Granadina", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Shot de Tequila", description: "Shot de tequila acompañado de Limón y sal", price: 3000, img: imgPath + "" },
    { category: tragosCategory, name: "Shooter Francesita (Chupito)", description: "Granadina, piña colada, Blue Curacao", price: 3500, img: imgPath + "" },
    { category: tragosCategory, name: "Shooter Bob Marley (Chupito)", description: "Granadina, pulpa durazno, Licor de Menta", price: 3500, img: imgPath + "" },
    { category: tragosCategory, name: "Tequila Sunrise", description: "Tequila, Jugo de naranja y dash de Granadina", price: 8000, img: imgPath + "" },
    { category: tragosCategory, name: "Tardío Tropical", description: "Cosecha Tardía, pulpa de Maracuyá y zumo de limón", price: 8000, img: imgPath + "" },

    { category: sinAlcoholCategory, name: "Agua Mineral", description: "Botella de 250 ml", price: 3000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Coca-Cola Lata", description: "", price: 3000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Jugo Baggio", description: "Jugo Baggio", price: 6000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Coca-Cola 1,75 Litro", description: "", price: 7000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Coca-Cola 2,25 Litro", description: "", price: 8000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Sprite 1,75 Litro", description: "", price: 7000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Sprite 2,25 Litro", description: "", price: 8000, img: imgPath + "" },
    { category: sinAlcoholCategory, name: "Speed", description: "Jugo Baggio", price: 4000, img: imgPath + "" },


    { category: acompañamientoCategory, name: "Maní Salado", description: "Mini pote de Maní", price: 1000, img: imgPath + "" },
  ];
  