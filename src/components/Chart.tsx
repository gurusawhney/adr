import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Patient } from '../data/data_model';
import patientData from '../data/patient_data.json';
import TemperatureForm from './TemperatureForm';
import Button from '@mui/material/Button';
import { subDays, isAfter } from 'date-fns';

interface ChartProps {
    name: string;
}

function fetchTemperatureData(name: string) {
    // @ts-ignore
    const patient: Patient | undefined = patientData.find((patient: { name: string; }) => patient.name === name);
    console.log(patient?.body_temperatures)
    // If the patient is found, return the body_temperatures data, otherwise return an empty array
    return patient?.body_temperatures || [];
}

export default function Chart({ name }: ChartProps) {
    const theme = useTheme();

    // Fetch temperature data based on the provided name
    const temperatureData = fetchTemperatureData(name);
    const [showPastWeek, setShowPastWeek] = useState(true);

    const filterDataForPastWeek = () => {
        const pastWeek = subDays(new Date(), 7);
        return temperatureData.filter((entry) => {
            // Ensure that temperatureEntry.date is defined
            return entry.date !== undefined && isAfter(new Date(entry.date), pastWeek);
        });
    };

    const chartData = showPastWeek ? filterDataForPastWeek() : temperatureData;


    return (
    <React.Fragment>
      <Title>Temperature</Title>
      <ResponsiveContainer>
        <LineChart
          data={chartData.reverse()}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Temperature (F)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="temperature"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
        <Button onClick={() => setShowPastWeek((prev: any) => !prev)}>
            {showPastWeek ? 'Show All Time' : 'Show Past Week'}
        </Button>
        <TemperatureForm name={name}/>
    </React.Fragment>
  );
}
