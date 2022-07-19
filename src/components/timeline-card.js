import styled from '@emotion/styled'
import { Calendar, Failure, Success, Text, Timer } from '../DesignSystem'
import PropTypes from 'prop-types'

export const TimeLineCard = ({ pipeline }) => {
  const {
    name,
    id,
    status,
    duration,
    dateOfExecution,
    failedJobs
  } = pipeline

  const renderStatusIcon = () => {
    if (status === 'success') return <Success />
    return <Failure />
  }

  const renderJobs = () => {
    return failedJobs.map((job, index) => {
      if (job.ok) {
        return (<Text key={`${job.ok}-${index}`}>{`Jobs: ${job.ok}`}</Text>)
      }

      const { status, stage } = job
      return (
        <Text
          key={`${status}-${stage}-${index}`}
        >
          Jobs Failed <Text>{stage} {status}</Text>
        </Text>
      )
    })
  }

  return (
    <CardContainer>
      <Description>
        <Status>
          {renderStatusIcon()}
          <Text type='secondary'>Id: {id}</Text>
        </Status>
        <Info>
          <Text type='subtitle'>{name}</Text>
          {renderJobs()}
        </Info>
      </Description>
      <Time>
        <TimeInfoWrapper><Calendar /> <Text type='secondary' space>{dateOfExecution}</Text></TimeInfoWrapper>
        <TimeInfoWrapper><Timer /> <Text type='secondary' space>{duration}s</Text></TimeInfoWrapper>
      </Time>
    </CardContainer>
  )
}

TimeLineCard.propTypes = {
  pipeline: PropTypes.object
}

const CardContainer = styled.section(({ theme }) => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.borders.main}`,
  padding: '12px 8px'
}))

const Description = styled.div({
  width: '60%',
  display: 'flex'
})

const Time = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '110px'
})

const Status = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  marginRight: '8px'
})

const Info = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  textAlign: 'left'
})

const TimeInfoWrapper = styled.div({
  display: 'flex',
  textAlign: 'left'
})
