db.createUser({
    user: "helio",
    pwd: "adminUsuarios++2020",
    roles: [
        {
            role: "read",
            db: "realMotors" 
        } 
    ]
})

db.clinete.insert({nombre: "Brennan", apellido: "Kling", tel_referencia: ""});
db.clinete.insert({nombre: "Kian", apellido: "Goldner", tel_referencia: ""});
db.clinete.insert({nombre: "Helen", apellido: "McClure", tel_referencia: "59 x104"});
db.clinete.insert({nombre: "Moshe", apellido: "Gerhold", tel_referencia: ""});
db.clinete.insert({nombre: "Louisa", apellido: "Mosciski", tel_referencia: ""});
db.clinete.insert({nombre: "General", apellido: "Reichel", tel_referencia: ""});
db.clinete.insert({nombre: "Justen", apellido: "Steuber", tel_referencia: ""});
db.clinete.insert({nombre: "Carlie", apellido: "Sipes", tel_referencia: ""});
db.clinete.insert({nombre: "Hiram", apellido: "Johns", tel_referencia: ""});
db.clinete.insert({nombre: "Heloise", apellido: "Lind", tel_referencia: ""});
db.clinete.insert({nombre: "Margot", apellido: "Gerhold", tel_referencia: ""});
db.clinete.insert({nombre: "Laney", apellido: "Ruecker", tel_referencia: ""});
db.clinete.insert({nombre: "Michel", apellido: "Sawayn", tel_referencia: ""});
db.clinete.insert({nombre: "Burley", apellido: "Murazik", tel_referencia: ""});
db.clinete.insert({nombre: "Dora", apellido: "Morissette", tel_referencia: ""});
db.clinete.insert({nombre: "Bernard", apellido: "Jast", tel_referencia: ""});
db.clinete.insert({nombre: "Ernest", apellido: "Watsica", tel_referencia: ""});
db.clinete.insert({nombre: "Isaac", apellido: "Lakin", tel_referencia: ""});
db.clinete.insert({nombre: "Magnolia", apellido: "Haley", tel_referencia: ""});
db.clinete.insert({nombre: "Weston", apellido: "Wyman", tel_referencia: ""});


db.vehiculo.insert({marca: "Toyota", modelo: "Gran Vitara", anio_vehiculo:"81262", num_chasis: "2236863297"});
db.vehiculo.insert({marca: "Nissan", modelo: "Jeep", anio_vehiculo:"39121", num_chasis: "351066943"});
db.vehiculo.insert({marca: "Toyota", modelo: "Gran Vitara", anio_vehiculo:"97072", num_chasis: "6034276611"});
db.vehiculo.insert({marca: "suzuki", modelo: "Jeep", anio_vehiculo:"74656", num_chasis: "5444786797"});
db.vehiculo.insert({marca: "Mitsubishi", modelo: "4x4", anio_vehiculo:"21752", num_chasis: "2684745266"});
db.vehiculo.insert({marca: "Toyota", modelo: "Gran Vitara", anio_vehiculo:"13720", num_chasis: "3862622990"});
db.vehiculo.insert({marca: "Hino", modelo: "Jeep", anio_vehiculo:"43027", num_chasis: "691158196"});
db.vehiculo.insert({marca: "Mitsubishi", modelo: "camioneta", anio_vehiculo:"55930", num_chasis: "824893802"});
db.vehiculo.insert({marca: "Hino", modelo: "4x4", anio_vehiculo:"18745", num_chasis: "691158196"});
db.vehiculo.insert({marca: "Nissan", modelo: "Gran Vitara", anio_vehiculo:"95480", num_chasis: "9634436775"});
db.vehiculo.insert({marca: "Toyota", modelo: "4x4", anio_vehiculo:"53322", num_chasis: "2223534519"});
db.vehiculo.insert({marca: "Mitsubishi", modelo: "camioneta", anio_vehiculo:"5191", num_chasis: "915167731"});
db.vehiculo.insert({marca: "Mitsubishi", modelo: "camioneta", anio_vehiculo:"83479", num_chasis: "6845752146"});
db.vehiculo.insert({marca: "suzuki", modelo: "4x4", anio_vehiculo:"52983", num_chasis: "8523985223"});
db.vehiculo.insert({marca: "Nissan", modelo: "Gran Vitara", anio_vehiculo:"960", num_chasis: "6560983821"});
db.vehiculo.insert({marca: "Toyota", modelo: "volvo", anio_vehiculo:"13385", num_chasis: "5112095237"});
db.vehiculo.insert({marca: "Mitsubishi", modelo: "volvo", anio_vehiculo:"68840", num_chasis: "4663919309"});
db.vehiculo.insert({marca: "Nissan", modelo: "camioneta", anio_vehiculo:"8965", num_chasis: "5128784483"});
db.vehiculo.insert({marca: "Hino", modelo: "volvo", anio_vehiculo:"15479", num_chasis: "691158196"});
db.vehiculo.insert({marca: "suzuki", modelo: "Gran Vitara", anio_vehiculo:"9067", num_chasis: "4229386286"});
db.vehiculo.insert({marca: "Toyota", modelo: "camioneta", anio_vehiculo:"39364", num_chasis: "8878027227"});



