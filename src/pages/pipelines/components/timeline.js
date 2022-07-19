import { TimeLineCard } from '../../../components'
import { useData, useQuery } from '../../../hooks'
import { getPipelines, getJobs, getProjects } from '../../../services'
import styled from '@emotion/styled'
import { CaretDown, Text } from '../../../DesignSystem'

export const TimeLine = () => {
  const { isLoading, data } = useQuery(
    [getPipelines, getJobs, getProjects],
    ['pipelines', 'jobs', 'projects']
  )

  const { getPipelinesInfo } = useData(data)

  if (isLoading) return <h1>Loading....</h1>

  const renderPipelines = () => {
    return getPipelinesInfo().map(pipeline =>
      <TimeLineCard
        key={pipeline.id}
        pipeline={pipeline}
      />
    )
  }

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <TableWrapper>
            <Text type='subtitle'>{getPipelinesInfo().length} pipelines in the workflow</Text>
            <FiltersContainer>
              <FilterButton><CaretDown /><Text>Status</Text></FilterButton>
              <FilterButton><CaretDown /><Text>Name</Text></FilterButton>
            </FiltersContainer>
          </TableWrapper>
        </TableHeader>
      {renderPipelines()}
      </TableContainer>
    </Container>
  )
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}))

const TableContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `2px solid ${theme.borders.main}`,
  width: '90%',
  borderBottom: 'none'
}))

const TableHeader = styled.section(({ theme }) => ({
  width: '100%',
  height: '50px',
  border: `1px solid ${theme.borders.main}`,
  backgroundColor: theme.background.navbar,
  borderBottom: 'none',
  padding: '12px 8px'
}))

const TableWrapper = styled.div({
  width: '100%',
  padding: '5px 18px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const FiltersContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  width: '180px'
})

const FilterButton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
