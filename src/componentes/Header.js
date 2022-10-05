// import React, { Fragment } from 'react'
import React from 'react'

// function Header({titulo}) {
    
//     return(
//         <Fragment>
//             <h1>{titulo}</h1>
//         </Fragment>
//     )
// }


// const Header = ({titulo}) => {
//     return ( 
//         <Fragment>
//             <h1>{titulo}</h1>
//         </Fragment>
//      );
// }

// Resumen del comonente de arriba,el return se da por implicito
const Header = ({titulo}) => (
    <h1>{titulo}</h1>
);
 
export default Header