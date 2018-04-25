/**
* FUNCTIONS
*/
//Canverts string to Camel Case
export const toCamelCase = (s) => s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

//converts graphql enum to State name
export const prettifyState = (stateName) => {
  if (stateName === 'AkwaIbom') {
    return 'Akwa Ibom'
  } else if (stateName === 'CrossRiver') {
    return 'Cross River'
  } else if (stateName === 'FCTAbuja') {
    return 'FCT - Abuja'
  } else {
    return stateName
  }
};
//converts State name to graphql enum
export const enumifyState = (stateName) => {
  if (stateName === 'Akwa Ibom') {
    return 'AkwaIbom'
  } else if (stateName === 'Cross River') {
    return 'CrossRiver'
  } else if (stateName === 'FCT - Abuja') {
    return 'FCTAbuja'
  } else {
    return stateName
  }
};

//converts ISO date to yyyy-mm-dd format
export const formatDate = (date) => {
  if (!date) {
    return null;
  }
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

//removes empty values from object
export const removeEmpty = (obj) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
    else if (obj[key] == null) delete obj[key];
  });
};

/* * REGEX */
export const PHONE_REGEX = new RegExp("^[0][0-9]\\d{9}$");
export const NOT_PASSWORD_REGEX = new RegExp("^(.{0,7}|[^0-9]*|[^a-z]*)$");
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//STYLES
export const TOAST_STYLE={
  success: {
    className: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.5',
      background: "#4dbd74",
      color: "white"
    },progressClassName: {
      background: "#3a9d5d"
    }
  },
  fail:{
    className: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.5',
      background: '#f86c6b',
      color: "white"
    },progressClassName: {
      background: '#f5302e'
    }
  }
}

/**
* CONSTANTS
*/
export const CURRENT_YEAR = new Date().getFullYear();
let year = CURRENT_YEAR;
let futYears = CURRENT_YEAR + 7;
let pastYears = [];
for (let i = 0; i < 65; i++) {
  pastYears.push(year);
  year = year - 1;
}
export const PAST_YEARS = pastYears

let years = [];
for (let i = 0; i < 71; i++) {
  years.push(futYears);
  futYears = futYears - 1;
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

export const STAFF_SIZES = [
  "0 - 1",
	"2 - 10",
	"11 - 50",
	"51 - 200",
	"201 - 500",
	"501 - 1000",
	"1,001 - 5,000",
	"5,001 - 10,000",
	"10,000+"
]
