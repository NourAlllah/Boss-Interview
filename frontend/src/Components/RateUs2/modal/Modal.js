import React, { useEffect, useRef } from "react";
import Button from "../button/Button";
import CloseIcon from "../CloseIcon";
import styles from "./modal.module.css";
import Navbar from "../../Navbar/Navbar";
import { FooterContainer } from './../../Containers/footer';
import { SidebarLogged } from './../../SidebarLogged';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <>
    <Navbar screenName={'Log out'} nextNav={'/'} arr={ SidebarLogged }/>
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
        <Button
          onClick={onClose}
          style={{
            width: 60,
            height: 40,
            position: "absolute",
            top: 0,
            right: 0,
            margin: "1rem",
            cursor: "pointer"
          }}
          className={styles.close__btn}
        >
          <CloseIcon
            height="20px"
            width="20px"
            className={styles.close__icon}
          />
          Close
        </Button>
        <div style={modalStyle} className={styles.modal__wrap}>
          {children}
        </div>
      </div>
    </React.Fragment>
           <FooterContainer />
    </>
  );
};

export default Modal;
