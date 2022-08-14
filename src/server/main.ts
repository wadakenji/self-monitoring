// gas-esbuild-pluginの使い方として、gasで叩ける関数はglobalオブジェクトに紐付ける
// cf: https://www.npmjs.com/package/esbuild-gas-plugin
// cf. https://github.com/fossamagna/gas-webpack-plugin
import { getTrainingRecordsByPart } from './libs/spreadsheet/training'

declare const global: Record<string, unknown>

/** フロントエンドのHTMLを配信 */
const doGet = () => {
  return HtmlService.createHtmlOutputFromFile('index')
}
global.doGet = doGet

/** 渡された部位の最近の日付ごとの筋トレ内容を返す */
global.getTrainingRecordsByPart = getTrainingRecordsByPart

export { getTrainingRecordsByPart }
