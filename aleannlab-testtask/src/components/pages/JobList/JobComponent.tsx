import React from 'react'
import {Job} from '../../../models/Job'
import './JobComponent.scss'
import { Link } from "react-router-dom"


type Props = {
  job: Job
}

export const JobComponent = ({job} : Props) => {
  const date = new Date()
  console.log(typeof date)
  console.log(typeof job.createdAt)
  return (
      <article className="jobComponent">
        <img className="job__image" src={job.pictures[0]} alt="ph"></img>
        <div className="job__data">
          <Link to={`/JobList/1`} state={{job : job}}>
          <p className="job__title">{job.title}</p>
          </Link>
          <br></br>
          <span>Department Name * {job.name}</span>
          <p>{job.address}</p>
        </div>
        <div>
          <p>{job.createdAt.toString()}</p>
        </div>
      </article>
  )
}

