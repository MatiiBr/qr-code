import styled from "styled-components";

const Background = styled.div`
  background-color: hsl(212, 45%, 89%);
  height: 100vh;
  display: flex;
  padding: 0 8px;
`;

const QrCodeCard = styled.div`
  max-width: 300px;
  background-color: white;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0px 0px 32px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const QrCode = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: auto;
`;

const QrWrapper = styled.div`
  font-family: "Outfit", sans-serif;
  text-align: center;
`;

const QrTitle = styled.h2`
  color: hsl(218, 44%, 22%);
  font-weight: 700;
`;

const QrDescription = styled.p`
  color: hsl(220, 15%, 55%);
  font-size: 15px;
  font-weight: 400;
  padding: 0 18px;
`;

export const App = () => {
  return (
    <Background>
      <QrCodeCard>
        <QrCode src="/image-qr-code.png" />
        <QrWrapper>
          <QrTitle>Improve your front-end skills by building projects</QrTitle>
          <QrDescription>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </QrDescription>
        </QrWrapper>
      </QrCodeCard>
    </Background>
  );
};
