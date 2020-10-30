import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom'

class ModalProps {
    title: string = ''
    footer!: ReactNode
}

function Modal(props: ModalProps) {
    const {
        title,
        footer
    } = props
    return ReactDOM.createPortal(
      (<div className="Modal">
        <p>{title}</p>
        <div className="footer">
            {footer}
        </div>
      </div>), document.querySelector('body')!
    );
  }
  
  export  {Modal};
  