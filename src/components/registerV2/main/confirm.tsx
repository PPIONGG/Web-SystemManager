import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Typography variant="body1">{children}</Typography>}
    </div>
  );
};

function Confirm() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        style={{
          width: "396px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
        TabIndicatorProps={{
          style: {
            height: "0px",
          },
        }}
        sx={{
          "& .MuiTab-root": {
            fontSize: "12px",
            fontWeight: "bold",
          },
        }}
      >
        <Tab
          label="STANDARD"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#ffcc33",border : "1px solid #ffffff" },
            color: "#ffffff",
            width: "99px",
            backgroundColor: "black",
            clipPath: "polygon(-30% 80%, 40% -10%, 700% 100%, 0 100%)",
            border : "1px solid #ffffff"
          }}
        />
        <Tab
          label="ADD"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#ffcc33",border : "1px solid #ffffff" },
            color: "#ffffff",
            width: "99px",
            backgroundColor: "black",
            clipPath: "polygon(-30% 80%, 40% -10%, 700% 100%, 0 100%)",
            border : "1px solid #ffffff"
          }}
        />
        <Tab
          label="RESET"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#ffcc33",border : "1px solid #ffffff" },
            color: "#ffffff",
            width: "99px",
            backgroundColor: "black",
            clipPath: "polygon(-30% 80%, 40% -10%, 700% 100%, 0 100%)",
            border : "1px solid #ffffff"
          }}
        />
        <Tab
          label="SUSPENTION"
          sx={{
            "&.Mui-selected": { color: "black", backgroundColor: "#ffcc33",border : "1px solid #ffffff" },
            color: "#ffffff",
            width: "99px",
            backgroundColor: "black",
            clipPath: "polygon(-30% 80%, 40% -10%, 700% 100%, 0 100%)",
            border : "1px solid #ffffff"
          }}
        />
        {/* <Tab
    label={
      <div>
        <span style={{ marginRight: '5px' }}>Item 1</span>
        <span style={{ fontSize: '12px', color: 'gray' }}>Subtitle</span>
      </div>
    }
  /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <div style={{ padding: "20px", background: "lightgray" }}>
          Content for Item 1
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>Content for Item 2</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>Content for Item 3</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>Content for Item 4</div>
      </TabPanel>
    </div>
  );
}

export default Confirm;
