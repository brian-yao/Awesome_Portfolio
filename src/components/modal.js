import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useEffect,
    useCallback,
} from 'react';
import { createPortal } from 'react-dom';

const portalRoot =
    typeof document !== `undefined` ? document.getElementById('portal') : null;

export function Modal({ children, defaultOpened = false }, ref) {
    const [isOpen, setIsOpen] = useState(defaultOpened);
    const close = useCallback(() => setIsOpen(false), []);

    useImperativeHandle(
        ref,
        () => ({
            open: () => setIsOpen(true),
            close,
        }),
        [close]
    );
    const handleEscape = useCallback(
        (event) => {
            //If "esc" pressed, close modal
            if (event.keyCode === 27) close();
        },
        [close]
    );

    useEffect(() => {
        if (typeof document === 'undefined') {
            return console.log('document does not exist here');
        }

        if (isOpen) document.addEventListener('keydown', handleEscape, false);
        return () => {
            document.removeEventListener('keydown', handleEscape, false);
        };
    }, [handleEscape, isOpen]);

    return createPortal(
        isOpen ? <div className="modal">{children}</div> : null,
        portalRoot
    );
}

export default forwardRef(Modal);
