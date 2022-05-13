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
import ModalUI from "./ModalUI";

function ItemUI(props) {
    const character = [anubis, tott, yisis, oisiris];
    const characterName = [anubisName, tottName, yisisName, oisirisName];

    const backRectStyle = css`
      width: 200px;
      height: 200px;
      background: #E5C17B;
      border: 2px solid #000000;
    `

    const cardStyle = css`
      width: 200px;
      height: 200px;
      
      position: relative;
      
      cursor: pointer;
    `

    const contentRectStyle = css`
      width: 200px;
      height: 200px;
      background: #FFFFFF;
      border: 2px solid #000000;
      position: absolute;
      left: 10px;
      bottom: 10px;
   `

    const contentStyle = css`
      text-align: center;
      margin-top: 12px;
      white-space: pre-wrap;
   `

    const pStyle = css`
      margin-top: 2px;
      font-size: 0.9rem;
   `
    return (
        <div className="ItemUI">
            <div css={cardStyle}
                 // 오류남!
                 onClick={()=> {
                     props.handleClick(props.elementIndex)
                 }}>
                <div css={backRectStyle}></div>
                <div css={contentRectStyle}>
                </div>
                <div css={contentStyle}>
                    <h3>{props.name}</h3>
                    <p css={pStyle}>{props.explanation}</p>
                </div>
            </div>

        </div>
    );
}

export default ItemUI;
