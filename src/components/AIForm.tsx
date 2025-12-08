"use client";

import React, { useState } from "react";
import "./AIForm.css";
import ColorSquare from "./ColorSquare";
import Loading from "./Loading";
import { useTranslationsFetcher, useLanguageSetter, useMetadataSetter } from "nextjs-static-page-localizer";

function AIForm() {

    const affiliate_link = process.env.NEXT_PUBLIC_NAMECHEAP_AFFILIATE_LINK ?? "https://namecheap.com/";

    const tranlations = useTranslationsFetcher();
    useLanguageSetter();
    useMetadataSetter("home-title", "home-description");
    

    const [description, setDescription] = useState("");

    const [name, setName] = useState("");
    const [slogan, setSlogan] = useState("");
    const [colors, setColors] = useState(["#000000", "#FFFFFF"]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(false);
    const [colorError, setColorError] = useState(false);
    const [error, setError] = useState("");

    const common_names = tranlations('common');
    const home_names = tranlations('home');

    async function generate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setShowAnswer(false);
        setColorError(false);
        setError("");
        setLoading(true);
        try {
            const response = await fetch('/api/company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate company information');
            }

            const data = await response.json();

            setName(data.name);
            setSlogan(data.slogan);
            handleColors(data.colors);
            setShowAnswer(true);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred. Please try again.';
            setError(errorMessage);
        }
        setLoading(false);
    };

    function isValidColor(colorCode: string): boolean {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorCode);
    }

    function handleColors(colorString: string): void {
        try {
            const colors = colorString.split(",");
            if (!colors.every(value => isValidColor(value.trim()))) {
                throw new Error("Invalid color code");
            }
            setColors(colors.map(c => c.trim()));
        } catch (error) {
            setColorError(true);
        }
    }

    return (
        <div className="w-full form-area content-box">
            <h1>{common_names("name")}</h1>
            <h3>{home_names("powered")}</h3>
            <form onSubmit={generate} className='flex w-full ver-flex form-area-element'>
                <textarea id="description" placeholder={home_names("promt")} value={description} onChange={(event) => setDescription(event.target.value)} />
                <button className="generate-button" type="submit">{home_names("generate")}</button>
            </form>
            {error && (
                <div className='flex w-full ver-flex form-area-element'>
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
            )}
            {showAnswer &&
                <div className='flex w-full ver-flex form-area-element'>
                    <div className='flex w-full ver-flex'>
                        <h2>{home_names("company-name")}</h2>
                        <p>{name}</p>
                        <p className="referal">Get started by creating a webpage! <a href={affiliate_link} target="_blank" rel="noopener noreferrer">Get yourself a domain here</a></p>

                        <h2>{home_names("company-slogan")}</h2>
                        <p>{slogan}</p>

                        <h2>{home_names("company-colors")}</h2>

                        <div className="color-container">
                            {colors.map((color, index) => {
                                return <ColorSquare key={index} color={color} size={50} onClick={() => { navigator.clipboard.writeText(color) }} />;
                            })}
                        </div>
                    </div>
                </div>
            }
            <Loading loading={loading} />
        </div>
    );
}

export default AIForm;

