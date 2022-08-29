import { GASClient } from 'gas-client'
import * as server from '../../../server/main'
import { Part } from '../../../types'

const { serverFunctions } = new GASClient<typeof server>()

/** 部位別に日付ごとの筋トレ記録を返すAPIにアクセスする */
export const fetchTrainingRecordsByPart = (part: Part) => serverFunctions.getTrainingRecordsByPart(part)
