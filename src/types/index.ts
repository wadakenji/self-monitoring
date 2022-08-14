/** 部位を示す文字列のユニオン */
export type Part = '脚' | '胸' | '背中' | '肩' | '腕' | '腹'

/** 筋トレ記録を日付でまとめて整形する形 */
export type TrainingRecordsByDate = {
  date: string
  exercises: {
    exercise: string
    sets: { weight: number; rep: number }[]
  }[]
}[]
