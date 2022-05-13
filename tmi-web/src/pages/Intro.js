/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CharacterUI from "../ui/CharacterUI";
import Header from "../ui/Header";
import ItemUI from "../ui/ItemUI";
import PlayUI from "../ui/PlayUI";
import MapUI from "../ui/MapUI";
import ModalUI from "../ui/ModalUI";

import {useState} from "react";
import modalUI from "../ui/ModalUI";

function Intro() {
    const itemArr = [{name: "하토르의 우유", explanation: "체력을 회복하게 도와줍니다."},
        {name: "세크메트의 혈주", explanation: "가까운 적에게 방사 피해를 줍니다."},
        {name: "케프리의 스카라베", explanation: "화염구를 발생시켜줍니다."}
    ];

    const [isModalOpen, setIsModalOpen] = useState([false, false, false]);

    const openModal = (idx) => {
        const newArr = Array(itemArr.length).fill(false);
        newArr[idx] = true;
        setIsModalOpen(newArr);
        console.log(idx, isModalOpen[0]);
    };

    const closeModal = () => {
        if (isModalOpen === true) return setIsModalOpen(false);
    };



    const pageWrap = css`
      min-width: 850px;
      height: 400vh;
    `

    const introTitleStyle = css`
      text-align: center;
      margin: 70px 0 30px 0;
      
      font-size: 2.8rem;
    `

    const h1Style = css`
      font-size: 2.7rem;
      margin: 0;
    `

    const pStyle = css`
      font-size: 1.0rem;
      margin: 5px 0;
    `

    const videoStyle = css`
      text-align: center;
    `

    const titleWrapStyle = css`
      margin-top: 100px;
      margin-bottom: 15px;
    `

    const wrapStyle = css`
        width: 90vw;
        margin: 0 auto;
        
        display: flex;
        flex-direction: column;
    `

    const characterWrapStyle = css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 25px;
    `

    const itemWrapStyle = css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin-top: 25px;
    `
    return (
        <div className="Intro" css={pageWrap}>
            <Header></Header>
            {isModalOpen[0] && <ModalUI/>}
            <div>
                <h1 css={introTitleStyle}>『사자의 서』를 깨우친 자, 영원을 얻을 것이다.</h1>
                <div css={videoStyle}>
                    <iframe width="700" height="393" src="https://www.youtube.com/embed/0ck8yY0aQaw"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div css={wrapStyle}>
                <div css={titleWrapStyle}>
                    <h1 css={h1Style}>등장 신</h1>
                    <p css={pStyle}>이집트 신화 속 다양한 신들을 만나보세요.</p>
                </div>
                <div css={characterWrapStyle}>
                    <CharacterUI indexNum={0} name={"아누비스"} intro={"모든 망자들의 안내자"}/>
                    <CharacterUI indexNum={1} name={"토트"} intro={"모든 망자들의 안내자"}/>
                    <CharacterUI indexNum={2} name={"이시스"} intro={"모든 망자들의 안내자"}/>
                    <CharacterUI indexNum={3} name={"오시리스"} intro={"모든 망자들의 안내자"}/>
                </div>
                <div css={titleWrapStyle}>
                    <h1 css={h1Style}>유물 소개</h1>
                    <p css={pStyle}>사자의 서에서 등장하는 다양한 유물들을 알아보세요.</p>
                </div>
                <div css={itemWrapStyle}>
                    {itemArr.map((elm, index) => {
                        return (
                            <ItemUI key={index}
                                    elementIndex={index}
                                    name={elm.name}
                                    explanation={elm.explanation}
                                    handleClick={openModal}
                            />
                        );
                    })}

                </div>
                <div css={titleWrapStyle}>
                    <h1 css={h1Style}>사자의 서만의 플레이</h1>
                    <p css={pStyle}>사자의 서만에서 즐길 수 있는 플레이를 알아보세요.</p>
                </div>
                <div>
                    <PlayUI></PlayUI>
                </div>
                <div css={titleWrapStyle}>
                    <h1 css={h1Style}>두아트 소개</h1>
                    <p css={pStyle}>사자의 서에서 등장하는 두아트에 대해서 알아보세요.</p>
                </div>
                <div>
                    <MapUI></MapUI>
                </div>
            </div>

        </div>
    );
  }
  
  export default Intro;
  