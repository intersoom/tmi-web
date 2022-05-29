/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import xBtn from "../btn/xBtn.png"
import ReactModal from 'react-modal';

function ModalUI(props, isOpen) {
    const containerStyle = css`
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    const overlayStyle = css`
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
    `

    const wrapStyle = css`
      display: flex;
      justify-content: center;
      align-items: center;
      
      position: relative;
      top: 0px;
      
      border-radius: 10px;
      width: 60rem;
      @media (max-width: 1120px) {
        width: 50rem;
      }
      @media (max-width: 50rem) {
        width: 80%;
      }
      animation: modal-show 0.5s;
      @keyframes modal-show {
        from {
          opacity: 0;
          margin-top: -30px;
        }
        to {
          opacity: 1;
          margin-top: 0;
        }
      }
    `
    const modalWrapStyle = css`
      width: 50vw;
      height: 40vh;
      background-color: white;
      border-radius: 10px;
      border: 2px solid black;
      
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 40px;
      
      line-height: 30px;
      
      font-size: 1.2rem;
      
      position: relative;
   `

    const gifWrapStyle = css`
      width: 30%;
   `

    const textWrapStyle = css`
      width: 50%;
      overflow-y: auto;
   `

    const xBtnStyle = css`
      width: 30px; height: 30px;
      background-image: url(${xBtn});
      background-size: contain;
      
      position: absolute;
      top: -15px;
      right: -15px;
      
      cursor: pointer;
   `
    return (

        <div className="ModalUI" css={containerStyle}>
            <div css={overlayStyle}
                 onClick={e => props.closeModal(e)}>
            </div>
            <div css={wrapStyle}>
            <div css={modalWrapStyle}>
                <div css={gifWrapStyle}>
                    {props.name}
                </div>
                <div css={textWrapStyle}>
                    <p>
                        {props.content}
                    </p>
                </div>
                <div css={xBtnStyle}
                     onClick={e => props.closeModal(e)}/>
            </div>
            </div>
        </div>

    );
}

export default ModalUI;
