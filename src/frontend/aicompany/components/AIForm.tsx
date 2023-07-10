"use client";

import React, { useState } from "react";
import "./AIForm.css";
import { getCompanyColors, getCompanyName, getCompanySlogan } from "@/pages/api/openaiCommunicator";

function AIForm() {
    const [description, setDescription] = useState("");

    const [name, setName] = useState("");
    const [slogan, setSlogan] = useState("");
    const [colors, setColors] = useState("");

    async function generate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const name = await getCompanyName(description);
            const slogan = await getCompanySlogan(name, description);
            const colors = await getCompanyColors(description);
            console.log(name);
            console.log(slogan);
            console.log(colors);

            setName(name);
            setSlogan(slogan);
            setColors(colors);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full">
            <form onSubmit={generate} className='flex w-full ver-flex'>
                <textarea id="description" placeholder='Describe your company...' value={description} onChange={(event) => setDescription(event.target.value)} />
                <button type="submit">Generate</button>
            </form>
            <div className='flex w-full ver-flex'>
                <div className='flex w-full ver-flex'>
                    <h2>Company Name</h2>
                    <p>{name}</p>

                    <h2>Company Slogan</h2>
                    <p>{slogan}</p>

                    <h2>Company Colors</h2>
                    <p>{colors}</p>

                </div>

            </div>
        </div>
    );
}

export default AIForm;

