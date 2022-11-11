import React from "react";
import styled from "styled-components";
// Components
import LecturerItem from "../elements/LecturerItem";

export default function Lecturer() {
    return (
        <Wrapper id="pricing">
            <div className="whiteBg">
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold">Đội ngũ giảng viên chuyên nghiệp</h1>
                        <p className="font20">
                            Với kinh nghiệm nhiều năm giảng dạy và luôn nhiệt tình với học viên,
                            <br />
                            các giảng viên của chúng tôi luôn nhận được sự yêu mến ngay từ buổi học đầu tiên.
                        </p>
                    </HeaderInfo>
                    <TablesWrapper className="flexSpaceNull">
                        <TableBox>
                            <LecturerItem
                                name="Dr. Angela Yu"
                                introduce="Tôi là Angela, tôi là một nhà phát triển với niềm đam mê giảng dạy. 
                                Tôi là người hướng dẫn chính tại London App Brewery, Chương trình đào tạo lập trình hàng đầu của London."
                                skills={[
                                    { name: "Developer and Lead Instructor", cheked: true },
                                    { name: "Offer", cheked: true },
                                ]}
                            />
                        </TableBox>
                        <TableBox>
                            <LecturerItem
                                name="Stephane Maarek"
                                introduce="Stephane là một kiến trúc sư, nhà tư vấn và nhà phát triển 
                                phần mềm giải pháp có mối quan tâm đặc biệt đến tất cả những thứ liên 
                                quan đến Dữ liệu lớn, Đám mây và API."
                                skills={[
                                    { name: "Solutions Architect", cheked: true },
                                    { name: "Consultant", cheked: true },
                                    { name: "Software Developer", cheked: true },
                                ]}
                            />
                        </TableBox>
                        <TableBox>
                            <LecturerItem
                                name="Chad Neuman, Ph.D"
                                introduce="Tôi đam mê giáo dục truyền thông, viết lách, nghệ thuật và thiết kế và 
                                tôi hiện là giáo sư toàn thời gian về truyền thông và phương tiện kỹ thuật số. Tôi 
                                đã phát triển chương trình giảng dạy và dạy các lớp về thiết kế, nhiếp ảnh và viết 
                                lách trong hơn một thập kỷ."
                                skills={[
                                    { name: "Professor", cheked: true },
                                    { name: "Graphic Designer", cheked: true },
                                    { name: "Photographer 20+ yrs exp", cheked: true },
                                ]}
                            />
                        </TableBox>
                    </TablesWrapper>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;



