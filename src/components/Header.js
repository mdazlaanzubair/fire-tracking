import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} /> Fire Tracker
      </h1>
      <p style={{ "textAlign": "center", "margin": "1% auto" }}>
        This project is powered by NASA as the data is coming from NASA's API i.e. EONET
        (The Earth Observatory Natural Event Tracker) 
      </p>
    </header>
  );
};

export default Header;
