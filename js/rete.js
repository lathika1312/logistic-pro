const tamilNaduDestinations = [
    {
        heading: "Tamil Nadu",
        destinations: [
            "Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli",
            "Tirunelveli", "Kanyakumari", "Thanjavur", "Dindigul", "Vellore",
            "Tiruvallur", "Kancheepuram", "Nilgiris", "Namakkal", "Karur",
            "Sivaganga", "Pudukkottai", "Ramanathapuram", "Virudhunagar", "Thoothukudi",
            "Krishnagiri", "Dharmapuri", "Erode", "Tirupur", "Perambalur",
            "Ariyalur", "Nagapattinam", "Kallakurichi", "Tiruvannamalai", "Mayiladuthurai",
            "Thiruvarur", "Theni", "Tenkasi", "Ranipet", "Chengalpattu",
            "Villupuram", "Cuddalore"
        ]
    },
];


const cardContainer = document.getElementById("card-container");

const defaultActivePlace = "Default Destination"; 

tamilNaduDestinations.forEach(card => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    
    const heading = document.createElement("h2");
    heading.className = "way-heading";
    heading.textContent = card.heading;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "rate-btn";

    card.destinations.forEach(destination => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "destination-button";
        button.setAttribute("data-toggle", "collapse");
        button.setAttribute("aria-expanded", "false");
        button.textContent = destination;

        // Check if this destination should be the default active one
        if (destination === defaultActivePlace) {
            button.classList.add("active"); // Add active class if it matches
            // Filter data based on default active destination
            let filteredData = freightData.filter(e => e.place === destination);
            loadData(filteredData); // Load the data for the default destination
        }

        // Event listener to handle button click
        button.addEventListener("click", () => {
            console.log('Selected destination:', destination);

            // Create a shallow copy of freightData and filter based on selected destination
            let filteredData = freightData.filter(e => e.place === destination);
            console.log('Filtered data:', filteredData);
            loadData(filteredData);

            // Remove active class from all buttons within this cardWrapper
            Array.from(buttonContainer.children).forEach(btn => {
                btn.classList.remove("active"); // Remove active class from all buttons
            });
            // Add active class to the clicked button
            button.classList.add("active");
        });

        buttonContainer.appendChild(button);
    });

    cardWrapper.appendChild(heading);
    cardWrapper.appendChild(buttonContainer);
    cardContainer.appendChild(cardWrapper);
});




