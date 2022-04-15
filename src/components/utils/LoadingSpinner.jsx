import styled from "styled-components";

const LoadingSpinnerSplash = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  .inner {
    text-align: center;
  }

  .spinner {
    background: #fff;
    width: 70px;
    height: 70px;
    position: relative;
    animation: rotate 1s linear infinite;
    border-radius: 100%;
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      background: linear-gradient(270deg, #44c8f5, #04a5d2);
      background-size: 200% 200%;
      height: 100%;
      width: 100%;
      animation: AnimationName 1s ease infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes background {
      0% {
        background-position: 0% 50%
      }
      50% {
        background-position: 100% 50%
      }
      100% {
        background-position: 0% 50%
      }
    }
  }
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerSplash>
      <div className="inner">
        <div className="spinner">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <p>Loading...</p>
      </div>
    </LoadingSpinnerSplash>
  )
}
export default LoadingSpinner;
