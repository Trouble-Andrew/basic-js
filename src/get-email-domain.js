const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

//  function getEmailDomain(email) {
//   const domainArray = email.match(/(?<=([\w-\.]@))((?:[\w]+\.|[\w-])+)([a-zA-Z]{2,})/g);
   
//   //  if (email) {
//   //   const domainArray = email.match(/(?<=([\w-\.]@))((?:[\w]+\.|[\w-])+)([a-zA-Z]{2,})/g);
     
//   //   if (domainArray.leng) {
      
//   //     return domainArray.join();
//   //   }
//   // }

//   // return domainArray ? domainArray.join() : '';
//   return email.match(/(?<=([\w-\.]@))((?:[\w]+\.|[\w-])+)([a-zA-Z]{2,})/g).join();
// }

const getEmailDomain = (email) => email.match(/(?<=([\w-\.]@))((?:[\w]+\.|[\w-])+)([a-zA-Z]{2,})/g).join();

module.exports = {
  getEmailDomain
};
