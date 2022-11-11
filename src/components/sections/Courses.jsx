import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apiBase from '../../app/axios/apiBase';
import FullButton from "../button/FullButton";
// Components
import ProjectBox from "../elements/ProjectBox";

export default function Courses() {

  const [listCourses, setListCourses] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    apiBase.get("/courses")
      .catch(err => console.log(err))
      .then(res => {
        console.log(res.data.data);
        setListCourses([...res.data.data]);
        console.log(listCourses);
      })
  }, []);

  const loadMore = () => {
    setLimit(limit + 6);
  }

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">

          <HeaderInfo>
            <h1 className="font40 extraBold">Các khóa học hiện có</h1>
            <p className="font20">
              Khóa học phong phú và độc quyền chỉ có tại Code Academy.
            </p>
          </HeaderInfo>

          <div className="row textCenter">
            {listCourses && listCourses.slice(0, limit).map((course, i) => (
              <div key={i} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={course.image}
                  title={course.name}
                  text={course.description}
                  action={() => alert("clicked")}
                />
              </div>
            ))}
          </div>

          {limit >= listCourses.length ?
            <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}/>
            </div>
            :
            <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}>
                <FullButton title="Tải thêm" action={() => loadMore()} />
              </div>
            </div>
          }
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;