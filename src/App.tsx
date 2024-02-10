import React, { useState } from 'react';
import { Theme } from '@mui/material';
import { styled } from '@mui/system';

const styleConfig = {
  leftColumnBgColor: 'grey',
  rightColumnBgColor: 'lightgrey',
  selectedRowBgColor: 'purple',
  unselectedRowBgColor: 'grey',
  hoverRowBgColor: 'darkgrey',
  selectedRowTextColor: 'white',
  boxShadowColor: 'rgba(0, 0, 0, 0.3)',
};

const Container = styled('div')({
  display: 'flex',
  backgroundColor: 'lightgrey', // Set container background color to light grey
});

const LeftColumn = styled('div')<Theme>(({ theme }) => ({
  width: '250px', // Set width of left column to 250px
  padding: theme.spacing(1), // Restore padding to normal
  backgroundColor: styleConfig.leftColumnBgColor,
}));

const RightColumn = styled('div')<Theme>(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: styleConfig.rightColumnBgColor,
}));

const Row = styled('div')<Theme & { selected: boolean }>(({ theme, selected }) => ({
  width: '250px', // Set width of row to 250px
  marginBottom: theme.spacing(1),
  padding: theme.spacing(2), // Restore padding to normal
  backgroundColor: selected ? styleConfig.selectedRowBgColor : styleConfig.unselectedRowBgColor,
  color: selected ? styleConfig.selectedRowTextColor : 'inherit',
  boxShadow: selected ? `0 2px 4px ${styleConfig.boxShadowColor}` : 'none',
  '&:hover': {
    backgroundColor: selected ? styleConfig.selectedRowBgColor : styleConfig.hoverRowBgColor,
    cursor: 'pointer',
  },
}));

function App(): JSX.Element {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <Container>
      {/* Left Column */}
      <LeftColumn>
        {[1, 2, 3, 4, 5, 6].map(index => (
          <Row
            key={index}
            selected={index === selectedRow}
            onClick={() => handleRowClick(index)}
          >
            Row {index}
          </Row>
        ))}
      </LeftColumn>
      
      {/* Right Column */}
      <RightColumn>
        {selectedRow !== null && `Text for Row ${selectedRow}`}
      </RightColumn>
    </Container>
  );
}

export default App;
