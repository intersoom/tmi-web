/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import xBtn from "../btn/xBtn.png"

function ModalUI(props) {
    const wrapStyle = css`
      width: 100%; height: 100%;
      position: absolute;
      top: 30%;
    `
    const modalWrapStyle = css`
      width: 50vw;
      height: 40vh;
      background-color: white;
      border-radius: 10px;
      border: 1.5px solid black;
      
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 10px;
      
      position: relative;
   `

    const gifWrapStyle = css`
      width: 30%;
   `

    const textWrapStyle = css`
      width: 50%;
   `

    const xBtnStyle = css`
      width: 30px; height: 30px;
      background-image: url(${xBtn});
      background-size: contain;
      
      position: absolute;
      top: -15px;
      right: -15px;
   `
    return (
        <div className="ModalUI" css={wrapStyle}>
            <div css={modalWrapStyle}>
                <div css={gifWrapStyle}>
                    diddidk
                </div>
                <div css={textWrapStyle}>
                    <p>
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                        유물에 대한 자세한 설명입니다. 유물에 대한 자세한 설명입니다.
                    </p>
                </div>
                <div css={xBtnStyle}/>
            </div>

        </div>
    );
}

export default ModalUI;
