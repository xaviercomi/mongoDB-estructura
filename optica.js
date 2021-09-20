require('./mongoConexio')

use('optica');

db.Ullera.drop();
db.Client.drop();

db.Ullera.insert([
  { 
    'id': 'U001',
    'marca': 'Okley',
    'grad_esq': 0.75,
    'grad_dta': 1.20,
    'muntura': ['pasta','metal','flotant'],
    'color': 'negre',
    'color_esq': 'clar',
    'color_dta': 'clar',
    'preu': 145.00,
      'proveidor': {
        'NIF': 'G45346789',
        'nom': 'Ulleres Guais',
        'telefon': '933456712',
        'fax': '934567823', 
        'adreca': {
              'carrer': 'miopia',
              'numero': '45',
              'pis': '2',
              'porta': '3',
              'ciutat': 'Berlin',
              'pais': 'Alemanya'
        }       
      }
  },
  { 
    'id': 'U002',
    'marca': 'Police',
    'grad_esq': 1.75,
    'grad_dta': 1.00,
    'muntura': ['pasta','metal','flotant'],
    'color': 'vermell',
    'color_esq': 'fosc',
    'color_dta': 'fosc',
    'preu': 56.00,
      'proveidor': {
        'NIF': 'G45906789',
        'nom': 'Ulleres Super',
        'telefon': '933467712',
        'fax': '934567823', 
        'adreca': {
              'carrer': 'astigmatisme',
              'numero': '67',
              'pis': '1',
              'porta': '5',
              'ciutat': 'Paris',
              'pais': 'França'
        }       
      }
  },
  { 
    'id': 'U003',
    'marca': 'Ray-Ban',
    'grad_esq': 0.24,
    'grad_dta': 0.45,
    'muntura': ['pasta','metal','flotant'],
    'color': 'marro',
    'color_esq': 'fosc',
    'color_dta': 'fosc',
    'preu': 110.00,
      'proveidor': {
        'NIF': 'H45786789',
        'nom': 'Ulleres Cool',
        'telefon': '933467712',
        'fax': '9345557823', 
        'adreca': {
              'carrer': 'cataratas',
              'numero': '345',
              'pis': '1',
              'porta': 'A',
              'ciutat': 'Bergen',
              'pais': 'Noruega'
        }       
      }
  },
  { 
    'id': 'U004',
    'marca': 'Carrera',
    'grad_esq': 0.09,
    'grad_dta': 1.65,
    'muntura': ['pasta','metal','flotant'],
    'color': 'rosa',
    'color_esq': 'verd',
    'color_dta': 'verd',
    'preu': 345.00,
      'proveidor': {
        'NIF': 'A45346789',
        'nom': 'Ulleres Grans',
        'telefon': '933456767',
        'fax': '934567867', 
        'adreca': {
              'carrer': 'del talp',
              'numero': '456',
              'pis': '1',
              'porta': '1',
              'ciutat': 'Dublin',
              'pais': 'Irlanda'
        }       
      }
  },

])
// Insert documents into Client collection.
db.Client.insertMany([
  { '_id': 1, 'nom': 'Josep Rouras', 'codi postal': 08034, 'telefon': '664567634', 'registre': new Date('2015-03-01T08:00:00Z'), 'recomanat': 'Jordi Crap', 'venedor/a': 'Anna Longa'},
  { '_id': 1, 'nom': 'María Canals', 'codi postal': 08017, 'telefon': '664565634', 'registre': new Date('2017-03-01T08:00:00Z'), 'recomanat': 'Marta Gomis', 'venedor/a': 'Josefina Casa'},
  { '_id': 1, 'nom': 'Jordi Crap', 'codi postal': 08025, 'telefon': '647567634', 'registre': new Date('2018-08-01T08:00:00Z'), 'recomanat': 'Lorena Brown', 'venedor/a': 'Enriqueta Tomas'},
  { '_id': 1, 'nom': 'Marta Gomis', 'codi postal': 08045, 'telefon': '623567634', 'registre': new Date('2017-04-01T08:00:00Z'), 'recomanat': 'Jordi Crap', 'venedor': 'Aurelia Hart'},
  { '_id': 1, 'nom': 'Lorena Brown', 'codi postal': 08080, 'telefon': '665667634', 'registre': new Date('2018-02-01T08:00:00Z'),'venedor/a': 'Josep Array'},
  { '_id': 1, 'nom': 'Kent Gloss', 'codi postal': 08003, 'telefon': '634567634', 'registre': new Date('2016-03-01T08:00:00Z'), 'recomanat': 'Josep Rouras', 'venedor/a': 'Manel Fous'},
]);


