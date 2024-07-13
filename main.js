function displaySatelliteInfo() {
    const container = document.getElementById('earthorbitInfo');

    const title = document.createElement('h2');
    title.textContent = 'ORBIT THE EARTH';
    container.appendChild(title);

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Reporting from the NASA page, a satellite is an object that orbits or surrounds another object in space. There are two different types of satellites: namely natural and artificial satellites.As quoted by Science Learn, according to Dr. Allan McInnes, a satellite is anything that orbits around a larger object.';
    container.appendChild(paragraph1);
}

displaySatelliteInfo();

// for button 
function showalert() {
    alert('Pastikan anda sudah berlangganan!');
}

// box
// funtion declaration
function createData(name, altitude, ortype, apl,img) {
    let data = {};
    data.name = name
    data.altitude = altitude
    data.ortype = ortype
    data.apl = apl
    data.img = img
    return data
}

const data1 = createData(
    "Leo",
    "300-1500 km",
    "Low Earth Orbit",
    ["satellite communication", "Earth observation", "International Space Station (ISS)"],
    "asset/box1.png"
)

const data2 = createData(
    "HI-speed",
    22.236,
    "Geostationary Orbit",
    ["telecommunications ", "weather satellites ", "Earth observation"],
    "asset/box2.png"
)

const data3 = {
    img : "asset/box3.png",
    name: "Earth",
    orbitPeriod: 365,
    orbitType: "Orbit Period",
    atmosphere: ["nitrogen", "oxygen"],
    temperature: {
        min: -88,
        max: 58
    }

};

document.getElementById('box1').innerHTML = `
    <img src="${data1.img}" alt="${data1.name}" style="width: 100px; height: auto;">
    <h2>${data1.name}</h2>
    <p>${data1.altitude}</p>
    <p>${data1.ortype}</p>
    <p>${data1.apl[2]}</p>
`;

document.getElementById('box2').innerHTML = `
    <img src="${data2.img}" alt="${data2.name}" style="width: 100px; height: auto;">
    <h2>${data2.name}</h2>
    <p>${data2.altitude} million miles</p>
    <p>${data2.ortype}</p>
    <p>${data2.apl[1]}</p>
`;

document.getElementById('box3').innerHTML = `
    <img src="${data3.img}" alt="${data3.name}" style="width: 100px; height: auto;">
    <h2>${data3.name}</h2>
    <p>${data3.orbitPeriod} days</p>
    <p>${data3.orbitType}</p>
    <ul>
        ${data3.atmosphere.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p>${data3.temperature.min}&#176; until ${data3.temperature.max}&#176;</p>
`;

// bagian 3
function displayrapidInfo() {
    const container = document.getElementById('rapidscatinfo');

    const pre = document.createElement('h4');
    pre.textContent = 'OUR MISSION';
    container.appendChild(pre);

    const title = document.createElement('h2');
    title.textContent = 'RAPIDSCAT';
    container.appendChild(title);

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Improve weather forecasting on Earth, provide cross-calibration for all international satellites that monitor ocean winds, and improve estimates of how ocean winds change throughout the day, around the globe';
    container.appendChild(paragraph1);
    
}
displayrapidInfo();

//bagian 4 satelit
function displaySatelliteFunction() {
    const satelliteInfo = {
        title: "FUNCTION",
        description: "SATELLITE",
        details: [
            "Gives light at night.",
            "Affects the balance of sea water.",
            "Transmit television signals, cell phones, and the internet.",
            "Transmits and receives communication signals."
        ]
    };

    const container = document.getElementById('satellite-function-info');

    const titleElement = document.createElement('h4');
    titleElement.textContent = satelliteInfo.title;
    container.appendChild(titleElement);

    const subTitleElement = document.createElement('h2');
    subTitleElement.textContent = satelliteInfo.description;
    container.appendChild(subTitleElement);

    const detailsList = document.createElement('ul');
    satelliteInfo.details.forEach(detail => {
        const listItem = document.createElement('li');
        listItem.textContent = detail;
        detailsList.appendChild(listItem);
    });
    container.appendChild(detailsList);
}

displaySatelliteFunction();