db.articulo.insert({cod: "33106", nombre_articulo: "dolores", descripcion: "caja de herramientas" ,masVendido: 933 });
db.articulo.insert({cod: "45139", nombre_articulo: "culpa", descripcion: "motor a diesel", masVendido: 1});
db.articulo.insert({cod: "57689", nombre_articulo: "nesciunt", descripcion: "bomba de motor" ,masVendido: 537 });
db.articulo.insert({cod: "33348", nombre_articulo: "dolore", descripcion: "termostato de motor a diesel", masVendido: 345 });
db.articulo.insert({cod: "422", nombre_articulo: "et", descripcion: " tornillos de motor a gasolina", masVendido: 35 });
db.articulo.insert({cod: "33153", nombre_articulo: "porro", descripcion: "aceite de motor a diesel", masVendido: 67 });
db.articulo.insert({cod: "66225", nombre_articulo: "temporibus", descripcion: " corona de motor a diesel" ,masVendido: 59 });
db.articulo.insert({cod: "25314", nombre_articulo: "hic", descripcion: "termostato" ,masVendido: 516 });
db.articulo.insert({cod: "11341", nombre_articulo: "ad", descripcion: "harum-architecto-nihil" ,masVendido: 402 });
db.articulo.insert({cod: "43178", nombre_articulo: "dicta", descripcion: "tempora-quae-accusamus" ,masVendido: 920 });
db.articulo.insert({cod: "74880", nombre_articulo: "reprehenderit", descripcion: "fugit-inventore-consequuntur" ,masVendido: 855 });
db.articulo.insert({cod: "3106", nombre_articulo: "Rustic", descripcion: "caja de herramientas  - dos " ,masVendido:666 });
db.articulo.insert({cod: "5139", nombre_articulo: "payment", descripcion: "motor a diesel - dos ", masVendido:75 });
db.articulo.insert({cod: "7689", nombre_articulo: "backing up", descripcion: "bomba de motor - dos " ,masVendido:151 });
db.articulo.insert({cod: "3348", nombre_articulo: "navigating", descripcion: "termostato de motor a diesel - dos ", masVendido:323 });
db.articulo.insert({cod: "22", nombre_articulo: "Washington", descripcion: " tornillos de motor a gasolina - dos ", masVendido: 627 });
db.articulo.insert({cod: "3153", nombre_articulo: "Open-architected", descripcion: "aceite de motor a diesel - dos ", masVendido: 268 });
db.articulo.insert({cod: "6225", nombre_articulo: "Armenia", descripcion: " corona de motor a diesel - dos " ,masVendido: 143 });
db.articulo.insert({cod: "5314", nombre_articulo: "mint green", descripcion: "termostato - dos " ,masVendido:397 });
db.articulo.insert({cod: "1341", nombre_articulo: "Ergonomic Wooden Fish", descripcion: "harum-architecto-nihil - dos " ,masVendido:468 });
db.articulo.insert({cod: "3178", nombre_articulo: "Lead", descripcion: "tempora-quae-accusamus - dos " ,masVendido:159 });
db.articulo.insert({cod: "4880", nombre_articulo: "THX", descripcion: "fugit-inventore-consequuntur - dos " ,masVendido:417 });




