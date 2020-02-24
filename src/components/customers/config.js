import TextBold from "../../common/text-bold";
import Name from "./components/name";

export const STATE_KEY = "customers";

export const columns = [
  {
    name: "Customer Id",
    field: "customerId",
    headerComponent: TextBold
  },
  {
    name: "Customer Name",
    field: "customerName",
    component: Name
  },
  {
    name: "Age",
    field: "age"
  },
  {
    name: "Gender",
    field: "gender"
  }
];


export const results = [
  {
    "customerId": "121",
    "customerName": {
      "firstName": "vibha",
      "lastName": "G N",
    },
    "age": "23",
    "gender": "Female",
    "addresses": [
      {
        "id": 123,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "default": true
      },
      {
        "id": 234,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "shipping": true
      },
      {
        "id": 456,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "billing": true
      }
    ]
  },
  {
    "customerId": "123",
    "customerName": {
      "firstName": "vibha",
      "lastName": "G N",
    },
    "age": "34",
    "gender": "Male",
    "addresses": [
      {
        "id": 123,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "default": true
      },
      {
        "id": 234,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "shipping": true
      },
      {
        "id": 456,
        "addressContactType": "",
        "address1": "25421 Adams Landing Rd",
        "address2": "25421 Adams Landing Rd",
        "city": "Louisville",
        "region": "Denton",
        "regionCode": "",
        "postalCode": "",
        "countryCode": "US",
        "country": "United States",
        "billing": true
      }
    ]
  }
];

