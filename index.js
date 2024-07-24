const countryPhoneLengths = [
  { country: "Afghanistan", code: "93", countryCode: "AF", length: 9 },
  { country: "Albania", code: "355", countryCode: "AL", length: 9 },
  { country: "Algeria", code: "213", countryCode: "DZ", length: 9 },
  { country: "Andorra", code: "376", countryCode: "AD", length: 6 },
  { country: "Angola", code: "244", countryCode: "AO", length: 9 },
  { country: "Argentina", code: "54", countryCode: "AR", length: 10 },
  { country: "Armenia", code: "374", countryCode: "AM", length: 8 },
  { country: "Australia", code: "61", countryCode: "AU", length: 9 },
  { country: "Austria", code: "43", countryCode: "AT", length: 10 },
  { country: "Azerbaijan", code: "994", countryCode: "AZ", length: 9 },
  { country: "Bahrain", code: "973", countryCode: "BH", length: 8 },
  { country: "Bangladesh", code: "880", countryCode: "BD", length: 10 },
  { country: "Belarus", code: "375", countryCode: "BY", length: 9 },
  { country: "Belgium", code: "32", countryCode: "BE", length: 9 },
  { country: "Belize", code: "501", countryCode: "BZ", length: 7 },
  { country: "Benin", code: "229", countryCode: "BJ", length: 8 },
  { country: "Bhutan", code: "975", countryCode: "BT", length: 8 },
  { country: "Bolivia", code: "591", countryCode: "BO", length: 8 },
  {
    country: "Bosnia and Herzegovina",
    code: "387",
    countryCode: "BA",
    length: 8,
  },
  { country: "Botswana", code: "267", countryCode: "BW", length: 7 },
  { country: "Brazil", code: "55", countryCode: "BR", length: 11 },
  { country: "Brunei", code: "673", countryCode: "BN", length: 7 },
  { country: "Bulgaria", code: "359", countryCode: "BG", length: 9 },
  { country: "Burkina Faso", code: "226", countryCode: "BF", length: 8 },
  { country: "Burundi", code: "257", countryCode: "BI", length: 8 },
  { country: "Cambodia", code: "855", countryCode: "KH", length: 9 },
  { country: "Cameroon", code: "237", countryCode: "CM", length: 9 },
  { country: "Canada", code: "1", countryCode: "CA", length: 10 },
  { country: "Cape Verde", code: "238", countryCode: "CV", length: 7 },
  {
    country: "Central African Republic",
    code: "236",
    countryCode: "CF",
    length: 8,
  },
  { country: "Chad", code: "235", countryCode: "TD", length: 8 },
  { country: "Chile", code: "56", countryCode: "CL", length: 9 },
  { country: "China", code: "86", countryCode: "CN", length: 11 },
  { country: "Colombia", code: "57", countryCode: "CO", length: 10 },
  { country: "Comoros", code: "269", countryCode: "KM", length: 7 },
  { country: "Congo (Kinshasa)", code: "243", countryCode: "CD", length: 9 },
  { country: "Congo (Brazzaville)", code: "242", countryCode: "CG", length: 9 },
  { country: "Costa Rica", code: "506", countryCode: "CR", length: 8 },
  { country: "Croatia", code: "385", countryCode: "HR", length: 9 },
  { country: "Cuba", code: "53", countryCode: "CU", length: 8 },
  { country: "Cyprus", code: "357", countryCode: "CY", length: 8 },
  { country: "Czech Republic", code: "420", countryCode: "CZ", length: 9 },
  { country: "Denmark", code: "45", countryCode: "DK", length: 8 },
  { country: "Djibouti", code: "253", countryCode: "DJ", length: 6 },
  { country: "Dominica", code: "1-767", countryCode: "DM", length: 7 },
  {
    country: "Dominican Republic",
    code: "1-809",
    countryCode: "DO",
    length: 10,
  },
  { country: "Ecuador", code: "593", countryCode: "EC", length: 9 },
  { country: "Egypt", code: "20", countryCode: "EG", length: 10 },
  { country: "El Salvador", code: "503", countryCode: "SV", length: 8 },
  { country: "Equatorial Guinea", code: "240", countryCode: "GQ", length: 9 },
  { country: "Eritrea", code: "291", countryCode: "ER", length: 7 },
  { country: "Estonia", code: "372", countryCode: "EE", length: 8 },
  { country: "Eswatini", code: "268", countryCode: "SZ", length: 7 },
  { country: "Ethiopia", code: "251", countryCode: "ET", length: 9 },
  { country: "Fiji", code: "679", countryCode: "FJ", length: 7 },
  { country: "Finland", code: "358", countryCode: "FI", length: 10 },
  { country: "France", code: "33", countryCode: "FR", length: 9 },
  { country: "Gabon", code: "241", countryCode: "GA", length: 7 },
  { country: "Gambia", code: "220", countryCode: "GM", length: 7 },
  { country: "Georgia", code: "995", countryCode: "GE", length: 9 },
  { country: "Germany", code: "49", countryCode: "DE", length: 11 },
  { country: "Ghana", code: "233", countryCode: "GH", length: 9 },
  { country: "Greece", code: "30", countryCode: "GR", length: 10 },
  { country: "Grenada", code: "1-473", countryCode: "GD", length: 7 },
  { country: "Guatemala", code: "502", countryCode: "GT", length: 8 },
  { country: "Guinea", code: "224", countryCode: "GN", length: 9 },
  { country: "Guinea-Bissau", code: "245", countryCode: "GW", length: 7 },
  { country: "Guyana", code: "592", countryCode: "GY", length: 7 },
  { country: "Haiti", code: "509", countryCode: "HT", length: 8 },
  { country: "Honduras", code: "504", countryCode: "HN", length: 8 },
  { country: "Hungary", code: "36", countryCode: "HU", length: 9 },
  { country: "Iceland", code: "354", countryCode: "IS", length: 7 },
  { country: "India", code: "91", countryCode: "IN", length: 10 },
  { country: "Indonesia", code: "62", countryCode: "ID", length: 10 },
  { country: "Iran", code: "98", countryCode: "IR", length: 10 },
  { country: "Iraq", code: "964", countryCode: "IQ", length: 10 },
  { country: "Ireland", code: "353", countryCode: "IE", length: 9 },
  { country: "Israel", code: "972", countryCode: "IL", length: 9 },
  { country: "Italy", code: "39", countryCode: "IT", length: 10 },
  { country: "Ivory Coast", code: "225", countryCode: "CI", length: 8 },
  { country: "Jamaica", code: "1-876", countryCode: "JM", length: 7 },
  { country: "Japan", code: "81", countryCode: "JP", length: 10 },
  { country: "Jordan", code: "962", countryCode: "JO", length: 9 },
  { country: "Kazakhstan", code: "7", countryCode: "KZ", length: 10 },
  { country: "Kenya", code: "254", countryCode: "KE", length: 9 },
  { country: "Kiribati", code: "686", countryCode: "KI", length: 5 },
  { country: "Kosovo", code: "383", countryCode: "XK", length: 8 },
  { country: "Kuwait", code: "965", countryCode: "KW", length: 8 },
  { country: "Kyrgyzstan", code: "996", countryCode: "KG", length: 9 },
  { country: "Laos", code: "856", countryCode: "LA", length: 9 },
  { country: "Latvia", code: "371", countryCode: "LV", length: 8 },
  { country: "Lebanon", code: "961", countryCode: "LB", length: 8 },
  { country: "Lesotho", code: "266", countryCode: "LS", length: 8 },
  { country: "Liberia", code: "231", countryCode: "LR", length: 7 },
  { country: "Libya", code: "218", countryCode: "LY", length: 9 },
  { country: "Liechtenstein", code: "423", countryCode: "LI", length: 7 },
  { country: "Lithuania", code: "370", countryCode: "LT", length: 8 },
  { country: "Luxembourg", code: "352", countryCode: "LU", length: 9 },
  { country: "Madagascar", code: "261", countryCode: "MG", length: 9 },
  { country: "Malawi", code: "265", countryCode: "MW", length: 9 },
  { country: "Malaysia", code: "60", countryCode: "MY", length: 9 },
  { country: "Maldives", code: "960", countryCode: "MV", length: 7 },
  { country: "Mali", code: "223", countryCode: "ML", length: 8 },
  { country: "Malta", code: "356", countryCode: "MT", length: 8 },
  { country: "Marshall Islands", code: "692", countryCode: "MH", length: 7 },
  { country: "Mauritania", code: "222", countryCode: "MR", length: 9 },
  { country: "Mauritius", code: "230", countryCode: "MU", length: 7 },
  { country: "Mexico", code: "52", countryCode: "MX", length: 10 },
  { country: "Micronesia", code: "691", countryCode: "FM", length: 7 },
  { country: "Moldova", code: "373", countryCode: "MD", length: 8 },
  { country: "Monaco", code: "377", countryCode: "MC", length: 8 },
  { country: "Mongolia", code: "976", countryCode: "MN", length: 8 },
  { country: "Montenegro", code: "382", countryCode: "ME", length: 8 },
  { country: "Morocco", code: "212", countryCode: "MA", length: 9 },
  { country: "Mozambique", code: "258", countryCode: "MZ", length: 9 },
  { country: "Myanmar", code: "95", countryCode: "MM", length: 8 },
  { country: "Namibia", code: "264", countryCode: "NA", length: 9 },
  { country: "Nauru", code: "674", countryCode: "NR", length: 7 },
  { country: "Nepal", code: "977", countryCode: "NP", length: 10 },
  { country: "Netherlands", code: "31", countryCode: "NL", length: 9 },
  { country: "New Zealand", code: "64", countryCode: "NZ", length: 9 },
  { country: "Nicaragua", code: "505", countryCode: "NI", length: 8 },
  { country: "Niger", code: "227", countryCode: "NE", length: 8 },
  { country: "Nigeria", code: "234", countryCode: "NG", length: 10 },
  { country: "North Macedonia", code: "389", countryCode: "MK", length: 8 },
  { country: "Norway", code: "47", countryCode: "NO", length: 8 },
  { country: "Oman", code: "968", countryCode: "OM", length: 8 },
  { country: "Pakistan", code: "92", countryCode: "PK", length: 10 },
  { country: "Palau", code: "680", countryCode: "PW", length: 7 },
  { country: "Palestine", code: "970", countryCode: "PS", length: 9 },
  { country: "Panama", code: "507", countryCode: "PA", length: 8 },
  { country: "Papua New Guinea", code: "675", countryCode: "PG", length: 7 },
  { country: "Paraguay", code: "595", countryCode: "PY", length: 9 },
  { country: "Peru", code: "51", countryCode: "PE", length: 9 },
  { country: "Philippines", code: "63", countryCode: "PH", length: 10 },
  { country: "Poland", code: "48", countryCode: "PL", length: 9 },
  { country: "Portugal", code: "351", countryCode: "PT", length: 9 },
  { country: "Qatar", code: "974", countryCode: "QA", length: 8 },
  { country: "Romania", code: "40", countryCode: "RO", length: 10 },
  { country: "Russia", code: "7", countryCode: "RU", length: 10 },
  { country: "Rwanda", code: "250", countryCode: "RW", length: 9 },
  {
    country: "Saint Kitts and Nevis",
    code: "1-869",
    countryCode: "KN",
    length: 7,
  },
  { country: "Saint Lucia", code: "1-758", countryCode: "LC", length: 7 },
  {
    country: "Saint Vincent and the Grenadines",
    code: "1-784",
    countryCode: "VC",
    length: 7,
  },
  { country: "Samoa", code: "685", countryCode: "WS", length: 7 },
  { country: "San Marino", code: "378", countryCode: "SM", length: 6 },
  {
    country: "Sao Tome and Principe",
    code: "239",
    countryCode: "ST",
    length: 7,
  },
  { country: "Saudi Arabia", code: "966", countryCode: "SA", length: 9 },
  { country: "Senegal", code: "221", countryCode: "SN", length: 9 },
  { country: "Serbia", code: "381", countryCode: "RS", length: 9 },
  { country: "Seychelles", code: "248", countryCode: "SC", length: 7 },
  { country: "Sierra Leone", code: "232", countryCode: "SL", length: 8 },
  { country: "Singapore", code: "65", countryCode: "SG", length: 8 },
  { country: "Slovakia", code: "421", countryCode: "SK", length: 9 },
  { country: "Slovenia", code: "386", countryCode: "SI", length: 9 },
  { country: "Solomon Islands", code: "677", countryCode: "SB", length: 5 },
  { country: "Somalia", code: "252", countryCode: "SO", length: 7 },
  { country: "South Africa", code: "27", countryCode: "ZA", length: 9 },
  { country: "South Korea", code: "82", countryCode: "KR", length: 10 },
  { country: "South Sudan", code: "211", countryCode: "SS", length: 9 },
  { country: "Spain", code: "34", countryCode: "ES", length: 9 },
  { country: "Sri Lanka", code: "94", countryCode: "LK", length: 9 },
  { country: "Sudan", code: "249", countryCode: "SD", length: 9 },
  { country: "Suriname", code: "597", countryCode: "SR", length: 7 },
  { country: "Sweden", code: "46", countryCode: "SE", length: 9 },
  { country: "Switzerland", code: "41", countryCode: "CH", length: 9 },
  { country: "Syria", code: "963", countryCode: "SY", length: 9 },
  { country: "Taiwan", code: "886", countryCode: "TW", length: 9 },
  { country: "Tajikistan", code: "992", countryCode: "TJ", length: 9 },
  { country: "Tanzania", code: "255", countryCode: "TZ", length: 9 },
  { country: "Thailand", code: "66", countryCode: "TH", length: 9 },
  { country: "Timor-Leste", code: "670", countryCode: "TL", length: 8 },
  { country: "Togo", code: "228", countryCode: "TG", length: 8 },
  { country: "Tonga", code: "676", countryCode: "TO", length: 5 },
  {
    country: "Trinidad and Tobago",
    code: "1-868",
    countryCode: "TT",
    length: 7,
  },
  { country: "Tunisia", code: "216", countryCode: "TN", length: 8 },
  { country: "Turkey", code: "90", countryCode: "TR", length: 10 },
  { country: "Turkmenistan", code: "993", countryCode: "TM", length: 8 },
  { country: "Tuvalu", code: "688", countryCode: "TV", length: 5 },
  { country: "Uganda", code: "256", countryCode: "UG", length: 9 },
  { country: "Ukraine", code: "380", countryCode: "UA", length: 9 },
  {
    country: "United Arab Emirates",
    code: "971",
    countryCode: "AE",
    length: 9,
  },
  { country: "United Kingdom", code: "44", countryCode: "GB", length: 10 },
  { country: "United States", code: "1", countryCode: "US", length: 10 },
  { country: "Uruguay", code: "598", countryCode: "UY", length: 9 },
  { country: "Uzbekistan", code: "998", countryCode: "UZ", length: 9 },
  { country: "Vanuatu", code: "678", countryCode: "VU", length: 5 },
  { country: "Vatican City", code: "379", countryCode: "VA", length: 6 },
  { country: "Venezuela", code: "58", countryCode: "VE", length: 10 },
  { country: "Vietnam", code: "84", countryCode: "VN", length: 9 },
  { country: "Yemen", code: "967", countryCode: "YE", length: 9 },
  { country: "Zambia", code: "260", countryCode: "ZM", length: 9 },
  { country: "Zimbabwe", code: "263", countryCode: "ZW", length: 9 },
];

