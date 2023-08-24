import loadConfig from "./helpers/config-loader";
import loadMessages from "./helpers/message-loader";


const config = loadConfig();

const messages = loadMessages(config);

function checkIfLanguageSupported(lang:string): boolean {
    return config.languages.some((language) => language.code === lang);
}

function getSection(lang:string, section:string): (section:string) => string {
    return (key:string) => {
        
        if (! checkIfLanguageSupported(lang)) {
            console.warn(`Language ${lang} not supported. Using default language.`);
            lang = config.default;
        }

        const translation = messages[lang];
        if (! translation) return undefined;
        const selected_section = translation[section];
        if (! selected_section) return undefined;
        return selected_section[key];
    }  
}

function setHtmlLanguage(lang:string) {
    if (! checkIfLanguageSupported(lang)) lang = config.default;
    document.documentElement.lang = lang;
}

module.exports.getSection = getSection;
module.exports.setHtmlLanguage = setHtmlLanguage;
module.exports.configuration = config;
module.exports.supportedLanguages = config.languages;