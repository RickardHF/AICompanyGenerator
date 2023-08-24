'use client'

import useLanguageSetter from "@/messages/html-language-setter";
import useTranslationsFetcher from "@/messages/tranlations-fetcher";

export default function AboutContent() {
    const tranlations = useTranslationsFetcher();
    useLanguageSetter();

    const common_text = tranlations('common');
    const about_text = tranlations('about');

    return (<div className="content-box">
        <h1>{common_text("name")}</h1>

        <h3>{about_text("about-title")}</h3>

        <p>{about_text("about-content")}</p>

        <br />

        <h3>{about_text("app-title")}</h3>

        <p>{about_text("app-content-1")} <a href="https://github.com/RickardHF/AICompanyGenerator" className="visible-link">GitHub repository</a>{about_text("app-content-2")}.
        </p>

        <br />
    </div>);
}