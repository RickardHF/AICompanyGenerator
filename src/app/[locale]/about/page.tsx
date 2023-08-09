import { useTranslations } from "next-intl";

export default function About() {
    const  common_text  = useTranslations('common');
    const  about_text  = useTranslations('about');

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