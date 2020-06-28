import React from 'react';
const Hello = (props) => {
    console.log(props)
return <h1>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii {props.name} {props.hero}</h1>
    // return React.createElement('div',null,React.createElement('h1',null,"This is a JSX heading"),);
}
export default Hello