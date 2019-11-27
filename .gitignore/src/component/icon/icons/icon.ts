import React from 'react';
import save from "./icons/save";

console.log(save);
export interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = ()=> {
    return (
        <span>
            <svg>
                <use xlinkHref="#save"></use>
            </svg>
            </span>
    )
}

export default Icon;