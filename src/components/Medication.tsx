import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {Patient} from "../data/data_model";
import patientData from "../data/patient_data.json";
import MedicationForm from "./MedicationForm";


interface MedicationProps {
  name: string;
}

function fetchMedicationData(name: string) {
  // @ts-ignore
  const patient: Patient | undefined = patientData.find((patient: { name: string; }) => patient.name === name);
  console.log(patient?.medications)
  // If the patient is found, return the body_temperatures data, otherwise return an empty array
  return patient?.medications || [];
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Medication({ name }: MedicationProps) {
  const rows = fetchMedicationData(name);

  return (
    <React.Fragment>
      <Title>Recent Medications</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Dosage</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dosage}</TableCell>
              <TableCell>{row.start_date}</TableCell>
              <TableCell>{row.end_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MedicationForm name={name}/>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See medication history
      </Link>
    </React.Fragment>
  );
}
