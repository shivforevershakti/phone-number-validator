# phone-number-validator
This package will help developer for the phone number validation on the basis of country.
This package containst four exported functions

1. phoneNumberValidatorByPhoneCode : This function contains two required arguments , first argument is phoneCode and second argument is phoneNumber , and in result it will return true if number is valid.


2. phoneNumberValidatorByCountryCode : This function contains two required arguments , first argument is countryCode and second argument is phoneNumber , and in result it will return true if number is valid.

3. getPhoneCodeByCountryCode : This function contains one required arguments which is countryCode, and in result it will return an Object having three keys , Success , phoneCode , message.


4. getCountryCodeByPhoneCode : This function contains one required arguments which is phoneCode, and in result it will return an Object having three keys , Success , countryCode , message.
