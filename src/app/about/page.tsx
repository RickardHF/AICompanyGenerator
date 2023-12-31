'use client'

import { useLanguageSetter, useMetadataSetter, useTranslationsFetcher } from "nextjs-static-page-localizer"

export default function About() {
    const tranlations = useTranslationsFetcher();
    useLanguageSetter();
    useMetadataSetter("about-title", "about-description");

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
};