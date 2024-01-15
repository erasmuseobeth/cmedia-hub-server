import React from "react";
import Progress from './Progress';

const File = (file) => {
    return ( 
        <li>
            <p>
                <span className="filename"> { file.name } </span> 
                <span className="cancel">X</span>
            </p>
            <Progress />
        </li>
     );
}
 
export default File;