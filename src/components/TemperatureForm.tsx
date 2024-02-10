import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import patientData from '../data/patient_data.json';

interface TemperatureFormProps {
    name: string;
}

function updatePatientData(name: string, date: string, temperature: number) {
    // @ts-ignore
    const foundPatient = patientData.find((patient) => patient.name === name);

    if (foundPatient) {
        const newTemperatureEntry = { date, temperature };
        foundPatient.body_temperatures.push(newTemperatureEntry);

        // Update the patient_data.json file (not possible with import)
        console.log(`Added temperature entry for patient ${name}:`, newTemperatureEntry);
    } else {
        console.log(`Patient ${name} not found.`);
    }
}

export default function TemperatureForm({ name }: TemperatureFormProps) {
    const [date, setDate] = useState('');
    const [temperature, setTemperature] = useState('');

    const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDate(event.target.value);
    };

    const handleTemperatureChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTemperature(event.target.value);
    };

    const handleSubmit = () => {
        // Perform any additional validation if needed
        // Update patient data using the provided updatePatientData function
        updatePatientData(name, date, Number(temperature));

        // Clear the form fields
        setDate('');
        setTemperature('');
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label="Date"
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                    placeholder=""
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Temperature"
                    type="number"
                    value={temperature}
                    onChange={handleTemperatureChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Add Temperature
                </Button>
            </Grid>
        </Grid>
    );
}

