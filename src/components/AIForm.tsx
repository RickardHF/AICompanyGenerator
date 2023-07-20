"use client";

import React, { useState } from "react";
import "./AIForm.css";
import { getCompanyColors, getCompanyName, getCompanySlogan } from "@/pages/api/openaiCommunicator";
import ColorSquare from "./ColorSquare";

function AIForm() {
    const [description, setDescription] = useState("");

    const [name, setName] = useState("");
    const [slogan, setSlogan] = useState("");
    const [colors, setColors] = useState(["#000000", "#FFFFFF"]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [loading, setLoading] = useState(false);
    const [colorError, setColorError] = useState(false);

    async function generate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setShowAnswer(false);
        setColorError(false);
        setLoading(true);
        try {
            const name = await getCompanyName(description);
            const slogan = await getCompanySlogan(name, description);
            const colors = await getCompanyColors(description);
            console.log(name);
            console.log(slogan);
            console.log(colors);

            setName(name);
            setSlogan(slogan);
            handleColors(colors);
            setShowAnswer(true);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    function isValidColor(colorCode: string) : boolean {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorCode);
    }

    function handleColors(colorString: string) : void {
        try {
            const colors = colorString.split(",");
            if(! colors.every(isValidColor)) {
                throw new Error("Invalid color code");
            }
            setColors(colors);
        } catch (error) {
            console.error(error);
            setColorError(true);
        }
    }

    return (
        <div className="w-full form-area">
            <form onSubmit={generate} className='flex w-full ver-flex form-area-element'>
                <textarea id="description" placeholder='Describe your company...' value={description} onChange={(event) => setDescription(event.target.value)} />
                <button className="generate-button" type="submit">Generate</button>
            </form>
            {showAnswer &&
                <div className='flex w-full ver-flex form-area-element'>
                    <div className='flex w-full ver-flex'>
                        <h2>Company Name</h2>
                        <p>{name}</p>

                        <h2>Company Slogan</h2>
                        <p>{slogan}</p>

                        <h2>Company Colors</h2>
                        <p>{colors}</p>

                        <div>
                            {colors.map((color, index) => {
                                return <ColorSquare key={index} color={color} size={50} onClick={() => {navigator.clipboard.writeText(color)}} />;
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default AIForm;
