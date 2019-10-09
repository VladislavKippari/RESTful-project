'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('City', [{
          "id": "3236",
          "name": "Helsinki [Helsingfors]",
          "countryCode": "FIN",
          "district": "Newmaa",
          "population": "555474"
        },
        {
          "id": "134",
          "name": "Adelaide",
          "countryCode": "AUS",
          "district": "South Australia",
          "population": "978100"
        },
        {
          "id": "1525",
          "name": "Linz ",
          "countryCode": "AUT",
          "district": "North Austria",
          "population": "188022"
        },
        {
          "id": "1527",
          "name": "Innsbruck",
          "countryCode": "AUT",
          "district": "Tiroli",
          "population": "111752"
        },
        {
          "id": "1528",
          "name": "Klagenfurt",
          "countryCode": "AUT",
          "district": "Kärnten",
          "population": "91141"
        },
        {
          "id": "1523",
          "name": "Wien",
          "countryCode": "AUT",
          "district": "Wien",
          "population": "1608144"
        },
        {
          "id": "1526",
          "name": "Salzburg",
          "countryCode": "AUT",
          "district": "Salzburg",
          "population": "144247"
        },
        {
          "id": "1524",
          "name": "Graz",
          "countryCode": "AUT",
          "district": "Steiermark",
          "population": "240967"
        },
        {
          "id": "1464",
          "name": "Roma",
          "countryCode": "ITA",
          "district": "Latium",
          "population": "2643581"
        },
        {
          "id": "1888",
          "name": "Nyeri",
          "countryCode": "KEN",
          "district": "Central",
          "population": "91258"
        },
        {
          "id": "3792",
          "name": "Tartu",
          "countryCode": "EST",
          "district": "Tartumaa",
          "population": "101246"
        },
        {
          "id": "2408",
          "name": "Larisa",
          "countryCode": "GRC",
          "district": "Thessalia",
          "population": "113090"
        },
        {
          "id": "585",
          "name": "Djibouti",
          "countryCode": "DJI",
          "district": "Djibouti",
          "population": "383000"
        },
        {
          "id": "211",
          "name": "Brazil",
          "countryCode": "BRA",
          "district": "Distrito Federal",
          "population": "1969868"
        },
        {
          "id": "61",
          "name": "South Hill",
          "countryCode": "AIA",
          "district": "",
          "population": "961"
        },
        {
          "id": "45",
          "name": "Béjala",
          "countryCode": "DZA",
          "district": "Béjala",
          "population": "117162"
        },
        {
          "id": "3337",
          "name": "N Djaména",
          "countryCode": "TCD",
          "district": "Chari-Baguirmi",
          "population": "530965"
        },
        {
          "id": "2957",
          "name": "Elblag",
          "countryCode": "POL",
          "district": "Warminsko-Mazurskie",
          "population": "129782"
        },
        {
          "id": "2309",
          "name": "Mbandaka",
          "countryCode": "COD",
          "district": "Equateur",
          "population": "169841"
        },
        {
          "id": "608",
          "name": "Cairo",
          "countryCode": "EGY",
          "district": "Kairo",
          "population": "6789479"
        },
        {
          "id": "609",
          "name": "Alexandria",
          "countryCode": "EGY",
          "district": "Aleksandria",
          "population": "3328196"
        },
        {
          "id": "610",
          "name": "Giza",
          "countryCode": "EGY",
          "district": "Giza",
          "population": "2221868"
        },
        {
          "id": "611",
          "name": "Shubra al-Khayma",
          "countryCode": "EGY",
          "district": "al-Qalyubiya",
          "population": "870716"
        },
        {
          "id": "612",
          "name": "Port Said",
          "countryCode": "EGY",
          "district": "Port Said",
          "population": "469533"
        },
        {
          "id": "613",
          "name": "Suez",
          "countryCode": "EGY",
          "district": "Suez",
          "population": "417610"
        },
        {
          "id": "614",
          "name": "al-Mahallat al-Kubra",
          "countryCode": "EGY",
          "district": "al-Gharbiya",
          "population": "395402"
        },
        {
          "id": "615",
          "name": "Tanta",
          "countryCode": "EGY",
          "district": "al-Gharbiya",
          "population": "371010"
        },
        {
          "id": "616",
          "name": "al-Mansura",
          "countryCode": "EGY",
          "district": "al-Daqahliya",
          "population": "369621"
        },
        {
          "id": "617",
          "name": "Luxor",
          "countryCode": "EGY",
          "district": "Luxor",
          "population": "360503"
        },
        {
          "id": "618",
          "name": "Asyut",
          "countryCode": "EGY",
          "district": "Asyut",
          "population": "343498"
        },
        {
          "id": "619",
          "name": "Bahtim",
          "countryCode": "EGY",
          "district": "al-Qalyubiya",
          "population": "275807"
        },
        {
          "id": "620",
          "name": "Zagazig",
          "countryCode": "EGY",
          "district": "al-Sharqiya",
          "population": "267351"
        },
        {
          "id": "621",
          "name": "al-Faiyum",
          "countryCode": "EGY",
          "district": "al-Faiyum",
          "population": "260964"
        },
        {
          "id": "622",
          "name": "Ismailia",
          "countryCode": "EGY",
          "district": "Ismailia",
          "population": "254477"
        },
        {
          "id": "623",
          "name": "Kafr al-Dawwar",
          "countryCode": "EGY",
          "district": "al-Buhayra",
          "population": "231978"
        },
        {
          "id": "624",
          "name": "Assuan",
          "countryCode": "EGY",
          "district": "Assuan",
          "population": "219017"
        },
        {
          "id": "625",
          "name": "Damanhur",
          "countryCode": "EGY",
          "district": "al-Buhayra",
          "population": "212203"
        },
        {
          "id": "626",
          "name": "al-Minya",
          "countryCode": "EGY",
          "district": "al-Minya",
          "population": "201360"
        },
        {
          "id": "627",
          "name": "Bani Suwayf",
          "countryCode": "EGY",
          "district": "Bani Suwayf",
          "population": "172032"
        },
        {
          "id": "628",
          "name": "Qina",
          "countryCode": "EGY",
          "district": "Qina",
          "population": "171275"
        },
        {
          "id": "629",
          "name": "Sawhaj",
          "countryCode": "EGY",
          "district": "Sawhaj",
          "population": "170125"
        },
        {
          "id": "630",
          "name": "Shibin al-Kawm",
          "countryCode": "EGY",
          "district": "al-Minufiya",
          "population": "159909"
        },
        {
          "id": "631",
          "name": "Bulaq al-Dakrur",
          "countryCode": "EGY",
          "district": "Giza",
          "population": "148787"
        },
        {
          "id": "632",
          "name": "Banha",
          "countryCode": "EGY",
          "district": "al-Qalyubiya",
          "population": "145792"
        },
        {
          "id": "633",
          "name": "Warraq al-Arab",
          "countryCode": "EGY",
          "district": "Giza",
          "population": "127108"
        },
        {
          "id": "634",
          "name": "Kafr al-Shaykh",
          "countryCode": "EGY",
          "district": "Kafr al-Shaykh",
          "population": "124819"
        },
        {
          "id": "635",
          "name": "Mallawi",
          "countryCode": "EGY",
          "district": "al-Minya",
          "population": "119283"
        },
        {
          "id": "636",
          "name": "Bilbays",
          "countryCode": "EGY",
          "district": "al-Sharqiya",
          "population": "113608"
        },
        {
          "id": "637",
          "name": "Mit Ghamr",
          "countryCode": "EGY",
          "district": "al-Daqahliya",
          "population": "101801"
        },
        {
          "id": "638",
          "name": "al-Arish",
          "countryCode": "EGY",
          "district": "Shamal Sina",
          "population": "100447"
        },
        {
          "id": "639",
          "name": "Talkha",
          "countryCode": "EGY",
          "district": "al-Daqahliya",
          "population": "97700"
        },
        {
          "id": "640",
          "name": "Qalyub",
          "countryCode": "EGY",
          "district": "al-Qalyubiya",
          "population": "97200"
        },
        {
          "id": "641",
          "name": "Jirja",
          "countryCode": "EGY",
          "district": "Sawhaj",
          "population": "95400"
        },
        {
          "id": "642",
          "name": "Idfu",
          "countryCode": "EGY",
          "district": "Qina",
          "population": "94200"
        },
        {
          "id": "643",
          "name": "al-Hawamidiya",
          "countryCode": "EGY",
          "district": "Giza",
          "population": "91700"
        },
        {
          "id": "644",
          "name": "Disuq",
          "countryCode": "EGY",
          "district": "Kafr al-Shaykh",
          "population": "91300"
        },
        {
          "id": "35",
          "name": "Alger",
          "countryCode": "DZA",
          "district": "Alger",
          "population": "2168000"
        },
        {
          "id": "41",
          "name": "Sidi Bel Abbcs",
          "countryCode": "DZA",
          "district": "Sidi Bel Abbcs",
          "population": "153106"
        },
        {
          "id": "54",
          "name": "Fagatogo",
          "countryCode": "ASM",
          "district": "Tutuila",
          "population": "2323"
        },
        {
          "id": "44",
          "name": "Blida (el-Boulaida)",
          "countryCode": "DZA",
          "district": "Blida",
          "population": "127285"
        },
        {
          "id": "34",
          "name": "Tirana",
          "countryCode": "ALB",
          "district": "Tirana",
          "population": "270000"
        },
        {
          "id": "4026",
          "name": "Green Bay",
          "countryCode": "USA",
          "district": "Wisconsin",
          "population": "102313"
        },
        {
          "id": "4027",
          "name": "Cape Coral",
          "countryCode": "USA",
          "district": "Florida",
          "population": "102286"
        },
        {
          "id": "4028",
          "name": "Arvada",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "102153"
        },
        {
          "id": "4029",
          "name": "Pueblo",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "102121"
        },
        {
          "id": "4030",
          "name": "Sandy",
          "countryCode": "USA",
          "district": "Utah",
          "population": "101853"
        },
        {
          "id": "4031",
          "name": "Athens-Clarke County",
          "countryCode": "USA",
          "district": "Georgia",
          "population": "101489"
        },
        {
          "id": "4032",
          "name": "Cambridge",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "101355"
        },
        {
          "id": "4033",
          "name": "Westminster",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "100940"
        },
        {
          "id": "4034",
          "name": "San Buenaventura",
          "countryCode": "USA",
          "district": "California",
          "population": "100916"
        },
        {
          "id": "4035",
          "name": "Portsmouth",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "100565"
        },
        {
          "id": "4036",
          "name": "Livonia",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "100545"
        },
        {
          "id": "4037",
          "name": "Burbank",
          "countryCode": "USA",
          "district": "California",
          "population": "100316"
        },
        {
          "id": "4038",
          "name": "Clearwater",
          "countryCode": "USA",
          "district": "Florida",
          "population": "99936"
        },
        {
          "id": "4039",
          "name": "Midland",
          "countryCode": "USA",
          "district": "Texas",
          "population": "98293"
        },
        {
          "id": "4040",
          "name": "Davenport",
          "countryCode": "USA",
          "district": "Iowa",
          "population": "98256"
        },
        {
          "id": "4041",
          "name": "Mission Viejo",
          "countryCode": "USA",
          "district": "California",
          "population": "98049"
        },
        {
          "id": "4042",
          "name": "Miami Beach",
          "countryCode": "USA",
          "district": "Florida",
          "population": "97855"
        },
        {
          "id": "4043",
          "name": "Sunrise Manor",
          "countryCode": "USA",
          "district": "Nevada",
          "population": "95362"
        },
        {
          "id": "4044",
          "name": "New Bedford",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "94780"
        },
        {
          "id": "4045",
          "name": "El Cajon",
          "countryCode": "USA",
          "district": "California",
          "population": "94578"
        },
        {
          "id": "4046",
          "name": "Norman",
          "countryCode": "USA",
          "district": "Oklahoma",
          "population": "94193"
        },
        {
          "id": "4047",
          "name": "Richmond",
          "countryCode": "USA",
          "district": "California",
          "population": "94100"
        },
        {
          "id": "4048",
          "name": "Albany",
          "countryCode": "USA",
          "district": "New York",
          "population": "93994"
        },
        {
          "id": "4049",
          "name": "Brockton",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "93653"
        },
        {
          "id": "4050",
          "name": "Roanoke",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "93357"
        },
        {
          "id": "4051",
          "name": "Billings",
          "countryCode": "USA",
          "district": "Montana",
          "population": "92988"
        },
        {
          "id": "4052",
          "name": "Compton",
          "countryCode": "USA",
          "district": "California",
          "population": "92864"
        },
        {
          "id": "4053",
          "name": "Gainesville",
          "countryCode": "USA",
          "district": "Florida",
          "population": "92291"
        },
        {
          "id": "4054",
          "name": "Fairfield",
          "countryCode": "USA",
          "district": "California",
          "population": "92256"
        },
        {
          "id": "4055",
          "name": "Arden-Arcade",
          "countryCode": "USA",
          "district": "California",
          "population": "92040"
        },
        {
          "id": "4056",
          "name": "San Mateo",
          "countryCode": "USA",
          "district": "California",
          "population": "91799"
        },
        {
          "id": "4057",
          "name": "Visalia",
          "countryCode": "USA",
          "district": "California",
          "population": "91762"
        },
        {
          "id": "4058",
          "name": "Boulder",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "91238"
        },
        {
          "id": "4059",
          "name": "Cary",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "91213"
        },
        {
          "id": "4060",
          "name": "Santa Monica",
          "countryCode": "USA",
          "district": "California",
          "population": "91084"
        },
        {
          "id": "4061",
          "name": "Fall River",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "90555"
        },
        {
          "id": "4062",
          "name": "Kenosha",
          "countryCode": "USA",
          "district": "Wisconsin",
          "population": "89447"
        },
        {
          "id": "4063",
          "name": "Elgin",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "89408"
        },
        {
          "id": "4064",
          "name": "Odessa",
          "countryCode": "USA",
          "district": "Texas",
          "population": "89293"
        },
        {
          "id": "4065",
          "name": "Carson",
          "countryCode": "USA",
          "district": "California",
          "population": "89089"
        },
        {
          "id": "4066",
          "name": "Charleston",
          "countryCode": "USA",
          "district": "South Carolina",
          "population": "89063"
        },
        {
          "id": "4067",
          "name": "Charlotte Amalie",
          "countryCode": "VIR",
          "district": "St Thomas",
          "population": "13000"
        },
        {
          "id": "4068",
          "name": "Harare",
          "countryCode": "ZWE",
          "district": "Harare",
          "population": "1410000"
        },
        {
          "id": "4069",
          "name": "Bulawayo",
          "countryCode": "ZWE",
          "district": "Bulawayo",
          "population": "621742"
        },
        {
          "id": "4070",
          "name": "Chitungwiza",
          "countryCode": "ZWE",
          "district": "Harare",
          "population": "274912"
        },
        {
          "id": "4071",
          "name": "Mount Darwin",
          "countryCode": "ZWE",
          "district": "Harare",
          "population": "164362"
        },
        {
          "id": "4072",
          "name": "Mutare",
          "countryCode": "ZWE",
          "district": "Manicaland",
          "population": "131367"
        },
        {
          "id": "4073",
          "name": "Gweru",
          "countryCode": "ZWE",
          "district": "Midlands",
          "population": "128037"
        },
        {
          "id": "4074",
          "name": "Gaza",
          "countryCode": "PSE",
          "district": "Gaza",
          "population": "353632"
        },
        {
          "id": "4075",
          "name": "Khan Yunis",
          "countryCode": "PSE",
          "district": "Khan Yunis",
          "population": "123175"
        },
        {
          "id": "4076",
          "name": "Hebron",
          "countryCode": "PSE",
          "district": "Hebron",
          "population": "119401"
        },
        {
          "id": "4077",
          "name": "Jabaliya",
          "countryCode": "PSE",
          "district": "North Gaza",
          "population": "113901"
        },
        {
          "id": "4078",
          "name": "Nablus",
          "countryCode": "PSE",
          "district": "Nablus",
          "population": "100231"
        },
        {
          "id": "4079",
          "name": "Rafah",
          "countryCode": "PSE",
          "district": "Rafah",
          "population": "92020"
        },
        {
          "id": "1",
          "name": "Kabul",
          "countryCode": "AFG",
          "district": "Kabul",
          "population": "1237500"
        },
        {
          "id": "3965",
          "name": "Corona",
          "countryCode": "USA",
          "district": "California",
          "population": "124966"
        },
        {
          "id": "3966",
          "name": "Flint",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "124943"
        },
        {
          "id": "3967",
          "name": "Paradise",
          "countryCode": "USA",
          "district": "Nevada",
          "population": "124682"
        },
        {
          "id": "3968",
          "name": "Mesquite",
          "countryCode": "USA",
          "district": "Texas",
          "population": "124523"
        },
        {
          "id": "3969",
          "name": "Sterling Heights",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "124471"
        },
        {
          "id": "3970",
          "name": "Sioux Falls",
          "countryCode": "USA",
          "district": "South Dakota",
          "population": "123975"
        },
        {
          "id": "3971",
          "name": "New Haven",
          "countryCode": "USA",
          "district": "Connecticut",
          "population": "123626"
        },
        {
          "id": "3972",
          "name": "Topeka",
          "countryCode": "USA",
          "district": "Kansas",
          "population": "122377"
        },
        {
          "id": "3973",
          "name": "Concord",
          "countryCode": "USA",
          "district": "California",
          "population": "121780"
        },
        {
          "id": "3974",
          "name": "Evansville",
          "countryCode": "USA",
          "district": "Indiana",
          "population": "121582"
        },
        {
          "id": "3975",
          "name": "Hartford",
          "countryCode": "USA",
          "district": "Connecticut",
          "population": "121578"
        },
        {
          "id": "3976",
          "name": "Fayetteville",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "121015"
        },
        {
          "id": "3977",
          "name": "Cedar Rapids",
          "countryCode": "USA",
          "district": "Iowa",
          "population": "120758"
        },
        {
          "id": "3978",
          "name": "Elizabeth",
          "countryCode": "USA",
          "district": "New Jersey",
          "population": "120568"
        },
        {
          "id": "3979",
          "name": "Lansing",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "119128"
        },
        {
          "id": "3980",
          "name": "Lancaster",
          "countryCode": "USA",
          "district": "California",
          "population": "118718"
        },
        {
          "id": "3981",
          "name": "Fort Collins",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "118652"
        },
        {
          "id": "3982",
          "name": "Coral Springs",
          "countryCode": "USA",
          "district": "Florida",
          "population": "117549"
        },
        {
          "id": "3983",
          "name": "Stamford",
          "countryCode": "USA",
          "district": "Connecticut",
          "population": "117083"
        },
        {
          "id": "3984",
          "name": "Thousand Oaks",
          "countryCode": "USA",
          "district": "California",
          "population": "117005"
        },
        {
          "id": "3985",
          "name": "Vallejo",
          "countryCode": "USA",
          "district": "California",
          "population": "116760"
        },
        {
          "id": "3986",
          "name": "Palmdale",
          "countryCode": "USA",
          "district": "California",
          "population": "116670"
        },
        {
          "id": "3987",
          "name": "Columbia",
          "countryCode": "USA",
          "district": "South Carolina",
          "population": "116278"
        },
        {
          "id": "3988",
          "name": "El Monte",
          "countryCode": "USA",
          "district": "California",
          "population": "115965"
        },
        {
          "id": "3989",
          "name": "Abilene",
          "countryCode": "USA",
          "district": "Texas",
          "population": "115930"
        },
        {
          "id": "3990",
          "name": "North Las Vegas",
          "countryCode": "USA",
          "district": "Nevada",
          "population": "115488"
        },
        {
          "id": "3991",
          "name": "Ann Arbor",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "114024"
        },
        {
          "id": "3992",
          "name": "Beaumont",
          "countryCode": "USA",
          "district": "Texas",
          "population": "113866"
        },
        {
          "id": "3993",
          "name": "Waco",
          "countryCode": "USA",
          "district": "Texas",
          "population": "113726"
        },
        {
          "id": "3994",
          "name": "Macon",
          "countryCode": "USA",
          "district": "Georgia",
          "population": "113336"
        },
        {
          "id": "3995",
          "name": "Independence",
          "countryCode": "USA",
          "district": "Missouri",
          "population": "113288"
        },
        {
          "id": "3996",
          "name": "Peoria",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "112936"
        },
        {
          "id": "3997",
          "name": "Inglewood",
          "countryCode": "USA",
          "district": "California",
          "population": "112580"
        },
        {
          "id": "3998",
          "name": "Springfield",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "111454"
        },
        {
          "id": "3999",
          "name": "Simi Valley",
          "countryCode": "USA",
          "district": "California",
          "population": "111351"
        },
        {
          "id": "4000",
          "name": "Lafayette",
          "countryCode": "USA",
          "district": "Louisiana",
          "population": "110257"
        },
        {
          "id": "4001",
          "name": "Gilbert",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "109697"
        },
        {
          "id": "4002",
          "name": "Carrollton",
          "countryCode": "USA",
          "district": "Texas",
          "population": "109576"
        },
        {
          "id": "4003",
          "name": "Bellevue",
          "countryCode": "USA",
          "district": "Washington",
          "population": "109569"
        },
        {
          "id": "4004",
          "name": "West Valley City",
          "countryCode": "USA",
          "district": "Utah",
          "population": "108896"
        },
        {
          "id": "4005",
          "name": "Clarksville",
          "countryCode": "USA",
          "district": "Tennessee",
          "population": "108787"
        },
        {
          "id": "4006",
          "name": "Costa Mesa",
          "countryCode": "USA",
          "district": "California",
          "population": "108724"
        },
        {
          "id": "4007",
          "name": "Peoria",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "108364"
        },
        {
          "id": "4008",
          "name": "South Bend",
          "countryCode": "USA",
          "district": "Indiana",
          "population": "107789"
        },
        {
          "id": "4009",
          "name": "Downey",
          "countryCode": "USA",
          "district": "California",
          "population": "107323"
        },
        {
          "id": "4010",
          "name": "Waterbury",
          "countryCode": "USA",
          "district": "Connecticut",
          "population": "107271"
        },
        {
          "id": "4011",
          "name": "Manchester",
          "countryCode": "USA",
          "district": "New Hampshire",
          "population": "107006"
        },
        {
          "id": "4012",
          "name": "Allentown",
          "countryCode": "USA",
          "district": "Pennsylvania",
          "population": "106632"
        },
        {
          "id": "4013",
          "name": "McAllen",
          "countryCode": "USA",
          "district": "Texas",
          "population": "106414"
        },
        {
          "id": "4014",
          "name": "Joliet",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "106221"
        },
        {
          "id": "4015",
          "name": "Lowell",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "105167"
        },
        {
          "id": "4016",
          "name": "Provo",
          "countryCode": "USA",
          "district": "Utah",
          "population": "105166"
        },
        {
          "id": "4017",
          "name": "West Covina",
          "countryCode": "USA",
          "district": "California",
          "population": "105080"
        },
        {
          "id": "4018",
          "name": "Wichita Falls",
          "countryCode": "USA",
          "district": "Texas",
          "population": "104197"
        },
        {
          "id": "4019",
          "name": "Erie",
          "countryCode": "USA",
          "district": "Pennsylvania",
          "population": "103717"
        },
        {
          "id": "4020",
          "name": "Daly City",
          "countryCode": "USA",
          "district": "California",
          "population": "103621"
        },
        {
          "id": "4021",
          "name": "Citrus Heights",
          "countryCode": "USA",
          "district": "California",
          "population": "103455"
        },
        {
          "id": "4022",
          "name": "Norwalk",
          "countryCode": "USA",
          "district": "California",
          "population": "103298"
        },
        {
          "id": "4023",
          "name": "Gary",
          "countryCode": "USA",
          "district": "Indiana",
          "population": "102746"
        },
        {
          "id": "4024",
          "name": "Berkeley",
          "countryCode": "USA",
          "district": "California",
          "population": "102743"
        },
        {
          "id": "4025",
          "name": "Santa Clara",
          "countryCode": "USA",
          "district": "California",
          "population": "102361"
        },
        {
          "id": "3904",
          "name": "Reno",
          "countryCode": "USA",
          "district": "Nevada",
          "population": "180480"
        },
        {
          "id": "3905",
          "name": "Newport News",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "180150"
        },
        {
          "id": "3906",
          "name": "Chandler",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "176581"
        },
        {
          "id": "3907",
          "name": "Laredo",
          "countryCode": "USA",
          "district": "Texas",
          "population": "176576"
        },
        {
          "id": "3908",
          "name": "Henderson",
          "countryCode": "USA",
          "district": "Nevada",
          "population": "175381"
        },
        {
          "id": "3909",
          "name": "Arlington",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "174838"
        },
        {
          "id": "3910",
          "name": "Knoxville",
          "countryCode": "USA",
          "district": "Tennessee",
          "population": "173890"
        },
        {
          "id": "3911",
          "name": "Amarillo",
          "countryCode": "USA",
          "district": "Texas",
          "population": "173627"
        },
        {
          "id": "3912",
          "name": "Providence",
          "countryCode": "USA",
          "district": "Rhode Island",
          "population": "173618"
        },
        {
          "id": "3913",
          "name": "Chula Vista",
          "countryCode": "USA",
          "district": "California",
          "population": "173556"
        },
        {
          "id": "3914",
          "name": "Worcester",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "172648"
        },
        {
          "id": "3915",
          "name": "Oxnard",
          "countryCode": "USA",
          "district": "California",
          "population": "170358"
        },
        {
          "id": "3916",
          "name": "Dayton",
          "countryCode": "USA",
          "district": "Ohio",
          "population": "166179"
        },
        {
          "id": "3917",
          "name": "Garden Grove",
          "countryCode": "USA",
          "district": "California",
          "population": "165196"
        },
        {
          "id": "3918",
          "name": "Oceanside",
          "countryCode": "USA",
          "district": "California",
          "population": "161029"
        },
        {
          "id": "3919",
          "name": "Tempe",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "158625"
        },
        {
          "id": "3920",
          "name": "Huntsville",
          "countryCode": "USA",
          "district": "Alabama",
          "population": "158216"
        },
        {
          "id": "3921",
          "name": "Ontario",
          "countryCode": "USA",
          "district": "California",
          "population": "158007"
        },
        {
          "id": "3922",
          "name": "Chattanooga",
          "countryCode": "USA",
          "district": "Tennessee",
          "population": "155554"
        },
        {
          "id": "3923",
          "name": "Fort Lauderdale",
          "countryCode": "USA",
          "district": "Florida",
          "population": "152397"
        },
        {
          "id": "3924",
          "name": "Springfield",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "152082"
        },
        {
          "id": "3925",
          "name": "Springfield",
          "countryCode": "USA",
          "district": "Missouri",
          "population": "151580"
        },
        {
          "id": "3926",
          "name": "Santa Clarita",
          "countryCode": "USA",
          "district": "California",
          "population": "151088"
        },
        {
          "id": "3927",
          "name": "Salinas",
          "countryCode": "USA",
          "district": "California",
          "population": "151060"
        },
        {
          "id": "3928",
          "name": "Tallahassee",
          "countryCode": "USA",
          "district": "Florida",
          "population": "150624"
        },
        {
          "id": "3929",
          "name": "Rockford",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "150115"
        },
        {
          "id": "3930",
          "name": "Pomona",
          "countryCode": "USA",
          "district": "California",
          "population": "149473"
        },
        {
          "id": "3931",
          "name": "Metairie",
          "countryCode": "USA",
          "district": "Louisiana",
          "population": "149428"
        },
        {
          "id": "3932",
          "name": "Paterson",
          "countryCode": "USA",
          "district": "New Jersey",
          "population": "149222"
        },
        {
          "id": "3933",
          "name": "Overland Park",
          "countryCode": "USA",
          "district": "Kansas",
          "population": "149080"
        },
        {
          "id": "3934",
          "name": "Santa Rosa",
          "countryCode": "USA",
          "district": "California",
          "population": "147595"
        },
        {
          "id": "3935",
          "name": "Syracuse",
          "countryCode": "USA",
          "district": "New York",
          "population": "147306"
        },
        {
          "id": "3936",
          "name": "Kansas City",
          "countryCode": "USA",
          "district": "Kansas",
          "population": "146866"
        },
        {
          "id": "3937",
          "name": "Hampton",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "146437"
        },
        {
          "id": "3938",
          "name": "Lakewood",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "144126"
        },
        {
          "id": "3939",
          "name": "Vancouver",
          "countryCode": "USA",
          "district": "Washington",
          "population": "143560"
        },
        {
          "id": "3940",
          "name": "Irvine",
          "countryCode": "USA",
          "district": "California",
          "population": "143072"
        },
        {
          "id": "3941",
          "name": "Aurora",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "142990"
        },
        {
          "id": "3942",
          "name": "Moreno Valley",
          "countryCode": "USA",
          "district": "California",
          "population": "142381"
        },
        {
          "id": "3943",
          "name": "Pasadena",
          "countryCode": "USA",
          "district": "California",
          "population": "141674"
        },
        {
          "id": "3944",
          "name": "Hayward",
          "countryCode": "USA",
          "district": "California",
          "population": "140030"
        },
        {
          "id": "3945",
          "name": "Brownsville",
          "countryCode": "USA",
          "district": "Texas",
          "population": "139722"
        },
        {
          "id": "3946",
          "name": "Bridgeport",
          "countryCode": "USA",
          "district": "Connecticut",
          "population": "139529"
        },
        {
          "id": "3947",
          "name": "Hollywood",
          "countryCode": "USA",
          "district": "Florida",
          "population": "139357"
        },
        {
          "id": "3948",
          "name": "Warren",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "138247"
        },
        {
          "id": "3949",
          "name": "Torrance",
          "countryCode": "USA",
          "district": "California",
          "population": "137946"
        },
        {
          "id": "3950",
          "name": "Eugene",
          "countryCode": "USA",
          "district": "Oregon",
          "population": "137893"
        },
        {
          "id": "3951",
          "name": "Pembroke Pines",
          "countryCode": "USA",
          "district": "Florida",
          "population": "137427"
        },
        {
          "id": "3952",
          "name": "Salem",
          "countryCode": "USA",
          "district": "Oregon",
          "population": "136924"
        },
        {
          "id": "3953",
          "name": "Pasadena",
          "countryCode": "USA",
          "district": "Texas",
          "population": "133936"
        },
        {
          "id": "3954",
          "name": "Escondido",
          "countryCode": "USA",
          "district": "California",
          "population": "133559"
        },
        {
          "id": "3955",
          "name": "Sunnyvale",
          "countryCode": "USA",
          "district": "California",
          "population": "131760"
        },
        {
          "id": "3956",
          "name": "Savannah",
          "countryCode": "USA",
          "district": "Georgia",
          "population": "131510"
        },
        {
          "id": "3957",
          "name": "Fontana",
          "countryCode": "USA",
          "district": "California",
          "population": "128929"
        },
        {
          "id": "3958",
          "name": "Orange",
          "countryCode": "USA",
          "district": "California",
          "population": "128821"
        },
        {
          "id": "3959",
          "name": "Naperville",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "128358"
        },
        {
          "id": "3960",
          "name": "Alexandria",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "128283"
        },
        {
          "id": "3961",
          "name": "Rancho Cucamonga",
          "countryCode": "USA",
          "district": "California",
          "population": "127743"
        },
        {
          "id": "3962",
          "name": "Grand Prairie",
          "countryCode": "USA",
          "district": "Texas",
          "population": "127427"
        },
        {
          "id": "3963",
          "name": "East Los Angeles",
          "countryCode": "USA",
          "district": "California",
          "population": "126379"
        },
        {
          "id": "3964",
          "name": "Fullerton",
          "countryCode": "USA",
          "district": "California",
          "population": "126003"
        },
        {
          "id": "3843",
          "name": "Santa Ana",
          "countryCode": "USA",
          "district": "California",
          "population": "337977"
        },
        {
          "id": "3844",
          "name": "Pittsburgh",
          "countryCode": "USA",
          "district": "Pennsylvania",
          "population": "334563"
        },
        {
          "id": "3845",
          "name": "Arlington",
          "countryCode": "USA",
          "district": "Texas",
          "population": "332969"
        },
        {
          "id": "3846",
          "name": "Cincinnati",
          "countryCode": "USA",
          "district": "Ohio",
          "population": "331285"
        },
        {
          "id": "3847",
          "name": "Anaheim",
          "countryCode": "USA",
          "district": "California",
          "population": "328014"
        },
        {
          "id": "3848",
          "name": "Toledo",
          "countryCode": "USA",
          "district": "Ohio",
          "population": "313619"
        },
        {
          "id": "3849",
          "name": "Tampa",
          "countryCode": "USA",
          "district": "Florida",
          "population": "303447"
        },
        {
          "id": "3850",
          "name": "Buffalo",
          "countryCode": "USA",
          "district": "New York",
          "population": "292648"
        },
        {
          "id": "3851",
          "name": "Saint Paul",
          "countryCode": "USA",
          "district": "Minnesota",
          "population": "287151"
        },
        {
          "id": "3852",
          "name": "Corpus Christi",
          "countryCode": "USA",
          "district": "Texas",
          "population": "277454"
        },
        {
          "id": "3853",
          "name": "Aurora",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "276393"
        },
        {
          "id": "3854",
          "name": "Raleigh",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "276093"
        },
        {
          "id": "3855",
          "name": "Newark",
          "countryCode": "USA",
          "district": "New Jersey",
          "population": "273546"
        },
        {
          "id": "3856",
          "name": "Lexington-Fayette",
          "countryCode": "USA",
          "district": "Kentucky",
          "population": "260512"
        },
        {
          "id": "3857",
          "name": "Anchorage",
          "countryCode": "USA",
          "district": "Alaska",
          "population": "260283"
        },
        {
          "id": "3858",
          "name": "Louisville",
          "countryCode": "USA",
          "district": "Kentucky",
          "population": "256231"
        },
        {
          "id": "3859",
          "name": "Riverside",
          "countryCode": "USA",
          "district": "California",
          "population": "255166"
        },
        {
          "id": "3860",
          "name": "Saint Petersburg",
          "countryCode": "USA",
          "district": "Florida",
          "population": "248232"
        },
        {
          "id": "3861",
          "name": "Bakersfield",
          "countryCode": "USA",
          "district": "California",
          "population": "247057"
        },
        {
          "id": "3862",
          "name": "Stockton",
          "countryCode": "USA",
          "district": "California",
          "population": "243771"
        },
        {
          "id": "3863",
          "name": "Birmingham",
          "countryCode": "USA",
          "district": "Alabama",
          "population": "242820"
        },
        {
          "id": "3864",
          "name": "Jersey City",
          "countryCode": "USA",
          "district": "New Jersey",
          "population": "240055"
        },
        {
          "id": "3865",
          "name": "Norfolk",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "234403"
        },
        {
          "id": "3866",
          "name": "Baton Rouge",
          "countryCode": "USA",
          "district": "Louisiana",
          "population": "227818"
        },
        {
          "id": "3867",
          "name": "Hialeah",
          "countryCode": "USA",
          "district": "Florida",
          "population": "226419"
        },
        {
          "id": "3868",
          "name": "Lincoln",
          "countryCode": "USA",
          "district": "Nebraska",
          "population": "225581"
        },
        {
          "id": "3869",
          "name": "Greensboro",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "223891"
        },
        {
          "id": "3870",
          "name": "Plano",
          "countryCode": "USA",
          "district": "Texas",
          "population": "222030"
        },
        {
          "id": "3871",
          "name": "Rochester",
          "countryCode": "USA",
          "district": "New York",
          "population": "219773"
        },
        {
          "id": "3872",
          "name": "Glendale",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "218812"
        },
        {
          "id": "3873",
          "name": "Akron",
          "countryCode": "USA",
          "district": "Ohio",
          "population": "217074"
        },
        {
          "id": "3874",
          "name": "Garland",
          "countryCode": "USA",
          "district": "Texas",
          "population": "215768"
        },
        {
          "id": "3875",
          "name": "Madison",
          "countryCode": "USA",
          "district": "Wisconsin",
          "population": "208054"
        },
        {
          "id": "3876",
          "name": "Fort Wayne",
          "countryCode": "USA",
          "district": "Indiana",
          "population": "205727"
        },
        {
          "id": "3877",
          "name": "Fremont",
          "countryCode": "USA",
          "district": "California",
          "population": "203413"
        },
        {
          "id": "3878",
          "name": "Scottsdale",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "202705"
        },
        {
          "id": "3879",
          "name": "Montgomery",
          "countryCode": "USA",
          "district": "Alabama",
          "population": "201568"
        },
        {
          "id": "3880",
          "name": "Shreveport",
          "countryCode": "USA",
          "district": "Louisiana",
          "population": "200145"
        },
        {
          "id": "3881",
          "name": "Augusta-Richmond County",
          "countryCode": "USA",
          "district": "Georgia",
          "population": "199775"
        },
        {
          "id": "3882",
          "name": "Lubbock",
          "countryCode": "USA",
          "district": "Texas",
          "population": "199564"
        },
        {
          "id": "3883",
          "name": "Chesapeake",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "199184"
        },
        {
          "id": "3884",
          "name": "Mobile",
          "countryCode": "USA",
          "district": "Alabama",
          "population": "198915"
        },
        {
          "id": "3885",
          "name": "Des Moines",
          "countryCode": "USA",
          "district": "Iowa",
          "population": "198682"
        },
        {
          "id": "3886",
          "name": "Grand Rapids",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "197800"
        },
        {
          "id": "3887",
          "name": "Richmond",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "197790"
        },
        {
          "id": "3888",
          "name": "Yonkers",
          "countryCode": "USA",
          "district": "New York",
          "population": "196086"
        },
        {
          "id": "3889",
          "name": "Spokane",
          "countryCode": "USA",
          "district": "Washington",
          "population": "195629"
        },
        {
          "id": "3890",
          "name": "Glendale",
          "countryCode": "USA",
          "district": "California",
          "population": "194973"
        },
        {
          "id": "3891",
          "name": "Tacoma",
          "countryCode": "USA",
          "district": "Washington",
          "population": "193556"
        },
        {
          "id": "3892",
          "name": "Irving",
          "countryCode": "USA",
          "district": "Texas",
          "population": "191615"
        },
        {
          "id": "3893",
          "name": "Huntington Beach",
          "countryCode": "USA",
          "district": "California",
          "population": "189594"
        },
        {
          "id": "3894",
          "name": "Modesto",
          "countryCode": "USA",
          "district": "California",
          "population": "188856"
        },
        {
          "id": "3895",
          "name": "Durham",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "187035"
        },
        {
          "id": "3896",
          "name": "Columbus",
          "countryCode": "USA",
          "district": "Georgia",
          "population": "186291"
        },
        {
          "id": "3897",
          "name": "Orlando",
          "countryCode": "USA",
          "district": "Florida",
          "population": "185951"
        },
        {
          "id": "3898",
          "name": "Boise City",
          "countryCode": "USA",
          "district": "Idaho",
          "population": "185787"
        },
        {
          "id": "3899",
          "name": "Winston-Salem",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "185776"
        },
        {
          "id": "3900",
          "name": "San Bernardino",
          "countryCode": "USA",
          "district": "California",
          "population": "185401"
        },
        {
          "id": "3901",
          "name": "Jackson",
          "countryCode": "USA",
          "district": "Mississippi",
          "population": "184256"
        },
        {
          "id": "3902",
          "name": "Little Rock",
          "countryCode": "USA",
          "district": "Arkansas",
          "population": "183133"
        },
        {
          "id": "3903",
          "name": "Salt Lake City",
          "countryCode": "USA",
          "district": "Utah",
          "population": "181743"
        },
        {
          "id": "3782",
          "name": "Long Xuyen",
          "countryCode": "VNM",
          "district": "An Giang",
          "population": "132681"
        },
        {
          "id": "3783",
          "name": "Thai Nguyen",
          "countryCode": "VNM",
          "district": "Bac Thai",
          "population": "127643"
        },
        {
          "id": "3784",
          "name": "Hong Gai",
          "countryCode": "VNM",
          "district": "Quang Ninh",
          "population": "127484"
        },
        {
          "id": "3785",
          "name": "Phan Thizt",
          "countryCode": "VNM",
          "district": "Binh Thuan",
          "population": "114236"
        },
        {
          "id": "3786",
          "name": "Cam Ranh",
          "countryCode": "VNM",
          "district": "Khanh Hoa",
          "population": "114041"
        },
        {
          "id": "3787",
          "name": "Vinh",
          "countryCode": "VNM",
          "district": "Nghe An",
          "population": "112455"
        },
        {
          "id": "3788",
          "name": "My Tho",
          "countryCode": "VNM",
          "district": "Tien Giang",
          "population": "108404"
        },
        {
          "id": "3789",
          "name": "Da Lat",
          "countryCode": "VNM",
          "district": "Lam Dong",
          "population": "106409"
        },
        {
          "id": "3790",
          "name": "Buon Ma Thuot",
          "countryCode": "VNM",
          "district": "Dac Lac",
          "population": "97044"
        },
        {
          "id": "3793",
          "name": "New York",
          "countryCode": "USA",
          "district": "New York",
          "population": "8008278"
        },
        {
          "id": "3794",
          "name": "Los Angeles",
          "countryCode": "USA",
          "district": "California",
          "population": "3694820"
        },
        {
          "id": "3795",
          "name": "Chicago",
          "countryCode": "USA",
          "district": "Illinois",
          "population": "2896016"
        },
        {
          "id": "3796",
          "name": "Houston",
          "countryCode": "USA",
          "district": "Texas",
          "population": "1953631"
        },
        {
          "id": "3797",
          "name": "Philadelphia",
          "countryCode": "USA",
          "district": "Pennsylvania",
          "population": "1517550"
        },
        {
          "id": "3798",
          "name": "Phoenix",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "1321045"
        },
        {
          "id": "3799",
          "name": "San Diego",
          "countryCode": "USA",
          "district": "California",
          "population": "1223400"
        },
        {
          "id": "3800",
          "name": "Dallas",
          "countryCode": "USA",
          "district": "Texas",
          "population": "1188580"
        },
        {
          "id": "3801",
          "name": "San Antonio",
          "countryCode": "USA",
          "district": "Texas",
          "population": "1144646"
        },
        {
          "id": "3802",
          "name": "Detroit",
          "countryCode": "USA",
          "district": "Michigan",
          "population": "951270"
        },
        {
          "id": "3803",
          "name": "San Jose",
          "countryCode": "USA",
          "district": "California",
          "population": "894943"
        },
        {
          "id": "3804",
          "name": "Indianapolis",
          "countryCode": "USA",
          "district": "Indiana",
          "population": "791926"
        },
        {
          "id": "3805",
          "name": "San Francisco",
          "countryCode": "USA",
          "district": "California",
          "population": "776733"
        },
        {
          "id": "3806",
          "name": "Jacksonville",
          "countryCode": "USA",
          "district": "Florida",
          "population": "735167"
        },
        {
          "id": "3807",
          "name": "Columbus",
          "countryCode": "USA",
          "district": "Ohio",
          "population": "711470"
        },
        {
          "id": "3808",
          "name": "Austin",
          "countryCode": "USA",
          "district": "Texas",
          "population": "656562"
        },
        {
          "id": "3809",
          "name": "Baltimore",
          "countryCode": "USA",
          "district": "Maryland",
          "population": "651154"
        },
        {
          "id": "3810",
          "name": "Memphis",
          "countryCode": "USA",
          "district": "Tennessee",
          "population": "650100"
        },
        {
          "id": "3811",
          "name": "Milwaukee",
          "countryCode": "USA",
          "district": "Wisconsin",
          "population": "596974"
        },
        {
          "id": "3812",
          "name": "Boston",
          "countryCode": "USA",
          "district": "Massachusetts",
          "population": "589141"
        },
        {
          "id": "3813",
          "name": "Washington",
          "countryCode": "USA",
          "district": "District of Columbia",
          "population": "572059"
        },
        {
          "id": "3814",
          "name": "Nashville-Davidson",
          "countryCode": "USA",
          "district": "Tennessee",
          "population": "569891"
        },
        {
          "id": "3815",
          "name": "El Paso",
          "countryCode": "USA",
          "district": "Texas",
          "population": "563662"
        },
        {
          "id": "3816",
          "name": "Seattle",
          "countryCode": "USA",
          "district": "Washington",
          "population": "563374"
        },
        {
          "id": "3817",
          "name": "Denver",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "554636"
        },
        {
          "id": "3818",
          "name": "Charlotte",
          "countryCode": "USA",
          "district": "North Carolina",
          "population": "540828"
        },
        {
          "id": "3819",
          "name": "Fort Worth",
          "countryCode": "USA",
          "district": "Texas",
          "population": "534694"
        },
        {
          "id": "3820",
          "name": "Portland",
          "countryCode": "USA",
          "district": "Oregon",
          "population": "529121"
        },
        {
          "id": "3821",
          "name": "Oklahoma City",
          "countryCode": "USA",
          "district": "Oklahoma",
          "population": "506132"
        },
        {
          "id": "3822",
          "name": "Tucson",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "486699"
        },
        {
          "id": "3823",
          "name": "New Orleans",
          "countryCode": "USA",
          "district": "Louisiana",
          "population": "484674"
        },
        {
          "id": "3824",
          "name": "Las Vegas",
          "countryCode": "USA",
          "district": "Nevada",
          "population": "478434"
        },
        {
          "id": "3825",
          "name": "Cleveland",
          "countryCode": "USA",
          "district": "Ohio",
          "population": "478403"
        },
        {
          "id": "3826",
          "name": "Long Beach",
          "countryCode": "USA",
          "district": "California",
          "population": "461522"
        },
        {
          "id": "3827",
          "name": "Albuquerque",
          "countryCode": "USA",
          "district": "New Mexico",
          "population": "448607"
        },
        {
          "id": "3828",
          "name": "Kansas City",
          "countryCode": "USA",
          "district": "Missouri",
          "population": "441545"
        },
        {
          "id": "3829",
          "name": "Fresno",
          "countryCode": "USA",
          "district": "California",
          "population": "427652"
        },
        {
          "id": "3830",
          "name": "Virginia Beach",
          "countryCode": "USA",
          "district": "Virginia",
          "population": "425257"
        },
        {
          "id": "3831",
          "name": "Atlanta",
          "countryCode": "USA",
          "district": "Georgia",
          "population": "416474"
        },
        {
          "id": "3832",
          "name": "Sacramento",
          "countryCode": "USA",
          "district": "California",
          "population": "407018"
        },
        {
          "id": "3833",
          "name": "Oakland",
          "countryCode": "USA",
          "district": "California",
          "population": "399484"
        },
        {
          "id": "3834",
          "name": "Mesa",
          "countryCode": "USA",
          "district": "Arizona",
          "population": "396375"
        },
        {
          "id": "3835",
          "name": "Tulsa",
          "countryCode": "USA",
          "district": "Oklahoma",
          "population": "393049"
        },
        {
          "id": "3836",
          "name": "Omaha",
          "countryCode": "USA",
          "district": "Nebraska",
          "population": "390007"
        },
        {
          "id": "3837",
          "name": "Minneapolis",
          "countryCode": "USA",
          "district": "Minnesota",
          "population": "382618"
        },
        {
          "id": "3838",
          "name": "Honolulu",
          "countryCode": "USA",
          "district": "Hawaii",
          "population": "371657"
        },
        {
          "id": "3839",
          "name": "Miami",
          "countryCode": "USA",
          "district": "Florida",
          "population": "362470"
        },
        {
          "id": "3840",
          "name": "Colorado Springs",
          "countryCode": "USA",
          "district": "Colorado",
          "population": "360890"
        },
        {
          "id": "3841",
          "name": "Saint Louis",
          "countryCode": "USA",
          "district": "Missouri",
          "population": "348189"
        },
        {
          "id": "3842",
          "name": "Wichita",
          "countryCode": "USA",
          "district": "Kansas",
          "population": "344284"
        },
        {
          "id": "3721",
          "name": "Velikije Luki",
          "countryCode": "RUS",
          "district": "Pihkova",
          "population": "116300"
        },
        {
          "id": "3722",
          "name": "Novokuibyševsk",
          "countryCode": "RUS",
          "district": "Samara",
          "population": "116200"
        },
        {
          "id": "3723",
          "name": "Neftekamsk",
          "countryCode": "RUS",
          "district": "Baškortostan",
          "population": "115700"
        },
        {
          "id": "3724",
          "name": "Leninsk-Kuznetski",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "113800"
        },
        {
          "id": "3725",
          "name": "Oktjabrski",
          "countryCode": "RUS",
          "district": "Baškortostan",
          "population": "111500"
        },
        {
          "id": "3726",
          "name": "Sergijev Posad",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "111100"
        },
        {
          "id": "3727",
          "name": "Arzamas",
          "countryCode": "RUS",
          "district": "Nizni Novgorod",
          "population": "110700"
        },
        {
          "id": "3728",
          "name": "Kiseljovsk",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "110000"
        },
        {
          "id": "3729",
          "name": "Novotroitsk",
          "countryCode": "RUS",
          "district": "Orenburg",
          "population": "109600"
        },
        {
          "id": "3730",
          "name": "Obninsk",
          "countryCode": "RUS",
          "district": "Kaluga",
          "population": "108300"
        },
        {
          "id": "3731",
          "name": "Kansk",
          "countryCode": "RUS",
          "district": "Krasnojarsk",
          "population": "107400"
        },
        {
          "id": "3732",
          "name": "Glazov",
          "countryCode": "RUS",
          "district": "Udmurtia",
          "population": "106300"
        },
        {
          "id": "3733",
          "name": "Solikamsk",
          "countryCode": "RUS",
          "district": "Perm",
          "population": "106000"
        },
        {
          "id": "3734",
          "name": "Sarapul",
          "countryCode": "RUS",
          "district": "Udmurtia",
          "population": "105700"
        },
        {
          "id": "3735",
          "name": "Ust-Ilimsk",
          "countryCode": "RUS",
          "district": "Irkutsk",
          "population": "105200"
        },
        {
          "id": "3737",
          "name": "MezdureChensk",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "104400"
        },
        {
          "id": "3738",
          "name": "Usolje-Sibirskoje",
          "countryCode": "RUS",
          "district": "Irkutsk",
          "population": "103500"
        },
        {
          "id": "3739",
          "name": "Elista",
          "countryCode": "RUS",
          "district": "Kalmykia",
          "population": "103300"
        },
        {
          "id": "3740",
          "name": "Novošahtinsk",
          "countryCode": "RUS",
          "district": "Rostov-na-Donu",
          "population": "101900"
        },
        {
          "id": "3741",
          "name": "Votkinsk",
          "countryCode": "RUS",
          "district": "Udmurtia",
          "population": "101700"
        },
        {
          "id": "3742",
          "name": "Kyzyl",
          "countryCode": "RUS",
          "district": "Tyva",
          "population": "101100"
        },
        {
          "id": "3743",
          "name": "Serov",
          "countryCode": "RUS",
          "district": "Sverdlovsk",
          "population": "100400"
        },
        {
          "id": "3744",
          "name": "Zelenodolsk",
          "countryCode": "RUS",
          "district": "Tatarstan",
          "population": "100200"
        },
        {
          "id": "3745",
          "name": "Zeleznodoroznyi",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "100100"
        },
        {
          "id": "3746",
          "name": "Kinešma",
          "countryCode": "RUS",
          "district": "Ivanovo",
          "population": "100000"
        },
        {
          "id": "3747",
          "name": "Kuznetsk",
          "countryCode": "RUS",
          "district": "Penza",
          "population": "98200"
        },
        {
          "id": "3748",
          "name": "Uhta",
          "countryCode": "RUS",
          "district": "Komi",
          "population": "98000"
        },
        {
          "id": "3749",
          "name": "Jessentuki",
          "countryCode": "RUS",
          "district": "Stavropol",
          "population": "97900"
        },
        {
          "id": "3750",
          "name": "Tobolsk",
          "countryCode": "RUS",
          "district": "Tjumen",
          "population": "97600"
        },
        {
          "id": "3751",
          "name": "Neftejugansk",
          "countryCode": "RUS",
          "district": "Hanti-Mansia",
          "population": "97400"
        },
        {
          "id": "3752",
          "name": "Bataisk",
          "countryCode": "RUS",
          "district": "Rostov-na-Donu",
          "population": "97300"
        },
        {
          "id": "3753",
          "name": "Nojabrsk",
          "countryCode": "RUS",
          "district": "Yamalin Nenetsia",
          "population": "97300"
        },
        {
          "id": "3754",
          "name": "Balašov",
          "countryCode": "RUS",
          "district": "Saratov",
          "population": "97100"
        },
        {
          "id": "3755",
          "name": "Zeleznogorsk",
          "countryCode": "RUS",
          "district": "Kursk",
          "population": "96900"
        },
        {
          "id": "3756",
          "name": "Zukovski",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "96500"
        },
        {
          "id": "3757",
          "name": "Anzero-Sudzensk",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "96100"
        },
        {
          "id": "3758",
          "name": "Bugulma",
          "countryCode": "RUS",
          "district": "Tatarstan",
          "population": "94100"
        },
        {
          "id": "3759",
          "name": "Zeleznogorsk",
          "countryCode": "RUS",
          "district": "Krasnojarsk",
          "population": "94000"
        },
        {
          "id": "3760",
          "name": "Novouralsk",
          "countryCode": "RUS",
          "district": "Sverdlovsk",
          "population": "93300"
        },
        {
          "id": "3761",
          "name": "Puškin",
          "countryCode": "RUS",
          "district": "Pietari",
          "population": "92900"
        },
        {
          "id": "3762",
          "name": "Vorkuta",
          "countryCode": "RUS",
          "district": "Komi",
          "population": "92600"
        },
        {
          "id": "3763",
          "name": "Derbent",
          "countryCode": "RUS",
          "district": "Dagestan",
          "population": "92300"
        },
        {
          "id": "3764",
          "name": "Kirovo-Chepetsk",
          "countryCode": "RUS",
          "district": "Kirov",
          "population": "91600"
        },
        {
          "id": "3765",
          "name": "Krasnogorsk",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "91000"
        },
        {
          "id": "3766",
          "name": "Klin",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "90000"
        },
        {
          "id": "3767",
          "name": "Chaikovski",
          "countryCode": "RUS",
          "district": "Perm",
          "population": "90000"
        },
        {
          "id": "3768",
          "name": "Novyi Urengoi",
          "countryCode": "RUS",
          "district": "Yamalin Nenetsia",
          "population": "89800"
        },
        {
          "id": "3769",
          "name": "Ho Chi Minh City",
          "countryCode": "VNM",
          "district": "Ho Chi Minh City",
          "population": "3980000"
        },
        {
          "id": "3770",
          "name": "Hanoi",
          "countryCode": "VNM",
          "district": "Hanoi",
          "population": "1410000"
        },
        {
          "id": "3771",
          "name": "Haiphong",
          "countryCode": "VNM",
          "district": "Haiphong",
          "population": "783133"
        },
        {
          "id": "3772",
          "name": "Da Nang",
          "countryCode": "VNM",
          "district": "Quang Nam-Da Nang",
          "population": "382674"
        },
        {
          "id": "3773",
          "name": "Biz Hoa",
          "countryCode": "VNM",
          "district": "Dong Nai",
          "population": "282095"
        },
        {
          "id": "3774",
          "name": "Nha Trang",
          "countryCode": "VNM",
          "district": "Khanh Hoa",
          "population": "221331"
        },
        {
          "id": "3775",
          "name": "Hue",
          "countryCode": "VNM",
          "district": "Thua Thien-Hue",
          "population": "219149"
        },
        {
          "id": "3776",
          "name": "Can Tho",
          "countryCode": "VNM",
          "district": "Can Tho",
          "population": "215587"
        },
        {
          "id": "3777",
          "name": "Cam Pha",
          "countryCode": "VNM",
          "district": "Quang Binh",
          "population": "209086"
        },
        {
          "id": "3778",
          "name": "Nam Dinh",
          "countryCode": "VNM",
          "district": "Nam Ha",
          "population": "171699"
        },
        {
          "id": "3779",
          "name": "Quy Nhon",
          "countryCode": "VNM",
          "district": "Binh Dinh",
          "population": "163385"
        },
        {
          "id": "3780",
          "name": "Vung Tau",
          "countryCode": "VNM",
          "district": "Ba Ria-Vung Tau",
          "population": "145145"
        },
        {
          "id": "3781",
          "name": "Rach Gia",
          "countryCode": "VNM",
          "district": "Kien Giang",
          "population": "141132"
        },
        {
          "id": "3661",
          "name": "Severodvinsk",
          "countryCode": "RUS",
          "district": "Arkangeli",
          "population": "229300"
        },
        {
          "id": "3662",
          "name": "Bijsk",
          "countryCode": "RUS",
          "district": "Altai",
          "population": "225000"
        },
        {
          "id": "3663",
          "name": "Niznekamsk",
          "countryCode": "RUS",
          "district": "Tatarstan",
          "population": "223400"
        },
        {
          "id": "3664",
          "name": "Blagoveštšensk",
          "countryCode": "RUS",
          "district": "Amur",
          "population": "222000"
        },
        {
          "id": "3666",
          "name": "Staryi Oskol",
          "countryCode": "RUS",
          "district": "Belgorod",
          "population": "213800"
        },
        {
          "id": "3667",
          "name": "Zelenograd",
          "countryCode": "RUS",
          "district": "Moscow (City)",
          "population": "207100"
        },
        {
          "id": "3668",
          "name": "Balakovo",
          "countryCode": "RUS",
          "district": "Saratov",
          "population": "206000"
        },
        {
          "id": "3669",
          "name": "Novorossijsk",
          "countryCode": "RUS",
          "district": "Krasnodar",
          "population": "203300"
        },
        {
          "id": "3670",
          "name": "Pihkova",
          "countryCode": "RUS",
          "district": "Pihkova",
          "population": "201500"
        },
        {
          "id": "3671",
          "name": "Zlatoust",
          "countryCode": "RUS",
          "district": "CHeljabinsk",
          "population": "196900"
        },
        {
          "id": "3672",
          "name": "Jakutsk",
          "countryCode": "RUS",
          "district": "Saha (Jakutia)",
          "population": "195400"
        },
        {
          "id": "3673",
          "name": "Podolsk",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "194300"
        },
        {
          "id": "3674",
          "name": "Petropavlovsk-KamChatski",
          "countryCode": "RUS",
          "district": "KamChatka",
          "population": "194100"
        },
        {
          "id": "3675",
          "name": "Kamensk-Uralski",
          "countryCode": "RUS",
          "district": "Sverdlovsk",
          "population": "190600"
        },
        {
          "id": "3676",
          "name": "Engels",
          "countryCode": "RUS",
          "district": "Saratov",
          "population": "189000"
        },
        {
          "id": "3677",
          "name": "Syzran",
          "countryCode": "RUS",
          "district": "Samara",
          "population": "186900"
        },
        {
          "id": "3678",
          "name": "Grozny",
          "countryCode": "RUS",
          "district": "Chechen Republic",
          "population": "186000"
        },
        {
          "id": "3679",
          "name": "Novocherkassk",
          "countryCode": "RUS",
          "district": "Rostov-na-Donu",
          "population": "184400"
        },
        {
          "id": "3680",
          "name": "Berezniki",
          "countryCode": "RUS",
          "district": "Perm",
          "population": "181900"
        },
        {
          "id": "3681",
          "name": "Juzno-Sahalinsk",
          "countryCode": "RUS",
          "district": "Sahalin",
          "population": "179200"
        },
        {
          "id": "3682",
          "name": "Volgodonsk",
          "countryCode": "RUS",
          "district": "Rostov-na-Donu",
          "population": "178200"
        },
        {
          "id": "3683",
          "name": "Abakan",
          "countryCode": "RUS",
          "district": "Hakassia",
          "population": "169200"
        },
        {
          "id": "3684",
          "name": "Maikop",
          "countryCode": "RUS",
          "district": "Adygea",
          "population": "167300"
        },
        {
          "id": "3685",
          "name": "Miass",
          "countryCode": "RUS",
          "district": "Cheljabinsk",
          "population": "166200"
        },
        {
          "id": "3686",
          "name": "Armavir",
          "countryCode": "RUS",
          "district": "Krasnodar",
          "population": "164900"
        },
        {
          "id": "3687",
          "name": "Ljubertsy",
          "countryCode": "RUS",
          "district": "Moskova",
          "population": "163900"
        },
        {
          "id": "3688",
          "name": "Rubtsovsk",
          "countryCode": "RUS",
          "district": "Altai",
          "population": "162600"
        },
        {
          "id": "3689",
          "name": "Kovrov",
          "countryCode": "RUS",
          "district": "Vladimir",
          "population": "159900"
        },
        {
          "id": "3690",
          "name": "Nahodka",
          "countryCode": "RUS",
          "district": "Primorje",
          "population": "157700"
        },
        {
          "id": "3691",
          "name": "Ussurijsk",
          "countryCode": "RUS",
          "district": "Primorje",
          "population": "157300"
        },
        {
          "id": "3692",
          "name": "Salavat",
          "countryCode": "RUS",
          "district": "Republic of Bashkortostan",
          "population": "156800"
        },
        {
          "id": "3693",
          "name": "Mytishchi",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "155700"
        },
        {
          "id": "3694",
          "name": "Kolomna",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "150700"
        },
        {
          "id": "3695",
          "name": "Elektrostal",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "147000"
        },
        {
          "id": "3696",
          "name": "Murom",
          "countryCode": "RUS",
          "district": "Vladimir",
          "population": "142400"
        },
        {
          "id": "3697",
          "name": "Kolpino",
          "countryCode": "RUS",
          "district": "Pietari",
          "population": "141200"
        },
        {
          "id": "3698",
          "name": "Norilsk",
          "countryCode": "RUS",
          "district": "Krasnojarsk",
          "population": "140800"
        },
        {
          "id": "3699",
          "name": "Almetjevsk",
          "countryCode": "RUS",
          "district": "Tatarstan",
          "population": "140700"
        },
        {
          "id": "3700",
          "name": "Novomoskovsk",
          "countryCode": "RUS",
          "district": "Tula",
          "population": "138100"
        },
        {
          "id": "3701",
          "name": "Dimitrovgrad",
          "countryCode": "RUS",
          "district": "Uljanovsk",
          "population": "137000"
        },
        {
          "id": "3702",
          "name": "Pervouralsk",
          "countryCode": "RUS",
          "district": "Sverdlovsk",
          "population": "136100"
        },
        {
          "id": "3703",
          "name": "Himki",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "133700"
        },
        {
          "id": "3704",
          "name": "Balashiha",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "132900"
        },
        {
          "id": "3705",
          "name": "Nevinnomyssk",
          "countryCode": "RUS",
          "district": "Stavropol",
          "population": "132600"
        },
        {
          "id": "3706",
          "name": "Pjatigorsk",
          "countryCode": "RUS",
          "district": "Stavropol",
          "population": "132500"
        },
        {
          "id": "3707",
          "name": "Korolev",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "132400"
        },
        {
          "id": "3708",
          "name": "Serpuhov",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "132000"
        },
        {
          "id": "3709",
          "name": "Odintsovo",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "127400"
        },
        {
          "id": "3710",
          "name": "Orehovo-Zujevo",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "124900"
        },
        {
          "id": "3711",
          "name": "Kamyshin",
          "countryCode": "RUS",
          "district": "Volgograd",
          "population": "124600"
        },
        {
          "id": "3712",
          "name": "Novocheboksarsk",
          "countryCode": "RUS",
          "district": "Chuvashia",
          "population": "123400"
        },
        {
          "id": "3713",
          "name": "Cherkessk",
          "countryCode": "RUS",
          "district": "Karachay-Cherkess Republic",
          "population": "121700"
        },
        {
          "id": "3714",
          "name": "Achinsk",
          "countryCode": "RUS",
          "district": "Krasnojarsk",
          "population": "121600"
        },
        {
          "id": "3715",
          "name": "Magadan",
          "countryCode": "RUS",
          "district": "Magadan",
          "population": "121000"
        },
        {
          "id": "3716",
          "name": "Mitchurinsk",
          "countryCode": "RUS",
          "district": "Tambov",
          "population": "120700"
        },
        {
          "id": "3717",
          "name": "Kislovodsk",
          "countryCode": "RUS",
          "district": "Stavropol",
          "population": "120400"
        },
        {
          "id": "3718",
          "name": "Jelets",
          "countryCode": "RUS",
          "district": "Lipetsk",
          "population": "119400"
        },
        {
          "id": "3719",
          "name": "Seversk",
          "countryCode": "RUS",
          "district": "Tomsk",
          "population": "118600"
        },
        {
          "id": "3720",
          "name": "Noginsk",
          "countryCode": "RUS",
          "district": "Moscow Oblast",
          "population": "117200"
        },
        {
          "id": "3600",
          "name": "Jaroslavl",
          "countryCode": "RUS",
          "district": "Jaroslavl",
          "population": "616700"
        },
        {
          "id": "3601",
          "name": "Habarovsk",
          "countryCode": "RUS",
          "district": "Habarovsk",
          "population": "609400"
        },
        {
          "id": "3602",
          "name": "Vladivostok",
          "countryCode": "RUS",
          "district": "Primorje",
          "population": "606200"
        },
        {
          "id": "3603",
          "name": "Irkutsk",
          "countryCode": "RUS",
          "district": "Irkutsk",
          "population": "593700"
        },
        {
          "id": "3604",
          "name": "Barnaul",
          "countryCode": "RUS",
          "district": "Altai",
          "population": "580100"
        },
        {
          "id": "3605",
          "name": "Novokuznetsk",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "561600"
        },
        {
          "id": "3606",
          "name": "Penza",
          "countryCode": "RUS",
          "district": "Penza",
          "population": "532200"
        },
        {
          "id": "3607",
          "name": "Rjazan",
          "countryCode": "RUS",
          "district": "Rjazan",
          "population": "529900"
        },
        {
          "id": "3608",
          "name": "Orenburg",
          "countryCode": "RUS",
          "district": "Orenburg",
          "population": "523600"
        },
        {
          "id": "3609",
          "name": "Lipetsk",
          "countryCode": "RUS",
          "district": "Lipetsk",
          "population": "521000"
        },
        {
          "id": "3610",
          "name": "Nabereznyje CHelny",
          "countryCode": "RUS",
          "district": "Tatarstan",
          "population": "514700"
        },
        {
          "id": "3611",
          "name": "Tula",
          "countryCode": "RUS",
          "district": "Tula",
          "population": "506100"
        },
        {
          "id": "3612",
          "name": "Tjumen",
          "countryCode": "RUS",
          "district": "Tjumen",
          "population": "503400"
        },
        {
          "id": "3613",
          "name": "Kemerovo",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "492700"
        },
        {
          "id": "3614",
          "name": "Astrahan",
          "countryCode": "RUS",
          "district": "Astrahan",
          "population": "486100"
        },
        {
          "id": "3615",
          "name": "Tomsk",
          "countryCode": "RUS",
          "district": "Tomsk",
          "population": "482100"
        },
        {
          "id": "3616",
          "name": "Kirov",
          "countryCode": "RUS",
          "district": "Kirov",
          "population": "466200"
        },
        {
          "id": "3617",
          "name": "Ivanovo",
          "countryCode": "RUS",
          "district": "Ivanovo",
          "population": "459200"
        },
        {
          "id": "3618",
          "name": "Cheboksary",
          "countryCode": "RUS",
          "district": "Chuvashia",
          "population": "459200"
        },
        {
          "id": "3619",
          "name": "Brjansk",
          "countryCode": "RUS",
          "district": "Brjansk",
          "population": "457400"
        },
        {
          "id": "3620",
          "name": "Tver",
          "countryCode": "RUS",
          "district": "Tver",
          "population": "454900"
        },
        {
          "id": "3621",
          "name": "Kursk",
          "countryCode": "RUS",
          "district": "Kursk",
          "population": "443500"
        },
        {
          "id": "3622",
          "name": "Magnitogorsk",
          "countryCode": "RUS",
          "district": "Cheljabinsk",
          "population": "427900"
        },
        {
          "id": "3623",
          "name": "Kaliningrad",
          "countryCode": "RUS",
          "district": "Kaliningrad",
          "population": "424400"
        },
        {
          "id": "3624",
          "name": "Nizni Tagil",
          "countryCode": "RUS",
          "district": "Sverdlovsk",
          "population": "390900"
        },
        {
          "id": "3625",
          "name": "Murmansk",
          "countryCode": "RUS",
          "district": "Murmansk",
          "population": "376300"
        },
        {
          "id": "3626",
          "name": "Ulan-Ude",
          "countryCode": "RUS",
          "district": "Burjatia",
          "population": "370400"
        },
        {
          "id": "3627",
          "name": "Kurgan",
          "countryCode": "RUS",
          "district": "Kurgan",
          "population": "364700"
        },
        {
          "id": "3628",
          "name": "Arkangeli",
          "countryCode": "RUS",
          "district": "Arkangeli",
          "population": "361800"
        },
        {
          "id": "3629",
          "name": "Sochi",
          "countryCode": "RUS",
          "district": "Krasnodar",
          "population": "358600"
        },
        {
          "id": "3630",
          "name": "Smolensk",
          "countryCode": "RUS",
          "district": "Smolensk",
          "population": "353400"
        },
        {
          "id": "3631",
          "name": "Orjol",
          "countryCode": "RUS",
          "district": "Orjol",
          "population": "344500"
        },
        {
          "id": "3632",
          "name": "Stavropol",
          "countryCode": "RUS",
          "district": "Stavropol",
          "population": "343300"
        },
        {
          "id": "3633",
          "name": "Belgorod",
          "countryCode": "RUS",
          "district": "Belgorod",
          "population": "342000"
        },
        {
          "id": "3634",
          "name": "Kaluga",
          "countryCode": "RUS",
          "district": "Kaluga",
          "population": "339300"
        },
        {
          "id": "3635",
          "name": "Vladimir",
          "countryCode": "RUS",
          "district": "Vladimir",
          "population": "337100"
        },
        {
          "id": "3636",
          "name": "Mahachkala",
          "countryCode": "RUS",
          "district": "Dagestan",
          "population": "332800"
        },
        {
          "id": "3637",
          "name": "Cherepovets",
          "countryCode": "RUS",
          "district": "Vologda",
          "population": "324400"
        },
        {
          "id": "3638",
          "name": "Saransk",
          "countryCode": "RUS",
          "district": "Republic of Mordovia",
          "population": "314800"
        },
        {
          "id": "3639",
          "name": "Tambov",
          "countryCode": "RUS",
          "district": "Tambov",
          "population": "312000"
        },
        {
          "id": "3640",
          "name": "Vladikavkaz",
          "countryCode": "RUS",
          "district": "North Ossetia-Alania",
          "population": "310100"
        },
        {
          "id": "3641",
          "name": "Chita",
          "countryCode": "RUS",
          "district": "Chita",
          "population": "309900"
        },
        {
          "id": "3642",
          "name": "Vologda",
          "countryCode": "RUS",
          "district": "Vologda",
          "population": "302500"
        },
        {
          "id": "3643",
          "name": "Veliki Novgorod",
          "countryCode": "RUS",
          "district": "Novgorod",
          "population": "299500"
        },
        {
          "id": "3644",
          "name": "Komsomolsk-na-Amure",
          "countryCode": "RUS",
          "district": "Habarovsk",
          "population": "291600"
        },
        {
          "id": "3645",
          "name": "Kostroma",
          "countryCode": "RUS",
          "district": "Kostroma",
          "population": "288100"
        },
        {
          "id": "3646",
          "name": "Volzski",
          "countryCode": "RUS",
          "district": "Volgograd",
          "population": "286900"
        },
        {
          "id": "3647",
          "name": "Taganrog",
          "countryCode": "RUS",
          "district": "Rostov-na-Donu",
          "population": "284400"
        },
        {
          "id": "3648",
          "name": "Petroskoi",
          "countryCode": "RUS",
          "district": "Karjala",
          "population": "282100"
        },
        {
          "id": "3649",
          "name": "Bratsk",
          "countryCode": "RUS",
          "district": "Irkutsk",
          "population": "277600"
        },
        {
          "id": "3650",
          "name": "Dzerzinsk",
          "countryCode": "RUS",
          "district": "Nizni Novgorod",
          "population": "277100"
        },
        {
          "id": "3651",
          "name": "Surgut",
          "countryCode": "RUS",
          "district": "Hanti-Mansia",
          "population": "274900"
        },
        {
          "id": "3652",
          "name": "Orsk",
          "countryCode": "RUS",
          "district": "Orenburg",
          "population": "273900"
        },
        {
          "id": "3653",
          "name": "Sterlitamak",
          "countryCode": "RUS",
          "district": "Republic of Bashkortostan",
          "population": "265200"
        },
        {
          "id": "3654",
          "name": "Angarsk",
          "countryCode": "RUS",
          "district": "Irkutsk",
          "population": "264700"
        },
        {
          "id": "3655",
          "name": "Yoshkar-Ola",
          "countryCode": "RUS",
          "district": "Mari El Republic,",
          "population": "249200"
        },
        {
          "id": "3656",
          "name": "Rybinsk",
          "countryCode": "RUS",
          "district": "Jaroslavl",
          "population": "239600"
        },
        {
          "id": "3657",
          "name": "Prokopjevsk",
          "countryCode": "RUS",
          "district": "Kemerovo",
          "population": "237300"
        },
        {
          "id": "3658",
          "name": "Niznevartovsk",
          "countryCode": "RUS",
          "district": "Hanti-Mansia",
          "population": "233900"
        },
        {
          "id": "3659",
          "name": "Nalchik",
          "countryCode": "RUS",
          "district": "Kabardi-Balkaria",
          "population": "233400"
        },
        {
          "id": "3660",
          "name": "Syktyvkar",
          "countryCode": "RUS",
          "district": "Komi",
          "population": "229700"
        },
        {
          "id": "3540",
          "name": "Maracakbo",
          "countryCode": "VEN",
          "district": "Zulia",
          "population": "1304776"
        },
        {
          "id": "3541",
          "name": "Barquisimeto",
          "countryCode": "VEN",
          "district": "Lara",
          "population": "877239"
        },
        {
          "id": "3542",
          "name": "Valencia",
          "countryCode": "VEN",
          "district": "Carabobo",
          "population": "794246"
        },
        {
          "id": "3543",
          "name": "Ciudad Guayana",
          "countryCode": "VEN",
          "district": "Bolkvar",
          "population": "663713"
        },
        {
          "id": "3544",
          "name": "Petare",
          "countryCode": "VEN",
          "district": "Miranda",
          "population": "488868"
        },
        {
          "id": "3545",
          "name": "Maracay",
          "countryCode": "VEN",
          "district": "Aragua",
          "population": "444443"
        },
        {
          "id": "3546",
          "name": "Barcelona",
          "countryCode": "VEN",
          "district": "Anzoitegui",
          "population": "322267"
        },
        {
          "id": "3547",
          "name": "Maturkn",
          "countryCode": "VEN",
          "district": "Monagas",
          "population": "319726"
        },
        {
          "id": "3548",
          "name": "San Cristóbal",
          "countryCode": "VEN",
          "district": "Tichira",
          "population": "319373"
        },
        {
          "id": "3549",
          "name": "Ciudad Bolkvar",
          "countryCode": "VEN",
          "district": "Bolkvar",
          "population": "301107"
        },
        {
          "id": "3550",
          "name": "Cumani",
          "countryCode": "VEN",
          "district": "Sucre",
          "population": "293105"
        },
        {
          "id": "3551",
          "name": "Mérida",
          "countryCode": "VEN",
          "district": "Mérida",
          "population": "224887"
        },
        {
          "id": "3552",
          "name": "Cabimas",
          "countryCode": "VEN",
          "district": "Zulia",
          "population": "221329"
        },
        {
          "id": "3553",
          "name": "Barinas",
          "countryCode": "VEN",
          "district": "Barinas",
          "population": "217831"
        },
        {
          "id": "3554",
          "name": "Turmero",
          "countryCode": "VEN",
          "district": "Aragua",
          "population": "217499"
        },
        {
          "id": "3555",
          "name": "Baruta",
          "countryCode": "VEN",
          "district": "Miranda",
          "population": "207290"
        },
        {
          "id": "3556",
          "name": "Puerto Cabello",
          "countryCode": "VEN",
          "district": "Carabobo",
          "population": "187722"
        },
        {
          "id": "3557",
          "name": "Santa Ana de Coro",
          "countryCode": "VEN",
          "district": "Falcón",
          "population": "185766"
        },
        {
          "id": "3558",
          "name": "Los Teques",
          "countryCode": "VEN",
          "district": "Miranda",
          "population": "178784"
        },
        {
          "id": "3559",
          "name": "Punto Fijo",
          "countryCode": "VEN",
          "district": "Falcón",
          "population": "167215"
        },
        {
          "id": "3560",
          "name": "Guarenas",
          "countryCode": "VEN",
          "district": "Miranda",
          "population": "165889"
        },
        {
          "id": "3561",
          "name": "Acarigua",
          "countryCode": "VEN",
          "district": "Portuguesa",
          "population": "158954"
        },
        {
          "id": "3562",
          "name": "Puerto La Cruz",
          "countryCode": "VEN",
          "district": "Anzoitegui",
          "population": "155700"
        },
        {
          "id": "3563",
          "name": "Ciudad Losada",
          "countryCode": "VEN",
          "district": "",
          "population": "134501"
        },
        {
          "id": "3564",
          "name": "Guacara",
          "countryCode": "VEN",
          "district": "Carabobo",
          "population": "131334"
        },
        {
          "id": "3565",
          "name": "Valera",
          "countryCode": "VEN",
          "district": "Trujillo",
          "population": "130281"
        },
        {
          "id": "3566",
          "name": "Guanare",
          "countryCode": "VEN",
          "district": "Portuguesa",
          "population": "125621"
        },
        {
          "id": "3567",
          "name": "Carspano",
          "countryCode": "VEN",
          "district": "Sucre",
          "population": "119639"
        },
        {
          "id": "3568",
          "name": "Catia La Mar",
          "countryCode": "VEN",
          "district": "Distrito Federal",
          "population": "117012"
        },
        {
          "id": "3569",
          "name": "El Tigre",
          "countryCode": "VEN",
          "district": "Anzoitegui",
          "population": "116256"
        },
        {
          "id": "3570",
          "name": "Guatire",
          "countryCode": "VEN",
          "district": "Miranda",
          "population": "109121"
        },
        {
          "id": "3571",
          "name": "Calabozo",
          "countryCode": "VEN",
          "district": "Guirico",
          "population": "107146"
        },
        {
          "id": "3572",
          "name": "Pozuelos",
          "countryCode": "VEN",
          "district": "Anzoitegui",
          "population": "105690"
        },
        {
          "id": "3573",
          "name": "Ciudad Ojeda",
          "countryCode": "VEN",
          "district": "Zulia",
          "population": "99354"
        },
        {
          "id": "3574",
          "name": "Ocumare del Tuy",
          "countryCode": "VEN",
          "district": "Miranda",
          "population": "97168"
        },
        {
          "id": "3575",
          "name": "Valle de la Pascua",
          "countryCode": "VEN",
          "district": "Guirico",
          "population": "95927"
        },
        {
          "id": "3576",
          "name": "Araure",
          "countryCode": "VEN",
          "district": "Portuguesa",
          "population": "94269"
        },
        {
          "id": "3577",
          "name": "San Fernando de Apure",
          "countryCode": "VEN",
          "district": "Apure",
          "population": "93809"
        },
        {
          "id": "3578",
          "name": "San Felipe",
          "countryCode": "VEN",
          "district": "Yaracuy",
          "population": "90940"
        },
        {
          "id": "3579",
          "name": "El Limón",
          "countryCode": "VEN",
          "district": "Aragua",
          "population": "90000"
        },
        {
          "id": "3580",
          "name": "Moscow",
          "countryCode": "RUS",
          "district": "Moscow (City)",
          "population": "8389200"
        },
        {
          "id": "3581",
          "name": "St Petersburg",
          "countryCode": "RUS",
          "district": "Pietari",
          "population": "4694000"
        },
        {
          "id": "3582",
          "name": "Novosibirsk",
          "countryCode": "RUS",
          "district": "Novosibirsk",
          "population": "1398800"
        },
        {
          "id": "3583",
          "name": "Nizni Novgorod",
          "countryCode": "RUS",
          "district": "Nizni Novgorod",
          "population": "1357000"
        },
        {
          "id": "3584",
          "name": "Jekaterinburg",
          "countryCode": "RUS",
          "district": "Sverdlovsk",
          "population": "1266300"
        },
        {
          "id": "3585",
          "name": "Samara",
          "countryCode": "RUS",
          "district": "Samara",
          "population": "1156100"
        },
        {
          "id": "3586",
          "name": "Omsk",
          "countryCode": "RUS",
          "district": "Omsk",
          "population": "1148900"
        },
        {
          "id": "3587",
          "name": "Kazan",
          "countryCode": "RUS",
          "district": "Tatarstan",
          "population": "1101000"
        },
        {
          "id": "3588",
          "name": "Ufa",
          "countryCode": "RUS",
          "district": "Republic of Bashkortostan",
          "population": "1091200"
        },
        {
          "id": "3589",
          "name": "Cheljabinsk",
          "countryCode": "RUS",
          "district": "Cheljabinsk",
          "population": "1083200"
        },
        {
          "id": "3590",
          "name": "Rostov-na-Donu",
          "countryCode": "RUS",
          "district": "Rostov-na-Donu",
          "population": "1012700"
        },
        {
          "id": "3591",
          "name": "Perm",
          "countryCode": "RUS",
          "district": "Perm",
          "population": "1009700"
        },
        {
          "id": "3592",
          "name": "Volgograd",
          "countryCode": "RUS",
          "district": "Volgograd",
          "population": "993400"
        },
        {
          "id": "3593",
          "name": "Voronez",
          "countryCode": "RUS",
          "district": "Voronez",
          "population": "907700"
        },
        {
          "id": "3594",
          "name": "Krasnojarsk",
          "countryCode": "RUS",
          "district": "Krasnojarsk",
          "population": "875500"
        },
        {
          "id": "3595",
          "name": "Saratov",
          "countryCode": "RUS",
          "district": "Saratov",
          "population": "874000"
        },
        {
          "id": "3596",
          "name": "Toljatti",
          "countryCode": "RUS",
          "district": "Samara",
          "population": "722900"
        },
        {
          "id": "3597",
          "name": "Uljanovsk",
          "countryCode": "RUS",
          "district": "Uljanovsk",
          "population": "667400"
        },
        {
          "id": "3598",
          "name": "Izevsk",
          "countryCode": "RUS",
          "district": "Udmurtia",
          "population": "652800"
        },
        {
          "id": "3599",
          "name": "Krasnodar",
          "countryCode": "RUS",
          "district": "Krasnodar",
          "population": "639000"
        },
        {
          "id": "3480",
          "name": "Uman",
          "countryCode": "UKR",
          "district": "Cherkasy",
          "population": "90000"
        },
        {
          "id": "3481",
          "name": "Brovary",
          "countryCode": "UKR",
          "district": "Kyiv",
          "population": "89000"
        },
        {
          "id": "3482",
          "name": "Mukacheve",
          "countryCode": "UKR",
          "district": "Taka-Karpatia",
          "population": "89000"
        },
        {
          "id": "3483",
          "name": "Budapest",
          "countryCode": "HUN",
          "district": "Budapest",
          "population": "1811552"
        },
        {
          "id": "3484",
          "name": "Debrecen",
          "countryCode": "HUN",
          "district": "HajdР•вЂє-Bihar",
          "population": "203648"
        },
        {
          "id": "3485",
          "name": "Miskolc",
          "countryCode": "HUN",
          "district": "Borsod-Abasj-Zemplén",
          "population": "172357"
        },
        {
          "id": "3486",
          "name": "Szeged",
          "countryCode": "HUN",
          "district": "Csongrid",
          "population": "158158"
        },
        {
          "id": "3487",
          "name": "Pécs",
          "countryCode": "HUN",
          "district": "Baranya",
          "population": "157332"
        },
        {
          "id": "3488",
          "name": "Györ",
          "countryCode": "HUN",
          "district": "Györ-Moson-Sopron",
          "population": "127119"
        },
        {
          "id": "3489",
          "name": "Nyiregyhiza",
          "countryCode": "HUN",
          "district": "Szabolcs-Szatmir-Ber",
          "population": "112419"
        },
        {
          "id": "3490",
          "name": "Kecskemét",
          "countryCode": "HUN",
          "district": "Bics-Kiskun",
          "population": "105606"
        },
        {
          "id": "3491",
          "name": "Székesfehérvir",
          "countryCode": "HUN",
          "district": "Fejér",
          "population": "105119"
        },
        {
          "id": "3492",
          "name": "Montevideo",
          "countryCode": "URY",
          "district": "Montevideo",
          "population": "1236000"
        },
        {
          "id": "3493",
          "name": "Nouméa",
          "countryCode": "NCL",
          "district": "",
          "population": "76293"
        },
        {
          "id": "3494",
          "name": "Auckland",
          "countryCode": "NZL",
          "district": "Auckland",
          "population": "381800"
        },
        {
          "id": "3495",
          "name": "Christchurch",
          "countryCode": "NZL",
          "district": "Canterbury",
          "population": "324200"
        },
        {
          "id": "3496",
          "name": "Manukau",
          "countryCode": "NZL",
          "district": "Auckland",
          "population": "281800"
        },
        {
          "id": "3497",
          "name": "North Shore",
          "countryCode": "NZL",
          "district": "Auckland",
          "population": "187700"
        },
        {
          "id": "3498",
          "name": "Waitakere",
          "countryCode": "NZL",
          "district": "Auckland",
          "population": "170600"
        },
        {
          "id": "3499",
          "name": "Wellington",
          "countryCode": "NZL",
          "district": "Wellington",
          "population": "166700"
        },
        {
          "id": "3500",
          "name": "Dunedin",
          "countryCode": "NZL",
          "district": "Dunedin",
          "population": "119600"
        },
        {
          "id": "3501",
          "name": "Hamilton",
          "countryCode": "NZL",
          "district": "Hamilton",
          "population": "117100"
        },
        {
          "id": "3502",
          "name": "Lower Hutt",
          "countryCode": "NZL",
          "district": "Wellington",
          "population": "98100"
        },
        {
          "id": "3503",
          "name": "Toskent",
          "countryCode": "UZB",
          "district": "Toskent Shahri",
          "population": "2117500"
        },
        {
          "id": "3504",
          "name": "Namangan",
          "countryCode": "UZB",
          "district": "Namangan",
          "population": "370500"
        },
        {
          "id": "3505",
          "name": "Samarkand",
          "countryCode": "UZB",
          "district": "Samarkand",
          "population": "361800"
        },
        {
          "id": "3506",
          "name": "Andijon",
          "countryCode": "UZB",
          "district": "Andijon",
          "population": "318600"
        },
        {
          "id": "3507",
          "name": "Buhoro",
          "countryCode": "UZB",
          "district": "Buhoro",
          "population": "237100"
        },
        {
          "id": "3508",
          "name": "Karsi",
          "countryCode": "UZB",
          "district": "Qashqadaryo",
          "population": "194100"
        },
        {
          "id": "3509",
          "name": "Nukus",
          "countryCode": "UZB",
          "district": "Karakalpakistan",
          "population": "194100"
        },
        {
          "id": "3510",
          "name": "Kükon",
          "countryCode": "UZB",
          "district": "Fargona",
          "population": "190100"
        },
        {
          "id": "3511",
          "name": "Fargona",
          "countryCode": "UZB",
          "district": "Fargona",
          "population": "180500"
        },
        {
          "id": "3512",
          "name": "Circik",
          "countryCode": "UZB",
          "district": "Toskent",
          "population": "146400"
        },
        {
          "id": "3513",
          "name": "Margilon",
          "countryCode": "UZB",
          "district": "Fargona",
          "population": "140800"
        },
        {
          "id": "3515",
          "name": "Angren",
          "countryCode": "UZB",
          "district": "Toskent",
          "population": "128000"
        },
        {
          "id": "3516",
          "name": "Cizah",
          "countryCode": "UZB",
          "district": "Cizah",
          "population": "124800"
        },
        {
          "id": "3517",
          "name": "Navoi",
          "countryCode": "UZB",
          "district": "Navoi",
          "population": "116300"
        },
        {
          "id": "3518",
          "name": "Olmalik",
          "countryCode": "UZB",
          "district": "Toskent",
          "population": "114900"
        },
        {
          "id": "3519",
          "name": "Termiz",
          "countryCode": "UZB",
          "district": "Surkhondaryo",
          "population": "109500"
        },
        {
          "id": "3520",
          "name": "Minsk",
          "countryCode": "BLR",
          "district": "Horad Minsk",
          "population": "1674000"
        },
        {
          "id": "3521",
          "name": "Gomel",
          "countryCode": "BLR",
          "district": "Gomel",
          "population": "475000"
        },
        {
          "id": "3522",
          "name": "Mogiljov",
          "countryCode": "BLR",
          "district": "Mogiljov",
          "population": "356000"
        },
        {
          "id": "3523",
          "name": "Vitebsk",
          "countryCode": "BLR",
          "district": "Vitebsk",
          "population": "340000"
        },
        {
          "id": "3524",
          "name": "Grodno",
          "countryCode": "BLR",
          "district": "Grodno",
          "population": "302000"
        },
        {
          "id": "3525",
          "name": "Brest",
          "countryCode": "BLR",
          "district": "Brest",
          "population": "286000"
        },
        {
          "id": "3526",
          "name": "Bobruisk",
          "countryCode": "BLR",
          "district": "Mogiljov",
          "population": "221000"
        },
        {
          "id": "3527",
          "name": "BaranoviChi",
          "countryCode": "BLR",
          "district": "Brest",
          "population": "167000"
        },
        {
          "id": "3528",
          "name": "Borisov",
          "countryCode": "BLR",
          "district": "Minsk",
          "population": "151000"
        },
        {
          "id": "3529",
          "name": "Pinsk",
          "countryCode": "BLR",
          "district": "Brest",
          "population": "130000"
        },
        {
          "id": "3530",
          "name": "Orsha",
          "countryCode": "BLR",
          "district": "Vitebsk",
          "population": "124000"
        },
        {
          "id": "3531",
          "name": "Mozyr",
          "countryCode": "BLR",
          "district": "Gomel",
          "population": "110000"
        },
        {
          "id": "3532",
          "name": "Novopolotsk",
          "countryCode": "BLR",
          "district": "Vitebsk",
          "population": "106000"
        },
        {
          "id": "3533",
          "name": "Lida",
          "countryCode": "BLR",
          "district": "Grodno",
          "population": "101000"
        },
        {
          "id": "3534",
          "name": "Soligorsk",
          "countryCode": "BLR",
          "district": "Minsk",
          "population": "101000"
        },
        {
          "id": "3535",
          "name": "Molodechno",
          "countryCode": "BLR",
          "district": "Minsk",
          "population": "97000"
        },
        {
          "id": "3536",
          "name": "Mata-Utu",
          "countryCode": "WLF",
          "district": "Wallis",
          "population": "1137"
        },
        {
          "id": "3537",
          "name": "Port-Vila",
          "countryCode": "VUT",
          "district": "Shefa",
          "population": "33700"
        },
        {
          "id": "3538",
          "name": "Citta del Vaticano",
          "countryCode": "VAT",
          "district": "",
          "population": "455"
        },
        {
          "id": "3539",
          "name": "Caracas",
          "countryCode": "VEN",
          "district": "Distrito Federal",
          "population": "1975294"
        },
        {
          "id": "3419",
          "name": "Ashgabat",
          "countryCode": "TKM",
          "district": "Ahal",
          "population": "540600"
        },
        {
          "id": "3420",
          "name": "Chärjew",
          "countryCode": "TKM",
          "district": "Lebap",
          "population": "189200"
        },
        {
          "id": "3421",
          "name": "Dashhowuz",
          "countryCode": "TKM",
          "district": "Dashhowuz",
          "population": "141800"
        },
        {
          "id": "3422",
          "name": "Mary",
          "countryCode": "TKM",
          "district": "Mary",
          "population": "101000"
        },
        {
          "id": "3423",
          "name": "Cockburn Town",
          "countryCode": "TCA",
          "district": "Grand Turk",
          "population": "4800"
        },
        {
          "id": "3424",
          "name": "Funafuti",
          "countryCode": "TUV",
          "district": "Funafuti",
          "population": "4600"
        },
        {
          "id": "3425",
          "name": "Kampala",
          "countryCode": "UGA",
          "district": "Central",
          "population": "890800"
        },
        {
          "id": "3426",
          "name": "Kyiv",
          "countryCode": "UKR",
          "district": "Kyiv",
          "population": "2624000"
        },
        {
          "id": "3427",
          "name": "Harkova [Harkiv]",
          "countryCode": "UKR",
          "district": "Harkova",
          "population": "1500000"
        },
        {
          "id": "3428",
          "name": "Dnipropetrovsk",
          "countryCode": "UKR",
          "district": "Dnipropetrovsk",
          "population": "1103000"
        },
        {
          "id": "3429",
          "name": "Donetsk",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "1050000"
        },
        {
          "id": "3430",
          "name": "Odesa",
          "countryCode": "UKR",
          "district": "Odesa",
          "population": "1011000"
        },
        {
          "id": "3431",
          "name": "Zaporizzja",
          "countryCode": "UKR",
          "district": "Zaporizzja",
          "population": "848000"
        },
        {
          "id": "3432",
          "name": "Lviv",
          "countryCode": "UKR",
          "district": "Lviv",
          "population": "788000"
        },
        {
          "id": "3433",
          "name": "Kryvyi Rig",
          "countryCode": "UKR",
          "district": "Dnipropetrovsk",
          "population": "703000"
        },
        {
          "id": "3434",
          "name": "Mykolajiv",
          "countryCode": "UKR",
          "district": "Mykolajiv",
          "population": "508000"
        },
        {
          "id": "3435",
          "name": "Mariupol",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "490000"
        },
        {
          "id": "3436",
          "name": "Lugansk",
          "countryCode": "UKR",
          "district": "Lugansk",
          "population": "469000"
        },
        {
          "id": "3437",
          "name": "Vinnytsja",
          "countryCode": "UKR",
          "district": "Vinnytsja",
          "population": "391000"
        },
        {
          "id": "3438",
          "name": "Makijivka",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "384000"
        },
        {
          "id": "3439",
          "name": "Herson",
          "countryCode": "UKR",
          "district": "Herson",
          "population": "353000"
        },
        {
          "id": "3440",
          "name": "Sevastopol",
          "countryCode": "UKR",
          "district": "Krim",
          "population": "348000"
        },
        {
          "id": "3441",
          "name": "Simferopol",
          "countryCode": "UKR",
          "district": "Krim",
          "population": "339000"
        },
        {
          "id": "3442",
          "name": "Pultava [Poltava]",
          "countryCode": "UKR",
          "district": "Pultava",
          "population": "313000"
        },
        {
          "id": "3443",
          "name": "Chernigiv",
          "countryCode": "UKR",
          "district": "Chernigiv",
          "population": "313000"
        },
        {
          "id": "3444",
          "name": "Cherkasy",
          "countryCode": "UKR",
          "district": "Cherkasy",
          "population": "309000"
        },
        {
          "id": "3445",
          "name": "Gorlivka",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "299000"
        },
        {
          "id": "3446",
          "name": "Zytomyr",
          "countryCode": "UKR",
          "district": "Zytomyr",
          "population": "297000"
        },
        {
          "id": "3447",
          "name": "Sumy",
          "countryCode": "UKR",
          "district": "Sumy",
          "population": "294000"
        },
        {
          "id": "3448",
          "name": "Dniprodzerzynsk",
          "countryCode": "UKR",
          "district": "Dnipropetrovsk",
          "population": "270000"
        },
        {
          "id": "3449",
          "name": "Kirovograd",
          "countryCode": "UKR",
          "district": "Kirovograd",
          "population": "265000"
        },
        {
          "id": "3450",
          "name": "Hmelnytskyi",
          "countryCode": "UKR",
          "district": "Hmelnytskyi",
          "population": "262000"
        },
        {
          "id": "3451",
          "name": "Chernivtsi",
          "countryCode": "UKR",
          "district": "Chernivtsi",
          "population": "259000"
        },
        {
          "id": "3452",
          "name": "Rivne",
          "countryCode": "UKR",
          "district": "Rivne",
          "population": "245000"
        },
        {
          "id": "3453",
          "name": "Kremenchuk",
          "countryCode": "UKR",
          "district": "Pultava",
          "population": "239000"
        },
        {
          "id": "3454",
          "name": "Ivano-Frankivsk",
          "countryCode": "UKR",
          "district": "Ivano-Frankivsk",
          "population": "237000"
        },
        {
          "id": "3455",
          "name": "Ternopil",
          "countryCode": "UKR",
          "district": "Ternopil",
          "population": "236000"
        },
        {
          "id": "3456",
          "name": "Lutsk",
          "countryCode": "UKR",
          "district": "Volynia",
          "population": "217000"
        },
        {
          "id": "3457",
          "name": "Bila Tserkva",
          "countryCode": "UKR",
          "district": "Kyiv",
          "population": "215000"
        },
        {
          "id": "3458",
          "name": "Kramatorsk",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "186000"
        },
        {
          "id": "3459",
          "name": "Melitopol",
          "countryCode": "UKR",
          "district": "Zaporizzja",
          "population": "169000"
        },
        {
          "id": "3460",
          "name": "Kerch",
          "countryCode": "UKR",
          "district": "Krim",
          "population": "162000"
        },
        {
          "id": "3461",
          "name": "Nikopol",
          "countryCode": "UKR",
          "district": "Dnipropetrovsk",
          "population": "149000"
        },
        {
          "id": "3462",
          "name": "Berdjansk",
          "countryCode": "UKR",
          "district": "Zaporizzja",
          "population": "130000"
        },
        {
          "id": "3463",
          "name": "Pavlograd",
          "countryCode": "UKR",
          "district": "Dnipropetrovsk",
          "population": "127000"
        },
        {
          "id": "3464",
          "name": "Sjeverodonetsk",
          "countryCode": "UKR",
          "district": "Lugansk",
          "population": "127000"
        },
        {
          "id": "3465",
          "name": "Slovjansk",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "127000"
        },
        {
          "id": "3466",
          "name": "Uzgorod",
          "countryCode": "UKR",
          "district": "Taka-Karpatia",
          "population": "127000"
        },
        {
          "id": "3467",
          "name": "Alchevsk",
          "countryCode": "UKR",
          "district": "Lugansk",
          "population": "119000"
        },
        {
          "id": "3468",
          "name": "Lysychansk",
          "countryCode": "UKR",
          "district": "Lugansk",
          "population": "116000"
        },
        {
          "id": "3469",
          "name": "Jevpatorija",
          "countryCode": "UKR",
          "district": "Krim",
          "population": "112000"
        },
        {
          "id": "3470",
          "name": "Kamjanets-Podilskyi",
          "countryCode": "UKR",
          "district": "Hmelnytskyi",
          "population": "109000"
        },
        {
          "id": "3471",
          "name": "Jenakijeve",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "105000"
        },
        {
          "id": "3472",
          "name": "Krasnyi Luch",
          "countryCode": "UKR",
          "district": "Lugansk",
          "population": "101000"
        },
        {
          "id": "3473",
          "name": "Stahanov",
          "countryCode": "UKR",
          "district": "Lugansk",
          "population": "101000"
        },
        {
          "id": "3474",
          "name": "Oleksandrija",
          "countryCode": "UKR",
          "district": "Kirovograd",
          "population": "99000"
        },
        {
          "id": "3475",
          "name": "Konotop",
          "countryCode": "UKR",
          "district": "Sumy",
          "population": "96000"
        },
        {
          "id": "3476",
          "name": "Kostjantynivka",
          "countryCode": "UKR",
          "district": "Donetsk",
          "population": "95000"
        },
        {
          "id": "3477",
          "name": "Berdychiv",
          "countryCode": "UKR",
          "district": "Zytomyr",
          "population": "90000"
        },
        {
          "id": "3478",
          "name": "Izmajil",
          "countryCode": "UKR",
          "district": "Odesa",
          "population": "90000"
        },
        {
          "id": "3358",
          "name": "Ankara",
          "countryCode": "TUR",
          "district": "Ankara",
          "population": "3038159"
        },
        {
          "id": "3359",
          "name": "Izmir",
          "countryCode": "TUR",
          "district": "Izmir",
          "population": "2130359"
        },
        {
          "id": "3360",
          "name": "Adana",
          "countryCode": "TUR",
          "district": "Adana",
          "population": "1131198"
        },
        {
          "id": "3361",
          "name": "Bursa",
          "countryCode": "TUR",
          "district": "Bursa",
          "population": "1095842"
        },
        {
          "id": "3362",
          "name": "Gaziantep",
          "countryCode": "TUR",
          "district": "Gaziantep",
          "population": "789056"
        },
        {
          "id": "3363",
          "name": "Konya",
          "countryCode": "TUR",
          "district": "Konya",
          "population": "628364"
        },
        {
          "id": "3364",
          "name": "Mersin (Ieel)",
          "countryCode": "TUR",
          "district": "Ieel",
          "population": "587212"
        },
        {
          "id": "3365",
          "name": "Antalya",
          "countryCode": "TUR",
          "district": "Antalya",
          "population": "564914"
        },
        {
          "id": "3366",
          "name": "Diyarbakir",
          "countryCode": "TUR",
          "district": "Diyarbakir",
          "population": "479884"
        },
        {
          "id": "3367",
          "name": "Kayseri",
          "countryCode": "TUR",
          "district": "Kayseri",
          "population": "475657"
        },
        {
          "id": "3368",
          "name": "Eskisehir",
          "countryCode": "TUR",
          "district": "Eskisehir",
          "population": "470781"
        },
        {
          "id": "3369",
          "name": "Sanliurfa",
          "countryCode": "TUR",
          "district": "Sanliurfa",
          "population": "405905"
        },
        {
          "id": "3370",
          "name": "Samsun",
          "countryCode": "TUR",
          "district": "Samsun",
          "population": "339871"
        },
        {
          "id": "3371",
          "name": "Malatya",
          "countryCode": "TUR",
          "district": "Malatya",
          "population": "330312"
        },
        {
          "id": "3372",
          "name": "Gebze",
          "countryCode": "TUR",
          "district": "Kocaeli",
          "population": "264170"
        },
        {
          "id": "3373",
          "name": "Denizli",
          "countryCode": "TUR",
          "district": "Denizli",
          "population": "253848"
        },
        {
          "id": "3374",
          "name": "Sivas",
          "countryCode": "TUR",
          "district": "Sivas",
          "population": "246642"
        },
        {
          "id": "3375",
          "name": "Erzurum",
          "countryCode": "TUR",
          "district": "Erzurum",
          "population": "246535"
        },
        {
          "id": "3376",
          "name": "Tarsus",
          "countryCode": "TUR",
          "district": "Adana",
          "population": "246206"
        },
        {
          "id": "3377",
          "name": "Kahramanmaras",
          "countryCode": "TUR",
          "district": "Kahramanmaras",
          "population": "245772"
        },
        {
          "id": "3378",
          "name": "Elazig",
          "countryCode": "TUR",
          "district": "Elazig",
          "population": "228815"
        },
        {
          "id": "3379",
          "name": "Van",
          "countryCode": "TUR",
          "district": "Van",
          "population": "219319"
        },
        {
          "id": "3380",
          "name": "Sultanbeyli",
          "countryCode": "TUR",
          "district": "Istanbul",
          "population": "211068"
        },
        {
          "id": "3381",
          "name": "Izmit (Kocaeli)",
          "countryCode": "TUR",
          "district": "Kocaeli",
          "population": "210068"
        },
        {
          "id": "3382",
          "name": "Manisa",
          "countryCode": "TUR",
          "district": "Manisa",
          "population": "207148"
        },
        {
          "id": "3383",
          "name": "Batman",
          "countryCode": "TUR",
          "district": "Batman",
          "population": "203793"
        },
        {
          "id": "3384",
          "name": "Balikesir",
          "countryCode": "TUR",
          "district": "Balikesir",
          "population": "196382"
        },
        {
          "id": "3385",
          "name": "Sakarya (Adapazari)",
          "countryCode": "TUR",
          "district": "Sakarya",
          "population": "190641"
        },
        {
          "id": "3386",
          "name": "Iskenderun",
          "countryCode": "TUR",
          "district": "Hatay",
          "population": "153022"
        },
        {
          "id": "3387",
          "name": "Osmaniye",
          "countryCode": "TUR",
          "district": "Osmaniye",
          "population": "146003"
        },
        {
          "id": "3388",
          "name": "Eorum",
          "countryCode": "TUR",
          "district": "Eorum",
          "population": "145495"
        },
        {
          "id": "3389",
          "name": "Kütahya",
          "countryCode": "TUR",
          "district": "Kütahya",
          "population": "144761"
        },
        {
          "id": "3390",
          "name": "Hatay (Antakya)",
          "countryCode": "TUR",
          "district": "Hatay",
          "population": "143982"
        },
        {
          "id": "3391",
          "name": "Kirikkale",
          "countryCode": "TUR",
          "district": "Kirikkale",
          "population": "142044"
        },
        {
          "id": "3392",
          "name": "Adiyaman",
          "countryCode": "TUR",
          "district": "Adiyaman",
          "population": "141529"
        },
        {
          "id": "3393",
          "name": "Trabzon",
          "countryCode": "TUR",
          "district": "Trabzon",
          "population": "138234"
        },
        {
          "id": "3394",
          "name": "Ordu",
          "countryCode": "TUR",
          "district": "Ordu",
          "population": "133642"
        },
        {
          "id": "3395",
          "name": "Aydin",
          "countryCode": "TUR",
          "district": "Aydin",
          "population": "128651"
        },
        {
          "id": "3396",
          "name": "Usak",
          "countryCode": "TUR",
          "district": "Usak",
          "population": "128162"
        },
        {
          "id": "3397",
          "name": "Edirne",
          "countryCode": "TUR",
          "district": "Edirne",
          "population": "123383"
        },
        {
          "id": "3398",
          "name": "Eorlu",
          "countryCode": "TUR",
          "district": "Tekirdag",
          "population": "123300"
        },
        {
          "id": "3399",
          "name": "Isparta",
          "countryCode": "TUR",
          "district": "Isparta",
          "population": "121911"
        },
        {
          "id": "3400",
          "name": "Karabük",
          "countryCode": "TUR",
          "district": "Karabük",
          "population": "118285"
        },
        {
          "id": "3401",
          "name": "Kilis",
          "countryCode": "TUR",
          "district": "Kilis",
          "population": "118245"
        },
        {
          "id": "3402",
          "name": "Alanya",
          "countryCode": "TUR",
          "district": "Antalya",
          "population": "117300"
        },
        {
          "id": "3403",
          "name": "Kiziltepe",
          "countryCode": "TUR",
          "district": "Mardin",
          "population": "112000"
        },
        {
          "id": "3404",
          "name": "Zonguldak",
          "countryCode": "TUR",
          "district": "Zonguldak",
          "population": "111542"
        },
        {
          "id": "3405",
          "name": "Siirt",
          "countryCode": "TUR",
          "district": "Siirt",
          "population": "107100"
        },
        {
          "id": "3406",
          "name": "Viransehir",
          "countryCode": "TUR",
          "district": "Sanliurfa",
          "population": "106400"
        },
        {
          "id": "3407",
          "name": "Tekirdag",
          "countryCode": "TUR",
          "district": "Tekirdag",
          "population": "106077"
        },
        {
          "id": "3408",
          "name": "Karaman",
          "countryCode": "TUR",
          "district": "Karaman",
          "population": "104200"
        },
        {
          "id": "3409",
          "name": "Afyon",
          "countryCode": "TUR",
          "district": "Afyon",
          "population": "103984"
        },
        {
          "id": "3410",
          "name": "Aksaray",
          "countryCode": "TUR",
          "district": "Aksaray",
          "population": "102681"
        },
        {
          "id": "3411",
          "name": "Ceyhan",
          "countryCode": "TUR",
          "district": "Adana",
          "population": "102412"
        },
        {
          "id": "3412",
          "name": "Erzincan",
          "countryCode": "TUR",
          "district": "Erzincan",
          "population": "102304"
        },
        {
          "id": "3413",
          "name": "Bismil",
          "countryCode": "TUR",
          "district": "Diyarbakir",
          "population": "101400"
        },
        {
          "id": "3414",
          "name": "Nazilli",
          "countryCode": "TUR",
          "district": "Aydin",
          "population": "99900"
        },
        {
          "id": "3415",
          "name": "Tokat",
          "countryCode": "TUR",
          "district": "Tokat",
          "population": "99500"
        },
        {
          "id": "3416",
          "name": "Kars",
          "countryCode": "TUR",
          "district": "Kars",
          "population": "93000"
        },
        {
          "id": "3417",
          "name": "Inegöl",
          "countryCode": "TUR",
          "district": "Bursa",
          "population": "90500"
        },
        {
          "id": "3418",
          "name": "Bandirma",
          "countryCode": "TUR",
          "district": "Balikesir",
          "population": "90200"
        },
        {
          "id": "3298",
          "name": "Nantou",
          "countryCode": "TWN",
          "district": "Nantou",
          "population": "104723"
        },
        {
          "id": "3299",
          "name": "Lungtan",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "103088"
        },
        {
          "id": "3300",
          "name": "Touliu",
          "countryCode": "TWN",
          "district": "Yünlin",
          "population": "98900"
        },
        {
          "id": "3301",
          "name": "Tsaotun",
          "countryCode": "TWN",
          "district": "Nantou",
          "population": "96800"
        },
        {
          "id": "3302",
          "name": "Kangshan",
          "countryCode": "TWN",
          "district": "Kaohsiung",
          "population": "92200"
        },
        {
          "id": "3303",
          "name": "Ilan",
          "countryCode": "TWN",
          "district": "Ilan",
          "population": "92000"
        },
        {
          "id": "3304",
          "name": "Miaoli",
          "countryCode": "TWN",
          "district": "Miaoli",
          "population": "90000"
        },
        {
          "id": "3305",
          "name": "Dar es Salaam",
          "countryCode": "TZA",
          "district": "Dar es Salaam",
          "population": "1747000"
        },
        {
          "id": "3306",
          "name": "Dodoma",
          "countryCode": "TZA",
          "district": "Dodoma",
          "population": "189000"
        },
        {
          "id": "3307",
          "name": "Mwanza",
          "countryCode": "TZA",
          "district": "Mwanza",
          "population": "172300"
        },
        {
          "id": "3308",
          "name": "Zanzibar",
          "countryCode": "TZA",
          "district": "Zanzibar West",
          "population": "157634"
        },
        {
          "id": "3309",
          "name": "Tanga",
          "countryCode": "TZA",
          "district": "Tanga",
          "population": "137400"
        },
        {
          "id": "3310",
          "name": "Mbeya",
          "countryCode": "TZA",
          "district": "Mbeya",
          "population": "130800"
        },
        {
          "id": "3311",
          "name": "Morogoro",
          "countryCode": "TZA",
          "district": "Morogoro",
          "population": "117800"
        },
        {
          "id": "3312",
          "name": "Arusha",
          "countryCode": "TZA",
          "district": "Arusha",
          "population": "102500"
        },
        {
          "id": "3313",
          "name": "Moshi",
          "countryCode": "TZA",
          "district": "Kilimanjaro",
          "population": "96800"
        },
        {
          "id": "3314",
          "name": "Tabora",
          "countryCode": "TZA",
          "district": "Tabora",
          "population": "92800"
        },
        {
          "id": "3315",
          "name": "Kubenhavn",
          "countryCode": "DNK",
          "district": "Kubenhavn",
          "population": "495699"
        },
        {
          "id": "3316",
          "name": "Århus",
          "countryCode": "DNK",
          "district": "Århus",
          "population": "284846"
        },
        {
          "id": "3317",
          "name": "Odense",
          "countryCode": "DNK",
          "district": "Fyn",
          "population": "183912"
        },
        {
          "id": "3318",
          "name": "Aalborg",
          "countryCode": "DNK",
          "district": "Nordjylland",
          "population": "161161"
        },
        {
          "id": "3319",
          "name": "Frederiksberg",
          "countryCode": "DNK",
          "district": "Frederiksberg",
          "population": "90327"
        },
        {
          "id": "3320",
          "name": "Bangkok",
          "countryCode": "THA",
          "district": "Bangkok",
          "population": "6320174"
        },
        {
          "id": "3321",
          "name": "Nonthaburi",
          "countryCode": "THA",
          "district": "Nonthaburi",
          "population": "292100"
        },
        {
          "id": "3322",
          "name": "Nakhon Ratchasima",
          "countryCode": "THA",
          "district": "Nakhon Ratchasima",
          "population": "181400"
        },
        {
          "id": "3323",
          "name": "Chiang Mai",
          "countryCode": "THA",
          "district": "Chiang Mai",
          "population": "171100"
        },
        {
          "id": "3324",
          "name": "Udon Thani",
          "countryCode": "THA",
          "district": "Udon Thani",
          "population": "158100"
        },
        {
          "id": "3325",
          "name": "Hat Yai",
          "countryCode": "THA",
          "district": "Songkhla",
          "population": "148632"
        },
        {
          "id": "3326",
          "name": "Khon Kaen",
          "countryCode": "THA",
          "district": "Khon Kaen",
          "population": "126500"
        },
        {
          "id": "3327",
          "name": "Pak Kret",
          "countryCode": "THA",
          "district": "Nonthaburi",
          "population": "126055"
        },
        {
          "id": "3328",
          "name": "Nakhon Sawan",
          "countryCode": "THA",
          "district": "Nakhon Sawan",
          "population": "123800"
        },
        {
          "id": "3329",
          "name": "Ubon Ratchathani",
          "countryCode": "THA",
          "district": "Ubon Ratchathani",
          "population": "116300"
        },
        {
          "id": "3330",
          "name": "Songkhla",
          "countryCode": "THA",
          "district": "Songkhla",
          "population": "94900"
        },
        {
          "id": "3331",
          "name": "Nakhon Pathom",
          "countryCode": "THA",
          "district": "Nakhon Pathom",
          "population": "94100"
        },
        {
          "id": "3332",
          "name": "Lomé",
          "countryCode": "TGO",
          "district": "Maritime",
          "population": "375000"
        },
        {
          "id": "3333",
          "name": "Fakaofo",
          "countryCode": "TKL",
          "district": "Fakaofo",
          "population": "300"
        },
        {
          "id": "3334",
          "name": "Nuku´alofa",
          "countryCode": "TON",
          "district": "Tongatapu",
          "population": "22400"
        },
        {
          "id": "3335",
          "name": "Chaguanas",
          "countryCode": "TTO",
          "district": "Caroni",
          "population": "56601"
        },
        {
          "id": "3336",
          "name": "Port-of-Spain",
          "countryCode": "TTO",
          "district": "Port-of-Spain",
          "population": "43396"
        },
        {
          "id": "3338",
          "name": "Moundou",
          "countryCode": "TCD",
          "district": "Logone Occidental",
          "population": "99500"
        },
        {
          "id": "3339",
          "name": "Praha",
          "countryCode": "CZE",
          "district": "Hlavnk mesto Praha",
          "population": "1181126"
        },
        {
          "id": "3340",
          "name": "Brno",
          "countryCode": "CZE",
          "district": "Jiznk Morava",
          "population": "381862"
        },
        {
          "id": "3341",
          "name": "Ostrava",
          "countryCode": "CZE",
          "district": "Severnk Morava",
          "population": "320041"
        },
        {
          "id": "3342",
          "name": "Plzen",
          "countryCode": "CZE",
          "district": "Zapadnk Cechy",
          "population": "166759"
        },
        {
          "id": "3343",
          "name": "Olomouc",
          "countryCode": "CZE",
          "district": "Severnk Morava",
          "population": "102702"
        },
        {
          "id": "3344",
          "name": "Liberec",
          "countryCode": "CZE",
          "district": "Severnk Cechy",
          "population": "99155"
        },
        {
          "id": "3345",
          "name": "Ceské Budejovice",
          "countryCode": "CZE",
          "district": "Jiznk Cechy",
          "population": "98186"
        },
        {
          "id": "3346",
          "name": "Hradec Krilové",
          "countryCode": "CZE",
          "district": "Vzchodnk Cechy",
          "population": "98080"
        },
        {
          "id": "3348",
          "name": "Pardubice",
          "countryCode": "CZE",
          "district": "Vzchodnk Cechy",
          "population": "91309"
        },
        {
          "id": "3349",
          "name": "Tunis",
          "countryCode": "TUN",
          "district": "Tunis",
          "population": "690600"
        },
        {
          "id": "3350",
          "name": "Sfax",
          "countryCode": "TUN",
          "district": "Sfax",
          "population": "257800"
        },
        {
          "id": "3351",
          "name": "Ariana",
          "countryCode": "TUN",
          "district": "Ariana",
          "population": "197000"
        },
        {
          "id": "3352",
          "name": "Ettadhamen",
          "countryCode": "TUN",
          "district": "Ariana",
          "population": "178600"
        },
        {
          "id": "3353",
          "name": "Sousse",
          "countryCode": "TUN",
          "district": "Sousse",
          "population": "145900"
        },
        {
          "id": "3354",
          "name": "Kairouan",
          "countryCode": "TUN",
          "district": "Kairouan",
          "population": "113100"
        },
        {
          "id": "3355",
          "name": "Biserta",
          "countryCode": "TUN",
          "district": "Biserta",
          "population": "108900"
        },
        {
          "id": "3356",
          "name": "GabР”РЊs",
          "countryCode": "TUN",
          "district": "GabР”РЊs",
          "population": "106600"
        },
        {
          "id": "3357",
          "name": "Istanbul",
          "countryCode": "TUR",
          "district": "Istanbul",
          "population": "8787958"
        },
        {
          "id": "3237",
          "name": "Espoo",
          "countryCode": "FIN",
          "district": "Newmaa",
          "population": "213271"
        },
        {
          "id": "3238",
          "name": "Tampere",
          "countryCode": "FIN",
          "district": "Pirkanmaa",
          "population": "195468"
        },
        {
          "id": "3239",
          "name": "Vantaa",
          "countryCode": "FIN",
          "district": "Newmaa",
          "population": "178471"
        },
        {
          "id": "3240",
          "name": "Turku [Åbo]",
          "countryCode": "FIN",
          "district": "Varsinais-Suomi",
          "population": "172561"
        },
        {
          "id": "3241",
          "name": "Oulu",
          "countryCode": "FIN",
          "district": "Pohjois-Pohjanmaa",
          "population": "120753"
        },
        {
          "id": "3242",
          "name": "Lahti",
          "countryCode": "FIN",
          "district": "Päijät-Häme",
          "population": "96921"
        },
        {
          "id": "3243",
          "name": "Paramaribo",
          "countryCode": "SUR",
          "district": "Paramaribo",
          "population": "112000"
        },
        {
          "id": "3244",
          "name": "Mbabane",
          "countryCode": "SWZ",
          "district": "Hhohho",
          "population": "61000"
        },
        {
          "id": "3245",
          "name": "Zürich",
          "countryCode": "CHE",
          "district": "Zürich",
          "population": "336800"
        },
        {
          "id": "3246",
          "name": "Geneve",
          "countryCode": "CHE",
          "district": "Geneve",
          "population": "173500"
        },
        {
          "id": "3247",
          "name": "Basel",
          "countryCode": "CHE",
          "district": "Basel-Stadt",
          "population": "166700"
        },
        {
          "id": "3248",
          "name": "Bern",
          "countryCode": "CHE",
          "district": "Bern",
          "population": "122700"
        },
        {
          "id": "3249",
          "name": "Lausanne",
          "countryCode": "CHE",
          "district": "Vaud",
          "population": "114500"
        },
        {
          "id": "3250",
          "name": "Damascus",
          "countryCode": "SYR",
          "district": "Damascus",
          "population": "1347000"
        },
        {
          "id": "3251",
          "name": "Aleppo",
          "countryCode": "SYR",
          "district": "Aleppo",
          "population": "1261983"
        },
        {
          "id": "3252",
          "name": "Hims",
          "countryCode": "SYR",
          "district": "Hims",
          "population": "507404"
        },
        {
          "id": "3253",
          "name": "Hama",
          "countryCode": "SYR",
          "district": "Hama",
          "population": "343361"
        },
        {
          "id": "3254",
          "name": "Latakia",
          "countryCode": "SYR",
          "district": "Latakia",
          "population": "264563"
        },
        {
          "id": "3255",
          "name": "al-Qamishliya",
          "countryCode": "SYR",
          "district": "al-Hasaka",
          "population": "144286"
        },
        {
          "id": "3256",
          "name": "Dayr al-Zawr",
          "countryCode": "SYR",
          "district": "Dayr al-Zawr",
          "population": "140459"
        },
        {
          "id": "3257",
          "name": "Jaramana",
          "countryCode": "SYR",
          "district": "Damaskos",
          "population": "138469"
        },
        {
          "id": "3258",
          "name": "Duma",
          "countryCode": "SYR",
          "district": "Damaskos",
          "population": "131158"
        },
        {
          "id": "3259",
          "name": "al-Raqqa",
          "countryCode": "SYR",
          "district": "al-Raqqa",
          "population": "108020"
        },
        {
          "id": "3260",
          "name": "Idlib",
          "countryCode": "SYR",
          "district": "Idlib",
          "population": "91081"
        },
        {
          "id": "3261",
          "name": "Dushanbe",
          "countryCode": "TJK",
          "district": "Karotegin",
          "population": "524000"
        },
        {
          "id": "3262",
          "name": "Khujand",
          "countryCode": "TJK",
          "district": "Khujand",
          "population": "161500"
        },
        {
          "id": "3263",
          "name": "Taipei",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "2641312"
        },
        {
          "id": "3264",
          "name": "Kaohsiung",
          "countryCode": "TWN",
          "district": "Kaohsiung",
          "population": "1475505"
        },
        {
          "id": "3265",
          "name": "Taichung",
          "countryCode": "TWN",
          "district": "Taichung",
          "population": "940589"
        },
        {
          "id": "3266",
          "name": "Tainan",
          "countryCode": "TWN",
          "district": "Tainan",
          "population": "728060"
        },
        {
          "id": "3267",
          "name": "Panchiao",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "523850"
        },
        {
          "id": "3268",
          "name": "Chungho",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "392176"
        },
        {
          "id": "3269",
          "name": "Keelung (Chilung)",
          "countryCode": "TWN",
          "district": "Keelung",
          "population": "385201"
        },
        {
          "id": "3270",
          "name": "Sanchung",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "380084"
        },
        {
          "id": "3271",
          "name": "Hsinchuang",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "365048"
        },
        {
          "id": "3272",
          "name": "Hsinchu",
          "countryCode": "TWN",
          "district": "Hsinchu",
          "population": "361958"
        },
        {
          "id": "3273",
          "name": "Chungli",
          "countryCode": "TWN",
          "district": "Taoyuan",
          "population": "318649"
        },
        {
          "id": "3274",
          "name": "Fengshan",
          "countryCode": "TWN",
          "district": "Kaohsiung",
          "population": "318562"
        },
        {
          "id": "3275",
          "name": "Taoyuan",
          "countryCode": "TWN",
          "district": "Taoyuan",
          "population": "316438"
        },
        {
          "id": "3276",
          "name": "Chiayi",
          "countryCode": "TWN",
          "district": "Chiayi",
          "population": "265109"
        },
        {
          "id": "3277",
          "name": "Hsintien",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "263603"
        },
        {
          "id": "3278",
          "name": "Changhwa",
          "countryCode": "TWN",
          "district": "Changhwa",
          "population": "227715"
        },
        {
          "id": "3279",
          "name": "Yungho",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "227700"
        },
        {
          "id": "3280",
          "name": "Tucheng",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "224897"
        },
        {
          "id": "3281",
          "name": "Pingtung",
          "countryCode": "TWN",
          "district": "Pingtung",
          "population": "214727"
        },
        {
          "id": "3282",
          "name": "Yungkang",
          "countryCode": "TWN",
          "district": "Tainan",
          "population": "193005"
        },
        {
          "id": "3283",
          "name": "Pingchen",
          "countryCode": "TWN",
          "district": "Taoyuan",
          "population": "188344"
        },
        {
          "id": "3284",
          "name": "Tali",
          "countryCode": "TWN",
          "district": "Taichung",
          "population": "171940"
        },
        {
          "id": "3285",
          "name": "Taiping",
          "countryCode": "TWN",
          "district": "",
          "population": "165524"
        },
        {
          "id": "3286",
          "name": "Pate",
          "countryCode": "TWN",
          "district": "Taoyuan",
          "population": "161700"
        },
        {
          "id": "3287",
          "name": "Fengyuan",
          "countryCode": "TWN",
          "district": "Taichung",
          "population": "161032"
        },
        {
          "id": "3288",
          "name": "Luchou",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "160516"
        },
        {
          "id": "3289",
          "name": "Hsichuh",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "154976"
        },
        {
          "id": "3290",
          "name": "Shulin",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "151260"
        },
        {
          "id": "3291",
          "name": "Yuanlin",
          "countryCode": "TWN",
          "district": "Changhwa",
          "population": "126402"
        },
        {
          "id": "3292",
          "name": "Yangmei",
          "countryCode": "TWN",
          "district": "Taoyuan",
          "population": "126323"
        },
        {
          "id": "3293",
          "name": "Taliao",
          "countryCode": "TWN",
          "district": "",
          "population": "115897"
        },
        {
          "id": "3294",
          "name": "Kueishan",
          "countryCode": "TWN",
          "district": "",
          "population": "112195"
        },
        {
          "id": "3295",
          "name": "Tanshui",
          "countryCode": "TWN",
          "district": "Taipei",
          "population": "111882"
        },
        {
          "id": "3296",
          "name": "Taitung",
          "countryCode": "TWN",
          "district": "Taitung",
          "population": "111039"
        },
        {
          "id": "3297",
          "name": "Hualien",
          "countryCode": "TWN",
          "district": "Hualien",
          "population": "108407"
        },
        {
          "id": "3176",
          "name": "Medina",
          "countryCode": "SAU",
          "district": "Medina",
          "population": "608300"
        },
        {
          "id": "3177",
          "name": "al-Dammam",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "482300"
        },
        {
          "id": "3178",
          "name": "al-Taif",
          "countryCode": "SAU",
          "district": "Mekka",
          "population": "416100"
        },
        {
          "id": "3179",
          "name": "Tabuk",
          "countryCode": "SAU",
          "district": "Tabuk",
          "population": "292600"
        },
        {
          "id": "3180",
          "name": "Burayda",
          "countryCode": "SAU",
          "district": "al-Qasim",
          "population": "248600"
        },
        {
          "id": "3181",
          "name": "al-Hufuf",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "225800"
        },
        {
          "id": "3182",
          "name": "al-Mubarraz",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "219100"
        },
        {
          "id": "3183",
          "name": "Khamis Mushayt",
          "countryCode": "SAU",
          "district": "Asir",
          "population": "217900"
        },
        {
          "id": "3184",
          "name": "Hail",
          "countryCode": "SAU",
          "district": "Hail",
          "population": "176800"
        },
        {
          "id": "3185",
          "name": "al-Kharj",
          "countryCode": "SAU",
          "district": "Riad",
          "population": "152100"
        },
        {
          "id": "3186",
          "name": "al-Khubar",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "141700"
        },
        {
          "id": "3187",
          "name": "Jubayl",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "140800"
        },
        {
          "id": "3188",
          "name": "Hafar al-Batin",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "137800"
        },
        {
          "id": "3189",
          "name": "al-Tuqba",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "125700"
        },
        {
          "id": "3190",
          "name": "Yanbu",
          "countryCode": "SAU",
          "district": "Medina",
          "population": "119800"
        },
        {
          "id": "3192",
          "name": "Ara´ar",
          "countryCode": "SAU",
          "district": "al-Khudud al-Samaliy",
          "population": "108100"
        },
        {
          "id": "3193",
          "name": "al-Qatif",
          "countryCode": "SAU",
          "district": "al-Sharqiya",
          "population": "98900"
        },
        {
          "id": "3194",
          "name": "al-Hawiya",
          "countryCode": "SAU",
          "district": "Mekka",
          "population": "93900"
        },
        {
          "id": "3195",
          "name": "Unayza",
          "countryCode": "SAU",
          "district": "Qasim",
          "population": "91100"
        },
        {
          "id": "3196",
          "name": "Najran",
          "countryCode": "SAU",
          "district": "Najran",
          "population": "91000"
        },
        {
          "id": "3197",
          "name": "Pikine",
          "countryCode": "SEN",
          "district": "Cap-Vert",
          "population": "855287"
        },
        {
          "id": "3198",
          "name": "Dakar",
          "countryCode": "SEN",
          "district": "Cap-Vert",
          "population": "785071"
        },
        {
          "id": "3199",
          "name": "Thics",
          "countryCode": "SEN",
          "district": "Thics",
          "population": "248000"
        },
        {
          "id": "3200",
          "name": "Kaolack",
          "countryCode": "SEN",
          "district": "Kaolack",
          "population": "199000"
        },
        {
          "id": "3201",
          "name": "Ziguinchor",
          "countryCode": "SEN",
          "district": "Ziguinchor",
          "population": "192000"
        },
        {
          "id": "3202",
          "name": "Rufisque",
          "countryCode": "SEN",
          "district": "Cap-Vert",
          "population": "150000"
        },
        {
          "id": "3203",
          "name": "Saint-Louis",
          "countryCode": "SEN",
          "district": "Saint-Louis",
          "population": "132400"
        },
        {
          "id": "3204",
          "name": "Mbour",
          "countryCode": "SEN",
          "district": "Thics",
          "population": "109300"
        },
        {
          "id": "3205",
          "name": "Diourbel",
          "countryCode": "SEN",
          "district": "Diourbel",
          "population": "99400"
        },
        {
          "id": "3206",
          "name": "Victoria",
          "countryCode": "SYC",
          "district": "Mahé",
          "population": "41000"
        },
        {
          "id": "3207",
          "name": "Freetown",
          "countryCode": "SLE",
          "district": "Western",
          "population": "850000"
        },
        {
          "id": "3208",
          "name": "Singapore",
          "countryCode": "SGP",
          "district": "РІР‚вЂњ",
          "population": "4017733"
        },
        {
          "id": "3209",
          "name": "Bratislava",
          "countryCode": "SVK",
          "district": "Bratislava",
          "population": "448292"
        },
        {
          "id": "3210",
          "name": "Košice",
          "countryCode": "SVK",
          "district": "Vzchodné Slovensko",
          "population": "241874"
        },
        {
          "id": "3212",
          "name": "Ljubljana",
          "countryCode": "SVN",
          "district": "Osrednjeslovenska",
          "population": "270986"
        },
        {
          "id": "3213",
          "name": "Maribor",
          "countryCode": "SVN",
          "district": "Podravska",
          "population": "115532"
        },
        {
          "id": "3214",
          "name": "Mogadishu",
          "countryCode": "SOM",
          "district": "Banaadir",
          "population": "997000"
        },
        {
          "id": "3215",
          "name": "Hargeysa",
          "countryCode": "SOM",
          "district": "Woqooyi Galbeed",
          "population": "90000"
        },
        {
          "id": "3216",
          "name": "Kismaayo",
          "countryCode": "SOM",
          "district": "Jubbada Hoose",
          "population": "90000"
        },
        {
          "id": "3217",
          "name": "Colombo",
          "countryCode": "LKA",
          "district": "Western",
          "population": "645000"
        },
        {
          "id": "3218",
          "name": "Dehiwala",
          "countryCode": "LKA",
          "district": "Western",
          "population": "203000"
        },
        {
          "id": "3219",
          "name": "Moratuwa",
          "countryCode": "LKA",
          "district": "Western",
          "population": "190000"
        },
        {
          "id": "3220",
          "name": "Jaffna",
          "countryCode": "LKA",
          "district": "Northern",
          "population": "149000"
        },
        {
          "id": "3221",
          "name": "Kandy",
          "countryCode": "LKA",
          "district": "Central",
          "population": "140000"
        },
        {
          "id": "3222",
          "name": "Sri Jayawardenepura Kotte",
          "countryCode": "LKA",
          "district": "Western",
          "population": "118000"
        },
        {
          "id": "3223",
          "name": "Negombo",
          "countryCode": "LKA",
          "district": "Western",
          "population": "100000"
        },
        {
          "id": "3224",
          "name": "Omdurman",
          "countryCode": "SDN",
          "district": "Khartum",
          "population": "1271403"
        },
        {
          "id": "3225",
          "name": "Khartum",
          "countryCode": "SDN",
          "district": "Khartum",
          "population": "947483"
        },
        {
          "id": "3226",
          "name": "Sharq al-Nil",
          "countryCode": "SDN",
          "district": "Khartum",
          "population": "700887"
        },
        {
          "id": "3227",
          "name": "Port Sudan",
          "countryCode": "SDN",
          "district": "al-Bahr al-Ahmar",
          "population": "308195"
        },
        {
          "id": "3228",
          "name": "Kassala",
          "countryCode": "SDN",
          "district": "Kassala",
          "population": "234622"
        },
        {
          "id": "3229",
          "name": "Obeid",
          "countryCode": "SDN",
          "district": "Kurdufan al-Shamaliy",
          "population": "229425"
        },
        {
          "id": "3230",
          "name": "Nyala",
          "countryCode": "SDN",
          "district": "Darfur al-Janubiya",
          "population": "227183"
        },
        {
          "id": "3231",
          "name": "Wad Madani",
          "countryCode": "SDN",
          "district": "al-Jazira",
          "population": "211362"
        },
        {
          "id": "3232",
          "name": "al-Qadarif",
          "countryCode": "SDN",
          "district": "al-Qadarif",
          "population": "191164"
        },
        {
          "id": "3233",
          "name": "Kusti",
          "countryCode": "SDN",
          "district": "al-Bahr al-Abyad",
          "population": "173599"
        },
        {
          "id": "3234",
          "name": "al-Fashir",
          "countryCode": "SDN",
          "district": "Darfur al-Shamaliya",
          "population": "141884"
        },
        {
          "id": "3235",
          "name": "Juba",
          "countryCode": "SDN",
          "district": "Bahr al-Jabal",
          "population": "114980"
        },
        {
          "id": "3116",
          "name": "Leverkusen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "160841"
        },
        {
          "id": "3117",
          "name": "Oldenburg",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "154125"
        },
        {
          "id": "3118",
          "name": "Neuss",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "149702"
        },
        {
          "id": "3119",
          "name": "Heidelberg",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "139672"
        },
        {
          "id": "3120",
          "name": "Darmstadt",
          "countryCode": "DEU",
          "district": "Hessen",
          "population": "137776"
        },
        {
          "id": "3121",
          "name": "Paderborn",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "137647"
        },
        {
          "id": "3122",
          "name": "Potsdam",
          "countryCode": "DEU",
          "district": "Brandenburg",
          "population": "128983"
        },
        {
          "id": "3123",
          "name": "Würzburg",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "127350"
        },
        {
          "id": "3124",
          "name": "Regensburg",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "125236"
        },
        {
          "id": "3125",
          "name": "Recklinghausen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "125022"
        },
        {
          "id": "3126",
          "name": "Göttingen",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "124775"
        },
        {
          "id": "3127",
          "name": "Bremerhaven",
          "countryCode": "DEU",
          "district": "Bremen",
          "population": "122735"
        },
        {
          "id": "3128",
          "name": "Wolfsburg",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "121954"
        },
        {
          "id": "3129",
          "name": "Bottrop",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "121097"
        },
        {
          "id": "3130",
          "name": "Remscheid",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "120125"
        },
        {
          "id": "3131",
          "name": "Heilbronn",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "119526"
        },
        {
          "id": "3132",
          "name": "Pforzheim",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "117227"
        },
        {
          "id": "3133",
          "name": "Offenbach am Main",
          "countryCode": "DEU",
          "district": "Hessen",
          "population": "116627"
        },
        {
          "id": "3134",
          "name": "Ulm",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "116103"
        },
        {
          "id": "3135",
          "name": "Ingolstadt",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "114826"
        },
        {
          "id": "3136",
          "name": "Gera",
          "countryCode": "DEU",
          "district": "Thüringen",
          "population": "114718"
        },
        {
          "id": "3137",
          "name": "Salzgitter",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "112934"
        },
        {
          "id": "3138",
          "name": "Cottbus",
          "countryCode": "DEU",
          "district": "Brandenburg",
          "population": "110894"
        },
        {
          "id": "3139",
          "name": "Reutlingen",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "110343"
        },
        {
          "id": "3140",
          "name": "Fürth",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "109771"
        },
        {
          "id": "3141",
          "name": "Siegen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "109225"
        },
        {
          "id": "3142",
          "name": "Koblenz",
          "countryCode": "DEU",
          "district": "Rheinland-Pfalz",
          "population": "108003"
        },
        {
          "id": "3143",
          "name": "Moers",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "106837"
        },
        {
          "id": "3144",
          "name": "Bergisch Gladbach",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "106150"
        },
        {
          "id": "3145",
          "name": "Zwickau",
          "countryCode": "DEU",
          "district": "Saksi",
          "population": "104146"
        },
        {
          "id": "3146",
          "name": "Hildesheim",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "104013"
        },
        {
          "id": "3147",
          "name": "Witten",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "103384"
        },
        {
          "id": "3148",
          "name": "Schwerin",
          "countryCode": "DEU",
          "district": "Mecklenburg-Vorpomme",
          "population": "102878"
        },
        {
          "id": "3149",
          "name": "Erlangen",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "100750"
        },
        {
          "id": "3150",
          "name": "Kaiserslautern",
          "countryCode": "DEU",
          "district": "Rheinland-Pfalz",
          "population": "100025"
        },
        {
          "id": "3151",
          "name": "Trier",
          "countryCode": "DEU",
          "district": "Rheinland-Pfalz",
          "population": "99891"
        },
        {
          "id": "3152",
          "name": "Jena",
          "countryCode": "DEU",
          "district": "Thüringen",
          "population": "99779"
        },
        {
          "id": "3153",
          "name": "Iserlohn",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "99474"
        },
        {
          "id": "3154",
          "name": "Gütersloh",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "95028"
        },
        {
          "id": "3155",
          "name": "Marl",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "93735"
        },
        {
          "id": "3156",
          "name": "Lünen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "92044"
        },
        {
          "id": "3157",
          "name": "Düren",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "91092"
        },
        {
          "id": "3158",
          "name": "Ratingen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "90951"
        },
        {
          "id": "3159",
          "name": "Velbert",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "89881"
        },
        {
          "id": "3160",
          "name": "Esslingen am Neckar",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "89667"
        },
        {
          "id": "3161",
          "name": "Honiara",
          "countryCode": "SLB",
          "district": "Honiara",
          "population": "50100"
        },
        {
          "id": "3162",
          "name": "Lusaka",
          "countryCode": "ZMB",
          "district": "Lusaka",
          "population": "1317000"
        },
        {
          "id": "3163",
          "name": "Ndola",
          "countryCode": "ZMB",
          "district": "Copperbelt",
          "population": "329200"
        },
        {
          "id": "3164",
          "name": "Kitwe",
          "countryCode": "ZMB",
          "district": "Copperbelt",
          "population": "288600"
        },
        {
          "id": "3165",
          "name": "Kabwe",
          "countryCode": "ZMB",
          "district": "Central",
          "population": "154300"
        },
        {
          "id": "3166",
          "name": "Chingola",
          "countryCode": "ZMB",
          "district": "Copperbelt",
          "population": "142400"
        },
        {
          "id": "3167",
          "name": "Mufulira",
          "countryCode": "ZMB",
          "district": "Copperbelt",
          "population": "123900"
        },
        {
          "id": "3168",
          "name": "Luanshya",
          "countryCode": "ZMB",
          "district": "Copperbelt",
          "population": "118100"
        },
        {
          "id": "3169",
          "name": "Apia",
          "countryCode": "WSM",
          "district": "Upolu",
          "population": "35900"
        },
        {
          "id": "3170",
          "name": "Serravalle",
          "countryCode": "SMR",
          "district": "Serravalle/Dogano",
          "population": "4802"
        },
        {
          "id": "3171",
          "name": "San Marino",
          "countryCode": "SMR",
          "district": "San Marino",
          "population": "2294"
        },
        {
          "id": "3172",
          "name": "Sco Tomé",
          "countryCode": "STP",
          "district": "Aqua Grande",
          "population": "49541"
        },
        {
          "id": "3173",
          "name": "Riyadh",
          "countryCode": "SAU",
          "district": "Riyadh",
          "population": "3324000"
        },
        {
          "id": "3174",
          "name": "Jedda",
          "countryCode": "SAU",
          "district": "Mekka",
          "population": "2046300"
        },
        {
          "id": "3175",
          "name": "Mekka",
          "countryCode": "SAU",
          "district": "Mekka",
          "population": "965700"
        },
        {
          "id": "3057",
          "name": "Jönköping",
          "countryCode": "SWE",
          "district": "Jönköpings län",
          "population": "117095"
        },
        {
          "id": "3058",
          "name": "Umeå",
          "countryCode": "SWE",
          "district": "Västerbottens län",
          "population": "104512"
        },
        {
          "id": "3059",
          "name": "Lund",
          "countryCode": "SWE",
          "district": "Skåne län",
          "population": "98948"
        },
        {
          "id": "3060",
          "name": "Borås",
          "countryCode": "SWE",
          "district": "West Götanmaan län",
          "population": "96883"
        },
        {
          "id": "3061",
          "name": "Sundsvall",
          "countryCode": "SWE",
          "district": "Västernorrlands län",
          "population": "93126"
        },
        {
          "id": "3062",
          "name": "Gävle",
          "countryCode": "SWE",
          "district": "Gävleborgs län",
          "population": "90742"
        },
        {
          "id": "3063",
          "name": "Jamestown",
          "countryCode": "SHN",
          "district": "Saint Helena",
          "population": "1500"
        },
        {
          "id": "3064",
          "name": "Basseterre",
          "countryCode": "KNA",
          "district": "St George Basseterre",
          "population": "11600"
        },
        {
          "id": "3065",
          "name": "Castries",
          "countryCode": "LCA",
          "district": "Castries",
          "population": "2301"
        },
        {
          "id": "3066",
          "name": "Kingstown",
          "countryCode": "VCT",
          "district": "St George",
          "population": "17100"
        },
        {
          "id": "3067",
          "name": "Saint-Pierre",
          "countryCode": "SPM",
          "district": "Saint-Pierre",
          "population": "5808"
        },
        {
          "id": "3068",
          "name": "Berlin",
          "countryCode": "DEU",
          "district": "Berliini",
          "population": "3386667"
        },
        {
          "id": "3069",
          "name": "Hamburg",
          "countryCode": "DEU",
          "district": "Hamburg",
          "population": "1704735"
        },
        {
          "id": "3070",
          "name": "Munich [München]",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "1194560"
        },
        {
          "id": "3071",
          "name": "Köln",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "962507"
        },
        {
          "id": "3072",
          "name": "Frankfurt am Main",
          "countryCode": "DEU",
          "district": "Hessen",
          "population": "643821"
        },
        {
          "id": "3073",
          "name": "Essen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "599515"
        },
        {
          "id": "3074",
          "name": "Dortmund",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "590213"
        },
        {
          "id": "3075",
          "name": "Stuttgart",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "582443"
        },
        {
          "id": "3076",
          "name": "Düsseldorf",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "568855"
        },
        {
          "id": "3077",
          "name": "Bremen",
          "countryCode": "DEU",
          "district": "Bremen",
          "population": "540330"
        },
        {
          "id": "3078",
          "name": "Duisburg",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "519793"
        },
        {
          "id": "3079",
          "name": "Hannover",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "514718"
        },
        {
          "id": "3080",
          "name": "Leipzig",
          "countryCode": "DEU",
          "district": "Saksi",
          "population": "489532"
        },
        {
          "id": "3081",
          "name": "Nürnberg",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "486628"
        },
        {
          "id": "3082",
          "name": "Dresden",
          "countryCode": "DEU",
          "district": "Saksi",
          "population": "476668"
        },
        {
          "id": "3083",
          "name": "Bochum",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "392830"
        },
        {
          "id": "3084",
          "name": "Wuppertal",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "368993"
        },
        {
          "id": "3085",
          "name": "Bielefeld",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "321125"
        },
        {
          "id": "3086",
          "name": "Mannheim",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "307730"
        },
        {
          "id": "3087",
          "name": "Bonn",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "301048"
        },
        {
          "id": "3088",
          "name": "Gelsenkirchen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "281979"
        },
        {
          "id": "3089",
          "name": "Karlsruhe",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "277204"
        },
        {
          "id": "3090",
          "name": "Wiesbaden",
          "countryCode": "DEU",
          "district": "Hessen",
          "population": "268716"
        },
        {
          "id": "3091",
          "name": "Münster",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "264670"
        },
        {
          "id": "3092",
          "name": "Mönchengladbach",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "263697"
        },
        {
          "id": "3093",
          "name": "Chemnitz",
          "countryCode": "DEU",
          "district": "Saksi",
          "population": "263222"
        },
        {
          "id": "3094",
          "name": "Augsburg",
          "countryCode": "DEU",
          "district": "Baijeri",
          "population": "254867"
        },
        {
          "id": "3095",
          "name": "Halle/Saale",
          "countryCode": "DEU",
          "district": "Anhalt Sachsen",
          "population": "254360"
        },
        {
          "id": "3096",
          "name": "Braunschweig",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "246322"
        },
        {
          "id": "3098",
          "name": "Krefeld",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "241769"
        },
        {
          "id": "3099",
          "name": "Magdeburg",
          "countryCode": "DEU",
          "district": "Anhalt Sachsen",
          "population": "235073"
        },
        {
          "id": "3100",
          "name": "Kiel",
          "countryCode": "DEU",
          "district": "Schleswig-Holstein",
          "population": "233795"
        },
        {
          "id": "3101",
          "name": "Oberhausen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "222349"
        },
        {
          "id": "3102",
          "name": "Lübeck",
          "countryCode": "DEU",
          "district": "Schleswig-Holstein",
          "population": "213326"
        },
        {
          "id": "3103",
          "name": "Hagen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "205201"
        },
        {
          "id": "3104",
          "name": "Rostock",
          "countryCode": "DEU",
          "district": "Mecklenburg-Vorpomme",
          "population": "203279"
        },
        {
          "id": "3105",
          "name": "Freiburg im Breisgau",
          "countryCode": "DEU",
          "district": "Baden-Württemberg",
          "population": "202455"
        },
        {
          "id": "3106",
          "name": "Erfurt",
          "countryCode": "DEU",
          "district": "Thüringen",
          "population": "201267"
        },
        {
          "id": "3107",
          "name": "Kassel",
          "countryCode": "DEU",
          "district": "Hessen",
          "population": "196211"
        },
        {
          "id": "3108",
          "name": "Saarbrücken",
          "countryCode": "DEU",
          "district": "Saarland",
          "population": "183836"
        },
        {
          "id": "3109",
          "name": "Mainz",
          "countryCode": "DEU",
          "district": "Rheinland-Pfalz",
          "population": "183134"
        },
        {
          "id": "3110",
          "name": "Hamm",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "181804"
        },
        {
          "id": "3111",
          "name": "Herne",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "175661"
        },
        {
          "id": "3112",
          "name": "Mülheim an der Ruhr",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "173895"
        },
        {
          "id": "3113",
          "name": "Solingen",
          "countryCode": "DEU",
          "district": "Nordrhein-Westfalen",
          "population": "165583"
        },
        {
          "id": "3114",
          "name": "Osnabrück",
          "countryCode": "DEU",
          "district": "Niedersachsen",
          "population": "164539"
        },
        {
          "id": "3115",
          "name": "Ludwigshafen am Rhein",
          "countryCode": "DEU",
          "district": "Rheinland-Pfalz",
          "population": "163771"
        },
        {
          "id": "2999",
          "name": "Tours",
          "countryCode": "FRA",
          "district": "Centre",
          "population": "132820"
        },
        {
          "id": "3000",
          "name": "Villeurbanne",
          "countryCode": "FRA",
          "district": "Rhone-Alpes",
          "population": "124215"
        },
        {
          "id": "3001",
          "name": "Metz",
          "countryCode": "FRA",
          "district": "Lorraine",
          "population": "123776"
        },
        {
          "id": "3002",
          "name": "Besaneon",
          "countryCode": "FRA",
          "district": "Franche-Comté",
          "population": "117733"
        },
        {
          "id": "3003",
          "name": "Caen",
          "countryCode": "FRA",
          "district": "Basse-Normandie",
          "population": "113987"
        },
        {
          "id": "3004",
          "name": "Orleans",
          "countryCode": "FRA",
          "district": "Centre",
          "population": "113126"
        },
        {
          "id": "3005",
          "name": "Mulhouse",
          "countryCode": "FRA",
          "district": "Alsace",
          "population": "110359"
        },
        {
          "id": "3006",
          "name": "Rouen",
          "countryCode": "FRA",
          "district": "Haute-Normandie",
          "population": "106592"
        },
        {
          "id": "3007",
          "name": "Boulogne-Billancourt",
          "countryCode": "FRA",
          "district": "Ile-de-France",
          "population": "106367"
        },
        {
          "id": "3008",
          "name": "Perpignan",
          "countryCode": "FRA",
          "district": "Languedoc-Roussillon",
          "population": "105115"
        },
        {
          "id": "3009",
          "name": "Nancy",
          "countryCode": "FRA",
          "district": "Lorraine",
          "population": "103605"
        },
        {
          "id": "3010",
          "name": "Roubaix",
          "countryCode": "FRA",
          "district": "Nord-Pas-de-Calais",
          "population": "96984"
        },
        {
          "id": "3011",
          "name": "Argenteuil",
          "countryCode": "FRA",
          "district": "Ile-de-France",
          "population": "93961"
        },
        {
          "id": "3012",
          "name": "Tourcoing",
          "countryCode": "FRA",
          "district": "Nord-Pas-de-Calais",
          "population": "93540"
        },
        {
          "id": "3013",
          "name": "Montreuil",
          "countryCode": "FRA",
          "district": "Ile-de-France",
          "population": "90674"
        },
        {
          "id": "3014",
          "name": "Cayenne",
          "countryCode": "GUF",
          "district": "Cayenne",
          "population": "50699"
        },
        {
          "id": "3015",
          "name": "Faaa",
          "countryCode": "PYF",
          "district": "Tahiti",
          "population": "25888"
        },
        {
          "id": "3016",
          "name": "Papeete",
          "countryCode": "PYF",
          "district": "Tahiti",
          "population": "25553"
        },
        {
          "id": "3017",
          "name": "Saint-Denis",
          "countryCode": "REU",
          "district": "Saint-Denis",
          "population": "131480"
        },
        {
          "id": "3018",
          "name": "Bucuresti",
          "countryCode": "ROM",
          "district": "Bukarest",
          "population": "2016131"
        },
        {
          "id": "3019",
          "name": "Iasi",
          "countryCode": "ROM",
          "district": "Iasi",
          "population": "348070"
        },
        {
          "id": "3020",
          "name": "Constanta",
          "countryCode": "ROM",
          "district": "Constanta",
          "population": "342264"
        },
        {
          "id": "3021",
          "name": "Cluj-Napoca",
          "countryCode": "ROM",
          "district": "Cluj",
          "population": "332498"
        },
        {
          "id": "3022",
          "name": "Galati",
          "countryCode": "ROM",
          "district": "Galati",
          "population": "330276"
        },
        {
          "id": "3023",
          "name": "Timisoara",
          "countryCode": "ROM",
          "district": "Timis",
          "population": "324304"
        },
        {
          "id": "3024",
          "name": "Brasov",
          "countryCode": "ROM",
          "district": "Brasov",
          "population": "314225"
        },
        {
          "id": "3025",
          "name": "Craiova",
          "countryCode": "ROM",
          "district": "Dolj",
          "population": "313530"
        },
        {
          "id": "3026",
          "name": "Ploiesti",
          "countryCode": "ROM",
          "district": "Prahova",
          "population": "251348"
        },
        {
          "id": "3027",
          "name": "Braila",
          "countryCode": "ROM",
          "district": "Braila",
          "population": "233756"
        },
        {
          "id": "3028",
          "name": "Oradea",
          "countryCode": "ROM",
          "district": "Bihor",
          "population": "222239"
        },
        {
          "id": "3029",
          "name": "Bacau",
          "countryCode": "ROM",
          "district": "Bacau",
          "population": "209235"
        },
        {
          "id": "3030",
          "name": "Pitesti",
          "countryCode": "ROM",
          "district": "Arges",
          "population": "187170"
        },
        {
          "id": "3031",
          "name": "Arad",
          "countryCode": "ROM",
          "district": "Arad",
          "population": "184408"
        },
        {
          "id": "3032",
          "name": "Sibiu",
          "countryCode": "ROM",
          "district": "Sibiu",
          "population": "169611"
        },
        {
          "id": "3033",
          "name": "TР”Рѓrgu Mures",
          "countryCode": "ROM",
          "district": "Mures",
          "population": "165153"
        },
        {
          "id": "3034",
          "name": "Baia Mare",
          "countryCode": "ROM",
          "district": "Maramures",
          "population": "149665"
        },
        {
          "id": "3035",
          "name": "Buzau",
          "countryCode": "ROM",
          "district": "Buzau",
          "population": "148372"
        },
        {
          "id": "3036",
          "name": "Satu Mare",
          "countryCode": "ROM",
          "district": "Satu Mare",
          "population": "130059"
        },
        {
          "id": "3037",
          "name": "Botosani",
          "countryCode": "ROM",
          "district": "Botosani",
          "population": "128730"
        },
        {
          "id": "3038",
          "name": "Piatra Neamt",
          "countryCode": "ROM",
          "district": "Neamt",
          "population": "125070"
        },
        {
          "id": "3039",
          "name": "Ramnicu Valcea",
          "countryCode": "ROM",
          "district": "Valcea",
          "population": "119741"
        },
        {
          "id": "3040",
          "name": "Suceava",
          "countryCode": "ROM",
          "district": "Suceava",
          "population": "118549"
        },
        {
          "id": "3041",
          "name": "Drobeta-Turnu Severin",
          "countryCode": "ROM",
          "district": "Mehedinti",
          "population": "117865"
        },
        {
          "id": "3042",
          "name": "Targoviste",
          "countryCode": "ROM",
          "district": "Dambovita",
          "population": "98980"
        },
        {
          "id": "3043",
          "name": "Focsani",
          "countryCode": "ROM",
          "district": "Vrancea",
          "population": "98979"
        },
        {
          "id": "3044",
          "name": "Targu Jiu",
          "countryCode": "ROM",
          "district": "Gorj",
          "population": "98524"
        },
        {
          "id": "3045",
          "name": "Tulcea",
          "countryCode": "ROM",
          "district": "Tulcea",
          "population": "96278"
        },
        {
          "id": "3046",
          "name": "Resita",
          "countryCode": "ROM",
          "district": "Caras-Severin",
          "population": "93976"
        },
        {
          "id": "3047",
          "name": "Kigali",
          "countryCode": "RWA",
          "district": "Kigali",
          "population": "286000"
        },
        {
          "id": "3048",
          "name": "Stockholm",
          "countryCode": "SWE",
          "district": "Lisboa",
          "population": "750348"
        },
        {
          "id": "3049",
          "name": "Gothenburg [Göteborg]",
          "countryCode": "SWE",
          "district": "West Götanmaan län",
          "population": "466990"
        },
        {
          "id": "3050",
          "name": "Malmö",
          "countryCode": "SWE",
          "district": "Skåne län",
          "population": "259579"
        },
        {
          "id": "3051",
          "name": "Uppsala",
          "countryCode": "SWE",
          "district": "Uppsala lР“В¤n",
          "population": "189569"
        },
        {
          "id": "3052",
          "name": "Linköping",
          "countryCode": "SWE",
          "district": "East Götanmaan län",
          "population": "133168"
        },
        {
          "id": "3053",
          "name": "Västerås",
          "countryCode": "SWE",
          "district": "Västmanlands län",
          "population": "126328"
        },
        {
          "id": "3054",
          "name": "Örebro",
          "countryCode": "SWE",
          "district": "Örebros län",
          "population": "124207"
        },
        {
          "id": "3055",
          "name": "Norrköping",
          "countryCode": "SWE",
          "district": "East Götanmaan lР“В¤n",
          "population": "122199"
        },
        {
          "id": "3056",
          "name": "Helsingborg",
          "countryCode": "SWE",
          "district": "Skåne län",
          "population": "117737"
        },
        {
          "id": "2938",
          "name": "Bialystok",
          "countryCode": "POL",
          "district": "Podlaskie",
          "population": "283937"
        },
        {
          "id": "2939",
          "name": "Czestochowa",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "257812"
        },
        {
          "id": "2940",
          "name": "Gdynia",
          "countryCode": "POL",
          "district": "Pomorskie",
          "population": "253521"
        },
        {
          "id": "2941",
          "name": "Sosnowiec",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "244102"
        },
        {
          "id": "2942",
          "name": "Radom",
          "countryCode": "POL",
          "district": "Mazowieckie",
          "population": "232262"
        },
        {
          "id": "2943",
          "name": "Kielce",
          "countryCode": "POL",
          "district": "Swietokrzyskie",
          "population": "212383"
        },
        {
          "id": "2944",
          "name": "Gliwice",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "212164"
        },
        {
          "id": "2945",
          "name": "Torun",
          "countryCode": "POL",
          "district": "Kujawsko-Pomorskie",
          "population": "206158"
        },
        {
          "id": "2946",
          "name": "Bytom",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "205560"
        },
        {
          "id": "2947",
          "name": "Zabrze",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "200177"
        },
        {
          "id": "2948",
          "name": "Bielsko-Biala",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "180307"
        },
        {
          "id": "2949",
          "name": "Olsztyn",
          "countryCode": "POL",
          "district": "Warminsko-Mazurskie",
          "population": "170904"
        },
        {
          "id": "2950",
          "name": "RzeszР“С–w",
          "countryCode": "POL",
          "district": "Podkarpackie",
          "population": "162049"
        },
        {
          "id": "2951",
          "name": "Ruda Slaska",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "159665"
        },
        {
          "id": "2952",
          "name": "Rybnik",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "144582"
        },
        {
          "id": "2953",
          "name": "Walbrzych",
          "countryCode": "POL",
          "district": "Dolnoslaskie",
          "population": "136923"
        },
        {
          "id": "2954",
          "name": "Tychy",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "133178"
        },
        {
          "id": "2955",
          "name": "Dabrowa Górnicza",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "131037"
        },
        {
          "id": "2956",
          "name": "Plock",
          "countryCode": "POL",
          "district": "Mazowieckie",
          "population": "131011"
        },
        {
          "id": "2958",
          "name": "Opole",
          "countryCode": "POL",
          "district": "Opolskie",
          "population": "129553"
        },
        {
          "id": "2959",
          "name": "Gorzów Wielkopolski",
          "countryCode": "POL",
          "district": "Lubuskie",
          "population": "126019"
        },
        {
          "id": "2960",
          "name": "Wloclawek",
          "countryCode": "POL",
          "district": "Kujawsko-Pomorskie",
          "population": "123373"
        },
        {
          "id": "2961",
          "name": "Chorzów",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "121708"
        },
        {
          "id": "2962",
          "name": "Tarnów",
          "countryCode": "POL",
          "district": "Malopolskie",
          "population": "121494"
        },
        {
          "id": "2963",
          "name": "Zielona Góra",
          "countryCode": "POL",
          "district": "Lubuskie",
          "population": "118182"
        },
        {
          "id": "2964",
          "name": "Koszalin",
          "countryCode": "POL",
          "district": "Zachodnio-Pomorskie",
          "population": "112375"
        },
        {
          "id": "2965",
          "name": "Legnica",
          "countryCode": "POL",
          "district": "Dolnoslaskie",
          "population": "109335"
        },
        {
          "id": "2966",
          "name": "Kalisz",
          "countryCode": "POL",
          "district": "Wielkopolskie",
          "population": "106641"
        },
        {
          "id": "2967",
          "name": "Grudziadz",
          "countryCode": "POL",
          "district": "Kujawsko-Pomorskie",
          "population": "102434"
        },
        {
          "id": "2968",
          "name": "Slupsk",
          "countryCode": "POL",
          "district": "Pomorskie",
          "population": "102370"
        },
        {
          "id": "2969",
          "name": "Jastrzebie-ZdrР“С–j",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "102294"
        },
        {
          "id": "2970",
          "name": "Jaworzno",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "97929"
        },
        {
          "id": "2971",
          "name": "Jelenia GР“С–ra",
          "countryCode": "POL",
          "district": "Dolnoslaskie",
          "population": "93901"
        },
        {
          "id": "2972",
          "name": "Malabo",
          "countryCode": "GNQ",
          "district": "Bioko",
          "population": "40000"
        },
        {
          "id": "2973",
          "name": "Doha",
          "countryCode": "QAT",
          "district": "Doha",
          "population": "355000"
        },
        {
          "id": "2974",
          "name": "Paris",
          "countryCode": "FRA",
          "district": "Р”Р„le-de-France",
          "population": "2125246"
        },
        {
          "id": "2975",
          "name": "Marseille",
          "countryCode": "FRA",
          "district": "Provence-Alpes-CР•РЊte",
          "population": "798430"
        },
        {
          "id": "2976",
          "name": "Lyon",
          "countryCode": "FRA",
          "district": "RhР•РЊne-Alpes",
          "population": "445452"
        },
        {
          "id": "2977",
          "name": "Toulouse",
          "countryCode": "FRA",
          "district": "Midi-PyrР“В©nР“В©es",
          "population": "390350"
        },
        {
          "id": "2978",
          "name": "Nice",
          "countryCode": "FRA",
          "district": "Provence-Alpes-CР•РЊte",
          "population": "342738"
        },
        {
          "id": "2979",
          "name": "Nantes",
          "countryCode": "FRA",
          "district": "Pays de la Loire",
          "population": "270251"
        },
        {
          "id": "2980",
          "name": "Strasbourg",
          "countryCode": "FRA",
          "district": "Alsace",
          "population": "264115"
        },
        {
          "id": "2981",
          "name": "Montpellier",
          "countryCode": "FRA",
          "district": "Languedoc-Roussillon",
          "population": "225392"
        },
        {
          "id": "2982",
          "name": "Bordeaux",
          "countryCode": "FRA",
          "district": "Aquitaine",
          "population": "215363"
        },
        {
          "id": "2983",
          "name": "Rennes",
          "countryCode": "FRA",
          "district": "Haute-Normandie",
          "population": "206229"
        },
        {
          "id": "2984",
          "name": "Le Havre",
          "countryCode": "FRA",
          "district": "Champagne-Ardenne",
          "population": "190905"
        },
        {
          "id": "2985",
          "name": "Reims",
          "countryCode": "FRA",
          "district": "Nord-Pas-de-Calais",
          "population": "187206"
        },
        {
          "id": "2986",
          "name": "Lille",
          "countryCode": "FRA",
          "district": "Rhone-Alpes",
          "population": "184657"
        },
        {
          "id": "2988",
          "name": "Toulon",
          "countryCode": "FRA",
          "district": "Provence-Alpes-CР•РЊte",
          "population": "160639"
        },
        {
          "id": "2989",
          "name": "Grenoble",
          "countryCode": "FRA",
          "district": "Rhone-Alpes",
          "population": "153317"
        },
        {
          "id": "2990",
          "name": "Angers",
          "countryCode": "FRA",
          "district": "Pays de la Loire",
          "population": "151279"
        },
        {
          "id": "2991",
          "name": "Dijon",
          "countryCode": "FRA",
          "district": "Bourgogne",
          "population": "149867"
        },
        {
          "id": "2992",
          "name": "Brest",
          "countryCode": "FRA",
          "district": "Bretagne",
          "population": "149634"
        },
        {
          "id": "2993",
          "name": "Le Mans",
          "countryCode": "FRA",
          "district": "Pays de la Loire",
          "population": "146105"
        },
        {
          "id": "2994",
          "name": "Clermont-Ferrand",
          "countryCode": "FRA",
          "district": "Auvergne",
          "population": "137140"
        },
        {
          "id": "2995",
          "name": "Amiens",
          "countryCode": "FRA",
          "district": "Picardie",
          "population": "135501"
        },
        {
          "id": "2996",
          "name": "Aix-en-Provence",
          "countryCode": "FRA",
          "district": "Provence-Alpes-Cote",
          "population": "134222"
        },
        {
          "id": "2997",
          "name": "Limoges",
          "countryCode": "FRA",
          "district": "Limousin",
          "population": "133968"
        },
        {
          "id": "2878",
          "name": "Dera Ismail Khan",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "90400"
        },
        {
          "id": "2879",
          "name": "Wazirabad",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "89700"
        },
        {
          "id": "2880",
          "name": "Nowshera",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "89400"
        },
        {
          "id": "2881",
          "name": "Koror",
          "countryCode": "PLW",
          "district": "Koror",
          "population": "12000"
        },
        {
          "id": "2882",
          "name": "Ciudad de PanamР”Р‡",
          "countryCode": "PAN",
          "district": "PanamР”Р‡",
          "population": "471373"
        },
        {
          "id": "2883",
          "name": "San Miguelito",
          "countryCode": "PAN",
          "district": "San Miguelito",
          "population": "315382"
        },
        {
          "id": "2884",
          "name": "Port Moresby",
          "countryCode": "PNG",
          "district": "National Capital Dis",
          "population": "247000"
        },
        {
          "id": "2885",
          "name": "Asunción",
          "countryCode": "PRY",
          "district": "Asunción",
          "population": "557776"
        },
        {
          "id": "2886",
          "name": "Ciudad del Este",
          "countryCode": "PRY",
          "district": "Alto Parani",
          "population": "133881"
        },
        {
          "id": "2887",
          "name": "San Lorenzo",
          "countryCode": "PRY",
          "district": "Central",
          "population": "133395"
        },
        {
          "id": "2888",
          "name": "Lambaré",
          "countryCode": "PRY",
          "district": "Central",
          "population": "99681"
        },
        {
          "id": "2889",
          "name": "Fernando de la Mora",
          "countryCode": "PRY",
          "district": "Central",
          "population": "95287"
        },
        {
          "id": "2890",
          "name": "Lima",
          "countryCode": "PER",
          "district": "Lima",
          "population": "6464693"
        },
        {
          "id": "2891",
          "name": "Arequipa",
          "countryCode": "PER",
          "district": "Arequipa",
          "population": "762000"
        },
        {
          "id": "2892",
          "name": "Trujillo",
          "countryCode": "PER",
          "district": "La Libertad",
          "population": "652000"
        },
        {
          "id": "2893",
          "name": "Chiclayo",
          "countryCode": "PER",
          "district": "Lambayeque",
          "population": "517000"
        },
        {
          "id": "2894",
          "name": "Callao",
          "countryCode": "PER",
          "district": "Callao",
          "population": "424294"
        },
        {
          "id": "2895",
          "name": "Iquitos",
          "countryCode": "PER",
          "district": "Loreto",
          "population": "367000"
        },
        {
          "id": "2896",
          "name": "Chimbote",
          "countryCode": "PER",
          "district": "Ancash",
          "population": "336000"
        },
        {
          "id": "2897",
          "name": "Huancayo",
          "countryCode": "PER",
          "district": "JunР”В·n",
          "population": "327000"
        },
        {
          "id": "2898",
          "name": "Piura",
          "countryCode": "PER",
          "district": "Piura",
          "population": "325000"
        },
        {
          "id": "2899",
          "name": "Cusco",
          "countryCode": "PER",
          "district": "Cusco",
          "population": "291000"
        },
        {
          "id": "2900",
          "name": "Pucallpa",
          "countryCode": "PER",
          "district": "Ucayali",
          "population": "220866"
        },
        {
          "id": "2901",
          "name": "Tacna",
          "countryCode": "PER",
          "district": "Tacna",
          "population": "215683"
        },
        {
          "id": "2902",
          "name": "Ica",
          "countryCode": "PER",
          "district": "Ica",
          "population": "194820"
        },
        {
          "id": "2903",
          "name": "Sullana",
          "countryCode": "PER",
          "district": "Piura",
          "population": "147361"
        },
        {
          "id": "2904",
          "name": "Juliaca",
          "countryCode": "PER",
          "district": "Puno",
          "population": "142576"
        },
        {
          "id": "2905",
          "name": "Huánuco",
          "countryCode": "PER",
          "district": "Huánuco",
          "population": "129688"
        },
        {
          "id": "2906",
          "name": "Ayacucho",
          "countryCode": "PER",
          "district": "Ayacucho",
          "population": "118960"
        },
        {
          "id": "2907",
          "name": "Chincha Alta",
          "countryCode": "PER",
          "district": "Ica",
          "population": "110016"
        },
        {
          "id": "2908",
          "name": "Cajamarca",
          "countryCode": "PER",
          "district": "Cajamarca",
          "population": "108009"
        },
        {
          "id": "2909",
          "name": "Puno",
          "countryCode": "PER",
          "district": "Puno",
          "population": "101578"
        },
        {
          "id": "2910",
          "name": "Ventanilla",
          "countryCode": "PER",
          "district": "Callao",
          "population": "101056"
        },
        {
          "id": "2911",
          "name": "Castilla",
          "countryCode": "PER",
          "district": "Piura",
          "population": "90642"
        },
        {
          "id": "2912",
          "name": "Adamstown",
          "countryCode": "PCN",
          "district": "РІР‚вЂњ",
          "population": "42"
        },
        {
          "id": "2913",
          "name": "Garapan",
          "countryCode": "MNP",
          "district": "Saipan",
          "population": "9200"
        },
        {
          "id": "2914",
          "name": "Lisboa",
          "countryCode": "PRT",
          "district": "Lisboa",
          "population": "563210"
        },
        {
          "id": "2915",
          "name": "Porto",
          "countryCode": "PRT",
          "district": "Porto",
          "population": "273060"
        },
        {
          "id": "2916",
          "name": "Amadora",
          "countryCode": "PRT",
          "district": "Lisboa",
          "population": "122106"
        },
        {
          "id": "2917",
          "name": "Cokmbra",
          "countryCode": "PRT",
          "district": "Cokmbra",
          "population": "96100"
        },
        {
          "id": "2918",
          "name": "Braga",
          "countryCode": "PRT",
          "district": "Braga",
          "population": "90535"
        },
        {
          "id": "2919",
          "name": "San Juan",
          "countryCode": "PRI",
          "district": "San Juan",
          "population": "434374"
        },
        {
          "id": "2920",
          "name": "BayamР“С–n",
          "countryCode": "PRI",
          "district": "BayamР“С–n",
          "population": "224044"
        },
        {
          "id": "2921",
          "name": "Ponce",
          "countryCode": "PRI",
          "district": "Ponce",
          "population": "186475"
        },
        {
          "id": "2922",
          "name": "Carolina",
          "countryCode": "PRI",
          "district": "Carolina",
          "population": "186076"
        },
        {
          "id": "2923",
          "name": "Caguas",
          "countryCode": "PRI",
          "district": "Caguas",
          "population": "140502"
        },
        {
          "id": "2924",
          "name": "Arecibo",
          "countryCode": "PRI",
          "district": "Arecibo",
          "population": "100131"
        },
        {
          "id": "2925",
          "name": "Guaynabo",
          "countryCode": "PRI",
          "district": "Guaynabo",
          "population": "100053"
        },
        {
          "id": "2926",
          "name": "Mayagüez",
          "countryCode": "PRI",
          "district": "Mayagüez",
          "population": "98434"
        },
        {
          "id": "2927",
          "name": "Toa Baja",
          "countryCode": "PRI",
          "district": "Toa Baja",
          "population": "94085"
        },
        {
          "id": "2928",
          "name": "Warszawa",
          "countryCode": "POL",
          "district": "Mazowieckie",
          "population": "1615369"
        },
        {
          "id": "2929",
          "name": "Lódz",
          "countryCode": "POL",
          "district": "Lodzkie",
          "population": "800110"
        },
        {
          "id": "2930",
          "name": "Krakow",
          "countryCode": "POL",
          "district": "Malopolskie",
          "population": "738150"
        },
        {
          "id": "2931",
          "name": "Wroclaw",
          "countryCode": "POL",
          "district": "Dolnoslaskie",
          "population": "636765"
        },
        {
          "id": "2932",
          "name": "Poznan",
          "countryCode": "POL",
          "district": "Wielkopolskie",
          "population": "576899"
        },
        {
          "id": "2933",
          "name": "Gdansk",
          "countryCode": "POL",
          "district": "Pomorskie",
          "population": "458988"
        },
        {
          "id": "2934",
          "name": "Szczecin",
          "countryCode": "POL",
          "district": "Zachodnio-Pomorskie",
          "population": "416988"
        },
        {
          "id": "2935",
          "name": "Bydgoszcz",
          "countryCode": "POL",
          "district": "Kujawsko-Pomorskie",
          "population": "386855"
        },
        {
          "id": "2936",
          "name": "Lublin",
          "countryCode": "POL",
          "district": "Lubelskie",
          "population": "356251"
        },
        {
          "id": "2937",
          "name": "Katowice",
          "countryCode": "POL",
          "district": "Slaskie",
          "population": "345934"
        },
        {
          "id": "2817",
          "name": "al-Sib",
          "countryCode": "OMN",
          "district": "Masqat",
          "population": "155000"
        },
        {
          "id": "2818",
          "name": "Salala",
          "countryCode": "OMN",
          "district": "Zufar",
          "population": "131813"
        },
        {
          "id": "2819",
          "name": "Bawshar",
          "countryCode": "OMN",
          "district": "Masqat",
          "population": "107500"
        },
        {
          "id": "2820",
          "name": "Suhar",
          "countryCode": "OMN",
          "district": "al-Batina",
          "population": "90814"
        },
        {
          "id": "2821",
          "name": "Masqat",
          "countryCode": "OMN",
          "district": "Masqat",
          "population": "51969"
        },
        {
          "id": "2822",
          "name": "Karachi",
          "countryCode": "PAK",
          "district": "Sindh",
          "population": "9269265"
        },
        {
          "id": "2823",
          "name": "Lahore",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "5063499"
        },
        {
          "id": "2824",
          "name": "Faisalabad",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "1977246"
        },
        {
          "id": "2825",
          "name": "Rawalpindi",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "1406214"
        },
        {
          "id": "2826",
          "name": "Multan",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "1182441"
        },
        {
          "id": "2827",
          "name": "Hyderabad",
          "countryCode": "PAK",
          "district": "Sindh",
          "population": "1151274"
        },
        {
          "id": "2828",
          "name": "Gujranwala",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "1124749"
        },
        {
          "id": "2829",
          "name": "Peshawar",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "988005"
        },
        {
          "id": "2830",
          "name": "Quetta",
          "countryCode": "PAK",
          "district": "Baluchistan",
          "population": "560307"
        },
        {
          "id": "2831",
          "name": "Islamabad",
          "countryCode": "PAK",
          "district": "Islamabad",
          "population": "524500"
        },
        {
          "id": "2832",
          "name": "Sargodha",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "455360"
        },
        {
          "id": "2833",
          "name": "Sialkot",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "417597"
        },
        {
          "id": "2834",
          "name": "Bahawalpur",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "403408"
        },
        {
          "id": "2835",
          "name": "Sukkur",
          "countryCode": "PAK",
          "district": "Sindh",
          "population": "329176"
        },
        {
          "id": "2836",
          "name": "Jhang",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "292214"
        },
        {
          "id": "2837",
          "name": "Sheikhupura",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "271875"
        },
        {
          "id": "2838",
          "name": "Larkana",
          "countryCode": "PAK",
          "district": "Sindh",
          "population": "270366"
        },
        {
          "id": "2839",
          "name": "Gujrat",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "250121"
        },
        {
          "id": "2840",
          "name": "Mardan",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "244511"
        },
        {
          "id": "2841",
          "name": "Kasur",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "241649"
        },
        {
          "id": "2842",
          "name": "Rahim Yar Khan",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "228479"
        },
        {
          "id": "2843",
          "name": "Sahiwal",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "207388"
        },
        {
          "id": "2844",
          "name": "Okara",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "200901"
        },
        {
          "id": "2845",
          "name": "Wah",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "198400"
        },
        {
          "id": "2846",
          "name": "Dera Ghazi Khan",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "188100"
        },
        {
          "id": "2847",
          "name": "Mirpur Khas",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "184500"
        },
        {
          "id": "2848",
          "name": "Nawabshah",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "183100"
        },
        {
          "id": "2849",
          "name": "Mingora",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "174500"
        },
        {
          "id": "2850",
          "name": "Chiniot",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "169300"
        },
        {
          "id": "2851",
          "name": "Kamoke",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "151000"
        },
        {
          "id": "2852",
          "name": "Mandi Burewala",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "149900"
        },
        {
          "id": "2853",
          "name": "Jhelum",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "145800"
        },
        {
          "id": "2854",
          "name": "Sadiqabad",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "141500"
        },
        {
          "id": "2855",
          "name": "Jacobabad",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "137700"
        },
        {
          "id": "2856",
          "name": "Shikarpur",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "133300"
        },
        {
          "id": "2857",
          "name": "Khanewal",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "133000"
        },
        {
          "id": "2858",
          "name": "Hafizabad",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "130200"
        },
        {
          "id": "2859",
          "name": "Kohat",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "125300"
        },
        {
          "id": "2860",
          "name": "Muzaffargarh",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "121600"
        },
        {
          "id": "2861",
          "name": "Khanpur",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "117800"
        },
        {
          "id": "2862",
          "name": "Gojra",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "115000"
        },
        {
          "id": "2863",
          "name": "Bahawalnagar",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "109600"
        },
        {
          "id": "2864",
          "name": "Muridke",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "108600"
        },
        {
          "id": "2865",
          "name": "Pak Pattan",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "107800"
        },
        {
          "id": "2866",
          "name": "Abottabad",
          "countryCode": "PAK",
          "district": "Nothwest Border Prov",
          "population": "106000"
        },
        {
          "id": "2867",
          "name": "Tando Adam",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "103400"
        },
        {
          "id": "2868",
          "name": "Jaranwala",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "103300"
        },
        {
          "id": "2869",
          "name": "Khairpur",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "102200"
        },
        {
          "id": "2870",
          "name": "Chishtian Mandi",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "101700"
        },
        {
          "id": "2871",
          "name": "Daska",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "101500"
        },
        {
          "id": "2872",
          "name": "Dadu",
          "countryCode": "PAK",
          "district": "Sind",
          "population": "98600"
        },
        {
          "id": "2873",
          "name": "Mandi Bahauddin",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "97300"
        },
        {
          "id": "2874",
          "name": "Ahmadpur East",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "96000"
        },
        {
          "id": "2875",
          "name": "Kamalia",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "95300"
        },
        {
          "id": "2876",
          "name": "Khuzdar",
          "countryCode": "PAK",
          "district": "Baluchistan",
          "population": "93100"
        },
        {
          "id": "2877",
          "name": "Vihari",
          "countryCode": "PAK",
          "district": "Punjab",
          "population": "92300"
        },
        {
          "id": "2756",
          "name": "Mushin",
          "countryCode": "NGA",
          "district": "Lagos",
          "population": "333200"
        },
        {
          "id": "2757",
          "name": "Maiduguri",
          "countryCode": "NGA",
          "district": "Borno & Yobe",
          "population": "320000"
        },
        {
          "id": "2758",
          "name": "Enugu",
          "countryCode": "NGA",
          "district": "Anambra & Enugu & Eb",
          "population": "316100"
        },
        {
          "id": "2759",
          "name": "Ede",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "307100"
        },
        {
          "id": "2760",
          "name": "Aba",
          "countryCode": "NGA",
          "district": "Imo & Abia",
          "population": "298900"
        },
        {
          "id": "2761",
          "name": "Ife",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "296800"
        },
        {
          "id": "2762",
          "name": "Ila",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "264000"
        },
        {
          "id": "2763",
          "name": "Oyo",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "256400"
        },
        {
          "id": "2764",
          "name": "Ikerre",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "244600"
        },
        {
          "id": "2765",
          "name": "Benin City",
          "countryCode": "NGA",
          "district": "Edo & Delta",
          "population": "229400"
        },
        {
          "id": "2766",
          "name": "Iseyin",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "217300"
        },
        {
          "id": "2767",
          "name": "Katsina",
          "countryCode": "NGA",
          "district": "Katsina",
          "population": "206500"
        },
        {
          "id": "2768",
          "name": "Jos",
          "countryCode": "NGA",
          "district": "Plateau & Nassarawa",
          "population": "206300"
        },
        {
          "id": "2769",
          "name": "Sokoto",
          "countryCode": "NGA",
          "district": "Sokoto & Kebbi & Zam",
          "population": "204900"
        },
        {
          "id": "2770",
          "name": "Ilobu",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "199000"
        },
        {
          "id": "2771",
          "name": "Offa",
          "countryCode": "NGA",
          "district": "Kwara & Kogi",
          "population": "197200"
        },
        {
          "id": "2772",
          "name": "Ikorodu",
          "countryCode": "NGA",
          "district": "Lagos",
          "population": "184900"
        },
        {
          "id": "2773",
          "name": "Ilawe-Ekiti",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "184500"
        },
        {
          "id": "2774",
          "name": "Owo",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "183500"
        },
        {
          "id": "2775",
          "name": "Ikirun",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "181400"
        },
        {
          "id": "2776",
          "name": "Shaki",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "174500"
        },
        {
          "id": "2777",
          "name": "Calabar",
          "countryCode": "NGA",
          "district": "Cross River",
          "population": "174400"
        },
        {
          "id": "2778",
          "name": "Ondo",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "173600"
        },
        {
          "id": "2779",
          "name": "Akure",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "162300"
        },
        {
          "id": "2780",
          "name": "Gusau",
          "countryCode": "NGA",
          "district": "Sokoto & Kebbi & Zam",
          "population": "158000"
        },
        {
          "id": "2781",
          "name": "Ijebu-Ode",
          "countryCode": "NGA",
          "district": "Ogun",
          "population": "156400"
        },
        {
          "id": "2782",
          "name": "Effon-Alaiye",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "153100"
        },
        {
          "id": "2783",
          "name": "Kumo",
          "countryCode": "NGA",
          "district": "Bauchi & Gombe",
          "population": "148000"
        },
        {
          "id": "2784",
          "name": "Shomolu",
          "countryCode": "NGA",
          "district": "Lagos",
          "population": "147700"
        },
        {
          "id": "2785",
          "name": "Oka-Akoko",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "142900"
        },
        {
          "id": "2786",
          "name": "Ikare",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "140800"
        },
        {
          "id": "2787",
          "name": "Sapele",
          "countryCode": "NGA",
          "district": "Edo & Delta",
          "population": "139200"
        },
        {
          "id": "2788",
          "name": "Deba Habe",
          "countryCode": "NGA",
          "district": "Bauchi & Gombe",
          "population": "138600"
        },
        {
          "id": "2789",
          "name": "Minna",
          "countryCode": "NGA",
          "district": "Niger",
          "population": "136900"
        },
        {
          "id": "2790",
          "name": "Warri",
          "countryCode": "NGA",
          "district": "Edo & Delta",
          "population": "126100"
        },
        {
          "id": "2791",
          "name": "Bida",
          "countryCode": "NGA",
          "district": "Niger",
          "population": "125500"
        },
        {
          "id": "2792",
          "name": "Ikire",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "123300"
        },
        {
          "id": "2793",
          "name": "Makurdi",
          "countryCode": "NGA",
          "district": "Benue",
          "population": "123100"
        },
        {
          "id": "2794",
          "name": "Lafia",
          "countryCode": "NGA",
          "district": "Plateau & Nassarawa",
          "population": "122500"
        },
        {
          "id": "2795",
          "name": "Inisa",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "119800"
        },
        {
          "id": "2796",
          "name": "Shagamu",
          "countryCode": "NGA",
          "district": "Ogun",
          "population": "117200"
        },
        {
          "id": "2797",
          "name": "Awka",
          "countryCode": "NGA",
          "district": "Anambra & Enugu & Eb",
          "population": "111200"
        },
        {
          "id": "2798",
          "name": "Gombe",
          "countryCode": "NGA",
          "district": "Bauchi & Gombe",
          "population": "107800"
        },
        {
          "id": "2799",
          "name": "Igboho",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "106800"
        },
        {
          "id": "2800",
          "name": "Ejigbo",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "105900"
        },
        {
          "id": "2801",
          "name": "Agege",
          "countryCode": "NGA",
          "district": "Lagos",
          "population": "105000"
        },
        {
          "id": "2802",
          "name": "Ise-Ekiti",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "103400"
        },
        {
          "id": "2803",
          "name": "Ugep",
          "countryCode": "NGA",
          "district": "Cross River",
          "population": "102600"
        },
        {
          "id": "2804",
          "name": "Epe",
          "countryCode": "NGA",
          "district": "Lagos",
          "population": "101000"
        },
        {
          "id": "2805",
          "name": "Alofi",
          "countryCode": "NIU",
          "district": "РІР‚вЂњ",
          "population": "682"
        },
        {
          "id": "2806",
          "name": "Kingston",
          "countryCode": "NFK",
          "district": "РІР‚вЂњ",
          "population": "800"
        },
        {
          "id": "2807",
          "name": "Oslo",
          "countryCode": "NOR",
          "district": "Oslo",
          "population": "508726"
        },
        {
          "id": "2808",
          "name": "Bergen",
          "countryCode": "NOR",
          "district": "Hordaland",
          "population": "230948"
        },
        {
          "id": "2809",
          "name": "Trondheim",
          "countryCode": "NOR",
          "district": "SР•С–r-TrР•С–ndelag",
          "population": "150166"
        },
        {
          "id": "2810",
          "name": "Stavanger",
          "countryCode": "NOR",
          "district": "Rogaland",
          "population": "108848"
        },
        {
          "id": "2811",
          "name": "Berum",
          "countryCode": "NOR",
          "district": "Akershus",
          "population": "101340"
        },
        {
          "id": "2812",
          "name": "Abidjan",
          "countryCode": "CIV",
          "district": "Abidjan",
          "population": "2500000"
        },
        {
          "id": "2813",
          "name": "Bouaké",
          "countryCode": "CIV",
          "district": "Bouaké",
          "population": "329850"
        },
        {
          "id": "2814",
          "name": "Yamoussoukro",
          "countryCode": "CIV",
          "district": "Yamoussoukro",
          "population": "130000"
        },
        {
          "id": "2815",
          "name": "Daloa",
          "countryCode": "CIV",
          "district": "Daloa",
          "population": "121842"
        },
        {
          "id": "2816",
          "name": "Korhogo",
          "countryCode": "CIV",
          "district": "Korhogo",
          "population": "109445"
        },
        {
          "id": "2695",
          "name": "Monaco-Ville",
          "countryCode": "MCO",
          "district": "РІР‚вЂњ",
          "population": "1234"
        },
        {
          "id": "2696",
          "name": "Ulan Bator",
          "countryCode": "MNG",
          "district": "Ulaanbaatar",
          "population": "773700"
        },
        {
          "id": "2697",
          "name": "Plymouth",
          "countryCode": "MSR",
          "district": "Plymouth",
          "population": "2000"
        },
        {
          "id": "2698",
          "name": "Maputo",
          "countryCode": "MOZ",
          "district": "Maputo",
          "population": "1018938"
        },
        {
          "id": "2699",
          "name": "Matola",
          "countryCode": "MOZ",
          "district": "Maputo",
          "population": "424662"
        },
        {
          "id": "2700",
          "name": "Beira",
          "countryCode": "MOZ",
          "district": "Sofala",
          "population": "397368"
        },
        {
          "id": "2701",
          "name": "Nampula",
          "countryCode": "MOZ",
          "district": "Nampula",
          "population": "303346"
        },
        {
          "id": "2702",
          "name": "Chimoio",
          "countryCode": "MOZ",
          "district": "Manica",
          "population": "171056"
        },
        {
          "id": "2703",
          "name": "Naeala-Porto",
          "countryCode": "MOZ",
          "district": "Nampula",
          "population": "158248"
        },
        {
          "id": "2704",
          "name": "Quelimane",
          "countryCode": "MOZ",
          "district": "Zambézia",
          "population": "150116"
        },
        {
          "id": "2705",
          "name": "Mocuba",
          "countryCode": "MOZ",
          "district": "Zambézia",
          "population": "124700"
        },
        {
          "id": "2706",
          "name": "Tete",
          "countryCode": "MOZ",
          "district": "Tete",
          "population": "101984"
        },
        {
          "id": "2707",
          "name": "Xai-Xai",
          "countryCode": "MOZ",
          "district": "Gaza",
          "population": "99442"
        },
        {
          "id": "2708",
          "name": "Gurue",
          "countryCode": "MOZ",
          "district": "Zambézia",
          "population": "99300"
        },
        {
          "id": "2709",
          "name": "Maxixe",
          "countryCode": "MOZ",
          "district": "Inhambane",
          "population": "93985"
        },
        {
          "id": "2710",
          "name": "Rangoon (Yangon)",
          "countryCode": "MMR",
          "district": "Rangoon [Yangon]",
          "population": "3361700"
        },
        {
          "id": "2711",
          "name": "Mandalay",
          "countryCode": "MMR",
          "district": "Mandalay",
          "population": "885300"
        },
        {
          "id": "2712",
          "name": "Moulmein (Mawlamyine)",
          "countryCode": "MMR",
          "district": "Mon",
          "population": "307900"
        },
        {
          "id": "2713",
          "name": "Pegu (Bago)",
          "countryCode": "MMR",
          "district": "Pegu [Bago]",
          "population": "190900"
        },
        {
          "id": "2714",
          "name": "Bassein (Pathein)",
          "countryCode": "MMR",
          "district": "Irrawaddy [Ayeyarwad",
          "population": "183900"
        },
        {
          "id": "2715",
          "name": "Monywa",
          "countryCode": "MMR",
          "district": "Sagaing",
          "population": "138600"
        },
        {
          "id": "2716",
          "name": "Sittwe (Akyab)",
          "countryCode": "MMR",
          "district": "Rakhine",
          "population": "137600"
        },
        {
          "id": "2717",
          "name": "Taunggyi (Taunggye)",
          "countryCode": "MMR",
          "district": "Shan",
          "population": "131500"
        },
        {
          "id": "2718",
          "name": "Meikhtila",
          "countryCode": "MMR",
          "district": "Mandalay",
          "population": "129700"
        },
        {
          "id": "2719",
          "name": "Mergui (Myeik)",
          "countryCode": "MMR",
          "district": "Tenasserim [Tanintha",
          "population": "122700"
        },
        {
          "id": "2720",
          "name": "Lashio (Lasho)",
          "countryCode": "MMR",
          "district": "Shan",
          "population": "107600"
        },
        {
          "id": "2721",
          "name": "Prome (Pyay)",
          "countryCode": "MMR",
          "district": "Pegu [Bago]",
          "population": "105700"
        },
        {
          "id": "2722",
          "name": "Henzada (Hinthada)",
          "countryCode": "MMR",
          "district": "Irrawaddy [Ayeyarwad",
          "population": "104700"
        },
        {
          "id": "2723",
          "name": "Myingyan",
          "countryCode": "MMR",
          "district": "Mandalay",
          "population": "103600"
        },
        {
          "id": "2724",
          "name": "Tavoy (Dawei)",
          "countryCode": "MMR",
          "district": "Tenasserim [Tanintha",
          "population": "96800"
        },
        {
          "id": "2725",
          "name": "Pagakku (Pakokku)",
          "countryCode": "MMR",
          "district": "Magwe [Magway]",
          "population": "94800"
        },
        {
          "id": "2726",
          "name": "Windhoek",
          "countryCode": "NAM",
          "district": "Khomas",
          "population": "169000"
        },
        {
          "id": "2727",
          "name": "Yangor",
          "countryCode": "NRU",
          "district": "",
          "population": "4050"
        },
        {
          "id": "2728",
          "name": "Yaren",
          "countryCode": "NRU",
          "district": "",
          "population": "559"
        },
        {
          "id": "2729",
          "name": "Kathmandu",
          "countryCode": "NPL",
          "district": "Central",
          "population": "591835"
        },
        {
          "id": "2730",
          "name": "Biratnagar",
          "countryCode": "NPL",
          "district": "Eastern",
          "population": "157764"
        },
        {
          "id": "2731",
          "name": "Pokhara",
          "countryCode": "NPL",
          "district": "Western",
          "population": "146318"
        },
        {
          "id": "2732",
          "name": "Lalitapur",
          "countryCode": "NPL",
          "district": "Central",
          "population": "145847"
        },
        {
          "id": "2733",
          "name": "Birgunj",
          "countryCode": "NPL",
          "district": "Central",
          "population": "90639"
        },
        {
          "id": "2734",
          "name": "Managua",
          "countryCode": "NIC",
          "district": "Managua",
          "population": "959000"
        },
        {
          "id": "2735",
          "name": "León",
          "countryCode": "NIC",
          "district": "León",
          "population": "123865"
        },
        {
          "id": "2736",
          "name": "Chinandega",
          "countryCode": "NIC",
          "district": "Chinandega",
          "population": "97387"
        },
        {
          "id": "2737",
          "name": "Masaya",
          "countryCode": "NIC",
          "district": "Masaya",
          "population": "88971"
        },
        {
          "id": "2738",
          "name": "Niamey",
          "countryCode": "NER",
          "district": "Niamey",
          "population": "420000"
        },
        {
          "id": "2739",
          "name": "Zinder",
          "countryCode": "NER",
          "district": "Zinder",
          "population": "120892"
        },
        {
          "id": "2740",
          "name": "Maradi",
          "countryCode": "NER",
          "district": "Maradi",
          "population": "112965"
        },
        {
          "id": "2741",
          "name": "Lagos",
          "countryCode": "NGA",
          "district": "Lagos",
          "population": "1518000"
        },
        {
          "id": "2742",
          "name": "Ibadan",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "1432000"
        },
        {
          "id": "2743",
          "name": "Ogbomosho",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "730000"
        },
        {
          "id": "2744",
          "name": "Kano",
          "countryCode": "NGA",
          "district": "Kano & Jigawa",
          "population": "674100"
        },
        {
          "id": "2745",
          "name": "Oshogbo",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "476800"
        },
        {
          "id": "2746",
          "name": "Ilorin",
          "countryCode": "NGA",
          "district": "Kwara & Kogi",
          "population": "475800"
        },
        {
          "id": "2747",
          "name": "Abeokuta",
          "countryCode": "NGA",
          "district": "Ogun",
          "population": "427400"
        },
        {
          "id": "2748",
          "name": "Port Harcourt",
          "countryCode": "NGA",
          "district": "Rivers & Bayelsa",
          "population": "410000"
        },
        {
          "id": "2749",
          "name": "Zaria",
          "countryCode": "NGA",
          "district": "Kaduna",
          "population": "379200"
        },
        {
          "id": "2750",
          "name": "Ilesha",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "378400"
        },
        {
          "id": "2751",
          "name": "Onitsha",
          "countryCode": "NGA",
          "district": "Anambra & Enugu & Eb",
          "population": "371900"
        },
        {
          "id": "2752",
          "name": "Iwo",
          "countryCode": "NGA",
          "district": "Oyo & Osun",
          "population": "362000"
        },
        {
          "id": "2753",
          "name": "Ado-Ekiti",
          "countryCode": "NGA",
          "district": "Ondo & Ekiti",
          "population": "359400"
        },
        {
          "id": "2754",
          "name": "Abuja",
          "countryCode": "NGA",
          "district": "Federal Capital Dist",
          "population": "350100"
        },
        {
          "id": "2755",
          "name": "Kaduna",
          "countryCode": "NGA",
          "district": "Kaduna",
          "population": "342200"
        },
        {
          "id": "2636",
          "name": "San Pedro Garza GarcР”В·a",
          "countryCode": "MEX",
          "district": "Nuevo LeР“С–n",
          "population": "126147"
        },
        {
          "id": "2637",
          "name": "CuauhtР“В©moc",
          "countryCode": "MEX",
          "district": "Chihuahua",
          "population": "124279"
        },
        {
          "id": "2638",
          "name": "Manzanillo",
          "countryCode": "MEX",
          "district": "Colima",
          "population": "124014"
        },
        {
          "id": "2639",
          "name": "Iguala de la Independencia",
          "countryCode": "MEX",
          "district": "Guerrero",
          "population": "123883"
        },
        {
          "id": "2640",
          "name": "Zacatecas",
          "countryCode": "MEX",
          "district": "Zacatecas",
          "population": "123700"
        },
        {
          "id": "2641",
          "name": "Tlajomulco de Zsniga",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "123220"
        },
        {
          "id": "2642",
          "name": "Tulancingo de Bravo",
          "countryCode": "MEX",
          "district": "Hidalgo",
          "population": "121946"
        },
        {
          "id": "2643",
          "name": "Zinacantepec",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "121715"
        },
        {
          "id": "2644",
          "name": "San Martkn Texmelucan",
          "countryCode": "MEX",
          "district": "Puebla",
          "population": "121093"
        },
        {
          "id": "2645",
          "name": "Tepatitlin de Morelos",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "118948"
        },
        {
          "id": "2646",
          "name": "Martknez de la Torre",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "118815"
        },
        {
          "id": "2647",
          "name": "Orizaba",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "118488"
        },
        {
          "id": "2648",
          "name": "Apatzingin",
          "countryCode": "MEX",
          "district": "MichoacР”Р‡n de Ocampo",
          "population": "117849"
        },
        {
          "id": "2649",
          "name": "Atlixco",
          "countryCode": "MEX",
          "district": "Puebla",
          "population": "117019"
        },
        {
          "id": "2650",
          "name": "Delicias",
          "countryCode": "MEX",
          "district": "Chihuahua",
          "population": "116132"
        },
        {
          "id": "2651",
          "name": "Ixtlahuaca",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "115548"
        },
        {
          "id": "2652",
          "name": "El Mante",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "112453"
        },
        {
          "id": "2653",
          "name": "Lerdo",
          "countryCode": "MEX",
          "district": "Durango",
          "population": "112272"
        },
        {
          "id": "2654",
          "name": "Almoloya de Juirez",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "110550"
        },
        {
          "id": "2655",
          "name": "Acimbaro",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "110487"
        },
        {
          "id": "2656",
          "name": "Acuna",
          "countryCode": "MEX",
          "district": "Coahuila de Zaragoza",
          "population": "110388"
        },
        {
          "id": "2657",
          "name": "Guadalupe",
          "countryCode": "MEX",
          "district": "Zacatecas",
          "population": "108881"
        },
        {
          "id": "2658",
          "name": "Huejutla de Reyes",
          "countryCode": "MEX",
          "district": "Hidalgo",
          "population": "108017"
        },
        {
          "id": "2659",
          "name": "Hidalgo",
          "countryCode": "MEX",
          "district": "Michoacin de Ocampo",
          "population": "106198"
        },
        {
          "id": "2660",
          "name": "Los Cabos",
          "countryCode": "MEX",
          "district": "Baja California Sur",
          "population": "105199"
        },
        {
          "id": "2661",
          "name": "Comitin de Domknguez",
          "countryCode": "MEX",
          "district": "Chiapas",
          "population": "104986"
        },
        {
          "id": "2662",
          "name": "Cunduacin",
          "countryCode": "MEX",
          "district": "Tabasco",
          "population": "104164"
        },
        {
          "id": "2663",
          "name": "Rko Bravo",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "103901"
        },
        {
          "id": "2664",
          "name": "Temapache",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "102824"
        },
        {
          "id": "2665",
          "name": "Chilapa de Alvarez",
          "countryCode": "MEX",
          "district": "Guerrero",
          "population": "102716"
        },
        {
          "id": "2666",
          "name": "Hidalgo del Parral",
          "countryCode": "MEX",
          "district": "Chihuahua",
          "population": "100881"
        },
        {
          "id": "2667",
          "name": "San Francisco del Rincón",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "100149"
        },
        {
          "id": "2668",
          "name": "Taxco de Alarcón",
          "countryCode": "MEX",
          "district": "Guerrero",
          "population": "99907"
        },
        {
          "id": "2669",
          "name": "Zumpango",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "99781"
        },
        {
          "id": "2670",
          "name": "San Pedro Cholula",
          "countryCode": "MEX",
          "district": "Puebla",
          "population": "99734"
        },
        {
          "id": "2671",
          "name": "Lerma",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "99714"
        },
        {
          "id": "2672",
          "name": "Tecomin",
          "countryCode": "MEX",
          "district": "Colima",
          "population": "99296"
        },
        {
          "id": "2673",
          "name": "Las Margaritas",
          "countryCode": "MEX",
          "district": "Chiapas",
          "population": "97389"
        },
        {
          "id": "2674",
          "name": "Cosoleacaque",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "97199"
        },
        {
          "id": "2675",
          "name": "San Luis de la Paz",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "96763"
        },
        {
          "id": "2676",
          "name": "José Azueta",
          "countryCode": "MEX",
          "district": "Guerrero",
          "population": "95448"
        },
        {
          "id": "2677",
          "name": "Santiago Ixcuintla",
          "countryCode": "MEX",
          "district": "Nayarit",
          "population": "95311"
        },
        {
          "id": "2678",
          "name": "San Felipe",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "95305"
        },
        {
          "id": "2679",
          "name": "Tejupilco",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "94934"
        },
        {
          "id": "2680",
          "name": "Tantoyuca",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "94709"
        },
        {
          "id": "2681",
          "name": "Salvatierra",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "94322"
        },
        {
          "id": "2682",
          "name": "Tultepec",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "93364"
        },
        {
          "id": "2683",
          "name": "Temixco",
          "countryCode": "MEX",
          "district": "Morelos",
          "population": "92686"
        },
        {
          "id": "2684",
          "name": "Matamoros",
          "countryCode": "MEX",
          "district": "Coahuila de Zaragoza",
          "population": "91858"
        },
        {
          "id": "2685",
          "name": "PР”Р‡nuco",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "90551"
        },
        {
          "id": "2686",
          "name": "El Fuerte",
          "countryCode": "MEX",
          "district": "Sinaloa",
          "population": "89556"
        },
        {
          "id": "2687",
          "name": "Tierra Blanca",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "89143"
        },
        {
          "id": "2688",
          "name": "Weno",
          "countryCode": "FSM",
          "district": "Chuuk",
          "population": "22000"
        },
        {
          "id": "2689",
          "name": "Palikir",
          "countryCode": "FSM",
          "district": "Pohnpei",
          "population": "8600"
        },
        {
          "id": "2690",
          "name": "Chisinau",
          "countryCode": "MDA",
          "district": "Chisinau",
          "population": "719900"
        },
        {
          "id": "2691",
          "name": "Tiraspol",
          "countryCode": "MDA",
          "district": "Dnjestria",
          "population": "194300"
        },
        {
          "id": "2692",
          "name": "Balti",
          "countryCode": "MDA",
          "district": "Balti",
          "population": "153400"
        },
        {
          "id": "2693",
          "name": "Bender (Tighina)",
          "countryCode": "MDA",
          "district": "Bender (Tighina)",
          "population": "125700"
        },
        {
          "id": "2694",
          "name": "Monte-Carlo",
          "countryCode": "MCO",
          "district": "",
          "population": "13154"
        },
        {
          "id": "2577",
          "name": "Coacalco de Berriozibal",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "252270"
        },
        {
          "id": "2578",
          "name": "Pachuca de Soto",
          "countryCode": "MEX",
          "district": "Hidalgo",
          "population": "244688"
        },
        {
          "id": "2579",
          "name": "General Escobedo",
          "countryCode": "MEX",
          "district": "Nuevo León",
          "population": "232961"
        },
        {
          "id": "2580",
          "name": "Salamanca",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "226864"
        },
        {
          "id": "2581",
          "name": "Santa Catarina",
          "countryCode": "MEX",
          "district": "Nuevo LeР“С–n",
          "population": "226573"
        },
        {
          "id": "2582",
          "name": "Tehuacin",
          "countryCode": "MEX",
          "district": "Puebla",
          "population": "225943"
        },
        {
          "id": "2583",
          "name": "Chalco",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "222201"
        },
        {
          "id": "2584",
          "name": "Cirdenas",
          "countryCode": "MEX",
          "district": "Tabasco",
          "population": "216903"
        },
        {
          "id": "2585",
          "name": "Campeche",
          "countryCode": "MEX",
          "district": "Campeche",
          "population": "216735"
        },
        {
          "id": "2586",
          "name": "La Paz",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "213045"
        },
        {
          "id": "2587",
          "name": "Othón P. Blanco (Chetumal)",
          "countryCode": "MEX",
          "district": "Quintana Roo",
          "population": "208014"
        },
        {
          "id": "2588",
          "name": "Texcoco",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "203681"
        },
        {
          "id": "2589",
          "name": "La Paz",
          "countryCode": "MEX",
          "district": "Baja California Sur",
          "population": "196708"
        },
        {
          "id": "2590",
          "name": "Metepec",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "194265"
        },
        {
          "id": "2591",
          "name": "Monclova",
          "countryCode": "MEX",
          "district": "Coahuila de Zaragoza",
          "population": "193657"
        },
        {
          "id": "2592",
          "name": "Huixquilucan",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "193156"
        },
        {
          "id": "2593",
          "name": "Chilpancingo de los Bravo",
          "countryCode": "MEX",
          "district": "Guerrero",
          "population": "192509"
        },
        {
          "id": "2594",
          "name": "Puerto Vallarta",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "183741"
        },
        {
          "id": "2595",
          "name": "Fresnillo",
          "countryCode": "MEX",
          "district": "Zacatecas",
          "population": "182744"
        },
        {
          "id": "2596",
          "name": "Ciudad Madero",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "182012"
        },
        {
          "id": "2597",
          "name": "Soledad de Graciano Sinchez",
          "countryCode": "MEX",
          "district": "San Luis Potosk",
          "population": "179956"
        },
        {
          "id": "2598",
          "name": "San Juan del Rko",
          "countryCode": "MEX",
          "district": "Querétaro",
          "population": "179300"
        },
        {
          "id": "2599",
          "name": "San Felipe del Progreso",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "177330"
        },
        {
          "id": "2600",
          "name": "Córdoba",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "176952"
        },
        {
          "id": "2601",
          "name": "Tecimac",
          "countryCode": "MEX",
          "district": "Mexico",
          "population": "172410"
        },
        {
          "id": "2602",
          "name": "Ocosingo",
          "countryCode": "MEX",
          "district": "Chiapas",
          "population": "171495"
        },
        {
          "id": "2603",
          "name": "Carmen",
          "countryCode": "MEX",
          "district": "Campeche",
          "population": "171367"
        },
        {
          "id": "2604",
          "name": "Lizaro Cirdenas",
          "countryCode": "MEX",
          "district": "Michoacin de Ocampo",
          "population": "170878"
        },
        {
          "id": "2605",
          "name": "Jiutepec",
          "countryCode": "MEX",
          "district": "Morelos",
          "population": "170428"
        },
        {
          "id": "2606",
          "name": "Papantla",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "170123"
        },
        {
          "id": "2607",
          "name": "Comalcalco",
          "countryCode": "MEX",
          "district": "Tabasco",
          "population": "164640"
        },
        {
          "id": "2608",
          "name": "Zamora",
          "countryCode": "MEX",
          "district": "Michoacin de Ocampo",
          "population": "161191"
        },
        {
          "id": "2609",
          "name": "Nogales",
          "countryCode": "MEX",
          "district": "Sonora",
          "population": "159103"
        },
        {
          "id": "2610",
          "name": "Huimanguillo",
          "countryCode": "MEX",
          "district": "Tabasco",
          "population": "158335"
        },
        {
          "id": "2611",
          "name": "Cuautla",
          "countryCode": "MEX",
          "district": "Morelos",
          "population": "153132"
        },
        {
          "id": "2612",
          "name": "Minatitlin",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "152983"
        },
        {
          "id": "2613",
          "name": "Poza Rica de Hidalgo",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "152678"
        },
        {
          "id": "2614",
          "name": "Ciudad Valles",
          "countryCode": "MEX",
          "district": "San Luis Potosk",
          "population": "146411"
        },
        {
          "id": "2615",
          "name": "Navolato",
          "countryCode": "MEX",
          "district": "Sinaloa",
          "population": "145396"
        },
        {
          "id": "2616",
          "name": "San Luis Rio Colorado",
          "countryCode": "MEX",
          "district": "Sonora",
          "population": "145276"
        },
        {
          "id": "2617",
          "name": "Pénjamo",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "143927"
        },
        {
          "id": "2618",
          "name": "San Andrés Tuxtla",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "142251"
        },
        {
          "id": "2619",
          "name": "Guanajuato",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "141215"
        },
        {
          "id": "2620",
          "name": "Navojoa",
          "countryCode": "MEX",
          "district": "Sonora",
          "population": "140495"
        },
        {
          "id": "2621",
          "name": "Ziticuaro",
          "countryCode": "MEX",
          "district": "Michoacin de Ocampo",
          "population": "137970"
        },
        {
          "id": "2622",
          "name": "Boca del Rko",
          "countryCode": "MEX",
          "district": "Veracruz-Llave",
          "population": "135721"
        },
        {
          "id": "2623",
          "name": "Allende",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "134645"
        },
        {
          "id": "2624",
          "name": "Silao",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "134037"
        },
        {
          "id": "2625",
          "name": "Macuspana",
          "countryCode": "MEX",
          "district": "Tabasco",
          "population": "133795"
        },
        {
          "id": "2626",
          "name": "San Juan Bautista Tuxtepec",
          "countryCode": "MEX",
          "district": "Oaxaca",
          "population": "133675"
        },
        {
          "id": "2627",
          "name": "San CristР“С–bal de las Casas",
          "countryCode": "MEX",
          "district": "Chiapas",
          "population": "132317"
        },
        {
          "id": "2628",
          "name": "Valle de Santiago",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "130557"
        },
        {
          "id": "2629",
          "name": "Guaymas",
          "countryCode": "MEX",
          "district": "Sonora",
          "population": "130108"
        },
        {
          "id": "2630",
          "name": "Colima",
          "countryCode": "MEX",
          "district": "Colima",
          "population": "129454"
        },
        {
          "id": "2631",
          "name": "Dolores Hidalgo",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "128675"
        },
        {
          "id": "2632",
          "name": "Lagos de Moreno",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "127949"
        },
        {
          "id": "2633",
          "name": "Piedras Negras",
          "countryCode": "MEX",
          "district": "Coahuila de Zaragoza",
          "population": "127898"
        },
        {
          "id": "2634",
          "name": "Altamira",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "127490"
        },
        {
          "id": "2635",
          "name": "TР•вЂєxpam",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "126475"
        },
        {
          "id": "2518",
          "name": "Puebla",
          "countryCode": "MEX",
          "district": "Puebla",
          "population": "1346176"
        },
        {
          "id": "2519",
          "name": "NezahualcР“С–yotl",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "1224924"
        },
        {
          "id": "2520",
          "name": "JuР”Р‡rez",
          "countryCode": "MEX",
          "district": "Chihuahua",
          "population": "1217818"
        },
        {
          "id": "2521",
          "name": "Tijuana",
          "countryCode": "MEX",
          "district": "Baja California",
          "population": "1212232"
        },
        {
          "id": "2522",
          "name": "LeР“С–n",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "1133576"
        },
        {
          "id": "2523",
          "name": "Monterrey",
          "countryCode": "MEX",
          "district": "Nuevo LeР“С–n",
          "population": "1108499"
        },
        {
          "id": "2524",
          "name": "Zapopan",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "1002239"
        },
        {
          "id": "2525",
          "name": "Naucalpan de JuР”Р‡rez",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "857511"
        },
        {
          "id": "2526",
          "name": "Mexicali",
          "countryCode": "MEX",
          "district": "Baja California",
          "population": "764902"
        },
        {
          "id": "2527",
          "name": "CuliacР”Р‡n",
          "countryCode": "MEX",
          "district": "Sinaloa",
          "population": "744859"
        },
        {
          "id": "2528",
          "name": "Acapulco de JuР”Р‡rez",
          "countryCode": "MEX",
          "district": "Guerrero",
          "population": "721011"
        },
        {
          "id": "2529",
          "name": "Tlalnepantla de Baz",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "720755"
        },
        {
          "id": "2530",
          "name": "MР“В©rida",
          "countryCode": "MEX",
          "district": "YucatР”Р‡n",
          "population": "703324"
        },
        {
          "id": "2531",
          "name": "Chihuahua",
          "countryCode": "MEX",
          "district": "Chihuahua",
          "population": "670208"
        },
        {
          "id": "2532",
          "name": "San Luis PotosР”В·",
          "countryCode": "MEX",
          "district": "San Luis PotosР”В·",
          "population": "669353"
        },
        {
          "id": "2533",
          "name": "Guadalupe",
          "countryCode": "MEX",
          "district": "Nuevo LeР“С–n",
          "population": "668780"
        },
        {
          "id": "2534",
          "name": "Toluca",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "665617"
        },
        {
          "id": "2535",
          "name": "Aguascalientes",
          "countryCode": "MEX",
          "district": "Aguascalientes",
          "population": "643360"
        },
        {
          "id": "2536",
          "name": "QuerР“В©taro",
          "countryCode": "MEX",
          "district": "QuerР“В©taro de Arteaga",
          "population": "639839"
        },
        {
          "id": "2537",
          "name": "Morelia",
          "countryCode": "MEX",
          "district": "MichoacР”Р‡n de Ocampo",
          "population": "619958"
        },
        {
          "id": "2538",
          "name": "Hermosillo",
          "countryCode": "MEX",
          "district": "Sonora",
          "population": "608697"
        },
        {
          "id": "2539",
          "name": "Saltillo",
          "countryCode": "MEX",
          "district": "Coahuila de Zaragoza",
          "population": "577352"
        },
        {
          "id": "2540",
          "name": "TorreР“С–n",
          "countryCode": "MEX",
          "district": "Coahuila de Zaragoza",
          "population": "529093"
        },
        {
          "id": "2541",
          "name": "Centro (Villahermosa)",
          "countryCode": "MEX",
          "district": "Tabasco",
          "population": "519873"
        },
        {
          "id": "2542",
          "name": "San NicolР”Р‡s de los Garza",
          "countryCode": "MEX",
          "district": "Nuevo LeР“С–n",
          "population": "495540"
        },
        {
          "id": "2543",
          "name": "Durango",
          "countryCode": "MEX",
          "district": "Durango",
          "population": "490524"
        },
        {
          "id": "2544",
          "name": "ChimalhuacР”Р‡n",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "490245"
        },
        {
          "id": "2545",
          "name": "Tlaquepaque",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "475472"
        },
        {
          "id": "2546",
          "name": "AtizapР”Р‡n de Zaragoza",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "467262"
        },
        {
          "id": "2547",
          "name": "Veracruz",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "457119"
        },
        {
          "id": "2548",
          "name": "CuautitlР”Р‡n Izcalli",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "452976"
        },
        {
          "id": "2549",
          "name": "Irapuato",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "440039"
        },
        {
          "id": "2550",
          "name": "Tuxtla GutiР“В©rrez",
          "countryCode": "MEX",
          "district": "Chiapas",
          "population": "433544"
        },
        {
          "id": "2551",
          "name": "TultitlР”Р‡n",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "432411"
        },
        {
          "id": "2552",
          "name": "Reynosa",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "419776"
        },
        {
          "id": "2553",
          "name": "Benito JuР”Р‡rez",
          "countryCode": "MEX",
          "district": "Quintana Roo",
          "population": "419276"
        },
        {
          "id": "2554",
          "name": "Matamoros",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "416428"
        },
        {
          "id": "2555",
          "name": "Xalapa",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "390058"
        },
        {
          "id": "2556",
          "name": "Celaya",
          "countryCode": "MEX",
          "district": "Guanajuato",
          "population": "382140"
        },
        {
          "id": "2557",
          "name": "MazatlР”Р‡n",
          "countryCode": "MEX",
          "district": "Sinaloa",
          "population": "380265"
        },
        {
          "id": "2558",
          "name": "Ensenada",
          "countryCode": "MEX",
          "district": "Baja California",
          "population": "369573"
        },
        {
          "id": "2559",
          "name": "Ahome",
          "countryCode": "MEX",
          "district": "Sinaloa",
          "population": "358663"
        },
        {
          "id": "2560",
          "name": "Cajeme",
          "countryCode": "MEX",
          "district": "Sonora",
          "population": "355679"
        },
        {
          "id": "2561",
          "name": "Cuernavaca",
          "countryCode": "MEX",
          "district": "Morelos",
          "population": "337966"
        },
        {
          "id": "2562",
          "name": "TonalР”Р‡",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "336109"
        },
        {
          "id": "2563",
          "name": "Valle de Chalco Solidaridad",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "323113"
        },
        {
          "id": "2564",
          "name": "Nuevo Laredo",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "310277"
        },
        {
          "id": "2565",
          "name": "Tepic",
          "countryCode": "MEX",
          "district": "Nayarit",
          "population": "305025"
        },
        {
          "id": "2566",
          "name": "Tampico",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "294789"
        },
        {
          "id": "2567",
          "name": "Ixtapaluca",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "293160"
        },
        {
          "id": "2568",
          "name": "Apodaca",
          "countryCode": "MEX",
          "district": "Nuevo LeР“С–n",
          "population": "282941"
        },
        {
          "id": "2569",
          "name": "Guasave",
          "countryCode": "MEX",
          "district": "Sinaloa",
          "population": "277201"
        },
        {
          "id": "2570",
          "name": "GР“С–mez Palacio",
          "countryCode": "MEX",
          "district": "Durango",
          "population": "272806"
        },
        {
          "id": "2571",
          "name": "Tapachula",
          "countryCode": "MEX",
          "district": "Chiapas",
          "population": "271141"
        },
        {
          "id": "2572",
          "name": "NicolР”Р‡s Romero",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "269393"
        },
        {
          "id": "2573",
          "name": "Coatzacoalcos",
          "countryCode": "MEX",
          "district": "Veracruz",
          "population": "267037"
        },
        {
          "id": "2574",
          "name": "Uruapan",
          "countryCode": "MEX",
          "district": "MichoacР”Р‡n de Ocampo",
          "population": "265211"
        },
        {
          "id": "2575",
          "name": "Victoria",
          "countryCode": "MEX",
          "district": "Tamaulipas",
          "population": "262686"
        },
        {
          "id": "2576",
          "name": "Oaxaca de JuР”Р‡rez",
          "countryCode": "MEX",
          "district": "Oaxaca",
          "population": "256848"
        },
        {
          "id": "2458",
          "name": "Mahajanga",
          "countryCode": "MDG",
          "district": "Mahajanga",
          "population": "100807"
        },
        {
          "id": "2459",
          "name": "Fianarantsoa",
          "countryCode": "MDG",
          "district": "Fianarantsoa",
          "population": "99005"
        },
        {
          "id": "2460",
          "name": "Skopje",
          "countryCode": "MKD",
          "district": "Skopje",
          "population": "444299"
        },
        {
          "id": "2461",
          "name": "Blantyre",
          "countryCode": "MWI",
          "district": "Blantyre",
          "population": "478155"
        },
        {
          "id": "2462",
          "name": "Lilongwe",
          "countryCode": "MWI",
          "district": "Lilongwe",
          "population": "435964"
        },
        {
          "id": "2463",
          "name": "Male",
          "countryCode": "MDV",
          "district": "Maale",
          "population": "71000"
        },
        {
          "id": "2464",
          "name": "Kuala Lumpur",
          "countryCode": "MYS",
          "district": "Wilayah Persekutuan",
          "population": "1297526"
        },
        {
          "id": "2465",
          "name": "Ipoh",
          "countryCode": "MYS",
          "district": "Perak",
          "population": "382853"
        },
        {
          "id": "2466",
          "name": "Johor Baharu",
          "countryCode": "MYS",
          "district": "Johor",
          "population": "328436"
        },
        {
          "id": "2467",
          "name": "Petaling Jaya",
          "countryCode": "MYS",
          "district": "Selangor",
          "population": "254350"
        },
        {
          "id": "2468",
          "name": "Kelang",
          "countryCode": "MYS",
          "district": "Selangor",
          "population": "243355"
        },
        {
          "id": "2469",
          "name": "Kuala Terengganu",
          "countryCode": "MYS",
          "district": "Terengganu",
          "population": "228119"
        },
        {
          "id": "2470",
          "name": "Pinang",
          "countryCode": "MYS",
          "district": "Pulau Pinang",
          "population": "219603"
        },
        {
          "id": "2471",
          "name": "Kota Bharu",
          "countryCode": "MYS",
          "district": "Kelantan",
          "population": "219582"
        },
        {
          "id": "2472",
          "name": "Kuantan",
          "countryCode": "MYS",
          "district": "Pahang",
          "population": "199484"
        },
        {
          "id": "2473",
          "name": "Taiping",
          "countryCode": "MYS",
          "district": "Perak",
          "population": "183261"
        },
        {
          "id": "2474",
          "name": "Seremban",
          "countryCode": "MYS",
          "district": "Negeri Sembilan",
          "population": "182869"
        },
        {
          "id": "2475",
          "name": "Kuching",
          "countryCode": "MYS",
          "district": "Sarawak",
          "population": "148059"
        },
        {
          "id": "2476",
          "name": "Sibu",
          "countryCode": "MYS",
          "district": "Sarawak",
          "population": "126381"
        },
        {
          "id": "2477",
          "name": "Sandakan",
          "countryCode": "MYS",
          "district": "Sabah",
          "population": "125841"
        },
        {
          "id": "2478",
          "name": "Alor Setar",
          "countryCode": "MYS",
          "district": "Kedah",
          "population": "124412"
        },
        {
          "id": "2479",
          "name": "Selayang Baru",
          "countryCode": "MYS",
          "district": "Selangor",
          "population": "124228"
        },
        {
          "id": "2480",
          "name": "Sungai Petani",
          "countryCode": "MYS",
          "district": "Kedah",
          "population": "114763"
        },
        {
          "id": "2481",
          "name": "Shah Alam",
          "countryCode": "MYS",
          "district": "Selangor",
          "population": "102019"
        },
        {
          "id": "2482",
          "name": "Bamako",
          "countryCode": "MLI",
          "district": "Bamako",
          "population": "809552"
        },
        {
          "id": "2483",
          "name": "Birkirkara",
          "countryCode": "MLT",
          "district": "Outer Harbour",
          "population": "21445"
        },
        {
          "id": "2484",
          "name": "Valletta",
          "countryCode": "MLT",
          "district": "Inner Harbour",
          "population": "7073"
        },
        {
          "id": "2485",
          "name": "Casablanca",
          "countryCode": "MAR",
          "district": "Casablanca",
          "population": "2940623"
        },
        {
          "id": "2486",
          "name": "Rabat",
          "countryCode": "MAR",
          "district": "Rabat-SalР“В©-Zammour-Z",
          "population": "623457"
        },
        {
          "id": "2487",
          "name": "Marrakech",
          "countryCode": "MAR",
          "district": "Marrakech-Tensift-Al",
          "population": "621914"
        },
        {
          "id": "2488",
          "name": "FР”РЊs",
          "countryCode": "MAR",
          "district": "FР”РЊs-Boulemane",
          "population": "541162"
        },
        {
          "id": "2489",
          "name": "Tanger",
          "countryCode": "MAR",
          "district": "Tanger-TР“В©touan",
          "population": "521735"
        },
        {
          "id": "2490",
          "name": "SalР“В©",
          "countryCode": "MAR",
          "district": "Rabat-SalР“В©-Zammour-Z",
          "population": "504420"
        },
        {
          "id": "2491",
          "name": "MeknР”РЊs",
          "countryCode": "MAR",
          "district": "MeknР”РЊs-Tafilalet",
          "population": "460000"
        },
        {
          "id": "2492",
          "name": "Oujda",
          "countryCode": "MAR",
          "district": "Oriental",
          "population": "365382"
        },
        {
          "id": "2493",
          "name": "KР“В©nitra",
          "countryCode": "MAR",
          "district": "Gharb-Chrarda-BР“В©ni H",
          "population": "292600"
        },
        {
          "id": "2494",
          "name": "TР“В©touan",
          "countryCode": "MAR",
          "district": "Tanger-TР“В©touan",
          "population": "277516"
        },
        {
          "id": "2495",
          "name": "Safi",
          "countryCode": "MAR",
          "district": "Doukkala-Abda",
          "population": "262300"
        },
        {
          "id": "2496",
          "name": "Agadir",
          "countryCode": "MAR",
          "district": "Souss Massa-DraР”Рѓ",
          "population": "155244"
        },
        {
          "id": "2497",
          "name": "Mohammedia",
          "countryCode": "MAR",
          "district": "Casablanca",
          "population": "154706"
        },
        {
          "id": "2498",
          "name": "Khouribga",
          "countryCode": "MAR",
          "district": "Chaouia-Ouardigha",
          "population": "152090"
        },
        {
          "id": "2499",
          "name": "Beni-Mellal",
          "countryCode": "MAR",
          "district": "Tadla-Azilal",
          "population": "140212"
        },
        {
          "id": "2500",
          "name": "TР“В©mara",
          "countryCode": "MAR",
          "district": "Rabat-SalР“В©-Zammour-Z",
          "population": "126303"
        },
        {
          "id": "2501",
          "name": "El Jadida",
          "countryCode": "MAR",
          "district": "Doukkala-Abda",
          "population": "119083"
        },
        {
          "id": "2502",
          "name": "Nador",
          "countryCode": "MAR",
          "district": "Oriental",
          "population": "112450"
        },
        {
          "id": "2503",
          "name": "Ksar el Kebir",
          "countryCode": "MAR",
          "district": "Tanger-TР“В©touan",
          "population": "107065"
        },
        {
          "id": "2504",
          "name": "Settat",
          "countryCode": "MAR",
          "district": "Chaouia-Ouardigha",
          "population": "96200"
        },
        {
          "id": "2505",
          "name": "Taza",
          "countryCode": "MAR",
          "district": "Taza-Al Hoceima-Taou",
          "population": "92700"
        },
        {
          "id": "2506",
          "name": "El Araich",
          "countryCode": "MAR",
          "district": "Tanger-TР“В©touan",
          "population": "90400"
        },
        {
          "id": "2507",
          "name": "Dalap-Uliga-Darrit",
          "countryCode": "MHL",
          "district": "Majuro",
          "population": "28000"
        },
        {
          "id": "2508",
          "name": "Fort-de-France",
          "countryCode": "MTQ",
          "district": "Fort-de-France",
          "population": "94050"
        },
        {
          "id": "2509",
          "name": "Nouakchott",
          "countryCode": "MRT",
          "district": "Nouakchott",
          "population": "667300"
        },
        {
          "id": "2510",
          "name": "NouР”Рѓdhibou",
          "countryCode": "MRT",
          "district": "Dakhlet NouР”Рѓdhibou",
          "population": "97600"
        },
        {
          "id": "2511",
          "name": "Port-Louis",
          "countryCode": "MUS",
          "district": "Port-Louis",
          "population": "138200"
        },
        {
          "id": "2512",
          "name": "Beau Bassin-Rose Hill",
          "countryCode": "MUS",
          "district": "Plaines Wilhelms",
          "population": "100616"
        },
        {
          "id": "2513",
          "name": "Vacoas-Phoenix",
          "countryCode": "MUS",
          "district": "Plaines Wilhelms",
          "population": "98464"
        },
        {
          "id": "2514",
          "name": "Mamoutzou",
          "countryCode": "MYT",
          "district": "Mamoutzou",
          "population": "12000"
        },
        {
          "id": "2515",
          "name": "Ciudad de MР“В©xico",
          "countryCode": "MEX",
          "district": "Distrito Federal",
          "population": "8591309"
        },
        {
          "id": "2516",
          "name": "Guadalajara",
          "countryCode": "MEX",
          "district": "Jalisco",
          "population": "1647720"
        },
        {
          "id": "2517",
          "name": "Ecatepec de Morelos",
          "countryCode": "MEX",
          "district": "MР“В©xico",
          "population": "1620303"
        },
        {
          "id": "2398",
          "name": "Namwon",
          "countryCode": "KOR",
          "district": "Chollabuk",
          "population": "103544"
        },
        {
          "id": "2399",
          "name": "Tonghae",
          "countryCode": "KOR",
          "district": "Kang-won",
          "population": "95472"
        },
        {
          "id": "2400",
          "name": "Mun-gyong",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "92239"
        },
        {
          "id": "2401",
          "name": "Athenai",
          "countryCode": "GRC",
          "district": "Attika",
          "population": "772072"
        },
        {
          "id": "2402",
          "name": "Thessaloniki",
          "countryCode": "GRC",
          "district": "Central Macedonia",
          "population": "383967"
        },
        {
          "id": "2403",
          "name": "Pireus",
          "countryCode": "GRC",
          "district": "Attika",
          "population": "182671"
        },
        {
          "id": "2404",
          "name": "Patras",
          "countryCode": "GRC",
          "district": "West Greece",
          "population": "153344"
        },
        {
          "id": "2405",
          "name": "Peristerion",
          "countryCode": "GRC",
          "district": "Attika",
          "population": "137288"
        },
        {
          "id": "2406",
          "name": "Herakleion",
          "countryCode": "GRC",
          "district": "Crete",
          "population": "116178"
        },
        {
          "id": "2407",
          "name": "Kallithea",
          "countryCode": "GRC",
          "district": "Attika",
          "population": "114233"
        },
        {
          "id": "2409",
          "name": "Zagreb",
          "countryCode": "HRV",
          "district": "Grad Zagreb",
          "population": "706770"
        },
        {
          "id": "2410",
          "name": "Split",
          "countryCode": "HRV",
          "district": "Split-Dalmatia",
          "population": "189388"
        },
        {
          "id": "2411",
          "name": "Rijeka",
          "countryCode": "HRV",
          "district": "Primorje-Gorski Kota",
          "population": "167964"
        },
        {
          "id": "2412",
          "name": "Osijek",
          "countryCode": "HRV",
          "district": "Osijek-Baranja",
          "population": "104761"
        },
        {
          "id": "2413",
          "name": "La Habana",
          "countryCode": "CUB",
          "district": "La Habana",
          "population": "2256000"
        },
        {
          "id": "2414",
          "name": "Santiago de Cuba",
          "countryCode": "CUB",
          "district": "Santiago de Cuba",
          "population": "433180"
        },
        {
          "id": "2415",
          "name": "Camagüey",
          "countryCode": "CUB",
          "district": "Camagüey",
          "population": "298726"
        },
        {
          "id": "2416",
          "name": "HolguР”В·n",
          "countryCode": "CUB",
          "district": "HolguР”В·n",
          "population": "249492"
        },
        {
          "id": "2417",
          "name": "Santa Clara",
          "countryCode": "CUB",
          "district": "Villa Clara",
          "population": "207350"
        },
        {
          "id": "2418",
          "name": "GuantР”Р‡namo",
          "countryCode": "CUB",
          "district": "GuantР”Р‡namo",
          "population": "205078"
        },
        {
          "id": "2419",
          "name": "Pinar del RР”В·o",
          "countryCode": "CUB",
          "district": "Pinar del RР”В·o",
          "population": "142100"
        },
        {
          "id": "2420",
          "name": "Bayamo",
          "countryCode": "CUB",
          "district": "Granma",
          "population": "141000"
        },
        {
          "id": "2421",
          "name": "Cienfuegos",
          "countryCode": "CUB",
          "district": "Cienfuegos",
          "population": "132770"
        },
        {
          "id": "2422",
          "name": "Victoria de las Tunas",
          "countryCode": "CUB",
          "district": "Las Tunas",
          "population": "132350"
        },
        {
          "id": "2423",
          "name": "Matanzas",
          "countryCode": "CUB",
          "district": "Matanzas",
          "population": "123273"
        },
        {
          "id": "2424",
          "name": "Manzanillo",
          "countryCode": "CUB",
          "district": "Granma",
          "population": "109350"
        },
        {
          "id": "2425",
          "name": "Sancti-SpР”В·ritus",
          "countryCode": "CUB",
          "district": "Sancti-SpР”В·ritus",
          "population": "100751"
        },
        {
          "id": "2426",
          "name": "Ciego de Р”В®vila",
          "countryCode": "CUB",
          "district": "Ciego de Р”В®vila",
          "population": "98505"
        },
        {
          "id": "2427",
          "name": "al-Salimiya",
          "countryCode": "KWT",
          "district": "Hawalli",
          "population": "130215"
        },
        {
          "id": "2428",
          "name": "Jalib al-Shuyukh",
          "countryCode": "KWT",
          "district": "Hawalli",
          "population": "102178"
        },
        {
          "id": "2429",
          "name": "Kuwait",
          "countryCode": "KWT",
          "district": "al-Asima",
          "population": "28859"
        },
        {
          "id": "2430",
          "name": "Nicosia",
          "countryCode": "CYP",
          "district": "Nicosia",
          "population": "195000"
        },
        {
          "id": "2431",
          "name": "Limassol",
          "countryCode": "CYP",
          "district": "Limassol",
          "population": "154400"
        },
        {
          "id": "2432",
          "name": "Vientiane",
          "countryCode": "LAO",
          "district": "Viangchan",
          "population": "531800"
        },
        {
          "id": "2433",
          "name": "Savannakhet",
          "countryCode": "LAO",
          "district": "Savannakhet",
          "population": "96652"
        },
        {
          "id": "2434",
          "name": "Riga",
          "countryCode": "LVA",
          "district": "Riika",
          "population": "764328"
        },
        {
          "id": "2435",
          "name": "Daugavpils",
          "countryCode": "LVA",
          "district": "Daugavpils",
          "population": "114829"
        },
        {
          "id": "2436",
          "name": "Liepaja",
          "countryCode": "LVA",
          "district": "Liepaja",
          "population": "89439"
        },
        {
          "id": "2437",
          "name": "Maseru",
          "countryCode": "LSO",
          "district": "Maseru",
          "population": "297000"
        },
        {
          "id": "2438",
          "name": "Beirut",
          "countryCode": "LBN",
          "district": "Beirut",
          "population": "1100000"
        },
        {
          "id": "2439",
          "name": "Tripoli",
          "countryCode": "LBN",
          "district": "al-Shamal",
          "population": "240000"
        },
        {
          "id": "2440",
          "name": "Monrovia",
          "countryCode": "LBR",
          "district": "Montserrado",
          "population": "850000"
        },
        {
          "id": "2441",
          "name": "Tripoli",
          "countryCode": "LBY",
          "district": "Tripoli",
          "population": "1682000"
        },
        {
          "id": "2442",
          "name": "Bengasi",
          "countryCode": "LBY",
          "district": "Bengasi",
          "population": "804000"
        },
        {
          "id": "2443",
          "name": "Misrata",
          "countryCode": "LBY",
          "district": "Misrata",
          "population": "121669"
        },
        {
          "id": "2444",
          "name": "al-Zawiya",
          "countryCode": "LBY",
          "district": "al-Zawiya",
          "population": "89338"
        },
        {
          "id": "2445",
          "name": "Schaan",
          "countryCode": "LIE",
          "district": "Schaan",
          "population": "5346"
        },
        {
          "id": "2446",
          "name": "Vaduz",
          "countryCode": "LIE",
          "district": "Vaduz",
          "population": "5043"
        },
        {
          "id": "2447",
          "name": "Vilnius",
          "countryCode": "LTU",
          "district": "Vilna",
          "population": "577969"
        },
        {
          "id": "2448",
          "name": "Kaunas",
          "countryCode": "LTU",
          "district": "Kaunas",
          "population": "412639"
        },
        {
          "id": "2449",
          "name": "Klaipeda",
          "countryCode": "LTU",
          "district": "Klaipeda",
          "population": "202451"
        },
        {
          "id": "2451",
          "name": "Panevezys",
          "countryCode": "LTU",
          "district": "Panevezys",
          "population": "133695"
        },
        {
          "id": "2452",
          "name": "Luxembourg [Luxemburg/LР”вЂ”tzebuerg]",
          "countryCode": "LUX",
          "district": "Luxembourg",
          "population": "80700"
        },
        {
          "id": "2453",
          "name": "El-AaiР•вЂєn",
          "countryCode": "ESH",
          "district": "El-AaiР•вЂєn",
          "population": "169000"
        },
        {
          "id": "2454",
          "name": "Macao",
          "countryCode": "MAC",
          "district": "Macau",
          "population": "437500"
        },
        {
          "id": "2455",
          "name": "Antananarivo",
          "countryCode": "MDG",
          "district": "Antananarivo",
          "population": "675669"
        },
        {
          "id": "2456",
          "name": "Toamasina",
          "countryCode": "MDG",
          "district": "Toamasina",
          "population": "127441"
        },
        {
          "id": "2457",
          "name": "AntsirabР“В©",
          "countryCode": "MDG",
          "district": "Antananarivo",
          "population": "120239"
        },
        {
          "id": "2337",
          "name": "Ulsan",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "1084891"
        },
        {
          "id": "2338",
          "name": "Songnam",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "869094"
        },
        {
          "id": "2339",
          "name": "Puchon",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "779412"
        },
        {
          "id": "2340",
          "name": "Suwon",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "755550"
        },
        {
          "id": "2341",
          "name": "Anyang",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "591106"
        },
        {
          "id": "2342",
          "name": "Chonju",
          "countryCode": "KOR",
          "district": "Chollabuk",
          "population": "563153"
        },
        {
          "id": "2343",
          "name": "Chongju",
          "countryCode": "KOR",
          "district": "Chungchongbuk",
          "population": "531376"
        },
        {
          "id": "2344",
          "name": "Koyang",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "518282"
        },
        {
          "id": "2345",
          "name": "Ansan",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "510314"
        },
        {
          "id": "2346",
          "name": "Pohang",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "508899"
        },
        {
          "id": "2347",
          "name": "Chang-won",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "481694"
        },
        {
          "id": "2348",
          "name": "Masan",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "441242"
        },
        {
          "id": "2349",
          "name": "Kwangmyong",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "350914"
        },
        {
          "id": "2350",
          "name": "Chonan",
          "countryCode": "KOR",
          "district": "Chungchongnam",
          "population": "330259"
        },
        {
          "id": "2351",
          "name": "Chinju",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "329886"
        },
        {
          "id": "2352",
          "name": "Iksan",
          "countryCode": "KOR",
          "district": "Chollabuk",
          "population": "322685"
        },
        {
          "id": "2353",
          "name": "Pyongtaek",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "312927"
        },
        {
          "id": "2354",
          "name": "Kumi",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "311431"
        },
        {
          "id": "2355",
          "name": "Uijongbu",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "276111"
        },
        {
          "id": "2356",
          "name": "Kyongju",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "272968"
        },
        {
          "id": "2357",
          "name": "Kunsan",
          "countryCode": "KOR",
          "district": "Chollabuk",
          "population": "266569"
        },
        {
          "id": "2358",
          "name": "Cheju",
          "countryCode": "KOR",
          "district": "Cheju",
          "population": "258511"
        },
        {
          "id": "2359",
          "name": "Kimhae",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "256370"
        },
        {
          "id": "2360",
          "name": "Sunchon",
          "countryCode": "KOR",
          "district": "Chollanam",
          "population": "249263"
        },
        {
          "id": "2361",
          "name": "Mokpo",
          "countryCode": "KOR",
          "district": "Chollanam",
          "population": "247452"
        },
        {
          "id": "2362",
          "name": "Yong-in",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "242643"
        },
        {
          "id": "2363",
          "name": "Wonju",
          "countryCode": "KOR",
          "district": "Kang-won",
          "population": "237460"
        },
        {
          "id": "2364",
          "name": "Kunpo",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "235233"
        },
        {
          "id": "2365",
          "name": "Chunchon",
          "countryCode": "KOR",
          "district": "Kang-won",
          "population": "234528"
        },
        {
          "id": "2366",
          "name": "Namyangju",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "229060"
        },
        {
          "id": "2367",
          "name": "Kangnung",
          "countryCode": "KOR",
          "district": "Kang-won",
          "population": "220403"
        },
        {
          "id": "2368",
          "name": "Chungju",
          "countryCode": "KOR",
          "district": "Chungchongbuk",
          "population": "205206"
        },
        {
          "id": "2369",
          "name": "Andong",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "188443"
        },
        {
          "id": "2370",
          "name": "Yosu",
          "countryCode": "KOR",
          "district": "Chollanam",
          "population": "183596"
        },
        {
          "id": "2371",
          "name": "Kyongsan",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "173746"
        },
        {
          "id": "2372",
          "name": "Paju",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "163379"
        },
        {
          "id": "2373",
          "name": "Yangsan",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "163351"
        },
        {
          "id": "2374",
          "name": "Ichon",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "155332"
        },
        {
          "id": "2375",
          "name": "Asan",
          "countryCode": "KOR",
          "district": "Chungchongnam",
          "population": "154663"
        },
        {
          "id": "2376",
          "name": "Koje",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "147562"
        },
        {
          "id": "2377",
          "name": "Kimchon",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "147027"
        },
        {
          "id": "2378",
          "name": "Nonsan",
          "countryCode": "KOR",
          "district": "Chungchongnam",
          "population": "146619"
        },
        {
          "id": "2379",
          "name": "Kuri",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "142173"
        },
        {
          "id": "2380",
          "name": "Chong-up",
          "countryCode": "KOR",
          "district": "Chollabuk",
          "population": "139111"
        },
        {
          "id": "2381",
          "name": "Chechon",
          "countryCode": "KOR",
          "district": "Chungchongbuk",
          "population": "137070"
        },
        {
          "id": "2382",
          "name": "Sosan",
          "countryCode": "KOR",
          "district": "Chungchongnam",
          "population": "134746"
        },
        {
          "id": "2383",
          "name": "Shihung",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "133443"
        },
        {
          "id": "2384",
          "name": "Tong-yong",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "131717"
        },
        {
          "id": "2385",
          "name": "Kongju",
          "countryCode": "KOR",
          "district": "Chungchongnam",
          "population": "131229"
        },
        {
          "id": "2386",
          "name": "Yongju",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "131097"
        },
        {
          "id": "2387",
          "name": "Chinhae",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "125997"
        },
        {
          "id": "2388",
          "name": "Sangju",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "124116"
        },
        {
          "id": "2389",
          "name": "Poryong",
          "countryCode": "KOR",
          "district": "Chungchongnam",
          "population": "122604"
        },
        {
          "id": "2390",
          "name": "Kwang-yang",
          "countryCode": "KOR",
          "district": "Chollanam",
          "population": "122052"
        },
        {
          "id": "2391",
          "name": "Miryang",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "121501"
        },
        {
          "id": "2392",
          "name": "Hanam",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "115812"
        },
        {
          "id": "2393",
          "name": "Kimje",
          "countryCode": "KOR",
          "district": "Chollabuk",
          "population": "115427"
        },
        {
          "id": "2394",
          "name": "Yongchon",
          "countryCode": "KOR",
          "district": "Kyongsangbuk",
          "population": "113511"
        },
        {
          "id": "2395",
          "name": "Sachon",
          "countryCode": "KOR",
          "district": "Kyongsangnam",
          "population": "113494"
        },
        {
          "id": "2396",
          "name": "Uiwang",
          "countryCode": "KOR",
          "district": "Kyonggi",
          "population": "108788"
        },
        {
          "id": "2397",
          "name": "Naju",
          "countryCode": "KOR",
          "district": "Chollanam",
          "population": "107831"
        },
        {
          "id": "2276",
          "name": "MonterР”В·a",
          "countryCode": "COL",
          "district": "CР“С–rdoba",
          "population": "248245"
        },
        {
          "id": "2278",
          "name": "Palmira",
          "countryCode": "COL",
          "district": "Valle",
          "population": "226509"
        },
        {
          "id": "2279",
          "name": "Buenaventura",
          "countryCode": "COL",
          "district": "Valle",
          "population": "224336"
        },
        {
          "id": "2280",
          "name": "Floridablanca",
          "countryCode": "COL",
          "district": "Santander",
          "population": "221913"
        },
        {
          "id": "2281",
          "name": "Sincelejo",
          "countryCode": "COL",
          "district": "Sucre",
          "population": "220704"
        },
        {
          "id": "2282",
          "name": "PopayР”Р‡n",
          "countryCode": "COL",
          "district": "Cauca",
          "population": "200719"
        },
        {
          "id": "2283",
          "name": "Barrancabermeja",
          "countryCode": "COL",
          "district": "Santander",
          "population": "178020"
        },
        {
          "id": "2284",
          "name": "Dos Quebradas",
          "countryCode": "COL",
          "district": "Risaralda",
          "population": "159363"
        },
        {
          "id": "2285",
          "name": "TuluР”Р‡",
          "countryCode": "COL",
          "district": "Valle",
          "population": "152488"
        },
        {
          "id": "2286",
          "name": "Envigado",
          "countryCode": "COL",
          "district": "Antioquia",
          "population": "135848"
        },
        {
          "id": "2287",
          "name": "Cartago",
          "countryCode": "COL",
          "district": "Valle",
          "population": "125884"
        },
        {
          "id": "2288",
          "name": "Girardot",
          "countryCode": "COL",
          "district": "Cundinamarca",
          "population": "110963"
        },
        {
          "id": "2289",
          "name": "Buga",
          "countryCode": "COL",
          "district": "Valle",
          "population": "110699"
        },
        {
          "id": "2290",
          "name": "Tunja",
          "countryCode": "COL",
          "district": "BoyacР”Р‡",
          "population": "109740"
        },
        {
          "id": "2291",
          "name": "Florencia",
          "countryCode": "COL",
          "district": "CaquetР”Р‡",
          "population": "108574"
        },
        {
          "id": "2292",
          "name": "Maicao",
          "countryCode": "COL",
          "district": "La Guajira",
          "population": "108053"
        },
        {
          "id": "2293",
          "name": "Sogamoso",
          "countryCode": "COL",
          "district": "BoyacР”Р‡",
          "population": "107728"
        },
        {
          "id": "2294",
          "name": "Giron",
          "countryCode": "COL",
          "district": "Santander",
          "population": "90688"
        },
        {
          "id": "2295",
          "name": "Moroni",
          "countryCode": "COM",
          "district": "Njazidja",
          "population": "36000"
        },
        {
          "id": "2296",
          "name": "Brazzaville",
          "countryCode": "COG",
          "district": "Brazzaville",
          "population": "950000"
        },
        {
          "id": "2297",
          "name": "Pointe-Noire",
          "countryCode": "COG",
          "district": "Kouilou",
          "population": "500000"
        },
        {
          "id": "2298",
          "name": "Kinshasa",
          "countryCode": "COD",
          "district": "Kinshasa",
          "population": "5064000"
        },
        {
          "id": "2299",
          "name": "Lubumbashi",
          "countryCode": "COD",
          "district": "Shaba",
          "population": "851381"
        },
        {
          "id": "2300",
          "name": "Mbuji-Mayi",
          "countryCode": "COD",
          "district": "East Kasai",
          "population": "806475"
        },
        {
          "id": "2301",
          "name": "Kolwezi",
          "countryCode": "COD",
          "district": "Shaba",
          "population": "417810"
        },
        {
          "id": "2303",
          "name": "Kananga",
          "countryCode": "COD",
          "district": "West Kasai",
          "population": "393030"
        },
        {
          "id": "2304",
          "name": "Likasi",
          "countryCode": "COD",
          "district": "Shaba",
          "population": "299118"
        },
        {
          "id": "2305",
          "name": "Bukavu",
          "countryCode": "COD",
          "district": "South Kivu",
          "population": "201569"
        },
        {
          "id": "2306",
          "name": "Kikwit",
          "countryCode": "COD",
          "district": "Bandundu",
          "population": "182142"
        },
        {
          "id": "2307",
          "name": "Tshikapa",
          "countryCode": "COD",
          "district": "West Kasai",
          "population": "180860"
        },
        {
          "id": "2310",
          "name": "Mwene-Ditu",
          "countryCode": "COD",
          "district": "East Kasai",
          "population": "137459"
        },
        {
          "id": "2312",
          "name": "Uvira",
          "countryCode": "COD",
          "district": "South Kivu",
          "population": "115590"
        },
        {
          "id": "2313",
          "name": "Butembo",
          "countryCode": "COD",
          "district": "North Kivu",
          "population": "109406"
        },
        {
          "id": "2314",
          "name": "Goma",
          "countryCode": "COD",
          "district": "North Kivu",
          "population": "109094"
        },
        {
          "id": "2315",
          "name": "Kalemie",
          "countryCode": "COD",
          "district": "Shaba",
          "population": "101309"
        },
        {
          "id": "2316",
          "name": "Bantam",
          "countryCode": "CCK",
          "district": "Home Island",
          "population": "503"
        },
        {
          "id": "2317",
          "name": "West Island",
          "countryCode": "CCK",
          "district": "West Island",
          "population": "167"
        },
        {
          "id": "2318",
          "name": "Pyongyang",
          "countryCode": "PRK",
          "district": "Pyongyang-si",
          "population": "2484000"
        },
        {
          "id": "2319",
          "name": "Hamhung",
          "countryCode": "PRK",
          "district": "Hamgyong N",
          "population": "709730"
        },
        {
          "id": "2320",
          "name": "Chongjin",
          "countryCode": "PRK",
          "district": "Hamgyong P",
          "population": "582480"
        },
        {
          "id": "2321",
          "name": "Nampo",
          "countryCode": "PRK",
          "district": "Nampo-si",
          "population": "566200"
        },
        {
          "id": "2322",
          "name": "Sinuiju",
          "countryCode": "PRK",
          "district": "Pyongan P",
          "population": "326011"
        },
        {
          "id": "2323",
          "name": "Wonsan",
          "countryCode": "PRK",
          "district": "Kangwon",
          "population": "300148"
        },
        {
          "id": "2324",
          "name": "Phyongsong",
          "countryCode": "PRK",
          "district": "Pyongan N",
          "population": "272934"
        },
        {
          "id": "2325",
          "name": "Sariwon",
          "countryCode": "PRK",
          "district": "Hwanghae P",
          "population": "254146"
        },
        {
          "id": "2326",
          "name": "Haeju",
          "countryCode": "PRK",
          "district": "Hwanghae N",
          "population": "229172"
        },
        {
          "id": "2327",
          "name": "Kanggye",
          "countryCode": "PRK",
          "district": "Chagang",
          "population": "223410"
        },
        {
          "id": "2328",
          "name": "Kimchaek",
          "countryCode": "PRK",
          "district": "Hamgyong P",
          "population": "179000"
        },
        {
          "id": "2329",
          "name": "Hyesan",
          "countryCode": "PRK",
          "district": "Yanggang",
          "population": "178020"
        },
        {
          "id": "2330",
          "name": "Kaesong",
          "countryCode": "PRK",
          "district": "Kaesong-si",
          "population": "171500"
        },
        {
          "id": "2331",
          "name": "Seoul",
          "countryCode": "KOR",
          "district": "Seoul",
          "population": "9981619"
        },
        {
          "id": "2332",
          "name": "Pusan",
          "countryCode": "KOR",
          "district": "Pusan",
          "population": "3804522"
        },
        {
          "id": "2333",
          "name": "Inchon",
          "countryCode": "KOR",
          "district": "Inchon",
          "population": "2559424"
        },
        {
          "id": "2334",
          "name": "Taegu",
          "countryCode": "KOR",
          "district": "Taegu",
          "population": "2548568"
        },
        {
          "id": "2335",
          "name": "Taejon",
          "countryCode": "KOR",
          "district": "Taejon",
          "population": "1425835"
        },
        {
          "id": "2336",
          "name": "Kwangju",
          "countryCode": "KOR",
          "district": "Kwangju",
          "population": "1368341"
        },
        {
          "id": "2215",
          "name": "Yuanjiang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "107004"
        },
        {
          "id": "2216",
          "name": "Bozhou",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "106346"
        },
        {
          "id": "2217",
          "name": "Jinchang",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "105287"
        },
        {
          "id": "2219",
          "name": "Suqian",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "105021"
        },
        {
          "id": "2220",
          "name": "Shishou",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "104571"
        },
        {
          "id": "2221",
          "name": "Hengshui",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "104269"
        },
        {
          "id": "2222",
          "name": "Danjiangkou",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "103211"
        },
        {
          "id": "2223",
          "name": "Fujin",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "103104"
        },
        {
          "id": "2224",
          "name": "Sanya",
          "countryCode": "CHN",
          "district": "Hainan",
          "population": "102820"
        },
        {
          "id": "2225",
          "name": "Guangshui",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "102770"
        },
        {
          "id": "2226",
          "name": "Huangshan",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "102628"
        },
        {
          "id": "2227",
          "name": "Xingcheng",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "102384"
        },
        {
          "id": "2228",
          "name": "Zhucheng",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "102134"
        },
        {
          "id": "2229",
          "name": "Kunshan",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "102052"
        },
        {
          "id": "2230",
          "name": "Haining",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "100478"
        },
        {
          "id": "2231",
          "name": "Pingliang",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "99265"
        },
        {
          "id": "2232",
          "name": "Fuqing",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "99193"
        },
        {
          "id": "2233",
          "name": "Xinzhou",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "98667"
        },
        {
          "id": "2234",
          "name": "Jieyang",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "98531"
        },
        {
          "id": "2235",
          "name": "Zhangjiagang",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "97994"
        },
        {
          "id": "2236",
          "name": "Tong Xian",
          "countryCode": "CHN",
          "district": "Peking",
          "population": "97168"
        },
        {
          "id": "2238",
          "name": "Jinzhou",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "95761"
        },
        {
          "id": "2239",
          "name": "Emeishan",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "94000"
        },
        {
          "id": "2240",
          "name": "Enshi",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "93056"
        },
        {
          "id": "2241",
          "name": "Bose",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "93009"
        },
        {
          "id": "2242",
          "name": "Yuzhou",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "92889"
        },
        {
          "id": "2243",
          "name": "Kaiyuan",
          "countryCode": "CHN",
          "district": "Yunnan",
          "population": "91999"
        },
        {
          "id": "2244",
          "name": "Tumen",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "91471"
        },
        {
          "id": "2245",
          "name": "Putian",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "91030"
        },
        {
          "id": "2246",
          "name": "Linhai",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "90870"
        },
        {
          "id": "2247",
          "name": "Xilin Hot",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "90646"
        },
        {
          "id": "2248",
          "name": "Shaowu",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "90286"
        },
        {
          "id": "2249",
          "name": "Junan",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "90222"
        },
        {
          "id": "2250",
          "name": "Huaying",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "89400"
        },
        {
          "id": "2251",
          "name": "Pingyi",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "89373"
        },
        {
          "id": "2252",
          "name": "Huangyan",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "89288"
        },
        {
          "id": "2253",
          "name": "Bishkek",
          "countryCode": "KGZ",
          "district": "Bishkek shaary",
          "population": "589400"
        },
        {
          "id": "2254",
          "name": "Osh",
          "countryCode": "KGZ",
          "district": "Osh",
          "population": "222700"
        },
        {
          "id": "2255",
          "name": "Bikenibeu",
          "countryCode": "KIR",
          "district": "South Tarawa",
          "population": "5055"
        },
        {
          "id": "2256",
          "name": "Bairiki",
          "countryCode": "KIR",
          "district": "South Tarawa",
          "population": "2226"
        },
        {
          "id": "2257",
          "name": "SantafР“В© de BogotР”Р‡",
          "countryCode": "COL",
          "district": "SantafР“В© de BogotР”Р‡",
          "population": "6260862"
        },
        {
          "id": "2258",
          "name": "Cali",
          "countryCode": "COL",
          "district": "Valle",
          "population": "2077386"
        },
        {
          "id": "2259",
          "name": "MedellР”В·n",
          "countryCode": "COL",
          "district": "Antioquia",
          "population": "1861265"
        },
        {
          "id": "2260",
          "name": "Barranquilla",
          "countryCode": "COL",
          "district": "AtlР”Р‡ntico",
          "population": "1223260"
        },
        {
          "id": "2261",
          "name": "Cartagena",
          "countryCode": "COL",
          "district": "BolР”В·var",
          "population": "805757"
        },
        {
          "id": "2262",
          "name": "CР•вЂєcuta",
          "countryCode": "COL",
          "district": "Norte de Santander",
          "population": "606932"
        },
        {
          "id": "2263",
          "name": "Bucaramanga",
          "countryCode": "COL",
          "district": "Santander",
          "population": "515555"
        },
        {
          "id": "2264",
          "name": "IbaguР“В©",
          "countryCode": "COL",
          "district": "Tolima",
          "population": "393664"
        },
        {
          "id": "2265",
          "name": "Pereira",
          "countryCode": "COL",
          "district": "Risaralda",
          "population": "381725"
        },
        {
          "id": "2266",
          "name": "Santa Marta",
          "countryCode": "COL",
          "district": "Magdalena",
          "population": "359147"
        },
        {
          "id": "2267",
          "name": "Manizales",
          "countryCode": "COL",
          "district": "Caldas",
          "population": "337580"
        },
        {
          "id": "2268",
          "name": "Bello",
          "countryCode": "COL",
          "district": "Antioquia",
          "population": "333470"
        },
        {
          "id": "2269",
          "name": "Pasto",
          "countryCode": "COL",
          "district": "NariР•вЂћo",
          "population": "332396"
        },
        {
          "id": "2270",
          "name": "Neiva",
          "countryCode": "COL",
          "district": "Huila",
          "population": "300052"
        },
        {
          "id": "2271",
          "name": "Soledad",
          "countryCode": "COL",
          "district": "AtlР”Р‡ntico",
          "population": "295058"
        },
        {
          "id": "2272",
          "name": "Armenia",
          "countryCode": "COL",
          "district": "QuindР”В·o",
          "population": "288977"
        },
        {
          "id": "2273",
          "name": "Villavicencio",
          "countryCode": "COL",
          "district": "Meta",
          "population": "273140"
        },
        {
          "id": "2274",
          "name": "Soacha",
          "countryCode": "COL",
          "district": "Cundinamarca",
          "population": "272058"
        },
        {
          "id": "2275",
          "name": "Valledupar",
          "countryCode": "COL",
          "district": "Cesar",
          "population": "263247"
        },
        {
          "id": "2154",
          "name": "Dali",
          "countryCode": "CHN",
          "district": "Yunnan",
          "population": "136554"
        },
        {
          "id": "2155",
          "name": "Anda",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "136446"
        },
        {
          "id": "2156",
          "name": "Jincheng",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "136396"
        },
        {
          "id": "2157",
          "name": "Longyan",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "134481"
        },
        {
          "id": "2158",
          "name": "Xichang",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "134419"
        },
        {
          "id": "2159",
          "name": "Wendeng",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "133910"
        },
        {
          "id": "2160",
          "name": "Hailun",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "133565"
        },
        {
          "id": "2161",
          "name": "Binzhou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "133555"
        },
        {
          "id": "2162",
          "name": "Linhe",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "133183"
        },
        {
          "id": "2163",
          "name": "Wuwei",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "133101"
        },
        {
          "id": "2164",
          "name": "Duyun",
          "countryCode": "CHN",
          "district": "Guizhou",
          "population": "132971"
        },
        {
          "id": "2165",
          "name": "Mishan",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "132744"
        },
        {
          "id": "2166",
          "name": "Shangrao",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "132455"
        },
        {
          "id": "2167",
          "name": "Changji",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "132260"
        },
        {
          "id": "2168",
          "name": "Meixian",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "132156"
        },
        {
          "id": "2169",
          "name": "Yushu",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "131861"
        },
        {
          "id": "2170",
          "name": "Tiefa",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "131807"
        },
        {
          "id": "27",
          "name": "Emmen",
          "countryCode": "NLD",
          "district": "Drenthe",
          "population": "105853"
        },
        {
          "id": "2172",
          "name": "Leiyang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "130115"
        },
        {
          "id": "2173",
          "name": "Zalantun",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "130031"
        },
        {
          "id": "2174",
          "name": "Weihai",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "128888"
        },
        {
          "id": "2175",
          "name": "Loudi",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "128418"
        },
        {
          "id": "2176",
          "name": "Qingzhou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "128258"
        },
        {
          "id": "2177",
          "name": "Qidong",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "126872"
        },
        {
          "id": "2178",
          "name": "Huaihua",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "126785"
        },
        {
          "id": "2179",
          "name": "Luohe",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "126438"
        },
        {
          "id": "2180",
          "name": "Chuzhou",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "125341"
        },
        {
          "id": "2181",
          "name": "Kaiyuan",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "124219"
        },
        {
          "id": "2182",
          "name": "Linqing",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "123958"
        },
        {
          "id": "2183",
          "name": "Chaohu",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "123676"
        },
        {
          "id": "2184",
          "name": "Laohekou",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "123366"
        },
        {
          "id": "2185",
          "name": "Dujiangyan",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "123357"
        },
        {
          "id": "2186",
          "name": "Zhumadian",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "123232"
        },
        {
          "id": "2187",
          "name": "Linchuan",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "121949"
        },
        {
          "id": "2188",
          "name": "Jiaonan",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "121397"
        },
        {
          "id": "2189",
          "name": "Sanmenxia",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "120523"
        },
        {
          "id": "2190",
          "name": "Heyuan",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "120101"
        },
        {
          "id": "2191",
          "name": "Manzhouli",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "120023"
        },
        {
          "id": "2192",
          "name": "Lhasa",
          "countryCode": "CHN",
          "district": "Tibet",
          "population": "120000"
        },
        {
          "id": "2193",
          "name": "Lianyuan",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "118858"
        },
        {
          "id": "2194",
          "name": "Kuytun",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "118553"
        },
        {
          "id": "2195",
          "name": "Puqi",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "117264"
        },
        {
          "id": "2196",
          "name": "Hongjiang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "116188"
        },
        {
          "id": "2197",
          "name": "Qinzhou",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "114586"
        },
        {
          "id": "2198",
          "name": "Renqiu",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "114256"
        },
        {
          "id": "2199",
          "name": "Yuyao",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "114065"
        },
        {
          "id": "2200",
          "name": "Guigang",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "114025"
        },
        {
          "id": "2201",
          "name": "Kaili",
          "countryCode": "CHN",
          "district": "Guizhou",
          "population": "113958"
        },
        {
          "id": "2203",
          "name": "Beihai",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "112673"
        },
        {
          "id": "2204",
          "name": "Xuangzhou",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "112673"
        },
        {
          "id": "2205",
          "name": "Quzhou",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "112373"
        },
        {
          "id": "2207",
          "name": "Zixing",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "110048"
        },
        {
          "id": "2208",
          "name": "Liyang",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "109520"
        },
        {
          "id": "2209",
          "name": "Yizheng",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "109268"
        },
        {
          "id": "2210",
          "name": "Yumen",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "109234"
        },
        {
          "id": "2211",
          "name": "Liling",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "108504"
        },
        {
          "id": "2212",
          "name": "Yuncheng",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "108359"
        },
        {
          "id": "2213",
          "name": "Shanwei",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "107847"
        },
        {
          "id": "2214",
          "name": "Cixi",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "107329"
        },
        {
          "id": "2093",
          "name": "Nanchong",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "180273"
        },
        {
          "id": "2094",
          "name": "Jiutai",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "180130"
        },
        {
          "id": "2095",
          "name": "Zhaodong",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "179976"
        },
        {
          "id": "2096",
          "name": "Shaoxing",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "179818"
        },
        {
          "id": "2097",
          "name": "Fuyang",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "179572"
        },
        {
          "id": "2098",
          "name": "Maoming",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "178683"
        },
        {
          "id": "2099",
          "name": "Qujing",
          "countryCode": "CHN",
          "district": "Yunnan",
          "population": "178669"
        },
        {
          "id": "2100",
          "name": "Ghulja",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "177193"
        },
        {
          "id": "2101",
          "name": "Jiaohe",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "176367"
        },
        {
          "id": "2102",
          "name": "Puyang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "175988"
        },
        {
          "id": "2103",
          "name": "Huadian",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "175873"
        },
        {
          "id": "2104",
          "name": "Jiangyou",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "175753"
        },
        {
          "id": "2105",
          "name": "Qashqar",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "174570"
        },
        {
          "id": "2106",
          "name": "Anshun",
          "countryCode": "CHN",
          "district": "Guizhou",
          "population": "174142"
        },
        {
          "id": "2107",
          "name": "Fuling",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "173878"
        },
        {
          "id": "2108",
          "name": "Xinyu",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "173524"
        },
        {
          "id": "2109",
          "name": "Hanzhong",
          "countryCode": "CHN",
          "district": "Shaanxi",
          "population": "169930"
        },
        {
          "id": "2110",
          "name": "Danyang",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "169603"
        },
        {
          "id": "2111",
          "name": "Chenzhou",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "169400"
        },
        {
          "id": "2112",
          "name": "Xiaogan",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "166280"
        },
        {
          "id": "2113",
          "name": "Shangqiu",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "164880"
        },
        {
          "id": "2114",
          "name": "Zhuhai",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "164747"
        },
        {
          "id": "2115",
          "name": "Qingyuan",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "164641"
        },
        {
          "id": "2116",
          "name": "Aqsu",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "164092"
        },
        {
          "id": "2117",
          "name": "Jining",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "163552"
        },
        {
          "id": "2118",
          "name": "Xiaoshan",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "162930"
        },
        {
          "id": "2119",
          "name": "Zaoyang",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "162198"
        },
        {
          "id": "2120",
          "name": "Xinghua",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "161910"
        },
        {
          "id": "2121",
          "name": "Hami",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "161315"
        },
        {
          "id": "2122",
          "name": "Huizhou",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "161023"
        },
        {
          "id": "2123",
          "name": "Jinmen",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "160794"
        },
        {
          "id": "2124",
          "name": "Sanming",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "160691"
        },
        {
          "id": "2125",
          "name": "Ulanhot",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "159538"
        },
        {
          "id": "2126",
          "name": "Korla",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "159344"
        },
        {
          "id": "2127",
          "name": "Wanxian",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "156823"
        },
        {
          "id": "2129",
          "name": "Zhoushan",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "156317"
        },
        {
          "id": "2130",
          "name": "Liangcheng",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "156307"
        },
        {
          "id": "2131",
          "name": "Jiaozhou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "153364"
        },
        {
          "id": "2132",
          "name": "Taizhou",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "152442"
        },
        {
          "id": "2133",
          "name": "Suzhou",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "151862"
        },
        {
          "id": "2134",
          "name": "Yichun",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "151585"
        },
        {
          "id": "2135",
          "name": "Taonan",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "150168"
        },
        {
          "id": "2136",
          "name": "Pingdu",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "150123"
        },
        {
          "id": "2138",
          "name": "Longkou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "148362"
        },
        {
          "id": "2139",
          "name": "Langfang",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "148105"
        },
        {
          "id": "2140",
          "name": "Zhoukou",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "146288"
        },
        {
          "id": "2141",
          "name": "Suining",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "146086"
        },
        {
          "id": "2142",
          "name": "Yulin",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "144467"
        },
        {
          "id": "2143",
          "name": "Jinhua",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "144280"
        },
        {
          "id": "2146",
          "name": "Suizhou",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "142302"
        },
        {
          "id": "2147",
          "name": "Ankang",
          "countryCode": "CHN",
          "district": "Shaanxi",
          "population": "142170"
        },
        {
          "id": "2148",
          "name": "Weinan",
          "countryCode": "CHN",
          "district": "Shaanxi",
          "population": "140169"
        },
        {
          "id": "2149",
          "name": "Longjing",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "139417"
        },
        {
          "id": "2151",
          "name": "Lengshuijiang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "137994"
        },
        {
          "id": "2152",
          "name": "Laiyang",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "137080"
        },
        {
          "id": "2153",
          "name": "Xianning",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "136811"
        },
        {
          "id": "2032",
          "name": "Shaoyang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "247227"
        },
        {
          "id": "2033",
          "name": "Laiwu",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "246833"
        },
        {
          "id": "2034",
          "name": "Chengde",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "246799"
        },
        {
          "id": "2035",
          "name": "Tianshui",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "244974"
        },
        {
          "id": "2036",
          "name": "Nanyang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "243303"
        },
        {
          "id": "2037",
          "name": "Cangzhou",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "242708"
        },
        {
          "id": "2038",
          "name": "Yibin",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "241019"
        },
        {
          "id": "2039",
          "name": "Huaiyin",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "239675"
        },
        {
          "id": "2040",
          "name": "Dunhua",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "235100"
        },
        {
          "id": "2041",
          "name": "Yanji",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "230892"
        },
        {
          "id": "2042",
          "name": "Jiangmen",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "230587"
        },
        {
          "id": "2043",
          "name": "Tongling",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "228017"
        },
        {
          "id": "2044",
          "name": "Suihua",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "227881"
        },
        {
          "id": "2045",
          "name": "Gongziling",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "226569"
        },
        {
          "id": "2046",
          "name": "Xiantao",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "222884"
        },
        {
          "id": "2047",
          "name": "Chaoyang",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "222394"
        },
        {
          "id": "2048",
          "name": "Ganzhou",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "220129"
        },
        {
          "id": "2049",
          "name": "Huzhou",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "218071"
        },
        {
          "id": "2050",
          "name": "Baicheng",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "217987"
        },
        {
          "id": "2051",
          "name": "Shangzi",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "215373"
        },
        {
          "id": "2052",
          "name": "Yangjiang",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "215196"
        },
        {
          "id": "2053",
          "name": "Qitaihe",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "214957"
        },
        {
          "id": "2054",
          "name": "Gejiu",
          "countryCode": "CHN",
          "district": "Yunnan",
          "population": "214294"
        },
        {
          "id": "2055",
          "name": "Jiangyin",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "213659"
        },
        {
          "id": "2056",
          "name": "Hebi",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "212976"
        },
        {
          "id": "2057",
          "name": "Jiaxing",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "211526"
        },
        {
          "id": "2058",
          "name": "Wuzhou",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "210452"
        },
        {
          "id": "2059",
          "name": "Meihekou",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "209038"
        },
        {
          "id": "2060",
          "name": "Xuchang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "208815"
        },
        {
          "id": "2061",
          "name": "Liaocheng",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "207844"
        },
        {
          "id": "2062",
          "name": "Haicheng",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "205560"
        },
        {
          "id": "2063",
          "name": "Qianjiang",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "205504"
        },
        {
          "id": "2064",
          "name": "Baiyin",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "204970"
        },
        {
          "id": "2066",
          "name": "Yixing",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "200824"
        },
        {
          "id": "2067",
          "name": "Laizhou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "198664"
        },
        {
          "id": "2068",
          "name": "Qaramay",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "197602"
        },
        {
          "id": "2069",
          "name": "Acheng",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "197595"
        },
        {
          "id": "2070",
          "name": "Dezhou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "195485"
        },
        {
          "id": "2071",
          "name": "Nanping",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "195064"
        },
        {
          "id": "2072",
          "name": "Zhaoqing",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "194784"
        },
        {
          "id": "2073",
          "name": "Beipiao",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "194301"
        },
        {
          "id": "2074",
          "name": "Fengcheng",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "193784"
        },
        {
          "id": "2075",
          "name": "Fuyu",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "192981"
        },
        {
          "id": "2076",
          "name": "Xinyang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "192509"
        },
        {
          "id": "2077",
          "name": "Dongtai",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "192247"
        },
        {
          "id": "2078",
          "name": "Yuci",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "191356"
        },
        {
          "id": "2079",
          "name": "Honghu",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "190772"
        },
        {
          "id": "2080",
          "name": "Ezhou",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "190123"
        },
        {
          "id": "2081",
          "name": "Heze",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "189293"
        },
        {
          "id": "2082",
          "name": "Daxian",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "188101"
        },
        {
          "id": "2083",
          "name": "Linfen",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "187309"
        },
        {
          "id": "2084",
          "name": "Tianmen",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "186332"
        },
        {
          "id": "2085",
          "name": "Yiyang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "185818"
        },
        {
          "id": "2086",
          "name": "Quanzhou",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "185154"
        },
        {
          "id": "2087",
          "name": "Rizhao",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "185048"
        },
        {
          "id": "2088",
          "name": "Deyang",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "182488"
        },
        {
          "id": "2089",
          "name": "Guangyuan",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "182241"
        },
        {
          "id": "2090",
          "name": "Changshu",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "181805"
        },
        {
          "id": "2091",
          "name": "Zhangzhou",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "181424"
        },
        {
          "id": "2092",
          "name": "Hailar",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "180650"
        },
        {
          "id": "1971",
          "name": "Zhuzhou",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "409924"
        },
        {
          "id": "1972",
          "name": "Jiaozuo",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "409100"
        },
        {
          "id": "1973",
          "name": "Wenzhou",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "401871"
        },
        {
          "id": "1974",
          "name": "Zhangjiang",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "400997"
        },
        {
          "id": "1975",
          "name": "Zigong",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "393184"
        },
        {
          "id": "1976",
          "name": "Shuangyashan",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "386081"
        },
        {
          "id": "1977",
          "name": "Zaozhuang",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "380846"
        },
        {
          "id": "1978",
          "name": "Yakeshi",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "377869"
        },
        {
          "id": "1979",
          "name": "Yichang",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "371601"
        },
        {
          "id": "1980",
          "name": "Zhenjiang",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "368316"
        },
        {
          "id": "1981",
          "name": "Huaibei",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "366549"
        },
        {
          "id": "1982",
          "name": "Qinhuangdao",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "364972"
        },
        {
          "id": "1983",
          "name": "Guilin",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "364130"
        },
        {
          "id": "1984",
          "name": "Liupanshui",
          "countryCode": "CHN",
          "district": "Guizhou",
          "population": "363954"
        },
        {
          "id": "1985",
          "name": "Panjin",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "362773"
        },
        {
          "id": "1986",
          "name": "Yangquan",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "362268"
        },
        {
          "id": "1987",
          "name": "Jinxi",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "357052"
        },
        {
          "id": "1988",
          "name": "Liaoyuan",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "354141"
        },
        {
          "id": "1989",
          "name": "Lianyungang",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "354139"
        },
        {
          "id": "1990",
          "name": "Xianyang",
          "countryCode": "CHN",
          "district": "Shaanxi",
          "population": "352125"
        },
        {
          "id": "1992",
          "name": "Chifeng",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "350077"
        },
        {
          "id": "1993",
          "name": "Shaoguan",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "350043"
        },
        {
          "id": "1994",
          "name": "Nantong",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "343341"
        },
        {
          "id": "1995",
          "name": "Leshan",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "341128"
        },
        {
          "id": "1996",
          "name": "Baoji",
          "countryCode": "CHN",
          "district": "Shaanxi",
          "population": "337765"
        },
        {
          "id": "1997",
          "name": "Linyi",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "324720"
        },
        {
          "id": "1998",
          "name": "Tonghua",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "324600"
        },
        {
          "id": "1999",
          "name": "Siping",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "317223"
        },
        {
          "id": "2000",
          "name": "Changzhi",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "317144"
        },
        {
          "id": "2001",
          "name": "Tengzhou",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "315083"
        },
        {
          "id": "2002",
          "name": "Chaozhou",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "313469"
        },
        {
          "id": "2003",
          "name": "Yangzhou",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "312892"
        },
        {
          "id": "2004",
          "name": "Dongwan",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "308669"
        },
        {
          "id": "2006",
          "name": "Foshan",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "303160"
        },
        {
          "id": "2007",
          "name": "Yueyang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "302800"
        },
        {
          "id": "2008",
          "name": "Xingtai",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "302789"
        },
        {
          "id": "2009",
          "name": "Changde",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "301276"
        },
        {
          "id": "2010",
          "name": "Shihezi",
          "countryCode": "CHN",
          "district": "Xinxiang",
          "population": "299676"
        },
        {
          "id": "2011",
          "name": "Yancheng",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "296831"
        },
        {
          "id": "2012",
          "name": "Jiujiang",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "291187"
        },
        {
          "id": "2013",
          "name": "Dongying",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "281728"
        },
        {
          "id": "2014",
          "name": "Shashi",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "281352"
        },
        {
          "id": "2015",
          "name": "Xintai",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "281248"
        },
        {
          "id": "2016",
          "name": "Jingdezhen",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "281183"
        },
        {
          "id": "2017",
          "name": "Tongchuan",
          "countryCode": "CHN",
          "district": "Shaanxi",
          "population": "280657"
        },
        {
          "id": "2018",
          "name": "Zhongshan",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "278829"
        },
        {
          "id": "2019",
          "name": "Shiyan",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "273786"
        },
        {
          "id": "2020",
          "name": "Tieli",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "265683"
        },
        {
          "id": "2021",
          "name": "Jining",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "265248"
        },
        {
          "id": "2022",
          "name": "Wuhai",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "264081"
        },
        {
          "id": "2023",
          "name": "Mianyang",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "262947"
        },
        {
          "id": "2024",
          "name": "Luzhou",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "262892"
        },
        {
          "id": "2025",
          "name": "Zunyi",
          "countryCode": "CHN",
          "district": "Guizhou",
          "population": "261862"
        },
        {
          "id": "2026",
          "name": "Shizuishan",
          "countryCode": "CHN",
          "district": "Ningxia",
          "population": "257862"
        },
        {
          "id": "2027",
          "name": "Neijiang",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "256012"
        },
        {
          "id": "2028",
          "name": "Tongliao",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "255129"
        },
        {
          "id": "2029",
          "name": "Tieling",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "254842"
        },
        {
          "id": "2030",
          "name": "Wafangdian",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "251733"
        },
        {
          "id": "2031",
          "name": "Anqing",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "250718"
        },
        {
          "id": "1910",
          "name": "Changsha",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "1809800"
        },
        {
          "id": "1911",
          "name": "Nanchang",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "1691600"
        },
        {
          "id": "1912",
          "name": "Fuzhou",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "1593800"
        },
        {
          "id": "1913",
          "name": "Lanzhou",
          "countryCode": "CHN",
          "district": "Gansu",
          "population": "1565800"
        },
        {
          "id": "1914",
          "name": "Guiyang",
          "countryCode": "CHN",
          "district": "Guizhou",
          "population": "1465200"
        },
        {
          "id": "1915",
          "name": "Ningbo",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "1371200"
        },
        {
          "id": "1916",
          "name": "Hefei",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "1369100"
        },
        {
          "id": "1918",
          "name": "Anshan",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "1200000"
        },
        {
          "id": "1919",
          "name": "Fushun",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "1200000"
        },
        {
          "id": "1920",
          "name": "Nanning",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "1161800"
        },
        {
          "id": "1921",
          "name": "Zibo",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "1140000"
        },
        {
          "id": "1922",
          "name": "Qiqihar",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "1070000"
        },
        {
          "id": "1923",
          "name": "Jilin",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "1040000"
        },
        {
          "id": "1924",
          "name": "Tangshan",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "1040000"
        },
        {
          "id": "1925",
          "name": "Baotou",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "980000"
        },
        {
          "id": "1926",
          "name": "Shenzhen",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "950500"
        },
        {
          "id": "1927",
          "name": "Hohhot",
          "countryCode": "CHN",
          "district": "Inner Mongolia",
          "population": "916700"
        },
        {
          "id": "1928",
          "name": "Handan",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "840000"
        },
        {
          "id": "1929",
          "name": "Wuxi",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "830000"
        },
        {
          "id": "1930",
          "name": "Xuzhou",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "810000"
        },
        {
          "id": "1931",
          "name": "Datong",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "800000"
        },
        {
          "id": "1932",
          "name": "Yichun",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "800000"
        },
        {
          "id": "1933",
          "name": "Benxi",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "770000"
        },
        {
          "id": "1934",
          "name": "Luoyang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "760000"
        },
        {
          "id": "1935",
          "name": "Suzhou",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "710000"
        },
        {
          "id": "1936",
          "name": "Xining",
          "countryCode": "CHN",
          "district": "Qinghai",
          "population": "700200"
        },
        {
          "id": "1937",
          "name": "Huainan",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "700000"
        },
        {
          "id": "1938",
          "name": "Jixi",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "683885"
        },
        {
          "id": "1939",
          "name": "Daqing",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "660000"
        },
        {
          "id": "1940",
          "name": "Fuxin",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "640000"
        },
        {
          "id": "1941",
          "name": "Amoy [Xiamen]",
          "countryCode": "CHN",
          "district": "Fujian",
          "population": "627500"
        },
        {
          "id": "1942",
          "name": "Liuzhou",
          "countryCode": "CHN",
          "district": "Guangxi",
          "population": "610000"
        },
        {
          "id": "1943",
          "name": "Shantou",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "580000"
        },
        {
          "id": "1944",
          "name": "Jinzhou",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "570000"
        },
        {
          "id": "1945",
          "name": "Mudanjiang",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "570000"
        },
        {
          "id": "1946",
          "name": "Yinchuan",
          "countryCode": "CHN",
          "district": "Ningxia",
          "population": "544500"
        },
        {
          "id": "1947",
          "name": "Changzhou",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "530000"
        },
        {
          "id": "1948",
          "name": "Zhangjiakou",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "530000"
        },
        {
          "id": "1949",
          "name": "Dandong",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "520000"
        },
        {
          "id": "1950",
          "name": "Hegang",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "520000"
        },
        {
          "id": "1951",
          "name": "Kaifeng",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "510000"
        },
        {
          "id": "1952",
          "name": "Jiamusi",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "493409"
        },
        {
          "id": "1953",
          "name": "Liaoyang",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "492559"
        },
        {
          "id": "1954",
          "name": "Hengyang",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "487148"
        },
        {
          "id": "1955",
          "name": "Baoding",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "483155"
        },
        {
          "id": "1956",
          "name": "Hunjiang",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "482043"
        },
        {
          "id": "1957",
          "name": "Xinxiang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "473762"
        },
        {
          "id": "1958",
          "name": "Huangshi",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "457601"
        },
        {
          "id": "1959",
          "name": "Haikou",
          "countryCode": "CHN",
          "district": "Hainan",
          "population": "454300"
        },
        {
          "id": "1960",
          "name": "Yantai",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "452127"
        },
        {
          "id": "1961",
          "name": "Bengbu",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "449245"
        },
        {
          "id": "1962",
          "name": "Xiangtan",
          "countryCode": "CHN",
          "district": "Hunan",
          "population": "441968"
        },
        {
          "id": "1963",
          "name": "Weifang",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "428522"
        },
        {
          "id": "1964",
          "name": "Wuhu",
          "countryCode": "CHN",
          "district": "Anhui",
          "population": "425740"
        },
        {
          "id": "1965",
          "name": "Pingxiang",
          "countryCode": "CHN",
          "district": "Jiangxi",
          "population": "425579"
        },
        {
          "id": "1966",
          "name": "Yingkou",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "421589"
        },
        {
          "id": "1967",
          "name": "Anyang",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "420332"
        },
        {
          "id": "1968",
          "name": "Panzhihua",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "415466"
        },
        {
          "id": "1969",
          "name": "Pingdingshan",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "410775"
        },
        {
          "id": "1970",
          "name": "Xiangfan",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "410407"
        },
        {
          "id": "1850",
          "name": "Guelph",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "103593"
        },
        {
          "id": "1852",
          "name": "Coquitlam",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "101820"
        },
        {
          "id": "1853",
          "name": "Saanich",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "101388"
        },
        {
          "id": "1854",
          "name": "Gatineau",
          "countryCode": "CAN",
          "district": "QuР“В©bec",
          "population": "100702"
        },
        {
          "id": "1855",
          "name": "Delta",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "95411"
        },
        {
          "id": "1856",
          "name": "Sudbury",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "92686"
        },
        {
          "id": "1857",
          "name": "Kelowna",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "89442"
        },
        {
          "id": "1858",
          "name": "Barrie",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "89269"
        },
        {
          "id": "1859",
          "name": "Praia",
          "countryCode": "CPV",
          "district": "SР”вЂЎo Tiago",
          "population": "94800"
        },
        {
          "id": "1860",
          "name": "Almaty",
          "countryCode": "KAZ",
          "district": "Almaty Qalasy",
          "population": "1129400"
        },
        {
          "id": "1861",
          "name": "Qaraghandy",
          "countryCode": "KAZ",
          "district": "Qaraghandy",
          "population": "436900"
        },
        {
          "id": "1862",
          "name": "Shymkent",
          "countryCode": "KAZ",
          "district": "South Kazakstan",
          "population": "360100"
        },
        {
          "id": "1863",
          "name": "Taraz",
          "countryCode": "KAZ",
          "district": "Taraz",
          "population": "330100"
        },
        {
          "id": "1864",
          "name": "Astana",
          "countryCode": "KAZ",
          "district": "Astana",
          "population": "311200"
        },
        {
          "id": "1865",
          "name": "Р“вЂ“skemen",
          "countryCode": "KAZ",
          "district": "East Kazakstan",
          "population": "311000"
        },
        {
          "id": "1866",
          "name": "Pavlodar",
          "countryCode": "KAZ",
          "district": "Pavlodar",
          "population": "300500"
        },
        {
          "id": "1867",
          "name": "Semey",
          "countryCode": "KAZ",
          "district": "East Kazakstan",
          "population": "269600"
        },
        {
          "id": "1868",
          "name": "AqtР“В¶be",
          "countryCode": "KAZ",
          "district": "AqtР“В¶be",
          "population": "253100"
        },
        {
          "id": "1869",
          "name": "Qostanay",
          "countryCode": "KAZ",
          "district": "Qostanay",
          "population": "221400"
        },
        {
          "id": "1870",
          "name": "Petropavl",
          "countryCode": "KAZ",
          "district": "North Kazakstan",
          "population": "203500"
        },
        {
          "id": "1871",
          "name": "Oral",
          "countryCode": "KAZ",
          "district": "West Kazakstan",
          "population": "195500"
        },
        {
          "id": "1872",
          "name": "Temirtau",
          "countryCode": "KAZ",
          "district": "Qaraghandy",
          "population": "170500"
        },
        {
          "id": "1873",
          "name": "Qyzylorda",
          "countryCode": "KAZ",
          "district": "Qyzylorda",
          "population": "157400"
        },
        {
          "id": "1874",
          "name": "Aqtau",
          "countryCode": "KAZ",
          "district": "Mangghystau",
          "population": "143400"
        },
        {
          "id": "1875",
          "name": "Atyrau",
          "countryCode": "KAZ",
          "district": "Atyrau",
          "population": "142500"
        },
        {
          "id": "1876",
          "name": "Ekibastuz",
          "countryCode": "KAZ",
          "district": "Pavlodar",
          "population": "127200"
        },
        {
          "id": "1877",
          "name": "KР“В¶kshetau",
          "countryCode": "KAZ",
          "district": "North Kazakstan",
          "population": "123400"
        },
        {
          "id": "1878",
          "name": "Rudnyy",
          "countryCode": "KAZ",
          "district": "Qostanay",
          "population": "109500"
        },
        {
          "id": "1879",
          "name": "Taldyqorghan",
          "countryCode": "KAZ",
          "district": "Almaty",
          "population": "98000"
        },
        {
          "id": "1880",
          "name": "Zhezqazghan",
          "countryCode": "KAZ",
          "district": "Qaraghandy",
          "population": "90000"
        },
        {
          "id": "1881",
          "name": "Nairobi",
          "countryCode": "KEN",
          "district": "Nairobi",
          "population": "2290000"
        },
        {
          "id": "1882",
          "name": "Mombasa",
          "countryCode": "KEN",
          "district": "Coast",
          "population": "461753"
        },
        {
          "id": "1883",
          "name": "Kisumu",
          "countryCode": "KEN",
          "district": "Nyanza",
          "population": "192733"
        },
        {
          "id": "1884",
          "name": "Nakuru",
          "countryCode": "KEN",
          "district": "Rift Valley",
          "population": "163927"
        },
        {
          "id": "1885",
          "name": "Machakos",
          "countryCode": "KEN",
          "district": "Eastern",
          "population": "116293"
        },
        {
          "id": "1886",
          "name": "Eldoret",
          "countryCode": "KEN",
          "district": "Rift Valley",
          "population": "111882"
        },
        {
          "id": "1887",
          "name": "Meru",
          "countryCode": "KEN",
          "district": "Eastern",
          "population": "94947"
        },
        {
          "id": "1889",
          "name": "Bangui",
          "countryCode": "CAF",
          "district": "Bangui",
          "population": "524000"
        },
        {
          "id": "1890",
          "name": "Shanghai",
          "countryCode": "CHN",
          "district": "Shanghai",
          "population": "9696300"
        },
        {
          "id": "1891",
          "name": "Peking",
          "countryCode": "CHN",
          "district": "Peking",
          "population": "7472000"
        },
        {
          "id": "1892",
          "name": "Chongqing",
          "countryCode": "CHN",
          "district": "Chongqing",
          "population": "6351600"
        },
        {
          "id": "1893",
          "name": "Tianjin",
          "countryCode": "CHN",
          "district": "Tianjin",
          "population": "5286800"
        },
        {
          "id": "1894",
          "name": "Wuhan",
          "countryCode": "CHN",
          "district": "Hubei",
          "population": "4344600"
        },
        {
          "id": "1895",
          "name": "Harbin",
          "countryCode": "CHN",
          "district": "Heilongjiang",
          "population": "4289800"
        },
        {
          "id": "1896",
          "name": "Shenyang",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "4265200"
        },
        {
          "id": "1897",
          "name": "Kanton [Guangzhou]",
          "countryCode": "CHN",
          "district": "Guangdong",
          "population": "4256300"
        },
        {
          "id": "1898",
          "name": "Chengdu",
          "countryCode": "CHN",
          "district": "Sichuan",
          "population": "3361500"
        },
        {
          "id": "1899",
          "name": "Nanking [Nanjing]",
          "countryCode": "CHN",
          "district": "Jiangsu",
          "population": "2870300"
        },
        {
          "id": "1900",
          "name": "Changchun",
          "countryCode": "CHN",
          "district": "Jilin",
          "population": "2812000"
        },
        {
          "id": "1902",
          "name": "Dalian",
          "countryCode": "CHN",
          "district": "Liaoning",
          "population": "2697000"
        },
        {
          "id": "1903",
          "name": "Qingdao",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "2596000"
        },
        {
          "id": "1904",
          "name": "Jinan",
          "countryCode": "CHN",
          "district": "Shandong",
          "population": "2278100"
        },
        {
          "id": "1905",
          "name": "Hangzhou",
          "countryCode": "CHN",
          "district": "Zhejiang",
          "population": "2190500"
        },
        {
          "id": "1906",
          "name": "Zhengzhou",
          "countryCode": "CHN",
          "district": "Henan",
          "population": "2107200"
        },
        {
          "id": "1907",
          "name": "Shijiazhuang",
          "countryCode": "CHN",
          "district": "Hebei",
          "population": "2041500"
        },
        {
          "id": "1908",
          "name": "Taiyuan",
          "countryCode": "CHN",
          "district": "Shanxi",
          "population": "1968400"
        },
        {
          "id": "1909",
          "name": "Kunming",
          "countryCode": "CHN",
          "district": "Yunnan",
          "population": "1829500"
        },
        {
          "id": "1788",
          "name": "Irbid",
          "countryCode": "JOR",
          "district": "Irbid",
          "population": "231511"
        },
        {
          "id": "1789",
          "name": "al-Rusayfa",
          "countryCode": "JOR",
          "district": "al-Zarqa",
          "population": "137247"
        },
        {
          "id": "1790",
          "name": "Wadi al-Sir",
          "countryCode": "JOR",
          "district": "Amman",
          "population": "89104"
        },
        {
          "id": "1791",
          "name": "Flying Fish Cove",
          "countryCode": "CXR",
          "district": "РІР‚вЂњ",
          "population": "700"
        },
        {
          "id": "1792",
          "name": "Beograd",
          "countryCode": "YUG",
          "district": "Central Serbia",
          "population": "1204000"
        },
        {
          "id": "1793",
          "name": "Novi Sad",
          "countryCode": "YUG",
          "district": "Vojvodina",
          "population": "179626"
        },
        {
          "id": "1796",
          "name": "Kragujevac",
          "countryCode": "YUG",
          "district": "Central Serbia",
          "population": "147305"
        },
        {
          "id": "1797",
          "name": "Podgorica",
          "countryCode": "YUG",
          "district": "Montenegro",
          "population": "135000"
        },
        {
          "id": "1798",
          "name": "Subotica",
          "countryCode": "YUG",
          "district": "Vojvodina",
          "population": "100386"
        },
        {
          "id": "1799",
          "name": "Prizren",
          "countryCode": "YUG",
          "district": "Kosovo and Metohija",
          "population": "92303"
        },
        {
          "id": "1800",
          "name": "Phnom Penh",
          "countryCode": "KHM",
          "district": "Phnom Penh",
          "population": "570155"
        },
        {
          "id": "1801",
          "name": "Battambang",
          "countryCode": "KHM",
          "district": "Battambang",
          "population": "129800"
        },
        {
          "id": "1802",
          "name": "Siem Reap",
          "countryCode": "KHM",
          "district": "Siem Reap",
          "population": "105100"
        },
        {
          "id": "1803",
          "name": "Douala",
          "countryCode": "CMR",
          "district": "Littoral",
          "population": "1448300"
        },
        {
          "id": "1804",
          "name": "YaoundР“В©",
          "countryCode": "CMR",
          "district": "Centre",
          "population": "1372800"
        },
        {
          "id": "1805",
          "name": "Garoua",
          "countryCode": "CMR",
          "district": "Nord",
          "population": "177000"
        },
        {
          "id": "1806",
          "name": "Maroua",
          "countryCode": "CMR",
          "district": "ExtrР•С”me-Nord",
          "population": "143000"
        },
        {
          "id": "1807",
          "name": "Bamenda",
          "countryCode": "CMR",
          "district": "Nord-Ouest",
          "population": "138000"
        },
        {
          "id": "1808",
          "name": "Bafoussam",
          "countryCode": "CMR",
          "district": "Ouest",
          "population": "131000"
        },
        {
          "id": "1809",
          "name": "Nkongsamba",
          "countryCode": "CMR",
          "district": "Littoral",
          "population": "112454"
        },
        {
          "id": "1810",
          "name": "MontrР“В©al",
          "countryCode": "CAN",
          "district": "QuР“В©bec",
          "population": "1016376"
        },
        {
          "id": "1811",
          "name": "Calgary",
          "countryCode": "CAN",
          "district": "Alberta",
          "population": "768082"
        },
        {
          "id": "1812",
          "name": "Toronto",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "688275"
        },
        {
          "id": "1813",
          "name": "North York",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "622632"
        },
        {
          "id": "1814",
          "name": "Winnipeg",
          "countryCode": "CAN",
          "district": "Manitoba",
          "population": "618477"
        },
        {
          "id": "1815",
          "name": "Edmonton",
          "countryCode": "CAN",
          "district": "Alberta",
          "population": "616306"
        },
        {
          "id": "1816",
          "name": "Mississauga",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "608072"
        },
        {
          "id": "1817",
          "name": "Scarborough",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "594501"
        },
        {
          "id": "1818",
          "name": "Vancouver",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "514008"
        },
        {
          "id": "1819",
          "name": "Etobicoke",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "348845"
        },
        {
          "id": "1820",
          "name": "London",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "339917"
        },
        {
          "id": "1821",
          "name": "Hamilton",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "335614"
        },
        {
          "id": "1822",
          "name": "Ottawa",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "335277"
        },
        {
          "id": "1823",
          "name": "Laval",
          "countryCode": "CAN",
          "district": "QuР“В©bec",
          "population": "330393"
        },
        {
          "id": "1824",
          "name": "Surrey",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "304477"
        },
        {
          "id": "1825",
          "name": "Brampton",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "296711"
        },
        {
          "id": "1826",
          "name": "Windsor",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "207588"
        },
        {
          "id": "1827",
          "name": "Saskatoon",
          "countryCode": "CAN",
          "district": "Saskatchewan",
          "population": "193647"
        },
        {
          "id": "1828",
          "name": "Kitchener",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "189959"
        },
        {
          "id": "1829",
          "name": "Markham",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "189098"
        },
        {
          "id": "1830",
          "name": "Regina",
          "countryCode": "CAN",
          "district": "Saskatchewan",
          "population": "180400"
        },
        {
          "id": "1831",
          "name": "Burnaby",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "179209"
        },
        {
          "id": "1832",
          "name": "QuР“В©bec",
          "countryCode": "CAN",
          "district": "QuР“В©bec",
          "population": "167264"
        },
        {
          "id": "1833",
          "name": "York",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "154980"
        },
        {
          "id": "1834",
          "name": "Richmond",
          "countryCode": "CAN",
          "district": "British Colombia",
          "population": "148867"
        },
        {
          "id": "1835",
          "name": "Vaughan",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "147889"
        },
        {
          "id": "1836",
          "name": "Burlington",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "145150"
        },
        {
          "id": "1837",
          "name": "Oshawa",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "140173"
        },
        {
          "id": "1838",
          "name": "Oakville",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "139192"
        },
        {
          "id": "1839",
          "name": "Saint Catharines",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "136216"
        },
        {
          "id": "1840",
          "name": "Longueuil",
          "countryCode": "CAN",
          "district": "QuР“В©bec",
          "population": "127977"
        },
        {
          "id": "1841",
          "name": "Richmond Hill",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "116428"
        },
        {
          "id": "1842",
          "name": "Thunder Bay",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "115913"
        },
        {
          "id": "1843",
          "name": "Nepean",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "115100"
        },
        {
          "id": "1844",
          "name": "Cape Breton",
          "countryCode": "CAN",
          "district": "Nova Scotia",
          "population": "114733"
        },
        {
          "id": "1845",
          "name": "East York",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "114034"
        },
        {
          "id": "1846",
          "name": "Halifax",
          "countryCode": "CAN",
          "district": "Nova Scotia",
          "population": "113910"
        },
        {
          "id": "1847",
          "name": "Cambridge",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "109186"
        },
        {
          "id": "1848",
          "name": "Gloucester",
          "countryCode": "CAN",
          "district": "Ontario",
          "population": "107314"
        },
        {
          "id": "1727",
          "name": "Asaka",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "114815"
        },
        {
          "id": "1728",
          "name": "Higashikurume",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "111666"
        },
        {
          "id": "1729",
          "name": "Ikoma",
          "countryCode": "JPN",
          "district": "Nara",
          "population": "111645"
        },
        {
          "id": "1730",
          "name": "Kitami",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "111295"
        },
        {
          "id": "1731",
          "name": "Koganei",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "110969"
        },
        {
          "id": "1732",
          "name": "Iwatsuki",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "110034"
        },
        {
          "id": "1733",
          "name": "Mishima",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "109699"
        },
        {
          "id": "1734",
          "name": "Handa",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "108600"
        },
        {
          "id": "1735",
          "name": "Muroran",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "108275"
        },
        {
          "id": "1736",
          "name": "Komatsu",
          "countryCode": "JPN",
          "district": "Ishikawa",
          "population": "107937"
        },
        {
          "id": "1737",
          "name": "Yatsushiro",
          "countryCode": "JPN",
          "district": "Kumamoto",
          "population": "107661"
        },
        {
          "id": "1738",
          "name": "Iida",
          "countryCode": "JPN",
          "district": "Nagano",
          "population": "107583"
        },
        {
          "id": "1739",
          "name": "Tokuyama",
          "countryCode": "JPN",
          "district": "Yamaguchi",
          "population": "107078"
        },
        {
          "id": "1740",
          "name": "Kokubunji",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "106996"
        },
        {
          "id": "1741",
          "name": "Akishima",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "106914"
        },
        {
          "id": "1742",
          "name": "Iwakuni",
          "countryCode": "JPN",
          "district": "Yamaguchi",
          "population": "106647"
        },
        {
          "id": "1743",
          "name": "Kusatsu",
          "countryCode": "JPN",
          "district": "Shiga",
          "population": "106232"
        },
        {
          "id": "1744",
          "name": "Kuwana",
          "countryCode": "JPN",
          "district": "Mie",
          "population": "106121"
        },
        {
          "id": "1745",
          "name": "Sanda",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "105643"
        },
        {
          "id": "1746",
          "name": "Hikone",
          "countryCode": "JPN",
          "district": "Shiga",
          "population": "105508"
        },
        {
          "id": "1747",
          "name": "Toda",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "103969"
        },
        {
          "id": "1748",
          "name": "Tajimi",
          "countryCode": "JPN",
          "district": "Gifu",
          "population": "103171"
        },
        {
          "id": "1749",
          "name": "Ikeda",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "102710"
        },
        {
          "id": "1750",
          "name": "Fukaya",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "102156"
        },
        {
          "id": "1751",
          "name": "Ise",
          "countryCode": "JPN",
          "district": "Mie",
          "population": "101732"
        },
        {
          "id": "1752",
          "name": "Sakata",
          "countryCode": "JPN",
          "district": "Yamagata",
          "population": "101651"
        },
        {
          "id": "1753",
          "name": "Kasuga",
          "countryCode": "JPN",
          "district": "Fukuoka",
          "population": "101344"
        },
        {
          "id": "1754",
          "name": "Kamagaya",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "100821"
        },
        {
          "id": "1755",
          "name": "Tsuruoka",
          "countryCode": "JPN",
          "district": "Yamagata",
          "population": "100713"
        },
        {
          "id": "1756",
          "name": "Hoya",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "100313"
        },
        {
          "id": "1757",
          "name": "Nishio",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "100032"
        },
        {
          "id": "1758",
          "name": "Tokai",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "99738"
        },
        {
          "id": "1759",
          "name": "Inazawa",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "98746"
        },
        {
          "id": "1760",
          "name": "Sakado",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "98221"
        },
        {
          "id": "1761",
          "name": "Isehara",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "98123"
        },
        {
          "id": "1762",
          "name": "Takasago",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "97632"
        },
        {
          "id": "1763",
          "name": "Fujimi",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "96972"
        },
        {
          "id": "1764",
          "name": "Urasoe",
          "countryCode": "JPN",
          "district": "Okinawa",
          "population": "96002"
        },
        {
          "id": "1765",
          "name": "Yonezawa",
          "countryCode": "JPN",
          "district": "Yamagata",
          "population": "95592"
        },
        {
          "id": "1766",
          "name": "Konan",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "95521"
        },
        {
          "id": "1767",
          "name": "Yamatokoriyama",
          "countryCode": "JPN",
          "district": "Nara",
          "population": "95165"
        },
        {
          "id": "1768",
          "name": "Maizuru",
          "countryCode": "JPN",
          "district": "Kyoto",
          "population": "94784"
        },
        {
          "id": "1769",
          "name": "Onomichi",
          "countryCode": "JPN",
          "district": "Hiroshima",
          "population": "93756"
        },
        {
          "id": "1770",
          "name": "Higashimatsuyama",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "93342"
        },
        {
          "id": "1771",
          "name": "Kimitsu",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "93216"
        },
        {
          "id": "1772",
          "name": "Isahaya",
          "countryCode": "JPN",
          "district": "Nagasaki",
          "population": "93058"
        },
        {
          "id": "1773",
          "name": "Kanuma",
          "countryCode": "JPN",
          "district": "Tochigi",
          "population": "93053"
        },
        {
          "id": "1774",
          "name": "Izumisano",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "92583"
        },
        {
          "id": "1775",
          "name": "Kameoka",
          "countryCode": "JPN",
          "district": "Kyoto",
          "population": "92398"
        },
        {
          "id": "1776",
          "name": "Mobara",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "91664"
        },
        {
          "id": "1777",
          "name": "Narita",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "91470"
        },
        {
          "id": "1778",
          "name": "Kashiwazaki",
          "countryCode": "JPN",
          "district": "Niigata",
          "population": "91229"
        },
        {
          "id": "1779",
          "name": "Tsuyama",
          "countryCode": "JPN",
          "district": "Okayama",
          "population": "91170"
        },
        {
          "id": "1780",
          "name": "Sanaa",
          "countryCode": "YEM",
          "district": "Sanaa",
          "population": "503600"
        },
        {
          "id": "1781",
          "name": "Aden",
          "countryCode": "YEM",
          "district": "Aden",
          "population": "398300"
        },
        {
          "id": "1782",
          "name": "Taizz",
          "countryCode": "YEM",
          "district": "Taizz",
          "population": "317600"
        },
        {
          "id": "1783",
          "name": "Hodeida",
          "countryCode": "YEM",
          "district": "Hodeida",
          "population": "298500"
        },
        {
          "id": "1784",
          "name": "al-Mukalla",
          "countryCode": "YEM",
          "district": "Hadramawt",
          "population": "122400"
        },
        {
          "id": "1785",
          "name": "Ibb",
          "countryCode": "YEM",
          "district": "Ibb",
          "population": "103300"
        },
        {
          "id": "1786",
          "name": "Amman",
          "countryCode": "JOR",
          "district": "Amman",
          "population": "1000000"
        },
        {
          "id": "1787",
          "name": "al-Zarqa",
          "countryCode": "JOR",
          "district": "al-Zarqa",
          "population": "389815"
        },
        {
          "id": "1666",
          "name": "Moriguchi",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "155941"
        },
        {
          "id": "1667",
          "name": "Otaru",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "155784"
        },
        {
          "id": "1668",
          "name": "Anjo",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "153823"
        },
        {
          "id": "1669",
          "name": "Narashino",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "152849"
        },
        {
          "id": "1670",
          "name": "Oyama",
          "countryCode": "JPN",
          "district": "Tochigi",
          "population": "152820"
        },
        {
          "id": "1671",
          "name": "Ogaki",
          "countryCode": "JPN",
          "district": "Gifu",
          "population": "151758"
        },
        {
          "id": "1672",
          "name": "Matsue",
          "countryCode": "JPN",
          "district": "Shimane",
          "population": "149821"
        },
        {
          "id": "1673",
          "name": "Kawanishi",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "149794"
        },
        {
          "id": "1674",
          "name": "Hitachinaka",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "148006"
        },
        {
          "id": "1675",
          "name": "Niiza",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "147744"
        },
        {
          "id": "1676",
          "name": "Nagareyama",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "147738"
        },
        {
          "id": "1677",
          "name": "Tottori",
          "countryCode": "JPN",
          "district": "Tottori",
          "population": "147523"
        },
        {
          "id": "1678",
          "name": "Tama",
          "countryCode": "JPN",
          "district": "Ibaragi",
          "population": "146712"
        },
        {
          "id": "1679",
          "name": "Iruma",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "145922"
        },
        {
          "id": "1680",
          "name": "Ota",
          "countryCode": "JPN",
          "district": "Gumma",
          "population": "145317"
        },
        {
          "id": "1681",
          "name": "Omuta",
          "countryCode": "JPN",
          "district": "Fukuoka",
          "population": "142889"
        },
        {
          "id": "1682",
          "name": "Komaki",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "139827"
        },
        {
          "id": "1683",
          "name": "Ome",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "139216"
        },
        {
          "id": "1684",
          "name": "Kadoma",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "138953"
        },
        {
          "id": "1685",
          "name": "Yamaguchi",
          "countryCode": "JPN",
          "district": "Yamaguchi",
          "population": "138210"
        },
        {
          "id": "1686",
          "name": "Higashimurayama",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "136970"
        },
        {
          "id": "1687",
          "name": "Yonago",
          "countryCode": "JPN",
          "district": "Tottori",
          "population": "136461"
        },
        {
          "id": "1688",
          "name": "Matsubara",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "135010"
        },
        {
          "id": "1689",
          "name": "Musashino",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "134426"
        },
        {
          "id": "1690",
          "name": "Tsuchiura",
          "countryCode": "JPN",
          "district": "Ibaragi",
          "population": "134072"
        },
        {
          "id": "1691",
          "name": "Joetsu",
          "countryCode": "JPN",
          "district": "Niigata",
          "population": "133505"
        },
        {
          "id": "1692",
          "name": "Miyakonojo",
          "countryCode": "JPN",
          "district": "Miyazaki",
          "population": "133183"
        },
        {
          "id": "1693",
          "name": "Misato",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "132957"
        },
        {
          "id": "1694",
          "name": "Kakamigahara",
          "countryCode": "JPN",
          "district": "Gifu",
          "population": "131831"
        },
        {
          "id": "1695",
          "name": "Daito",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "130594"
        },
        {
          "id": "1696",
          "name": "Seto",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "130470"
        },
        {
          "id": "1697",
          "name": "Kariya",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "127969"
        },
        {
          "id": "1698",
          "name": "Urayasu",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "127550"
        },
        {
          "id": "1699",
          "name": "Beppu",
          "countryCode": "JPN",
          "district": "Oita",
          "population": "127486"
        },
        {
          "id": "1700",
          "name": "Niihama",
          "countryCode": "JPN",
          "district": "Ehime",
          "population": "127207"
        },
        {
          "id": "1701",
          "name": "Minoo",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "127026"
        },
        {
          "id": "1702",
          "name": "Fujieda",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "126897"
        },
        {
          "id": "1703",
          "name": "Abiko",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "126670"
        },
        {
          "id": "1704",
          "name": "Nobeoka",
          "countryCode": "JPN",
          "district": "Miyazaki",
          "population": "125547"
        },
        {
          "id": "1705",
          "name": "Tondabayashi",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "125094"
        },
        {
          "id": "1706",
          "name": "Ueda",
          "countryCode": "JPN",
          "district": "Nagano",
          "population": "124217"
        },
        {
          "id": "1707",
          "name": "Kashihara",
          "countryCode": "JPN",
          "district": "Nara",
          "population": "124013"
        },
        {
          "id": "1708",
          "name": "Matsusaka",
          "countryCode": "JPN",
          "district": "Mie",
          "population": "123582"
        },
        {
          "id": "1709",
          "name": "Isesaki",
          "countryCode": "JPN",
          "district": "Gumma",
          "population": "123285"
        },
        {
          "id": "1710",
          "name": "Zama",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "122046"
        },
        {
          "id": "1711",
          "name": "Kisarazu",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "121967"
        },
        {
          "id": "1712",
          "name": "Noda",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "121030"
        },
        {
          "id": "1713",
          "name": "Ishinomaki",
          "countryCode": "JPN",
          "district": "Miyagi",
          "population": "120963"
        },
        {
          "id": "1714",
          "name": "Fujinomiya",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "119714"
        },
        {
          "id": "1715",
          "name": "Kawachinagano",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "119666"
        },
        {
          "id": "1716",
          "name": "Imabari",
          "countryCode": "JPN",
          "district": "Ehime",
          "population": "119357"
        },
        {
          "id": "1717",
          "name": "Aizuwakamatsu",
          "countryCode": "JPN",
          "district": "Fukushima",
          "population": "119287"
        },
        {
          "id": "1718",
          "name": "Higashihiroshima",
          "countryCode": "JPN",
          "district": "Hiroshima",
          "population": "119166"
        },
        {
          "id": "1719",
          "name": "Habikino",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "118968"
        },
        {
          "id": "1720",
          "name": "Ebetsu",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "118805"
        },
        {
          "id": "1721",
          "name": "Hofu",
          "countryCode": "JPN",
          "district": "Yamaguchi",
          "population": "118751"
        },
        {
          "id": "1722",
          "name": "Kiryu",
          "countryCode": "JPN",
          "district": "Gumma",
          "population": "118326"
        },
        {
          "id": "1723",
          "name": "Okinawa",
          "countryCode": "JPN",
          "district": "Okinawa",
          "population": "117748"
        },
        {
          "id": "1724",
          "name": "Yaizu",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "117258"
        },
        {
          "id": "1725",
          "name": "Toyokawa",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "115781"
        },
        {
          "id": "1726",
          "name": "Ebina",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "115571"
        },
        {
          "id": "1605",
          "name": "Kasugai",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "282348"
        },
        {
          "id": "1606",
          "name": "Otsu",
          "countryCode": "JPN",
          "district": "Shiga",
          "population": "282070"
        },
        {
          "id": "1607",
          "name": "Ichihara",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "279280"
        },
        {
          "id": "1608",
          "name": "Yao",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "276421"
        },
        {
          "id": "1609",
          "name": "Ichinomiya",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "270828"
        },
        {
          "id": "1610",
          "name": "Tokushima",
          "countryCode": "JPN",
          "district": "Tokushima",
          "population": "269649"
        },
        {
          "id": "1611",
          "name": "Kakogawa",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "266281"
        },
        {
          "id": "1612",
          "name": "Ibaraki",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "261020"
        },
        {
          "id": "1613",
          "name": "Neyagawa",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "257315"
        },
        {
          "id": "1614",
          "name": "Shimonoseki",
          "countryCode": "JPN",
          "district": "Yamaguchi",
          "population": "257263"
        },
        {
          "id": "1615",
          "name": "Yamagata",
          "countryCode": "JPN",
          "district": "Yamagata",
          "population": "255617"
        },
        {
          "id": "1616",
          "name": "Fukui",
          "countryCode": "JPN",
          "district": "Fukui",
          "population": "254818"
        },
        {
          "id": "1617",
          "name": "Hiratsuka",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "254207"
        },
        {
          "id": "1618",
          "name": "Mito",
          "countryCode": "JPN",
          "district": "Ibaragi",
          "population": "246559"
        },
        {
          "id": "1619",
          "name": "Sasebo",
          "countryCode": "JPN",
          "district": "Nagasaki",
          "population": "244240"
        },
        {
          "id": "1620",
          "name": "Hachinohe",
          "countryCode": "JPN",
          "district": "Aomori",
          "population": "242979"
        },
        {
          "id": "1621",
          "name": "Takasaki",
          "countryCode": "JPN",
          "district": "Gumma",
          "population": "239124"
        },
        {
          "id": "1622",
          "name": "Shimizu",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "239123"
        },
        {
          "id": "1623",
          "name": "Kurume",
          "countryCode": "JPN",
          "district": "Fukuoka",
          "population": "235611"
        },
        {
          "id": "1624",
          "name": "Fuji",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "231527"
        },
        {
          "id": "1625",
          "name": "Soka",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "222768"
        },
        {
          "id": "1626",
          "name": "Fuchu",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "220576"
        },
        {
          "id": "1627",
          "name": "Chigasaki",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "216015"
        },
        {
          "id": "1628",
          "name": "Atsugi",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "212407"
        },
        {
          "id": "1629",
          "name": "Numazu",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "211382"
        },
        {
          "id": "1630",
          "name": "Ageo",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "209442"
        },
        {
          "id": "1631",
          "name": "Yamato",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "208234"
        },
        {
          "id": "1632",
          "name": "Matsumoto",
          "countryCode": "JPN",
          "district": "Nagano",
          "population": "206801"
        },
        {
          "id": "1633",
          "name": "Kure",
          "countryCode": "JPN",
          "district": "Hiroshima",
          "population": "206504"
        },
        {
          "id": "1634",
          "name": "Takarazuka",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "205993"
        },
        {
          "id": "1635",
          "name": "Kasukabe",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "201838"
        },
        {
          "id": "1636",
          "name": "Chofu",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "201585"
        },
        {
          "id": "1637",
          "name": "Odawara",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "200171"
        },
        {
          "id": "1638",
          "name": "Kofu",
          "countryCode": "JPN",
          "district": "Yamanashi",
          "population": "199753"
        },
        {
          "id": "1639",
          "name": "Kushiro",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "197608"
        },
        {
          "id": "1640",
          "name": "Kishiwada",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "197276"
        },
        {
          "id": "1641",
          "name": "Hitachi",
          "countryCode": "JPN",
          "district": "Ibaragi",
          "population": "196622"
        },
        {
          "id": "1642",
          "name": "Nagaoka",
          "countryCode": "JPN",
          "district": "Niigata",
          "population": "192407"
        },
        {
          "id": "1643",
          "name": "Itami",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "190886"
        },
        {
          "id": "1644",
          "name": "Uji",
          "countryCode": "JPN",
          "district": "Kyoto",
          "population": "188735"
        },
        {
          "id": "1645",
          "name": "Suzuka",
          "countryCode": "JPN",
          "district": "Mie",
          "population": "184061"
        },
        {
          "id": "1646",
          "name": "Hirosaki",
          "countryCode": "JPN",
          "district": "Aomori",
          "population": "177522"
        },
        {
          "id": "1647",
          "name": "Ube",
          "countryCode": "JPN",
          "district": "Yamaguchi",
          "population": "175206"
        },
        {
          "id": "1648",
          "name": "Kodaira",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "174984"
        },
        {
          "id": "1649",
          "name": "Takaoka",
          "countryCode": "JPN",
          "district": "Toyama",
          "population": "174380"
        },
        {
          "id": "1650",
          "name": "Obihiro",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "173685"
        },
        {
          "id": "1651",
          "name": "Tomakomai",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "171958"
        },
        {
          "id": "1652",
          "name": "Saga",
          "countryCode": "JPN",
          "district": "Saga",
          "population": "170034"
        },
        {
          "id": "1653",
          "name": "Sakura",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "168072"
        },
        {
          "id": "1654",
          "name": "Kamakura",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "167661"
        },
        {
          "id": "1655",
          "name": "Mitaka",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "167268"
        },
        {
          "id": "1656",
          "name": "Izumi",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "166979"
        },
        {
          "id": "1657",
          "name": "Hino",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "166770"
        },
        {
          "id": "1658",
          "name": "Hadano",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "166512"
        },
        {
          "id": "1659",
          "name": "Ashikaga",
          "countryCode": "JPN",
          "district": "Tochigi",
          "population": "165243"
        },
        {
          "id": "1660",
          "name": "Tsu",
          "countryCode": "JPN",
          "district": "Mie",
          "population": "164543"
        },
        {
          "id": "1661",
          "name": "Sayama",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "162472"
        },
        {
          "id": "1662",
          "name": "Yachiyo",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "161222"
        },
        {
          "id": "1663",
          "name": "Tsukuba",
          "countryCode": "JPN",
          "district": "Ibaragi",
          "population": "160768"
        },
        {
          "id": "1664",
          "name": "Tachikawa",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "159430"
        },
        {
          "id": "1665",
          "name": "Kumagaya",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "157171"
        },
        {
          "id": "1544",
          "name": "Chiba",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "863930"
        },
        {
          "id": "1545",
          "name": "Sakai",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "797735"
        },
        {
          "id": "1546",
          "name": "Kumamoto",
          "countryCode": "JPN",
          "district": "Kumamoto",
          "population": "656734"
        },
        {
          "id": "1547",
          "name": "Okayama",
          "countryCode": "JPN",
          "district": "Okayama",
          "population": "624269"
        },
        {
          "id": "1548",
          "name": "Sagamihara",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "586300"
        },
        {
          "id": "1549",
          "name": "Hamamatsu",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "568796"
        },
        {
          "id": "1550",
          "name": "Kagoshima",
          "countryCode": "JPN",
          "district": "Kagoshima",
          "population": "549977"
        },
        {
          "id": "1551",
          "name": "Funabashi",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "545299"
        },
        {
          "id": "1552",
          "name": "Higashiosaka",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "517785"
        },
        {
          "id": "1553",
          "name": "Hachioji",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "513451"
        },
        {
          "id": "1554",
          "name": "Niigata",
          "countryCode": "JPN",
          "district": "Niigata",
          "population": "497464"
        },
        {
          "id": "1555",
          "name": "Amagasaki",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "481434"
        },
        {
          "id": "1556",
          "name": "Himeji",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "475167"
        },
        {
          "id": "1557",
          "name": "Shizuoka",
          "countryCode": "JPN",
          "district": "Shizuoka",
          "population": "473854"
        },
        {
          "id": "1558",
          "name": "Urawa",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "469675"
        },
        {
          "id": "1559",
          "name": "Matsuyama",
          "countryCode": "JPN",
          "district": "Ehime",
          "population": "466133"
        },
        {
          "id": "1560",
          "name": "Matsudo",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "461126"
        },
        {
          "id": "1561",
          "name": "Kanazawa",
          "countryCode": "JPN",
          "district": "Ishikawa",
          "population": "455386"
        },
        {
          "id": "1562",
          "name": "Kawaguchi",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "452155"
        },
        {
          "id": "1563",
          "name": "Ichikawa",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "441893"
        },
        {
          "id": "1564",
          "name": "Omiya",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "441649"
        },
        {
          "id": "1565",
          "name": "Utsunomiya",
          "countryCode": "JPN",
          "district": "Tochigi",
          "population": "440353"
        },
        {
          "id": "1566",
          "name": "Oita",
          "countryCode": "JPN",
          "district": "Oita",
          "population": "433401"
        },
        {
          "id": "1567",
          "name": "Nagasaki",
          "countryCode": "JPN",
          "district": "Nagasaki",
          "population": "432759"
        },
        {
          "id": "1568",
          "name": "Yokosuka",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "430200"
        },
        {
          "id": "1569",
          "name": "Kurashiki",
          "countryCode": "JPN",
          "district": "Okayama",
          "population": "425103"
        },
        {
          "id": "1570",
          "name": "Gifu",
          "countryCode": "JPN",
          "district": "Gifu",
          "population": "408007"
        },
        {
          "id": "1571",
          "name": "Hirakata",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "403151"
        },
        {
          "id": "1572",
          "name": "Nishinomiya",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "397618"
        },
        {
          "id": "1573",
          "name": "Toyonaka",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "396689"
        },
        {
          "id": "1574",
          "name": "Wakayama",
          "countryCode": "JPN",
          "district": "Wakayama",
          "population": "391233"
        },
        {
          "id": "1575",
          "name": "Fukuyama",
          "countryCode": "JPN",
          "district": "Hiroshima",
          "population": "376921"
        },
        {
          "id": "1576",
          "name": "Fujisawa",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "372840"
        },
        {
          "id": "1577",
          "name": "Asahikawa",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "364813"
        },
        {
          "id": "1578",
          "name": "Machida",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "364197"
        },
        {
          "id": "1579",
          "name": "Nara",
          "countryCode": "JPN",
          "district": "Nara",
          "population": "362812"
        },
        {
          "id": "1580",
          "name": "Takatsuki",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "361747"
        },
        {
          "id": "1581",
          "name": "Iwaki",
          "countryCode": "JPN",
          "district": "Fukushima",
          "population": "361737"
        },
        {
          "id": "1582",
          "name": "Nagano",
          "countryCode": "JPN",
          "district": "Nagano",
          "population": "361391"
        },
        {
          "id": "1583",
          "name": "Toyohashi",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "360066"
        },
        {
          "id": "1584",
          "name": "Toyota",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "346090"
        },
        {
          "id": "1585",
          "name": "Suita",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "345750"
        },
        {
          "id": "1586",
          "name": "Takamatsu",
          "countryCode": "JPN",
          "district": "Kagawa",
          "population": "332471"
        },
        {
          "id": "1587",
          "name": "Koriyama",
          "countryCode": "JPN",
          "district": "Fukushima",
          "population": "330335"
        },
        {
          "id": "1588",
          "name": "Okazaki",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "328711"
        },
        {
          "id": "1589",
          "name": "Kawagoe",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "327211"
        },
        {
          "id": "1590",
          "name": "Tokorozawa",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "325809"
        },
        {
          "id": "1591",
          "name": "Toyama",
          "countryCode": "JPN",
          "district": "Toyama",
          "population": "325790"
        },
        {
          "id": "1592",
          "name": "Kochi",
          "countryCode": "JPN",
          "district": "Kochi",
          "population": "324710"
        },
        {
          "id": "1593",
          "name": "Kashiwa",
          "countryCode": "JPN",
          "district": "Chiba",
          "population": "320296"
        },
        {
          "id": "1594",
          "name": "Akita",
          "countryCode": "JPN",
          "district": "Akita",
          "population": "314440"
        },
        {
          "id": "1595",
          "name": "Miyazaki",
          "countryCode": "JPN",
          "district": "Miyazaki",
          "population": "303784"
        },
        {
          "id": "1596",
          "name": "Koshigaya",
          "countryCode": "JPN",
          "district": "Saitama",
          "population": "301446"
        },
        {
          "id": "1597",
          "name": "Naha",
          "countryCode": "JPN",
          "district": "Okinawa",
          "population": "299851"
        },
        {
          "id": "1598",
          "name": "Aomori",
          "countryCode": "JPN",
          "district": "Aomori",
          "population": "295969"
        },
        {
          "id": "1599",
          "name": "Hakodate",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "294788"
        },
        {
          "id": "1600",
          "name": "Akashi",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "292253"
        },
        {
          "id": "1601",
          "name": "Yokkaichi",
          "countryCode": "JPN",
          "district": "Mie",
          "population": "288173"
        },
        {
          "id": "1602",
          "name": "Fukushima",
          "countryCode": "JPN",
          "district": "Fukushima",
          "population": "287525"
        },
        {
          "id": "1603",
          "name": "Morioka",
          "countryCode": "JPN",
          "district": "Iwate",
          "population": "287353"
        },
        {
          "id": "1604",
          "name": "Maebashi",
          "countryCode": "JPN",
          "district": "Gumma",
          "population": "284473"
        },
        {
          "id": "1483",
          "name": "Prato",
          "countryCode": "ITA",
          "district": "Toscana",
          "population": "172473"
        },
        {
          "id": "1484",
          "name": "Parma",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "168717"
        },
        {
          "id": "1485",
          "name": "Cagliari",
          "countryCode": "ITA",
          "district": "Sardinia",
          "population": "165926"
        },
        {
          "id": "1486",
          "name": "Livorno",
          "countryCode": "ITA",
          "district": "Toscana",
          "population": "161673"
        },
        {
          "id": "1487",
          "name": "Perugia",
          "countryCode": "ITA",
          "district": "Umbria",
          "population": "156673"
        },
        {
          "id": "1488",
          "name": "Foggia",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "154891"
        },
        {
          "id": "1490",
          "name": "Salerno",
          "countryCode": "ITA",
          "district": "Campania",
          "population": "142055"
        },
        {
          "id": "1491",
          "name": "Ravenna",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "138418"
        },
        {
          "id": "1492",
          "name": "Ferrara",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "132127"
        },
        {
          "id": "1493",
          "name": "Rimini",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "131062"
        },
        {
          "id": "1494",
          "name": "Syrakusa",
          "countryCode": "ITA",
          "district": "Sisilia",
          "population": "126282"
        },
        {
          "id": "1495",
          "name": "Sassari",
          "countryCode": "ITA",
          "district": "Sardinia",
          "population": "120803"
        },
        {
          "id": "1496",
          "name": "Monza",
          "countryCode": "ITA",
          "district": "Lombardia",
          "population": "119516"
        },
        {
          "id": "1497",
          "name": "Bergamo",
          "countryCode": "ITA",
          "district": "Lombardia",
          "population": "117837"
        },
        {
          "id": "1498",
          "name": "Pescara",
          "countryCode": "ITA",
          "district": "Abruzzit",
          "population": "115698"
        },
        {
          "id": "1499",
          "name": "Latina",
          "countryCode": "ITA",
          "district": "Latium",
          "population": "114099"
        },
        {
          "id": "1500",
          "name": "Vicenza",
          "countryCode": "ITA",
          "district": "Veneto",
          "population": "109738"
        },
        {
          "id": "1501",
          "name": "Terni",
          "countryCode": "ITA",
          "district": "Umbria",
          "population": "107770"
        },
        {
          "id": "1502",
          "name": "ForlР”Р€",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "107475"
        },
        {
          "id": "1503",
          "name": "Trento",
          "countryCode": "ITA",
          "district": "Trentino-Alto Adige",
          "population": "104906"
        },
        {
          "id": "1504",
          "name": "Novara",
          "countryCode": "ITA",
          "district": "Piemonte",
          "population": "102037"
        },
        {
          "id": "1505",
          "name": "Piacenza",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "98384"
        },
        {
          "id": "1506",
          "name": "Ancona",
          "countryCode": "ITA",
          "district": "Marche",
          "population": "98329"
        },
        {
          "id": "1507",
          "name": "Lecce",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "98208"
        },
        {
          "id": "1508",
          "name": "Bolzano",
          "countryCode": "ITA",
          "district": "Trentino-Alto Adige",
          "population": "97232"
        },
        {
          "id": "1509",
          "name": "Catanzaro",
          "countryCode": "ITA",
          "district": "Calabria",
          "population": "96700"
        },
        {
          "id": "1510",
          "name": "La Spezia",
          "countryCode": "ITA",
          "district": "Liguria",
          "population": "95504"
        },
        {
          "id": "1511",
          "name": "Udine",
          "countryCode": "ITA",
          "district": "Friuli-Venezia Giuli",
          "population": "94932"
        },
        {
          "id": "1512",
          "name": "Torre del Greco",
          "countryCode": "ITA",
          "district": "Campania",
          "population": "94505"
        },
        {
          "id": "1513",
          "name": "Andria",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "94443"
        },
        {
          "id": "1514",
          "name": "Brindisi",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "93454"
        },
        {
          "id": "1515",
          "name": "Giugliano in Campania",
          "countryCode": "ITA",
          "district": "Campania",
          "population": "93286"
        },
        {
          "id": "1516",
          "name": "Pisa",
          "countryCode": "ITA",
          "district": "Toscana",
          "population": "92379"
        },
        {
          "id": "1517",
          "name": "Barletta",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "91904"
        },
        {
          "id": "1518",
          "name": "Arezzo",
          "countryCode": "ITA",
          "district": "Toscana",
          "population": "91729"
        },
        {
          "id": "1519",
          "name": "Alessandria",
          "countryCode": "ITA",
          "district": "Piemonte",
          "population": "90289"
        },
        {
          "id": "1520",
          "name": "Cesena",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "89852"
        },
        {
          "id": "1521",
          "name": "Pesaro",
          "countryCode": "ITA",
          "district": "Marche",
          "population": "88987"
        },
        {
          "id": "1522",
          "name": "Dili",
          "countryCode": "TMP",
          "district": "Dili",
          "population": "47900"
        },
        {
          "id": "1529",
          "name": "Spanish Town",
          "countryCode": "JAM",
          "district": "St. Catherine",
          "population": "110379"
        },
        {
          "id": "1530",
          "name": "Kingston",
          "countryCode": "JAM",
          "district": "St. Andrew",
          "population": "103962"
        },
        {
          "id": "1531",
          "name": "Portmore",
          "countryCode": "JAM",
          "district": "St. Andrew",
          "population": "99799"
        },
        {
          "id": "1532",
          "name": "Tokyo",
          "countryCode": "JPN",
          "district": "Tokyo-to",
          "population": "7980230"
        },
        {
          "id": "1533",
          "name": "Jokohama [Yokohama]",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "3339594"
        },
        {
          "id": "1534",
          "name": "Osaka",
          "countryCode": "JPN",
          "district": "Osaka",
          "population": "2595674"
        },
        {
          "id": "1535",
          "name": "Nagoya",
          "countryCode": "JPN",
          "district": "Aichi",
          "population": "2154376"
        },
        {
          "id": "1536",
          "name": "Sapporo",
          "countryCode": "JPN",
          "district": "Hokkaido",
          "population": "1790886"
        },
        {
          "id": "1537",
          "name": "Kioto",
          "countryCode": "JPN",
          "district": "Kyoto",
          "population": "1461974"
        },
        {
          "id": "1538",
          "name": "Kobe",
          "countryCode": "JPN",
          "district": "Hyogo",
          "population": "1425139"
        },
        {
          "id": "1539",
          "name": "Fukuoka",
          "countryCode": "JPN",
          "district": "Fukuoka",
          "population": "1308379"
        },
        {
          "id": "1540",
          "name": "Kawasaki",
          "countryCode": "JPN",
          "district": "Kanagawa",
          "population": "1217359"
        },
        {
          "id": "1541",
          "name": "Hiroshima",
          "countryCode": "JPN",
          "district": "Hiroshima",
          "population": "1119117"
        },
        {
          "id": "1542",
          "name": "Kitakyushu",
          "countryCode": "JPN",
          "district": "Fukuoka",
          "population": "1016264"
        },
        {
          "id": "1543",
          "name": "Sendai",
          "countryCode": "JPN",
          "district": "Miyagi",
          "population": "989975"
        },
        {
          "id": "1422",
          "name": "Bojnurd",
          "countryCode": "IRN",
          "district": "Khorasan",
          "population": "134835"
        },
        {
          "id": "1423",
          "name": "Maragheh",
          "countryCode": "IRN",
          "district": "East Azerbaidzan",
          "population": "132318"
        },
        {
          "id": "1424",
          "name": "Birjand",
          "countryCode": "IRN",
          "district": "Khorasan",
          "population": "127608"
        },
        {
          "id": "1425",
          "name": "Ilam",
          "countryCode": "IRN",
          "district": "Ilam",
          "population": "126346"
        },
        {
          "id": "1426",
          "name": "Bukan",
          "countryCode": "IRN",
          "district": "West Azerbaidzan",
          "population": "120020"
        },
        {
          "id": "1427",
          "name": "Masjed-e-Soleyman",
          "countryCode": "IRN",
          "district": "Khuzestan",
          "population": "116883"
        },
        {
          "id": "1428",
          "name": "Saqqez",
          "countryCode": "IRN",
          "district": "Kordestan",
          "population": "115394"
        },
        {
          "id": "1429",
          "name": "Gonbad-e Qabus",
          "countryCode": "IRN",
          "district": "Mazandaran",
          "population": "111253"
        },
        {
          "id": "1430",
          "name": "Saveh",
          "countryCode": "IRN",
          "district": "Qom",
          "population": "111245"
        },
        {
          "id": "1431",
          "name": "Mahabad",
          "countryCode": "IRN",
          "district": "West Azerbaidzan",
          "population": "107799"
        },
        {
          "id": "1432",
          "name": "Varamin",
          "countryCode": "IRN",
          "district": "Teheran",
          "population": "107233"
        },
        {
          "id": "1433",
          "name": "Andimeshk",
          "countryCode": "IRN",
          "district": "Khuzestan",
          "population": "106923"
        },
        {
          "id": "1434",
          "name": "Khorramshahr",
          "countryCode": "IRN",
          "district": "Khuzestan",
          "population": "105636"
        },
        {
          "id": "1435",
          "name": "Shahrud",
          "countryCode": "IRN",
          "district": "Semnan",
          "population": "104765"
        },
        {
          "id": "1436",
          "name": "Marv Dasht",
          "countryCode": "IRN",
          "district": "Fars",
          "population": "103579"
        },
        {
          "id": "1437",
          "name": "Zabol",
          "countryCode": "IRN",
          "district": "Sistan va Baluchesta",
          "population": "100887"
        },
        {
          "id": "1438",
          "name": "Shahr-e Kord",
          "countryCode": "IRN",
          "district": "Chaharmahal va Bakht",
          "population": "100477"
        },
        {
          "id": "1439",
          "name": "Bandar-e Anzali",
          "countryCode": "IRN",
          "district": "Gilan",
          "population": "98500"
        },
        {
          "id": "1440",
          "name": "Rafsanjan",
          "countryCode": "IRN",
          "district": "Kerman",
          "population": "98300"
        },
        {
          "id": "1441",
          "name": "Marand",
          "countryCode": "IRN",
          "district": "East Azerbaidzan",
          "population": "96400"
        },
        {
          "id": "1442",
          "name": "Torbat-e Heydariyeh",
          "countryCode": "IRN",
          "district": "Khorasan",
          "population": "94600"
        },
        {
          "id": "1443",
          "name": "Jahrom",
          "countryCode": "IRN",
          "district": "Fars",
          "population": "94200"
        },
        {
          "id": "1444",
          "name": "Semnan",
          "countryCode": "IRN",
          "district": "Semnan",
          "population": "91045"
        },
        {
          "id": "1445",
          "name": "Miandoab",
          "countryCode": "IRN",
          "district": "West Azerbaidzan",
          "population": "90100"
        },
        {
          "id": "1446",
          "name": "Qomsheh",
          "countryCode": "IRN",
          "district": "Esfahan",
          "population": "89800"
        },
        {
          "id": "1447",
          "name": "Dublin",
          "countryCode": "IRL",
          "district": "Leinster",
          "population": "481854"
        },
        {
          "id": "1448",
          "name": "Cork",
          "countryCode": "IRL",
          "district": "Munster",
          "population": "127187"
        },
        {
          "id": "1449",
          "name": "ReykjavР”В·k",
          "countryCode": "ISL",
          "district": "HР“В¶fuР•РЋborgarsvР”в„ўР•РЋi",
          "population": "109184"
        },
        {
          "id": "1450",
          "name": "Jerusalem",
          "countryCode": "ISR",
          "district": "Jerusalem",
          "population": "633700"
        },
        {
          "id": "1451",
          "name": "Tel Aviv-Jaffa",
          "countryCode": "ISR",
          "district": "Tel Aviv",
          "population": "348100"
        },
        {
          "id": "1452",
          "name": "Haifa",
          "countryCode": "ISR",
          "district": "Haifa",
          "population": "265700"
        },
        {
          "id": "1453",
          "name": "Rishon Le Ziyyon",
          "countryCode": "ISR",
          "district": "Ha Merkaz",
          "population": "188200"
        },
        {
          "id": "1454",
          "name": "Beerseba",
          "countryCode": "ISR",
          "district": "Ha Darom",
          "population": "163700"
        },
        {
          "id": "1455",
          "name": "Holon",
          "countryCode": "ISR",
          "district": "Tel Aviv",
          "population": "163100"
        },
        {
          "id": "1456",
          "name": "Petah Tiqwa",
          "countryCode": "ISR",
          "district": "Ha Merkaz",
          "population": "159400"
        },
        {
          "id": "1457",
          "name": "Ashdod",
          "countryCode": "ISR",
          "district": "Ha Darom",
          "population": "155800"
        },
        {
          "id": "1458",
          "name": "Netanya",
          "countryCode": "ISR",
          "district": "Ha Merkaz",
          "population": "154900"
        },
        {
          "id": "1459",
          "name": "Bat Yam",
          "countryCode": "ISR",
          "district": "Tel Aviv",
          "population": "137000"
        },
        {
          "id": "1460",
          "name": "Bene Beraq",
          "countryCode": "ISR",
          "district": "Tel Aviv",
          "population": "133900"
        },
        {
          "id": "1461",
          "name": "Ramat Gan",
          "countryCode": "ISR",
          "district": "Tel Aviv",
          "population": "126900"
        },
        {
          "id": "1462",
          "name": "Ashqelon",
          "countryCode": "ISR",
          "district": "Ha Darom",
          "population": "92300"
        },
        {
          "id": "1463",
          "name": "Rehovot",
          "countryCode": "ISR",
          "district": "Ha Merkaz",
          "population": "90300"
        },
        {
          "id": "1465",
          "name": "Milano",
          "countryCode": "ITA",
          "district": "Lombardia",
          "population": "1300977"
        },
        {
          "id": "1466",
          "name": "Napoli",
          "countryCode": "ITA",
          "district": "Campania",
          "population": "1002619"
        },
        {
          "id": "1467",
          "name": "Torino",
          "countryCode": "ITA",
          "district": "Piemonte",
          "population": "903705"
        },
        {
          "id": "1468",
          "name": "Palermo",
          "countryCode": "ITA",
          "district": "Sisilia",
          "population": "683794"
        },
        {
          "id": "1469",
          "name": "Genova",
          "countryCode": "ITA",
          "district": "Liguria",
          "population": "636104"
        },
        {
          "id": "1470",
          "name": "Bologna",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "381161"
        },
        {
          "id": "1471",
          "name": "Firenze",
          "countryCode": "ITA",
          "district": "Toscana",
          "population": "376662"
        },
        {
          "id": "1472",
          "name": "Catania",
          "countryCode": "ITA",
          "district": "Sisilia",
          "population": "337862"
        },
        {
          "id": "1473",
          "name": "Bari",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "331848"
        },
        {
          "id": "1474",
          "name": "Venezia",
          "countryCode": "ITA",
          "district": "Veneto",
          "population": "277305"
        },
        {
          "id": "1475",
          "name": "Messina",
          "countryCode": "ITA",
          "district": "Sisilia",
          "population": "259156"
        },
        {
          "id": "1476",
          "name": "Verona",
          "countryCode": "ITA",
          "district": "Veneto",
          "population": "255268"
        },
        {
          "id": "1477",
          "name": "Trieste",
          "countryCode": "ITA",
          "district": "Friuli-Venezia Giuli",
          "population": "216459"
        },
        {
          "id": "1478",
          "name": "Padova",
          "countryCode": "ITA",
          "district": "Veneto",
          "population": "211391"
        },
        {
          "id": "1479",
          "name": "Taranto",
          "countryCode": "ITA",
          "district": "Apulia",
          "population": "208214"
        },
        {
          "id": "1480",
          "name": "Brescia",
          "countryCode": "ITA",
          "district": "Lombardia",
          "population": "191317"
        },
        {
          "id": "1481",
          "name": "Reggio di Calabria",
          "countryCode": "ITA",
          "district": "Calabria",
          "population": "179617"
        },
        {
          "id": "1482",
          "name": "Modena",
          "countryCode": "ITA",
          "district": "Emilia-Romagna",
          "population": "176022"
        },
        {
          "id": "1361",
          "name": "Baidyabati",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "90601"
        },
        {
          "id": "1362",
          "name": "Morvi",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "90357"
        },
        {
          "id": "1363",
          "name": "Raigarh",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "89166"
        },
        {
          "id": "1364",
          "name": "Vejalpur",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "89053"
        },
        {
          "id": "1365",
          "name": "Baghdad",
          "countryCode": "IRQ",
          "district": "Baghdad",
          "population": "4336000"
        },
        {
          "id": "1366",
          "name": "Mosul",
          "countryCode": "IRQ",
          "district": "Ninawa",
          "population": "879000"
        },
        {
          "id": "1367",
          "name": "Irbil",
          "countryCode": "IRQ",
          "district": "Irbil",
          "population": "485968"
        },
        {
          "id": "1368",
          "name": "Kirkuk",
          "countryCode": "IRQ",
          "district": "al-Tamim",
          "population": "418624"
        },
        {
          "id": "1369",
          "name": "Basra",
          "countryCode": "IRQ",
          "district": "Basra",
          "population": "406296"
        },
        {
          "id": "1370",
          "name": "al-Sulaymaniya",
          "countryCode": "IRQ",
          "district": "al-Sulaymaniya",
          "population": "364096"
        },
        {
          "id": "1371",
          "name": "al-Najaf",
          "countryCode": "IRQ",
          "district": "al-Najaf",
          "population": "309010"
        },
        {
          "id": "1372",
          "name": "Karbala",
          "countryCode": "IRQ",
          "district": "Karbala",
          "population": "296705"
        },
        {
          "id": "1373",
          "name": "al-Hilla",
          "countryCode": "IRQ",
          "district": "Babil",
          "population": "268834"
        },
        {
          "id": "1374",
          "name": "al-Nasiriya",
          "countryCode": "IRQ",
          "district": "DhiQar",
          "population": "265937"
        },
        {
          "id": "1375",
          "name": "al-Amara",
          "countryCode": "IRQ",
          "district": "Maysan",
          "population": "208797"
        },
        {
          "id": "1376",
          "name": "al-Diwaniya",
          "countryCode": "IRQ",
          "district": "al-Qadisiya",
          "population": "196519"
        },
        {
          "id": "1377",
          "name": "al-Ramadi",
          "countryCode": "IRQ",
          "district": "al-Anbar",
          "population": "192556"
        },
        {
          "id": "1378",
          "name": "al-Kut",
          "countryCode": "IRQ",
          "district": "Wasit",
          "population": "183183"
        },
        {
          "id": "1379",
          "name": "Baquba",
          "countryCode": "IRQ",
          "district": "Diyala",
          "population": "114516"
        },
        {
          "id": "1380",
          "name": "Teheran",
          "countryCode": "IRN",
          "district": "Teheran",
          "population": "6758845"
        },
        {
          "id": "1381",
          "name": "Mashhad",
          "countryCode": "IRN",
          "district": "Khorasan",
          "population": "1887405"
        },
        {
          "id": "1382",
          "name": "Esfahan",
          "countryCode": "IRN",
          "district": "Esfahan",
          "population": "1266072"
        },
        {
          "id": "1383",
          "name": "Tabriz",
          "countryCode": "IRN",
          "district": "East Azerbaidzan",
          "population": "1191043"
        },
        {
          "id": "1384",
          "name": "Shiraz",
          "countryCode": "IRN",
          "district": "Fars",
          "population": "1053025"
        },
        {
          "id": "1385",
          "name": "Karaj",
          "countryCode": "IRN",
          "district": "Teheran",
          "population": "940968"
        },
        {
          "id": "1387",
          "name": "Qom",
          "countryCode": "IRN",
          "district": "Qom",
          "population": "777677"
        },
        {
          "id": "1388",
          "name": "Kermanshah",
          "countryCode": "IRN",
          "district": "Kermanshah",
          "population": "692986"
        },
        {
          "id": "1389",
          "name": "Urmia",
          "countryCode": "IRN",
          "district": "West Azerbaidzan",
          "population": "435200"
        },
        {
          "id": "1390",
          "name": "Zahedan",
          "countryCode": "IRN",
          "district": "Sistan va Baluchesta",
          "population": "419518"
        },
        {
          "id": "1391",
          "name": "Rasht",
          "countryCode": "IRN",
          "district": "Gilan",
          "population": "417748"
        },
        {
          "id": "1392",
          "name": "Hamadan",
          "countryCode": "IRN",
          "district": "Hamadan",
          "population": "401281"
        },
        {
          "id": "1393",
          "name": "Kerman",
          "countryCode": "IRN",
          "district": "Kerman",
          "population": "384991"
        },
        {
          "id": "1394",
          "name": "Arak",
          "countryCode": "IRN",
          "district": "Markazi",
          "population": "380755"
        },
        {
          "id": "1395",
          "name": "Ardebil",
          "countryCode": "IRN",
          "district": "Ardebil",
          "population": "340386"
        },
        {
          "id": "1396",
          "name": "Yazd",
          "countryCode": "IRN",
          "district": "Yazd",
          "population": "326776"
        },
        {
          "id": "1397",
          "name": "Qazvin",
          "countryCode": "IRN",
          "district": "Qazvin",
          "population": "291117"
        },
        {
          "id": "1398",
          "name": "Zanjan",
          "countryCode": "IRN",
          "district": "Zanjan",
          "population": "286295"
        },
        {
          "id": "1399",
          "name": "Sanandaj",
          "countryCode": "IRN",
          "district": "Kordestan",
          "population": "277808"
        },
        {
          "id": "1400",
          "name": "Bandar-e-Abbas",
          "countryCode": "IRN",
          "district": "Hormozgan",
          "population": "273578"
        },
        {
          "id": "1401",
          "name": "Khorramabad",
          "countryCode": "IRN",
          "district": "Lorestan",
          "population": "272815"
        },
        {
          "id": "1402",
          "name": "Eslamshahr",
          "countryCode": "IRN",
          "district": "Teheran",
          "population": "265450"
        },
        {
          "id": "1403",
          "name": "Borujerd",
          "countryCode": "IRN",
          "district": "Lorestan",
          "population": "217804"
        },
        {
          "id": "1404",
          "name": "Abadan",
          "countryCode": "IRN",
          "district": "Khuzestan",
          "population": "206073"
        },
        {
          "id": "1405",
          "name": "Dezful",
          "countryCode": "IRN",
          "district": "Khuzestan",
          "population": "202639"
        },
        {
          "id": "1406",
          "name": "Kashan",
          "countryCode": "IRN",
          "district": "Esfahan",
          "population": "201372"
        },
        {
          "id": "1407",
          "name": "Sari",
          "countryCode": "IRN",
          "district": "Mazandaran",
          "population": "195882"
        },
        {
          "id": "1408",
          "name": "Gorgan",
          "countryCode": "IRN",
          "district": "Golestan",
          "population": "188710"
        },
        {
          "id": "1409",
          "name": "Najafabad",
          "countryCode": "IRN",
          "district": "Esfahan",
          "population": "178498"
        },
        {
          "id": "1410",
          "name": "Sabzevar",
          "countryCode": "IRN",
          "district": "Khorasan",
          "population": "170738"
        },
        {
          "id": "1411",
          "name": "Khomeynishahr",
          "countryCode": "IRN",
          "district": "Esfahan",
          "population": "165888"
        },
        {
          "id": "1412",
          "name": "Amol",
          "countryCode": "IRN",
          "district": "Mazandaran",
          "population": "159092"
        },
        {
          "id": "1413",
          "name": "Neyshabur",
          "countryCode": "IRN",
          "district": "Khorasan",
          "population": "158847"
        },
        {
          "id": "1414",
          "name": "Babol",
          "countryCode": "IRN",
          "district": "Mazandaran",
          "population": "158346"
        },
        {
          "id": "1415",
          "name": "Khoy",
          "countryCode": "IRN",
          "district": "West Azerbaidzan",
          "population": "148944"
        },
        {
          "id": "1416",
          "name": "Malayer",
          "countryCode": "IRN",
          "district": "Hamadan",
          "population": "144373"
        },
        {
          "id": "1417",
          "name": "Bushehr",
          "countryCode": "IRN",
          "district": "Bushehr",
          "population": "143641"
        },
        {
          "id": "1418",
          "name": "Qaemshahr",
          "countryCode": "IRN",
          "district": "Mazandaran",
          "population": "143286"
        },
        {
          "id": "1419",
          "name": "Qarchak",
          "countryCode": "IRN",
          "district": "Teheran",
          "population": "142690"
        },
        {
          "id": "1420",
          "name": "Qods",
          "countryCode": "IRN",
          "district": "Teheran",
          "population": "138278"
        },
        {
          "id": "1421",
          "name": "Sirjan",
          "countryCode": "IRN",
          "district": "Kerman",
          "population": "135024"
        },
        {
          "id": "1300",
          "name": "Yeotmal (Yavatmal)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "108578"
        },
        {
          "id": "1301",
          "name": "Kulti-Barakar",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "108518"
        },
        {
          "id": "1302",
          "name": "Moga",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "108304"
        },
        {
          "id": "1303",
          "name": "Shivapuri",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "108277"
        },
        {
          "id": "1304",
          "name": "Bidar",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "108016"
        },
        {
          "id": "1305",
          "name": "Guntakal",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "107592"
        },
        {
          "id": "1306",
          "name": "Unnao",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "107425"
        },
        {
          "id": "1307",
          "name": "Barasat",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "107365"
        },
        {
          "id": "1308",
          "name": "Tambaram",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "107187"
        },
        {
          "id": "1309",
          "name": "Abohar",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "107163"
        },
        {
          "id": "1310",
          "name": "Pilibhit",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "106605"
        },
        {
          "id": "1311",
          "name": "Valparai",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "106523"
        },
        {
          "id": "1312",
          "name": "Gonda",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "106078"
        },
        {
          "id": "1313",
          "name": "Surendranagar",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "105973"
        },
        {
          "id": "1314",
          "name": "Qutubullapur",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "105380"
        },
        {
          "id": "1315",
          "name": "Beawar",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "105363"
        },
        {
          "id": "1316",
          "name": "Hindupur",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "104651"
        },
        {
          "id": "1317",
          "name": "Gandhidham",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "104585"
        },
        {
          "id": "1318",
          "name": "Haldwani-cum-Kathgodam",
          "countryCode": "IND",
          "district": "Uttaranchal",
          "population": "104195"
        },
        {
          "id": "1319",
          "name": "Tellicherry (Thalassery)",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "103579"
        },
        {
          "id": "1320",
          "name": "Wardha",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "102985"
        },
        {
          "id": "1321",
          "name": "Rishra",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "102649"
        },
        {
          "id": "1322",
          "name": "Bhuj",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "102176"
        },
        {
          "id": "1323",
          "name": "Modinagar",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "101660"
        },
        {
          "id": "1324",
          "name": "Gudivada",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "101656"
        },
        {
          "id": "1325",
          "name": "Basirhat",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "101409"
        },
        {
          "id": "1326",
          "name": "Uttarpara-Kotrung",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "100867"
        },
        {
          "id": "1327",
          "name": "Ongole",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "100836"
        },
        {
          "id": "1328",
          "name": "North Barrackpur",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "100513"
        },
        {
          "id": "1329",
          "name": "Guna",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "100490"
        },
        {
          "id": "1330",
          "name": "Haldia",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "100347"
        },
        {
          "id": "1331",
          "name": "Habra",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "100223"
        },
        {
          "id": "1332",
          "name": "Kanchrapara",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "100194"
        },
        {
          "id": "1333",
          "name": "Tonk",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "100079"
        },
        {
          "id": "1334",
          "name": "Champdani",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "98818"
        },
        {
          "id": "1335",
          "name": "Orai",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "98640"
        },
        {
          "id": "1336",
          "name": "Pudukkottai",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "98619"
        },
        {
          "id": "1337",
          "name": "Sasaram",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "98220"
        },
        {
          "id": "1338",
          "name": "Hazaribag",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "97712"
        },
        {
          "id": "1339",
          "name": "Palayankottai",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "97662"
        },
        {
          "id": "1340",
          "name": "Banda",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "97227"
        },
        {
          "id": "1341",
          "name": "Godhra",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "96813"
        },
        {
          "id": "1342",
          "name": "Hospet",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "96322"
        },
        {
          "id": "1343",
          "name": "Ashoknagar-Kalyangarh",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "96315"
        },
        {
          "id": "1344",
          "name": "Achalpur",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "96216"
        },
        {
          "id": "1345",
          "name": "Patan",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "96109"
        },
        {
          "id": "1346",
          "name": "Mandasor",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "95758"
        },
        {
          "id": "1347",
          "name": "Damoh",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "95661"
        },
        {
          "id": "1348",
          "name": "Satara",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "95133"
        },
        {
          "id": "1349",
          "name": "Meerut Cantonment",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "94876"
        },
        {
          "id": "1350",
          "name": "Dehri",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "94526"
        },
        {
          "id": "1351",
          "name": "Delhi Cantonment",
          "countryCode": "IND",
          "district": "Delhi",
          "population": "94326"
        },
        {
          "id": "1352",
          "name": "Chhindwara",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "93731"
        },
        {
          "id": "1353",
          "name": "Bansberia",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "93447"
        },
        {
          "id": "1354",
          "name": "Nagaon",
          "countryCode": "IND",
          "district": "Assam",
          "population": "93350"
        },
        {
          "id": "1355",
          "name": "Kanpur Cantonment",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "93109"
        },
        {
          "id": "1356",
          "name": "Vidisha",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "92917"
        },
        {
          "id": "1357",
          "name": "Bettiah",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "92583"
        },
        {
          "id": "1358",
          "name": "Purulia",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "92574"
        },
        {
          "id": "1359",
          "name": "Hassan",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "90803"
        },
        {
          "id": "1360",
          "name": "Ambala Sadar",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "90712"
        },
        {
          "id": "1239",
          "name": "Chittoor",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "133462"
        },
        {
          "id": "1240",
          "name": "Barrackpur",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "133265"
        },
        {
          "id": "1241",
          "name": "Bharuch (Broach)",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "133102"
        },
        {
          "id": "1242",
          "name": "Naihati",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "132701"
        },
        {
          "id": "1243",
          "name": "Shillong",
          "countryCode": "IND",
          "district": "Meghalaya",
          "population": "131719"
        },
        {
          "id": "1244",
          "name": "Sambalpur",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "131138"
        },
        {
          "id": "1245",
          "name": "Junagadh",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "130484"
        },
        {
          "id": "1246",
          "name": "Rae Bareli",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "129904"
        },
        {
          "id": "1247",
          "name": "Rewa",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "128981"
        },
        {
          "id": "1248",
          "name": "Gurgaon",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "128608"
        },
        {
          "id": "1249",
          "name": "Khammam",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "127992"
        },
        {
          "id": "1250",
          "name": "Bulandshahr",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "127201"
        },
        {
          "id": "1251",
          "name": "Navsari",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "126089"
        },
        {
          "id": "1252",
          "name": "Malkajgiri",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "126066"
        },
        {
          "id": "1253",
          "name": "Midnapore (Medinipur)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "125498"
        },
        {
          "id": "1254",
          "name": "Miraj",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "125407"
        },
        {
          "id": "1255",
          "name": "Raj Nandgaon",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "125371"
        },
        {
          "id": "1256",
          "name": "Alandur",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "125244"
        },
        {
          "id": "1257",
          "name": "Puri",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "125199"
        },
        {
          "id": "1258",
          "name": "Navadwip",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "125037"
        },
        {
          "id": "1259",
          "name": "Sirsa",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "125000"
        },
        {
          "id": "1260",
          "name": "Korba",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "124501"
        },
        {
          "id": "1261",
          "name": "Faizabad",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "124437"
        },
        {
          "id": "1262",
          "name": "Etawah",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "124072"
        },
        {
          "id": "1263",
          "name": "Pathankot",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "123930"
        },
        {
          "id": "1264",
          "name": "Gandhinagar",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "123359"
        },
        {
          "id": "1265",
          "name": "Palghat (Palakkad)",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "123289"
        },
        {
          "id": "1266",
          "name": "Veraval",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "123000"
        },
        {
          "id": "1267",
          "name": "Hoshiarpur",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "122705"
        },
        {
          "id": "1268",
          "name": "Ambala",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "122596"
        },
        {
          "id": "1269",
          "name": "Sitapur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "121842"
        },
        {
          "id": "1270",
          "name": "Bhiwani",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "121629"
        },
        {
          "id": "1271",
          "name": "Cuddapah",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "121463"
        },
        {
          "id": "1272",
          "name": "Bhimavaram",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "121314"
        },
        {
          "id": "1273",
          "name": "Krishnanagar",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "121110"
        },
        {
          "id": "1274",
          "name": "Chandannagar",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "120378"
        },
        {
          "id": "1275",
          "name": "Mandya",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "120265"
        },
        {
          "id": "1276",
          "name": "Dibrugarh",
          "countryCode": "IND",
          "district": "Assam",
          "population": "120127"
        },
        {
          "id": "1277",
          "name": "Nandyal",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "119813"
        },
        {
          "id": "1278",
          "name": "Balurghat",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "119796"
        },
        {
          "id": "1279",
          "name": "Neyveli",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "118080"
        },
        {
          "id": "1280",
          "name": "Fatehpur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "117675"
        },
        {
          "id": "1281",
          "name": "Mahbubnagar",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "116833"
        },
        {
          "id": "1282",
          "name": "Budaun",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "116695"
        },
        {
          "id": "1283",
          "name": "Porbandar",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "116671"
        },
        {
          "id": "1284",
          "name": "Silchar",
          "countryCode": "IND",
          "district": "Assam",
          "population": "115483"
        },
        {
          "id": "1285",
          "name": "Berhampore (Baharampur)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "115144"
        },
        {
          "id": "1286",
          "name": "Purnea (Purnia)",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "114912"
        },
        {
          "id": "1287",
          "name": "Bankura",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "114876"
        },
        {
          "id": "1288",
          "name": "Rajapalaiyam",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "114202"
        },
        {
          "id": "1289",
          "name": "Titagarh",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "114085"
        },
        {
          "id": "1290",
          "name": "Halisahar",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "114028"
        },
        {
          "id": "1291",
          "name": "Hathras",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "113285"
        },
        {
          "id": "1292",
          "name": "Bhir (Bid)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "112434"
        },
        {
          "id": "1293",
          "name": "Pallavaram",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "111866"
        },
        {
          "id": "1294",
          "name": "Anand",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "110266"
        },
        {
          "id": "1295",
          "name": "Mango",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "110024"
        },
        {
          "id": "1296",
          "name": "Santipur",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "109956"
        },
        {
          "id": "1297",
          "name": "Bhind",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "109755"
        },
        {
          "id": "1298",
          "name": "Gondiya",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "109470"
        },
        {
          "id": "1299",
          "name": "Tiruvannamalai",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "109196"
        },
        {
          "id": "1178",
          "name": "Tirupati",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "174369"
        },
        {
          "id": "1179",
          "name": "Karnal",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "173751"
        },
        {
          "id": "1180",
          "name": "Burhanpur",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "172710"
        },
        {
          "id": "1181",
          "name": "Hisar (Hissar)",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "172677"
        },
        {
          "id": "1182",
          "name": "Tiruvottiyur",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "172562"
        },
        {
          "id": "1183",
          "name": "Mirzapur-cum-Vindhyachal",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "169336"
        },
        {
          "id": "1184",
          "name": "Secunderabad",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "167461"
        },
        {
          "id": "1185",
          "name": "Nadiad",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "167051"
        },
        {
          "id": "1186",
          "name": "Dewas",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "164364"
        },
        {
          "id": "1187",
          "name": "Murwara (Katni)",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "163431"
        },
        {
          "id": "1188",
          "name": "Ganganagar",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "161482"
        },
        {
          "id": "1189",
          "name": "Vizianagaram",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "160359"
        },
        {
          "id": "1190",
          "name": "Erode",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "159232"
        },
        {
          "id": "1191",
          "name": "Machilipatnam (Masulipatam)",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "159110"
        },
        {
          "id": "1192",
          "name": "Bhatinda (Bathinda)",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "159042"
        },
        {
          "id": "1193",
          "name": "Raichur",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "157551"
        },
        {
          "id": "1194",
          "name": "Agartala",
          "countryCode": "IND",
          "district": "Tripura",
          "population": "157358"
        },
        {
          "id": "1195",
          "name": "Arrah (Ara)",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "157082"
        },
        {
          "id": "1196",
          "name": "Satna",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "156630"
        },
        {
          "id": "1197",
          "name": "Lalbahadur Nagar",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "155500"
        },
        {
          "id": "1198",
          "name": "Aizawl",
          "countryCode": "IND",
          "district": "Mizoram",
          "population": "155240"
        },
        {
          "id": "1199",
          "name": "Uluberia",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "155172"
        },
        {
          "id": "1200",
          "name": "Katihar",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "154367"
        },
        {
          "id": "1201",
          "name": "Cuddalore",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "153086"
        },
        {
          "id": "1202",
          "name": "Hugli-Chinsurah",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "151806"
        },
        {
          "id": "1203",
          "name": "Dhanbad",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "151789"
        },
        {
          "id": "1204",
          "name": "Raiganj",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "151045"
        },
        {
          "id": "1205",
          "name": "Sambhal",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "150869"
        },
        {
          "id": "1206",
          "name": "Durg",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "150645"
        },
        {
          "id": "1207",
          "name": "Munger (Monghyr)",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "150112"
        },
        {
          "id": "1208",
          "name": "Kanchipuram",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "150100"
        },
        {
          "id": "1209",
          "name": "North Dum Dum",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "149965"
        },
        {
          "id": "1210",
          "name": "Karimnagar",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "148583"
        },
        {
          "id": "1211",
          "name": "Bharatpur",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "148519"
        },
        {
          "id": "1212",
          "name": "Sikar",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "148272"
        },
        {
          "id": "1213",
          "name": "Hardwar (Haridwar)",
          "countryCode": "IND",
          "district": "Uttaranchal",
          "population": "147305"
        },
        {
          "id": "1214",
          "name": "Dabgram",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "147217"
        },
        {
          "id": "1215",
          "name": "Morena",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "147124"
        },
        {
          "id": "1216",
          "name": "Noida",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "146514"
        },
        {
          "id": "1217",
          "name": "Hapur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "146262"
        },
        {
          "id": "1218",
          "name": "Bhusawal",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "145143"
        },
        {
          "id": "1219",
          "name": "Khandwa",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "145133"
        },
        {
          "id": "1220",
          "name": "Yamuna Nagar",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "144346"
        },
        {
          "id": "1221",
          "name": "Sonipat (Sonepat)",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "143922"
        },
        {
          "id": "1222",
          "name": "Tenali",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "143726"
        },
        {
          "id": "1223",
          "name": "Raurkela Civil Township",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "140408"
        },
        {
          "id": "1224",
          "name": "Kollam (Quilon)",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "139852"
        },
        {
          "id": "1225",
          "name": "Kumbakonam",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "139483"
        },
        {
          "id": "1226",
          "name": "Ingraj Bazar (English Bazar)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "139204"
        },
        {
          "id": "1227",
          "name": "Timkur",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "138903"
        },
        {
          "id": "1228",
          "name": "Amroha",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "137061"
        },
        {
          "id": "1229",
          "name": "Serampore",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "137028"
        },
        {
          "id": "1230",
          "name": "Chapra",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "136877"
        },
        {
          "id": "1231",
          "name": "Pali",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "136842"
        },
        {
          "id": "1232",
          "name": "Maunath Bhanjan",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "136697"
        },
        {
          "id": "1233",
          "name": "Adoni",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "136182"
        },
        {
          "id": "1234",
          "name": "Jaunpur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "136062"
        },
        {
          "id": "1235",
          "name": "Tirunelveli",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "135825"
        },
        {
          "id": "1236",
          "name": "Bahraich",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "135400"
        },
        {
          "id": "1237",
          "name": "Gadag Betigeri",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "134051"
        },
        {
          "id": "1238",
          "name": "Proddatur",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "133914"
        },
        {
          "id": "1117",
          "name": "Dehra Dun",
          "countryCode": "IND",
          "district": "Uttaranchal",
          "population": "270159"
        },
        {
          "id": "1118",
          "name": "Kamarhati",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "266889"
        },
        {
          "id": "1119",
          "name": "Davangere",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "266082"
        },
        {
          "id": "1120",
          "name": "Asansol",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "262188"
        },
        {
          "id": "1121",
          "name": "Bhagalpur",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "253225"
        },
        {
          "id": "1122",
          "name": "Bellary",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "245391"
        },
        {
          "id": "1123",
          "name": "Barddhaman (Burdwan)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "245079"
        },
        {
          "id": "1124",
          "name": "Rampur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "243742"
        },
        {
          "id": "1125",
          "name": "Jalgaon",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "242193"
        },
        {
          "id": "1126",
          "name": "Muzaffarpur",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "241107"
        },
        {
          "id": "1127",
          "name": "Nizamabad",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "241034"
        },
        {
          "id": "1128",
          "name": "Muzaffarnagar",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "240609"
        },
        {
          "id": "1129",
          "name": "Patiala",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "238368"
        },
        {
          "id": "1130",
          "name": "Shahjahanpur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "237713"
        },
        {
          "id": "1131",
          "name": "Kurnool",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "236800"
        },
        {
          "id": "1132",
          "name": "Tiruppur (Tirupper)",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "235661"
        },
        {
          "id": "1133",
          "name": "Rohtak",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "233400"
        },
        {
          "id": "1134",
          "name": "South Dum Dum",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "232811"
        },
        {
          "id": "1135",
          "name": "Mathura",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "226691"
        },
        {
          "id": "1136",
          "name": "Chandrapur",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "226105"
        },
        {
          "id": "1137",
          "name": "Barahanagar (Baranagar)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "224821"
        },
        {
          "id": "1138",
          "name": "Darbhanga",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "218391"
        },
        {
          "id": "1139",
          "name": "Siliguri (Shiliguri)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "216950"
        },
        {
          "id": "1140",
          "name": "Raurkela",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "215489"
        },
        {
          "id": "1141",
          "name": "Ambattur",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "215424"
        },
        {
          "id": "1142",
          "name": "Panipat",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "215218"
        },
        {
          "id": "1143",
          "name": "Firozabad",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "215128"
        },
        {
          "id": "1144",
          "name": "Ichalkaranji",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "214950"
        },
        {
          "id": "1145",
          "name": "Jammu",
          "countryCode": "IND",
          "district": "Jammu and Kashmir",
          "population": "214737"
        },
        {
          "id": "1146",
          "name": "Ramagundam",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "214384"
        },
        {
          "id": "1147",
          "name": "Eluru",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "212866"
        },
        {
          "id": "1148",
          "name": "Brahmapur",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "210418"
        },
        {
          "id": "1149",
          "name": "Alwar",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "205086"
        },
        {
          "id": "1150",
          "name": "Pondicherry",
          "countryCode": "IND",
          "district": "Pondicherry",
          "population": "203065"
        },
        {
          "id": "1151",
          "name": "Thanjavur",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "202013"
        },
        {
          "id": "1152",
          "name": "Bihar Sharif",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "201323"
        },
        {
          "id": "1153",
          "name": "Tuticorin",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "199854"
        },
        {
          "id": "1154",
          "name": "Imphal",
          "countryCode": "IND",
          "district": "Manipur",
          "population": "198535"
        },
        {
          "id": "1155",
          "name": "Latur",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "197408"
        },
        {
          "id": "1156",
          "name": "Sagar",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "195346"
        },
        {
          "id": "1157",
          "name": "Farrukhabad-cum-Fatehgarh",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "194567"
        },
        {
          "id": "1158",
          "name": "Sangli",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "193197"
        },
        {
          "id": "1159",
          "name": "Parbhani",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "190255"
        },
        {
          "id": "1160",
          "name": "Nagar Coil",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "190084"
        },
        {
          "id": "1161",
          "name": "Bijapur",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "186939"
        },
        {
          "id": "1162",
          "name": "Kukatpalle",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "185378"
        },
        {
          "id": "1163",
          "name": "Bally",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "184474"
        },
        {
          "id": "1164",
          "name": "Bhilwara",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "183965"
        },
        {
          "id": "1165",
          "name": "Ratlam",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "183375"
        },
        {
          "id": "1166",
          "name": "Avadi",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "183215"
        },
        {
          "id": "1167",
          "name": "Dindigul",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "182477"
        },
        {
          "id": "1168",
          "name": "Ahmadnagar",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "181339"
        },
        {
          "id": "1169",
          "name": "Bilaspur",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "179833"
        },
        {
          "id": "1170",
          "name": "Shimoga",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "179258"
        },
        {
          "id": "1171",
          "name": "Kharagpur",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "177989"
        },
        {
          "id": "1172",
          "name": "Mira Bhayandar",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "175372"
        },
        {
          "id": "1173",
          "name": "Vellore",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "175061"
        },
        {
          "id": "1174",
          "name": "Jalna",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "174985"
        },
        {
          "id": "1175",
          "name": "Burnpur",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "174933"
        },
        {
          "id": "1176",
          "name": "Anantapur",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "174924"
        },
        {
          "id": "1177",
          "name": "Allappuzha (Alleppey)",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "174666"
        },
        {
          "id": "1056",
          "name": "Vijayawada",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "701827"
        },
        {
          "id": "1057",
          "name": "Gwalior",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "690765"
        },
        {
          "id": "1058",
          "name": "Jodhpur",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "666279"
        },
        {
          "id": "1059",
          "name": "Nashik (Nasik)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "656925"
        },
        {
          "id": "1060",
          "name": "Hubli-Dharwad",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "648298"
        },
        {
          "id": "1061",
          "name": "Solapur (Sholapur)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "604215"
        },
        {
          "id": "1062",
          "name": "Ranchi",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "599306"
        },
        {
          "id": "1063",
          "name": "Bareilly",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "587211"
        },
        {
          "id": "1064",
          "name": "Guwahati (Gauhati)",
          "countryCode": "IND",
          "district": "Assam",
          "population": "584342"
        },
        {
          "id": "1065",
          "name": "Shambajinagar (Aurangabad)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "573272"
        },
        {
          "id": "1066",
          "name": "Cochin (Kochi)",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "564589"
        },
        {
          "id": "1067",
          "name": "Rajkot",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "559407"
        },
        {
          "id": "1068",
          "name": "Kota",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "537371"
        },
        {
          "id": "1069",
          "name": "Thiruvananthapuram (Trivandrum",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "524006"
        },
        {
          "id": "1070",
          "name": "Pimpri-Chinchwad",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "517083"
        },
        {
          "id": "1071",
          "name": "Jalandhar (Jullundur)",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "509510"
        },
        {
          "id": "1072",
          "name": "Gorakhpur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "505566"
        },
        {
          "id": "1073",
          "name": "Chandigarh",
          "countryCode": "IND",
          "district": "Chandigarh",
          "population": "504094"
        },
        {
          "id": "1074",
          "name": "Mysore",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "480692"
        },
        {
          "id": "1075",
          "name": "Aligarh",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "480520"
        },
        {
          "id": "1076",
          "name": "Guntur",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "471051"
        },
        {
          "id": "1077",
          "name": "Jamshedpur",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "460577"
        },
        {
          "id": "1078",
          "name": "Ghaziabad",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "454156"
        },
        {
          "id": "1079",
          "name": "Warangal",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "447657"
        },
        {
          "id": "1080",
          "name": "Raipur",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "438639"
        },
        {
          "id": "1081",
          "name": "Moradabad",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "429214"
        },
        {
          "id": "1082",
          "name": "Durgapur",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "425836"
        },
        {
          "id": "1083",
          "name": "Amravati",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "421576"
        },
        {
          "id": "1084",
          "name": "Calicut (Kozhikode)",
          "countryCode": "IND",
          "district": "Kerala",
          "population": "419831"
        },
        {
          "id": "1085",
          "name": "Bikaner",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "416289"
        },
        {
          "id": "1086",
          "name": "Bhubaneswar",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "411542"
        },
        {
          "id": "1087",
          "name": "Kolhapur",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "406370"
        },
        {
          "id": "1088",
          "name": "Kataka (Cuttack)",
          "countryCode": "IND",
          "district": "Orissa",
          "population": "403418"
        },
        {
          "id": "1089",
          "name": "Ajmer",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "402700"
        },
        {
          "id": "1090",
          "name": "Bhavnagar",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "402338"
        },
        {
          "id": "1091",
          "name": "Tiruchirapalli",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "387223"
        },
        {
          "id": "1092",
          "name": "Bhilai",
          "countryCode": "IND",
          "district": "Chhatisgarh",
          "population": "386159"
        },
        {
          "id": "1093",
          "name": "Bhiwandi",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "379070"
        },
        {
          "id": "1094",
          "name": "Saharanpur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "374945"
        },
        {
          "id": "1095",
          "name": "Ulhasnagar",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "369077"
        },
        {
          "id": "1096",
          "name": "Salem",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "366712"
        },
        {
          "id": "1097",
          "name": "Ujjain",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "362266"
        },
        {
          "id": "1098",
          "name": "Malegaon",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "342595"
        },
        {
          "id": "1099",
          "name": "Jamnagar",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "341637"
        },
        {
          "id": "1100",
          "name": "Bokaro Steel City",
          "countryCode": "IND",
          "district": "Jharkhand",
          "population": "333683"
        },
        {
          "id": "1101",
          "name": "Akola",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "328034"
        },
        {
          "id": "1102",
          "name": "Belgaum",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "326399"
        },
        {
          "id": "1103",
          "name": "Rajahmundry",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "324851"
        },
        {
          "id": "1104",
          "name": "Nellore",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "316606"
        },
        {
          "id": "1105",
          "name": "Udaipur",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "308571"
        },
        {
          "id": "1106",
          "name": "New Bombay",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "307297"
        },
        {
          "id": "1107",
          "name": "Bhatpara",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "304952"
        },
        {
          "id": "1108",
          "name": "Gulbarga",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "304099"
        },
        {
          "id": "1109",
          "name": "New Delhi",
          "countryCode": "IND",
          "district": "Delhi",
          "population": "301297"
        },
        {
          "id": "1110",
          "name": "Jhansi",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "300850"
        },
        {
          "id": "1111",
          "name": "Gaya",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "291675"
        },
        {
          "id": "1112",
          "name": "Kakinada",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "279980"
        },
        {
          "id": "1113",
          "name": "Dhule (Dhulia)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "278317"
        },
        {
          "id": "1114",
          "name": "Panihati",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "275990"
        },
        {
          "id": "1115",
          "name": "Nanded (Nander)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "275083"
        },
        {
          "id": "1116",
          "name": "Mangalore",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "273304"
        },
        {
          "id": "995",
          "name": "Probolinggo",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "120770"
        },
        {
          "id": "996",
          "name": "Cilegon",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "117000"
        },
        {
          "id": "997",
          "name": "Cianjur",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "114300"
        },
        {
          "id": "998",
          "name": "Ciparay",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "111500"
        },
        {
          "id": "999",
          "name": "Lhokseumawe",
          "countryCode": "IDN",
          "district": "Aceh",
          "population": "109600"
        },
        {
          "id": "1000",
          "name": "Taman",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "107000"
        },
        {
          "id": "1001",
          "name": "Depok",
          "countryCode": "IDN",
          "district": "Yogyakarta",
          "population": "106800"
        },
        {
          "id": "1002",
          "name": "Citeureup",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "105100"
        },
        {
          "id": "1003",
          "name": "Pemalang",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "103500"
        },
        {
          "id": "1004",
          "name": "Klaten",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "103300"
        },
        {
          "id": "1005",
          "name": "Salatiga",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "103000"
        },
        {
          "id": "1006",
          "name": "Cibinong",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "101300"
        },
        {
          "id": "1007",
          "name": "Palangka Raya",
          "countryCode": "IDN",
          "district": "Kalimantan Tengah",
          "population": "99693"
        },
        {
          "id": "1008",
          "name": "Mojokerto",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "96626"
        },
        {
          "id": "1009",
          "name": "Purwakarta",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "95900"
        },
        {
          "id": "1010",
          "name": "Garut",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "95800"
        },
        {
          "id": "1011",
          "name": "Kudus",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "95300"
        },
        {
          "id": "1012",
          "name": "Kendari",
          "countryCode": "IDN",
          "district": "Sulawesi Tenggara",
          "population": "94800"
        },
        {
          "id": "1013",
          "name": "Jaya Pura",
          "countryCode": "IDN",
          "district": "West Irian",
          "population": "94700"
        },
        {
          "id": "1014",
          "name": "Gorontalo",
          "countryCode": "IDN",
          "district": "Sulawesi Utara",
          "population": "94058"
        },
        {
          "id": "1015",
          "name": "Majalaya",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "93200"
        },
        {
          "id": "1016",
          "name": "Pondok Aren",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "92700"
        },
        {
          "id": "1017",
          "name": "Jombang",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "92600"
        },
        {
          "id": "1018",
          "name": "Sunggal",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "92300"
        },
        {
          "id": "1019",
          "name": "Batam",
          "countryCode": "IDN",
          "district": "Riau",
          "population": "91871"
        },
        {
          "id": "1020",
          "name": "Padang Sidempuan",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "91200"
        },
        {
          "id": "1021",
          "name": "Sawangan",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "91100"
        },
        {
          "id": "1022",
          "name": "Banyuwangi",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "89900"
        },
        {
          "id": "1023",
          "name": "Tanjung Pinang",
          "countryCode": "IDN",
          "district": "Riau",
          "population": "89900"
        },
        {
          "id": "1024",
          "name": "Mumbai (Bombay)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "10500000"
        },
        {
          "id": "1025",
          "name": "Delhi",
          "countryCode": "IND",
          "district": "Delhi",
          "population": "7206704"
        },
        {
          "id": "1026",
          "name": "Calcutta [Kolkata]",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "4399819"
        },
        {
          "id": "1027",
          "name": "Chennai (Madras)",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "3841396"
        },
        {
          "id": "1028",
          "name": "Hyderabad",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "2964638"
        },
        {
          "id": "1029",
          "name": "Ahmedabad",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "2876710"
        },
        {
          "id": "1030",
          "name": "Bangalore",
          "countryCode": "IND",
          "district": "Karnataka",
          "population": "2660088"
        },
        {
          "id": "1031",
          "name": "Kanpur",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "1874409"
        },
        {
          "id": "1032",
          "name": "Nagpur",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "1624752"
        },
        {
          "id": "1033",
          "name": "Lucknow",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "1619115"
        },
        {
          "id": "1034",
          "name": "Pune",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "1566651"
        },
        {
          "id": "1035",
          "name": "Surat",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "1498817"
        },
        {
          "id": "1036",
          "name": "Jaipur",
          "countryCode": "IND",
          "district": "Rajasthan",
          "population": "1458483"
        },
        {
          "id": "1037",
          "name": "Indore",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "1091674"
        },
        {
          "id": "1038",
          "name": "Bhopal",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "1062771"
        },
        {
          "id": "1039",
          "name": "Ludhiana",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "1042740"
        },
        {
          "id": "1040",
          "name": "Vadodara (Baroda)",
          "countryCode": "IND",
          "district": "Gujarat",
          "population": "1031346"
        },
        {
          "id": "1041",
          "name": "Kalyan",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "1014557"
        },
        {
          "id": "1042",
          "name": "Madurai",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "977856"
        },
        {
          "id": "1043",
          "name": "Haora (Howrah)",
          "countryCode": "IND",
          "district": "West Bengali",
          "population": "950435"
        },
        {
          "id": "1044",
          "name": "Varanasi (Benares)",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "929270"
        },
        {
          "id": "1045",
          "name": "Patna",
          "countryCode": "IND",
          "district": "Bihar",
          "population": "917243"
        },
        {
          "id": "1046",
          "name": "Srinagar",
          "countryCode": "IND",
          "district": "Jammu and Kashmir",
          "population": "892506"
        },
        {
          "id": "1047",
          "name": "Agra",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "891790"
        },
        {
          "id": "1048",
          "name": "Coimbatore",
          "countryCode": "IND",
          "district": "Tamil Nadu",
          "population": "816321"
        },
        {
          "id": "1049",
          "name": "Thane (Thana)",
          "countryCode": "IND",
          "district": "Maharashtra",
          "population": "803389"
        },
        {
          "id": "1050",
          "name": "Allahabad",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "792858"
        },
        {
          "id": "1051",
          "name": "Meerut",
          "countryCode": "IND",
          "district": "Uttar Pradesh",
          "population": "753778"
        },
        {
          "id": "1052",
          "name": "Vishakhapatnam",
          "countryCode": "IND",
          "district": "Andhra Pradesh",
          "population": "752037"
        },
        {
          "id": "1053",
          "name": "Jabalpur",
          "countryCode": "IND",
          "district": "Madhya Pradesh",
          "population": "741927"
        },
        {
          "id": "1054",
          "name": "Amritsar",
          "countryCode": "IND",
          "district": "Punjab",
          "population": "708835"
        },
        {
          "id": "1055",
          "name": "Faridabad",
          "countryCode": "IND",
          "district": "Haryana",
          "population": "703592"
        },
        {
          "id": "934",
          "name": "San Pedro Sula",
          "countryCode": "HND",
          "district": "CortР“В©s",
          "population": "383900"
        },
        {
          "id": "935",
          "name": "La Ceiba",
          "countryCode": "HND",
          "district": "AtlР”Р‡ntida",
          "population": "89200"
        },
        {
          "id": "936",
          "name": "Kowloon and New Kowloon",
          "countryCode": "HKG",
          "district": "Kowloon and New Kowl",
          "population": "1987996"
        },
        {
          "id": "937",
          "name": "Victoria",
          "countryCode": "HKG",
          "district": "Hongkong",
          "population": "1312637"
        },
        {
          "id": "938",
          "name": "Longyearbyen",
          "countryCode": "SJM",
          "district": "LР“В¤nsimaa",
          "population": "1438"
        },
        {
          "id": "939",
          "name": "Jakarta",
          "countryCode": "IDN",
          "district": "Jakarta Raya",
          "population": "9604900"
        },
        {
          "id": "940",
          "name": "Surabaya",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "2663820"
        },
        {
          "id": "941",
          "name": "Bandung",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "2429000"
        },
        {
          "id": "942",
          "name": "Medan",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "1843919"
        },
        {
          "id": "943",
          "name": "Palembang",
          "countryCode": "IDN",
          "district": "Sumatera Selatan",
          "population": "1222764"
        },
        {
          "id": "944",
          "name": "Tangerang",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "1198300"
        },
        {
          "id": "945",
          "name": "Semarang",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "1104405"
        },
        {
          "id": "946",
          "name": "Ujung Pandang",
          "countryCode": "IDN",
          "district": "Sulawesi Selatan",
          "population": "1060257"
        },
        {
          "id": "947",
          "name": "Malang",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "716862"
        },
        {
          "id": "948",
          "name": "Bandar Lampung",
          "countryCode": "IDN",
          "district": "Lampung",
          "population": "680332"
        },
        {
          "id": "949",
          "name": "Bekasi",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "644300"
        },
        {
          "id": "950",
          "name": "Padang",
          "countryCode": "IDN",
          "district": "Sumatera Barat",
          "population": "534474"
        },
        {
          "id": "951",
          "name": "Surakarta",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "518600"
        },
        {
          "id": "952",
          "name": "Banjarmasin",
          "countryCode": "IDN",
          "district": "Kalimantan Selatan",
          "population": "482931"
        },
        {
          "id": "953",
          "name": "Pekan Baru",
          "countryCode": "IDN",
          "district": "Riau",
          "population": "438638"
        },
        {
          "id": "954",
          "name": "Denpasar",
          "countryCode": "IDN",
          "district": "Bali",
          "population": "435000"
        },
        {
          "id": "955",
          "name": "Yogyakarta",
          "countryCode": "IDN",
          "district": "Yogyakarta",
          "population": "418944"
        },
        {
          "id": "956",
          "name": "Pontianak",
          "countryCode": "IDN",
          "district": "Kalimantan Barat",
          "population": "409632"
        },
        {
          "id": "957",
          "name": "Samarinda",
          "countryCode": "IDN",
          "district": "Kalimantan Timur",
          "population": "399175"
        },
        {
          "id": "958",
          "name": "Jambi",
          "countryCode": "IDN",
          "district": "Jambi",
          "population": "385201"
        },
        {
          "id": "959",
          "name": "Depok",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "365200"
        },
        {
          "id": "960",
          "name": "Cimahi",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "344600"
        },
        {
          "id": "961",
          "name": "Balikpapan",
          "countryCode": "IDN",
          "district": "Kalimantan Timur",
          "population": "338752"
        },
        {
          "id": "962",
          "name": "Manado",
          "countryCode": "IDN",
          "district": "Sulawesi Utara",
          "population": "332288"
        },
        {
          "id": "963",
          "name": "Mataram",
          "countryCode": "IDN",
          "district": "Nusa Tenggara Barat",
          "population": "306600"
        },
        {
          "id": "964",
          "name": "Pekalongan",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "301504"
        },
        {
          "id": "965",
          "name": "Tegal",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "289744"
        },
        {
          "id": "966",
          "name": "Bogor",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "285114"
        },
        {
          "id": "967",
          "name": "Ciputat",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "270800"
        },
        {
          "id": "968",
          "name": "Pondokgede",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "263200"
        },
        {
          "id": "969",
          "name": "Cirebon",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "254406"
        },
        {
          "id": "970",
          "name": "Kediri",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "253760"
        },
        {
          "id": "971",
          "name": "Ambon",
          "countryCode": "IDN",
          "district": "Molukit",
          "population": "249312"
        },
        {
          "id": "972",
          "name": "Jember",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "218500"
        },
        {
          "id": "973",
          "name": "Cilacap",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "206900"
        },
        {
          "id": "974",
          "name": "Cimanggis",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "205100"
        },
        {
          "id": "975",
          "name": "Pematang Siantar",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "203056"
        },
        {
          "id": "976",
          "name": "Purwokerto",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "202500"
        },
        {
          "id": "977",
          "name": "Ciomas",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "187400"
        },
        {
          "id": "978",
          "name": "Tasikmalaya",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "179800"
        },
        {
          "id": "979",
          "name": "Madiun",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "171532"
        },
        {
          "id": "980",
          "name": "Bengkulu",
          "countryCode": "IDN",
          "district": "Bengkulu",
          "population": "146439"
        },
        {
          "id": "981",
          "name": "Karawang",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "145000"
        },
        {
          "id": "982",
          "name": "Banda Aceh",
          "countryCode": "IDN",
          "district": "Aceh",
          "population": "143409"
        },
        {
          "id": "983",
          "name": "Palu",
          "countryCode": "IDN",
          "district": "Sulawesi Tengah",
          "population": "142800"
        },
        {
          "id": "984",
          "name": "Pasuruan",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "134019"
        },
        {
          "id": "985",
          "name": "Kupang",
          "countryCode": "IDN",
          "district": "Nusa Tenggara Timur",
          "population": "129300"
        },
        {
          "id": "986",
          "name": "Tebing Tinggi",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "129300"
        },
        {
          "id": "987",
          "name": "Percut Sei Tuan",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "129000"
        },
        {
          "id": "988",
          "name": "Binjai",
          "countryCode": "IDN",
          "district": "Sumatera Utara",
          "population": "127222"
        },
        {
          "id": "989",
          "name": "Sukabumi",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "125766"
        },
        {
          "id": "990",
          "name": "Waru",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "124300"
        },
        {
          "id": "991",
          "name": "Pangkal Pinang",
          "countryCode": "IDN",
          "district": "Sumatera Selatan",
          "population": "124000"
        },
        {
          "id": "992",
          "name": "Magelang",
          "countryCode": "IDN",
          "district": "Central Java",
          "population": "123800"
        },
        {
          "id": "993",
          "name": "Blitar",
          "countryCode": "IDN",
          "district": "East Java",
          "population": "122600"
        },
        {
          "id": "994",
          "name": "Serang",
          "countryCode": "IDN",
          "district": "West Java",
          "population": "122400"
        },
        {
          "id": "873",
          "name": "Cauayan",
          "countryCode": "PHL",
          "district": "Cagayan Valley",
          "population": "103952"
        },
        {
          "id": "874",
          "name": "Gingoog",
          "countryCode": "PHL",
          "district": "Northern Mindanao",
          "population": "102379"
        },
        {
          "id": "875",
          "name": "Dumaguete",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "102265"
        },
        {
          "id": "876",
          "name": "San Fernando",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "102082"
        },
        {
          "id": "877",
          "name": "Arayat",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "101792"
        },
        {
          "id": "878",
          "name": "Bayawan (Tulong)",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "101391"
        },
        {
          "id": "879",
          "name": "Kidapawan",
          "countryCode": "PHL",
          "district": "Central Mindanao",
          "population": "101205"
        },
        {
          "id": "880",
          "name": "Daraga (Locsin)",
          "countryCode": "PHL",
          "district": "Bicol",
          "population": "101031"
        },
        {
          "id": "881",
          "name": "Marilao",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "101017"
        },
        {
          "id": "882",
          "name": "Malita",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "100000"
        },
        {
          "id": "883",
          "name": "Dipolog",
          "countryCode": "PHL",
          "district": "Western Mindanao",
          "population": "99862"
        },
        {
          "id": "884",
          "name": "Cavite",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "99367"
        },
        {
          "id": "885",
          "name": "Danao",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "98781"
        },
        {
          "id": "886",
          "name": "Bislig",
          "countryCode": "PHL",
          "district": "Caraga",
          "population": "97860"
        },
        {
          "id": "887",
          "name": "Talavera",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "97329"
        },
        {
          "id": "888",
          "name": "Guagua",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "96858"
        },
        {
          "id": "889",
          "name": "Bayambang",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "96609"
        },
        {
          "id": "890",
          "name": "Nasugbu",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "96113"
        },
        {
          "id": "891",
          "name": "Baybay",
          "countryCode": "PHL",
          "district": "Eastern Visayas",
          "population": "95630"
        },
        {
          "id": "892",
          "name": "Capas",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "95219"
        },
        {
          "id": "893",
          "name": "Sultan Kudarat",
          "countryCode": "PHL",
          "district": "ARMM",
          "population": "94861"
        },
        {
          "id": "894",
          "name": "Laoag",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "94466"
        },
        {
          "id": "895",
          "name": "Bayugan",
          "countryCode": "PHL",
          "district": "Caraga",
          "population": "93623"
        },
        {
          "id": "896",
          "name": "Malungon",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "93232"
        },
        {
          "id": "897",
          "name": "Santa Cruz",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "92694"
        },
        {
          "id": "898",
          "name": "Sorsogon",
          "countryCode": "PHL",
          "district": "Bicol",
          "population": "92512"
        },
        {
          "id": "899",
          "name": "Candelaria",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "92429"
        },
        {
          "id": "900",
          "name": "Ligao",
          "countryCode": "PHL",
          "district": "Bicol",
          "population": "90603"
        },
        {
          "id": "901",
          "name": "TР“С–rshavn",
          "countryCode": "FRO",
          "district": "Streymoyar",
          "population": "14542"
        },
        {
          "id": "902",
          "name": "Libreville",
          "countryCode": "GAB",
          "district": "Estuaire",
          "population": "419000"
        },
        {
          "id": "903",
          "name": "Serekunda",
          "countryCode": "GMB",
          "district": "Kombo St Mary",
          "population": "102600"
        },
        {
          "id": "904",
          "name": "Banjul",
          "countryCode": "GMB",
          "district": "Banjul",
          "population": "42326"
        },
        {
          "id": "905",
          "name": "Tbilisi",
          "countryCode": "GEO",
          "district": "Tbilisi",
          "population": "1235200"
        },
        {
          "id": "906",
          "name": "Kutaisi",
          "countryCode": "GEO",
          "district": "Imereti",
          "population": "240900"
        },
        {
          "id": "907",
          "name": "Rustavi",
          "countryCode": "GEO",
          "district": "Kvemo Kartli",
          "population": "155400"
        },
        {
          "id": "908",
          "name": "Batumi",
          "countryCode": "GEO",
          "district": "Adzaria [AChara]",
          "population": "137700"
        },
        {
          "id": "909",
          "name": "Sohumi",
          "countryCode": "GEO",
          "district": "Abhasia [Aphazeti]",
          "population": "111700"
        },
        {
          "id": "910",
          "name": "Accra",
          "countryCode": "GHA",
          "district": "Greater Accra",
          "population": "1070000"
        },
        {
          "id": "911",
          "name": "Kumasi",
          "countryCode": "GHA",
          "district": "Ashanti",
          "population": "385192"
        },
        {
          "id": "912",
          "name": "Tamale",
          "countryCode": "GHA",
          "district": "Northern",
          "population": "151069"
        },
        {
          "id": "913",
          "name": "Tema",
          "countryCode": "GHA",
          "district": "Greater Accra",
          "population": "109975"
        },
        {
          "id": "914",
          "name": "Sekondi-Takoradi",
          "countryCode": "GHA",
          "district": "Western",
          "population": "103653"
        },
        {
          "id": "915",
          "name": "Gibraltar",
          "countryCode": "GIB",
          "district": "РІР‚вЂњ",
          "population": "27025"
        },
        {
          "id": "917",
          "name": "Nuuk",
          "countryCode": "GRL",
          "district": "Kitaa",
          "population": "13445"
        },
        {
          "id": "918",
          "name": "Les Abymes",
          "countryCode": "GLP",
          "district": "Grande-Terre",
          "population": "62947"
        },
        {
          "id": "919",
          "name": "Basse-Terre",
          "countryCode": "GLP",
          "district": "Basse-Terre",
          "population": "12433"
        },
        {
          "id": "920",
          "name": "Tamuning",
          "countryCode": "GUM",
          "district": "РІР‚вЂњ",
          "population": "9500"
        },
        {
          "id": "921",
          "name": "AgaР•вЂћa",
          "countryCode": "GUM",
          "district": "РІР‚вЂњ",
          "population": "1139"
        },
        {
          "id": "922",
          "name": "Ciudad de Guatemala",
          "countryCode": "GTM",
          "district": "Guatemala",
          "population": "823301"
        },
        {
          "id": "923",
          "name": "Mixco",
          "countryCode": "GTM",
          "district": "Guatemala",
          "population": "209791"
        },
        {
          "id": "924",
          "name": "Villa Nueva",
          "countryCode": "GTM",
          "district": "Guatemala",
          "population": "101295"
        },
        {
          "id": "925",
          "name": "Quetzaltenango",
          "countryCode": "GTM",
          "district": "Quetzaltenango",
          "population": "90801"
        },
        {
          "id": "926",
          "name": "Conakry",
          "countryCode": "GIN",
          "district": "Conakry",
          "population": "1090610"
        },
        {
          "id": "927",
          "name": "Bissau",
          "countryCode": "GNB",
          "district": "Bissau",
          "population": "241000"
        },
        {
          "id": "928",
          "name": "Georgetown",
          "countryCode": "GUY",
          "district": "Georgetown",
          "population": "254000"
        },
        {
          "id": "929",
          "name": "Port-au-Prince",
          "countryCode": "HTI",
          "district": "Ouest",
          "population": "884472"
        },
        {
          "id": "930",
          "name": "Carrefour",
          "countryCode": "HTI",
          "district": "Ouest",
          "population": "290204"
        },
        {
          "id": "931",
          "name": "Delmas",
          "countryCode": "HTI",
          "district": "Ouest",
          "population": "240429"
        },
        {
          "id": "933",
          "name": "Tegucigalpa",
          "countryCode": "HND",
          "district": "Distrito Central",
          "population": "813900"
        },
        {
          "id": "812",
          "name": "Santa Rosa",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "185633"
        },
        {
          "id": "813",
          "name": "Tagum",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "179531"
        },
        {
          "id": "814",
          "name": "Tacloban",
          "countryCode": "PHL",
          "district": "Eastern Visayas",
          "population": "178639"
        },
        {
          "id": "815",
          "name": "Malolos",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "175291"
        },
        {
          "id": "816",
          "name": "Mabalacat",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "171045"
        },
        {
          "id": "817",
          "name": "Cotabato",
          "countryCode": "PHL",
          "district": "Central Mindanao",
          "population": "163849"
        },
        {
          "id": "818",
          "name": "Meycauayan",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "163037"
        },
        {
          "id": "819",
          "name": "Puerto Princesa",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "161912"
        },
        {
          "id": "820",
          "name": "Legazpi",
          "countryCode": "PHL",
          "district": "Bicol",
          "population": "157010"
        },
        {
          "id": "821",
          "name": "Silang",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "156137"
        },
        {
          "id": "822",
          "name": "Ormoc",
          "countryCode": "PHL",
          "district": "Eastern Visayas",
          "population": "154297"
        },
        {
          "id": "823",
          "name": "San Carlos",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "154264"
        },
        {
          "id": "824",
          "name": "Kabankalan",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "149769"
        },
        {
          "id": "825",
          "name": "Talisay",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "148110"
        },
        {
          "id": "826",
          "name": "Valencia",
          "countryCode": "PHL",
          "district": "Northern Mindanao",
          "population": "147924"
        },
        {
          "id": "827",
          "name": "Calbayog",
          "countryCode": "PHL",
          "district": "Eastern Visayas",
          "population": "147187"
        },
        {
          "id": "828",
          "name": "Santa Maria",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "144282"
        },
        {
          "id": "829",
          "name": "Pagadian",
          "countryCode": "PHL",
          "district": "Western Mindanao",
          "population": "142515"
        },
        {
          "id": "830",
          "name": "Cadiz",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "141954"
        },
        {
          "id": "831",
          "name": "Bago",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "141721"
        },
        {
          "id": "832",
          "name": "Toledo",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "141174"
        },
        {
          "id": "833",
          "name": "Naga",
          "countryCode": "PHL",
          "district": "Bicol",
          "population": "137810"
        },
        {
          "id": "834",
          "name": "San Mateo",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "135603"
        },
        {
          "id": "835",
          "name": "Panabo",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "133950"
        },
        {
          "id": "836",
          "name": "Koronadal",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "133786"
        },
        {
          "id": "837",
          "name": "Marawi",
          "countryCode": "PHL",
          "district": "Central Mindanao",
          "population": "131090"
        },
        {
          "id": "838",
          "name": "Dagupan",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "130328"
        },
        {
          "id": "839",
          "name": "Sagay",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "129765"
        },
        {
          "id": "840",
          "name": "Roxas",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "126352"
        },
        {
          "id": "841",
          "name": "Lubao",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "125699"
        },
        {
          "id": "842",
          "name": "Digos",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "125171"
        },
        {
          "id": "843",
          "name": "San Miguel",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "123824"
        },
        {
          "id": "844",
          "name": "Malaybalay",
          "countryCode": "PHL",
          "district": "Northern Mindanao",
          "population": "123672"
        },
        {
          "id": "845",
          "name": "Tuguegarao",
          "countryCode": "PHL",
          "district": "Cagayan Valley",
          "population": "120645"
        },
        {
          "id": "846",
          "name": "Ilagan",
          "countryCode": "PHL",
          "district": "Cagayan Valley",
          "population": "119990"
        },
        {
          "id": "847",
          "name": "Baliuag",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "119675"
        },
        {
          "id": "848",
          "name": "Surigao",
          "countryCode": "PHL",
          "district": "Caraga",
          "population": "118534"
        },
        {
          "id": "849",
          "name": "San Carlos",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "118259"
        },
        {
          "id": "850",
          "name": "San Juan del Monte",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "117680"
        },
        {
          "id": "851",
          "name": "Tanauan",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "117539"
        },
        {
          "id": "852",
          "name": "Concepcion",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "115171"
        },
        {
          "id": "853",
          "name": "Rodriguez (Montalban)",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "115167"
        },
        {
          "id": "854",
          "name": "Sariaya",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "114568"
        },
        {
          "id": "855",
          "name": "Malasiqui",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "113190"
        },
        {
          "id": "856",
          "name": "General Mariano Alvarez",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "112446"
        },
        {
          "id": "857",
          "name": "Urdaneta",
          "countryCode": "PHL",
          "district": "Ilocos",
          "population": "111582"
        },
        {
          "id": "858",
          "name": "Hagonoy",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "111425"
        },
        {
          "id": "859",
          "name": "San Jose",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "111009"
        },
        {
          "id": "860",
          "name": "Polomolok",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "110709"
        },
        {
          "id": "861",
          "name": "Santiago",
          "countryCode": "PHL",
          "district": "Cagayan Valley",
          "population": "110531"
        },
        {
          "id": "862",
          "name": "Tanza",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "110517"
        },
        {
          "id": "863",
          "name": "Ozamis",
          "countryCode": "PHL",
          "district": "Northern Mindanao",
          "population": "110420"
        },
        {
          "id": "864",
          "name": "Mexico",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "109481"
        },
        {
          "id": "865",
          "name": "San Jose",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "108254"
        },
        {
          "id": "866",
          "name": "Silay",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "107722"
        },
        {
          "id": "867",
          "name": "General Trias",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "107691"
        },
        {
          "id": "868",
          "name": "Tabaco",
          "countryCode": "PHL",
          "district": "Bicol",
          "population": "107166"
        },
        {
          "id": "869",
          "name": "Cabuyao",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "106630"
        },
        {
          "id": "870",
          "name": "Calapan",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "105910"
        },
        {
          "id": "871",
          "name": "Mati",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "105908"
        },
        {
          "id": "872",
          "name": "Midsayap",
          "countryCode": "PHL",
          "district": "Central Mindanao",
          "population": "105760"
        },
        {
          "id": "751",
          "name": "Potchefstroom",
          "countryCode": "ZAF",
          "district": "North West",
          "population": "101817"
        },
        {
          "id": "752",
          "name": "Rustenburg",
          "countryCode": "ZAF",
          "district": "North West",
          "population": "97008"
        },
        {
          "id": "753",
          "name": "Nigel",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "96734"
        },
        {
          "id": "754",
          "name": "George",
          "countryCode": "ZAF",
          "district": "Western Cape",
          "population": "93818"
        },
        {
          "id": "755",
          "name": "Ladysmith",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "89292"
        },
        {
          "id": "756",
          "name": "Addis Abeba",
          "countryCode": "ETH",
          "district": "Addis Abeba",
          "population": "2495000"
        },
        {
          "id": "757",
          "name": "Dire Dawa",
          "countryCode": "ETH",
          "district": "Dire Dawa",
          "population": "164851"
        },
        {
          "id": "758",
          "name": "Nazret",
          "countryCode": "ETH",
          "district": "Oromia",
          "population": "127842"
        },
        {
          "id": "759",
          "name": "Gonder",
          "countryCode": "ETH",
          "district": "Amhara",
          "population": "112249"
        },
        {
          "id": "760",
          "name": "Dese",
          "countryCode": "ETH",
          "district": "Amhara",
          "population": "97314"
        },
        {
          "id": "761",
          "name": "Mekele",
          "countryCode": "ETH",
          "district": "Tigray",
          "population": "96938"
        },
        {
          "id": "762",
          "name": "Bahir Dar",
          "countryCode": "ETH",
          "district": "Amhara",
          "population": "96140"
        },
        {
          "id": "763",
          "name": "Stanley",
          "countryCode": "FLK",
          "district": "East Falkland",
          "population": "1636"
        },
        {
          "id": "764",
          "name": "Suva",
          "countryCode": "FJI",
          "district": "Central",
          "population": "77366"
        },
        {
          "id": "765",
          "name": "Quezon",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "2173831"
        },
        {
          "id": "766",
          "name": "Manila",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "1581082"
        },
        {
          "id": "767",
          "name": "Kalookan",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "1177604"
        },
        {
          "id": "768",
          "name": "Davao",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "1147116"
        },
        {
          "id": "769",
          "name": "Cebu",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "718821"
        },
        {
          "id": "770",
          "name": "Zamboanga",
          "countryCode": "PHL",
          "district": "Western Mindanao",
          "population": "601794"
        },
        {
          "id": "771",
          "name": "Pasig",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "505058"
        },
        {
          "id": "772",
          "name": "Valenzuela",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "485433"
        },
        {
          "id": "773",
          "name": "Las PiР•вЂћas",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "472780"
        },
        {
          "id": "774",
          "name": "Antipolo",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "470866"
        },
        {
          "id": "775",
          "name": "Taguig",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "467375"
        },
        {
          "id": "776",
          "name": "Cagayan de Oro",
          "countryCode": "PHL",
          "district": "Northern Mindanao",
          "population": "461877"
        },
        {
          "id": "777",
          "name": "ParaР•вЂћaque",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "449811"
        },
        {
          "id": "778",
          "name": "Makati",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "444867"
        },
        {
          "id": "779",
          "name": "Bacolod",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "429076"
        },
        {
          "id": "780",
          "name": "General Santos",
          "countryCode": "PHL",
          "district": "Southern Mindanao",
          "population": "411822"
        },
        {
          "id": "781",
          "name": "Marikina",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "391170"
        },
        {
          "id": "782",
          "name": "DasmariР•вЂћas",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "379520"
        },
        {
          "id": "783",
          "name": "Muntinlupa",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "379310"
        },
        {
          "id": "784",
          "name": "Iloilo",
          "countryCode": "PHL",
          "district": "Western Visayas",
          "population": "365820"
        },
        {
          "id": "785",
          "name": "Pasay",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "354908"
        },
        {
          "id": "786",
          "name": "Malabon",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "338855"
        },
        {
          "id": "787",
          "name": "San JosР“В© del Monte",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "315807"
        },
        {
          "id": "788",
          "name": "Bacoor",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "305699"
        },
        {
          "id": "789",
          "name": "Iligan",
          "countryCode": "PHL",
          "district": "Central Mindanao",
          "population": "285061"
        },
        {
          "id": "790",
          "name": "Calamba",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "281146"
        },
        {
          "id": "791",
          "name": "Mandaluyong",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "278474"
        },
        {
          "id": "792",
          "name": "Butuan",
          "countryCode": "PHL",
          "district": "Caraga",
          "population": "267279"
        },
        {
          "id": "793",
          "name": "Angeles",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "263971"
        },
        {
          "id": "794",
          "name": "Tarlac",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "262481"
        },
        {
          "id": "795",
          "name": "Mandaue",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "259728"
        },
        {
          "id": "796",
          "name": "Baguio",
          "countryCode": "PHL",
          "district": "CAR",
          "population": "252386"
        },
        {
          "id": "797",
          "name": "Batangas",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "247588"
        },
        {
          "id": "798",
          "name": "Cainta",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "242511"
        },
        {
          "id": "799",
          "name": "San Pedro",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "231403"
        },
        {
          "id": "800",
          "name": "Navotas",
          "countryCode": "PHL",
          "district": "National Capital Reg",
          "population": "230403"
        },
        {
          "id": "801",
          "name": "Cabanatuan",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "222859"
        },
        {
          "id": "802",
          "name": "San Fernando",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "221857"
        },
        {
          "id": "803",
          "name": "Lipa",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "218447"
        },
        {
          "id": "804",
          "name": "Lapu-Lapu",
          "countryCode": "PHL",
          "district": "Central Visayas",
          "population": "217019"
        },
        {
          "id": "805",
          "name": "San Pablo",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "207927"
        },
        {
          "id": "806",
          "name": "BiР•вЂћan",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "201186"
        },
        {
          "id": "807",
          "name": "Taytay",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "198183"
        },
        {
          "id": "808",
          "name": "Lucena",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "196075"
        },
        {
          "id": "809",
          "name": "Imus",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "195482"
        },
        {
          "id": "810",
          "name": "Olongapo",
          "countryCode": "PHL",
          "district": "Central Luzon",
          "population": "194260"
        },
        {
          "id": "811",
          "name": "Binangonan",
          "countryCode": "PHL",
          "district": "Southern Tagalog",
          "population": "187691"
        },
        {
          "id": "690",
          "name": "Albacete",
          "countryCode": "ESP",
          "district": "Kastilia-La Mancha",
          "population": "147527"
        },
        {
          "id": "691",
          "name": "Getafe",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "145371"
        },
        {
          "id": "692",
          "name": "CР”Р‡diz",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "142449"
        },
        {
          "id": "693",
          "name": "AlcorcР“С–n",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "142048"
        },
        {
          "id": "694",
          "name": "Huelva",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "140583"
        },
        {
          "id": "695",
          "name": "LeР“С–n",
          "countryCode": "ESP",
          "district": "Castilla and LeР“С–n",
          "population": "139809"
        },
        {
          "id": "696",
          "name": "CastellР“С–n de la Plana [Castell",
          "countryCode": "ESP",
          "district": "Valencia",
          "population": "139712"
        },
        {
          "id": "697",
          "name": "Badajoz",
          "countryCode": "ESP",
          "district": "Extremadura",
          "population": "136613"
        },
        {
          "id": "698",
          "name": "[San CristР“С–bal de] la Laguna",
          "countryCode": "ESP",
          "district": "Canary Islands",
          "population": "127945"
        },
        {
          "id": "699",
          "name": "LogroР•вЂћo",
          "countryCode": "ESP",
          "district": "La Rioja",
          "population": "127093"
        },
        {
          "id": "700",
          "name": "Santa Coloma de Gramenet",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "120802"
        },
        {
          "id": "701",
          "name": "Tarragona",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "113016"
        },
        {
          "id": "702",
          "name": "Lleida (LР“В©rida)",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "112207"
        },
        {
          "id": "703",
          "name": "JaР“В©n",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "109247"
        },
        {
          "id": "704",
          "name": "Ourense (Orense)",
          "countryCode": "ESP",
          "district": "Galicia",
          "population": "109120"
        },
        {
          "id": "705",
          "name": "MatarР“С–",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "104095"
        },
        {
          "id": "706",
          "name": "Algeciras",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "103106"
        },
        {
          "id": "707",
          "name": "Marbella",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "101144"
        },
        {
          "id": "708",
          "name": "Barakaldo",
          "countryCode": "ESP",
          "district": "Baskimaa",
          "population": "98212"
        },
        {
          "id": "709",
          "name": "Dos Hermanas",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "94591"
        },
        {
          "id": "710",
          "name": "Santiago de Compostela",
          "countryCode": "ESP",
          "district": "Galicia",
          "population": "93745"
        },
        {
          "id": "711",
          "name": "TorrejР“С–n de Ardoz",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "92262"
        },
        {
          "id": "712",
          "name": "Cape Town",
          "countryCode": "ZAF",
          "district": "Western Cape",
          "population": "2352121"
        },
        {
          "id": "713",
          "name": "Soweto",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "904165"
        },
        {
          "id": "714",
          "name": "Johannesburg",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "756653"
        },
        {
          "id": "715",
          "name": "Port Elizabeth",
          "countryCode": "ZAF",
          "district": "Eastern Cape",
          "population": "752319"
        },
        {
          "id": "716",
          "name": "Pretoria",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "658630"
        },
        {
          "id": "717",
          "name": "Inanda",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "634065"
        },
        {
          "id": "718",
          "name": "Durban",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "566120"
        },
        {
          "id": "719",
          "name": "Vanderbijlpark",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "468931"
        },
        {
          "id": "720",
          "name": "Kempton Park",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "442633"
        },
        {
          "id": "721",
          "name": "Alberton",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "410102"
        },
        {
          "id": "722",
          "name": "Pinetown",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "378810"
        },
        {
          "id": "723",
          "name": "Pietermaritzburg",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "370190"
        },
        {
          "id": "724",
          "name": "Benoni",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "365467"
        },
        {
          "id": "725",
          "name": "Randburg",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "341288"
        },
        {
          "id": "726",
          "name": "Umlazi",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "339233"
        },
        {
          "id": "727",
          "name": "Bloemfontein",
          "countryCode": "ZAF",
          "district": "Free State",
          "population": "334341"
        },
        {
          "id": "728",
          "name": "Vereeniging",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "328535"
        },
        {
          "id": "729",
          "name": "Wonderboom",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "283289"
        },
        {
          "id": "730",
          "name": "Roodepoort",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "279340"
        },
        {
          "id": "731",
          "name": "Boksburg",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "262648"
        },
        {
          "id": "732",
          "name": "Klerksdorp",
          "countryCode": "ZAF",
          "district": "North West",
          "population": "261911"
        },
        {
          "id": "733",
          "name": "Soshanguve",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "242727"
        },
        {
          "id": "734",
          "name": "Newcastle",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "222993"
        },
        {
          "id": "735",
          "name": "East London",
          "countryCode": "ZAF",
          "district": "Eastern Cape",
          "population": "221047"
        },
        {
          "id": "736",
          "name": "Welkom",
          "countryCode": "ZAF",
          "district": "Free State",
          "population": "203296"
        },
        {
          "id": "737",
          "name": "Kimberley",
          "countryCode": "ZAF",
          "district": "Northern Cape",
          "population": "197254"
        },
        {
          "id": "738",
          "name": "Uitenhage",
          "countryCode": "ZAF",
          "district": "Eastern Cape",
          "population": "192120"
        },
        {
          "id": "739",
          "name": "Chatsworth",
          "countryCode": "ZAF",
          "district": "KwaZulu-Natal",
          "population": "189885"
        },
        {
          "id": "740",
          "name": "Mdantsane",
          "countryCode": "ZAF",
          "district": "Eastern Cape",
          "population": "182639"
        },
        {
          "id": "741",
          "name": "Krugersdorp",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "181503"
        },
        {
          "id": "742",
          "name": "Botshabelo",
          "countryCode": "ZAF",
          "district": "Free State",
          "population": "177971"
        },
        {
          "id": "743",
          "name": "Brakpan",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "171363"
        },
        {
          "id": "744",
          "name": "Witbank",
          "countryCode": "ZAF",
          "district": "Mpumalanga",
          "population": "167183"
        },
        {
          "id": "745",
          "name": "Oberholzer",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "164367"
        },
        {
          "id": "746",
          "name": "Germiston",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "164252"
        },
        {
          "id": "747",
          "name": "Springs",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "162072"
        },
        {
          "id": "748",
          "name": "Westonaria",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "159632"
        },
        {
          "id": "749",
          "name": "Randfontein",
          "countryCode": "ZAF",
          "district": "Gauteng",
          "population": "120838"
        },
        {
          "id": "750",
          "name": "Paarl",
          "countryCode": "ZAF",
          "district": "Western Cape",
          "population": "105768"
        },
        {
          "id": "645",
          "name": "San Salvador",
          "countryCode": "SLV",
          "district": "San Salvador",
          "population": "415346"
        },
        {
          "id": "646",
          "name": "Santa Ana",
          "countryCode": "SLV",
          "district": "Santa Ana",
          "population": "139389"
        },
        {
          "id": "647",
          "name": "Mejicanos",
          "countryCode": "SLV",
          "district": "San Salvador",
          "population": "138800"
        },
        {
          "id": "648",
          "name": "Soyapango",
          "countryCode": "SLV",
          "district": "San Salvador",
          "population": "129800"
        },
        {
          "id": "649",
          "name": "San Miguel",
          "countryCode": "SLV",
          "district": "San Miguel",
          "population": "127696"
        },
        {
          "id": "650",
          "name": "Nueva San Salvador",
          "countryCode": "SLV",
          "district": "La Libertad",
          "population": "98400"
        },
        {
          "id": "651",
          "name": "Apopa",
          "countryCode": "SLV",
          "district": "San Salvador",
          "population": "88800"
        },
        {
          "id": "652",
          "name": "Asmara",
          "countryCode": "ERI",
          "district": "Maekel",
          "population": "431000"
        },
        {
          "id": "653",
          "name": "Madrid",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "2879052"
        },
        {
          "id": "654",
          "name": "Barcelona",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "1503451"
        },
        {
          "id": "655",
          "name": "Valencia",
          "countryCode": "ESP",
          "district": "Valencia",
          "population": "739412"
        },
        {
          "id": "656",
          "name": "Sevilla",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "701927"
        },
        {
          "id": "657",
          "name": "Zaragoza",
          "countryCode": "ESP",
          "district": "Aragonia",
          "population": "603367"
        },
        {
          "id": "658",
          "name": "MР”Р‡laga",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "530553"
        },
        {
          "id": "659",
          "name": "Bilbao",
          "countryCode": "ESP",
          "district": "Baskimaa",
          "population": "357589"
        },
        {
          "id": "660",
          "name": "Las Palmas de Gran Canaria",
          "countryCode": "ESP",
          "district": "Canary Islands",
          "population": "354757"
        },
        {
          "id": "661",
          "name": "Murcia",
          "countryCode": "ESP",
          "district": "Murcia",
          "population": "353504"
        },
        {
          "id": "662",
          "name": "Palma de Mallorca",
          "countryCode": "ESP",
          "district": "Balears",
          "population": "326993"
        },
        {
          "id": "663",
          "name": "Valladolid",
          "countryCode": "ESP",
          "district": "Castilla and LeР“С–n",
          "population": "319998"
        },
        {
          "id": "664",
          "name": "CР“С–rdoba",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "311708"
        },
        {
          "id": "665",
          "name": "Vigo",
          "countryCode": "ESP",
          "district": "Galicia",
          "population": "283670"
        },
        {
          "id": "666",
          "name": "Alicante [Alacant]",
          "countryCode": "ESP",
          "district": "Valencia",
          "population": "272432"
        },
        {
          "id": "667",
          "name": "GijР“С–n",
          "countryCode": "ESP",
          "district": "Asturia",
          "population": "267980"
        },
        {
          "id": "669",
          "name": "Granada",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "244767"
        },
        {
          "id": "670",
          "name": "A CoruР•вЂћa (La CoruР•вЂћa)",
          "countryCode": "ESP",
          "district": "Galicia",
          "population": "243402"
        },
        {
          "id": "671",
          "name": "Vitoria-Gasteiz",
          "countryCode": "ESP",
          "district": "Baskimaa",
          "population": "217154"
        },
        {
          "id": "672",
          "name": "Santa Cruz de Tenerife",
          "countryCode": "ESP",
          "district": "Canary Islands",
          "population": "213050"
        },
        {
          "id": "673",
          "name": "Badalona",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "209635"
        },
        {
          "id": "674",
          "name": "Oviedo",
          "countryCode": "ESP",
          "district": "Asturia",
          "population": "200453"
        },
        {
          "id": "675",
          "name": "MР“С–stoles",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "195351"
        },
        {
          "id": "676",
          "name": "Elche [Elx]",
          "countryCode": "ESP",
          "district": "Valencia",
          "population": "193174"
        },
        {
          "id": "677",
          "name": "Sabadell",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "184859"
        },
        {
          "id": "678",
          "name": "Santander",
          "countryCode": "ESP",
          "district": "Cantabria",
          "population": "184165"
        },
        {
          "id": "679",
          "name": "Jerez de la Frontera",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "182660"
        },
        {
          "id": "680",
          "name": "Pamplona [IruР•вЂћa]",
          "countryCode": "ESP",
          "district": "Navarra",
          "population": "180483"
        },
        {
          "id": "681",
          "name": "Donostia-San SebastiР”Р‡n",
          "countryCode": "ESP",
          "district": "Baskimaa",
          "population": "179208"
        },
        {
          "id": "682",
          "name": "Cartagena",
          "countryCode": "ESP",
          "district": "Murcia",
          "population": "177709"
        },
        {
          "id": "683",
          "name": "LeganР“В©s",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "173163"
        },
        {
          "id": "684",
          "name": "Fuenlabrada",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "171173"
        },
        {
          "id": "685",
          "name": "AlmerР”В·a",
          "countryCode": "ESP",
          "district": "Andalusia",
          "population": "169027"
        },
        {
          "id": "686",
          "name": "Terrassa",
          "countryCode": "ESP",
          "district": "Katalonia",
          "population": "168695"
        },
        {
          "id": "687",
          "name": "AlcalР”Р‡ de Henares",
          "countryCode": "ESP",
          "district": "Madrid",
          "population": "164463"
        },
        {
          "id": "688",
          "name": "Burgos",
          "countryCode": "ESP",
          "district": "Castilla and LeР“С–n",
          "population": "162802"
        },
        {
          "id": "689",
          "name": "Salamanca",
          "countryCode": "ESP",
          "district": "Castilla and LeР“С–n",
          "population": "158720"
        },
        {
          "id": "570",
          "name": "Coquimbo",
          "countryCode": "CHL",
          "district": "Coquimbo",
          "population": "143353"
        },
        {
          "id": "571",
          "name": "Osorno",
          "countryCode": "CHL",
          "district": "Los Lagos",
          "population": "141468"
        },
        {
          "id": "572",
          "name": "La Serena",
          "countryCode": "CHL",
          "district": "Coquimbo",
          "population": "137409"
        },
        {
          "id": "573",
          "name": "Calama",
          "countryCode": "CHL",
          "district": "Antofagasta",
          "population": "137265"
        },
        {
          "id": "574",
          "name": "Valdivia",
          "countryCode": "CHL",
          "district": "Los Lagos",
          "population": "133106"
        },
        {
          "id": "575",
          "name": "Punta Arenas",
          "countryCode": "CHL",
          "district": "Magallanes",
          "population": "125631"
        },
        {
          "id": "576",
          "name": "CopiapР“С–",
          "countryCode": "CHL",
          "district": "Atacama",
          "population": "120128"
        },
        {
          "id": "577",
          "name": "QuilpuР“В©",
          "countryCode": "CHL",
          "district": "ValparaР”В·so",
          "population": "118857"
        },
        {
          "id": "578",
          "name": "CuricР“С–",
          "countryCode": "CHL",
          "district": "Maule",
          "population": "115766"
        },
        {
          "id": "579",
          "name": "Ovalle",
          "countryCode": "CHL",
          "district": "Coquimbo",
          "population": "94854"
        },
        {
          "id": "580",
          "name": "Coronel",
          "countryCode": "CHL",
          "district": "BР”В·obР”В·o",
          "population": "93061"
        },
        {
          "id": "581",
          "name": "San Pedro de la Paz",
          "countryCode": "CHL",
          "district": "BР”В·obР”В·o",
          "population": "91684"
        },
        {
          "id": "582",
          "name": "Melipilla",
          "countryCode": "CHL",
          "district": "Santiago",
          "population": "91056"
        },
        {
          "id": "583",
          "name": "Avarua",
          "countryCode": "COK",
          "district": "Rarotonga",
          "population": "11900"
        },
        {
          "id": "584",
          "name": "San JosР“В©",
          "countryCode": "CRI",
          "district": "San JosР“В©",
          "population": "339131"
        },
        {
          "id": "586",
          "name": "Roseau",
          "countryCode": "DMA",
          "district": "St George",
          "population": "16243"
        },
        {
          "id": "587",
          "name": "Santo Domingo de GuzmР”Р‡n",
          "countryCode": "DOM",
          "district": "Distrito Nacional",
          "population": "1609966"
        },
        {
          "id": "588",
          "name": "Santiago de los Caballeros",
          "countryCode": "DOM",
          "district": "Santiago",
          "population": "365463"
        },
        {
          "id": "589",
          "name": "La Romana",
          "countryCode": "DOM",
          "district": "La Romana",
          "population": "140204"
        },
        {
          "id": "590",
          "name": "San Pedro de MacorР”В·s",
          "countryCode": "DOM",
          "district": "San Pedro de MacorР”В·s",
          "population": "124735"
        },
        {
          "id": "591",
          "name": "San Francisco de MacorР”В·s",
          "countryCode": "DOM",
          "district": "Duarte",
          "population": "108485"
        },
        {
          "id": "592",
          "name": "San Felipe de Puerto Plata",
          "countryCode": "DOM",
          "district": "Puerto Plata",
          "population": "89423"
        },
        {
          "id": "593",
          "name": "Guayaquil",
          "countryCode": "ECU",
          "district": "Guayas",
          "population": "2070040"
        },
        {
          "id": "594",
          "name": "Quito",
          "countryCode": "ECU",
          "district": "Pichincha",
          "population": "1573458"
        },
        {
          "id": "595",
          "name": "Cuenca",
          "countryCode": "ECU",
          "district": "Azuay",
          "population": "270353"
        },
        {
          "id": "596",
          "name": "Machala",
          "countryCode": "ECU",
          "district": "El Oro",
          "population": "210368"
        },
        {
          "id": "597",
          "name": "Santo Domingo de los Colorados",
          "countryCode": "ECU",
          "district": "Pichincha",
          "population": "202111"
        },
        {
          "id": "598",
          "name": "Portoviejo",
          "countryCode": "ECU",
          "district": "ManabР”В·",
          "population": "176413"
        },
        {
          "id": "599",
          "name": "Ambato",
          "countryCode": "ECU",
          "district": "Tungurahua",
          "population": "169612"
        },
        {
          "id": "600",
          "name": "Manta",
          "countryCode": "ECU",
          "district": "ManabР”В·",
          "population": "164739"
        },
        {
          "id": "601",
          "name": "Duran [Eloy Alfaro]",
          "countryCode": "ECU",
          "district": "Guayas",
          "population": "152514"
        },
        {
          "id": "602",
          "name": "Ibarra",
          "countryCode": "ECU",
          "district": "Imbabura",
          "population": "130643"
        },
        {
          "id": "603",
          "name": "Quevedo",
          "countryCode": "ECU",
          "district": "Los RР”В·os",
          "population": "129631"
        },
        {
          "id": "604",
          "name": "Milagro",
          "countryCode": "ECU",
          "district": "Guayas",
          "population": "124177"
        },
        {
          "id": "605",
          "name": "Loja",
          "countryCode": "ECU",
          "district": "Loja",
          "population": "123875"
        },
        {
          "id": "606",
          "name": "RР”В·obamba",
          "countryCode": "ECU",
          "district": "Chimborazo",
          "population": "123163"
        },
        {
          "id": "607",
          "name": "Esmeraldas",
          "countryCode": "ECU",
          "district": "Esmeraldas",
          "population": "123045"
        },
        {
          "id": "510",
          "name": "Slough",
          "countryCode": "GBR",
          "district": "England",
          "population": "112000"
        },
        {
          "id": "511",
          "name": "Exeter",
          "countryCode": "GBR",
          "district": "England",
          "population": "111000"
        },
        {
          "id": "512",
          "name": "Cheltenham",
          "countryCode": "GBR",
          "district": "England",
          "population": "106000"
        },
        {
          "id": "513",
          "name": "Gloucester",
          "countryCode": "GBR",
          "district": "England",
          "population": "107000"
        },
        {
          "id": "514",
          "name": "Saint Helens",
          "countryCode": "GBR",
          "district": "England",
          "population": "106293"
        },
        {
          "id": "515",
          "name": "Sutton Coldfield",
          "countryCode": "GBR",
          "district": "England",
          "population": "106001"
        },
        {
          "id": "516",
          "name": "York",
          "countryCode": "GBR",
          "district": "England",
          "population": "104425"
        },
        {
          "id": "517",
          "name": "Oldham",
          "countryCode": "GBR",
          "district": "England",
          "population": "103931"
        },
        {
          "id": "518",
          "name": "Basildon",
          "countryCode": "GBR",
          "district": "England",
          "population": "100924"
        },
        {
          "id": "519",
          "name": "Worthing",
          "countryCode": "GBR",
          "district": "England",
          "population": "100000"
        },
        {
          "id": "520",
          "name": "Chelmsford",
          "countryCode": "GBR",
          "district": "England",
          "population": "97451"
        },
        {
          "id": "521",
          "name": "Colchester",
          "countryCode": "GBR",
          "district": "England",
          "population": "96063"
        },
        {
          "id": "522",
          "name": "Crawley",
          "countryCode": "GBR",
          "district": "England",
          "population": "97000"
        },
        {
          "id": "523",
          "name": "Gillingham",
          "countryCode": "GBR",
          "district": "England",
          "population": "92000"
        },
        {
          "id": "524",
          "name": "Solihull",
          "countryCode": "GBR",
          "district": "England",
          "population": "94531"
        },
        {
          "id": "525",
          "name": "Rochdale",
          "countryCode": "GBR",
          "district": "England",
          "population": "94313"
        },
        {
          "id": "526",
          "name": "Birkenhead",
          "countryCode": "GBR",
          "district": "England",
          "population": "93087"
        },
        {
          "id": "527",
          "name": "Worcester",
          "countryCode": "GBR",
          "district": "England",
          "population": "95000"
        },
        {
          "id": "528",
          "name": "Hartlepool",
          "countryCode": "GBR",
          "district": "England",
          "population": "92000"
        },
        {
          "id": "529",
          "name": "Halifax",
          "countryCode": "GBR",
          "district": "England",
          "population": "91069"
        },
        {
          "id": "530",
          "name": "Woking/Byfleet",
          "countryCode": "GBR",
          "district": "England",
          "population": "92000"
        },
        {
          "id": "531",
          "name": "Southport",
          "countryCode": "GBR",
          "district": "England",
          "population": "90959"
        },
        {
          "id": "532",
          "name": "Maidstone",
          "countryCode": "GBR",
          "district": "England",
          "population": "90878"
        },
        {
          "id": "533",
          "name": "Eastbourne",
          "countryCode": "GBR",
          "district": "England",
          "population": "90000"
        },
        {
          "id": "534",
          "name": "Grimsby",
          "countryCode": "GBR",
          "district": "England",
          "population": "89000"
        },
        {
          "id": "535",
          "name": "Saint Helier",
          "countryCode": "GBR",
          "district": "Jersey",
          "population": "27523"
        },
        {
          "id": "536",
          "name": "Douglas",
          "countryCode": "GBR",
          "district": "РІР‚вЂњ",
          "population": "23487"
        },
        {
          "id": "537",
          "name": "Road Town",
          "countryCode": "VGB",
          "district": "Tortola",
          "population": "8000"
        },
        {
          "id": "538",
          "name": "Bandar Seri Begawan",
          "countryCode": "BRN",
          "district": "Brunei and Muara",
          "population": "21484"
        },
        {
          "id": "539",
          "name": "Sofija",
          "countryCode": "BGR",
          "district": "Grad Sofija",
          "population": "1122302"
        },
        {
          "id": "540",
          "name": "Plovdiv",
          "countryCode": "BGR",
          "district": "Plovdiv",
          "population": "342584"
        },
        {
          "id": "541",
          "name": "Varna",
          "countryCode": "BGR",
          "district": "Varna",
          "population": "299801"
        },
        {
          "id": "542",
          "name": "Burgas",
          "countryCode": "BGR",
          "district": "Burgas",
          "population": "195255"
        },
        {
          "id": "543",
          "name": "Ruse",
          "countryCode": "BGR",
          "district": "Ruse",
          "population": "166467"
        },
        {
          "id": "544",
          "name": "Stara Zagora",
          "countryCode": "BGR",
          "district": "Haskovo",
          "population": "147939"
        },
        {
          "id": "545",
          "name": "Pleven",
          "countryCode": "BGR",
          "district": "Lovec",
          "population": "121952"
        },
        {
          "id": "546",
          "name": "Sliven",
          "countryCode": "BGR",
          "district": "Burgas",
          "population": "105530"
        },
        {
          "id": "547",
          "name": "Dobric",
          "countryCode": "BGR",
          "district": "Varna",
          "population": "100399"
        },
        {
          "id": "549",
          "name": "Ouagadougou",
          "countryCode": "BFA",
          "district": "Kadiogo",
          "population": "824000"
        },
        {
          "id": "550",
          "name": "Bobo-Dioulasso",
          "countryCode": "BFA",
          "district": "Houet",
          "population": "300000"
        },
        {
          "id": "551",
          "name": "Koudougou",
          "countryCode": "BFA",
          "district": "BoulkiemdР“В©",
          "population": "105000"
        },
        {
          "id": "552",
          "name": "Bujumbura",
          "countryCode": "BDI",
          "district": "Bujumbura",
          "population": "300000"
        },
        {
          "id": "553",
          "name": "George Town",
          "countryCode": "CYM",
          "district": "Grand Cayman",
          "population": "19600"
        },
        {
          "id": "554",
          "name": "Santiago de Chile",
          "countryCode": "CHL",
          "district": "Santiago",
          "population": "4703954"
        },
        {
          "id": "555",
          "name": "Puente Alto",
          "countryCode": "CHL",
          "district": "Santiago",
          "population": "386236"
        },
        {
          "id": "556",
          "name": "ViР•вЂћa del Mar",
          "countryCode": "CHL",
          "district": "ValparaР”В·so",
          "population": "312493"
        },
        {
          "id": "557",
          "name": "ValparaР”В·so",
          "countryCode": "CHL",
          "district": "ValparaР”В·so",
          "population": "293800"
        },
        {
          "id": "558",
          "name": "Talcahuano",
          "countryCode": "CHL",
          "district": "BР”В·obР”В·o",
          "population": "277752"
        },
        {
          "id": "559",
          "name": "Antofagasta",
          "countryCode": "CHL",
          "district": "Antofagasta",
          "population": "251429"
        },
        {
          "id": "560",
          "name": "San Bernardo",
          "countryCode": "CHL",
          "district": "Santiago",
          "population": "241910"
        },
        {
          "id": "561",
          "name": "Temuco",
          "countryCode": "CHL",
          "district": "La AraucanР”В·a",
          "population": "233041"
        },
        {
          "id": "562",
          "name": "ConcepciР“С–n",
          "countryCode": "CHL",
          "district": "BР”В·obР”В·o",
          "population": "217664"
        },
        {
          "id": "564",
          "name": "Arica",
          "countryCode": "CHL",
          "district": "TarapacР”Р‡",
          "population": "189036"
        },
        {
          "id": "565",
          "name": "Talca",
          "countryCode": "CHL",
          "district": "Maule",
          "population": "187557"
        },
        {
          "id": "566",
          "name": "ChillР”Р‡n",
          "countryCode": "CHL",
          "district": "BР”В·obР”В·o",
          "population": "178182"
        },
        {
          "id": "567",
          "name": "Iquique",
          "countryCode": "CHL",
          "district": "TarapacР”Р‡",
          "population": "177892"
        },
        {
          "id": "568",
          "name": "Los Angeles",
          "countryCode": "CHL",
          "district": "BР”В·obР”В·o",
          "population": "158215"
        },
        {
          "id": "569",
          "name": "Puerto Montt",
          "countryCode": "CHL",
          "district": "Los Lagos",
          "population": "152194"
        },
        {
          "id": "449",
          "name": "Ituiutaba",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "90507"
        },
        {
          "id": "450",
          "name": "CorumbР”Р‡",
          "countryCode": "BRA",
          "district": "Mato Grosso do Sul",
          "population": "90111"
        },
        {
          "id": "451",
          "name": "PalhoР”вЂњa",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "89465"
        },
        {
          "id": "452",
          "name": "Barra do PiraР”В·",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "89388"
        },
        {
          "id": "453",
          "name": "Bento GonР”вЂњalves",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "89254"
        },
        {
          "id": "454",
          "name": "PoР”Р‡",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "89236"
        },
        {
          "id": "455",
          "name": "Р”В®guas Lindas de GoiР”Р‡s",
          "countryCode": "BRA",
          "district": "GoiР”Р‡s",
          "population": "89200"
        },
        {
          "id": "456",
          "name": "London",
          "countryCode": "GBR",
          "district": "England",
          "population": "7285000"
        },
        {
          "id": "457",
          "name": "Birmingham",
          "countryCode": "GBR",
          "district": "England",
          "population": "1013000"
        },
        {
          "id": "458",
          "name": "Glasgow",
          "countryCode": "GBR",
          "district": "Scotland",
          "population": "619680"
        },
        {
          "id": "459",
          "name": "Liverpool",
          "countryCode": "GBR",
          "district": "England",
          "population": "461000"
        },
        {
          "id": "460",
          "name": "Edinburgh",
          "countryCode": "GBR",
          "district": "Scotland",
          "population": "450180"
        },
        {
          "id": "461",
          "name": "Sheffield",
          "countryCode": "GBR",
          "district": "England",
          "population": "431607"
        },
        {
          "id": "462",
          "name": "Manchester",
          "countryCode": "GBR",
          "district": "England",
          "population": "430000"
        },
        {
          "id": "463",
          "name": "Leeds",
          "countryCode": "GBR",
          "district": "England",
          "population": "424194"
        },
        {
          "id": "464",
          "name": "Bristol",
          "countryCode": "GBR",
          "district": "England",
          "population": "402000"
        },
        {
          "id": "465",
          "name": "Cardiff",
          "countryCode": "GBR",
          "district": "Wales",
          "population": "321000"
        },
        {
          "id": "466",
          "name": "Coventry",
          "countryCode": "GBR",
          "district": "England",
          "population": "304000"
        },
        {
          "id": "467",
          "name": "Leicester",
          "countryCode": "GBR",
          "district": "England",
          "population": "294000"
        },
        {
          "id": "468",
          "name": "Bradford",
          "countryCode": "GBR",
          "district": "England",
          "population": "289376"
        },
        {
          "id": "469",
          "name": "Belfast",
          "countryCode": "GBR",
          "district": "North Ireland",
          "population": "287500"
        },
        {
          "id": "470",
          "name": "Nottingham",
          "countryCode": "GBR",
          "district": "England",
          "population": "287000"
        },
        {
          "id": "471",
          "name": "Kingston upon Hull",
          "countryCode": "GBR",
          "district": "England",
          "population": "262000"
        },
        {
          "id": "472",
          "name": "Plymouth",
          "countryCode": "GBR",
          "district": "England",
          "population": "253000"
        },
        {
          "id": "473",
          "name": "Stoke-on-Trent",
          "countryCode": "GBR",
          "district": "England",
          "population": "252000"
        },
        {
          "id": "474",
          "name": "Wolverhampton",
          "countryCode": "GBR",
          "district": "England",
          "population": "242000"
        },
        {
          "id": "475",
          "name": "Derby",
          "countryCode": "GBR",
          "district": "England",
          "population": "236000"
        },
        {
          "id": "476",
          "name": "Swansea",
          "countryCode": "GBR",
          "district": "Wales",
          "population": "230000"
        },
        {
          "id": "477",
          "name": "Southampton",
          "countryCode": "GBR",
          "district": "England",
          "population": "216000"
        },
        {
          "id": "478",
          "name": "Aberdeen",
          "countryCode": "GBR",
          "district": "Scotland",
          "population": "213070"
        },
        {
          "id": "479",
          "name": "Northampton",
          "countryCode": "GBR",
          "district": "England",
          "population": "196000"
        },
        {
          "id": "480",
          "name": "Dudley",
          "countryCode": "GBR",
          "district": "England",
          "population": "192171"
        },
        {
          "id": "481",
          "name": "Portsmouth",
          "countryCode": "GBR",
          "district": "England",
          "population": "190000"
        },
        {
          "id": "482",
          "name": "Newcastle upon Tyne",
          "countryCode": "GBR",
          "district": "England",
          "population": "189150"
        },
        {
          "id": "483",
          "name": "Sunderland",
          "countryCode": "GBR",
          "district": "England",
          "population": "183310"
        },
        {
          "id": "484",
          "name": "Luton",
          "countryCode": "GBR",
          "district": "England",
          "population": "183000"
        },
        {
          "id": "485",
          "name": "Swindon",
          "countryCode": "GBR",
          "district": "England",
          "population": "180000"
        },
        {
          "id": "486",
          "name": "Southend-on-Sea",
          "countryCode": "GBR",
          "district": "England",
          "population": "176000"
        },
        {
          "id": "487",
          "name": "Walsall",
          "countryCode": "GBR",
          "district": "England",
          "population": "174739"
        },
        {
          "id": "488",
          "name": "Bournemouth",
          "countryCode": "GBR",
          "district": "England",
          "population": "162000"
        },
        {
          "id": "489",
          "name": "Peterborough",
          "countryCode": "GBR",
          "district": "England",
          "population": "156000"
        },
        {
          "id": "490",
          "name": "Brighton",
          "countryCode": "GBR",
          "district": "England",
          "population": "156124"
        },
        {
          "id": "491",
          "name": "Blackpool",
          "countryCode": "GBR",
          "district": "England",
          "population": "151000"
        },
        {
          "id": "492",
          "name": "Dundee",
          "countryCode": "GBR",
          "district": "Scotland",
          "population": "146690"
        },
        {
          "id": "493",
          "name": "West Bromwich",
          "countryCode": "GBR",
          "district": "England",
          "population": "146386"
        },
        {
          "id": "494",
          "name": "Reading",
          "countryCode": "GBR",
          "district": "England",
          "population": "148000"
        },
        {
          "id": "495",
          "name": "Oldbury/Smethwick (Warley)",
          "countryCode": "GBR",
          "district": "England",
          "population": "145542"
        },
        {
          "id": "496",
          "name": "Middlesbrough",
          "countryCode": "GBR",
          "district": "England",
          "population": "145000"
        },
        {
          "id": "497",
          "name": "Huddersfield",
          "countryCode": "GBR",
          "district": "England",
          "population": "143726"
        },
        {
          "id": "498",
          "name": "Oxford",
          "countryCode": "GBR",
          "district": "England",
          "population": "144000"
        },
        {
          "id": "499",
          "name": "Poole",
          "countryCode": "GBR",
          "district": "England",
          "population": "141000"
        },
        {
          "id": "500",
          "name": "Bolton",
          "countryCode": "GBR",
          "district": "England",
          "population": "139020"
        },
        {
          "id": "501",
          "name": "Blackburn",
          "countryCode": "GBR",
          "district": "England",
          "population": "140000"
        },
        {
          "id": "502",
          "name": "Newport",
          "countryCode": "GBR",
          "district": "Wales",
          "population": "139000"
        },
        {
          "id": "503",
          "name": "Preston",
          "countryCode": "GBR",
          "district": "England",
          "population": "135000"
        },
        {
          "id": "504",
          "name": "Stockport",
          "countryCode": "GBR",
          "district": "England",
          "population": "132813"
        },
        {
          "id": "505",
          "name": "Norwich",
          "countryCode": "GBR",
          "district": "England",
          "population": "124000"
        },
        {
          "id": "506",
          "name": "Rotherham",
          "countryCode": "GBR",
          "district": "England",
          "population": "121380"
        },
        {
          "id": "507",
          "name": "Cambridge",
          "countryCode": "GBR",
          "district": "England",
          "population": "121000"
        },
        {
          "id": "508",
          "name": "Watford",
          "countryCode": "GBR",
          "district": "England",
          "population": "113080"
        },
        {
          "id": "509",
          "name": "Ipswich",
          "countryCode": "GBR",
          "district": "England",
          "population": "114000"
        },
        {
          "id": "391",
          "name": "Garanhuns",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "114603"
        },
        {
          "id": "392",
          "name": "VitР“С–ria de Santo AntР”вЂЎo",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "113595"
        },
        {
          "id": "393",
          "name": "Santa Rita",
          "countryCode": "BRA",
          "district": "ParaР”В·ba",
          "population": "113135"
        },
        {
          "id": "394",
          "name": "Barbacena",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "113079"
        },
        {
          "id": "395",
          "name": "Abaetetuba",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "111258"
        },
        {
          "id": "396",
          "name": "JaР•вЂє",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "109965"
        },
        {
          "id": "397",
          "name": "Lauro de Freitas",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "109236"
        },
        {
          "id": "398",
          "name": "Franco da Rocha",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "108964"
        },
        {
          "id": "399",
          "name": "Teixeira de Freitas",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "108441"
        },
        {
          "id": "400",
          "name": "Varginha",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "108314"
        },
        {
          "id": "401",
          "name": "RibeirР”вЂЎo Pires",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "108121"
        },
        {
          "id": "402",
          "name": "SabarР”Р‡",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "107781"
        },
        {
          "id": "403",
          "name": "Catanduva",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "107761"
        },
        {
          "id": "404",
          "name": "Rio Verde",
          "countryCode": "BRA",
          "district": "GoiР”Р‡s",
          "population": "107755"
        },
        {
          "id": "405",
          "name": "Botucatu",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "107663"
        },
        {
          "id": "406",
          "name": "Colatina",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "107354"
        },
        {
          "id": "407",
          "name": "Santa Cruz do Sul",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "106734"
        },
        {
          "id": "408",
          "name": "Linhares",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "106278"
        },
        {
          "id": "409",
          "name": "Apucarana",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "105114"
        },
        {
          "id": "410",
          "name": "Barretos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "104156"
        },
        {
          "id": "411",
          "name": "GuaratinguetР”Р‡",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "103433"
        },
        {
          "id": "412",
          "name": "Cachoeirinha",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "103240"
        },
        {
          "id": "413",
          "name": "CodР“С–",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "103153"
        },
        {
          "id": "414",
          "name": "JaraguР”Р‡ do Sul",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "102580"
        },
        {
          "id": "415",
          "name": "CubatР”вЂЎo",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "102372"
        },
        {
          "id": "416",
          "name": "Itabira",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "102217"
        },
        {
          "id": "417",
          "name": "Itaituba",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "101320"
        },
        {
          "id": "418",
          "name": "Araras",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "101046"
        },
        {
          "id": "419",
          "name": "Resende",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "100627"
        },
        {
          "id": "420",
          "name": "Atibaia",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "100356"
        },
        {
          "id": "421",
          "name": "Pouso Alegre",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "100028"
        },
        {
          "id": "422",
          "name": "Toledo",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "99387"
        },
        {
          "id": "423",
          "name": "Crato",
          "countryCode": "BRA",
          "district": "CearР”Р‡",
          "population": "98965"
        },
        {
          "id": "424",
          "name": "Passos",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "98570"
        },
        {
          "id": "425",
          "name": "Araguari",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "98399"
        },
        {
          "id": "426",
          "name": "SР”вЂЎo JosР“В© de Ribamar",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "98318"
        },
        {
          "id": "427",
          "name": "Pinhais",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "98198"
        },
        {
          "id": "428",
          "name": "SertР”вЂЎozinho",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "98140"
        },
        {
          "id": "429",
          "name": "Conselheiro Lafaiete",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "97507"
        },
        {
          "id": "430",
          "name": "Paulo Afonso",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "97291"
        },
        {
          "id": "431",
          "name": "Angra dos Reis",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "96864"
        },
        {
          "id": "432",
          "name": "EunР”Р‡polis",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "96610"
        },
        {
          "id": "433",
          "name": "Salto",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "96348"
        },
        {
          "id": "434",
          "name": "Ourinhos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "96291"
        },
        {
          "id": "435",
          "name": "Parnamirim",
          "countryCode": "BRA",
          "district": "Rio Grande do Norte",
          "population": "96210"
        },
        {
          "id": "436",
          "name": "Jacobina",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "96131"
        },
        {
          "id": "437",
          "name": "Coronel Fabriciano",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "95933"
        },
        {
          "id": "438",
          "name": "Birigui",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "94685"
        },
        {
          "id": "439",
          "name": "TatuР”В·",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "93897"
        },
        {
          "id": "440",
          "name": "Ji-ParanР”Р‡",
          "countryCode": "BRA",
          "district": "RondР•РЊnia",
          "population": "93346"
        },
        {
          "id": "441",
          "name": "Bacabal",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "93121"
        },
        {
          "id": "442",
          "name": "CametР”Р‡",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "92779"
        },
        {
          "id": "443",
          "name": "GuaР”В·ba",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "92224"
        },
        {
          "id": "444",
          "name": "SР”вЂЎo LourenР”вЂњo da Mata",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "91999"
        },
        {
          "id": "445",
          "name": "Santana do Livramento",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "91779"
        },
        {
          "id": "446",
          "name": "Votorantim",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "91777"
        },
        {
          "id": "447",
          "name": "Campo Largo",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "91203"
        },
        {
          "id": "448",
          "name": "Patos",
          "countryCode": "BRA",
          "district": "ParaР”В·ba",
          "population": "90519"
        },
        {
          "id": "333",
          "name": "AraР”вЂњatuba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "169303"
        },
        {
          "id": "334",
          "name": "Barra Mansa",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "168953"
        },
        {
          "id": "335",
          "name": "Praia Grande",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "168434"
        },
        {
          "id": "336",
          "name": "MarabР”Р‡",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "167795"
        },
        {
          "id": "337",
          "name": "CriciР•вЂєma",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "167661"
        },
        {
          "id": "338",
          "name": "Boa Vista",
          "countryCode": "BRA",
          "district": "Roraima",
          "population": "167185"
        },
        {
          "id": "339",
          "name": "Passo Fundo",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "166343"
        },
        {
          "id": "340",
          "name": "Dourados",
          "countryCode": "BRA",
          "district": "Mato Grosso do Sul",
          "population": "164716"
        },
        {
          "id": "341",
          "name": "Santa Luzia",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "164704"
        },
        {
          "id": "342",
          "name": "Rio Claro",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "163551"
        },
        {
          "id": "343",
          "name": "MaracanaР•вЂє",
          "countryCode": "BRA",
          "district": "CearР”Р‡",
          "population": "162022"
        },
        {
          "id": "344",
          "name": "Guarapuava",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "160510"
        },
        {
          "id": "345",
          "name": "RondonР“С–polis",
          "countryCode": "BRA",
          "district": "Mato Grosso",
          "population": "155115"
        },
        {
          "id": "346",
          "name": "SР”вЂЎo JosР“В©",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "155105"
        },
        {
          "id": "347",
          "name": "Cachoeiro de Itapemirim",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "155024"
        },
        {
          "id": "348",
          "name": "NilР“С–polis",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "153383"
        },
        {
          "id": "349",
          "name": "Itapevi",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "150664"
        },
        {
          "id": "350",
          "name": "Cabo de Santo Agostinho",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "149964"
        },
        {
          "id": "351",
          "name": "CamaР”вЂњari",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "149146"
        },
        {
          "id": "352",
          "name": "Sobral",
          "countryCode": "BRA",
          "district": "CearР”Р‡",
          "population": "146005"
        },
        {
          "id": "353",
          "name": "ItajaР”В·",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "145197"
        },
        {
          "id": "354",
          "name": "ChapecР“С–",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "144158"
        },
        {
          "id": "355",
          "name": "Cotia",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "140042"
        },
        {
          "id": "356",
          "name": "Lages",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "139570"
        },
        {
          "id": "357",
          "name": "Ferraz de Vasconcelos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "139283"
        },
        {
          "id": "358",
          "name": "Indaiatuba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "135968"
        },
        {
          "id": "359",
          "name": "HortolР”Рѓndia",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "135755"
        },
        {
          "id": "360",
          "name": "Caxias",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "133980"
        },
        {
          "id": "361",
          "name": "SР”вЂЎo Caetano do Sul",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "133321"
        },
        {
          "id": "362",
          "name": "Itu",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "132736"
        },
        {
          "id": "363",
          "name": "Nossa Senhora do Socorro",
          "countryCode": "BRA",
          "district": "Sergipe",
          "population": "131351"
        },
        {
          "id": "364",
          "name": "ParnaР”В·ba",
          "countryCode": "BRA",
          "district": "PiauР”В·",
          "population": "129756"
        },
        {
          "id": "365",
          "name": "PoР”вЂњos de Caldas",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "129683"
        },
        {
          "id": "366",
          "name": "TeresР“С–polis",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "128079"
        },
        {
          "id": "367",
          "name": "Barreiras",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "127801"
        },
        {
          "id": "368",
          "name": "Castanhal",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "127634"
        },
        {
          "id": "369",
          "name": "Alagoinhas",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "126820"
        },
        {
          "id": "370",
          "name": "Itapecerica da Serra",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "126672"
        },
        {
          "id": "371",
          "name": "Uruguaiana",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "126305"
        },
        {
          "id": "372",
          "name": "ParanaguР”Р‡",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "126076"
        },
        {
          "id": "373",
          "name": "IbiritР“В©",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "125982"
        },
        {
          "id": "374",
          "name": "Timon",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "125812"
        },
        {
          "id": "375",
          "name": "LuziР”Рѓnia",
          "countryCode": "BRA",
          "district": "GoiР”Р‡s",
          "population": "125597"
        },
        {
          "id": "376",
          "name": "MacaР“В©",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "125597"
        },
        {
          "id": "377",
          "name": "TeР“С–filo Otoni",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "124489"
        },
        {
          "id": "378",
          "name": "Moji-GuaР”вЂњu",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "123782"
        },
        {
          "id": "379",
          "name": "Palmas",
          "countryCode": "BRA",
          "district": "Tocantins",
          "population": "121919"
        },
        {
          "id": "380",
          "name": "Pindamonhangaba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "121904"
        },
        {
          "id": "381",
          "name": "Francisco Morato",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "121197"
        },
        {
          "id": "382",
          "name": "BagР“В©",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "120793"
        },
        {
          "id": "383",
          "name": "Sapucaia do Sul",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "120217"
        },
        {
          "id": "384",
          "name": "Cabo Frio",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "119503"
        },
        {
          "id": "385",
          "name": "Itapetininga",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "119391"
        },
        {
          "id": "386",
          "name": "Patos de Minas",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "119262"
        },
        {
          "id": "387",
          "name": "Camaragibe",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "118968"
        },
        {
          "id": "388",
          "name": "BraganР”вЂњa Paulista",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "116929"
        },
        {
          "id": "389",
          "name": "Queimados",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "115020"
        },
        {
          "id": "390",
          "name": "AraguaР”В·na",
          "countryCode": "BRA",
          "district": "Tocantins",
          "population": "114948"
        },
        {
          "id": "275",
          "name": "PetrР“С–polis",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "279183"
        },
        {
          "id": "276",
          "name": "Itaquaquecetuba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "270874"
        },
        {
          "id": "277",
          "name": "VitР“С–ria",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "270626"
        },
        {
          "id": "278",
          "name": "Ponta Grossa",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "268013"
        },
        {
          "id": "279",
          "name": "Rio Branco",
          "countryCode": "BRA",
          "district": "Acre",
          "population": "259537"
        },
        {
          "id": "280",
          "name": "Foz do IguaР”вЂњu",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "259425"
        },
        {
          "id": "281",
          "name": "MacapР”Р‡",
          "countryCode": "BRA",
          "district": "AmapР”Р‡",
          "population": "256033"
        },
        {
          "id": "282",
          "name": "IlhР“В©us",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "254970"
        },
        {
          "id": "283",
          "name": "VitР“С–ria da Conquista",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "253587"
        },
        {
          "id": "284",
          "name": "Uberaba",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "249225"
        },
        {
          "id": "285",
          "name": "Paulista",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "248473"
        },
        {
          "id": "286",
          "name": "Limeira",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "245497"
        },
        {
          "id": "287",
          "name": "Blumenau",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "244379"
        },
        {
          "id": "288",
          "name": "Caruaru",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "244247"
        },
        {
          "id": "289",
          "name": "SantarР“В©m",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "241771"
        },
        {
          "id": "290",
          "name": "Volta Redonda",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "240315"
        },
        {
          "id": "291",
          "name": "Novo Hamburgo",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "239940"
        },
        {
          "id": "292",
          "name": "Caucaia",
          "countryCode": "BRA",
          "district": "CearР”Р‡",
          "population": "238738"
        },
        {
          "id": "293",
          "name": "Santa Maria",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "238473"
        },
        {
          "id": "294",
          "name": "Cascavel",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "237510"
        },
        {
          "id": "295",
          "name": "GuarujР”Р‡",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "237206"
        },
        {
          "id": "296",
          "name": "RibeirР”вЂЎo das Neves",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "232685"
        },
        {
          "id": "297",
          "name": "Governador Valadares",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "231724"
        },
        {
          "id": "298",
          "name": "TaubatР“В©",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "229130"
        },
        {
          "id": "299",
          "name": "Imperatriz",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "224564"
        },
        {
          "id": "300",
          "name": "GravataР”В·",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "223011"
        },
        {
          "id": "301",
          "name": "Embu",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "222223"
        },
        {
          "id": "302",
          "name": "MossorР“С–",
          "countryCode": "BRA",
          "district": "Rio Grande do Norte",
          "population": "214901"
        },
        {
          "id": "303",
          "name": "VР”Р‡rzea Grande",
          "countryCode": "BRA",
          "district": "Mato Grosso",
          "population": "214435"
        },
        {
          "id": "304",
          "name": "Petrolina",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "210540"
        },
        {
          "id": "305",
          "name": "Barueri",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "208426"
        },
        {
          "id": "306",
          "name": "ViamР”вЂЎo",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "207557"
        },
        {
          "id": "307",
          "name": "Ipatinga",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "206338"
        },
        {
          "id": "308",
          "name": "Juazeiro",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "201073"
        },
        {
          "id": "309",
          "name": "Juazeiro do Norte",
          "countryCode": "BRA",
          "district": "CearР”Р‡",
          "population": "199636"
        },
        {
          "id": "310",
          "name": "TaboР”вЂЎo da Serra",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "197550"
        },
        {
          "id": "311",
          "name": "SР”вЂЎo JosР“В© dos Pinhais",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "196884"
        },
        {
          "id": "312",
          "name": "MagР“В©",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "196147"
        },
        {
          "id": "313",
          "name": "Suzano",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "195434"
        },
        {
          "id": "314",
          "name": "SР”вЂЎo Leopoldo",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "189258"
        },
        {
          "id": "315",
          "name": "MarР”В·lia",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "188691"
        },
        {
          "id": "316",
          "name": "SР”вЂЎo Carlos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "187122"
        },
        {
          "id": "317",
          "name": "SumarР“В©",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "186205"
        },
        {
          "id": "318",
          "name": "Presidente Prudente",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "185340"
        },
        {
          "id": "319",
          "name": "DivinР“С–polis",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "185047"
        },
        {
          "id": "320",
          "name": "Sete Lagoas",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "182984"
        },
        {
          "id": "321",
          "name": "Rio Grande",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "182222"
        },
        {
          "id": "322",
          "name": "Itabuna",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "182148"
        },
        {
          "id": "323",
          "name": "JequiР“В©",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "179128"
        },
        {
          "id": "324",
          "name": "Arapiraca",
          "countryCode": "BRA",
          "district": "Alagoas",
          "population": "178988"
        },
        {
          "id": "325",
          "name": "Colombo",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "177764"
        },
        {
          "id": "326",
          "name": "Americana",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "177409"
        },
        {
          "id": "327",
          "name": "Alvorada",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "175574"
        },
        {
          "id": "328",
          "name": "Araraquara",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "174381"
        },
        {
          "id": "329",
          "name": "ItaboraР”В·",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "173977"
        },
        {
          "id": "331",
          "name": "Nova Friburgo",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "170697"
        },
        {
          "id": "332",
          "name": "JacareР”В·",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "170356"
        },
        {
          "id": "217",
          "name": "Guarulhos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "1095874"
        },
        {
          "id": "218",
          "name": "GoiР”Рѓnia",
          "countryCode": "BRA",
          "district": "GoiР”Р‡s",
          "population": "1056330"
        },
        {
          "id": "219",
          "name": "Campinas",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "950043"
        },
        {
          "id": "220",
          "name": "SР”вЂЎo GonР”вЂњalo",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "869254"
        },
        {
          "id": "221",
          "name": "Nova IguaР”вЂњu",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "862225"
        },
        {
          "id": "222",
          "name": "SР”вЂЎo LuР”В·s",
          "countryCode": "BRA",
          "district": "MaranhР”вЂЎo",
          "population": "837588"
        },
        {
          "id": "223",
          "name": "MaceiР“С–",
          "countryCode": "BRA",
          "district": "Alagoas",
          "population": "786288"
        },
        {
          "id": "224",
          "name": "Duque de Caxias",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "746758"
        },
        {
          "id": "225",
          "name": "SР”вЂЎo Bernardo do Campo",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "723132"
        },
        {
          "id": "226",
          "name": "Teresina",
          "countryCode": "BRA",
          "district": "PiauР”В·",
          "population": "691942"
        },
        {
          "id": "227",
          "name": "Natal",
          "countryCode": "BRA",
          "district": "Rio Grande do Norte",
          "population": "688955"
        },
        {
          "id": "228",
          "name": "Osasco",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "659604"
        },
        {
          "id": "229",
          "name": "Campo Grande",
          "countryCode": "BRA",
          "district": "Mato Grosso do Sul",
          "population": "649593"
        },
        {
          "id": "230",
          "name": "Santo AndrР“В©",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "630073"
        },
        {
          "id": "231",
          "name": "JoР”вЂЎo Pessoa",
          "countryCode": "BRA",
          "district": "ParaР”В·ba",
          "population": "584029"
        },
        {
          "id": "232",
          "name": "JaboatР”вЂЎo dos Guararapes",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "558680"
        },
        {
          "id": "233",
          "name": "Contagem",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "520801"
        },
        {
          "id": "234",
          "name": "SР”вЂЎo JosР“В© dos Campos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "515553"
        },
        {
          "id": "235",
          "name": "UberlР”Рѓndia",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "487222"
        },
        {
          "id": "236",
          "name": "Feira de Santana",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "479992"
        },
        {
          "id": "237",
          "name": "RibeirР”вЂЎo Preto",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "473276"
        },
        {
          "id": "238",
          "name": "Sorocaba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "466823"
        },
        {
          "id": "239",
          "name": "NiterР“С–i",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "459884"
        },
        {
          "id": "240",
          "name": "CuiabР”Р‡",
          "countryCode": "BRA",
          "district": "Mato Grosso",
          "population": "453813"
        },
        {
          "id": "241",
          "name": "Juiz de Fora",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "450288"
        },
        {
          "id": "242",
          "name": "Aracaju",
          "countryCode": "BRA",
          "district": "Sergipe",
          "population": "445555"
        },
        {
          "id": "243",
          "name": "SР”вЂЎo JoР”вЂЎo de Meriti",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "440052"
        },
        {
          "id": "244",
          "name": "Londrina",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "432257"
        },
        {
          "id": "245",
          "name": "Joinville",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "428011"
        },
        {
          "id": "246",
          "name": "Belford Roxo",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "425194"
        },
        {
          "id": "247",
          "name": "Santos",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "408748"
        },
        {
          "id": "248",
          "name": "Ananindeua",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "400940"
        },
        {
          "id": "249",
          "name": "Campos dos Goytacazes",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "398418"
        },
        {
          "id": "250",
          "name": "MauР”Р‡",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "375055"
        },
        {
          "id": "251",
          "name": "CarapicuР”В·ba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "357552"
        },
        {
          "id": "252",
          "name": "Olinda",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "354732"
        },
        {
          "id": "253",
          "name": "Campina Grande",
          "countryCode": "BRA",
          "district": "ParaР”В·ba",
          "population": "352497"
        },
        {
          "id": "254",
          "name": "SР”вЂЎo JosР“В© do Rio Preto",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "351944"
        },
        {
          "id": "255",
          "name": "Caxias do Sul",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "349581"
        },
        {
          "id": "256",
          "name": "Moji das Cruzes",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "339194"
        },
        {
          "id": "257",
          "name": "Diadema",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "335078"
        },
        {
          "id": "258",
          "name": "Aparecida de GoiР”Рѓnia",
          "countryCode": "BRA",
          "district": "GoiР”Р‡s",
          "population": "324662"
        },
        {
          "id": "259",
          "name": "Piracicaba",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "319104"
        },
        {
          "id": "260",
          "name": "Cariacica",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "319033"
        },
        {
          "id": "261",
          "name": "Vila Velha",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "318758"
        },
        {
          "id": "262",
          "name": "Pelotas",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "315415"
        },
        {
          "id": "263",
          "name": "Bauru",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "313670"
        },
        {
          "id": "264",
          "name": "Porto Velho",
          "countryCode": "BRA",
          "district": "RondР•РЊnia",
          "population": "309750"
        },
        {
          "id": "265",
          "name": "Serra",
          "countryCode": "BRA",
          "district": "EspР”В·rito Santo",
          "population": "302666"
        },
        {
          "id": "266",
          "name": "Betim",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "302108"
        },
        {
          "id": "267",
          "name": "JundР”В·aР”В·",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "296127"
        },
        {
          "id": "268",
          "name": "Canoas",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "294125"
        },
        {
          "id": "269",
          "name": "Franca",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "290139"
        },
        {
          "id": "270",
          "name": "SР”вЂЎo Vicente",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "286848"
        },
        {
          "id": "271",
          "name": "MaringР”Р‡",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "286461"
        },
        {
          "id": "272",
          "name": "Montes Claros",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "286058"
        },
        {
          "id": "273",
          "name": "AnР”Р‡polis",
          "countryCode": "BRA",
          "district": "GoiР”Р‡s",
          "population": "282197"
        },
        {
          "id": "274",
          "name": "FlorianР“С–polis",
          "countryCode": "BRA",
          "district": "Santa Catarina",
          "population": "281928"
        },
        {
          "id": "156",
          "name": "Mymensingh",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "188713"
        },
        {
          "id": "157",
          "name": "Barisal",
          "countryCode": "BGD",
          "district": "Barisal",
          "population": "170232"
        },
        {
          "id": "158",
          "name": "Tungi",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "168702"
        },
        {
          "id": "159",
          "name": "Jessore",
          "countryCode": "BGD",
          "district": "Khulna",
          "population": "139710"
        },
        {
          "id": "160",
          "name": "Comilla",
          "countryCode": "BGD",
          "district": "Chittagong",
          "population": "135313"
        },
        {
          "id": "161",
          "name": "Nawabganj",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "130577"
        },
        {
          "id": "162",
          "name": "Dinajpur",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "127815"
        },
        {
          "id": "163",
          "name": "Bogra",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "120170"
        },
        {
          "id": "164",
          "name": "Sylhet",
          "countryCode": "BGD",
          "district": "Sylhet",
          "population": "117396"
        },
        {
          "id": "165",
          "name": "Brahmanbaria",
          "countryCode": "BGD",
          "district": "Chittagong",
          "population": "109032"
        },
        {
          "id": "166",
          "name": "Tangail",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "106004"
        },
        {
          "id": "167",
          "name": "Jamalpur",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "103556"
        },
        {
          "id": "168",
          "name": "Pabna",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "103277"
        },
        {
          "id": "169",
          "name": "Naogaon",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "101266"
        },
        {
          "id": "170",
          "name": "Sirajganj",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "99669"
        },
        {
          "id": "171",
          "name": "Narsinghdi",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "98342"
        },
        {
          "id": "172",
          "name": "Saidpur",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "96777"
        },
        {
          "id": "173",
          "name": "Gazipur",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "96717"
        },
        {
          "id": "174",
          "name": "Bridgetown",
          "countryCode": "BRB",
          "district": "St Michael",
          "population": "6070"
        },
        {
          "id": "175",
          "name": "Antwerpen",
          "countryCode": "BEL",
          "district": "Antwerpen",
          "population": "446525"
        },
        {
          "id": "176",
          "name": "Gent",
          "countryCode": "BEL",
          "district": "East Flanderi",
          "population": "224180"
        },
        {
          "id": "177",
          "name": "Charleroi",
          "countryCode": "BEL",
          "district": "Hainaut",
          "population": "200827"
        },
        {
          "id": "178",
          "name": "LiР”РЊge",
          "countryCode": "BEL",
          "district": "LiР”РЊge",
          "population": "185639"
        },
        {
          "id": "179",
          "name": "Bruxelles [Brussel]",
          "countryCode": "BEL",
          "district": "Bryssel",
          "population": "133859"
        },
        {
          "id": "180",
          "name": "Brugge",
          "countryCode": "BEL",
          "district": "West Flanderi",
          "population": "116246"
        },
        {
          "id": "181",
          "name": "Schaerbeek",
          "countryCode": "BEL",
          "district": "Bryssel",
          "population": "105692"
        },
        {
          "id": "182",
          "name": "Namur",
          "countryCode": "BEL",
          "district": "Namur",
          "population": "105419"
        },
        {
          "id": "183",
          "name": "Mons",
          "countryCode": "BEL",
          "district": "Hainaut",
          "population": "90935"
        },
        {
          "id": "184",
          "name": "Belize City",
          "countryCode": "BLZ",
          "district": "Belize City",
          "population": "55810"
        },
        {
          "id": "185",
          "name": "Belmopan",
          "countryCode": "BLZ",
          "district": "Cayo",
          "population": "7105"
        },
        {
          "id": "186",
          "name": "Cotonou",
          "countryCode": "BEN",
          "district": "Atlantique",
          "population": "536827"
        },
        {
          "id": "187",
          "name": "Porto-Novo",
          "countryCode": "BEN",
          "district": "OuР“В©mР“В©",
          "population": "194000"
        },
        {
          "id": "188",
          "name": "Djougou",
          "countryCode": "BEN",
          "district": "Atacora",
          "population": "134099"
        },
        {
          "id": "189",
          "name": "Parakou",
          "countryCode": "BEN",
          "district": "Borgou",
          "population": "103577"
        },
        {
          "id": "191",
          "name": "Hamilton",
          "countryCode": "BMU",
          "district": "Hamilton",
          "population": "1200"
        },
        {
          "id": "192",
          "name": "Thimphu",
          "countryCode": "BTN",
          "district": "Thimphu",
          "population": "22000"
        },
        {
          "id": "193",
          "name": "Santa Cruz de la Sierra",
          "countryCode": "BOL",
          "district": "Santa Cruz",
          "population": "935361"
        },
        {
          "id": "194",
          "name": "La Paz",
          "countryCode": "BOL",
          "district": "La Paz",
          "population": "758141"
        },
        {
          "id": "195",
          "name": "El Alto",
          "countryCode": "BOL",
          "district": "La Paz",
          "population": "534466"
        },
        {
          "id": "196",
          "name": "Cochabamba",
          "countryCode": "BOL",
          "district": "Cochabamba",
          "population": "482800"
        },
        {
          "id": "197",
          "name": "Oruro",
          "countryCode": "BOL",
          "district": "Oruro",
          "population": "223553"
        },
        {
          "id": "198",
          "name": "Sucre",
          "countryCode": "BOL",
          "district": "Chuquisaca",
          "population": "178426"
        },
        {
          "id": "199",
          "name": "PotosР”В·",
          "countryCode": "BOL",
          "district": "PotosР”В·",
          "population": "140642"
        },
        {
          "id": "200",
          "name": "Tarija",
          "countryCode": "BOL",
          "district": "Tarija",
          "population": "125255"
        },
        {
          "id": "201",
          "name": "Sarajevo",
          "countryCode": "BIH",
          "district": "Federaatio",
          "population": "360000"
        },
        {
          "id": "202",
          "name": "Banja Luka",
          "countryCode": "BIH",
          "district": "Republika Srpska",
          "population": "143079"
        },
        {
          "id": "203",
          "name": "Zenica",
          "countryCode": "BIH",
          "district": "Federaatio",
          "population": "96027"
        },
        {
          "id": "204",
          "name": "Gaborone",
          "countryCode": "BWA",
          "district": "Gaborone",
          "population": "213017"
        },
        {
          "id": "205",
          "name": "Francistown",
          "countryCode": "BWA",
          "district": "Francistown",
          "population": "101805"
        },
        {
          "id": "206",
          "name": "SР”вЂЎo Paulo",
          "countryCode": "BRA",
          "district": "SР”вЂЎo Paulo",
          "population": "9968485"
        },
        {
          "id": "207",
          "name": "Rio de Janeiro",
          "countryCode": "BRA",
          "district": "Rio de Janeiro",
          "population": "5598953"
        },
        {
          "id": "208",
          "name": "Salvador",
          "countryCode": "BRA",
          "district": "Bahia",
          "population": "2302832"
        },
        {
          "id": "209",
          "name": "Belo Horizonte",
          "countryCode": "BRA",
          "district": "Minas Gerais",
          "population": "2139125"
        },
        {
          "id": "210",
          "name": "Fortaleza",
          "countryCode": "BRA",
          "district": "CearР”Р‡",
          "population": "2097757"
        },
        {
          "id": "212",
          "name": "Curitiba",
          "countryCode": "BRA",
          "district": "ParanР”Р‡",
          "population": "1584232"
        },
        {
          "id": "213",
          "name": "Recife",
          "countryCode": "BRA",
          "district": "Pernambuco",
          "population": "1378087"
        },
        {
          "id": "214",
          "name": "Porto Alegre",
          "countryCode": "BRA",
          "district": "Rio Grande do Sul",
          "population": "1314032"
        },
        {
          "id": "215",
          "name": "Manaus",
          "countryCode": "BRA",
          "district": "Amazonas",
          "population": "1255049"
        },
        {
          "id": "216",
          "name": "BelР“В©m",
          "countryCode": "BRA",
          "district": "ParР”Р‡",
          "population": "1186926"
        },
        {
          "id": "96",
          "name": "BahР”В·a Blanca",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "239810"
        },
        {
          "id": "97",
          "name": "Esteban EcheverrР”В·a",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "235760"
        },
        {
          "id": "98",
          "name": "Resistencia",
          "countryCode": "ARG",
          "district": "Chaco",
          "population": "229212"
        },
        {
          "id": "99",
          "name": "JosР“В© C. Paz",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "221754"
        },
        {
          "id": "100",
          "name": "ParanР”Р‡",
          "countryCode": "ARG",
          "district": "Entre Rios",
          "population": "207041"
        },
        {
          "id": "101",
          "name": "Godoy Cruz",
          "countryCode": "ARG",
          "district": "Mendoza",
          "population": "206998"
        },
        {
          "id": "102",
          "name": "Posadas",
          "countryCode": "ARG",
          "district": "Misiones",
          "population": "201273"
        },
        {
          "id": "103",
          "name": "GuaymallР“В©n",
          "countryCode": "ARG",
          "district": "Mendoza",
          "population": "200595"
        },
        {
          "id": "104",
          "name": "Santiago del Estero",
          "countryCode": "ARG",
          "district": "Santiago del Estero",
          "population": "189947"
        },
        {
          "id": "105",
          "name": "San Salvador de Jujuy",
          "countryCode": "ARG",
          "district": "Jujuy",
          "population": "178748"
        },
        {
          "id": "106",
          "name": "Hurlingham",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "170028"
        },
        {
          "id": "107",
          "name": "NeuquР“В©n",
          "countryCode": "ARG",
          "district": "NeuquР“В©n",
          "population": "167296"
        },
        {
          "id": "108",
          "name": "ItuzaingР“С–",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "158197"
        },
        {
          "id": "109",
          "name": "San Fernando",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "153036"
        },
        {
          "id": "110",
          "name": "Formosa",
          "countryCode": "ARG",
          "district": "Formosa",
          "population": "147636"
        },
        {
          "id": "111",
          "name": "Las Heras",
          "countryCode": "ARG",
          "district": "Mendoza",
          "population": "145823"
        },
        {
          "id": "112",
          "name": "La Rioja",
          "countryCode": "ARG",
          "district": "La Rioja",
          "population": "138117"
        },
        {
          "id": "113",
          "name": "San Fernando del Valle de Cata",
          "countryCode": "ARG",
          "district": "Catamarca",
          "population": "134935"
        },
        {
          "id": "114",
          "name": "RР”В·o Cuarto",
          "countryCode": "ARG",
          "district": "CР“С–rdoba",
          "population": "134355"
        },
        {
          "id": "115",
          "name": "Comodoro Rivadavia",
          "countryCode": "ARG",
          "district": "Chubut",
          "population": "124104"
        },
        {
          "id": "116",
          "name": "Mendoza",
          "countryCode": "ARG",
          "district": "Mendoza",
          "population": "123027"
        },
        {
          "id": "117",
          "name": "San NicolР”Р‡s de los Arroyos",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "119302"
        },
        {
          "id": "118",
          "name": "San Juan",
          "countryCode": "ARG",
          "district": "San Juan",
          "population": "119152"
        },
        {
          "id": "119",
          "name": "Escobar",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "116675"
        },
        {
          "id": "120",
          "name": "Concordia",
          "countryCode": "ARG",
          "district": "Entre Rios",
          "population": "116485"
        },
        {
          "id": "121",
          "name": "Pilar",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "113428"
        },
        {
          "id": "122",
          "name": "San Luis",
          "countryCode": "ARG",
          "district": "San Luis",
          "population": "110136"
        },
        {
          "id": "123",
          "name": "Ezeiza",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "99578"
        },
        {
          "id": "124",
          "name": "San Rafael",
          "countryCode": "ARG",
          "district": "Mendoza",
          "population": "94651"
        },
        {
          "id": "125",
          "name": "Tandil",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "91101"
        },
        {
          "id": "126",
          "name": "Yerevan",
          "countryCode": "ARM",
          "district": "Yerevan",
          "population": "1248700"
        },
        {
          "id": "128",
          "name": "Vanadzor",
          "countryCode": "ARM",
          "district": "Lori",
          "population": "172700"
        },
        {
          "id": "129",
          "name": "Oranjestad",
          "countryCode": "ABW",
          "district": "РІР‚вЂњ",
          "population": "29034"
        },
        {
          "id": "130",
          "name": "Sydney",
          "countryCode": "AUS",
          "district": "New South Wales",
          "population": "3276207"
        },
        {
          "id": "131",
          "name": "Melbourne",
          "countryCode": "AUS",
          "district": "Victoria",
          "population": "2865329"
        },
        {
          "id": "132",
          "name": "Brisbane",
          "countryCode": "AUS",
          "district": "Queensland",
          "population": "1291117"
        },
        {
          "id": "133",
          "name": "Perth",
          "countryCode": "AUS",
          "district": "West Australia",
          "population": "1096829"
        },
        {
          "id": "135",
          "name": "Canberra",
          "countryCode": "AUS",
          "district": "Capital Region",
          "population": "322723"
        },
        {
          "id": "136",
          "name": "Gold Coast",
          "countryCode": "AUS",
          "district": "Queensland",
          "population": "311932"
        },
        {
          "id": "137",
          "name": "Newcastle",
          "countryCode": "AUS",
          "district": "New South Wales",
          "population": "270324"
        },
        {
          "id": "138",
          "name": "Central Coast",
          "countryCode": "AUS",
          "district": "New South Wales",
          "population": "227657"
        },
        {
          "id": "139",
          "name": "Wollongong",
          "countryCode": "AUS",
          "district": "New South Wales",
          "population": "219761"
        },
        {
          "id": "140",
          "name": "Hobart",
          "countryCode": "AUS",
          "district": "Tasmania",
          "population": "126118"
        },
        {
          "id": "141",
          "name": "Geelong",
          "countryCode": "AUS",
          "district": "Victoria",
          "population": "125382"
        },
        {
          "id": "142",
          "name": "Townsville",
          "countryCode": "AUS",
          "district": "Queensland",
          "population": "109914"
        },
        {
          "id": "143",
          "name": "Cairns",
          "countryCode": "AUS",
          "district": "Queensland",
          "population": "92273"
        },
        {
          "id": "144",
          "name": "Baku",
          "countryCode": "AZE",
          "district": "Baki",
          "population": "1787800"
        },
        {
          "id": "145",
          "name": "GР“В¤ncР“В¤",
          "countryCode": "AZE",
          "district": "GР“В¤ncР“В¤",
          "population": "299300"
        },
        {
          "id": "146",
          "name": "Sumqayit",
          "countryCode": "AZE",
          "district": "Sumqayit",
          "population": "283000"
        },
        {
          "id": "147",
          "name": "MingР“В¤Р”вЂњevir",
          "countryCode": "AZE",
          "district": "MingР“В¤Р”вЂњevir",
          "population": "93900"
        },
        {
          "id": "148",
          "name": "Nassau",
          "countryCode": "BHS",
          "district": "New Providence",
          "population": "172000"
        },
        {
          "id": "149",
          "name": "al-Manama",
          "countryCode": "BHR",
          "district": "al-Manama",
          "population": "148000"
        },
        {
          "id": "150",
          "name": "Dhaka",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "3612850"
        },
        {
          "id": "151",
          "name": "Chittagong",
          "countryCode": "BGD",
          "district": "Chittagong",
          "population": "1392860"
        },
        {
          "id": "152",
          "name": "Khulna",
          "countryCode": "BGD",
          "district": "Khulna",
          "population": "663340"
        },
        {
          "id": "153",
          "name": "Rajshahi",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "294056"
        },
        {
          "id": "154",
          "name": "Narayanganj",
          "countryCode": "BGD",
          "district": "Dhaka",
          "population": "202134"
        },
        {
          "id": "155",
          "name": "Rangpur",
          "countryCode": "BGD",
          "district": "Rajshahi",
          "population": "191398"
        },
        {
          "id": "36",
          "name": "Oran",
          "countryCode": "DZA",
          "district": "Oran",
          "population": "609823"
        },
        {
          "id": "37",
          "name": "Constantine",
          "countryCode": "DZA",
          "district": "Constantine",
          "population": "443727"
        },
        {
          "id": "38",
          "name": "Annaba",
          "countryCode": "DZA",
          "district": "Annaba",
          "population": "222518"
        },
        {
          "id": "39",
          "name": "Batna",
          "countryCode": "DZA",
          "district": "Batna",
          "population": "183377"
        },
        {
          "id": "40",
          "name": "SР“В©tif",
          "countryCode": "DZA",
          "district": "SР“В©tif",
          "population": "179055"
        },
        {
          "id": "42",
          "name": "Skikda",
          "countryCode": "DZA",
          "district": "Skikda",
          "population": "128747"
        },
        {
          "id": "43",
          "name": "Biskra",
          "countryCode": "DZA",
          "district": "Biskra",
          "population": "128281"
        },
        {
          "id": "46",
          "name": "Mostaganem",
          "countryCode": "DZA",
          "district": "Mostaganem",
          "population": "115212"
        },
        {
          "id": "48",
          "name": "Tlemcen (Tilimsen)",
          "countryCode": "DZA",
          "district": "Tlemcen",
          "population": "110242"
        },
        {
          "id": "49",
          "name": "BР“В©char",
          "countryCode": "DZA",
          "district": "BР“В©char",
          "population": "107311"
        },
        {
          "id": "50",
          "name": "Tiaret",
          "countryCode": "DZA",
          "district": "Tiaret",
          "population": "100118"
        },
        {
          "id": "51",
          "name": "Ech-Chleff (el-Asnam)",
          "countryCode": "DZA",
          "district": "Chlef",
          "population": "96794"
        },
        {
          "id": "53",
          "name": "Tafuna",
          "countryCode": "ASM",
          "district": "Tutuila",
          "population": "5200"
        },
        {
          "id": "55",
          "name": "Andorra la Vella",
          "countryCode": "AND",
          "district": "Andorra la Vella",
          "population": "21189"
        },
        {
          "id": "56",
          "name": "Luanda",
          "countryCode": "AGO",
          "district": "Luanda",
          "population": "2022000"
        },
        {
          "id": "57",
          "name": "Huambo",
          "countryCode": "AGO",
          "district": "Huambo",
          "population": "163100"
        },
        {
          "id": "58",
          "name": "Lobito",
          "countryCode": "AGO",
          "district": "Benguela",
          "population": "130000"
        },
        {
          "id": "59",
          "name": "Benguela",
          "countryCode": "AGO",
          "district": "Benguela",
          "population": "128300"
        },
        {
          "id": "60",
          "name": "Namibe",
          "countryCode": "AGO",
          "district": "Namibe",
          "population": "118200"
        },
        {
          "id": "62",
          "name": "The Valley",
          "countryCode": "AIA",
          "district": "РІР‚вЂњ",
          "population": "595"
        },
        {
          "id": "64",
          "name": "Dubai",
          "countryCode": "ARE",
          "district": "Dubai",
          "population": "669181"
        },
        {
          "id": "65",
          "name": "Abu Dhabi",
          "countryCode": "ARE",
          "district": "Abu Dhabi",
          "population": "398695"
        },
        {
          "id": "66",
          "name": "Sharja",
          "countryCode": "ARE",
          "district": "Sharja",
          "population": "320095"
        },
        {
          "id": "67",
          "name": "al-Ayn",
          "countryCode": "ARE",
          "district": "Abu Dhabi",
          "population": "225970"
        },
        {
          "id": "68",
          "name": "Ajman",
          "countryCode": "ARE",
          "district": "Ajman",
          "population": "114395"
        },
        {
          "id": "69",
          "name": "Buenos Aires",
          "countryCode": "ARG",
          "district": "Distrito Federal",
          "population": "2982146"
        },
        {
          "id": "70",
          "name": "La Matanza",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "1266461"
        },
        {
          "id": "71",
          "name": "CР“С–rdoba",
          "countryCode": "ARG",
          "district": "CР“С–rdoba",
          "population": "1157507"
        },
        {
          "id": "72",
          "name": "Rosario",
          "countryCode": "ARG",
          "district": "Santa FР“В©",
          "population": "907718"
        },
        {
          "id": "73",
          "name": "Lomas de Zamora",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "622013"
        },
        {
          "id": "74",
          "name": "Quilmes",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "559249"
        },
        {
          "id": "75",
          "name": "Almirante Brown",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "538918"
        },
        {
          "id": "76",
          "name": "La Plata",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "521936"
        },
        {
          "id": "77",
          "name": "Mar del Plata",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "512880"
        },
        {
          "id": "78",
          "name": "San Miguel de TucumР”Р‡n",
          "countryCode": "ARG",
          "district": "TucumР”Р‡n",
          "population": "470809"
        },
        {
          "id": "79",
          "name": "LanР•вЂєs",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "469735"
        },
        {
          "id": "80",
          "name": "Merlo",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "463846"
        },
        {
          "id": "81",
          "name": "General San MartР”В·n",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "422542"
        },
        {
          "id": "82",
          "name": "Salta",
          "countryCode": "ARG",
          "district": "Salta",
          "population": "367550"
        },
        {
          "id": "83",
          "name": "Moreno",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "356993"
        },
        {
          "id": "84",
          "name": "Santa FР“В©",
          "countryCode": "ARG",
          "district": "Santa FР“В©",
          "population": "353063"
        },
        {
          "id": "85",
          "name": "Avellaneda",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "353046"
        },
        {
          "id": "86",
          "name": "Tres de Febrero",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "352311"
        },
        {
          "id": "87",
          "name": "MorР“С–n",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "349246"
        },
        {
          "id": "88",
          "name": "Florencio Varela",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "315432"
        },
        {
          "id": "89",
          "name": "San Isidro",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "306341"
        },
        {
          "id": "90",
          "name": "Tigre",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "296226"
        },
        {
          "id": "91",
          "name": "Malvinas Argentinas",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "290335"
        },
        {
          "id": "92",
          "name": "Vicente LР“С–pez",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "288341"
        },
        {
          "id": "93",
          "name": "Berazategui",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "276916"
        },
        {
          "id": "94",
          "name": "Corrientes",
          "countryCode": "ARG",
          "district": "Corrientes",
          "population": "258103"
        },
        {
          "id": "95",
          "name": "San Miguel",
          "countryCode": "ARG",
          "district": "Buenos Aires",
          "population": "248700"
        },
        {
          "id": "2",
          "name": "Qandahar",
          "countryCode": "AFG",
          "district": "Qandahar",
          "population": "237500"
        },
        {
          "id": "3",
          "name": "Herat",
          "countryCode": "AFG",
          "district": "Herat",
          "population": "186800"
        },
        {
          "id": "4",
          "name": "Mazar-e-Sharif",
          "countryCode": "AFG",
          "district": "Balkh",
          "population": "127800"
        },
        {
          "id": "5",
          "name": "Amsterdam",
          "countryCode": "NLD",
          "district": "Noord-Holland",
          "population": "731200"
        },
        {
          "id": "6",
          "name": "Rotterdam",
          "countryCode": "NLD",
          "district": "Zuid-Holland",
          "population": "593321"
        },
        {
          "id": "7",
          "name": "Haag",
          "countryCode": "NLD",
          "district": "Zuid-Holland",
          "population": "440900"
        },
        {
          "id": "8",
          "name": "Utrecht",
          "countryCode": "NLD",
          "district": "Utrecht",
          "population": "234323"
        },
        {
          "id": "9",
          "name": "Eindhoven",
          "countryCode": "NLD",
          "district": "Noord-Brabant",
          "population": "201843"
        },
        {
          "id": "11",
          "name": "Groningen",
          "countryCode": "NLD",
          "district": "Groningen",
          "population": "172701"
        },
        {
          "id": "12",
          "name": "Breda",
          "countryCode": "NLD",
          "district": "Noord-Brabant",
          "population": "160398"
        },
        {
          "id": "13",
          "name": "Apeldoorn",
          "countryCode": "NLD",
          "district": "Gelderland",
          "population": "153491"
        },
        {
          "id": "14",
          "name": "Nijmegen",
          "countryCode": "NLD",
          "district": "Gelderland",
          "population": "152463"
        },
        {
          "id": "15",
          "name": "Enschede",
          "countryCode": "NLD",
          "district": "Overijssel",
          "population": "149544"
        },
        {
          "id": "16",
          "name": "Haarlem",
          "countryCode": "NLD",
          "district": "Noord-Holland",
          "population": "148772"
        },
        {
          "id": "17",
          "name": "Almere",
          "countryCode": "NLD",
          "district": "Flevoland",
          "population": "142465"
        },
        {
          "id": "18",
          "name": "Arnhem",
          "countryCode": "NLD",
          "district": "Gelderland",
          "population": "138020"
        },
        {
          "id": "19",
          "name": "Zaanstad",
          "countryCode": "NLD",
          "district": "Noord-Holland",
          "population": "135621"
        },
        {
          "id": "4084",
          "name": "Tallinn",
          "countryCode": "EST",
          "district": "Harjumaa",
          "population": "411196"
        },
        {
          "id": "21",
          "name": "Amersfoort",
          "countryCode": "NLD",
          "district": "Utrecht",
          "population": "126270"
        },
        {
          "id": "22",
          "name": "Maastricht",
          "countryCode": "NLD",
          "district": "Limburg",
          "population": "122087"
        },
        {
          "id": "23",
          "name": "Dordrecht",
          "countryCode": "NLD",
          "district": "Zuid-Holland",
          "population": "119811"
        },
        {
          "id": "24",
          "name": "Leiden",
          "countryCode": "NLD",
          "district": "Zuid-Holland",
          "population": "117196"
        },
        {
          "id": "25",
          "name": "Haarlemmermeer",
          "countryCode": "NLD",
          "district": "Noord-Holland",
          "population": "110722"
        },
        {
          "id": "26",
          "name": "Zoetermeer",
          "countryCode": "NLD",
          "district": "Zuid-Holland",
          "population": "110214"
        },
        {
          "id": "28",
          "name": "Zwolle",
          "countryCode": "NLD",
          "district": "Overijssel",
          "population": "105819"
        },
        {
          "id": "29",
          "name": "Ede",
          "countryCode": "NLD",
          "district": "Gelderland",
          "population": "101574"
        },
        {
          "id": "30",
          "name": "Delft",
          "countryCode": "NLD",
          "district": "Zuid-Holland",
          "population": "95268"
        },
        {
          "id": "31",
          "name": "Heerlen",
          "countryCode": "NLD",
          "district": "Limburg",
          "population": "95052"
        },
        {
          "id": "32",
          "name": "Alkmaar",
          "countryCode": "NLD",
          "district": "Noord-Holland",
          "population": "92713"
        },
        {
          "id": "33",
          "name": "Willemstad",
          "countryCode": "ANT",
          "district": "CuraР”вЂњao",
          "population": "2345"
        }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('City', null, {});
  }
};
