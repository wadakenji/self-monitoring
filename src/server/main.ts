import { test } from './libs/test'

// gas-esbuild-pluginの使い方として、gasで叩ける関数はglobalオブジェクトに紐付ける
// cf: https://www.npmjs.com/package/esbuild-gas-plugin
// cf. https://github.com/fossamagna/gas-webpack-plugin
declare const global: Record<string, unknown>

const doGet = () => {
  return HtmlService.createHtmlOutputFromFile('index')
}

global.doGet = doGet

const getTrainingRecords = () => {
  test()

  const ss = SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty('TRAINING_SPREADSHEET_ID') || ''
  )
  const sheet = ss.getSheetByName('記録')

  if (!sheet) return []

  const records = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues()

  return records.map(record => record.map(cell => (cell instanceof Date ? cell.toString() : cell)))
}

global.getTrainingRecords = getTrainingRecords

export { getTrainingRecords }
