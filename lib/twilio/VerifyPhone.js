//09071816392
const COUNTRY_CODE = '234';

const authy = require('authy')(process.env.TWILIO_API_KEY);
//const authy = require('authy')(API_KEY, 'http://sandbox-api.authy.com');

module.exports.sendCode = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    authy.phones().verification_start(phoneNumber, COUNTRY_CODE, 'sms', function(err, res) {
      if(err)
        reject(err);
      resolve(res);
    })
  })
}

module.exports.verifyCode = (phoneNumber, code)=> {
  return new Promise((resolve, reject) => {
    authy.phones().verification_check(phoneNumber, COUNTRY_CODE, code, function (err, res) {
      if(err)
        reject(err);
      resolve(res);
    });
  })
}
