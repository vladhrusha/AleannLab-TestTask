import React from 'react'
import './JobDetailed.scss'
import { Job } from '../../../models/Job'
import { Link, useLocation } from 'react-router-dom'
import bookmarkImg from 'images/bookmark.png'
import shareImg from 'images/share.png'
import geoMarkerImg from 'images/geoMarker.png'

export const JobDetailed = () => {
  const location = useLocation()
  const job = location.state?.job
  console.log(job)
  const currentDateTime = new Date()
  const date = new Date(job.createdAt)
  const diff = Math.abs(currentDateTime.getTime() - date.getTime())
  const days = Math.floor(diff / (3600 * 24) / 1000)

  const description = job.description.substring(
    0,
    job.description.indexOf('Responsopilities:'),
  )
  const responsibilities = job.description.substring(
    job.description.indexOf('Responsopilities:'),
    job.description.indexOf('Compensation & Benefits:'),
  )
  const compensationAndBenefits = job.description.substring(
    job.description.indexOf('Compensation & Benefits:'),
    job.description.length,
  )

  const onHandleReturn = () => {}

  return (
    <div className="jobDetailsPage">
      <div className="jobDetails">
        <div className="jobDetails__header">
          <h1 className="sectionTitle">Job Details</h1>
          <div>
            <img className="header__img" src={bookmarkImg}></img>
            <span>Save to my list</span>
            <img className="header__img" src={shareImg}></img>
            <span>Share</span>
          </div>
        </div>
        <button className="applyBtn">APPLY NOW</button>
        <div className="heading">
          <p className="title">{job.title}</p>
          <div>
            <span>{job.salary}</span>
            <span>Brutto, per year</span>
          </div>
        </div>

        <span className="jobDetails__postTime">
          {days < 365
            ? `Posted ${days} days ago`
            : days < 730
            ? `Posted 1 year ago`
            : `Posted ${Math.floor(days / 365)} years ago`}
        </span>

        <article className="description">
          <p>{description}</p>
          <h3 className="pTitle">Responsopilities</h3>
          <p>{responsibilities}</p>
          <h3 className="pTitle">Compensation & Benefits:</h3>
          <p>{compensationAndBenefits}</p>
        </article>
        <button className="applyBtn">APPLY NOW</button>

        <div className="additionalInfo">
          <h1 className="sectionTitle">Additional info</h1>
          <h5 className="additionalInfo__title">Employment Type</h5>
          <div className="employmentTypes">
            {job.employment_type.map((type: string) => (
              <div className="employmentType">{type}</div>
            ))}
          </div>

          <h5 className="additionalInfo__title">Benefits</h5>
          <div className="benefits">
            {job.benefits.map((benefit: string) => (
              <div className="benefit">{benefit}</div>
            ))}
          </div>
        </div>
        <h1 className="sectionTitle">Attached images</h1>
        <div className="attachedImages">
          {job.pictures.map((picture: string) => (
            <img className="attachedImg" src={picture} />
          ))}
        </div>
        <div>
          <Link to="/JobList">
            <button className="returnButton" onClick={onHandleReturn}>
              RETURN TO JOB BOARD
            </button>
          </Link>
        </div>
      </div>
      <div className="card">
        <article className="card__info">
          <span>Department name</span>
          <span>{job.name}</span>
          <span>
            <img src={geoMarkerImg} />
            {job.address}
          </span>
          <span>{job.phone}</span>
          <span>{job.email}</span>
        </article>
        <img className="card__map" src={bookmarkImg}></img>
      </div>
    </div>
  )
}
