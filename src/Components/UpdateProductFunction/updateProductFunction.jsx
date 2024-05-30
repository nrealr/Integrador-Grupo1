import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoctorById, getSpecialties } from '../../Services';

export const UpdateProductFunction = () => {

    const { id } = useParams();
    const [doctorToUpdate, setDoctorToUpdate] = useState({});
    const [specialties, setSpecialties] = useState([])
    const [selectedSpecialty, setSelectedSpecialty] = useState('')

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")


  const loadSpecialties = async () =>{
    const specData = await getSpecialties();
    setSpecialties(specData);
  }

  const getData = async ()=>{
    let doctorsData =  await getDoctorById(id)
    console.log(doctorsData)
    setDoctorToUpdate(doctorsData)
  }

  const showDoctorSpecialty = async (doctor, spec) =>{
    await setSelectedSpecialty(spec[doctor.specialtyID].name)
  }

  const mapSpecialties = async (specialties, specId) =>{

    specialties.map((specialty) =>{
        if(specialty.id == specId){
            return <option key={specialty.id} value={specialty.id} selected>{specialty.name}</option>
        }else{
            return <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
        }
      })
  }

  const validateForm = (values) => {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name field is mandatory';
    }
  
    if (!values.lastname) {
      errors.lastname = 'Lastname field is mandatory';
    }
  
    if (!values.rut) {
      errors.rut = 'RUT is mandatory';
    } else if (!/^\d{7,8}-[0-9Kk]$/.test(values.rut)) {
      errors.rut = 'RUT format not valid';
    }

    if (!values.img) {
      errors.img = 'Image URL is mandatory';
    } else if (!isValidURL(values.img)) {
      errors.img = 'Image URL not valid';
    }
  
    if (!values.description) {
      errors.description = 'Description is mandatory';
    }

    if (!values.specialtyID) {
      errors.description = 'Specialty is mandatory';
    }

  
    return errors;
  };
  
  const isValidURL = (url) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  };

const handleSubmit = async (e) => {
e.preventDefault();

    const validationErrors = validateForm(product);
    if (Object.keys(validationErrors).length === 0){
      try {
        const response = await addDoctor(product);
        setProduct({
          name: "",
          lastname: "",
          rut: "",
          img: null,
          description: "",
          specialtyID: ""
        });
        setError("");
        setSuccess("Doctor added");
      } catch (error) {
        console.error("Error on sending data:", error);
        setError("Error adding doctor");
      }
    } else {
      setError(validationErrors);
    }

  
    console.log(product);
  };

  useEffect(() =>{
    getData()
    loadSpecialties();    
    // showDoctorSpecialty(doctorToUpdate, specialties)
    console.log(doctorToUpdate);
      
      }, [id]);

return (
<div>
  <form className='add-product-form' onSubmit={handleSubmit}>
    <label>Name:</label>
    <input
      type="text"
      placeholder={doctorToUpdate.name}
      value={doctorToUpdate.name}
      onChange={(e) => setDoctorToUpdate({ ...doctorToUpdate, name: e.target.value })}
    />
    <label>Last name:</label>
    <input
      type="text"
      value={doctorToUpdate.lastname}
      onChange={(e) => setDoctorToUpdate({ ...doctorToUpdate, lastname: e.target.value })}
    />
    <label>Rut:</label>
    <input
      type="text"
      value={doctorToUpdate.rut}
      onChange={(e) => setDoctorToUpdate({ ...doctorToUpdate, rut: e.target.value })}
    />
    <label>Image url</label>
    <input
      type="text"
      value={doctorToUpdate.img}
      onChange={(e) => setDoctorToUpdate({ ...doctorToUpdate, img: e.target.value })}
    />
    <label>Description:</label>
    <input
      type="text"
      value={doctorToUpdate.description}
      onChange={(e) =>
        setDoctorToUpdate({ ...doctorToUpdate, description: e.target.value })
      }/>
      <label>Specialty:</label>
      <select
        value={doctorToUpdate.specialtyID}
        onChange={(e) =>
            setDoctorToUpdate({ ...doctorToUpdate, specialtyID: e.target.value})} 
        >
          {          
          specialties.map((specialty) =>{
            return <option key={specialty.id} value={specialty.id}>{specialty.name} {
                
            }</option>
          })
          
          }


        </select>


    {error && 
      <div className='errorMessages'>
      {Object.keys(error).map((key) => (
        <p key={key}>{error[key]}</p>
      ))}
    </div>}
    {!error && success}

    <button type="submit">Submit</button>
  </form>
</div>
)
}
