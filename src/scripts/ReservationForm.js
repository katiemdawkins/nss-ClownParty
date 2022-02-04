import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "submitReservation"){
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const usernumberOfKidGuests = document.querySelector("input[name='numberOfKidGuests']").value
        const useraddress = document.querySelector("input[name='address']").value
        const userdateOfReservation = document.querySelector("input[name='dateOfReservation']").value
        const userlengthOfReservation = document.querySelector("input[name='lengthOfReservation']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfKidGuests: usernumberOfKidGuests,
            address: useraddress,
            dateOfReservation: userdateOfReservation,
            lengthOfReservation: userlengthOfReservation
        }
        sendReservation(dataToSendToAPI) 
    }
})

export const ReservationForm =() => {
    let html = `
    <div class="field>
        <label class="label" for="parentName">Parent Name </lable>
        <input type="text" name="parentName" class="input"/>
    </div>
    <div class="field>
        <label class="label" for="childName">Child Name </lable>
        <input type="text" name="childName" class="input"/>
    </div>
    <div class="field>
        <label class="label" for="numberOfKidGuests">How many children will attend the party? </lable>
        <input type="text" name="numberOfKidGuests" class="input"/>
    </div>
    <div class="field>
        <label class="label" for="address">Address</lable>
        <input type="text" name="address" class="input"/>
    </div>
    <div class="field>
        <label class="label" for="dateOfReservation">Date of Party</lable>
        <input type="date" name="dateOfReservation" class="input"/>
    </div>
    <div class="field>
        <label class="label" for="lengthOfReservation">Length of Reservation in Hours</lable>
        <input type="number" name="lengthOfReservation" class="input"/>
    </div>

    <button class="button" id="submitReservation">Submit Reservation</button>
   
    `
    return html
}
