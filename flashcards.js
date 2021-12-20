let europeBtn = document.getElementById("europe");
let asiaBtn = document.getElementById("asia");
let africaBtn = document.getElementById("africa");
let northAmeBtn = document.getElementById("north-america");
let southAmeBtn = document.getElementById("south-america");
let australiaBtn = document.getElementById("australia");
let worldBtn = document.getElementById("whole-world");
let europeCountries = ["Poland", "Germany","France","Portugal","Slovenia","Italy","Albania","Greece","Denmark","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Estonia","Faroe Islands","Finland","Gibraltar","Hungary","Iceland","Ireland","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Romania","Russia","San Marino","Serbia","Slovakia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican"];
let europeCapitals = ["Warsaw", "Berlin", "Paris","Lisbon","Ljubljana","Rome","Tirana","Athens","Copenhagen","Andorra la Vella","Vienna","Minsk","Brussels","Sarajevo","Sofia","Zagreb","Nicosia","Prague","Tallin","Torshavn","Helsinki","Gibraltar","Budapest","Reykjavik","Dublin","Pristina","Riga","Vaduz","Vilnius","Luxembourg","Valletta","Chisinau","Monaco","Podgorica","Amsterdam","Skopje","Oslo","Bucharest","Moscow","San Marino","Belgrade","Bratislava","Madrid","Stockholm","Bern","Ankara","Kyiv","London","Vatican"];
let asiaCountries = ["China", "Pakistan", "Philippines","Malaysia","Vietnam", "Iraq","Qatar","Cambodia","North Korea","Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","East Timor","Georgia","Guam","India","Indonesia","Iran","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Mongolia","Myanmar","Nepal","Oman","Palau","Palestine","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Turkmenistan","United Araba Emirates","Uzbekistan","Yemen"];
let asiaCapitals = ["Beijing", "Islamabad", "Manila", "Kuala Lumpur", "Hanoi", "Baghdad", "Doha","Phnom Penh", "Pyongyang","Kabul","Yerevan","Baku","Manama","Dhaka","Thimphu","Bandar Seri Begawan","Dili","Tbilisi","Hagatna","New Dehli","Jakarta","Tehran","Jerusalem","Tokyo","Amman","Nur-Sultan","Kuwait City","Bishkek","Vientiane","Beirut","Ulaanbaatar","Naypyidaw","Kathmandu","Muscat","Ngerulmud","Ramallah","Riyadh","Singapore","Seoul","Colombo","Damascus","Taipei","Dushanbe","Bangkok","Ashgabat","Abu Dhabi","Tashkent","Aden"];
let africaCountries = ["Angola", "Nigeria", "Ghana", "Ivory Coast", "Congo", "Tanzania", "Zimbabwe","Sudan", "Uganda","Algeria","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Cape Verde","Central African Republic","Chad","Comoros","Djibouti","DR Congo","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Nambia","Niger","Rwanda","Sao Tome And Principe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Gambia","Togo","Tunisia","Western Sahara","Zambia"];
let africaCapitals = ["Luanda","Abuja","Accra", "Yamoussoukro","Brazzaville","Dodoma","Harare","Khartoum","Kampala","Algiers","Porto-Novo","Gaborone","Ouagadougou","Bujumbura","Yaounde","Praia","Bangui","N'Djamena","Moroni","Djibouti","Kinshasa","Cairo","Malabo","Asmara","Lobamba","Addis Ababa","Libreville","Conakry","Bissau","Nairobi","Maseru","Monrovia","Tripoli","Antananarivo","Lilongwe","Bamako","Nouakchott","Port Louis","Rabat","Maputo","Windhoek","Niamey","kigali","Sao Tome","Dakar","Victoria","Freetown","Mogadishu"," Cape Town, Pretoria, Bloemfontein","Juba","Khartoum","Dar es Salaam","Banjul","Lome","Tunis","Tifariti","Lusaka"];
let northAmericaCountries = ["Antigua and Barbuda","Aruba","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba","Dominica","El Salvador","Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Puerto Rico","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States"];
let northAmericaCapitals = ["St. John's","Oranjestad","Nassau","Bridgetown","Belmopan","Ottawa","San Jose","Havana","Roseau","San Salvador","St. George's","Guatemala City","Port au Prince","Tegucigalpa","Kingston","Mexico City","Managua","Panama City","San Juan","Basseterre","Castries","Kingstown","Port of Spain","Washington"];
let southAmericaCountries = ["Argentina","Bolivia","Brazil","Chile","Columbia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"];
let southAmericaCapitals = ["Buenos Aires","La Paz","Brasilia","Santiago","Bogota","Quito","Georgetown","Asuncion","Lima","Paramaribo","Montevideo","Caracas"];
let australiaCountries = ["Australia","Cook Islands","Fiji","Kiribati","Nauru","New Caledonia","New Zealand","Papua New Guinea","Saint Helena","Samoa","Solomon Islands","Tonga","Tuvalu","Vanuatu"];
let australiaCapitals = ["Canberra","Avarua","Suva","South Tarawa","Yaren","Noumea","Wellington","Port Moresby","Jamestown","Apia","Honiara","Nuku'alofa","Funafuti","Port Vila"];
let worldCountries = europeCountries.concat(asiaCountries, africaCountries, northAmericaCountries, southAmericaCountries, australiaCountries);
let worldCapitals = europeCapitals.concat(asiaCapitals, africaCapitals, northAmericaCapitals, southAmericaCapitals, australiaCapitals);
//let numberOfCountries = countryList.length();
console.log(worldCountries.length);
console.log(worldCapitals.length);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

