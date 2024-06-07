import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 20px;
  background-color: #f6f7f8;

  .footer-container {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-around;
    }
  }

  .content-container {
    width: 250px;
    // height:
    margin: 0 auto;
  }

  .content-title {
    padding: 5px;
    margin: 10px 0;
    border-bottom: 2px solid #808080;
  }

  .content-link {
    display: block;
    margin: 5px auto;
    background: none;
    border: none;
    font-size: 0.8rem;
    color: #808080;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  .contact-info {
    margin: 5px auto;
    font-size: 0.8rem;
    color: #808080;
  }

  .contact-icon {
    background: none;
    border: none;
    color: #808080;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  .memo {
    margin-top: 20px;
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container container">
        <div className="content-container service-section">
          <h3 className="content-title">客戶服務</h3>
          <button className="content-link">運送方式</button>
          <button className="content-link">退換貨相關</button>
          <button className="content-link">付款資訊</button>
          <button className="content-link">FAQ</button>
        </div>
        <div className="content-container about-section">
          <h3 className="content-title">關於我們</h3>
          <button className="content-link">品牌故事</button>
          <button className="content-link">隱私權政策</button>
        </div>
        <div className="content-container contact-section">
          <h3 className="content-title">聯絡我們</h3>
          <p className="contact-info">連絡電話：+886 912-345-678</p>
          <p className="contact-info">營業時間：周一至周五 09:00 - 18:00</p>
          <div className="contact-icon-section">
            <button className="contact-icon">
              <i className="fa-brands fa-facebook "></i>
            </button>
            <button className="contact-icon">
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button className="contact-icon">
              <i className="fa-brands fa-line"></i>
            </button>
          </div>
        </div>
      </div>
      <p className="memo">僅供個人作品展示，無任何商業用途</p>
    </StyledFooter>
  );
};

export default Footer;