const freightData = [
    {
        from: "chennai",
        to: "Salem",
        ton: 16,
        date: "03-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 30000,
        place: "Chennai"
    },
    {
        from: "Chennai",
        to: "Maduari",
        ton: 15,
        date: "02-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Coimbatore"
    },
    {
        from: "Chennai",
        to: "Chennai",
        ton: 15,
        date: "29-Oct-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Coimbatore"
    },
    {
        from: "Madurai",
        to: "Chennai",
        ton: 14,
        date: "01-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 28000,
        place: "Madurai"
    },
    {
        from: "Coimbatore",
        to: "Madurai",
        ton: 12,
        date: "02-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 27000,
        place: "Coimbatore"
    },
    {
        from: "Trichy",
        to: "Chennai",
        ton: 10,
        date: "03-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 25000,
        place: "Trichy"
    },
    {
        from: "Salem",
        to: "Madurai",
        ton: 18,
        date: "03-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 32000,
        place: "Salem"
    },
    {
        from: "Kanyakumari",
        to: "Thiruvananthapuram",
        ton: 5,
        date: "04-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 20000,
        place: "Kanyakumari"
    },
    {
        from: "Vellore",
        to: "Chennai",
        ton: 8,
        date: "05-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 22000,
        place: "Vellore"
    },
    {
        from: "Tirunelveli",
        to: "Madurai",
        ton: 10,
        date: "06-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 23000,
        place: "Tirunelveli"
    },
    {
        from: "Erode",
        to: "Chennai",
        ton: 20,
        date: "03-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 31000,
        place: "Erode"
    },
    {
        from: "Thanjavur",
        to: "Coimbatore",
        ton: 13,
        date: "04-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 29000,
        place: "Thanjavur"
    },
    {
        from: "Tiruvallur",
        to: "Chennai",
        ton: 19,
        date: "05-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Tiruvallur"
    },
    {
        from: "Pudukkottai",
        to: "Madurai",
        ton: 11,
        date: "05-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 24000,
        place: "Pudukkottai"
    },
    {
        from: "Dindigul",
        to: "Chennai",
        ton: 17,
        date: "06-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 25000,
        place: "Dindigul"
    },
    {
        from: "Nagapattinam",
        to: "Chennai",
        ton: 9,
        date: "07-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 23000,
        place: "Nagapattinam"
    },
    {
        from: "Namakkal",
        to: "Salem",
        ton: 12,
        date: "08-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 27000,
        place: "Namakkal"
    },
    {
        from: "Krishnagiri",
        to: "salem",
        ton: 15,
        date: "09-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 29000,
        place: "Krishnagiri"
    },
    {
        from: "Virudhunagar",
        to: "Madurai",
        ton: 14,
        date: "10-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Virudhunagar"
    },
    {
        from: "Sivaganga",
        to: "Chennai",
        ton: 10,
        date: "11-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 24000,
        place: "Sivaganga"
    },
    {
        from: "Tiruppur",
        to: "Coimbatore",
        ton: 20,
        date: "12-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 32000,
        place: "Tiruppur"
    },
    {
        from: "Kallakurichi",
        to: "Vellore",
        ton: 14,
        date: "13-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 22000,
        place: "Kallakurichi"
    },
    {
        from: "Ariyalur",
        to: "Chennai",
        ton: 12,
        date: "14-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Ariyalur"
    },
    {
        from: "Thiruvarur",
        to: "Nagapattinam",
        ton: 10,
        date: "15-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 23000,
        place: "Thiruvarur"
    },
    {
        from: "Perambalur",
        to: "Salem",
        ton: 9,
        date: "16-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 25000,
        place: "Perambalur"
    },
    {
        from: "Dharmapuri",
        to: "Namakal",
        ton: 18,
        date: "17-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 31000,
        place: "Dharmapuri"
    },
    {
        from: "Ranipet",
        to: "Chennai",
        ton: 13,
        date: "18-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 24000,
        place: "Ranipet"
    },
    {
        from: "Tenkasi",
        to: "Madurai",
        ton: 15,
        date: "19-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 28000,
        place: "Tenkasi"
    },
    {
        from: "Kancheepuram",
        to: "Vellore",
        ton: 16,
        date: "20-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 29000,
        place: "Kancheepuram"
    },
    {
        from: "Cuddalore",
        to: "Chennai",
        ton: 17,
        date: "21-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 25000,
        place: "Cuddalore"
    },
    {
        from: "Thiruvannamalai",
        to: "Chennai",
        ton: 11,
        date: "22-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Thiruvannamalai"
    },
    {
        from: "Villupuram",
        to: "Salem",
        ton: 15,
        date: "23-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 27000,
        place: "Villupuram"
    },
    // Additional Entries for more districts
    {
        from: "Tiruvallur",
        to: "Vellore",
        ton: 8,
        date: "24-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 24000,
        place: "Tiruvallur"
    },
    {
        from: "Kanyakumari",
        to: "Madurai",
        ton: 9,
        date: "25-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 25000,
        place: "Kanyakumari"
    },
    {
        from: "Perambalur",
        to: "Coimbatore",
        ton: 10,
        date: "26-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 22000,
        place: "Perambalur"
    },
    {
        from: "Dharmapuri",
        to: "Tirupur",
        ton: 15,
        date: "27-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 26000,
        place: "Dharmapuri"
    },
    {
        from: "Ariyalur",
        to: "Erode",
        ton: 12,
        date: "28-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 28000,
        place: "Ariyalur"
    },
    {
        from: "Sivaganga",
        to: "Thiruvannamalai",
        ton: 14,
        date: "29-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 27000,
        place: "Sivaganga"
    },
    {
        from: "Thiruvarur",
        to: "Nagapattinam",
        ton: 11,
        date: "30-Nov-24",
        truckType: "32 Feet Multi Axle Truck",
        price: 24000,
        place: "Thiruvarur"
    },
];




