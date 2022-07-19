import { buildDate, ONE_DAY_IN_MS, SIX_DAYS_IN_MS } from '../utils'

export const getProjectName = (projects, projectId) => {
  return projects.find(ele => ele.id === projectId).name || ''
}

export const getDateOfExecution = (jobs, pipelineId) => {
  const job = jobs.find(ele => ele.pipeline_id === pipelineId && ele.stage === 'execute')
  if (job.status !== 'success') {
    return 'Not executed'
  }

  const dateOfExecution = new Date(job.created_at)
  const today = new Date()

  if (today - dateOfExecution <= SIX_DAYS_IN_MS) {
    return `${Math.floor((today - dateOfExecution) / ONE_DAY_IN_MS)} days ago`
  }

  return buildDate(dateOfExecution)
}

export const getFailJobs = (pipelineId, status, jobs) => {
  if (status === 'success') {
    return [{ ok: 'All good :)' }]
  }

  const failedJobs = jobs.filter(ele => ele.pipeline_id === pipelineId && ele.status === 'failed')
  return (failedJobs.map((job) => ({ stage: job.stage, status: job.status })))
}

export const adaptPipelineForUI = (pipeline, jobs, projects) => {
  const {
    id: pipelineId,
    project_id: projectId,
    created_at: createdAt,
    created_by_user: createdByUser,
    status,
    duration_secconds: durationSecconds
  } = pipeline

  return {
    name: getProjectName(projects, projectId),
    id: pipelineId,
    status,
    duration: durationSecconds,
    dateOfExecution: getDateOfExecution(jobs, pipelineId),
    failedJobs: getFailJobs(pipelineId, status, jobs)
  }
}
