import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import patientData from '../data/patient_data.json';

interface MedicationFormProps {
    name: string;
}

function updateMedicationData(patientName: string, name: string, dosage: string, start_date: string, end_date: string) {
    // @ts-ignore
    const foundPatient = patientData.find((patient) => patient.name === patientName);

    if (foundPatient) {
        const newMedicationEntry = { name, dosage, start_date, end_date};
        foundPatient.medications.push(newMedicationEntry);

        // Update the patient_data.json file (not possible with import)
        console.log(`Added temperature entry for patient ${patientName}:`, newMedicationEntry);
    } else {
        console.log(`Patient ${patientName} not found.`);
    }
}

export default function MedicationForm({ name }: MedicationFormProps) {
    const [formData, setFormData] = useState({
        medicationName: '',
        dosage: '',
        startDate: '',
        endDate: '',
        // other form fields...
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const { medicationName, dosage, startDate, endDate } = formData;

        console.log('Medication Data:', { medicationName, dosage, startDate, endDate });

        // Update patient data if needed
        updateMedicationData(name, medicationName, dosage, startDate, endDate);

    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label="Name"
                    type="text"
                    name="medicationName"
                    value={formData.medicationName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Dosage (mg)"
                    type="text"
                    name="dosage"
                    value={formData.dosage}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="End Date"
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Add Medication
                </Button>
            </Grid>
        </Grid>
    );
}


