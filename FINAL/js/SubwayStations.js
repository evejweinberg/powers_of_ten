function loadSubway(map){
// map.on('load', function() {
  console.log('loading subway')
            map.addSource("points", {
                "type": "geojson",
                "data": {



                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties": {
                            "name": "W 4th St - Washington Sq (Lower)",
                            "line": "B-D-F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00030814706824, 40.73225482650675]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Buhre Ave",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83256899924748, 40.846810332614844]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "51st St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97192000013308, 40.757107333148234]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "86th St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97621799811347, 40.78864433404891]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Brooklyn Bridge - City Hall",
                            "line": "4-5-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00413100111697, 40.713065332984044]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "33rd St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98207600124924, 40.7460813321576]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lexington Ave - 59th St",
                            "line": "4-5-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96796700066442, 40.76252633389173]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "233rd St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85736239433544, 40.89314357506239]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "66th St - Lincoln Ctr",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98220900041213, 40.773440334231445]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Hunts Point Ave",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89054899975386, 40.82094833186627]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canal St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00627700023756, 40.722854331339036]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Middletown Rd",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83632199732654, 40.843863334673635]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "23rd St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98659900183978, 40.7398643335507]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "45th Rd - Court House Sq",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94526400065335, 40.747023331863446]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Astor Pl",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99106999895504, 40.73005433376933]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "59th St - Columbus Circle",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98192900168259, 40.76824733393756]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Hunters Point Ave",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9489160011607, 40.74221633326165]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "96th St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95107000070685, 40.785672333485294]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Mets - Willets Point",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.84562499786716, 40.75462233245772]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "23rd St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99565700196479, 40.74408133288406]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Houston St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00536700184291, 40.72825133360782]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "3rd Ave - 138th St",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92613800022275, 40.81047633454132]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Zerega Ave",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.84703599804547, 40.83648833366287]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "104th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8376829999374, 40.681711334202696]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bleecker St (Downtown)",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99467467829572, 40.72593123822929]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Castle Hill Ave",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85122199920897, 40.83425533183211]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broad Channel",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.81583268677743, 40.608402513981986]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ocean Pkwy",
                            "line": "Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9685010000048, 40.5763120005781]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "50th St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98384899991842, 40.76172833308103]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Vernon Blvd - Jackson Ave",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95358099882006, 40.74262633257131]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "68th St - Hunter College",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96387000148661, 40.768141333903976]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Queensboro Plz",
                            "line": "7-7 Express-N-W",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94016353439743, 40.75063598438094]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Rockaway Blvd",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8438529971175, 40.68042933335036]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Union Sq - 14th St",
                            "line": "4-5-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98995099886989, 40.734673334561]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Junction Blvd",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8695269997965, 40.74914533273112]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Classon Ave",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95999000126959, 40.68888933367643]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bedford - Nostrand Aves",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95352199987617, 40.68962733491343]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "15th St - Prospect Park",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.979735806077, 40.660036021685464]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "7th Ave",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9802511788693, 40.666245023690635]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ft Hamilton Pkwy",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97577599885992, 40.65078200098824]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Church Ave",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97972116167199, 40.64427233346608]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beverly Rd",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9643577954928, 40.64390493165595]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Church Ave",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96288246144869, 40.6504935798757]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Newkirk Ave",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96269486847974, 40.63514227039474]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Parkside Ave",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96145344000783, 40.65507337471708]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Prospect Park",
                            "line": "B-Q-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96203130451713, 40.66163378817137]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand Army Plaza",
                            "line": "2-3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97095633144298, 40.67529502884244]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bergen St",
                            "line": "2-3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97499915098913, 40.68086247045291]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Atlantic Ave",
                            "line": "2-3-4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97754993550333, 40.68442049853399]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Rockaway Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91194599727318, 40.67834033324111]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fulton St",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97537499873913, 40.687119332657794]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Clinton - Washington Aves",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96679599830863, 40.688094334588634]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "7th Ave",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97285279146314, 40.677102512887046]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Atlantic Ave",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97678343931106, 40.68448865643635]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Union St",
                            "line": "D-N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98310999931782, 40.67731600045995]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Atlantic Av - Pacific St",
                            "line": "D-N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9788099993486, 40.68366600047985]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Borough Hall",
                            "line": "4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99015100058315, 40.69240433310098]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Aqueduct Racetrack (To Manh Only)",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83591899879411, 40.672097332305505]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "DeKalb Ave",
                            "line": "B-D-N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98182400036215, 40.69063500033928]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Morris Park",
                            "line": "5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86049499998204, 40.85436433270016]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Pelham Pkwy",
                            "line": "5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85535900005993, 40.8589853329393]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Nostrand Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95042600048545, 40.68043833310734]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Nevins St",
                            "line": "2-3-4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98040679867199, 40.68831091310594]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Eastern Pkwy - Bklyn Museum",
                            "line": "2-3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96422203701749, 40.672032568925616]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Franklin Ave",
                            "line": "2-3-4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95809973659013, 40.67076548645792]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beverly Rd",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94884798335576, 40.64512385265653]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Church Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94945514032199, 40.65086102070915]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Newkirk Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9482999075323, 40.63999157603046]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Brooklyn College - Flatbush Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94754120719483, 40.63284274046751]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Winthrop St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9500793454169, 40.65665964750449]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sterling St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95072891150406, 40.66277332699014]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Crown Hts - Utica Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93293256066349, 40.66897864436661]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kingston Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94215978326203, 40.66948178160432]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kingston - Throop Aves",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94085899839129, 40.67991933291405]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Nassau Ave",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95118299979704, 40.72448033118355]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Greenpoint Ave",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95442500175076, 40.73126733272315]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Marcy Ave",
                            "line": "J-M-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95783199999856, 40.7083833336101]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Hewes St",
                            "line": "J-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95348800040841, 40.706890331217984]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Essex St",
                            "line": "J-M-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98740940233358, 40.718306389085505]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "138th St - Grand Concourse",
                            "line": "4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9298489994812, 40.81322433279863]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "5th Ave - 53rd St",
                            "line": "E-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9752485046603, 40.76008716596106]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lexington Ave - 53rd St",
                            "line": "E-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96907237417739, 40.75746864157252]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "28th St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98869800066268, 40.74545433330924]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Herald Sq - 34th St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98793683324304, 40.749644893078916]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "1st Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98168087509058, 40.730975308760705]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand Central - 42nd St",
                            "line": "S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97918900000734, 40.75276900017257]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Times Sq - 42nd St",
                            "line": "S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9862289999369, 40.755983333482924]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "42nd St - Bryant Pk",
                            "line": "B-D-F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.984590998399, 40.75418433462967]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Times Sq - 42nd St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.986768002027, 40.754612332230856]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Metropolitan Ave",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95142399956148, 40.71277433427003]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand St",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94049699898235, 40.711576333817]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Graham Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9439439978816, 40.71457633149971]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lorimer St",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95024800019331, 40.7140723341722]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bedford Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95666499837023, 40.71717433231373]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95031225595987, 40.70612690984066]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lorimer St",
                            "line": "J-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94735499813589, 40.70384433379361]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Montrose Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93979284651334, 40.70739139725247]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "23rd St - Ely Av",
                            "line": "E-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94605470270504, 40.74776845479483]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Long Island City - Court Sq",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94381559557159, 40.74630536706204]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "21st St",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94959999937976, 40.74412900001313]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "39th Ave",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9328513760691, 40.752763394559445]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "36th Ave",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92986199833236, 40.75644233343755]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "145th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95035999809508, 40.82655133277471]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "157th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94488999874277, 40.83404133354386]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "96th St",
                            "line": "1-2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97232299948297, 40.79391933441861]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "103rd St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96837899924829, 40.79944633394733]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Central Park North (110th St)",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95182200107378, 40.79907533284112]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "103rd St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96137008216188, 40.79606107356255]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cathedral Pkwy (110th St)",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95806670664349, 40.80058189158562]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "72nd St",
                            "line": "1-2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98197000104193, 40.77845333395168]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "72nd St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97633657548654, 40.77551973103465]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "81st St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97209794941429, 40.78134641772443]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "75th Ave",
                            "line": "E-F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83692369317724, 40.71804498706881]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kew Gardens - Union Tpke",
                            "line": "E-F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83037027017505, 40.714035152937456]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "86th St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96882849456208, 40.785823379651546]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "96th St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96460245655115, 40.79161913124813]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cathedral Pkwy (110th St)",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96684700014322, 40.803967333016914]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "116th St - Columbia University",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96410999793578, 40.807722334261875]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "125th St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94549500019218, 40.807754332840474]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "135th St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94077000029493, 40.81422933347776]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "149th St - Grand Concourse",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92738475430822, 40.81830377684673]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "116th St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94962500105149, 40.80209833254597]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Tremont Ave",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90522700088017, 40.85041033318809]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "182nd-183rd Sts",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90074099926748, 40.8560933318779]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "137th St - City College",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95367600034153, 40.82200833264513]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "145th St",
                            "line": "3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93624499890744, 40.82042133297881]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "176th St",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91179399805148, 40.84848033423412]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Burnside Ave",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90768400066499, 40.853453334428735]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "170th St",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91339999796051, 40.83930633332876]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "174th-175th Sts",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91013600003978, 40.84590033357212]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "168th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94013299889706, 40.84055633285503]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "181st St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93359599981648, 40.849505333296115]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "168th St",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93956099987895, 40.84071933346529]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "191st St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9294119976112, 40.855225335009216]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "175th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93970399673837, 40.84739133395404]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 44th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.77601299886851, 40.59294333262581]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 60th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.78852199717782, 40.59237433461577]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 105th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.82758074931665, 40.583268770978755]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 98th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.82052058872064, 40.58538602425417]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Rockaway Park - Beach 116 St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83559008596322, 40.58095619916644]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 90th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.81365140294552, 40.58809189768098]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 36th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.76817499792809, 40.59539833456184]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 25th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.76135299673638, 40.60006633421964]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Parsons Blvd",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8032889987805, 40.70757233327444]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "169th St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.79347419781826, 40.71051783638578]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "103rd St - Corona Plaza",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8626999970616, 40.7498653343015]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "111th St",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85533399729226, 40.751730332999585]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "63rd Dr - Rego Park",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86161820029058, 40.72976430547176]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grant Ave",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86504999808713, 40.67704433385241]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "79th St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97991700040643, 40.78393433274081]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Atlantic Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90309699915753, 40.675344999443105]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Christopher St - Sheridan Sq",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.002905998897, 40.73342233397504]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "E 149th St",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90409799796717, 40.812118331738084]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ozone Park - Lefferts Blvd",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8257979983959, 40.68595133199964]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Times Sq - 42nd St",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98769099766001, 40.75547733499068]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "77th St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9598739980726, 40.77362033401498]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Woodside - 61st St",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90298400085238, 40.74563033401391]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "111th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83216299793189, 40.68433133342542]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Flushing - Main St",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83003000183344, 40.75960033237315]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "W 8th St - NY Aquarium",
                            "line": "F-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97595787404076, 40.57603415120005]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "28th St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99336500139277, 40.74721533235655]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "28th St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98426400149621, 40.74307033282793]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Pelham Bay Park",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.82812099995719, 40.852462333145894]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Westchester Sq - E Tremont Ave",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.84295199835405, 40.839892334397746]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "18th St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99787100112236, 40.741040332966726]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand Central - 42nd St",
                            "line": "4-5-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97671329936165, 40.75180776311499]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand Central - 42nd St",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9760410011979, 40.75143133351694]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canal St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00019299900356, 40.718803334727426]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Beach 67th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.79692399899525, 40.590927334290434]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "W 4th St - Washington Sq (Upper)",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00049500225549, 40.73233833138155]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "67th Ave",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85286048368066, 40.72650580934677]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "85th St - Forest Pky",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86008699933834, 40.692427333043625]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Woodhaven Blvd",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85205199698804, 40.69370433254967]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "111th St",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83679338317, 40.69711514442172]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "121st St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.82834899922645, 40.70048233167487]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sutphin Blvd - Archer Av",
                            "line": "E-J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.80800471916443, 40.70038275752361]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Halsey St",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90393400047114, 40.69551833448191]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Myrtle Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91097571780219, 40.69947139533809]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "New Lots Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8841107078647, 40.666315265574426]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Van Siclen Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88940491629894, 40.66551829666946]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Pennsylvania Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89488591124234, 40.66471478435396]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Van Siclen Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89035799977019, 40.67271033212401]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Van Siclen Ave",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89165772599068, 40.67802854813373]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cleveland St",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8851940012429, 40.679778332299975]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Livonia Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90056237156317, 40.664057604182275]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sutter Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90191599959435, 40.66914533375269]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Junius St",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90244864097313, 40.66358933490929]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Rockaway Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9089583356391, 40.66261782103152]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canarsie - Rockaway Pkwy",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.901849999934, 40.64665400044553]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "E 105th St",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89954769314163, 40.650469118412055]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Saratoga Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91633024966043, 40.66153012321424]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sutter Ave - Rutland Road",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92252118506703, 40.664767122207614]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "New Lots Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89927796012282, 40.65891510689037]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Far Rockaway - Mott Ave",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.7554049978951, 40.60399533472034]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Chauncey St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91038356930946, 40.682851634494526]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway Junction",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9042899974254, 40.679366334574624]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Halsey St",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91663888395097, 40.68641560444364]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Alabama Ave",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89852600099044, 40.67699833360107]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Shepherd Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88074999710298, 40.67413033485932]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Norwood Ave",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87962599833826, 40.68152033389478]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Crescent St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87392925190409, 40.68315299047885]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cypress Hills",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87332199828757, 40.689616334196266]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "75th St - Eldert Ln",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8672879987574, 40.69129033462167]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "69th St",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89640299838608, 40.746325332824334]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "74th St - Broadway",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8912051283828, 40.746867907409886]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "65th St",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89878837766967, 40.74971986271151]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Woodhaven Blvd - Queens Mall",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86943208499206, 40.73309770715039]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wyckoff Ave",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91217899875637, 40.699454334648586]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Seneca Ave",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9075819984298, 40.70291933262727]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "DeKalb Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91823200153044, 40.70369333256863]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "52nd St",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91254899814022, 40.7441493343501]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "46th St",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91352175005927, 40.75631728599804]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Northern Blvd",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90606508028196, 40.75282516296223]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "46th St",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91843500055474, 40.74313233412849]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "82nd St - Jackson Hts",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88369699986349, 40.74765933320238]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "90th St - Elmhurst Av",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87661299894202, 40.748408334002924]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand Ave - Newtown",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87722085593703, 40.73681375120887]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Elmhurst Ave",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88203474588971, 40.74237041300368]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Howard Beach - JFK Airport",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83030099930434, 40.660476333123206]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Aqueduct - North Conduit Av",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83405799882622, 40.66823433458028]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "104th-102nd Sts",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.84443499900195, 40.695166331888885]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Briarwood - Van Wyck Blvd",
                            "line": "E-F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.82069263553905, 40.709162148863335]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Forest Hills - 71st Av",
                            "line": "E-F-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.84451671920691, 40.72159464293687]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sutphin Blvd",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.81083299827169, 40.70541833253]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jamaica - Van Wyck",
                            "line": "E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.81701287026034, 40.70289888659826]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jamaica Ctr - Parsons / Archer",
                            "line": "E-J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.80109632198113, 40.70206770924661]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Simpson St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89306639471833, 40.82397717486102]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Freeman St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89175225285328, 40.8299877799453]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "225th St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86021461686795, 40.88802859157574]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Elder Ave",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87915899781727, 40.82858433457284]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Morrison Av - Soundview",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87451599884423, 40.829521335098256]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Longwood Ave",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89643499864899, 40.81610433364345]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Astoria Blvd",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91809500082121, 40.770037332517354]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Astoria - Ditmars Blvd",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91203400018503, 40.7750359996785]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jackson Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90770193853471, 40.816437799808796]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Prospect Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9017777862438, 40.81948759780675]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cypress Ave",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91404199941688, 40.80536833435186]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Whitlock Ave",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88628299832433, 40.82652533380191]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Intervale Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8966173835841, 40.82214246442492]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "174th St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88769359751684, 40.837195883313186]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Pelham Pkwy",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86748067761889, 40.85719274250162]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Allerton Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86723422776349, 40.86548371157605]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "E 143rd St - St Mary's St",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90765699883949, 40.808719334136455]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kingsbridge Rd",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89717400101911, 40.867760333744734]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bedford Park Blvd - Lehman College",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89006400056154, 40.8734123326929]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Harlem - 148 St",
                            "line": "3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93646999991873, 40.82388033407589]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Mt Eden Ave",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91468499864928, 40.844434333833284]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fordham Rd",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89774900076851, 40.86129633182038]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "170th St",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91779099709355, 40.84007533283499]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kingsbridge Rd",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89350900003097, 40.86697833331913]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bedford Park Blvd",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88713799869915, 40.87324433171974]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Marble Hill - 225th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90983099891776, 40.87456133275337]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "231st St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90483400042638, 40.87885633187432]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "215th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91527899930841, 40.869444332904905]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "207th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91881900072042, 40.864614333714016]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Inwood - 207th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91989900076265, 40.8680723332653]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "238th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90086999936261, 40.884667334326366]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Van Cortlandt Park - 242nd St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89858299979814, 40.88924833345021]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "West Farms Sq - E Tremont Av",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87996127809559, 40.84020796544077]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "St Lawrence Ave",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86761799826303, 40.83150933406975]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bronx Park East",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86835609123708, 40.848768999811156]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Gun Hill Rd",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86613410422373, 40.87783971871569]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "219th St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8625097074803, 40.88388830753444]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Mosholu Pkwy",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88465499988884, 40.87975033296914]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Norwood - 205th St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87885499849918, 40.874811333682345]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Burke Ave",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86705361677089, 40.87125913561442]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Baychester Ave",
                            "line": "5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83859099777192, 40.87866333374528]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Eastchester - Dyre Ave",
                            "line": "5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.83083400082742, 40.88830033249039]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jamaica - 179th St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.78381700044153, 40.712645999940975]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wakefield - 241st St",
                            "line": "2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85061999835273, 40.90312533408352]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Botanic Garden",
                            "line": "S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95924499975295, 40.670342999976114]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bushwick - Aberdeen",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90526176227334, 40.682860958491204]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wilson Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90395860493146, 40.68886687533081]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway Junction",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90311757843438, 40.67845658203403]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Gun Hill Rd",
                            "line": "5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.84638400102972, 40.86952633288799]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "E 180th St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87334609435007, 40.84186337449904]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Dyckman St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92553599977501, 40.86053133457367]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "125th St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95837200092977, 40.8155813329265]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Park Pl",
                            "line": "S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95762400033107, 40.674771999887255]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Franklin Ave - Fulton St",
                            "line": "S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95582700108798, 40.68059599942808]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Nereid Ave (238 St)",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85431530997917, 40.898286849118136]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "149th St - Grand Concourse",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9267224745775, 40.81833047711118]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "3rd Ave - 149th St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91779152703793, 40.816029585709344]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "161st St - Yankee Stadium",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92569199495203, 40.82823066063588]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "167th St",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92139999756648, 40.83553733302143]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Brook Ave",
                            "line": "6",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9192399981735, 40.80756633325041]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "33rd St",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93099699873846, 40.744587333592726]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "40th St",
                            "line": "7",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9240159980613, 40.743781334697424]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "145th St",
                            "line": "A-B-C-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94408792835779, 40.82476669406457]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "155th St",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93820899809954, 40.83013533321578]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "161st St - Yankee Stadium",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92565099751474, 40.82790533241327]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "167th St",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91843200077082, 40.83376933205918]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ralph Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92078599919046, 40.678822334523645]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Utica Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93072899845322, 40.67936433301651]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "36th St",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92901818470385, 40.751960377482355]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Steinway St",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92052647104094, 40.756987692724486]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kosciuszko St",
                            "line": "J",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92850899856917, 40.69317233423697]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Gates Ave",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92215600058701, 40.68958433256818]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Central Ave",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9272429982954, 40.69787333339047]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Knickerbocker Ave",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.91972000097114, 40.698660334772896]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92582299856429, 40.761432332024945]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "30th Ave",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92147900005995, 40.76677899973269]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jefferson St",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92291299953057, 40.706606999359956]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Morgan Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93314699998834, 40.70615200009972]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Queens Plz",
                            "line": "E-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.937138239261, 40.748918053128584]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "18th Ave",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97697099987755, 40.62975500011662]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ditmas Ave",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9781719999271, 40.63611899980037]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "77th St",
                            "line": "R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.02550999958477, 40.62974200015178]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bay Ridge Ave",
                            "line": "R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0233769992409, 40.63496700028034]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "55th St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99534882553118, 40.631479094385625]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "50th St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99465878009656, 40.636261224383965]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ft Hamilton Pkwy",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00535100072418, 40.631386000144154]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "8th Ave",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01151599735913, 40.63497133283626]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "25th Ave",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9868290001644, 40.59770400016762]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bay Pky",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99367619974002, 40.601950795212716]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "20th Ave",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98452199841243, 40.61710933301559]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "18th Ave",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99045399859853, 40.620687331248675]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bay Ridge - 95th St",
                            "line": "R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0308760006303, 40.6166220006113]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "86th St",
                            "line": "R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0283980002836, 40.62268700032295]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "79th St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.000582873947, 40.613159259344464]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "71st St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9988409490545, 40.61925904300817]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "20th Ave",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99817432102677, 40.604677331055306]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "18th Ave",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00159259254073, 40.607736065209444]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "62nd St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99685725051668, 40.626224796104694]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "New Utrecht Ave",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99635300046697, 40.624842000193794]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave U",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97337641904097, 40.595925159151875]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kings Hwy",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97235530833731, 40.60325873883345]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Brighton Beach",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96135378572068, 40.57771052976751]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sheepshead Bay",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95405791182218, 40.58654788005143]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave U",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9558112232107, 40.5993092845579]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kings Hwy",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95760873539083, 40.608638978424565]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave U",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97908400087046, 40.59723633364408]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Kings Hwy",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98037300212555, 40.60405933336751]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Neptune Ave",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97459272802236, 40.58073909152164]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave X",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97426599930228, 40.589449999847005]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bay 50th St",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98376500025735, 40.588840999864985]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Gravesend - 86th St",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97818899976669, 40.592465333902624]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave P",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97300281528905, 40.60884314257858]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave N",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97404850907516, 40.61435704529457]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bay Pky",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97525697755246, 40.62073195620631]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave M",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95924310477643, 40.61739807818342]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bay Pky",
                            "line": "N",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98178001024034, 40.61145612298434]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave I",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97606933193563, 40.625017773484714]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave J",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96069316246778, 40.625023152905705]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ave H",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96151793874012, 40.62920871052413]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Neck Rd",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95507827446252, 40.59532202457638]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "21st St - Queensbridge",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94193761381545, 40.75373960398463]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "50th St",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98598399999051, 40.762456332634045]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "7th Ave",
                            "line": "B-D-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98169782381285, 40.76297048549053]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "47th-50th Sts - Rockefeller Ctr",
                            "line": "B-D-F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9813310021191, 40.75864133466554]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "57th St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97736800130777, 40.76408533390238]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lexington Ave - 63rd St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96608964340214, 40.764618428150776]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Roosevelt Island - Main St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95323500002728, 40.75917233330991]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "59th St - Columbus Circle",
                            "line": "A-B-C-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98164872336676, 40.768249864983254]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "49th St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98420956580891, 40.75980230703365]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "57th St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98072973313602, 40.76456585850871]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "5th Ave - 59th St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9733470001843, 40.76481133275182]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lexington Ave - 59th St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9673750166445, 40.762709188743855]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "34th St - Penn Station",
                            "line": "1-2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99105699933416, 40.75037333357704]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Times Sq - 42nd St",
                            "line": "1-2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98749500043364, 40.75529033316711]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway - Nassau St",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00762309342792, 40.71016249872167]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Chambers St",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0085847360681, 40.714111334148996]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "42nd St - Port Authority Bus Term",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98973500043815, 40.75730833180808]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Myrtle-Willoughby Aves",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94906699828155, 40.69461933256742]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Flushing Ave",
                            "line": "G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9502340005062, 40.70037699951844]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "23rd St",
                            "line": "F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99276500454658, 40.74295465088764]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Herald Sq - 34th St",
                            "line": "B-D-F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98777189015544, 40.74978973294837]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Hoyt - Schermerhorn Sts",
                            "line": "A-C-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9850362399565, 40.68840880947581]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jay St - Borough Hall",
                            "line": "A-C-F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98721815311183, 40.69247097044472]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "East Broadway",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99017700117365, 40.71385533408638]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Delancey St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98807806837901, 40.718681075658196]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lower East Side - 2nd Ave",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98993799949149, 40.7234019995008]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Flushing Ave",
                            "line": "J-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94137734825632, 40.70040473673457]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Myrtle Ave",
                            "line": "J-M-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93562300040674, 40.69719533361235]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "4th Ave",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98977899967635, 40.67027200058139]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Smith - 9th Sts",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99589172757463, 40.673641394609135]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bergen St",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99075649550757, 40.68611088098272]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lawrence St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98605667829878, 40.69225572936931]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Court St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99181830913483, 40.694196814120716]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Union Sq - 14th St",
                            "line": "N-Q-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9905388616843, 40.73587260060109]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "23rd St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98934400045437, 40.74130300016866]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Prospect Ave",
                            "line": "D-N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99287200058961, 40.665414000093335]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "9th St",
                            "line": "D-N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.988301999704, 40.67084700022307]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "3rd Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98575000098694, 40.73269133261918]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Union Sq - 14th St",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99066976943084, 40.73476364552659]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Liberty Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89654800075247, 40.67454233286892]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway Junction",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90531600029104, 40.67833399982758]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "59th St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01788099968473, 40.64136199944241]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "45th St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01000600035954, 40.648938999878794]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "36th St",
                            "line": "D-N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00354899956925, 40.655143999751665]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "9th Ave",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99444874408546, 40.64648441084645]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "53rd St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01403400049048, 40.645069000509004]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Ft Hamilton Pkwy",
                            "line": "D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99420223752828, 40.64091304459246]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "25th St",
                            "line": "D-N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99809099983285, 40.66039700032125]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Carroll St",
                            "line": "F-G",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99494697982026, 40.68027368469693]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Spring St",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00373899872902, 40.7262273349522]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "181st St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93796900163554, 40.85169533266245]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "190th St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93417999937553, 40.859022332220405]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "116th St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95479778092779, 40.805058467107635]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "125th St",
                            "line": "A-B-C-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95224799754361, 40.81107200632826]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Prince St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99770200007194, 40.72432899922576]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "8th St - NYU",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9925079989093, 40.730465331990395]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fulton St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00657100024912, 40.70941633229353]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Park Pl",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00881099987163, 40.713051332200514]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Chambers St",
                            "line": "1-2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00926600172447, 40.71547833317367]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Hoyt St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98506379611653, 40.69054451845209]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Borough Hall",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98999799906535, 40.69321933265995]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "183rd St",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9038790007054, 40.85840733349188]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fordham Rd",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90103399833198, 40.86280333320703]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "World Trade Center",
                            "line": "E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00974461478488, 40.71256426010712]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canal St - Holland Tunnel",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00522900191194, 40.72082433307871]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "155th St",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94151400028585, 40.83051833300836]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "163rd St - Amsterdam Av",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93989200159317, 40.836013332605724]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fulton St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0079380008774, 40.71002299961088]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Chambers St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00340673089009, 40.7132341227328]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canal St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99982638555147, 40.71817420996139]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "City Hall",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00698581794778, 40.713272664531246]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canal St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00182599973189, 40.71946533477728]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "South Ferry",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01316895983936, 40.70173084095291]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bowling Green",
                            "line": "4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01400799848199, 40.70491433249645]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wall St",
                            "line": "4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01186199920538, 40.707557334362484]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Whitehall St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01300723736433, 40.70314270735986]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Rector St",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01297456237413, 40.70774508995048]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fresh Pond Rd",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89589800086416, 40.70622633198259]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Middle Village - Metropolitan Ave",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.88957722978766, 40.71143163827924]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Rector St",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01378300080631, 40.70751333304196]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cortlandt St (Temporarily Closed)",
                            "line": "1",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01218800069755, 40.71183533452517]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Fulton St",
                            "line": "4-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0095089987439, 40.71036833193085]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broad St",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01105600048923, 40.70647633411761]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cortlandt St (NB only)",
                            "line": "N-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0111319648397, 40.710513317670305]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wall St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00909999899459, 40.70682133279038]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Dyckman St",
                            "line": "A",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.92727099913175, 40.86549133254293]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Grand St",
                            "line": "B-D",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99375299925896, 40.71826733292375]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Broadway - Lafayette St",
                            "line": "B-D-F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99620399840286, 40.725297332299235]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bowery",
                            "line": "J-Z",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99380690672811, 40.72024721673806]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Canal St",
                            "line": "N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00105471253056, 40.71881459682263]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "23rd St",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99804100061175, 40.745906332964005]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "34th St - Penn Station",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99339099930413, 40.752287334131175]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Jackson Hts - Roosevelt Av",
                            "line": "E-F-M-R",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.89129866498959, 40.74654002448512]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "14th St",
                            "line": "1-2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00020100059422, 40.737826333308426]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "135th St",
                            "line": "A-B-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94753480832401, 40.817905892108634]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "14th St",
                            "line": "F-M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99620899891177, 40.73822833288366]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "6th Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99775078872293, 40.737741803112115]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "8th Ave",
                            "line": "L",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0025780004777, 40.73977700012131]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "14th St",
                            "line": "A-C-E",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00168999943754, 40.74089333363853]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Nostrand Ave",
                            "line": "3-4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95042624893824, 40.66993848398767]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Clark St",
                            "line": "2-3",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99308599832662, 40.69746633298482]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Franklin Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95684799980513, 40.6813799997593]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Clinton - Washington Aves",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96583799868554, 40.683263332875605]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Forest Ave",
                            "line": "M",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.90307499994645, 40.70441233402832]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "110th St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94424999696717, 40.79502033352402]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "86th St",
                            "line": "4-5-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95558899978455, 40.77949233177087]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "York St",
                            "line": "F",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98688499982453, 40.69974300092185]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "High St",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99053100095567, 40.69933733273785]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lafayette Ave",
                            "line": "A-C",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97394599824162, 40.686113333301115]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "President St",
                            "line": "2-5",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.95058920055888, 40.667883936572196]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Woodlawn",
                            "line": "4",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87875099890881, 40.88603733314497]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Bleecker St (Uptown)",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99465900013325, 40.72591499972982]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "103rd St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.94747800151542, 40.790600332975615]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Euclid Ave",
                            "line": "A-C-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.87210599994208, 40.67537733193324]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "88th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.8514699989356, 40.67984333439131]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Cortelyou Rd",
                            "line": "B-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.96379005494865, 40.640940498719964]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "116th St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9416169982848, 40.79862933384588]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Parkchester",
                            "line": "6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.86081599995809, 40.83322633218034]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Franklin St",
                            "line": "1-2",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00688600226555, 40.71931833420651]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "80th St",
                            "line": "A-S",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.85899200121291, 40.679371334570604]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "5th Ave - Bryant Pk",
                            "line": "7-7 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98196299871373, 40.75382133359373]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Spring St",
                            "line": "4-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99714099950617, 40.72230133331719]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "125th St",
                            "line": "4-5-6-6 Express",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.93759400019064, 40.804138334029325]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Coney Island - Stillwell Av",
                            "line": "D-F-N-Q",
                            "url": "http://www.mta.info/nyct/subway/index.html"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98123599855974, 40.57728133344397]
                        }
                    }]

                    }


              });




                map.addLayer({
                "id": "sub_points",
                "type": "circle",
                "source": "points",

                "paint": {
                     "circle-radius": 5,
                     "circle-color": "#000"
                 }

            });


            map.setLayoutProperty("sub_points", 'visibility', 'none');







            // });



          }
