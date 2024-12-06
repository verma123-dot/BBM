import React, { useState, useEffect } from "react";
import axios from "axios";

function DonorList() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/donors");
        setDonors(response.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };
    fetchDonors();
  }, []);

  return (
    <div className="donor-list">
      <h2>Available Donors</h2>
      {donors.length === 0 ? (
        <p>No donors registered yet.</p>
      ) : (
        <ul>
          {donors.map((donor) => (
            <li key={donor._id}>
              <p>Name: {donor.name}</p>
              <p>Blood Group: {donor.bloodGroup}</p>
              <p>Contact: {donor.contact}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DonorList;
