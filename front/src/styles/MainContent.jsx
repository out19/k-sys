import {DRAWER_WIDTH} from "@/constants/styles"

export const MainContent = ({ children, menuOpen }) => {
  const mainContentStyle = {
    transform: menuOpen ? `translateX(${DRAWER_WIDTH})` : 'translateX(0px)',
    transition: 'transform 300ms ease-out',
    overflow: 'auto',
  };

  console.log("drawer_width is: ", DRAWER_WIDTH);
  return <div style={mainContentStyle}>{children}</div>;
};

export default MainContent;