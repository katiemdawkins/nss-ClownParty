import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

// this eventListener listens for the click event of the Submit Reservation Button
//it saves the values of all the reservation data 
mainContainer.addEventListener("click", clickEvent =>{
    //when the user clicks button with id of submitReservation
    if(clickEvent.target.id === "submitReservation"){
        //declare a variable that holds the value of each input field on the form
        // the .querySelector method is looking to the input name for the value the user input
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumberOfKidGuests = document.querySelector("input[name='numberOfKidGuests']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDateOfReservation = document.querySelector("input[name='dateOfReservation']").value
        const userLengthOfReservation = document.querySelector("input[name='lengthOfReservation']").value

        //delcare a variable that holds the reservation object with 
        //user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfKidGuests: userNumberOfKidGuests,
            address: userAddress,
            dateOfReservation: userDateOfReservation,
            lengthOfReservation: userLengthOfReservation
        }
        //invoke the sendReservation function with an argument of the
        //reservation object- dataToSendToAPI
        sendReservation(dataToSendToAPI) 
    }
})

//this function creates the HTML input fields for my reservations form
//using string interpolation
//bc this function renders HTML we capitalize it
export const ReservationForm =() => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent Name</lable>
        <input type="text" name="parentName" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</lable>
        <input type="text" name="childName" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="numberOfKidGuests">How many children will attend the party?</lable>
        <input type="text" name="numberOfKidGuests" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="address">Address</lable>
        <input type="text" name="address" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="dateOfReservation">Date of Party</lable>
        <input type="date" name="dateOfReservation" class="input"/>
    </div>
    <div class="field">
        <label class="label" for="lengthOfReservation">Length of Reservation in Hours</lable>
        <input type="number" name="lengthOfReservation" class="input"/>
    </div>
    
    <button class="button" id="submitReservation">Submit Reservation</button>
    `
    return html
}
