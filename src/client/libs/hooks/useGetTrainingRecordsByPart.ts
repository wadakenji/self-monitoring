import useSWR from 'swr'
import { Part } from '../../../types'
import { GET_TRAINING_RECORDS_BY_PART_KEY } from '../constants/swrKey'
import { fetchTrainingRecordsByPart } from '../api'

export const useGetTrainingRecordsByPart = (part: Part) => {
  const swrResponse = useSWR([GET_TRAINING_RECORDS_BY_PART_KEY, part], () => fetchTrainingRecordsByPart(part))
  const { data, error } = swrResponse
  return {
    loading: !data && !error,
    ...swrResponse,
  }
}
