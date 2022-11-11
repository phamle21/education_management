import React from "react";
import styled from "styled-components";
import TestimonialSlider from "../elements/TestimonialSlider";

export default function Blog() {
    return (
        <Wrapper id="blog">
            {/* <div className="whiteBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Our Blog Stories</h1>
                        <p className="font13">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            <br />
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </HeaderInfo>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BlogBox
                                title="New Office!"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                tag="company"
                                author="Luke Skywalker, 2 days ago"
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BlogBox
                                title="New Office!"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                tag="company"
                                author="Luke Skywalker, 2 days ago"
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BlogBox
                                title="New Office!"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                tag="company"
                                author="Luke Skywalker, 2 days ago"
                                action={() => alert("clicked")}
                            />
                        </div>
                    </div>
                    <div className="row textCenter">
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BlogBox
                                title="New Office!"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                tag="company"
                                author="Luke Skywalker, 2 days ago"
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BlogBox
                                title="New Office!"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                tag="company"
                                author="Luke Skywalker, 2 days ago"
                                action={() => alert("clicked")}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <BlogBox
                                title="New Office!"
                                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                tag="company"
                                author="Luke Skywalker, 2 days ago"
                                action={() => alert("clicked")}
                            />
                        </div>
                    </div>
                    <div className="row flexCenter">
                        <div style={{ margin: "50px 0", width: "200px" }}>
                            <FullButton title="Load More" action={() => alert("clicked")} />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="lightBg" style={{ padding: '50px 0' }}>
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Học viên nhận xét gì sau khóa học?</h1>
                        <p className="font18">
                            Sau khi được trải nghiệm một nơi học tập tuyệt vời, các học viên đã không ngần ngại
                            <br />
                            gửi những lời nhận xét đầy tình cảm cho trung tâm chúng tôi. Trung tâm xin cám ơn
                            những tình cảm này,
                            <br />
                            trung tâm sẽ tiếp tục cố gắng phát huy hơn thế nữa.
                        </p>
                    </HeaderInfo>
                    <TestimonialSlider />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;