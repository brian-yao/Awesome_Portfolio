import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useEffect,
    useCallback,
} from 'react';
import { createPortal } from 'react-dom';

const modalElement = document.getElementById('portal');

const Modal = ({ children, defaultOpened = false }, ref) => {
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
            if (event.keyCode === 27) close();
        },
        [close]
    );

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false);
        return () => {
            document.removeEventListener('keydown', handleEscape, false);
        };
    }, [handleEscape, isOpen]);

    return createPortal(
        isOpen ? <div className="modal">{children}</div> : null,
        modalElement
    );
};

export default forwardRef(Modal);
