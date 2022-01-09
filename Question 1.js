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

// 3.Print the following details name, capital, flag using forEach function.

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    var cuntry = data.forEach( (ele) => {
        console.log(`name : ${ele.name} , capital : ${ele.capital} , flag : ${ele.flag}`);
    });

};

// Output : 

//   name : Afghanistan , capital : Kabul , flag : https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
//   name : Åland Islands , capital : Mariehamn , flag : https://flagcdn.com/ax.svg
//   name : Albania , capital : Tirana , flag : https://flagcdn.com/al.svg
//   name : Algeria , capital : Algiers , flag : https://flagcdn.com/dz.svg
//   name : American Samoa , capital : Pago Pago , flag : https://flagcdn.com/as.svg
//   name : Andorra , capital : Andorra la Vella , flag : https://flagcdn.com/ad.svg
//   name : Angola , capital : Luanda , flag : https://flagcdn.com/ao.svg
//   name : Anguilla , capital : The Valley , flag : https://flagcdn.com/ai.svg
//   name : Antarctica , capital : undefined , flag : https://flagcdn.com/aq.svg
//   name : Antigua and Barbuda , capital : Saint John's , flag : https://flagcdn.com/ag.svg
//   name : Argentina , capital : Buenos Aires , flag : https://flagcdn.com/ar.svg
//   name : Armenia , capital : Yerevan , flag : https://flagcdn.com/am.svg
//   name : Aruba , capital : Oranjestad , flag : https://flagcdn.com/aw.svg
//   name : Australia , capital : Canberra , flag : https://flagcdn.com/au.svg
//   name : Austria , capital : Vienna , flag : https://flagcdn.com/at.svg
//   name : Azerbaijan , capital : Baku , flag : https://flagcdn.com/az.svg
//   name : Bahamas , capital : Nassau , flag : https://flagcdn.com/bs.svg
//   name : Bahrain , capital : Manama , flag : https://flagcdn.com/bh.svg
//   name : Bangladesh , capital : Dhaka , flag : https://flagcdn.com/bd.svg
//   name : Barbados , capital : Bridgetown , flag : https://flagcdn.com/bb.svg
//   name : Belarus , capital : Minsk , flag : https://flagcdn.com/by.svg
//   name : Belgium , capital : Brussels , flag : https://flagcdn.com/be.svg
//   name : Belize , capital : Belmopan , flag : https://flagcdn.com/bz.svg
//   name : Benin , capital : Porto-Novo , flag : https://flagcdn.com/bj.svg
//   name : Bermuda , capital : Hamilton , flag : https://flagcdn.com/bm.svg
//   name : Bhutan , capital : Thimphu , flag : https://flagcdn.com/bt.svg
//   name : Bolivia (Plurinational State of) , capital : Sucre , flag : https://flagcdn.com/bo.svg
//   name : Bonaire, Sint Eustatius and Saba , capital : Kralendijk , flag : https://flagcdn.com/bq.svg
//   name : Bosnia and Herzegovina , capital : Sarajevo , flag : https://flagcdn.com/ba.svg
//   name : Botswana , capital : Gaborone , flag : https://flagcdn.com/bw.svg
//   name : Bouvet Island , capital : undefined , flag : https://flagcdn.com/bv.svg
//   name : Brazil , capital : Brasília , flag : https://flagcdn.com/br.svg
//   name : British Indian Ocean Territory , capital : Diego Garcia , flag : https://flagcdn.com/io.svg
//   name : United States Minor Outlying Islands , capital : undefined , flag : https://flagcdn.com/um.svg
//   name : Virgin Islands (British) , capital : Road Town , flag : https://flagcdn.com/vg.svg
//   name : Virgin Islands (U.S.) , capital : Charlotte Amalie , flag : https://flagcdn.com/vi.svg
//   name : Brunei Darussalam , capital : Bandar Seri Begawan , flag : https://flagcdn.com/bn.svg
//   name : Bulgaria , capital : Sofia , flag : https://flagcdn.com/bg.svg
//   name : Burkina Faso , capital : Ouagadougou , flag : https://flagcdn.com/bf.svg
//   name : Burundi , capital : Gitega , flag : https://flagcdn.com/bi.svg
//   name : Cambodia , capital : Phnom Penh , flag : https://flagcdn.com/kh.svg
//   name : Cameroon , capital : Yaoundé , flag : https://flagcdn.com/cm.svg
//   name : Canada , capital : Ottawa , flag : https://flagcdn.com/ca.svg
//   name : Cabo Verde , capital : Praia , flag : https://flagcdn.com/cv.svg
//   name : Cayman Islands , capital : George Town , flag : https://flagcdn.com/ky.svg
//   name : Central African Republic , capital : Bangui , flag : https://flagcdn.com/cf.svg
//   name : Chad , capital : N'Djamena , flag : https://flagcdn.com/td.svg
//   name : Chile , capital : Santiago , flag : https://flagcdn.com/cl.svg
//   name : China , capital : Beijing , flag : https://flagcdn.com/cn.svg
//   name : Christmas Island , capital : Flying Fish Cove , flag : https://flagcdn.com/cx.svg
//   name : Cocos (Keeling) Islands , capital : West Island , flag : https://flagcdn.com/cc.svg
//   name : Colombia , capital : Bogotá , flag : https://flagcdn.com/co.svg
//   name : Comoros , capital : Moroni , flag : https://flagcdn.com/km.svg
//   name : Congo , capital : Brazzaville , flag : https://flagcdn.com/cg.svg
//   name : Congo (Democratic Republic of the) , capital : Kinshasa , flag : https://flagcdn.com/cd.svg
//   name : Cook Islands , capital : Avarua , flag : https://flagcdn.com/ck.svg
//   name : Costa Rica , capital : San José , flag : https://flagcdn.com/cr.svg
//   name : Croatia , capital : Zagreb , flag : https://flagcdn.com/hr.svg
//   name : Cuba , capital : Havana , flag : https://flagcdn.com/cu.svg
//   name : Curaçao , capital : Willemstad , flag : https://flagcdn.com/cw.svg
//   name : Cyprus , capital : Nicosia , flag : https://flagcdn.com/cy.svg
//   name : Czech Republic , capital : Prague , flag : https://flagcdn.com/cz.svg
//   name : Denmark , capital : Copenhagen , flag : https://flagcdn.com/dk.svg
//   name : Djibouti , capital : Djibouti , flag : https://flagcdn.com/dj.svg
//   name : Dominica , capital : Roseau , flag : https://flagcdn.com/dm.svg
//   name : Dominican Republic , capital : Santo Domingo , flag : https://flagcdn.com/do.svg
//   name : Ecuador , capital : Quito , flag : https://flagcdn.com/ec.svg
//   name : Egypt , capital : Cairo , flag : https://flagcdn.com/eg.svg
//   name : El Salvador , capital : San Salvador , flag : https://flagcdn.com/sv.svg
//   name : Equatorial Guinea , capital : Malabo , flag : https://flagcdn.com/gq.svg
//   name : Eritrea , capital : Asmara , flag : https://flagcdn.com/er.svg
//   name : Estonia , capital : Tallinn , flag : https://flagcdn.com/ee.svg
//   name : Ethiopia , capital : Addis Ababa , flag : https://flagcdn.com/et.svg
//   name : Falkland Islands (Malvinas) , capital : Stanley , flag : https://flagcdn.com/fk.svg
//   name : Faroe Islands , capital : Tórshavn , flag : https://flagcdn.com/fo.svg
//   name : Fiji , capital : Suva , flag : https://flagcdn.com/fj.svg
//   name : Finland , capital : Helsinki , flag : https://flagcdn.com/fi.svg
//   name : France , capital : Paris , flag : https://flagcdn.com/fr.svg
//   name : French Guiana , capital : Cayenne , flag : https://flagcdn.com/gf.svg
//   name : French Polynesia , capital : Papeetē , flag : https://flagcdn.com/pf.svg
//   name : French Southern Territories , capital : Port-aux-Français , flag : https://flagcdn.com/tf.svg
//   name : Gabon , capital : Libreville , flag : https://flagcdn.com/ga.svg
//   name : Gambia , capital : Banjul , flag : https://flagcdn.com/gm.svg
//   name : Georgia , capital : Tbilisi , flag : https://flagcdn.com/ge.svg
//   name : Germany , capital : Berlin , flag : https://flagcdn.com/de.svg
//   name : Ghana , capital : Accra , flag : https://flagcdn.com/gh.svg
//   name : Gibraltar , capital : Gibraltar , flag : https://flagcdn.com/gi.svg
//   name : Greece , capital : Athens , flag : https://flagcdn.com/gr.svg
//   name : Greenland , capital : Nuuk , flag : https://flagcdn.com/gl.svg
//   name : Grenada , capital : St. George's , flag : https://flagcdn.com/gd.svg
//   name : Guadeloupe , capital : Basse-Terre , flag : https://flagcdn.com/gp.svg
//   name : Guam , capital : Hagåtña , flag : https://flagcdn.com/gu.svg
//   name : Guatemala , capital : Guatemala City , flag : https://flagcdn.com/gt.svg
//   name : Guernsey , capital : St. Peter Port , flag : https://flagcdn.com/gg.svg
//   name : Guinea , capital : Conakry , flag : https://flagcdn.com/gn.svg
//   name : Guinea-Bissau , capital : Bissau , flag : https://flagcdn.com/gw.svg
//   name : Guyana , capital : Georgetown , flag : https://flagcdn.com/gy.svg
//   name : Haiti , capital : Port-au-Prince , flag : https://flagcdn.com/ht.svg
//   name : Heard Island and McDonald Islands , capital : undefined , flag : https://flagcdn.com/hm.svg
//   name : Vatican City , capital : Vatican City , flag : https://flagcdn.com/va.svg
//   name : Honduras , capital : Tegucigalpa , flag : https://flagcdn.com/hn.svg
//   name : Hungary , capital : Budapest , flag : https://flagcdn.com/hu.svg
//   name : Hong Kong , capital : City of Victoria , flag : https://flagcdn.com/hk.svg
//   name : Iceland , capital : Reykjavík , flag : https://flagcdn.com/is.svg
//   name : India , capital : New Delhi , flag : https://flagcdn.com/in.svg
//   name : Indonesia , capital : Jakarta , flag : https://flagcdn.com/id.svg
//   name : Ivory Coast , capital : Yamoussoukro , flag : https://flagcdn.com/ci.svg
//   name : Iran (Islamic Republic of) , capital : Tehran , flag : https://flagcdn.com/ir.svg
//   name : Iraq , capital : Baghdad , flag : https://flagcdn.com/iq.svg
//   name : Ireland , capital : Dublin , flag : https://flagcdn.com/ie.svg
//   name : Isle of Man , capital : Douglas , flag : https://flagcdn.com/im.svg
//   name : Israel , capital : Jerusalem , flag : https://flagcdn.com/il.svg
//   name : Italy , capital : Rome , flag : https://flagcdn.com/it.svg
//   name : Jamaica , capital : Kingston , flag : https://flagcdn.com/jm.svg
//   name : Japan , capital : Tokyo , flag : https://flagcdn.com/jp.svg
//   name : Jersey , capital : Saint Helier , flag : https://flagcdn.com/je.svg
//   name : Jordan , capital : Amman , flag : https://flagcdn.com/jo.svg
//   name : Kazakhstan , capital : Nur-Sultan , flag : https://flagcdn.com/kz.svg
//   name : Kenya , capital : Nairobi , flag : https://flagcdn.com/ke.svg
//   name : Kiribati , capital : South Tarawa , flag : https://flagcdn.com/ki.svg
//   name : Kuwait , capital : Kuwait City , flag : https://flagcdn.com/kw.svg
//   name : Kyrgyzstan , capital : Bishkek , flag : https://flagcdn.com/kg.svg
//   name : Lao People's Democratic Republic , capital : Vientiane , flag : https://flagcdn.com/la.svg
//   name : Latvia , capital : Riga , flag : https://flagcdn.com/lv.svg
//   name : Lebanon , capital : Beirut , flag : https://flagcdn.com/lb.svg
//   name : Lesotho , capital : Maseru , flag : https://flagcdn.com/ls.svg
//   name : Liberia , capital : Monrovia , flag : https://flagcdn.com/lr.svg
//   name : Libya , capital : Tripoli , flag : https://flagcdn.com/ly.svg
//   name : Liechtenstein , capital : Vaduz , flag : https://flagcdn.com/li.svg
//   name : Lithuania , capital : Vilnius , flag : https://flagcdn.com/lt.svg
//   name : Luxembourg , capital : Luxembourg , flag : https://flagcdn.com/lu.svg
//   name : Macao , capital : undefined , flag : https://flagcdn.com/mo.svg
//   name : North Macedonia , capital : Skopje , flag : https://flagcdn.com/mk.svg
//   name : Madagascar , capital : Antananarivo , flag : https://flagcdn.com/mg.svg
//   name : Malawi , capital : Lilongwe , flag : https://flagcdn.com/mw.svg
//   name : Malaysia , capital : Kuala Lumpur , flag : https://flagcdn.com/my.svg
//   name : Maldives , capital : Malé , flag : https://flagcdn.com/mv.svg
//   name : Mali , capital : Bamako , flag : https://flagcdn.com/ml.svg
//   name : Malta , capital : Valletta , flag : https://flagcdn.com/mt.svg
//   name : Marshall Islands , capital : Majuro , flag : https://flagcdn.com/mh.svg
//   name : Martinique , capital : Fort-de-France , flag : https://flagcdn.com/mq.svg
//   name : Mauritania , capital : Nouakchott , flag : https://flagcdn.com/mr.svg
//   name : Mauritius , capital : Port Louis , flag : https://flagcdn.com/mu.svg
//   name : Mayotte , capital : Mamoudzou , flag : https://flagcdn.com/yt.svg
//   name : Mexico , capital : Mexico City , flag : https://flagcdn.com/mx.svg
//   name : Micronesia (Federated States of) , capital : Palikir , flag : https://flagcdn.com/fm.svg
//   name : Moldova (Republic of) , capital : Chișinău , flag : https://flagcdn.com/md.svg
//   name : Monaco , capital : Monaco , flag : https://flagcdn.com/mc.svg
//   name : Mongolia , capital : Ulan Bator , flag : https://flagcdn.com/mn.svg
//   name : Montenegro , capital : Podgorica , flag : https://flagcdn.com/me.svg
//   name : Montserrat , capital : Plymouth , flag : https://flagcdn.com/ms.svg
//   name : Morocco , capital : Rabat , flag : https://flagcdn.com/ma.svg
//   name : Mozambique , capital : Maputo , flag : https://flagcdn.com/mz.svg
//   name : Myanmar , capital : Naypyidaw , flag : https://flagcdn.com/mm.svg
//   name : Namibia , capital : Windhoek , flag : https://flagcdn.com/na.svg
//   name : Nauru , capital : Yaren , flag : https://flagcdn.com/nr.svg
//   name : Nepal , capital : Kathmandu , flag : https://flagcdn.com/np.svg
//   name : Netherlands , capital : Amsterdam , flag : https://flagcdn.com/nl.svg
//   name : New Caledonia , capital : Nouméa , flag : https://flagcdn.com/nc.svg
//   name : New Zealand , capital : Wellington , flag : https://flagcdn.com/nz.svg
//   name : Nicaragua , capital : Managua , flag : https://flagcdn.com/ni.svg
//   name : Niger , capital : Niamey , flag : https://flagcdn.com/ne.svg
//   name : Nigeria , capital : Abuja , flag : https://flagcdn.com/ng.svg
//   name : Niue , capital : Alofi , flag : https://flagcdn.com/nu.svg
//   name : Norfolk Island , capital : Kingston , flag : https://flagcdn.com/nf.svg
//   name : Korea (Democratic People's Republic of) , capital : Pyongyang , flag : https://flagcdn.com/kp.svg
//   name : Northern Mariana Islands , capital : Saipan , flag : https://flagcdn.com/mp.svg
//   name : Norway , capital : Oslo , flag : https://flagcdn.com/no.svg
//   name : Oman , capital : Muscat , flag : https://flagcdn.com/om.svg
//   name : Pakistan , capital : Islamabad , flag : https://flagcdn.com/pk.svg
//   name : Palau , capital : Ngerulmud , flag : https://flagcdn.com/pw.svg
//   name : Palestine, State of , capital : Ramallah , flag : https://flagcdn.com/ps.svg
//   name : Panama , capital : Panama City , flag : https://flagcdn.com/pa.svg
//   name : Papua New Guinea , capital : Port Moresby , flag : https://flagcdn.com/pg.svg
//   name : Paraguay , capital : Asunción , flag : https://flagcdn.com/py.svg
//   name : Peru , capital : Lima , flag : https://flagcdn.com/pe.svg
//   name : Philippines , capital : Manila , flag : https://flagcdn.com/ph.svg
//   name : Pitcairn , capital : Adamstown , flag : https://flagcdn.com/pn.svg
//   name : Poland , capital : Warsaw , flag : https://flagcdn.com/pl.svg
//   name : Portugal , capital : Lisbon , flag : https://flagcdn.com/pt.svg
//   name : Puerto Rico , capital : San Juan , flag : https://flagcdn.com/pr.svg
//   name : Qatar , capital : Doha , flag : https://flagcdn.com/qa.svg
//   name : Republic of Kosovo , capital : Pristina , flag : https://flagcdn.com/xk.svg
//   name : Réunion , capital : Saint-Denis , flag : https://flagcdn.com/re.svg
//   name : Romania , capital : Bucharest , flag : https://flagcdn.com/ro.svg
//   name : Russian Federation , capital : Moscow , flag : https://flagcdn.com/ru.svg
//   name : Rwanda , capital : Kigali , flag : https://flagcdn.com/rw.svg
//   name : Saint Barthélemy , capital : Gustavia , flag : https://flagcdn.com/bl.svg
//   name : Saint Helena, Ascension and Tristan da Cunha , capital : Jamestown , flag : https://flagcdn.com/sh.svg
//   name : Saint Kitts and Nevis , capital : Basseterre , flag : https://flagcdn.com/kn.svg
//   name : Saint Lucia , capital : Castries , flag : https://flagcdn.com/lc.svg
//   name : Saint Martin (French part) , capital : Marigot , flag : https://flagcdn.com/mf.svg
//   name : Saint Pierre and Miquelon , capital : Saint-Pierre , flag : https://flagcdn.com/pm.svg
//   name : Saint Vincent and the Grenadines , capital : Kingstown , flag : https://flagcdn.com/vc.svg
//   name : Samoa , capital : Apia , flag : https://flagcdn.com/ws.svg
//   name : San Marino , capital : City of San Marino , flag : https://flagcdn.com/sm.svg
//   name : Sao Tome and Principe , capital : São Tomé , flag : https://flagcdn.com/st.svg
//   name : Saudi Arabia , capital : Riyadh , flag : https://flagcdn.com/sa.svg
//   name : Senegal , capital : Dakar , flag : https://flagcdn.com/sn.svg
//   name : Serbia , capital : Belgrade , flag : https://flagcdn.com/rs.svg
//   name : Seychelles , capital : Victoria , flag : https://flagcdn.com/sc.svg
//   name : Sierra Leone , capital : Freetown , flag : https://flagcdn.com/sl.svg
//   name : Singapore , capital : Singapore , flag : https://flagcdn.com/sg.svg
//   name : Sint Maarten (Dutch part) , capital : Philipsburg , flag : https://flagcdn.com/sx.svg
//   name : Slovakia , capital : Bratislava , flag : https://flagcdn.com/sk.svg
//   name : Slovenia , capital : Ljubljana , flag : https://flagcdn.com/si.svg
//   name : Solomon Islands , capital : Honiara , flag : https://flagcdn.com/sb.svg
//   name : Somalia , capital : Mogadishu , flag : https://flagcdn.com/so.svg
//   name : South Africa , capital : Pretoria , flag : https://flagcdn.com/za.svg
//   name : South Georgia and the South Sandwich Islands , capital : King Edward Point , flag : https://flagcdn.com/gs.svg
//   name : Korea (Republic of) , capital : Seoul , flag : https://flagcdn.com/kr.svg
//   name : Spain , capital : Madrid , flag : https://flagcdn.com/es.svg
//   name : Sri Lanka , capital : Sri Jayawardenepura Kotte , flag : https://flagcdn.com/lk.svg
//   name : Sudan , capital : Khartoum , flag : https://flagcdn.com/sd.svg
//   name : South Sudan , capital : Juba , flag : https://flagcdn.com/ss.svg
//   name : Suriname , capital : Paramaribo , flag : https://flagcdn.com/sr.svg
//   name : Svalbard and Jan Mayen , capital : Longyearbyen , flag : https://flagcdn.com/sj.svg
//   name : Swaziland , capital : Mbabane , flag : https://flagcdn.com/sz.svg
//   name : Sweden , capital : Stockholm , flag : https://flagcdn.com/se.svg
//   name : Switzerland , capital : Bern , flag : https://flagcdn.com/ch.svg
//   name : Syrian Arab Republic , capital : Damascus , flag : https://flagcdn.com/sy.svg
//   name : Taiwan , capital : Taipei , flag : https://flagcdn.com/tw.svg
//   name : Tajikistan , capital : Dushanbe , flag : https://flagcdn.com/tj.svg
//   name : Tanzania, United Republic of , capital : Dodoma , flag : https://flagcdn.com/tz.svg
//   name : Thailand , capital : Bangkok , flag : https://flagcdn.com/th.svg
//   name : Timor-Leste , capital : Dili , flag : https://flagcdn.com/tl.svg
//   name : Togo , capital : Lomé , flag : https://flagcdn.com/tg.svg
//   name : Tokelau , capital : Fakaofo , flag : https://flagcdn.com/tk.svg
//   name : Tonga , capital : Nuku'alofa , flag : https://flagcdn.com/to.svg
//   name : Trinidad and Tobago , capital : Port of Spain , flag : https://flagcdn.com/tt.svg
//   name : Tunisia , capital : Tunis , flag : https://flagcdn.com/tn.svg
//   name : Turkey , capital : Ankara , flag : https://flagcdn.com/tr.svg
//   name : Turkmenistan , capital : Ashgabat , flag : https://flagcdn.com/tm.svg
//   name : Turks and Caicos Islands , capital : Cockburn Town , flag : https://flagcdn.com/tc.svg
//   name : Tuvalu , capital : Funafuti , flag : https://flagcdn.com/tv.svg
//   name : Uganda , capital : Kampala , flag : https://flagcdn.com/ug.svg
//   name : Ukraine , capital : Kyiv , flag : https://flagcdn.com/ua.svg
//   name : United Arab Emirates , capital : Abu Dhabi , flag : https://flagcdn.com/ae.svg
//   name : United Kingdom of Great Britain and Northern Ireland , capital : London , flag : https://flagcdn.com/gb.svg
//   name : United States of America , capital : Washington, D.C. , flag : https://flagcdn.com/us.svg
//   name : Uruguay , capital : Montevideo , flag : https://flagcdn.com/uy.svg
//   name : Uzbekistan , capital : Tashkent , flag : https://flagcdn.com/uz.svg
//   name : Vanuatu , capital : Port Vila , flag : https://flagcdn.com/vu.svg
//   name : Venezuela (Bolivarian Republic of) , capital : Caracas , flag : https://flagcdn.com/ve.svg
//   name : Vietnam , capital : Hanoi , flag : https://flagcdn.com/vn.svg
//   name : Wallis and Futuna , capital : Mata-Utu , flag : https://flagcdn.com/wf.svg
//   name : Western Sahara , capital : El Aaiún , flag : https://flagcdn.com/eh.svg
//   name : Yemen , capital : Sana'a , flag : https://flagcdn.com/ye.svg
//   name : Zambia , capital : Lusaka , flag : https://flagcdn.com/zm.svg
//   name : Zimbabwe , capital : Harare , flag : https://flagcdn.com/zw.svg



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

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all',true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    var UScurrencies = data.filter((ele)=>{
        for (const i in ele.currencies) {
            if (ele.currencies[i].code == "USD") {
                return i ;
                
            }
        }
    })
    .map((ele) => {
        return `Cuntry uses USDollars : ${ele.name}`;
    });

    console.log(UScurrencies);

};

// Output : 
// 0: "Cuntry uses USDollars : American Samoa ,"
// 1: "Cuntry uses USDollars : Bonaire, Sint Eustatius and Saba ,"
// 2: "Cuntry uses USDollars : British Indian Ocean Territory ,"
// 3: "Cuntry uses USDollars : Virgin Islands (British) ,"
// 4: "Cuntry uses USDollars : Virgin Islands (U.S.) ,"
// 5: "Cuntry uses USDollars : Cambodia ,"
// 6: "Cuntry uses USDollars : Ecuador ,"
// 7: "Cuntry uses USDollars : El Salvador ,"
// 8: "Cuntry uses USDollars : Guam ,"
// 9: "Cuntry uses USDollars : Marshall Islands ,"
// 10: "Cuntry uses USDollars : Micronesia (Federated States of) ,"
// 11: "Cuntry uses USDollars : Northern Mariana Islands ,"
// 12: "Cuntry uses USDollars : Palau ,"
// 13: "Cuntry uses USDollars : Panama ,"
// 14: "Cuntry uses USDollars : Puerto Rico ,"
// 15: "Cuntry uses USDollars : Turks and Caicos Islands ,"
// 16: "Cuntry uses USDollars : United States of America ,"
// length: 17
