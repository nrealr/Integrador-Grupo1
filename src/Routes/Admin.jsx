import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDoctor } from "../Components/utils/global.context";
import { routes } from "../Components/utils/routes";

const Admin = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let doctorData = await getDoctor();
      setDoctors(doctorData);
    };
    getData();
  }, []);

  console.log(doctors);
  return (
    <div>
      <h1>Welcome to admin panel</h1>

      <Link to={routes.add}>
        {" "}
        <button className="admin-add-button">Add product</button>{" "}
      </Link>

      <div className="grid-container">
        {doctors.map((item) => (
          <div key={item.id} className="grid-item">
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Last Name: {item.lastname}</p>
            <p>Rut: {item.rut}</p>
            {/*             <p>Descripción: {item.descripcion}</p>
             */}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
