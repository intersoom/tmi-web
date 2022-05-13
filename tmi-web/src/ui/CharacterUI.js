/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import anubis from "../character/anubis.png";
import tott from "../character/tott.png";
import yisis from "../character/yisis.png";
import oisiris from "../character/oisiris.png";

import oisirisName from "../characterName/oisirisName.png";
import anubisName from "../characterName/anubisName.png";
import tottName from "../characterName/tottName.png";
import yisisName from "../characterName/yisisName.png";
import {useState} from "react";

function CharacterUI(props) {
    const character = [anubis, tott, yisis, oisiris];
    const characterName = [anubisName, tottName, yisisName, oisirisName];

    const [isHovering, setIsHovering] = useState(0);

    const backRectStyle = css`
      width: 200px;
      height: 300px;
      background: #9D9B98;
      border: 2px solid #000000;
    `

    const backRectHoverStyle = css`
      width: 210px;
      height: 310px;
      background: #E5C17B;
      border: 2px solid #000000;
      
      transition: 0.2s ease-in-out;
      transform: translate(-10px, 5px);
    `

    const cardStyle = css`
      width: 200px;
      height: 300px;
      
      position: relative;
      cursor: pointer;
    `

    const contentRectStyle = css`
      width: 200px;
      height: 300px;
      background: #FFFFFF;
      border: 2px solid #000000;
      position: absolute;
      left: 10px;
      bottom: 10px;

      transition: 0.2s ease-in-out;
      transform: translate(0px, 0px);
    `

    const contentRectHoverStyle = css`
      width: 200px;
      height: 300px;
      background: #FFFFFF;
      border: 2px solid #000000;
      position: absolute;
      left: 10px;
      bottom: 10px;

      transition: 0.2s ease-in-out;
      transform: scale(1.1);
    `

    const contentTextStyle = css`
      text-align: center;
      margin-top: 18px;
      margin-bottom: 40px;
    `

    const contentImgStyle = css`
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -30px;
      
      height: 180px;
      
      background: url(${character[props.indexNum]});
      background-size: cover;
    `

    const contentNameImgStyle = css`
      width: 50%;
      height: 70px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
      
      background: url(${characterName[props.indexNum]});
      background-size: contain;
      background-repeat: no-repeat;
    `

    const h3Style = css`
      font-size: 1.4rem;
      font-weight: 500;
    `

    const pStyle = css`
      font-size: 0.8rem;
      margin: 5px 0;
    `

    return (
        <div className="CharacterUI"
             onMouseOver={() => setIsHovering(1)}
             onMouseOut={() => setIsHovering(0)}>
            <div css={cardStyle}>
                <div css={isHovering ? backRectHoverStyle : backRectStyle}></div>
                <div css={isHovering ? contentRectHoverStyle : contentRectStyle}>
                    {isHovering ? (
                        <div css={contentTextStyle}>
                            {/*props로 수정*/}
                            <p css={pStyle}>{props.intro}</p>
                            <h3 css={h3Style}>{props.name}</h3>
                        </div>
                    )
                    :
                        (
                            <div>
                                <div css={contentNameImgStyle}></div>
                            </div>
                        )}
                    <div css={contentImgStyle}></div>
                </div>
            </div>
        </div>
    );
}

export default CharacterUI;
