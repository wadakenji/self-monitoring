import { GASClient } from 'gas-client'
import * as server from '../server/main'
import { useEffect, useState } from 'react'

const { serverFunctions } = new GASClient<typeof server>()

const App = () => {
  const [records, setRecords] = useState<any[][]>([])

  useEffect(() => {
    const fetch = async () => {
      await serverFunctions
        .getTrainingRecords()
        .then(r => {
          setRecords(r)
        })
        .catch(e => console.error(e))
    }
    fetch()
  }, [])

  return (
    <div>
      {records.length === 0 && 'loading...'}
      {records.map(r => (
        <p key={String(r[0])}>{r.join()}</p>
      ))}
    </div>
  )
}

export default App
