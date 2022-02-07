// this is where I'll store the external data
const applicationState = {
    reservations:[]
}

//API is where we find the external, existing data
const API = "http://localhost:8088"

//this function fetches the external, pre-existing data
export const fetchRequests = () => {
    //not clear on everything here, but I'm going to the API, looking inside rerservations
    return fetch (`${API}/reservations`)
    //using .then method to get the response from json?
        .then(response => response.json())
        //using .then method again 
        .then(
            //to store the data because we can't see it until this step
            (serviceReservations)=> {
                //my applicationState object has a reservations arry with all previously
                //made service reservations
                applicationState.reservations = serviceReservations
            }
        )
}

//this function returns a copy of the requests state
export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

//we have to define the mainContainer variable because we will 
//call to it within the funtions below
const mainContainer = document.querySelector(("#container"))

//this function uses the POST method to tell the API we are 
//Creating something new- a new reservation
//we are taking transient state user input and converting it to 
//permenant state - storing it in database.json by calling fetch
//the user Reservation Request is the paramenter
export const sendReservation =(userReservationRequest) => {
    const fetchOptions = {
        //POST = create something new, it's an HTTP request method
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //using .stringify method to convert a javascript object or value to a JSON string?
        body: JSON.stringify(userReservationRequest)
    }

    return fetch( `${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() =>{
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


//this function  initiates the fetch request for DELETE
//the primary key - id - is it's arugment
export const deleteReservation =(id) => {
    //return the data from the API/reservations w/ reservation id/primary key
    //use the DELETE method
    return fetch (`${API}/reservations/${id}`, {method: "DELETE"})
        .then(
            () => {
                //this 
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}