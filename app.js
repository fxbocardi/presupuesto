// Datos de ejemplo de productos
const productsData = [
    {
        category: "Maquillaje FX",
        products: [
            { name: "Color Mixer A2 (diluyente para pigmentos) x 20 ml.", description: "Maquillale FX", price: 16950 },
            { name: "HZR Paleta (classic-sfx-etnias) 12 colores x 200 grs.", description: "Maquillale Fx", price: 100000 },
          { name: "HZR Paleta Estudio (24 colores) x 350 grs.", description: "Maquillale Fx", price: 180000 },
          { name: "HZR Rueda (skin 1 y 2, trauma, halloween, zombie, blood, starter), 6 colores x 60 grs.", description: "Maquillale Fx", price: 70000 },
          { name: "HZR Smart Palette,  6 colores x 50 grs.", description: "Maquillale Fx", price: 45000 },
          { name: "KRYOLAN Anti Shine Powder x 30 gr.", description: "Maquillale Fx", price: 82100 },
          { name: "KRYOLAN DERMACOLOR Fixing Powder  x 20 gr.", description: "Maquillale Fx", price: 77650 },
          { name: "KRYOLAN FX Wax (cera multi uso)  x 12 gr.", description: "Maquillale Fx", price: 37750 },
          { name: "Polvo volátil translúcido mate ANDREA PELLEGRINO, HD Setting Powder x 8,5 gr.", description: "Maquillale Fx", price: 27900 },
          { name: "SKIN ILLUSTRATOR, flesh tone palette", description: "Maquillale Fx", price: 259000 },
        ]
    },
    {
        category: "Removedores de Maquillaje",
        products: [
            { name: "Aceite JOHNSON'S  puro 100 ml. ", description: "presupuestador fx", price: 5300 },
            { name: "Agua Miscelar BIODERMA Hydrabio h2o x 250ml.", description: "presupuestador fx", price: 24800 },
          { name: "Miristato de Isopropilo x 1 kg.", description: "presupuestador fx", price: 35000 },
          { name: "Toallitas húmedas desmaquillantes exfoliante Q SOFT x 25 un. ", description: "presupuestador fx", price: 4990 },
        ]
    },
     {
        category: "Skin Care",
        products: [
            { name: "Loción astringente BIOBELLUS con atomizador x 250 ml.", description: "skin care", price: 6450 },
            { name: "Loción facial súper hidratante LIDHERMA piel mixta x 125 ml.", description: "skin care", price: 15750 },
          { name: "Óleo calcáreo ESTRELLA Baby, suavidad natural x 500 ml. ", description: "skin care", price: 5920 },
          { name: "Primer en gel NATURA Una Blur transparente x 30 ml.", description: "skin care", price: 28250 },
        ]
    },
   {
        category: "Adhesivos para Piel",
        products: [
            { name: "Adhesivo de estudio HZR x 50 ml.", description: "Mesa", price: 28000 },
            { name: "Mastic BELLADERSINA pegamento artístico p/ piel x 20g.", description: "Mesa de comedor", price: 5200 },
          { name: "Pros-aide Original ADM TRONICS x 60 ml. $48000", description: "Mesa de comedor", price: 48000 },
          { name: "SMOOTH-ON Skin Tite kit 4 oz + Thivex (tixotrópico) x 1 oz.", description: "Mesa de comedor", price: 133000 },
          { name: "TELESIS 8 Silicone Adhesive Standard x 60 ml. ", description: "Mesa de comedor", price: 59000 },
          
        ]
    },
   {
        category: "Removedores de adhesivo para Piel",
        products: [
            { name: "TELESIS Super Solv x 120 ml. ", description: "Silla ergonómica", price: 38000 },
            { name: "Alcohol Isopropílico x 1 lt.", description: "Mesa de comedor", price: 26000 },
          { name: "Miristato de Isopropilo x 1 kg.", description: "Mesa de comedor", price: 35000 },
          { name: "Removedor HZR x 100 cc. ", description: "Mesa de comedor", price: 14000 },
        ]
    },
   {
        category: "Sangre Cosmética",
        products: [
            { name: "Sangre FX falsa, comestible x 125 cc.", description: "Sangre fx", price: 5500 },
            { name: "Sangre FX falsa, comestible x 250 cc. ", description: "Sangre fx", price: 9500 },
          { name: "Sangre FX falsa, comestible x 500 cc. ", description: "Sangre fx", price: 16500 },
          { name: "Sangre FX falsa, comestible x 1 lt. ", description: "Sangre fx", price: 29700 },
        ]
    },
   {
        category: "Repostería",
        products: [
            { name: "AGAR AGAR, Gelatina Vegetal x 50 gr", description: "Reposteria", price: 2600 },
            { name: "CMC (adhesivo comestible y espesante) AMTEX x 100 gr.", description: "Reposteria", price: 2800 },
          { name: "Colorante Pasta FLEIBOR azul x 15 gr. ", description: "Reposteria", price: 1800 },
          { name: "Colorante Pasta FLEIBOR amarillo x 15 gr. ", description: "Reposteria", price: 1800 },
          { name: "Colorante Pasta FLEIBOR rojo sangre x 15 gr.", description: "Reposteria", price: 1800 },
          { name: "Colorante Polvo DUSTCOLOR amarillo (liposoluble) x 10 cc.", description: "Reposteria", price: 2400 },
          { name: "Colorante Polvo DUSTCOLOR azul océano (liposoluble) x 10 cc.", description: "Reposteria", price: 3500 },
          { name: "Colorante Polvo DUSTCOLOR rojo tomate (liposoluble) x 10 cc.", description: "Reposteria", price: 2400 },
          { name: "Gel de brillo neutro LEDEVIT x 310 gr. ", description: "Reposteria", price: 1700 },
          { name: "Gelatina en polvo sin sabor x 1 kg.", description: "Reposteria", price: 17900 },
          { name: "Gelatina en polvo sin sabor x 100 gr.", description: "Reposteria", price: 2400 },
          { name: "Gelatina en polvo sin sabor x 250 gr.", description: "Reposteria", price: 4800 },
          { name: "Gelatina en polvo sin sabor x 500 gr.", description: "Reposteria", price: 9300 },
          { name: "Glicerina liquida (grado alimenticio) x 1 kg. ", description: "Reposteria", price: 2500 },
          { name: "Glicerina liquida (grado alimenticio) x 5 kg. ", description: "Reposteria", price: 10000 },
          { name: "Glucosa x 1 kg. ", description: "Reposteria", price: 2500 },
          { name: "Glucosa x 10 kg. ", description: "Reposteria", price: 23200 },
          { name: "Jalea de Fantasía - Slime comestible - Tutti Frut x 140 gr .", description: "Reposteria", price: 2000 },
          { name: "Sorbitol líquido 70% (grado alimenticio) x 1kg.", description: "Reposteria", price: 10100 },
                  ]
    },
   {
        category: "Descartables",
        products: [
            { name: "Algodón ESTRELLA baby pre cortado x 100gr.", description: "Descartables", price: 1050 },
            { name: "Baja lenguas descartable pediátrico x 100un.", description: "Descartables", price: 3000 },
          { name: "Bolsas residuo consorcio negra 80 x 110 reforzada x 1 un.", description: "Descartables", price: 230 },
          { name: "Bolsas residuo consorcio negras 80 x 110 reforzadas x 10 un.", description: "Descartables", price: 2300 },
          { name: "Guantes descartables de látex x 1 par.", description: "Descartables", price: 140 },
          { name: "Guantes descartables de nitrilo x 1 par.", description: "Descartables", price: 200 },
          { name: "Guantes descartables látex x 100 un.", description: "Descartables", price: 7000 },
          { name: "Guantes descartables nitrilo x 100 un.", description: "Descartables", price: 10000 },
          { name: "Pañuelos Papel Tissue ELEGANTE Premium doble hoja x 150 un.", description: "Descartables", price: 1100 },
          { name: "Papel film cocina auto adherente, rollo 38cm x 200mts.", description: "Descartables", price: 6500 },
          { name: "Pompones de algodón ESTRELLA x 50 un.", description: "Descartables", price: 2300 },
          { name: "Rollo cocina SUSSEX clásico 50 paños x 3 un. ", description: "Descartables", price: 1800 },
          { name: "Vaso descartable plástico 180cc x 100 un.", description: "Descartables", price: 3500 },
        ]
    },
   {
        category: "Embalaje",
        products: [
            { name: "Cartón corrugado embalaje rollo 140 cm x 30 mt. ", description: "Embalaje", price: 13300 },
            { name: "Cinta de embalar CANDELA transparente reforzada 4.8cm x 41mts.", description: "Embalaje", price: 1990 },
          { name: "Cinta de embalar CANDELA marrón reforzada 4.8cm x 41mts.", description: "Embalaje", price: 1990 },
          { name: "Film Strecht rollo 50cm x 200 mts.", description: "Embalaje", price: 8200 },
          { name: "Polietileno c/ burbujas, rollo 1mt x 50mts.", description: "Embalaje", price: 14300 },
                  ]
    },
   {
        category: "Siliconas",
        products: [
            { name: "Silicona base platino SMOOTH-ON Dragon Skin 10 (fast cure), Shore A10 x 900 grs.", description: "Siliconas", price: 94000 },
            { name: "SMOOTH-ON So Strong Pigment, Pack x 9 colores (pigmentos).", description: "Siliconas", price: 88755 },
          { name: "SMOOTH-ON Thi Vex 00, Tixotrópico 0,03kg.", description: "Siliconas", price: 24250 },
          { name: "SMOOTH-ON Soma Foama, 15 sf Platinum, espuma flexible 1,35 kg.", description: "Siliconas", price: 172414 },
          { name: "Silicona base platino SMOOTH-ON Dragon Skin Pro, Shore A2 x 7,2 kg.", description: "Siliconas", price: 698000 },
          { name: "Silicona base platino SMOOTH-ON Dragon Skin Pro, Shore A2 x 900 grs.", description: "Siliconas", price: 102000 },
          { name: "Silicona base platino SMOOTH-ON Dragon Skin 10, fast cure, Shore A10 x 7,2 kg. ", description: "Siliconas", price: 655000 },
          { name: "Silicona base platino EUROCHEM Starsil 25/20, Shore A20 x 1kg. ", description: "Siliconas", price: 66000 },
          { name: "Silicona base estaño EUROCHEM Maxsil 50/20, Shore A20 x 1kg.", description: "Siliconas", price: 54000 },
        ]
    },
  {
        category: "Encapsuladores",
        products: [
            { name: "Glatzan KRYOLAN Bald Cap Material (soluble en acetona) x 500 ml.", description: "Encapsuladores", price: 198000 },
          { name: "Glatzan KRYOLAN Bald Cap Material (soluble en acetona) x 1lt.", description: "Encapsuladores", price: 324000 },
            { name: "Súper Baldiez MOULDLIFE (soluble en acetona) x 100 grs. ", description: "Encapsuladores", price: 54000 },
          { name: "Súper Baldiez MOULDLIFE (soluble en alcohol isopropílico) x 120 ml.", description: "Encapsuladores", price: 62900 },
        ]
    },
  {
        category: "Insumos Dentales",
        products: [
            { name: "Acrílico auto curable para reparaciones VAICEL blanco / color x 100 gr.", description: "Insumos dentales", price: 12900 },
            { name: "Acrílico auto curable para reparaciones VAICEL rosa para encías x 100 gr.", description: "Insumos dentales", price: 12900 },
          { name: "Alginato JELTRATE Dustless Dentsply x 410 gr.", description: "Insumos dentales", price: 11800 },
          { name: "Gelatina para reproducciones GENAU x 1 kg.", description: "Insumos dentales", price: 26800 },
          { name: "Laca abrillantadora Barniz Dental LUMILAC x 30 cc.", description: "Insumos dentales", price: 13600 },
          { name: "Monómero auto curable VAICEL x 100 cc.", description: "Insumos dentales", price: 12900 },
          { name: "Separador de acrílico y yeso SILTOM Rosa x 1 lt.", description: "Insumos dentales", price: 23000 },
          { name: "Silicona C+ Combo Putty  x 582 gr. + Light x 60 ml. + Activador.", description: "Insumos dentales", price: 40700 },
          { name: "Tableta de Dientes c/ 6 elementos x un.", description: "Insumos dentales", price: 3500 },
        ]
    },
  {
        category: "Solventes Industriales",
        products: [
            { name: "Acetona x 1 lt. ", description: "Solventes Industriales", price: 15000 },
            { name: "Aguarrás mineral x 1 lt.", description: "Solventes Industriales", price: 4600 },
          { name: "Alcohol etílico x 1000 cc.", description: "Solventes Industriales", price: 4700 },
          { name: "Alcohol etílico x 250 cc. ", description: "Solventes Industriales", price: 3200 },
          { name: "Alcohol etílico x 500 cc. ", description: "Solventes Industriales", price: 3500 },
                    { name: "Alcohol Isopropílico x 1000 cc.", description: "Solventes Industriales", price: 22000 },
          { name: "Alcohol Isopropílico x 500 cc. ", description: "Solventes Industriales", price: 14950 },
          { name: "Diluyente p/ Cemento de contacto x 1 lt.", description: "Solventes Industriales", price: 7000 },
          { name: "Monómero de Estireno x 1 lt.", description: "Solventes Industriales", price: 9800 },
          { name: "Solvente Industrial “DUXOL” x 1 lt.", description: "Solventes Industriales", price: 6700 },
          { name: "Thinner TERSUAVE Sello de Oro x 1 lt.", description: "Solventes Industriales", price: 9400 },
        ]
    },
  {
        category: "Refuerzo de Moldes",
        products: [
            { name: "Arpillera x 1 mt2.", description: "Refuerzo moldes", price: 3200 },
            { name: "Cáñamo x 100 grs.", description: "Refuerzo moldes", price: 5600 },
          { name: "Fibra de vidrio x 1 mt2. ", description: "Refuerzo moldes", price: 3300 },
          { name: "Hilo de fibra de vidrio cortada x 25kg.", description: "Refuerzo moldes", price: 169000 },
          { name: "Hilo Sisal 6mm x 10 mt.", description: "Refuerzo moldes", price: 4600 },
          { name: "Malla p/ revoque de fibra de vidrio, rollo x 5 metros.", description: "Refuerzo moldes", price: 7700 },
          { name: "Tela Roving (800gr.) x 1 mt2. ", description: "Refuerzo moldes", price: 8900 },
          { name: "Velo de Superficie, fibra de vidrio 30 grs/mt2 x 1 mt2.", description: "Refuerzo moldes", price: 6500 },
        ]
    },
  {
        category: "Insumos Multi Uso",
        products: [
            { name: "Goma espuma plancha 2m x 1m x 1cm.", description: "Bricolaje", price: 8950 },
            { name: "Goma espuma plancha 2m x 1m x 2cm.", description: "Bricolaje", price: 13800 },
          { name: "Goma espuma plancha 2m x 1m x 4cm.", description: "Bricolaje", price: 13800 },
          { name: "Goma espuma plancha 2m x 1m x 2cm. ", description: "Bricolaje", price: 25800 },
          { name: "Goma Eva plancha 100 x 130 cm en 10mm.", description: "Bricolaje", price: 39550 },
          { name: "Goma Eva plancha 100 x 130 cm 2mm.", description: "Bricolaje", price: 8500 },
          { name: "Goma Eva plancha 100x130cm 3mm.", description: "Bricolaje", price: 15000 },
          { name: "Polyfan blanco placa 60x120 2 cm.", description: "Bricolaje", price: 19400 },
          { name: "Polyfan blanco placa 60x120 5 cm.", description: "Bricolaje", price: 44700 },
          { name: "Telgopor ladrillo p/ techo 100 x 42 cm x 10 cm. x un.", description: "Bricolaje", price: 7210 },
          { name: "Telgopor plancha 1mt x 1mt x 2cm. x un. ", description: "Bricolaje", price: 3700 },
          { name: "Telgopor plancha 1mt x 1mt x 4cm. x un.", description: "Bricolaje", price: 6000 },
        ]
    },
  {
        category: "Adhesivos Industriales",
        products: [
            { name: "Adhesivo permanente en aerosol TEKBOND x 500 ml.", description: "Adhesivo Industrial", price: 34490 },
            { name: "Adhesivo Reposicionable en aerosol TEKBOND x 500 ml.", description: "Adhesivo Industrial", price: 27440 },
          { name: "Barras silicona SUPRABOND ultra transparentes finas x 500 grs.", description: "Adhesivo Industrial", price: 17000 },
          { name: "Barras silicona SUPRABOND ultra transparentes gruesas x 500 grs.", description: "Adhesivo Industrial", price: 16500 },
          { name: "Cemento de contacto CONGO x 1 Kg.", description: "Adhesivo Industrial", price: 15000 },
          { name: "Cemento de contacto CONGO  x 500 grs.", description: "Adhesivo Industrial", price: 7300 },
          { name: "Cianocrilato CIANO CA3 x 20gr.", description: "Adhesivo Industrial", price: 12840 },
          { name: "Cola vinílica CONGO x 1 Kg.", description: "Adhesivo Industrial", price: 7400 },
          { name: "Cola vinílica CONGO x 500 grs.", description: "Adhesivo Industrial", price: 5850 },
          { name: "LA GOTITA x 2ml.", description: "Adhesivo Industrial", price: 2200 },
          { name: "Silicona Acética transparente TEKBOND x 270 ml.", description: "Adhesivo Industrial", price: 7050 },
          { name: "Silicona Neutra transparente  SUPRABOND x 270 ml.", description: "Adhesivo Industrial", price: 11600 },
        ]
    },
  {
        category: "Soportes y Estructuras",
        products: [
            { name: "Caño estructural cuadrado de 10 x 10 x 0,9 mm x 6 mt.", description: "Soporte y Estructura", price: 9000 },
            { name: "Caño estructural cuadrado de 20 x 20 x 1,2 mm x 6 mt.", description: "Soporte y Estructura", price: 14300 },
           { name: "Caño estructural cuadrado de 30 x 20 x 1,2 mm x 6 mt.", description: "Soporte y Estructura", price: 16520 },
           { name: "Caño estructural cuadrado de 30 x 30 x 1,2 mm x 6 mt. ", description: "Soporte y Estructura", price: 27750 },
           { name: "Caño estructural cuadrado de 40 x 40 x 1,2 mm x 6 mt.", description: "Soporte y Estructura", price: 33100 },
           { name: "Caño estructural cuadrado de 80 x 80 x 2 mm x 6 mt.", description: "Soporte y Estructura", price: 73320 },
           { name: "DURLOCK Cantonero x 260 cm.", description: "Soporte y Estructura", price: 2700 },
           { name: "DURLOCK Montante 35 mm x 260 cm.", description: "Soporte y Estructura", price: 4300 },
           { name: "DURLOCK Montante 70 mm x 260 cm.", description: "Soporte y Estructura", price: 6900 },
           { name: "DURLOCK Solera 35 mm x 260 cm.", description: "Soporte y Estructura", price: 3200 },
           { name: "DURLOCK Solera 70 mm x 260 cm.", description: "Soporte y Estructura", price: 4400 },
           { name: "ELECTRODOS soldar ACINDAR 6013 punta azul x 2,5 mm x 1 kg.", description: "Soporte y Estructura", price: 8200 },
           { name: "ESCUADRA para alacena 65x65x15mm x 12 un.", description: "Soporte y Estructura", price: 7000 },
           { name: "ESCUADRA para armado 30x30x40mm (soporte unión) x 12 un.", description: "Soporte y Estructura", price: 6500 },
           { name: "ESCUADRA para armado 33x33x16mm (soporte unión)  x 12 un.", description: "Soporte y Estructura", price: 3900 },
           { name: "MADERA, Clavadera techo 2'x2' x 4mt.", description: "Soporte y Estructura", price: 3100 },
           { name: "MADERA, Listón pino cepillado 1'x 2' x 3 mt. ", description: "Soporte y Estructura", price: 3400 },
           { name: "MADERA, Listón pino cepillado 1’x 3’ x mt.", description: "Soporte y Estructura", price: 12400 },
           { name: "MADERA, Listón pino cepillado 1cm x 2cm x 3 mt.", description: "Soporte y Estructura", price: 2400 },
           { name: "Placa FENOLICO pino 12mm 1,60x2,20 mt.", description: "Soporte y Estructura", price: 49750 },
           { name: "Placa FENOLICO pino 8 mm  2,20 x 1,60 mt.", description: "Soporte y Estructura", price: 35500 },
           { name: "Placa MDF,  Fibrofacil 9 mm x 1,83 x 3,66 mt.", description: "Soporte y Estructura", price: 33000 },
           { name: "Placa MDF, fibrofacil 12 mm x 1,83 x 3,66 mt. ", description: "Soporte y Estructura", price: 38000 },
           { name: "Placa OSB x 10mm 1,22 x 2,44 mt.", description: "Soporte y Estructura", price: 15800 },
           { name: "Tornillo auto perforante T1 punta mecha 8 x 1’ (4,2 x 25mm) x 100 un.", description: "Soporte y Estructura", price: 5350 },
           { name: "Tornillo auto perforante T1 punta mecha 8 x ½’ (4,2 x 13mm) x 100 un.", description: "Soporte y Estructura", price: 3770 },
           { name: "Tornillo auto perforante T1 punta mecha 8 x ¾’ (4,2 x 19mm) x 100 un.", description: "Soporte y Estructura", price: 4350 },
           { name: "Tornillo auto perforante T2 punta aguja 6x1’ (3,5 x 25mm) x 100 un.", description: "Soporte y Estructura", price: 3550 },
           { name: "Tornillo auto perforante T2 punta aguja 6x2’ (3,5 x 50mm) x 100 un. ", description: "Soporte y Estructura", price: 5300 },
           { name: "Tornillo auto perforante T3 punta aguja 6x1.1/2’ (3,5 x 38mm) x 100 un.", description: "Soporte y Estructura", price: 3550 },
        ]
    },
  {
        category: "Insumos de Escultura",
        products: [
            { name: "Arcilla blanca CHILABERT (al agua) x 10 kg. ", description: "Escultura", price: 16500 },
            
          { name: "Arcilla Polimérica x 1 kg.", description: "Escultura", price: 24000 },
          { name: "Arcilla Polimérica x 500 grs.", description: "Escultura", price: 12000 },
          { name: "Gekko form PLASTIMAKE Carmas Composites x 100grs.", description: "Escultura", price: 28700 },
          { name: "Masilla POXILINA 10 min x 70 grs.", description: "Escultura", price: 4650 },
          { name: "Masilla SUPRABOND Erpox Acero 100 grs.", description: "Escultura", price: 4400 },
          { name: "Masilla Epoxi PARSEC  x 1 kg.", description: "Escultura", price: 21700
},
          { name: "Masilla Epoxi PARSEC  x 500 grs.", description: "Escultura", price: 14650 },
          
          { name: "Masilla Epoxi PARSEC x 250 grs.", description: "Escultura", price: 8250 },
          { name: "Masilla epoxi p/ modelar secado lento ARTESANO x 1 kg.", description: "Escultura", price: 15000 },
          { name: "Plasticera  x 1 Kg.", description: "Escultura", price: 17000 },
          { name: "Plasticera WAXEN (dureza Hard) x 100 gr.", description: "Escultura", price: 5000 },
          { name: "Plasticera WAXEN (dureza Media) x 500 gr.", description: "Escultura", price: 15000 },
           { name: "Plastilina ALBA x 1 kg.", description: "Escultura", price: 7900 },
        ]
    },
  {
        category: "Yesos y Cargas Minerales",
        products: [
            { name: "Carbonato de calcio x kg.", description: "Yeso", price: 5200 
            },
            { name: "Yeso Densita V,  Pensita 5, PESCIO amarillo x 1 kg.", description: "Yeso", price: 7100
            },
          { name: "Yeso Piedra PESCIO x kg. ", description: "Yeso", price: 4200
            },
          { name: "Yeso Piedra “PESCIO” x 25 kg. ", description: "Yeso", price: 49925
            },
        ]
    },
  {
        category: "Resinas",
        products: [
            { name: "SMOOTH-ON  Smash! Plastic, Resina de Poliuretano Rompible, x 900 gr.", description: "Resinas", price: 185300 },
            { name: "Resina al Agua Ecocryl NOVARCHEM  x 1,400 kg.", description: "Resinas", price: 23400 },
          { name: "Resina Epoxi p/ colada DICAST 41 x 1 kg.", description: "Resinas", price: 37900 },
          { name: "Resina Poliéster náutica + Catalizador x 1 kg.", description: "Resinas", price: 10200 },
          
        ]
    },
  {
        category: "Desmoldantes Industriales",
        products: [
            { name: "Alcohol Polivinílico x 1 Lt.", description: "Desmoldantes", price: 13700 },
            { name: "Cera Desmoldante x 500 cc.", description: "Desmoldantes", price: 24800 },
          { name: "Desmoldante Siliconado DIX x 245 gr.", description: "Desmoldantes", price: 10000 },
          { name: "Desmoldante Universal SMOOTH-ON  mold release spray x 341gr.", description: "Desmoldantes", price: 66220 },
          { name: "Vaselina sólida x kg.", description: "Desmoldantes", price: 14000 },
        ]
    },
  {
        category: "Látex y Poliuretanos",
        products: [
            { name: "Aerosil espesante p/ látex x 250 gr.", description: "Látex y Poliuretanos", price: 7000 },
            { name: "Látex pre vulcanizado LATEX CO x 1 lt. ", description: "Látex y Poliuretanos", price: 12900 },
          { name: "Látex pre vulcanizado espeso LATEX CO  x 1 kg.", description: "Látex y Poliuretanos", price: 25000 },
          { name: "Poliuretano expandido BAROVO  aerosol x 500ml.", description: "Látex y Poliuretanos", price: 8100 },
          { name: "Poliuretano expandido BAROVO aerosol x 750ml.", description: "Látex y Poliuretanos", price: 14650 },
          { name: "Poliuretano Flexible kit x 1 kg.", description: "Látex y Poliuretanos", price: 24000 },
          { name: "Poliuretano Flexible visco elástico kit x 2 kg.", description: "Látex y Poliuretanos", price: 44000 },
          { name: "Poliuretano Rígido kit x 2 kg.", description: "Látex y Poliuretanos", price: 38000 },
        ]
    },
  {
        category: "Pintura Artística",
        products: [
            { name: "Acrílico artístico AD x 60 ml.", description: "Pintura Artística", price: 1300 },
            { name: "Acrílico artístico AD x 200 ml.", description: "Pintura Artística", price: 4200 },
          { name: "Aguarrás vegetal (esencia de Trementina) ALBA x 100ml.", description: "Pintura Artística", price: 4200 },
          { name: "Barniz y diluyente mate acrílico al agua EUREKA x 120 ml.", description: "Pintura Artística", price: 4950 },
          { name: "Oleo ALBA,  grupo 3 (varios colores) x 18 ml.", description: "Pintura Artística", price: 5100 },
          { name: "Retardador de secado para Acrílico AD x 100 ml.", description: "Pintura Artística", price: 1700 },
          { name: "Secante de Cobalto para Oleo x 100 ml.", description: "Pintura Artística", price: 5200 },
        ]
    },
  {
        category: "Pelo y Postizos",
        products: [
            { name: "Calva de Látex (para caracterización) x un.", description: "Pelo y postizos", price: 32000 },
          { name: "Calva de Látex para claritos TYCEL x un.", description: "Pelo y postizos", price: 1500 },
          { name: "Calva KRYOLAN de GLATZAN  (fundible en Acetona ) x un.", description: "Pelo y postizos", price: 67500 },
          { name: "Color en aerosol MOMO (lavable) x 180 ml.", description: "Pelo y postizos", price: 3900 },
            { name: "Cortina Cabello Natural 4 Capas 45 Cms X 20 Ancho.", description: "Pelo y postizos", price: 210000 },
          { name: "Fijador en Aerosol ROBY (extra fuerte) x 180 ml.", description: "Pelo y postizos", price: 6300 },
          { name: "Fijador en Aerosol ROBY (extra fuerte) x 180 ml.", description: "Pelo y postizos", price: 7800 },
          { name: "Matizador en Spray LOREAL Paris Magic Retouch x 75 ml.", description: "Pelo y postizos", price: 22000 },
          { name: "Pelo crepé MEHRON x 30 cm.", description: "Pelo y postizos", price: 63400 },
          { name: "Pelo sintético KANEKALÓN x 60 cm.", description: "Pelo y postizos", price: 4500 },
        ]
    },{
        category: "Pintura de Obra y Decoración",
        products: [
            { name: "Chalk paint VENIER x 1 lt.", description: "Pinturas de obra", price: 10000 },
            { name: "Cinta de enmascarar x 18mm.", description: "Pinturas de obra", price: 2500 },
          { name: "Cinta de enmascarar x 24mm.", description: "Pinturas de obra", price: 3250 },
          { name: "Esmalte sintético al agua ALBA Blanco Satinado x 1 lt.", description: "Pinturas de obra", price: 14970 },
          { name: "Esmalte sintético al agua ALBA Blanco Satinado x 4 lt.", description: "Pinturas de obra", price: 44300 },
          { name: "Esmalte sintético en aerosol PINTURIC (todos los colores) x 237 ml.", description: "Pinturas de obra", price: 3990 },
          { name: "Esmalte sintético en aerosol PINTURIC (todos los colores) x 440 ml.", description: "Pinturas de obra", price: 5630 },
          { name: "Esmalte sintético en aerosol PINTURIC (metalizados) x 237 ml. ", description: "Pinturas de obra", price: 5990 },
          { name: "Esmalte sintético en aerosol PINTURIC (metalizados) x 440 ml. ", description: "Pinturas de obra", price: 9400 },
          { name: "Esmalte sintético ALBA Blanco Brillante x 250 ml.", description: "Pinturas de obra", price: 8700 },
          
          { name: "Esmalte sintético  ALBA Blanco Brillante x 500 ml.", description: "Pinturas de obra", price: 10500 },
          { name: "Esmalte sintético ALBA Blanco Brillante x 1 lt.", description: "Pinturas de obra", price: 13900 },
          { name: "Esmalte sintético ALBA Blanco Brillante x 4 lt.", description: "Pinturas de obra", price: 49000 },
          { name: "Látex acrílico Acrilplast SINTEPLAST, Blanco int./ext x 1 lt.", description: "Pinturas de obra", price: 9400 },
          { name: "Látex acrílico Acrilplast SINTEPLAST, Blanco int./ext x 4 lt.", description: "Pinturas de obra", price: 29100 },
          { name: "Látex acrílico Acrilplast SINTEPLAST, Blanco int./ext x 10 lt. ", description: "Pinturas de obra", price: 63200 },
          { name: "Látex acrílico Acrilplast SINTEPLAST, Blanco int./ext x 20 lt.", description: "Pinturas de obra", price: 106300 },
          { name: "Látex acrílico TERSUAVE, Color x 1 lt.", description: "Pinturas de obra", price: 16700 },
          { name: "Látex acrílico SINTEPLAST, Color  x 4 lt.", description: "Pinturas de obra", price: 36900 },
          
          { name: "Pintura Acrílica “TEKBOND” en aerosol x 350 ml.", description: "Pinturas de obra", price: 7500 },
        ]
    },
  // Añadir las 25 categorías y productos aquí
];

