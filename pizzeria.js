const { MongoClient }  = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect(err => {
  if (!err) {
      console.log('It is a miracle... we are conected! 🙏');
      console.log('Entering data...')
      db = client.db('pizzeria');
      db.dropDatabase();

      client.db('pizzeria').collection('Comanda').insertMany([

      { 
        '_id': 'C001',
        'date': new Date(),
        'client': 'C001',
        'takeAway': true,
        'delivers': 'E003',
        'deliveryTime': new Date('<MM:ss>'),
        'products': ['PP001','PP002','PD002','PB001'],
        'totalPrice': 35.20,
      }, 
      { 
        '_id': 'C002',
        'date': Date.now(),
        'client' : 'C002',
        'takeAway': false,
        'product': ['PP001','PD002'],
        'totalPrice': 17.35,
      },
      {
        '_id': 'C003',
        'date': Date.now(),
        'client' : 'C003',
        'takeAway': true,
        'delivers': 'E004',
        'deliveryTime': new Date('<MM:ss>'),
        'product': ['PP002','PB001','PB002','PP001','PD001','PD002','PD002'],
        'totalPrice': 50.80,
      },
      {
        '_id': 'C004',
        'date': Date.now(),
        'client' : 'C004',
        'takeAway': false,
        'product': ['PD001','PD002'],
        'totalPrice': 9.50,
      },  
  
    ]),
  
    client.db('pizzeria').collection('Client').insertMany([
  
      { '_id': 'C001', 'name': 'Josep Rouras', 'postalCode': 08034, 'phone': '664567634', 'Location': {'city': 'Tarragona', 'province': 'Tarragona'}},
      { '_id': 'C002', 'name': 'María Canals', 'postalCode': 08017, 'phone': '664565634', 'Location': {'city': 'Barcelona', 'province': 'Barcelona'}},
      { '-id': 'C003', 'name': 'Jordi Crap', 'postalCode': 08025, 'phone': '647567634', 'Location': {'city': 'Girona', 'province': 'Girona'}},
      { '_id': 'C004', 'name': 'Marta Gomis', 'postalCode': 08045, 'phone': '623567634', 'Location': {'city': 'Barcelona', 'province': 'Barcelona'}},
      { '_id': 'C005', 'name': 'Lorena Brown', 'postalCode': 08080, 'phone': '665667634', 'Location': {'city': 'Tarragona', 'province': 'Tarragona'}},
      { '_id': 'C006', 'name': 'Kent Gloss', 'postalCode': 08003, 'phone': '634567634', 'Location': {'city': 'Girona', 'province': 'Girona'}},
  
  ]);

    client.db('pizzeria').collection('Product').insertMany([

        { '_id': 'PP001', 'name': 'Napoletana', 'description': 'tomato sauce, buffalo mozzarella, basil', 'image': 'pictures/napoletana.jpg', 'price': 12.45},
        { '_id': 'PP002', 'name': 'Margarita', 'description': 'tomato sauce', 'image': 'pictures/margarita.jpg', 'price': 10.45},
        { '_id': 'PD001', 'name': 'coke', 'description': 'soda lite', 'image': 'pictures/coke.jpg', 'price': 1.45},
        { '_id': 'PD002', 'name': 'beer', 'description': 'pale ale', 'image': 'pictures/beer.jpg', 'price': 2.45},
        { '_id': 'PH001', 'name': 'Fatboy', 'description': 'Burguer cheeese', 'image': 'pictures/chesseBurger.jpg', 'price': 9.45},
        { '_id': 'PH002', 'name': 'BigPork', 'description': 'Burguer bacon', 'image': 'pictures/kingBacon', 'price': 11.00},

    ])


    client.db('pizzeria').collection('Employee').insertMany([

        { '_id': 'E001', '_id_shop': 'B001', 'name': 'María', 'lastName': 'Ganja', 'nif': '34566723H', 'phone': '671699932', 'job': 'chef'},
        { '_id': 'E002', '_id_shop': 'B002', 'name': 'James', 'lastName': 'Juice', 'nif': '34578723J', 'phone': '671688832', 'job': 'chef' },
        { '_id': 'E003', '_id_shop': 'B003', 'name': 'Robert', 'lastname': 'Almost','nif': '34566623K', 'phone': '671666332', 'job': 'delivery man' },
        { '_id': 'E004', '_id_shop': 'B004', 'name': 'Jonh', 'lastName:': 'Oconnor', 'nif': '345987238', 'phone': '674564332', 'job': 'delivery man'},

    ])

    client.db('pizzeria').collection('Shop').insertMany([

        { '_id': 'B001', 'name': 'The Train', "adress" : {'street': 'c/ carrot black, 56', 'postalCode': 08034, 'city': 'Lleida', 'province': 'Lleida'}},
        { '_id': 'B002', 'name': 'Burguers For you', "adress" : {'street': 'c/ pipe, 566', 'postalCode': 08017, 'city': 'Tarragona', 'province': 'Tarragona'}},
        { '_id': 'B003', 'name': 'The italian job', "adress" : {'street': 'c/ avocado way, 156', 'postalCode': 08025, 'city': 'Girona', 'province': 'Girona'}},
        { '_id': 'B004', 'name': 'Eat shop', "adress" : {'street': 'c/ helm, 487', 'postalCode': 08065, 'city': 'Barcelona', 'province': 'Barcelona'}},

    ])
  
  } else {
      console.log(err.message);   
  } 

});

setTimeout(function() {
  console.log('and we are close!')
  client.close()
  }, 3000);
