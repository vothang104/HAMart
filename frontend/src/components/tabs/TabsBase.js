import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { v4 } from 'uuid';
import { TabContext, TabList } from '@mui/lab';

function TabsBase({ tabLabels = [{ label: 'Label', value: '1' }], children }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} sx={{ minHeight: '34px' }}>
            {tabLabels.map((tabLabel) => (
              <Tab
                key={v4()}
                label={tabLabel.label}
                value={tabLabel.value}
                sx={{ textTransform: 'none', minHeight: '34px' }}
              />
            ))}
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}
export default TabsBase;
