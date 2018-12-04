const validation = {
  /**
   * @static
   * @param {string} email
   * @description Checks if user email is defined
   * @return {boolean} boolean
   * @memberof UserValidation
   */
  isDefined(email) {
    if (!email) {
      return false;
    }
    return true;
  },

  /**
   * @static
   * @param {string} email
   * @description Checks if user email is valid
   * @return {boolean} boolean
   * @memberof UserValidation
   */
  isValid(email) {
    const checkemail = email.trim();
    // Reference => https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //
    return re.test(String(checkemail).toLowerCase());
  },

  /**
   * @static
   * @param {String} email
   * @description Checks if user email is defined and valid
   * @return {object} object
   * @memberof UserValidation
   */
  checkEmail(email) {
    if (!validation.isDefined(email)) {
      return 'Email required';
    }
    if (!validation.isValid(email)) {
      return 'Email incorrect';
    }
    return true;
  },

  /**
   * @static
   * @param {string} pwd
   * @description Checks if user chosen password is alphanumeric
   * @return {boolean} boolean
   * @memberof UserValidation
   */
  checkPasswordAlphanumeric(pwd) {
    const letter = /[a-zA-Z]/;
    const number = /[0-9]/;
    const valid = number.test(pwd) && letter.test(pwd);
    return valid;
  },

  /**
   * @static
   * @param {string} password
   * @description Checks if user chosen password's length is greater than 8
   * @return {boolean} boolean
   * @memberof UserValidation
   */
  checkPasswordLength(password) {
    return password.length >= 8;
  },

  /**
   * @static
   * @param {object} inputBody
   * @description Checks if user details are defined and are valid
   * @return {object} object
   * @memberof UserValidation
   */
  checkUserDetails(inputBody) {
    const values = inputBody;
    const required = ['firstname',
      'lastname', 'bio'
    ];
    let pass = true;
    const errors = {};
    for (let i = 0; i < required.length; i += 1) {
      if (!values[required[i]] || !values[required[i]].replace(/\s/g, '').length) {
        pass = false;
        errors[required[i]] = `${required[i]} is required`;
      }
    }
    if (!pass) {
      return errors;
    }
    return true;
  },


  /**
   * @static
   * @param {String} password
   * @description Checks if user password is defined and valid
   * @return {object} object
   * @memberof UserValidation
   */
  checkPassword(password) {
    if (!validation.isDefined(password) || !password.replace(/\s/g, '').length) {
      return false;
    }
    return true;
  },

};

export default validation;
