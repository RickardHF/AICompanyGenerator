
const config = require('./config.json');

const en = require('./en.json');
const no = require('./no.json');
const cs = require('./cs.json');

const messages = {
    "en": en,
    "no": no,
    "cs": cs
}

module.exports = {
    default: config.default,
    languages: config.languages,
    messages: messages
}
