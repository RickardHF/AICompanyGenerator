'use client'

const { getSection } = require('@/messages/lang-support');
import { useSearchParams } from 'next/navigation';

export default function About() {

    const params = useSearchParams();
    const lang = params.get("lang") ?? "xx";

    const  common_text  = getSection(lang, 'common');
    const  about_text  = getSection(lang, 'about');

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