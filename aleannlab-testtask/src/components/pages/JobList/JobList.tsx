import React, { useState, useEffect } from 'react'
import { Job } from "../../../models/Job"
import {JobComponent} from './JobComponent'
import './JobList.scss'


export const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const API = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data'
  const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
  let data
  let res
  let requestURL = ''
  let json = require('../../../models/data.json')
  useEffect(() => {
    const fetchData = async () => {
      requestURL = `${API}?access_token=${token}`
      res = await fetch(requestURL)
      data = await res.json()
      console.log(requestURL)
      setJobs(data)

    }
    //fetchData()
    setJobs(json)
    console.log(jobs)

  }, [])
  // if (jobs === undefined || jobs.length >= 1){
  //   return(
  //     <div>Loading ...</div>
  //   )
  // }


  return (
    <div className="content">
      
    
    <div className="jobList">
        {jobs.map((job) => (
        <JobComponent job={job}></JobComponent>
      ))}
</div>
    </div>
  )
}
