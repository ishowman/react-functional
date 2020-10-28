import React, {ReactNode} from 'react';

class ButtonProps {
    type!: string
    children?: ReactNode
}


function renderJSX(props: ButtonProps) {
    const {
        type,
        children
    } = props
    return (
      <button className={type}>{children? children : 666}</button>
    );
}

function combineBtn(component: ReactNode) {
    return <Button type="mixed"> {component}</Button>
}

function Button (props: ButtonProps) {
    return renderJSX(props)
}
  
export  {Button, combineBtn};
  