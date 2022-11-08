import React, { useState, useEffect } from 'react'
import { Job } from '../../../models/Job'
import { JobComponent } from './JobComponent'
import './JobList.scss'

export const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  const API = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data'
  const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = `${API}?access_token=${token}`
      try {
        const res = await fetch(requestURL)
        const data: Job[] = await res.json()

        if (!res.ok || !data) {
          throw res.status
        }
        setJobs(data)
      } catch (err) {
        switch (err) {
          case 401:
            setErrorMessage('Invalid API Request Credentials')
            break
          case 429:
            setErrorMessage('Server Overloaded')
            break
        }
      }
    }
    fetchData()
  }, [])

  if (errorMessage != undefined) {
    return <h1>{errorMessage}</h1>
  }

  return (
    <div className="jobListPage">
      <div className="jobList">
        {jobs.map((job) => (
          <JobComponent key={job.id} job={job}></JobComponent>
        ))}
      </div>
    </div>
  )
}
