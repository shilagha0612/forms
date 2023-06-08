// import react, { useState } from 'react';
const MyComponent = props => {
    const onClickHandler = (e) => {
        alert("HELLO");
    }

    
    return <button onClick={(e) => onClickHandler(e)}>CLICK ME</button>;
}



export default MyComponent;