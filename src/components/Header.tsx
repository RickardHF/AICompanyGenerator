'use client'

import LanguageSwitcher from "@/messages/components/LanguageSwitcher";
import LocalizedLink from "@/messages/components/LocalizedLink";
import Language from "@/messages/interfaces/Language";
import useTranslationsFetcher from "@/messages/tranlations-fetcher";

const { supportedLanguages } = require("@/messages/lang-support");

export default function Header() {

    const tranlations = useTranslationsFetcher();
    const link_names = tranlations("links");

    return (
    <header className="flex w-full ver-flex justify-center items-center">
        <div className="flex w-full hor-flex justify-end px-10">
            {
                supportedLanguages.map((language:Language) => {
                    return (
                        <LanguageSwitcher
                            key={language.code}
                            className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one px-2 hover:underline" 
                            lang={language.code}
                            >
                                <h2
                                    className="px-2"
                                >{language.name}</h2>
                        </LanguageSwitcher>
                    )
                })
            }
        </div>
        <div className="flex hor-flex justify-around w-1/2 items-center px-8 py-4 min-w-[300px] max-w-full">
            <LocalizedLink 
                href="/"
                className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one hover:underline"
                >
                <h2>{link_names("home")}</h2>
            </LocalizedLink>

            <LocalizedLink
                href="/about"
                className="flex place-items-center gap-2 lg:pointer-events-auto lg:p-0 link-item shadow-color-one hover:underline"
            >
                <h2>{link_names("about")}</h2>
            </LocalizedLink>
        </div>
    </header>
    );
};