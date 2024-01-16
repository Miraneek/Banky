let buildings = {
    "banks": [
        {
            "name": "Bank of Springfield",
            "location": "123 Main St, Springfield, IL",
            "overall_score": 85,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%",
            "numberOfClients": 4500
        },
        {
            "name": "Capital City Bank",
            "location": "456 Elm St, Capital City, CA",
            "overall_score": 40,
            "opening_hours": "8:30 AM - 4:30 PM",
            "loan_interest_rate": "4.0%",
            "numberOfClients": 5000
        },
        {
            "name": "Metro Financial",
            "location": "789 Oak St, Metroville, NY",
            "overall_score": 25,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "3.75%",
            "numberOfClients": 6900
        },
        {
            "name": "Riverside Savings & Loan",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 81,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%",
            "numberOfClients": 4200
        },
        {
            "name": "Bank of New York",
            "location": "222 Main St, New York, NY",
            "overall_score": 80,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "4.5%",
            "numberOfClients": 5500
        },
        {
            "name": "Bank of California",
            "location": "333 Main St, California, CA",
            "overall_score": 70,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "4.0%",
            "numberOfClients": 6000
        },
        {
            "name": "Bank of Chicago",
            "location": "444 Main St, Chicago, IL",
            "overall_score": 60,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%",
            "numberOfClients": 4500
        },
        {
            "name": "Bank of Denver",
            "location": "555 Main St, Denver, CO",
            "overall_score": 50,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.0%",
            "numberOfClients": 5000
        },
        {
            "name": "Bank of Phoenix",
            "location": "666 Main St, Phoenix, AZ",
            "overall_score": 40,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "2.5%",
            "numberOfClients": 5500
        },
        {
            "name": "Sunrise Credit Union",
            "location": "777 Sunrise Ave, Sunrise City, FL",
            "overall_score": 65,
            "opening_hours": "8:00 AM - 6:00 PM",
            "loan_interest_rate": "3.8%",
            "numberOfClients": 4800
        },
        {
            "name": "Pacific Coast Savings",
            "location": "888 Beach Blvd, Pacific Town, CA",
            "overall_score": 75,
            "opening_hours": "9:30 AM - 4:30 PM",
            "loan_interest_rate": "4.2%",
            "numberOfClients": 5200
        },
        {
            "name": "Mountain View Bank",
            "location": "999 Summit Dr, Mountain City, CO",
            "overall_score": 55,
            "opening_hours": "10:00 AM - 5:00 PM",
            "loan_interest_rate": "3.2%",
            "numberOfClients": 4300
        },
        {
            "name": "Lakefront Financial",
            "location": "111 Lakeside Ave, Lakeville, NY",
            "overall_score": 68,
            "opening_hours": "9:00 AM - 6:30 PM",
            "loan_interest_rate": "3.9%",
            "numberOfClients": 6100
        },
        {
            "name": "Golden State Bank",
            "location": "123 Gold St, Golden City, CA",
            "overall_score": 72,
            "opening_hours": "8:30 AM - 5:30 PM",
            "loan_interest_rate": "4.1%",
            "numberOfClients": 5800
        }
    ]
}

let likes = document.querySelector(".likes span")

renderBanks(buildings.banks)

function renderBanks(bankss){
    document.querySelector("#banks").innerHTML = ""
    bankss.forEach(function (bank) {
        let bankCard = document.createElement('div');
        bankCard.className = "bank-card";
        bankCard.id = bank.name;

        let bankName = document.createElement('h4');
        bankName.textContent = bank.name;

        let bankClients = document.createElement("h3");
        bankClients.textContent = "Clients: " + bank.numberOfClients;

        let bankInfo = document.createElement("p");

        let spanOpeningHours = document.createElement("span");
        spanOpeningHours.textContent = "Opening Hours: " + bank.opening_hours;
        bankInfo.appendChild(spanOpeningHours)

        let spanLocation = document.createElement("span");
        spanLocation.textContent = "Location: " + bank.location
        bankInfo.appendChild(spanLocation)

        let spanScore = document.createElement("span");
        spanScore.textContent = "Score: " + bank.overall_score
        spanScore.className = "score";
        bankInfo.appendChild(spanScore)

        let spanLone = document.createElement("span")
        spanLone.textContent = "Loan Interest Rate: " + bank.loan_interest_rate
        bankInfo.appendChild(spanLone)

        let bankButton = document.createElement("button");
        bankButton.textContent = "Favourite";

        if (bank.overall_score < 30){
            bankCard.classList.add("blue")
        } else if (bank.overall_score < 55){
            bankCard.classList.add("yellow")
        } else {
            bankCard.classList.add("green")
        }
        
        bankButton.addEventListener("click", () => {
            if (bankCard.classList.contains("favourite")) {
                bankCard.classList.remove("favourite")
                likes.textContent = (parseInt(likes.textContent) - 1).toString()
            } else {
                bankCard.classList.add("favourite")
                likes.textContent = (parseInt(likes.textContent) + 1).toString()
            }
        })

        bankCard.appendChild(bankName)
        bankCard.appendChild(bankClients)
        bankCard.appendChild(bankInfo)
        bankCard.appendChild(bankButton)
        document.querySelector("#banks").appendChild(bankCard)
    })
}

function search() {
    let searchValue = document.getElementById("search").value
    let filtered = buildings.banks.filter(function (bank) {
        return bank.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    
    renderBanks(filtered)
}


let searchInput = document.getElementById("search")

searchInput.addEventListener("input", search)

document.querySelector(".likes button").addEventListener("click", () => {
    let heart = document.querySelector("#heart")
    
    if (heart.style.fill === "red") {
        heart.style.fill = "none"
        document.querySelector(".favourites").remove()
    } else{
        heart.style.fill = "red"
        let favBanksHtml = document.querySelectorAll(".favourite");
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText = "Favourite Banks";
        div.appendChild(h2);

        let banks = document.createElement("div");

        favBanksHtml.forEach((bank) => {
            let clonedBank = bank.cloneNode(true); // true to clone all child nodes as well
            banks.appendChild(clonedBank);
        });

        
        banks.classList.add("favBanks")
        div.appendChild(banks)
        
        div.classList.add("favourites")
        
        document.querySelector("#result").appendChild(div)
    }
    
})