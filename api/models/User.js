/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fname: { type: 'string', required: true, },
    lname: { type: 'string', required: true, },
    emailAddress: { type: 'string', required: true, },
    password: { type: 'string', required: true, },
    // karma: { type: 'number', },
    // isSubscribedToNewsletter: { type: 'boolean', defaultsTo: true, },
  
  
  
  },
  
};

