/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import arrowR from "../slideShow/arrowR.png";
import arrowL from "../slideShow/arrowL.png";

import slide1 from "../slideShow/test/1.jpg"
import slide2 from "../slideShow/test/2.jpg"
import slide3 from "../slideShow/test/3.jpg"
import slide4 from "../slideShow/test/4.jpg"
import slide5 from "../slideShow/test/5.jpg"

import {useState} from "react";

function PlayUI(props) {

    const slideElementList = [slide1, slide2, slide3, slide4, slide5];

    const [currentSlide, setCurrentSlide] = useState(0);

    const buttonWrapStyle = css`
        margin: 23px auto;
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `

    const buttonStyle = css`
        width: 17%;
        height: 50px;
        border: 1.5px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
      
        cursor: pointer;
    `

    const buttonOnclickStyle = css`
      width: 17%;
      height: 50px;
      border: 1.5px solid black;
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      
      background-color: #E5C17B;
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

    const slideArrowLStyle = css`
        width: 60px;
        height: 60px;
        background-image: url(${arrowL});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
    `

    const slideArrowRStyle = css`
        width: 60px;
        height: 60px;
        background-image: url(${arrowR});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;      
    `

    const showSlide = (idx) => {
        const listLength = slideElementList.length -1;

        if(idx < 0) {
            setCurrentSlide(listLength);
        }
        else if (idx > listLength) {
            setCurrentSlide(0)
        }
        else if (idx <= listLength) {
            setCurrentSlide(idx)
        }
    };


    const showBtnSlide = (idx)=>{
        setCurrentSlide(idx);
    };

    const onPrev = () => {
        showSlide(currentSlide-1)
    }

    const onNext = () => {
        showSlide(currentSlide+1)
    }
    return (
        <div className="PlayUI">
            <div css={buttonWrapStyle}>
                <div css={currentSlide === 0 ? buttonOnclickStyle : buttonStyle}
                     onClick={() => {
                         showBtnSlide(0);
                     }}>
                    1번(임시)
                </div>
                <div css={currentSlide === 1 ? buttonOnclickStyle : buttonStyle}
                     onClick={() => {
                         showBtnSlide(1);
                     }}>
                    2번(임시)
                </div>
                <div css={currentSlide === 2 ? buttonOnclickStyle : buttonStyle}
                     onClick={() => {
                         showBtnSlide(2);
                     }}>
                    3번(임시)
                </div>
                <div css={currentSlide === 3 ? buttonOnclickStyle : buttonStyle}
                     onClick={() => {
                         showBtnSlide(3);
                     }}>
                    4번(임시)
                </div>
                <div css={currentSlide  === 4 ? buttonOnclickStyle : buttonStyle}
                     onClick={() => {
                         showBtnSlide(4);
                     }}>
                    5번(임시)
                </div>
            </div>
            <div css={slideShowWrapStyle}>
                <div css={slideArrowLStyle}
                     onClick={() => {
                        onPrev();
                     }}
                >
                </div>
                <div css={slideWrapStyle}>
                    <div css={slideElementStyle}></div>
                </div>
                <div css={slideArrowRStyle}
                     onClick={()=> {
                         onNext();
                     }}>
                </div>
            </div>
        </div>
    );
}

export default PlayUI;
