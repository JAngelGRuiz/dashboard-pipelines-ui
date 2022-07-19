import { useEffect, useState } from 'react'
import { adaptPipelineForUI, adaptResponse } from '../adapters'

export const useData = (data) => {
  const [pipelines, setPipelines] = useState([])
  const [jobs, setJobs] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setPipelines(adaptResponse(data, 'pipelines').pipelines || [])
    setJobs(adaptResponse(data, 'jobs').jobs || [])
    setProjects(adaptResponse(data, 'projects').projects || [])
  }, [data])

  const getPipelinesInfo = () => pipelines && pipelines.map((pipeline) => adaptPipelineForUI(pipeline, jobs, projects))

  return { pipelines, jobs, projects, getPipelinesInfo }
}
