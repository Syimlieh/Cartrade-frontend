import {CAR_BRAND, CAR_MODEL, CAR_VARIANT, FUEL_TYPE, REGISTER_YEAR} from "../actions/ActionsTypes";

const initialState = {
    registerYear: [new Date().getFullYear()],
    carBrand: ["audi", "mercedes", "Lambo"],
    carModel: ["1", "2", "3"],
    carVariant: ["X", "Y", "Z"],
    fuelType: ["Petrol", "Diesel"]
}

const carInfo = (state = initialState, {type, payload}) => {
    switch (type) {
        case REGISTER_YEAR:
            return {
                ...state,
                carBrand: payload
            }
        case CAR_BRAND:
            return {
                ...state,
                carBrand: payload
            }
        case CAR_MODEL:
            return {
                ...state,
                carModel: payload
            }
        case CAR_VARIANT:
            return {
                ...state,
                carVariant: payload
            }
        case FUEL_TYPE:
            return {
                ...state,
                fuelType: payload
            }
        default:
            return {
                ...state
            }
            break;
    }
}

export default carInfo;