import apiBase from "app/axios/apiBase";
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
// Assets
import ContactImg1 from "../../assets/img/contact1.jpeg";
import ContactImg2 from "../../assets/img/home1.jpeg";
import ContactImg3 from "../../assets/img/home_page.jpeg";


export default function Contact() {

  const [formInput, setFormInput] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const hanldeSubmit = () => {
    apiBase.post('/contact', {
      send_name: formInput.send_name,
      send_email: formInput.send_email,
      send_phone: formInput.send_phone,
      send_subject: formInput.send_subject,
      send_message: formInput.send_message
    })
      .then(res => {
        Swal.fire(
          '',
          'Gửi liên hệ thành công',
          'success',
        )
      })
      .catch((err) => console.log('No'))
  }

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Liên hệ với chúng tôi</h1>
            <p className="font18">
              Hãy điền thông tin chính xác vào các mục dưới đây,
              <br />
              tư vấn viên của Code Academy sẽ nhanh chóng liên hệ và giải đáp thắc mắc cho bạn.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font15">Họ và tên(*):</label>
                <input type="text" id="fname" name="send_name" className="font20 extraBold" onChange={handleChange} />
                <label className="font15">Số điện thoại:</label>
                <input type="text" id="email" name="send_email" className="font20 extraBold" onChange={handleChange} />
                <label className="font15">Email(*):</label>
                <input type="text" id="email" name="send_phone" className="font20 extraBold" onChange={handleChange} />
                <label className="font15">Tiêu đề(*):</label>
                <input type="text" id="email" name="send_subject" className="font20 extraBold" onChange={handleChange} />
                <label className="font15">Nội dung cần giải đáp(*):</label>
                <textarea rows="4" cols="50" type="text" id="send_message" name="send_message" className="font20 extraBold" onChange={handleChange} />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput onClick={() => hanldeSubmit()} type="submit" value="Gửi" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" width={180} />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" width={180} />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" width={278} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;