europeBtn.addEventListener('click', function () {
    for (let i = 1; i <= 9; i++) {
        let a = getRandomInt(0, europeCountries.length);
        document.getElementById("country" + i).textContent = europeCountries[a];
        document.getElementById("capital" + i).textContent = europeCapitals[a];
    }
    document.querySelector("h1").textContent = "Europa Capitals";
});
asiaBtn.addEventListener('click', function (){
    for (let j=1; j<=9; j++) {
        let a =getRandomInt(0, europeCountries.length);
        document.getElementById("country"+j).textContent = asiaCountries[a];
        document.getElementById("capital"+j).textContent = asiaCapitals[a];
    }
    document.querySelector("h1").textContent = "Asia Capitals";
});

africaBtn.addEventListener('click', function (){
    for (let k=1; k<=9; k++) {
        let a =getRandomInt(0, africaCountries.length);
        document.getElementById("country"+k).textContent = africaCountries[a];
        document.getElementById("capital"+k).textContent = africaCapitals[a];
    }
    document.querySelector("h1").textContent = "Africa Capitals";
});
northAmeBtn.addEventListener('click', function (){
    for (let k=1; k<=9; k++) {
        let a =getRandomInt(0, northAmericaCountries.length);
        document.getElementById("country"+k).textContent = northAmericaCountries[a];
        document.getElementById("capital"+k).textContent = northAmericaCapitals[a];
    }
    document.querySelector("h1").textContent = "North America Capitals";
});
southAmeBtn.addEventListener('click', function (){
    for (let k=1; k<=9; k++) {
        let a =getRandomInt(0, southAmericaCountries.length);
        document.getElementById("country"+k).textContent = southAmericaCountries[a];
        document.getElementById("capital"+k).textContent = southAmericaCapitals[a];
    }
    document.querySelector("h1").textContent = "South America Capitals";
});

australiaBtn.addEventListener('click', function (){
    for (let k=1; k<=9; k++) {
        let a =getRandomInt(0, australiaCountries.length);
        document.getElementById("country"+k).textContent = australiaCountries[a];
        document.getElementById("capital"+k).textContent = australiaCapitals[a];
    }
    document.querySelector("h1").textContent = "Oceania Capitals";
});

worldBtn.addEventListener('click', function (){
    for (let k=1; k<=9; k++) {
        let a =getRandomInt(0, worldCountries.length);
        document.getElementById("country"+k).textContent = worldCountries[a];
        document.getElementById("capital"+k).textContent = worldCapitals[a];
    }
    document.querySelector("h1").textContent = "World Capitals";
});