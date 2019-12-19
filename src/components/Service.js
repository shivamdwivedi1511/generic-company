import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function Service() {
    return (
        <div className='serviceBackground fadein'>
            <Loader type="Triangle" color="grey" height={200} width={200} />
        </div>
    )
}
