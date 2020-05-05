'use strict';

const moment = require('moment');

/*
    * Returns a string element with a footer and an auto-updating year
    * @param {string} name
    * @return {string}
    */
const currentYear = moment().format('YYYY');
exports.footer = (name) => {
    `Copyright ${currentYear} ${name}. All rights reserved.`
};
