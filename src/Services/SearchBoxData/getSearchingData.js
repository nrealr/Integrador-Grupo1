import { searchDoctor } from "../Doctors/searchDoctor"
import { getFeatures } from "../Features/getFeatures"
import { getSpecialties } from "../Specialties/getSpecialties"

export const getSearchingData = async (query, location) => {
    const [doctors, specialties, features] = await Promise.all([
        searchDoctor(query, location),
        getSpecialties(),
        getFeatures()
    ]);

    return [
        ...doctors.map(doctor => ({
            ...doctor,
            type: 'doctor'
        })),
        ...specialties.map(specialty => ({
            ...specialty,
            type: 'specialty'
        })),
        ...features.map(feature => ({
            ...feature,
            type: 'feature'
        }))
    ];
};