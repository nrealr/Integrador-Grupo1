import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Constants";
import { getDoctors, deleteDoctor } from "../../Services";
import { DeleteProductFunction } from "../../Components";
import "./Admin.styles.css";
import { HolidayVillage } from "@mui/icons-material";

export const Admin = () => {
  return (
    <div className="admin-welcome">
      <p>Welcome to the Admin Dashboard!</p>
    </div>
  );
};
