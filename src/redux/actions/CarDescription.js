import {CAR_BRAND, CAR_MODEL, CAR_VARIANT, FUEL_TYPE, REGISTER_YEAR} from "./ActionsTypes";
import axiosInstance from "../../components/api/axios";

const yearRegistration = (data) => ({
    type: REGISTER_YEAR,
    payload: data
})
const carBrand = (data) => ({
    type: CAR_BRAND,
    payload: data
})
const carModel = (data) => ({
    type: CAR_MODEL,
    payload: data
})
const carVariant = (data) => ({
    type: CAR_VARIANT,
    payload: data
})
const fuelType = (data) => ({
    type: FUEL_TYPE,
    payload: data
})



// export const carBrandInititate = (email, password) => {
//       return function(dispatch) {
//           axiosInstance.post("/api/v1/login", {
//             email,
//             password
//           })
//           .then((response) => {
//             console.log("response", response.data);
//             dispatch(carBrand(response.data))
//           })
//           .catch((error) => {
//             console.log("response", error.response);
//           })
//       }
//   }

// export const carModelInititate = (email, password) => {
//       return function(dispatch) {
//           axiosInstance.post("/api/v1/login", {
//             email,
//             password
//           })
//           .then((response) => {
//             console.log("response", response.data);
//             dispatch(carModel(response.data));
//           })
//           .catch((error) => {
//             console.log("response", error.response);
//           })
//       }
//   }

// export const carVariantInititate = (email, password) => {
//       return function(dispatch) {
//           axiosInstance.post("/api/v1/login", {
//             email,
//             password
//           })
//           .then((response) => {
//             console.log("response", response.data);
//             dispatch(carVariant(response.data));
//           })
//           .catch((error) => {
//             console.log("response", error.response);
//           })
//       }
//   }