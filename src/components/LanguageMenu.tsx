'use client'

import { useLocalization } from "nextjs-static-page-localizer";
import { LanguageSwitcher } from "nextjs-static-page-localizer/components";
import { useDetermineLanguage } from "nextjs-static-page-localizer/dist/helpers/language-determinor";
import { useEffect, useRef, useState } from "react";

export default function LanguageMenu() {

    const language = useDetermineLanguage();
    const { configuration } = useLocalization();

    return (
        <details className="flex flex-col justify-end list-none relative mt-2">
            <summary className="px-2 cursor-pointer flex justify-end">
                <div className="relative select-none">
                    <img src="/icons/globe.svg" alt="Language" className="w-8 h-8" />
                    <h2 className="absolute left-[60%] top-[40%] shadow-foreground link-item">{language?.toUpperCase() ?? ''}</h2>
                </div>
            </summary>
            <div className="flex flex-col justify-end p-4 absolute right-0 top-full use-background mt-2 rounded-lg z-10">
                {
                    configuration?.languages.map((language) => {
                        return (
                            <LanguageSwitcher
                                key={language.code}
                                className="flex justify-end gap-4 shadow-color-one link-item"
                                lang={language.code}
                            >
                                <h2>
                                    {language.name}
                                </h2>
                            </LanguageSwitcher>
                        )
                    })
                }
            </div>
        </details>
    );
}
