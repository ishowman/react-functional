import React, {ReactNode} from 'react';


class ModalProps {
    title: string = ''
    footer!: ReactNode
}

function Modal(props: ModalProps) {
    const {
        title,
        footer
    } = props
    return (
      <div className="App">
        <p>{title}</p>
        <div className="footer">
            {footer}
        </div>
      </div>
    );
  }
  
  export  {Modal};
  