// Carrito de compras
let cart = [];

// Mostrar categorías y productos
function renderCategories() {
    const categoriesContainer = document.querySelector('.categories');
    
    productsData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        const select = document.createElement('select');
        select.setAttribute('multiple', 'multiple');
        category.products.forEach(product => {
            const option = document.createElement('option');
            option.textContent = `${product.name} - $${product.price}`;
            option.value = JSON.stringify(product);
            select.appendChild(option);
        });

        categoryDiv.appendChild(select);

        // Botón de agregar al carrito
        const addButton = document.createElement('button');
        addButton.textContent = 'Agregar al carrito';
        addButton.addEventListener('click', () => addToCart(select.selectedOptions));
        categoryDiv.appendChild(addButton);

        categoriesContainer.appendChild(categoryDiv);
    });
}

// Función para agregar productos al carrito
function addToCart(selectedOptions) {
    Array.from(selectedOptions).forEach(option => {
        const product = JSON.parse(option.value);
        const quantity = prompt(`¿Cuántos ${product.name} deseas agregar? (default: 1)`, 1);
        const productWithQuantity = { ...product, quantity: parseInt(quantity) || 1 };
        cart.push(productWithQuantity);
    });

    updateCart();
}

// Mostrar carrito
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
    cartContainer.innerHTML = ''; // Limpiar carrito

    let total = 0;
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${product.name} x${product.quantity} - $${product.price * product.quantity}`;

        // Botón de borrar producto
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Borrar';
        removeButton.addEventListener('click', () => removeProduct(index));
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
        total += product.price * product.quantity;
    });

    totalContainer.textContent = `Total: $${total}`;
}

// Eliminar producto del carrito
function removeProduct(index) {
    cart.splice(index, 1);
    updateCart();
}

// Borrar todo el carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    updateCart();
});

// Guardar carrito como PDF o TXT (ahora incluye la suma total)
document.getElementById('save-cart').addEventListener('click', () => {
    let cartText = 'Presupuesto de compra:\n\n';

    // Añadir los productos seleccionados al archivo
    let total = 0;
    cart.forEach(product => {
        const productTotal = product.price * product.quantity;
        cartText += `${product.name} x${product.quantity} - $${productTotal}\n`;
        total += productTotal;
    });

    // Añadir la suma total al final
    cartText += `\nTotal: $${total}`;

    // Crear un blob con el texto y preparar la descarga
    const blob = new Blob([cartText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'presupuesto.txt';
    link.click();

});

// Volver a la tienda
document.getElementById('back-to-shop').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Mostrar carrito
document.getElementById('view-cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
});

renderCategories();
