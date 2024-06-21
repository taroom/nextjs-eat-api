"use client";
import React from "react";

interface IFaceViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<IFaceViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    alert("hey kamu mau lihat user. " + userId);
  };

  return (
    <>
      <button onClick={handleClick}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;