const phoneNumberValidatorByPhoneCode = (phoneCode, phoneNumber) => {
  let flag = false;
  countryPhoneLengths.forEach((item) => {
    if (item.code === phoneCode.toString()) {
      if (phoneNumber.toString().length === item.length) {
        flag = true;
      }
    }
  });
  return flag;
};

const phoneNumberValidatorByCountryCode = (countryCode, phoneNumber) => {
  let flag = false;
  countryPhoneLengths.forEach((item) => {
    if (item.countryCode === countryCode.toUpperCase().trim()) {
      if (phoneNumber.toString().length === item.length) {
        flag = true;
      }
    }
  });
  return flag;
};

const getPhoneCodeByCountryCode = (countryCode) => {
  let responseObj = { success: false, phoneCode: "", message: "Not Found" };
  countryPhoneLengths.forEach((item) => {
    if (item.countryCode === countryCode.toUpperCase().trim()) {
      responseObj.success = true;
      responseObj.phoneCode = item.code;
      responseObj.message = `${item.code} is Phone Code`;
    }
  });
  return responseObj;
};

const getCountryCodeByPhoneCode = (phoneCode) => {
  let responseObj = { success: false, countryCode: "", message: "Not Found" };
  countryPhoneLengths.forEach((item) => {
    if (item.code === phoneCode.toString()) {
      responseObj.success = true;
      responseObj.countryCode = item.countryCode;
      responseObj.message = `${item.countryCode} is Country Code`;
    }
  });
  return responseObj;
};

module.exports = {
  phoneNumberValidatorByPhoneCode,
  phoneNumberValidatorByCountryCode,
  getPhoneCodeByCountryCode,
  getCountryCodeByPhoneCode
};