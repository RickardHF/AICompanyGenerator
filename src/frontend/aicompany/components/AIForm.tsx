"use client";

import React, { useState } from "react";
import "./AIForm.css";
import getCompanyData from "../pages/api/getCompanyData";

function AIForm() {
    const [description, setDescription] = useState("");

    async function generate(e) {
        e.preventDefault();
        console.log(description);
        const response = await getCompanyData({input: description});
        console.log(response);
    };

    return (
        <div>
            <form onSubmit={generate} className='flex w-full'>
                <textarea id="description" placeholder='Describe your company...' value={description} onChange={(event) => setDescription(event.target.value)} />
                <button type="submit">Generate</button>
            </form>
        </div>
    );
}

export default AIForm;

