import { useEffect, useState } from 'react'

export const useQuery = (query, reference) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (!!query.length) {
        const data = await Promise.all(query.map((singleQuery) => singleQuery()))
        setData(data.map((res, index) => ({ [reference[index]]: res })))
        setIsLoading(false)
        return data
      }

      const data = await query()
      setData(data)
      setIsLoading(false)
      return data
    }

    fetchData()
  }, [])

  return { isLoading, data }
}
