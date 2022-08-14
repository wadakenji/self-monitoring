import format from 'date-fns/format'
import { TRAINING_SPREADSHEET_ID } from '../../constants'
import { Part, TrainingRecordsByDate } from '../../../types'

const ss = SpreadsheetApp.openById(TRAINING_SPREADSHEET_ID)

/** 部位別記録シートを取得する */
const getTrainingRecordSheetByPart = (part: Part) => {
  const sheet = ss.getSheetByName(`【部位別記録】${part}`)
  if (!sheet) throw new Error('getTrainingRecordSheetByPart: Sheet not found.')
  return sheet
}

/** 渡された部位の記録を整形して返す */
export const getTrainingRecordsByPart = (part: Part): TrainingRecordsByDate => {
  const sheet = getTrainingRecordSheetByPart(part)

  // 100行分取得
  const records = (
    sheet
      .getRange(2, 1, 100, 4)
      .getValues()
      .filter(row => row[0]) as [Date, string, number, number][]
  ).map(([date, exercise, weight, rep]) => ({ date: format(date, 'yyyy年MM月dd日'), exercise, weight, rep }))

  // 重複を排除した日付配列
  const dates = records.reduce<string[]>((acc, cur) => {
    if (acc.includes(cur.date)) acc.push(cur.date)
    return acc
  }, [])

  // 日付とその日実施した種目の配列
  const dateWithExercises = dates.map(date => {
    const recordsInDate = records.filter(record => record.date === date)
    const exercises = recordsInDate.reduce<string[]>((acc, cur) => {
      if (acc.includes(cur.exercise)) acc.push(cur.exercise)
      return acc
    }, [])
    return { date, exercises }
  })

  return dateWithExercises.map(({ date, exercises }) => ({
    date,
    exercises: exercises.map(exercise => {
      const filteredRecords = records.filter(record => record.date === date && record.exercise === exercise)
      return {
        exercise,
        sets: filteredRecords.map(({ weight, rep }) => ({ weight, rep })),
      }
    }),
  }))
}