const tableBody = document.createElement('tbody'); 


function loadData(truckData, limit) {
    const ddd = document.querySelector('tbody'); 

    // Check if the tbody exists and clear its content
    if (ddd) {
        ddd.innerHTML = ''; 
    } else {
        // If no tbody exists, create it and append to the table
        const tableBody = document.createElement('tbody');
        document.querySelector('#freightTable').appendChild(tableBody);
    }
    

    // Limit the data to the specified number of entries
    const limitedData = truckData.slice(0, limit);


    if (limitedData.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `
            <td colspan="4" style="text-align: center;">No data found</td>
        `;
        ddd.appendChild(noDataRow); 
        return; // Exit the function early
    }


    // Iterate over limitedData and create rows
    limitedData.forEach(data => {
        const row = document.createElement('tr'); // Create a new table row
        
        row.innerHTML = `
            <td>
                <div class="location-info">
                    <span class="dot green"></span> 
                    <span class="location-heading">${data.from}</span> 
                    <span class="dot red"></span> 
                    <span class="location-heading">${data.to}</span> - ${data.ton} Ton
                </div>
                <div class="details">${data.date} | ${data.truckType}</div>
            </td>
            <td></td>
            <td class="price">₹${data.price}</td>
            <td><button class="book-button">BOOK TRUCK ›</button></td>
        `;
    
        // Append the row to the table body
        document.querySelector('tbody').appendChild(row);
    });
}

function updateHeader(totalTon, averagePrice) {
    const header = document.querySelector('#freightTable thead tr');
    header.children[0].textContent = `Ton: ${totalTon}`; // Update Ton
    header.children[2].textContent = `Price`; // Keep Price header unchanged
    header.children[3].textContent = `Average: ₹${averagePrice.toFixed(2)}`; // Update Average
}

// Call the function with freightData and limit set to 10
loadData(freightData, 10);


// Append the table body to the existing table (assumed to have an id of 'freightTable')
document.querySelector('#freightTable').appendChild(tableBody);





document.addEventListener('DOMContentLoaded', function () {
    const fromBtn = document.getElementById('from-btn');
    const toBtn = document.getElementById('to-btn');
    const fromSidebar = document.getElementById('from-sidebar');
    const toSidebar = document.getElementById('to-sidebar');
    
    let selectedFrom = null; 
    let selectedTo = null;  
    // Function to open the respective sidebar
    function openFromSidebar() {
        fromSidebar.classList.add('show');
    }

    function openToSidebar() {
        toSidebar.classList.add('show');
    }

    // Add event listeners for the buttons
    fromBtn.addEventListener('click', openFromSidebar);
    toBtn.addEventListener('click', openToSidebar);

    // Add click event for the from district list items
    document.getElementById('from-district-list').addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            selectedFrom = event.target.getAttribute('data-value');
            fromBtn.textContent = selectedFrom;
            fromSidebar.classList.remove('show'); 
            
            // Update data based on selection
            updateData();
        }
    });

    // Add click event for the to district list items
    document.getElementById('to-district-list').addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            selectedTo = event.target.getAttribute('data-value');
            toBtn.textContent = selectedTo; 
            toSidebar.classList.remove('show'); 
            
            // Update data based on selection
            updateData();
        }
    });

    // Function to update the displayed data based on selected districts
    function updateData() {
        if (selectedFrom && selectedTo) {
            const filteredData = freightData.filter(data => 
                data.from === selectedFrom && data.to === selectedTo
            );
            loadData(filteredData); 
        }
    }

    // Close button functionality for From sidebar
    document.getElementById('close-from-sidebar').addEventListener('click', () => {
        fromSidebar.classList.remove('show'); 
    });

    // Close button functionality for To sidebar
    document.getElementById('close-to-sidebar').addEventListener('click', () => {
        toSidebar.classList.remove('show'); 
    });
});


