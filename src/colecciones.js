db.circuitos.insertOne(
    {
        _id:1,
        Ciudad:"Sakhir",
        País: "Bahréin",
        Fecha: new Date ("2021-03-28"),
        Curvas: 15,
        Longitud: 5.124,
        Podio: "Lewis Hamilton, Max Verstappen, Valtteri Bottas",
        
    }
)

db.circuitos.insertMany([
    
    {_id:2, Ciudad:"Imola", Nombre:"Emilia Romagna", País:"Italia", Fecha: new Date("2021-04-18"), Curvas:10, Longitud:4.908, Podio: "Max Verstappen, Lewis Hamilton, Lando Norris"},
    {_id:3, Ciudad:"Portimao", Nombre:"Autódromo Internacional do Algarve", País:"Portugal", Fecha:new Date("2021-04-02"), Curvas:18, Longitud:4.692, Podio: "Lewis Hamilton, Max Verstappen, Valtteri Bottas"},
    {_id:4, Ciudad:"Barcelona", Nombre:"Circuito de Barcelona", País:"España", Fecha:new Date("2021-05-09"), Curvas:16, Longitud:4.655, Podio: "Lewis Hamilton, Max Verstappen, Valtteri Bottas"},
    {_id:5, Ciudad:"Montecarlo", País:"Mónaco", Fecha:new Date("2021-05-23"), Curvas:19, Longitud:3.340, Podio: "Max Verstappen, Carlos Sainz Jr, Lando Norris"},
    {_id:6, Ciudad:"Bakú", País:"Azerbaiyán", Fecha:new Date("2021-06-06"), Curvas:20, Longitud:6.003, Podio: "Sergio Pérez, Sebastian Vettel, Pierre Gasly"},
    {_id:7, Ciudad:"Le Castellet", Nombre:"Circuito de Paul Ricard", País:"Francia", Fecha:new Date("2021-06-20"), Curvas:18, Longitud:5.842, Podio: "Max Verstappen, Lewis Hamilton, Sergio Pérez"},
    {_id:8, Ciudad:"Knittelfeld", Nombre:"Red Bull Ring", País:"Austria", Fecha:new Date("2021-06-27"), Curvas:10, Longitud:4.326, Podio: "Max Verstappen, Lewis Hamilton, Valtteri Bottas"},
    {_id:9, Ciudad:"Knittelfeld", Nombre:"Red Bull Ring", País:"Austria", Fecha:new Date("2021-07-04"), Curvas:10, Longitud:4.326, Podio: "Max Verstappen, Valtteri Bottas, Lando Norris"},
    {_id:10, Ciudad:"Silverstone", Nombre:"Circuito de Silverstone", País:"Inglaterra", Fecha:new Date("2021-07-18"), Curvas:18, Longitud:5.891, Podio: "Lewis Hamilton, Charles Leclerc, Valtteri Bottas"},
    {_id:11, Ciudad:"Mogyoród", Nombre:"Hungaroring", País:"Hungría", Fecha:new Date("2021-08-02"), Curvas:14, Longitud:4.381, Podio: "Esteban Ocon, Lewis Hamilton, Carlos Sainz Jr"},
    {_id:12, Ciudad:"Stavelot", Nombre:"Circuito de Spa-Francorchamps", País:"Bélgica", Fecha:new Date("2021-08-29"), Curvas:19, Longitud:7.004, Podio: "Max Verstappen, George Russell, Lewis Hamilton"},
    {_id:13, Ciudad:"Zandvoort", Nombre:"Circuito de Zandvoort", País:"Países Bajos", Fecha:new Date("2021-09-05"), Curvas:14, Longitud:4.259, Podio: "Max Verstappen, Lewis Hamilton, Valtteri Bottas"},
    {_id:14, Ciudad:"Monza",Nombre:"Circuito de Monza", País:"Italia", Fecha:new Date("2021-09-12"), Curvas:11, Longitud:5.793, Podio: "Daniel Ricciardo, Lando Norris, Valtteri Bottas"},
    {_id:15, Ciudad:"Sochi", Nombre:"Circuito de Sochi", País:"Rusia", Fecha:new Date("2021-09-26"), Curvas:19, Longitud:5.872, Podio: "Lewis Hamilton, Max Verstappen, Carlos Sainz Jr"},
    {_id:16, Ciudad:"Estambul", Nombre:"Istanbul Park", País:"Turquía", Fecha:new Date ("2021-10-24"), Curvas:20, Longitud:5.513, Podio: "Valtteri Bottas, Max Verstappen, Sergio Pérez"},
    {_id:17, Ciudad:"Austin", Nombre:"Istanbul Park", Pais:"Estados Unidos", Fecha: new Date ("2021-10-24"), Curvas:20, Longitud:5.513, Podio:"Max Verstappen, Lewis Hamilton, Sergio Pérez"},
    {_id:18, Ciudad:"Iztacalco", Nombre:"Autódromo Heramnos Rodríguez", País:"México", Fecha:new Date ("2021-11-07"), Curvas:16, Longitud:4.421, Podio: "Max Verstappen, Lewis Hamilton, Sergio Pérez"},
    {_id:19, Ciudad:"Interlagos", Nombre:"Circuito de Interlagos", País:"Brasil", Fecha:new Date("2021-11-14"), Curvas:15, Longitud:4.309},
    {_id:20, Ciudad:"Losail", Nombre:"Circuito internacional de Losail", País:"Qatar", Fecha:new Date ("2021-11-21"), Curvas:16, Longitud:5.400},
    {_id:21, Ciudad:"Yeda", País:"Arabia Saudi", Fecha:new Date ("2021-12-05"), Curvas:27, Longitud:6.175},
    {_id:22, Ciudad:"Abu Dhabi", Nombre:"Yas Marina", País:"Emiratos Árabes Unidos", Fecha:new Date ("2021-12-12"), Curvas:21, Longitud:5.554},

])


