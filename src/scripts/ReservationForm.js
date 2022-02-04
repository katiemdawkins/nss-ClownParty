
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
        <input type="text" name="dateOfReservation" class="input"/>
    </div>
    <div class="field>
        <label class="label" for="lengthOfReservation">Length of Reservation in Hours</lable>
        <input type="text" name="lengthOfReservation" class="input"/>
    </div>
   
    `
    return html
}