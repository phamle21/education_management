import React from "react";
import styled from "styled-components";
import Avt from "../../assets/img/lecturer/lecturer2.jpeg";
import CheckMark from "../../assets/svg/Checkmark";

export default function LecturerItem({ name, introduce, skills }) {

    return (
        <Wrapper className="whiteBg radius8 shadow" >
            <div>
                <img src={Avt} alt="Avt" width={300}/>
            </div>
            <div>
                <h4 className="font25 extraBold">{name}</h4>
                <p className="font18">{introduce}</p>
            </div>
            <div>
                {skills
                    ? skills.map((item, index) => (
                        <div className="flexNullCenter" style={{ margin: "10px 0" }} key={index}>
                            <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                                {item.cheked ? (
                                    <div style={{ minWidth: "20px" }}>
                                        <CheckMark />
                                    </div>
                                ) : (
                                    <div style={{ minWidth: "20px" }}/>
                                )}
                            </div>
                            <p className="font18 extraBold">{item.name}</p>
                        </div>
                    ))
                    : null}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: 840px;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;