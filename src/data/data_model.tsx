export interface Patient {
    name?: string;
    first_name?: string;
    age?: number;
    height?: number;
    weight?: number;
    gender?: string;
    medications?: Medication[];
    body_temperatures?: BodyTemperature[];
}

interface Medication {
    name?: string;
    dosage?: string;
    start_date?: string;
    end_date?: string;
}

interface BodyTemperature {
    date?: string;
    temperature?: number;
}
