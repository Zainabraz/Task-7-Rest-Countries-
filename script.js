
document.querySelector("body").innerHTML = `<div class="container">
<div class="countryBlock"></div>
</div>`;

let searchBtn = document.querySelector("#searchBtn");
let countryInp = document.querySelector("#countryInp");
let allcountryName = [];
async function country() {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);

        const data = await response.json();
        // console.log(data);
        let y = document.querySelector(".countryBlock");

        const newArr = data.map((k, v) => {
            allcountryName.push(k.name.common);
            // const currencyArray = Object.keys(k?.currencies)[0] ? Object.keys(k?.currencies)[0] : "" ;
            // console.log(currencyArray);
            // let currencyArray;
            if (k.currencies != undefined) {
                currencyArray = `${Object.keys(k.currencies)[0]},${Object.values(k.currencies)[0].name},${Object.values(k.currencies)[0].symbol}`;
                console.log(currencyArray);
            } else {
                currencyArray = "No currency";
            }
            y.innerHTML += `<div class="countryCard" id="countryCard${v+1}">
            <div id="countryName">${k.name.common}</div>
            <img src="${k.flags.png}" id="flag" alt="">
            <div id="capital">Capital: <span class="focus">${k.capital}</span></div>
            <div id="region">Region: <span class="focus">${k.region}</span></div>
            <div id="currency">Currency: <span class="focus">${currencyArray}</span></div>
            <div id="latLong">Lat, Long: <span class="focus">${k.latlng}</span></div>
        </div>`;
        // <div id="currency">Currency: <span class="focus">${Object.keys(k.currencies)[0]},${Object.values(k.currencies)[0].name},${Object.values(k.currencies)[0].symbol}</span></div>

        //<div id="currency">Currency: <span class="focus">${Object.keys(k.currencies)[0]}, ${k.currencies[Object.keys(k.currencies)[0]]?.name ? k.currencies[Object.keys(k.currencies)[0]]?.name:""}</span></div>
            // console.log(k,v);


        });
        console.log("Hi");
    } catch (error) {
        console.log(error);
    }
}

// countryInp.addEventListener("input", (e)=> {
//     let searchCountry = e.target.value.toLowerCase().trim();
//     let arrCountryname = Array.from(document.querySelectorAll("#countryName"));
//     arrCountryname.forEach(country =>{
//         let countryNameonly = country.innerHTML;
//         countryNameonly.includes(searchCountry);
//        console.log(countryNameonly.includes(searchCountry));
        
//     });
//     // console.log(arrCountryname.includes(searchCountry));
//     // const arrCountryname = arrCountryname.push.data.name.common;
// })

country();

console.log(allcountryName);

// , ${k.currencies[Object.keys(k.currencies)[0]].symbol}
// setTimeout(alert('Test'),50000);

// $("#countryInp").select2({
//     data: allcountryName,
//     multiple: true,
//   });


