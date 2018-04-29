/**
* FUNCTIONS
*/
export const toCamelCase = (s) => s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

export const convertState = (stateName) => {
  if (stateName === 'Akwa Ibom') {
    return 'AkwaIbom'
  } else if (stateName === 'Cross River') {
    return 'CrossRiver'
  } else if (stateName === 'FCT - Abuja') {
    return 'FCTAbuja'
  } else if (stateName === 'AkwaIbom') {
    return 'Akwa Ibom'
  } else if (stateName === 'CrossRiver') {
    return 'Cross River'
  } else if (stateName === 'FCTAbuja') {
    return 'FCT - Abuja'
  } else {
    return stateName
  }
};

/* * REGEX */
export const PHONE_REGEX = new RegExp("^[0][0-9]\\d{9}$");
export const NOT_PASSWORD_REGEX = new RegExp("^(.{0,7}|[^0-9]*|[^a-z]*)$");
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
* CONSTANTS
*/
let year = new Date().getFullYear();
var years = [];
for (var i = 0; i < 65; i++) {
  years.push(year);
  year = year - 1;
}
export const YEARS = years

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const STATES = [
  "Abia",
  "Adamawa",
  "Anambra",
  "Akwa Ibom",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Enugu",
  "Edo",
  "Ekiti",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
]
