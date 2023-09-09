import styled from '@emotion/styled';

// The styled component for the MinimizeBar
const MinimizeBarContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: #4455aa;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease; // smooth transition for hover effect
  &:hover {
    color: #666;
  }
`;

export default function MinimizeBar(props) {
  const { isDisplayed, setDisplay } = props;

  const toggleDisplay = () => {
    // toggles the display based on its previous state
    setDisplay(!isDisplayed);
  };

  return (
    <MinimizeBarContainer onClick={toggleDisplay}>
      {isDisplayed ? '+' : '-'}
    </MinimizeBarContainer>
  );
}
