import React from 'react';
const Hello = () => {
    // return (
    //     <div>
    //         <h2>This is a JSX heading</h2>
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,"This is a JSX heading"),);
}
export default Hello