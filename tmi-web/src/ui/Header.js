/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import logo from "../logo/headerLogo.png"

function Header() {
    const wrapStyle = css`
        width: 100vw;
        min-width: 850px;
        height: 65px;
        background-color: black;
      
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `

    const logoWrapStyle = css`
      display: flex;
      flex-direction: row;
      
      text-align: center;
      justify-content: center;
      margin-left: 50px;      
    `

    const logoStyle = css`
        width: 37px;
        height: 37px;
        background-image: url(${logo});
        background-size: cover;
        background-repeat: no-repeat;
      
    `

    const logoTextStyle = css`
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: 20px;
      
        line-height: 40px;
    `

    const categoryWrapStyle = css`
        width: 45%;
        color: white;
        display: flex;
        flex-direction: row;
        
        justify-content: space-between;
      
        font-size: 0.9rem;
    `

    const downloadBtnStyle = css`
        width: 120px;
        height: 33px;
        border-radius: 10px;
        background-color: #3C3C3C;
        color: white;
        font-size: 0.7rem;
      
        display: flex;
        justify-content: center;
        align-items: center;
      
        justify-items: flex-end;
      
        margin-right: 50px;
    `

    return (
        <div>
            <div css={wrapStyle}>
                <div css={logoWrapStyle}>
                    <div css={logoStyle}></div>
                    <div css={logoTextStyle}>T.M.I</div>
                </div>
                <div css={categoryWrapStyle}>
                    <p>게임 정보</p>
                    <p>등장 신</p>
                    <p>두아트</p>
                    <p>About Us</p>
                </div>
                <div css={downloadBtnStyle}>게임 다운로드</div>
            </div>
        </div>
    );
}

export default Header;
