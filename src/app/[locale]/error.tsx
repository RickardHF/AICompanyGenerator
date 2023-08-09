'use client'

import React, { useEffect } from 'react'

export default function Error({ error, reset} : {error: Error, reset: () => void}) {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='flex w-full font-mono flex-col text-center'>
            <h1>500</h1>
            <p>Internal server error</p>
            <button onClick={reset}>Reload Page</button>
        </div>
    )

}