db.escuderias.insertOne(
    {
        _id:1,
        Nombre: "Ferrari",
        Pilotos: "Charles Leclerc, Carlos Sainz Jr",
        Puntos: 268.5,
        Fundación: 1929,
        Debut: "Gran Premio de Mónaco de 1950",
        Carreras: 1008,
        Victorias: 238,
        UltimasVictorias: [new Date ("2021-09-26", "2021-08-02", "2021-07-18", "2021-05-23")]

    }
)

db.escuderias.insertMany([

    { _id:2, Nombre: "Mercedes AMG F1", Pilotos: "Lewis Hamilton, Valtteri Bottas", Puntos:478.5, Fundación: 1954, Debut:"Gran Premio de Francia de 1954", Carreras:243, Victorias:121, UltimasVictorias: [new Date ("2021-11-14", "2021-04-18", "2020-07-12", "2019-09-29", "2018-06-24", "2018-04-15")]},
    { _id:3, Nombre: "Red Bull", Pilotos: "Max Verstappen, Sergio Pérez", Puntos:477.5, Fundación:2005, Debut:"Gran Premio de Australia de 2005", Carreras:322, Victorias:74, UltimasVictorias: [new Date ("2021-11-14", "2021-11-07", "2021-10-10", "2021-09-05", "2021-05-09", "2021-04-18")]},
    { _id:4, Nombre: "McLaren", Pilotos: "Lando Norris, Daniel Ricciardo", Puntos:255, Fundación:1963, Debut:"Gran Premio de Mónaco de 1966", Carreras:863, Victorias:183, UltimasVictorias: [new Date ("2021-05-23", "2020-07-05", "2020-09-06", "2019-11-17", "2020-09-06")]},
    { _id:5, Nombre: "Alpine", Pilotos: "Fernando Alonso, Esteban Ocon", Puntos:106, Fundación:2021, Debut:"Gran Premio de Bahréon de 2021", Carreras:14, Victorias:1, UltimasVictorias: [new Date ("2021-08-02")]},
    { _id:6, Nombre: "Alpha Tauri", Pilotos: "Yuki Tsunoda, Pierre Gasly", Puntos:106, Fundación:2005, Debut:"Gran Premio de Bahréin de 2006", Carreras:276, Victorias:2, UltimasVictorias: [new Date("2021-06-06", "2008-09-14")]},
    { _id:7, Nombre: "Aston Martin", Pilotos: "Sebastian Vettel, Lance Stroll", Puntos:68, Fundación:2018, Debut:"Gran Premio de Bélgica de 2018", Carreras:40, Victorias:1, UltimasVictorias: [new Date ("2021-06-06")]},
    { _id:8, Nombre: "Alfa Romeo", Pilotos: "Kimi Raikkonen, Antonio Giovinazzi", Puntos:11, Fundación:1950, Debut:"Gran Premio de Gran Bretaña de 1950", Carreras:110, Victorias:10, UltimasVictorias: [new Date ("1984-09-09", "1983-10-15", "1982-05-23", "1981-10-17")]},
    { _id:9, Nombre: "Haas", Pilotos: "Mick Schumacher, Nikita Mazepin", Puntos:0, Fundación:2014, Debut:"Gran Premio de Australia de 2016", Carreras:108, Victorias:0, UltimasVictorias:"0"},
    { _id:10, Nombre: "Williams", Pilotos: "George Russell, Nicholas Latifi", Puntos:23, Fundación:1977, Debut:"Gran  Premio de España de 1977", Carreras:685, Victorias:114, UltimasVictorias: [new Date ("2017-06-25", "2016-06-12", "2015-06-21", "2015-06-07", "2014-11-09", "2014-08-24", "2012-05-13")]}
    
])