const langs = ["en", "no"];
const defaultLanguage = "en";

interface Messages {
    [key: string]: any
}

const messages : Messages = {};

for (const lang of langs) {
    messages[lang] = require(`@/messages/${lang}.json`);
}

function getSection(lang:string, section:string): (section:string) => string {
    return (key:string) => {
        if (! langs.includes(lang)) return messages[defaultLanguage][section][key];
        return messages[lang][section][key];
    }  
} 

module.exports.getSection = getSection;