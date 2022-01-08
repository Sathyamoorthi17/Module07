// Solving problems using array functions on rest countries data

// 1.Get all the countries from Asia continent /region using Filter function

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);

    var asiaContinent = data.filter((ele) =>{
        return ele.region == "Asia" ;
    })
    .map((ele)=>{
        return `name : ${ele.name} , region : ${ele.region} `
    });

    console.log(asiaContinent);

};

// Output : 

// 0: "name : Afghanistan , region : Asia "
// 1: "name : Armenia , region : Asia "
// 2: "name : Azerbaijan , region : Asia "
// 3: "name : Bahrain , region : Asia "
// 4: "name : Bangladesh , region : Asia "
// 5: "name : Bhutan , region : Asia "
// 6: "name : Brunei Darussalam , region : Asia "
// 7: "name : Cambodia , region : Asia "
// 8: "name : China , region : Asia "
// 9: "name : Georgia , region : Asia "
// 10: "name : Hong Kong , region : Asia "
// 11: "name : India , region : Asia "
// 12: "name : Indonesia , region : Asia "
// 13: "name : Iran (Islamic Republic of) , region : Asia "
// 14: "name : Iraq , region : Asia "
// 15: "name : Israel , region : Asia "
// 16: "name : Japan , region : Asia "
// 17: "name : Jordan , region : Asia "
// 18: "name : Kazakhstan , region : Asia "
// 19: "name : Kuwait , region : Asia "
// 20: "name : Kyrgyzstan , region : Asia "
// 21: "name : Lao People's Democratic Republic , region : Asia "
// 22: "name : Lebanon , region : Asia "
// 23: "name : Macao , region : Asia "
// 24: "name : Malaysia , region : Asia "
// 25: "name : Maldives , region : Asia "
// 26: "name : Mongolia , region : Asia "
// 27: "name : Myanmar , region : Asia "
// 28: "name : Nepal , region : Asia "
// 29: "name : Korea (Democratic People's Republic of) , region : Asia "
// 30: "name : Oman , region : Asia "
// 31: "name : Pakistan , region : Asia "
// 32: "name : Palestine, State of , region : Asia "
// 33: "name : Philippines , region : Asia "
// 34: "name : Qatar , region : Asia "
// 35: "name : Saudi Arabia , region : Asia "
// 36: "name : Singapore , region : Asia "
// 37: "name : Korea (Republic of) , region : Asia "
// 38: "name : Sri Lanka , region : Asia "
// 39: "name : Syrian Arab Republic , region : Asia "
// 40: "name : Taiwan , region : Asia "
// 41: "name : Tajikistan , region : Asia "
// 42: "name : Thailand , region : Asia "
// 43: "name : Timor-Leste , region : Asia "
// 44: "name : Turkey , region : Asia "
// 45: "name : Turkmenistan , region : Asia "
// 46: "name : United Arab Emirates , region : Asia "
// 47: "name : Uzbekistan , region : Asia "
// 48: "name : Vietnam , region : Asia "
// 49: "name : Yemen , region : Asia "
// length: 50


// 2.Get all the countries with a population of less than 2 lakhs using Filter function

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);

    var asiaContinent = data.filter((ele) =>{
        return ele.population < 200000 ;
    })
    .map((ele)=>{
        return `name : ${ele.name} , population : ${ele.population} `;
    });

    console.log(asiaContinent);

};

// Output : 

// 0: "name : Åland Islands , population : 28875 "
// 1: "name : American Samoa , population : 55197 "
// 2: "name : Andorra , population : 77265 "
// 3: "name : Anguilla , population : 13452 "
// 4: "name : Antarctica , population : 1000 "
// 5: "name : Antigua and Barbuda , population : 97928 "
// 6: "name : Aruba , population : 106766 "
// 7: "name : Bermuda , population : 63903 "
// 8: "name : Bonaire, Sint Eustatius and Saba , population : 17408 "
// 9: "name : Bouvet Island , population : 0 "
// 10: "name : British Indian Ocean Territory , population : 3000 "
// 11: "name : United States Minor Outlying Islands , population : 300 "
// 12: "name : Virgin Islands (British) , population : 30237 "
// 13: "name : Virgin Islands (U.S.) , population : 106290 "
// 14: "name : Cayman Islands , population : 65720 "
// 15: "name : Christmas Island , population : 2072 "
// 16: "name : Cocos (Keeling) Islands , population : 550 "
// 17: "name : Cook Islands , population : 18100 "
// 18: "name : Curaçao , population : 155014 "
// 19: "name : Dominica , population : 71991 "
// 20: "name : Falkland Islands (Malvinas) , population : 2563 "
// 21: "name : Faroe Islands , population : 48865 "
// 22: "name : French Southern Territories , population : 140 "
// 23: "name : Gibraltar , population : 33691 "
// 24: "name : Greenland , population : 56367 "
// 25: "name : Grenada , population : 112519 "
// 26: "name : Guam , population : 168783 "
// 27: "name : Guernsey , population : 62999 "
// 28: "name : Heard Island and McDonald Islands , population : 0 "
// 29: "name : Vatican City , population : 451 "
// 30: "name : Isle of Man , population : 85032 "
// 31: "name : Jersey , population : 100800 "
// 32: "name : Kiribati , population : 119446 "
// 33: "name : Liechtenstein , population : 38137 "
// 34: "name : Marshall Islands , population : 59194 "
// 35: "name : Micronesia (Federated States of) , population : 115021 "
// 36: "name : Monaco , population : 39244 "
// 37: "name : Montserrat , population : 4922 "
// 38: "name : Nauru , population : 10834 "
// 39: "name : Niue , population : 1470 "
// 40: "name : Norfolk Island , population : 2302 "
// 41: "name : Northern Mariana Islands , population : 57557 "
// 42: "name : Palau , population : 18092 "
// 43: "name : Pitcairn , population : 56 "
// 44: "name : Saint Barthélemy , population : 9417 "
// 45: "name : Saint Helena, Ascension and Tristan da Cunha , population : 4255 "
// 46: "name : Saint Kitts and Nevis , population : 53192 "
// 47: "name : Saint Lucia , population : 183629 "
// 48: "name : Saint Martin (French part) , population : 38659 "
// 49: "name : Saint Pierre and Miquelon , population : 6069 "
// 50: "name : Saint Vincent and the Grenadines , population : 110947 "
// 51: "name : Samoa , population : 198410 "
// 52: "name : San Marino , population : 33938 "
// 53: "name : Seychelles , population : 98462 "
// 54: "name : Sint Maarten (Dutch part) , population : 40812 "
// 55: "name : South Georgia and the South Sandwich Islands , population : 30 "
// 56: "name : Svalbard and Jan Mayen , population : 2562 "
// 57: "name : Tokelau , population : 1411 "
// 58: "name : Tonga , population : 105697 "
// 59: "name : Turks and Caicos Islands , population : 38718 "
// 60: "name : Tuvalu , population : 11792 "
// 61: "name : Wallis and Futuna , population : 11750 "
// length: 62

// 3.Print the following details name, capital, flag using forEach function

// 4.Print the total population of countries using reduce function

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);

    var totalPopulation = data.reduce ( (previousValue, currentValue)=> {
        return previousValue + currentValue.population;
    },0);
    console.log(`TotalPopulation : ${totalPopulation}`);

};

// Output : 

// TotalPopulation : 7758589152


// 5.Print the country which uses US Dollars as currency.
