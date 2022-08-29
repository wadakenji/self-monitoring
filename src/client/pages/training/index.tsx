import React, { useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Card, Radio, Result, Skeleton } from 'antd'
import Layout from '../../components/Layout/Layout'
import { Part } from '../../../types'
import { useGetTrainingRecordsByPart } from '../../libs/hooks/useGetTrainingRecordsByPart'

const PageTraining: React.FC = () => {
  const [part, setPart] = useState<Part>('脚')
  const onPartRadioChange = (e: RadioChangeEvent) => {
    setPart(e.target.value)
  }

  const { data, loading, error } = useGetTrainingRecordsByPart(part)

  return (
    <Layout>
      <Radio.Group
        value={part}
        size="large"
        buttonStyle="solid"
        onChange={onPartRadioChange}
        style={{ marginBottom: 16 }}
      >
        {['脚', '胸', '背中', '肩', '腕', '腹'].map(part => (
          <Radio.Button key={part} value={part}>
            {part}
          </Radio.Button>
        ))}
      </Radio.Group>
      <div>
        {loading &&
          new Array(5).fill(null).map((_, i) => (
            <Card key={i} style={{ marginBottom: 12 }}>
              <Skeleton active />
            </Card>
          ))}
        {error && <Result status="error" title="エラーが発生しました。" subTitle={JSON.stringify(error)} />}
        {data && data.length === 0 && <Result title="データがありません。" />}
        {data &&
          data.map(({ date, exercises }) => (
            <Card title={date} key={date} style={{ marginBottom: 12 }} bodyStyle={{ padding: '12px 24px' }}>
              {exercises.map(({ exercise, sets }) => (
                <Card
                  title={exercise}
                  key={exercise}
                  size="small"
                  style={{ marginBottom: 8 }}
                  bordered={false}
                  headStyle={{ border: 'none' }}
                  bodyStyle={{ paddingTop: 0 }}
                >
                  {sets.map(({ weight, rep }, index) => (
                    <div key={`${weight}-${rep}-${index}`}>
                      {weight}kg {rep}回
                    </div>
                  ))}
                </Card>
              ))}
            </Card>
          ))}
      </div>
    </Layout>
  )
}

export default PageTraining
