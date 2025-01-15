const promosCategory = "Promos";
const comidasCategory = "Comidas";
const cervezasCategory = "Cervezas";
const botellasCategory = "Botellas";
const tragosCategory = "Tragos";
const sinAlcoholCategory = "Sin Alcohol";
const acompañamientoCategory = "acompañamientos";

const imgPath = "./assets/img/";
const validPromotionDays = "PROMO VÁLIDA LOS DÍAS MIERCOLES, JUEVES, SÁBADOS Y DOMINGOS, HASTA LAS 22:00."

const menuData = [
    { category: promosCategory, name: "Balde de Corona", description: "6 Coronas de 330 ml", price: 25000, img: imgPath + promosCategory + "/baldeCorona.jpg" },
    { category: promosCategory, name: "Promo Cosecha Tardía + Speed", description: "3 Cosecha Tardía + 6 Speed. " + validPromotionDays, price: 40000, img: imgPath + promosCategory + "/promoCosecha.jpg" },
    { category: promosCategory, name: "Promo Dr Lemon", description: "3 botellas de Dr Lemon. " + validPromotionDays, price: 22000, img: imgPath + promosCategory + "/promoDrLemon.jpg" },
    { category: promosCategory, name: "Promo New Age + Speed", description: "3 New Age + 6 Speed. " + validPromotionDays, price: 44000, img: imgPath + promosCategory + "/promoNewAge.jpg" },
    { category: promosCategory, name: "Promo Novechento + Speed", description: "3 Novecheto + 6 Speed. SÓLO LOS SÁBADOS HASTA LAS 22:00", price: 44000, img: imgPath + promosCategory + "/promoNovechento.jpg" },
    { category: promosCategory, name: "Promo Smirnoff + Sprite", description: "3 Smirnoff + 3 Sprite.", price: 65000, img: imgPath + promosCategory + "/promoSmirnoff.jpg" },

    { category: comidasCategory, name: "Alitas de Pollo", description: "Alitas de Pollo frito.", price: 7000, img: imgPath + comidasCategory + "/alitasPollo.jpg" },
    { category: comidasCategory, name: "Alitas de Pollo con Fritas", description: "Alitas de Pollos Frito con papas fritas.", price: 12000, img: imgPath + comidasCategory + "/alitasPapas.jpg" },
    { category: comidasCategory, name: "Hamburguesa Simple", description: "1 Medallón de carne, lechuga y tomate.", price: 6000, img: imgPath + comidasCategory + "/hamburguesaSimple.jpg" },
    { category: comidasCategory, name: "Hamburguesa Mitos", description: "1 Medallón de carne, lechuga, tomate, jamón y queso. Acompañado de papas fritas.", price: 12000, img: imgPath + comidasCategory + "/hamburguesaMitos.jpg" },
    { category: comidasCategory, name: "Hamburguesa con Papas", description: "1 Medallón de carne, lechuga y tomate. Acompañado de Papas Fritas", price: 10000, img: imgPath + comidasCategory + "/hamburguesaPapas.jpg" },
    { category: comidasCategory, name: "Papas Fritas", description: "Plato de Papas Fritas simple o con aderezos.", price: 6000, img: imgPath + comidasCategory + "/fritas.jpg" },
    { category: comidasCategory, name: "Papas Fritas con Cheddar", description: "Plato de Papas Fritas con Cheddar con o sin aderezos.", price: 8000, img: imgPath + comidasCategory + "/papasCheddar.jpg" },

    { category: cervezasCategory, name: "Cerveza Brahma", description:"Botella de 1 Litro", price: 7000, img: imgPath + cervezasCategory + "/Brahma.jpg" },
    { category: cervezasCategory, name: "Cerveza Corona", description:"Botella de 355 ml", price: 5000, img: imgPath + cervezasCategory + "/Corona.jpg" },
    { category: cervezasCategory, name: "Cerveza Stella", description:"Botella de 1 litro", price: 9000, img: imgPath + cervezasCategory + "/Stella.jpg" },
    { category: cervezasCategory, name: "Cerveza Heineken", description:"Botella de 1 litro", price: 9000, img: imgPath + cervezasCategory + "/Heineken.jpg" },
    { category: cervezasCategory, name: "Cerveza Huari", description:"Lata Huari Miel", price: 7000, img: imgPath + cervezasCategory + "/Huari.jpg" },
    { category: cervezasCategory, name: "Cerveza Paceña", description:"Lata Paceña", price: 7000, img: imgPath + cervezasCategory + "/Paceña.jpg" },
    { category: cervezasCategory, name: "Chopera Brahma", description:"", price: 17000, img: imgPath + cervezasCategory + "/choperaBrahma.jpg" },
    { category: cervezasCategory, name: "Chopera Stella", description:"", price: 20000, img: imgPath + cervezasCategory + "/choperaStella.jpg" },
    { category: cervezasCategory, name: "Chopera Heineken", description:"", price: 20000, img: imgPath + cervezasCategory + "/choperaHeineken.jpg" },

    { category: botellasCategory, name: "Dr Lemon", description: "Botella 1 Litro", price: 9000, img: imgPath + botellasCategory + "/drLemon.jpg" },
    { category: botellasCategory, name: "Du", description: "Champagne Du + 2 Speed", price: 15000, img: imgPath + botellasCategory + "/du.jpg" },
    { category: botellasCategory, name: "Cosecha Tardía", description: "Botella 1 Litro + 2 Speed", price: 16000, img: imgPath + botellasCategory + "/cosecha.jpg" },
    { category: botellasCategory, name: "New Age", description: "Botella 1 Litro + 2 Speed", price: 17000, img: imgPath + botellasCategory + "/newAge.jpg" },
    { category: botellasCategory, name: "Novechento", description: "Botella 750 ml + 2 Speed", price: 17000, img: imgPath + botellasCategory + "/novechento.jpg" },
    { category: botellasCategory, name: "Federico Alvear", description: "Botella 750 ml + 2 Speed", price: 22000, img: imgPath + botellasCategory + "/federico.jpg" },
    { category: botellasCategory, name: "Chandón Rose, Aperitif, Delise o Extra Brut", description: "Botella 750 ml + 2 Speed.", price: 36000, img: imgPath + botellasCategory + "/chandon.jpg" },
    { category: botellasCategory, name: "Fernet + Coca-Cola", description: "Botella de Fernet Branca de 750 ml + Botella de Coca-Cola.", price: 45000, img: imgPath + botellasCategory + "/fernet.jpg" },
    { category: botellasCategory, name: "Gin + Tónica", description: "Botella de Gin + Botella de Agua tónica.", price: 45000, img: imgPath + botellasCategory + "/gin.jpg" },
    { category: botellasCategory, name: "Hodlmoser", description: "Botella de Hodlmoser + 2 Speed.", price: 60000, img: imgPath + botellasCategory + "/hodlmoser.jpg" },
    { category: botellasCategory, name: "Sernova + Sprite", description: "Sernova con un Sprite de 1,75 L", price: 27000, img: imgPath + botellasCategory + "/sernovaSprite.jpg" },
    { category: botellasCategory, name: "Skyy + Speed/Jugo", description: "Skyy con 2 Speed o un Jugo Baggio", price: 25000, img: imgPath + botellasCategory + "/skyySpeed.jpg" },
    { category: botellasCategory, name: "Skyy + Sprite", description: "Skyy con un Sprite de 1,75 L", price: 27000, img: imgPath + botellasCategory + "/skyySprite.jpg" },
    { category: botellasCategory, name: "Smirnoff + Speed/Jugo", description: "Smirnoff común con 2 Speed o un Jugo Baggio", price: 24000, img: imgPath + botellasCategory + "/smirnoffSpeed.jpg" },
    { category: botellasCategory, name: "Smirnoff + Sprite", description: "Smirnoff común con un Sprite de 1,75 L", price: 24000, img: imgPath + botellasCategory + "/smirnoffSprite.jpg" },
    { category: botellasCategory, name: "Smirnoff Saborizado + Speed/Jugo", description: "Smirnoff saborizado a elección (Manzana Verde, Maracuyá, sandía, cítrico, frambueza) con 2 Speed o un Jugo Baggio", price: 26000, img: imgPath + botellasCategory + "/smirnoffSabJugo.jpg" },
    { category: botellasCategory, name: "Smirnoff Saborizado + Sprite", description: "Smirnoff saborizado a elección (Manzana Verde, Maracuyá, sandía, cítrico, frambueza) con un Sprite de 1,75 L", price: 27000, img: imgPath + botellasCategory + "/smirnoffSabSprite.jpg" },
    { category: botellasCategory, name: "Jagermeister", description: "Botella de 700 ml con 3 speed", price: 90000, img: imgPath + botellasCategory + "/jager.jpg" },
    { category: botellasCategory, name: "Jack Daniel's old N°7", description: "Botella 750 ml", price: 90000, img: imgPath + botellasCategory + "/jackDaniels.jpg" },
    { category: botellasCategory, name: "Black Label", description: "Botella 750 ml", price: 90000, img: imgPath + botellasCategory + "/blackLabel.jpg" },

    { category: tragosCategory, name: "Aperol Spritz", description: "Aperol y Champagne. Opcionalmente un dash de Tónica", price: 8000, img: imgPath + tragosCategory + "/aperol.jpg" },
    { category: tragosCategory, name: "Blue Lagoon", description: "Vodka, Blue Curacao, Zumo de Limón y Sprite", price: 8000, img: imgPath + tragosCategory + "/blueLagoon.jpg" },
    { category: tragosCategory, name: "Caipirinha", description: "Lima machacada, azúcar, Cachaca y refresco Lima Limón", price: 9000, img: imgPath + tragosCategory + "/caipirinha.jpg" },
    { category: tragosCategory, name: "Caipiroska", description: "Lima machacada, azúcar, Vodka y refresco Lima Limón", price: 8000, img: imgPath + tragosCategory + "/caipiroska.jpg" },
    { category: tragosCategory, name: "Cuba Libre", description: "Ron, Zumo de limón y Coca-Cola", price: 8000, img: imgPath + tragosCategory + "/cubaLibre.jpg" },
    { category: tragosCategory, name: "Daiquiri (Frutilla, Durazno, Maracuyá, Ananá o Melón)", description: "Ron, Pulpa de la fruta a elección, Azúcar y Zumo de limón", price: 10000, img: imgPath + tragosCategory + "/daiquiri.jpg" },
    { category: tragosCategory, name: "Esperma de Pitufo", description: "Vodka, Blue Curacao, Piña colada y Pulpa de Ananá", price: 8000, img: imgPath + tragosCategory + "/espermaPitufo.jpg" },
    { category: tragosCategory, name: "Garibaldi (Campari con Jugo)", description: "Medida de Campari y Jugo de Naranja", price: 8000, img: imgPath + tragosCategory + "/garibaldi.jpg" },
    { category: tragosCategory, name: "Gin Tonic", description: "Copón de Gin con agua tónica y rodajas de limón. Consultar por rodajas de Pomelo", price: 10000, img: imgPath + tragosCategory + "/ginTonic.jpg" },
    { category: tragosCategory, name: "Gin Tonic de Frutos Rojos", description: "Copón de Gin con agua tónica y frutos rojos.", price: 12000, img: imgPath + tragosCategory + "/ginTonicFrutosRojos.jpg" },
    { category: tragosCategory, name: "Jagermeister con Speed", description: "Medida de Jagermeister en un vaso con hielo + un Speed.", price: 10000, img: imgPath + tragosCategory + "/jager.jpg" },
    { category: tragosCategory, name: "Margarita Frozzen", description: "Tequila, Triple sec o Blue Curacao, Azúcar, Zumo de Limón", price: 10000, img: imgPath + tragosCategory + "/margarita.jpg" },
    { category: tragosCategory, name: "Medida de Black Label", description: "Una medida de Whisky Black Label en un vaso con hielo. ", price: 10000, img: imgPath + tragosCategory + "/blackLabel.jpg" },
    { category: tragosCategory, name: "Melón con Speed", description: "Medida de Melón en un vaso con hielo + una lata de Speed", price: 10000, img: imgPath + tragosCategory + "/melonSpeed.jpg" },
    { category: tragosCategory, name: "Misil", description: "Tequila, Blue Curacao, Pulpa de Ananá y Pulpa de Frutilla", price: 10000, img: imgPath + tragosCategory + "/misil.jpg" },
    { category: tragosCategory, name: "Mojito", description: "Hojas de menta, azúcar, zumo de limón, ron dorado y Gaseosa de Lima limón", price: 9000, img: imgPath + tragosCategory + "/mojito.jpg" },
    { category: tragosCategory, name: "Orgasmo", description: "Vodka, Piña Colada, pulpa de Durazno y Jugo de Naranja", price: 8000, img: imgPath + tragosCategory + "/orgasmo.jpg" },
    { category: tragosCategory, name: "Pantera Rosa", description: "Vodka, Piña Colada, Granadina y Pulpa de Ananá", price: 8000, img: imgPath + tragosCategory + "/panteraRosa.jpg" },
    { category: tragosCategory, name: "Satanás", description: "Vodka, Ron dorado, Tequila, Triple Sec, dash de Granadina, dash de pulpa de frutilla y Durazno.", price: 9000, img: imgPath + tragosCategory + "/satanas.jpg" },
    { category: tragosCategory, name: "Sex on the Beach", description: "Vodka, Pulpa de Durazno, Jugo de Naranja y dash de Granadina", price: 8000, img: imgPath + tragosCategory + "/sexOnTheBeach.jpg" },
    { category: tragosCategory, name: "Shot de Tequila", description: "Shot de tequila acompañado de Limón y sal", price: 3000, img: imgPath + tragosCategory + "/shotTequila.jpg" },
    { category: tragosCategory, name: "Shooter Bob Marley (Chupito)", description: "Granadina, pulpa durazno, Licor de Menta", price: 4000, img: imgPath + tragosCategory + "/shotBobMarley.jpg" },
    { category: tragosCategory, name: "Shooter Francesita (Chupito)", description: "Granadina, piña colada, Blue Curacao", price: 4000, img: imgPath + tragosCategory + "/shotFrancesita.jpg" },    
    { category: tragosCategory, name: "Tardío Tropical", description: "Cosecha Tardía, pulpa de Maracuyá y zumo de limón", price: 8000, img: imgPath + tragosCategory + "/tardiaTropical.jpg" },
    { category: tragosCategory, name: "Tequila Sunrise", description: "Tequila, Jugo de naranja y dash de Granadina", price: 8000, img: imgPath + tragosCategory + "/tequilaSunrise.jpg" },

    { category: sinAlcoholCategory, name: "Agua Mineral", description: "Botella de 250 ml", price: 3000, img: imgPath + sinAlcoholCategory + "/agua.jpg" },
    { category: sinAlcoholCategory, name: "Daiquiri Sin Alcohol", description: "Sabores: Frutilla, Durazno, Maracuyá, Ananá o Melón.", price: 10000, img: imgPath + tragosCategory + "/daiquiriSinAlcohol.jpg" },
    { category: sinAlcoholCategory, name: "Coca-Cola Lata", description: "", price: 3000, img: imgPath + sinAlcoholCategory + "/cocaLata.jpg" },
    { category: sinAlcoholCategory, name: "Jugo Baggio", description: "Jugo Baggio", price: 6000, img: imgPath + sinAlcoholCategory + "/baggio.jpg" },
    { category: sinAlcoholCategory, name: "Speed", description: "Jugo Baggio", price: 5000, img: imgPath + sinAlcoholCategory + "/speed.jpg" },
    { category: sinAlcoholCategory, name: "Coca-Cola 1,75 Litro", description: "", price: 7000, img: imgPath + sinAlcoholCategory + "/coca1.jpg" },
    { category: sinAlcoholCategory, name: "Coca-Cola 2,25 Litro", description: "", price: 8000, img: imgPath + sinAlcoholCategory + "/coca2.jpg" },
    { category: sinAlcoholCategory, name: "Sprite 1,75 Litro", description: "", price: 7000, img: imgPath + sinAlcoholCategory + "/sprite1.jpg" },
    { category: sinAlcoholCategory, name: "Sprite 2,25 Litro", description: "", price: 8000, img: imgPath + sinAlcoholCategory + "/sprite2.jpg" },


    { category: acompañamientoCategory, name: "Maní Salado", description: "Mini pote de Maní", price: 1000, img: imgPath + acompañamientoCategory + "/mani.jpg" },
  ];
  