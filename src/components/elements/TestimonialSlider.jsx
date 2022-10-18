import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../elements/TestimonialBox";

export default function TestimonialSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                <LogoWrapper className="flexCenter">
                    <TestimonialBox
                        text="Không uổng công đã tin tưởng trung tâm! Học ở đây vừa thoải mái vừa vui, 
                        không những được nạp thêm kiến thức mà còn nạp thêm nhiều bạn bè nữa."
                        author="Ralph Waldo Emerson"
                    />
                </LogoWrapper>
                <LogoWrapper className="flexCenter">
                    <TestimonialBox
                        text="Thầy cô vừa giỏi, vừa nhiệt tình. Mọi người hãy đăng ký học thử đi nha!!!"
                        author="Ralph Waldo Emerson"
                    />
                </LogoWrapper>
                <LogoWrapper className="flexCenter">
                    <TestimonialBox
                        text="Các khóa học ở đây rất hay, ví dụ rất thực tế. Mình là fan ruột của trung tâm á nhaaaaa"
                        author="Ralph Waldo Emerson"
                    />
                </LogoWrapper>
                <LogoWrapper className="flexCenter">
                    <TestimonialBox
                        text="Thầy cô giảng bài chi tiết thât sự luôn, trên trường học hong hiểu mà tới trung tâm học có
                        2 tiếng lại hiểu, thầy cô siêu thiệt chứ."
                        author="Ralph Waldo Emerson"
                    />
                </LogoWrapper>
                <LogoWrapper className="flexCenter">
                    <TestimonialBox
                        text="Học tại trung tâm 2 khóa mà giờ mình đã tìm việc làm rồi nè. Cảm ơn trung tâm nhiều nhé!!!"
                        author="Ralph Waldo Emerson"
                    />
                </LogoWrapper>
                <LogoWrapper className="flexCenter">
                    <TestimonialBox
                        text="Bị mù lập trình mà học 1 khóa tại trung tâm cái hết mù luôn...hahaha"
                        author="Ralph Waldo Emerson"
                    />
                </LogoWrapper>
            </Slider>
        </div>
    );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;