import React from "react";

export const getSinav = (async) => {
  return fetch("http://localhost:8085/api/sinavs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": " *",
      "Access-Control-Allow-Credentials": true,
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      console.log("Hata Oluştu!");
      console.warn(error);
    });
};
