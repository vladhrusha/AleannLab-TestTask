import React from 'react'
import './JobDetailed.scss'
import { Job } from "../../../models/Job"
import { useLocation } from "react-router-dom";


export const JobDetailed = () => {
  const location = useLocation();
  const job = location.state?.job;
  console.log(job)

  return (
    <div className="content">
      <div className="header">
        <h1>Job Details</h1>
        <button>APPLY NOW</button>
      </div>
      <div className="map"></div>
        <article className="description"></article>
        <div className="info"></div>
        <div className="images"></div>
      <div>
        <button className="returnButton">RETURN TO JOB BOARD</button>
      </div>
    </div>
  )
}