db.cotizacion.insert({codigocotizacion: "", });



db.cliente.insert({
    nombre_razonSocial: "Limber",
    numeroContacto:"67199930",
    correo: "llimachi@gmail.com",
    vehiculo: [
        {
            marca:"Toyota",
            modelo: "corolla",
            anio: "1998",
            numChasis: "12015D213FFDE1231"
        }
    ],
    cotizaciones: [{
        numeroCotizacion: 1,
        
        articulos: [{
            cantidad: 1,
            descripcion: "alambre de cobre",
            observacion: "grosor 8 mm, de color rojiso"
        },
        {
            cantidad: 3,
            descripcion: "palancas de cambio de acero",
            observacion: "La palanca debe ser de material de acero inoxidable, preferentemente de color negro"
        }
      ]
    }]
});

db.cliente.insert({
    nombre_razonSocial: "El Diario",
    numeroContacto:"2-252632",
    correo: "eldiario@el_diario.com",
    vehiculo: [
        {
            marca:"Toyota",
            modelo: "corolla",
            anio: "1985",
            numChasis: "12WSCD213FFDE1000"
        },
        {
            marca:"Mitsubishi",
            modelo: "camioneta",
            anio: "1990",
            numChasis: "8547D21QWX3FFDE12"
        },
    ],
    cotizaciones: [{
        numeroCotizacion: 2,
        
        articulos: [{
            cantidad: 5,
            descripcion: "tuerca de motor a diesel",
            observacion: "diametro de la tuerca debe ser de 45 mm"
        },
        {
            cantidad: 1,
            descripcion: "un corcho de motor a gozolina",
            observacion: "el corcho necesariemanete debe ser de material de goma de llanta de avion"
        },
        {
            cantidad: 20,
            descripcion: "Tornillos sujetadores de tanque de gazolina",
            observacion: "las pulgadas del tornilo deben ser de 3 pulgadas"
        }
      ]
    }]
});



db.cliente.insert({
    nombre_razonSocial: "Cristembo",
    numeroContacto:"71525133",
    correo: "cristembo@cristembo.com",
    vehiculo: [
        {
            marca:"Toyota",
            modelo: "volvo",
            anio: "1970",
            numChasis: "8457FFGRDE1000"
        },
    ],
    cotizaciones: [{
        numeroCotizacion: 3,
        
        articulos: [{
            cantidad: 1,
            descripcion: "motor para volvo",
            observacion: "a gasolina pro"
        },
        {
            cantidad: 15,
            descripcion: "piesas sujetores de motor de volvo a gasolina",
            observacion: "el precio no debe exceder de los 1500 Bs."
        },
        {
            cantidad: 20,
            descripcion: "Tornillos sujetadores de tanque de gazolina",
            observacion: "las pulgadas del tornilo deben ser de 3 pulgadas"
        }
      ]
    },
    {
        numeroCotizacion: 4,
        
        articulos: [{
            cantidad: 3,
            descripcion: "cono de motor a gasolina",
            observacion: "el cono debe ser de altura minima de 15 cm, y un ancho de radio 5cm"
        },
        {
            cantidad: 12,
            descripcion: "piesas sujetores de motor de volvo a gasolina",
            observacion: "los sujetores del tanque deben ser de un peso no mayor a 0.5 Kg."
        },
        {
            cantidad: 1,
            descripcion: "calibrador de motor a gasolina",
            observacion: "debe medir en las unidades de centimetros cubicos, metros cubicos"
        }
      ]
    }]
});



        db.cliente.updateMany(
            {"cotizaciones.numeroCotizacion": 4 },
            {$set : {"cotizaciones.$": {
                    numeroCotizacion: 5,
                    articulos: [{
                    cantidad: 1,
                    descripcion: "gata",
                    observacion: "minimo debe levantar como 100 kg de peso"
                }]
            }}
        
        });