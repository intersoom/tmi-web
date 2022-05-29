/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CharacterUI from "../ui/CharacterUI";
import Header from "../ui/Header";
import ItemUI from "../ui/ItemUI";
import PlayUI from "../ui/PlayUI";
import MapUI from "../ui/MapUI";
import ModalUI from "../ui/ModalUI";

import {useState} from "react";



function Intro() {
    const itemArr = [
            {name: "하토르의 우유",
             explanation: "능력 사용 시 마력을 소모하여\n체력을 회복합니다.",
             detail: "하토르는 치유과 사랑의 신으로 암소의 모습을 지녔으며 태양신 라의 딸로 알려져 있다. " +
                 "하지만 세트를 지지한 아버지와는 다르게 자신은 세트와의 전쟁 중 눈을 뽑힌 호루스에게 신성한 우유를 뿌려 " +
                 "그의 눈을 치료해주었다. 이후 하토르의 도움으로 세트에게 승리한 호루스는 왕좌를 차지하며 자신을 도와준 " +
                 "하토르를 왕비로 삼는다."},
            {name: "세크메트의 혈주",
             explanation: "능력 사용 시 체력을 소모하여\n가까운 적에게 방사 피해를\n입힙니다.",
             detail: "하토르와 동일한 신격으로 숭배된 세크메트는 인간의 죄에 분노하여 지상에 내려와 날개가 달린 사자의 모습으로 인간들을 학살했다고 전해진다. " +
                 "태양신 라는 이를 막기 위해 석류 등을 이용해 만든 붉은 술을 지상에 뿌렸고, 세크메트는 이를 피로 착각하여 몽땅 마신 나머지, " +
                 "취해 잠들었다."},
            {name: "케프리의 스카라베",
             explanation: "능력 사용 시 마력을 소모하여\n크기와 위력이 점점 커지는\n화염구 발생시킵니다.",
             detail: "케프리는 태양신 라가 새벽일 때 취하는 신격으로 쇠똥구리의 모습을 하고 있다. " +
                 "쇠똥구리가 둥근 걸 굴리고 있기 때문에 마치 태양을 움직이는 것 같다고 하여 고대 이집트 신화에서는 신성한 벌레 스카라베로 추앙받으며" +
                 " 쇠똥구리의 모습을 한 다양한 유물이 존재한다. "}
    ];

    const [modalState, setModalState] = useState(false);
    const [modalName, setModalName] = useState('');
    const [modalContent, setModalContent] = useState('');

    const handleClick = (idx) => {
        setModalState(true);
        setModalContent(itemArr[idx].detail);
        setModalName(itemArr[idx].name);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setModalState(false);
    }

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
            {modalState && <ModalUI name={modalName} content={modalContent} closeModal={closeModal}></ModalUI>}
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
                                    handleClick = {handleClick}
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
  