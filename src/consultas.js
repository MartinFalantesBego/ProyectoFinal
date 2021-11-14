
//Quiero ver el circuito que se realiza en una ciudad.

db.circuitos.find(

    { Ciudad: "Monza" }

).pretty()

//Quiero que muestre los circuitos que hay entre dos fechas.

db.circuitos.find(
    {
        Fecha: { 

            $gte: new Date ("2021-07-12"), 
            $lt: new Date ("2021-09-26")
        }
    }

).pretty()

//Quiero mostrar los circuitos de más de 5,600 km y que tengan entre 16 y 21 curvas.

db.circuitos.find({ $and: [
    
    { Longitud: 

        {$gte:5.600 }

    },

    {"Curvas":{$gte:16}},

    {"Curvas":{$lt:21}}

]}).pretty()


//Circuitos en los que no sea ese podio.

db.circuitos.find( {

    Podio : {
         $not: 
            {
              $eq: "Max Verstappen, Lewis Hamilton, Sergio Pérez" 
            } 
        }

} ).pretty()


//Muestra las escuderías que tienen menos de 170 puntos.

db.escuderias.find({

    Puntos:{$lte: 170}

}).pretty()

//Mostrar los circuitos que tengan ese número de curvas.

db.circuitos.find({

    Curvas: { 

        $in: [ 18, 27, 11]
    }

}).pretty()

//Actualizar los puntos de _id 5 a 112

db.escuderias.update(

    { _id: 5},

    { $set: { Puntos: 112 } }

)

db.escuderias.find(
    {
        Nombre: "Alpine"
    }
).pretty()