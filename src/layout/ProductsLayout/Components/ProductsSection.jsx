import React from "react";
import { getScreenSize } from "../../../functions/getScreenSize";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import UIButton from "../../../widgets/UIButtons/UIButton";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <p>{children}</p>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

function ProductsSection() {
  const width = getScreenSize().width;
  // const [value, setValue] = React.useState(0);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className="mt-5 px-4 px-md-5 pt-5 pb-5">
      <div className="text-center mb-2">
        <h3 className="text-primaryTextDark">
          <b>
            Powerful, TeraBlock Products<span className="text-primaryViolet">.</span>
          </b>
        </h3>
        <p className="text-primaryTextGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      {/* <div className="d-flex flex-column align-items-center">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example">
            <Tab icon={<img src="./assets/icons/wallet-tab.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Wallet Management" {...a11yProps(0)} />
            <Tab icon={<img src="./assets/icons/coin-bag.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Coin List" {...a11yProps(1)} />
            <Tab icon={<img src="./assets/icons/bag.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Buy" {...a11yProps(2)} />
            <Tab icon={<img src="./assets/icons/swap.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Swap" {...a11yProps(3)} />
            <Tab icon={<img src="./assets/icons/bridge.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Bridge" {...a11yProps(4)} />
            <Tab icon={<img src="./assets/icons/swidge.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Swidge" {...a11yProps(5)} />
            <Tab icon={<img src="./assets/icons/money-bag.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Earn" {...a11yProps(6)} />
            <Tab icon={<img src="./assets/icons/learn.svg" />} iconPosition="start" style={{ textTransform: "none" }} label="Learn" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          test
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Three
        </TabPanel>
      </div> */}
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-5">
          <h2 className="text-primaryBlue fw-normal text-center text-md-start">
            <b>Wallet</b> Management
          </h2>
          <p className="text-primaryTextGray mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="d-flex align-items-center mt-2">
            <img src="./assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="./assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="./assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img src="./assets/icons/bullet.svg" />
            <p className="mb-0 text-primaryDark ms-2 fw-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className="mt-3 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary">Get started</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/wallet-management.png" className={width < 768 && "w-100"} />
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
