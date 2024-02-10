import React from 'react';
import {Patient} from "../data/data_model";
import patientData from "../data/patient_data.json";
import {useTheme} from "@mui/material/styles";
import Title from "./Title";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
interface PatientDataProps {
    name: string;
}

function fetchPatientData(name: string) {
    // @ts-ignore
    const patient: Patient = patientData.find((patient: { name: string; }) => patient.name === name);
    return patient
}

export default function PatientData({ name }: PatientDataProps) {
    const theme = useTheme();
    console.log("Patient name is")
    console.log(name)
    // Fetch temperature data based on the provided name
    const patientData = fetchPatientData(name);

    return (
        <React.Fragment>
            <Title>Patient Details</Title>
            <Box display="flex" alignItems="center">
                <Avatar src="/broken-image.jpg" alt="Patient Avatar" sx={{ width: 80, height: 80, marginRight: 2 }} />
                <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {patientData.name}
                    </Typography>
                    <Typography fontStyle="italic" fontWeight="light" color="textSecondary">
                        Height: {patientData.height} cm | Weight: {patientData.weight} kg | Age: {patientData.age} years | Gender: {patientData.gender}
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    );
}