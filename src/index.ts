import {Company} from "./Company";
import {User} from "./User";

const user = new User()
const company = new Company()

new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
})

console.log(user)
console.log(company)
