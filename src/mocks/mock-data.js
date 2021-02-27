// mock data with simplified version
// data based on this query: http://open-api.myhelsinki.fi/v1/places/?limit=12&start=0&language_filter=en
// total: 12 places

export const places12 = [
  {
    'id': '653',
    'name': {
      'fi': 'A. Tillander',
      'en': 'A. Tillander',
      'sv': 'A. Tillander',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'http://www.alexandertillander.fi',
    'modified_at': '2019-08-21T14:51:58.000Z',
    'location': {
      'lat': 60.168922424316406,
      'lon': 24.94364356994629,
      'address': {
        'street_address': 'Aleksanterinkatu 17',
        'postal_code': '00100',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'Jewellery shop, also exhibitions',
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/14657520_1627162420917017_2082522418259513419_n.jpg?h=1555b8b2&itok=cv8nhamq',
          'copyright_holder': 'A. Tillander',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko1:9',
        'name': 'SHOPPING'
      },
      {
        'id': 'matko2:72',
        'name': 'Jewellery'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': '10:00:00',
          'closes': '17:00:00',
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '3027',
    'name': {
      'fi': 'A.H. Records',
      'en': 'A.H. Records',
      'sv': 'A.H. Records',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'http://ahrecords.fi',
    'modified_at': '2019-06-26T09:56:22.000Z',
    'location': {
      'lat': 60.161014556884766,
      'lon': 24.94142723083496,
      'address': {
        'street_address': 'Fredrikinkatu 12',
        'postal_code': '00120',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'A small record store specialized in used vinyl',
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/12645064_458627557665379_3453464369390787997_n.jpg?h=dec22bcf&itok=_uZQok6l',
          'copyright_holder': 'A.H. Records',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko1:9',
        'name': 'SHOPPING'
      },
      {
        'id': 'matko2:104',
        'name': 'RecordStore'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': '12:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': '12:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': '12:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': '11:00:00',
          'closes': '15:00:00',
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '2257',
    'name': {
      'fi': 'Aallonkoti Apartment Hotel',
      'en': 'Aallonkoti Apartment Hotel',
      'sv': 'Aallonkoti Apartment Hotel',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'http://www.aallonkoti.fi',
    'modified_at': '2020-03-26T10:51:39.000Z',
    'location': {
      'lat': 60.176273345947266,
      'lon': 24.9382381439209,
      'address': {
        'street_address': 'Alvar Aallon katu 3 B',
        'postal_code': '00100',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'The unique apartment hotel Aallonkoti of 18 elegantly finished apartments has been built in a great location with gorgeous views in the center of Helsinki. The apartments as well as other facilities of Aallonkoti offer a perfect base for work and relaxation.\r\n\r\nThe apartment sizes vary from compact studios to two-bedroom penthouses. The apartments have high-quality furniture and they are equipped to fit the needs of a home. Each of the apartments has its own kitchen, a spacious furnished terrace with a gorgeous view over the park, wireless internet connection and quality household appliances.',
      'images': []
    },
    'tags': [
      {
        'id': 'matko1:1',
        'name': 'ACCOMMODATION'
      },
      {
        'id': 'matko1:2',
        'name': 'MEETING PLACES'
      },
      {
        'id': 'matko2:12',
        'name': 'Apartment'
      },
      {
        'id': 'matko2:a-:AliPay',
        'name': 'AliPay'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '3424',
    'name': {
      'fi': 'Aalto-yliopisto, Kauppakorkeakoulu',
      'en': 'Aalto University School of Business',
      'sv': 'Aalto-universitetet, Handelshögskolan',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://www.aalto.fi/fi/kauppakorkeakoulu',
    'modified_at': '2019-03-05T13:59:21.000Z',
    'location': {
      'lat': 60.185977935791016,
      'lon': 24.822364807128906,
      'address': {
        'street_address': 'Ekonominaukio 1',
        'postal_code': '02150',
        'locality': 'Espoo'
      }
    },
    'description': {
      'intro': null,
      'body': 'Aalto University School of Business is the leading business school in Finland and ranks among the best in Europe.',
      'images': []
    },
    'tags': [
      {
        'id': 'matko1:226',
        'name': 'WORK & STUDY'
      },
      {
        'id': 'matko2:282',
        'name': 'Academy'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '3281',
    'name': {
      'fi': 'Aalto-yliopisto, Taiteiden ja suunnittelun korkeakoulu',
      'en': 'Aalto University, School of Arts, Design and Architecture',
      'sv': 'Aalto-universitetet, Högskolan för konst, design och arkitektur',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://www.aalto.fi/fi/taiteiden-ja-suunnittelun-korkeakoulu',
    'modified_at': '2019-03-05T14:07:54.000Z',
    'location': {
      'lat': 60.18522262573242,
      'lon': 24.825517654418945,
      'address': {
        'street_address': 'Otaniementie 14',
        'postal_code': '02150',
        'locality': 'Espoo'
      }
    },
    'description': {
      'intro': null,
      'body': 'The Aalto School of Arts, Design and Architecture is a Nordic leader in higher education for design, fashion, games, media, architecture, film, art education and art.\r\n\r\nThe School of Arts, Design and Architecture is part of Aalto University, which is a multidisciplinary university operating in the fields of technology, business and commerce, and the arts.',
      'images': []
    },
    'tags': [
      {
        'id': 'matko1:226',
        'name': 'WORK & STUDY'
      },
      {
        'id': 'matko2:282',
        'name': 'Academy'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '1227',
    'name': {
      'fi': 'Aarikka',
      'en': 'Aarikka-shop',
      'sv': 'Aarikka-shop',
      'zh': '阿里卡商店'
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://www.aarikka.fi/',
    'modified_at': '2019-08-21T15:00:03.000Z',
    'location': {
      'lat': 60.167911529541016,
      'lon': 24.94797706604004,
      'address': {
        'street_address': 'Pohjoisesplanadi 27',
        'postal_code': '00100',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'Aarikka Oy is a family business founded in 1954. The company designs and manufactures design products, jewellery and decorative items mainly in wood. Each product is a unique item handmade in Finland using Finnish materials. \r\n',
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Candle_holders_.jpg?h=bb495836&itok=di4VAgFy',
          'copyright_holder': 'Aarikka',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        },
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Helmi_tableware_L.jpg?h=0446e769&itok=RY2HkM3d',
          'copyright_holder': 'Aarikka',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        },
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Pakkasen_poytakoristeet_table_decorations.jpg?h=fd049a31&itok=0vlA6xYU',
          'copyright_holder': 'Aarikka',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko2:42',
        'name': 'Finnish'
      },
      {
        'id': 'matko2:a-:Curated',
        'name': 'Curated'
      },
      {
        'id': 'matko2:67',
        'name': 'InteriorDesign'
      },
      {
        'id': 'matko2:a-:AliPay',
        'name': 'AliPay'
      },
      {
        'id': 'matko1:9',
        'name': 'SHOPPING'
      },
      {
        'id': 'matko2:23',
        'name': 'Design'
      },
      {
        'id': 'matko2:71',
        'name': 'Souvenirs'
      },
      {
        'id': 'matko2:72',
        'name': 'Jewellery'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': '10:00:00',
          'closes': '19:00:00',
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': '10:00:00',
          'closes': '19:00:00',
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': '10:00:00',
          'closes': '19:00:00',
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': '10:00:00',
          'closes': '19:00:00',
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': '10:00:00',
          'closes': '19:00:00',
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': '10:00:00',
          'closes': '17:00:00',
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': '12:00:00',
          'closes': '17:00:00',
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '4029',
    'name': {
      'fi': 'Aarrepuisto',
      'en': 'Aarrepuisto - Treasure Park',
      'sv': 'Klenodparken',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://vihreatsylit.fi/aarrepuisto/',
    'modified_at': '2021-02-09T09:54:52.000Z',
    'location': {
      'lat': 60.23859786987305,
      'lon': 25.10468292236328,
      'address': {
        'street_address': 'Aarteenetsijäntie',
        'postal_code': '00940',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'Aarrepuisto, Treasure Park, is located in Vesala, between the streets Aarteenetsijäntie and Aarteenetsijänkuja. It is bordered along both sides by apartment buildings that were built in the 1980s. \r\n\r\nThe outstanding feature of the park is the Mellunkylänpuro creek that flows through the canyon-like terrain. The pleasant sound of the water as it runs down the small rapids spreads throughout the park.\r\n\r\nAltogether the park boasts 113 different plant species and over 6000 individual plants including flower bulbs. The park is in flower from spring to autumn for visitors to enjoy.',
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-11/myhelsinki_aarteenetsijanpuisto_0406_20200915.jpg?h=c3635fa2&itok=Rx8aVHKv',
          'copyright_holder': 'Helsinki Marketing / Sasa Tkalcan',
          'license_type': {
            'id': 2,
            'name': 'MyHelsinki license type A'
          }
        },
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-11/myhelsinki_aarteenetsijanpuisto_0440_20200915.jpg?h=515b7b60&itok=NCRTgqJ8',
          'copyright_holder': 'Helsinki Marketing / Sasa Tkalcan',
          'license_type': {
            'id': 2,
            'name': 'MyHelsinki license type A'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko1:4',
        'name': 'SIGHTS & ATTRACTIONS'
      },
      {
        'id': 'matko2:20',
        'name': 'Park'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '3048',
    'name': {
      'fi': 'Addis Ethiopian Kitchen',
      'en': 'Addis Ethiopian Kitchen',
      'sv': 'Addis Ethiopian Kitchen',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://www.addiskitchen.fi/',
    'modified_at': '2020-08-20T10:18:05.000Z',
    'location': {
      'lat': 60.1943244934082,
      'lon': 24.95623016357422,
      'address': {
        'street_address': 'Sturenkatu 28',
        'postal_code': '00510',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'Restaurant Addis serves Ethiopian flavours in Vallila, both meat and vegan dishes available.',
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/18582201_1304054686382343_5281764182844447292_n.jpg?h=af5d0fd7&itok=8uXrL4iG',
          'copyright_holder': 'Addis Ethiopian Kitchen',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko1:10',
        'name': 'RESTAURANTS & CAFES'
      },
      {
        'id': 'matko2:117',
        'name': 'Vegetarian'
      },
      {
        'id': 'matko2:229',
        'name': 'Restaurant'
      },
      {
        'id': 'matko2:234',
        'name': 'Vegan'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': '11:00:00',
          'closes': '20:30:00',
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': '11:00:00',
          'closes': '20:30:00',
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': '11:00:00',
          'closes': '20:30:00',
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': '11:00:00',
          'closes': '20:30:00',
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': '11:00:00',
          'closes': '20:30:00',
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': '12:00:00',
          'closes': '20:30:00',
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': '12:00:00',
          'closes': '20:30:00',
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '4030',
    'name': {
      'fi': 'Adlerfelt',
      'en': 'Adlerfelt',
      'sv': null,
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://adlerfelt.fi/',
    'modified_at': '2020-12-07T11:22:42.000Z',
    'location': {
      'lat': 60.144596099853516,
      'lon': 24.98642921447754,
      'address': {
        'street_address': 'Suomenlinna B 1',
        'postal_code': '00190',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': `Wonderfully cheerful and sweet Adlerfelt is housed in a magnificent 250-year-old building in the world's most beautiful World Heritage Site, Suomenlinna. \r\n\r\nAdlerfelt can be visited to enjoy a refreshing beverage or a full dinner. Or anything in between. For Adlerfelt, the most important thing is to provide that sweet moment when everything feels just right. Put that pure smile on your face. Through such feelings you will always remember those beautiful moments and places you happily return again and again. Adlerfelt is that happy place for you and everybody. The place where everybody is warmly welcome, regardless of age, gender or origin.\r\n\r\nAdlerfelt's food ideology guiding principle is responsible selection of ingredients. The culinary scene of the world is the stomping ground resulting in an inspiring selection of delicacies suitable for the ever-changing seasons and moments. Every day a captivating menu is shared exclusively at the property to guarantee fresh ingredients, enable a diverse daily menu and minimize food waste. Most likely every time you visit, there will be something new to taste. \r\n\r\nWhether you desire to eat a wonderful long dinner, share several dishes with friends or just grab a quick lunch you are invited to enjoy the Adlerfelt. There will always be half and a full serving of all the dishes, as well as a few nice side dishes. And hey, of course the desserts!`,
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-06/adlerfelt_traverssi_adlerfelt_c_adlerfelt_tanja_aromaki_location_only.jpg?h=e2e45255&itok=YSrj11kO',
          'copyright_holder': 'Adlerfelt / Tanja Aromäki',
          'license_type': {
            'id': 2,
            'name': 'MyHelsinki license type A'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko1:10',
        'name': 'RESTAURANTS & CAFES'
      },
      {
        'id': 'matko2:191',
        'name': 'IslandRestaurant'
      },
      {
        'id': 'matko2:229',
        'name': 'Restaurant'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': '10:30:00',
          'closes': '16:00:00',
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': '10:30:00',
          'closes': '16:00:00',
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': '10:30:00',
          'closes': '16:00:00',
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': '10:30:00',
          'closes': '16:00:00',
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': '10:30:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': '12:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': '12:00:00',
          'closes': '18:00:00',
          'open24h': false
        }
      ],
      'openinghours_exception': 'Closed 23.-25.12.2020.\r\nDuring 26.12.2020 - 6.1.2021 open daily at 12-18.'
    }
  },
  {
    'id': '1098',
    'name': {
      'fi': 'AEL Hotelli',
      'en': 'AEL Hotel',
      'sv': 'AEL Hotelli',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://www.taitotalo.fi/ael-hotelli',
    'modified_at': '2020-03-26T12:01:50.000Z',
    'location': {
      'lat': 60.249324798583984,
      'lon': 24.854223251342773,
      'address': {
        'street_address': 'Jälsitie 5',
        'postal_code': '00410',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'Accomodation in a quiet environment, AEL Hotelli is situated close to Taitotalo in Malminkartano, approx. 10 km from the Helsinki city centre. Single and double rooms as well as shared apartments. AEL Hotellis rooms are allergy friendly. \r\n',
      'images': []
    },
    'tags': [
      {
        'id': 'matko1:1',
        'name': 'ACCOMMODATION'
      },
      {
        'id': 'matko2:241',
        'name': 'Hotel'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '1096',
    'name': {
      'fi': 'Agroksenmäen holvikellari',
      'en': 'Agros Vault',
      'sv': 'Agrosbackens Källarvalv',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'http://intercom.fi/juhlatila/',
    'modified_at': '2020-04-20T06:35:01.000Z',
    'location': {
      'lat': 60.19257354736328,
      'lon': 24.97538948059082,
      'address': {
        'street_address': 'Vanha talvitie 14',
        'postal_code': '00580',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'The Agros Vault (Agroksenmäen holvikellari) has a history that dates back around 150 years. This old brewery building has been renovated respecting its history and the original handicraft. A banquet hall with beautiful natural granite stone walls offers unforgettable surroundings for your event. The Agros Vault has proved to be an excellent location for seminars, dinners, theme parties and exhibitions. Also perfect for private events, such as weddings and anniversaries. There is unrestricted catering in the premises. Also furniture and decoration rental services available.',
      'images': null
    },
    'tags': [
      {
        'id': 'matko1:2',
        'name': 'MEETING PLACES'
      },
      {
        'id': 'matko1:3',
        'name': 'BANQUET VENUES'
      },
      {
        'id': 'matko2:15',
        'name': 'Banquet'
      },
      {
        'id': 'matko2:111',
        'name': 'FreeCatering'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': ''
    }
  },
  {
    'id': '883',
    'name': {
      'fi': 'Ahola',
      'en': 'Ahola',
      'sv': 'Ahola',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'https://www.jarvenpaantaidemuseo.fi/ahola',
    'modified_at': '2021-02-03T08:09:28.000Z',
    'location': {
      'lat': 60.45602798461914,
      'lon': 25.08115005493164,
      'address': {
        'street_address': 'Sibeliuksenväylä 57',
        'postal_code': '04400',
        'locality': 'Järvenpää'
      }
    },
    'description': {
      'intro': null,
      'body': `Located by Lake Tuusulanjärvi, Ahola was the idyllic villa residence for the nationally renowned author Juhani Aho and his wife, painter Venny Soldan-Brofeldt. The unique Tuusulanjärvi artists' community had its heart at the Ahos', in Venny Soldan-Brofeldt's atelier. Ahola, opened to the public in 1997, is not a home museum; instead of personal belongings, the residents' artistic production is exhibited. Displayed items include books, scripts, and translated works.`,
      'images': []
    },
    'tags': [
      {
        'id': 'matko1:6',
        'name': 'MUSEUMS & GALLERIES'
      },
      {
        'id': 'matko2:40',
        'name': 'Museum'
      },
      {
        'id': 'matko2:41',
        'name': 'Speciality'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': null,
          'closes': null,
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': 'Open in May-September Tue-Sun 11-17'
    }
  }
]

export const places1 = [
  {
    'id': '653',
    'name': {
      'fi': 'A. Tillander',
      'en': 'A. Tillander',
      'sv': 'A. Tillander',
      'zh': null
    },
    'source_type': {
      'id': 2,
      'name': 'Matko'
    },
    'info_url': 'http://www.alexandertillander.fi',
    'modified_at': '2019-08-21T14:51:58.000Z',
    'location': {
      'lat': 60.168922424316406,
      'lon': 24.94364356994629,
      'address': {
        'street_address': 'Aleksanterinkatu 17',
        'postal_code': '00100',
        'locality': 'Helsinki'
      }
    },
    'description': {
      'intro': null,
      'body': 'Jewellery shop, also exhibitions',
      'images': [
        {
          'url': 'https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/14657520_1627162420917017_2082522418259513419_n.jpg?h=1555b8b2&itok=cv8nhamq',
          'copyright_holder': 'A. Tillander',
          'license_type': {
            'id': 1,
            'name': 'All rights reserved.'
          }
        }
      ]
    },
    'tags': [
      {
        'id': 'matko1:9',
        'name': 'SHOPPING'
      },
      {
        'id': 'matko2:72',
        'name': 'Jewellery'
      }
    ],
    'opening_hours': {
      'hours': [
        {
          'weekday_id': 1,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 2,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 3,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 4,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 5,
          'opens': '10:00:00',
          'closes': '18:00:00',
          'open24h': false
        },
        {
          'weekday_id': 6,
          'opens': '10:00:00',
          'closes': '17:00:00',
          'open24h': false
        },
        {
          'weekday_id': 7,
          'opens': null,
          'closes': null,
          'open24h': false
        }
      ],
      'openinghours_exception': 'as'
    }
  }
]