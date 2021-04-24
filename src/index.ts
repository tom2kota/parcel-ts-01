import {Company} from "./Company";
import {User} from "./User";
import {CustomMap} from "./CustomMap";

const user = new User()
const company = new Company()
const customMap = new CustomMap('map')

// console.log(user)
// console.log(company)
// console.log(customMap)
customMap.addMarker(user)
customMap.addMarker(company)
