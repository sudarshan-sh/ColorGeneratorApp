import React, { useEffect, useState } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValues = `#${hexColor}`;

    useEffect(() => {
        let timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout)
    }, [alert])
    
  return (
    <article className={`color ${index > 10 && 'color-light'}`}
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValues);
        }}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexValues}</p>
        {alert && <p className='alert'>copied to clipboard</p> }
    </article>
  )
}

export default SingleColor