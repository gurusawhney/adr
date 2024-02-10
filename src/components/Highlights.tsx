import * as React from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Title from "./Title";
import Typography from '@mui/material/Typography';


function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Highlights() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const today: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',      // Full month name (e.g., December)
        day: 'numeric',     // Numeric day of the month (e.g., 11th)
        year: 'numeric',    // Numeric year (e.g., 2023)
    };

    const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(today);

    const actions: string[] = ["Take a temperature reading", "Administer medication"];

    return (
        <React.Fragment>
        <Title>Highlights</Title>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${actions[value]}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
            as of {formattedDate}
        </Typography>
        <Link color="primary" href="#" onClick={preventDefault}>
            See more suggestions
        </Link>
        </React.Fragment>
    );
}