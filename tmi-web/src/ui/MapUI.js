/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import slide1 from "../slideShow/test/1.jpg"
import slide2 from "../slideShow/test/2.jpg"
import slide3 from "../slideShow/test/3.jpg"

import button1 from "../logo/1.png"
import button2 from "../logo/2.png"
import button3 from "../logo/3.png"

import button1onClick from "../logo/1_onClick.png"
import button2onClick from "../logo/2_onClick.png"
import button3onClick from "../logo/3_onClick.png"

import {useState} from "react";

function MapUI(props) {

    const slideElementList = [slide1, slide2, slide3];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [btn1Style, setBtn1Style] = useState(button1);
    const [btn2Style, setBtn2Style] = useState(button2);
    const [btn3Style, setBtn3Style] = useState(button3);


    const wrapStyle = css`
      display: flex;
      flex-direction: row;
    `

    const buttonWrapStyle = css`
        width: 30%;
        margin: 23px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    `

    const button1Style = css`
        width: 70%;
        height: 70%;
        background-image: url(${btn1Style});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
      
        position: absolute;

        transition: 0.5s ease-in-out;
        &:hover{
          opacity: 0.8;
        }
    `

    const button2Style = css`
        width: 35%;
        height: 50%;
        background-image: url(${btn2Style});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;

        position: absolute;
        top: 30%;
        right: -20%;

        transition: 0.5s ease-in-out;
        &:hover{
          opacity: 0.8;
        }
    `

    const button3Style = css`
        width: 35%;
        height: 50%;
        background-image: url(${btn3Style});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;

        position: absolute;
        top: 45%;
        left: 10%;
        
        transition: 0.5s ease-in-out;
        &:hover{
          opacity: 0.8;
        }
    `

    const slideShowWrapStyle = css`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    `

    const slideWrapStyle = css`
        width: 80%;
        height: 70vh;
        border: 1.5px solid black;
    `

    const slideElementStyle = css`
      width: 100%;
      height: 70vh;
      background-image: url(${slideElementList[currentSlide]});
      background-size: cover;
      background-repeat: no-repeat;
    `

    const showBtnSlide = (idx)=>{
        setCurrentSlide(idx);
    };

    return (
        <div className="MapUI" css={wrapStyle}>
            <div css={buttonWrapStyle}>
                <div css={button1Style}
                     onClick={() => {
                         showBtnSlide(0);
                         setBtn1Style(button1onClick);

                         setBtn2Style(button2);
                         setBtn3Style(button3);
                     }}>
                </div>
                <div css={button2Style}
                     onClick={() => {
                         showBtnSlide(1);
                         setBtn2Style(button2onClick);

                         setBtn1Style(button1);
                         setBtn3Style(button3);
                     }}>
                </div>
                <div css={button3Style}
                     onClick={() => {
                         showBtnSlide(2);
                         setBtn3Style(button3onClick);

                         setBtn1Style(button1);
                         setBtn2Style(button2);
                     }}>
                </div>
            </div>
            <div css={slideShowWrapStyle}>
                <div css={slideWrapStyle}>
                    <div css={slideElementStyle}></div>
                </div>
            </div>
        </div>
    );
}

export default MapUI;
