import React, { useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Card, Radio } from 'antd'
import Layout from '../../components/Layout/Layout'

const DUMMY = [
  {
    date: '2022年7月22日',
    exercises: [
      {
        exercise: 'ダンベルベンチプレス',
        sets: [
          {
            weight: 20,
            rep: 10,
          },
          {
            weight: 25,
            rep: 8,
          },
        ],
      },
      {
        exercise: 'ダンベルフライ',
        sets: [
          {
            weight: 20,
            rep: 10,
          },
          {
            weight: 25,
            rep: 8,
          },
        ],
      },
    ],
  },
  {
    date: '2022年7月22日',
    exercises: [
      {
        exercise: 'ダンベルベンチプレス',
        sets: [
          {
            weight: 20,
            rep: 10,
          },
          {
            weight: 25,
            rep: 8,
          },
        ],
      },
    ],
  },
  {
    date: '2022年7月22日',
    exercises: [
      {
        exercise: 'ダンベルベンチプレス',
        sets: [
          {
            weight: 20,
            rep: 10,
          },
          {
            weight: 25,
            rep: 8,
          },
        ],
      },
    ],
  },
]

const PageTraining: React.FC = () => {
  const [part, setPart] = useState('脚')
  const onPartRadioChange = (e: RadioChangeEvent) => {
    setPart(e.target.value)
  }

  return (
    <Layout>
      <Radio.Group
        value={part}
        size="large"
        buttonStyle="solid"
        onChange={onPartRadioChange}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="脚">脚</Radio.Button>
        <Radio.Button value="胸">胸</Radio.Button>
        <Radio.Button value="背中">背中</Radio.Button>
        <Radio.Button value="肩">肩</Radio.Button>
        <Radio.Button value="腕">腕</Radio.Button>
        <Radio.Button value="腹">腹</Radio.Button>
      </Radio.Group>
      <div>
        {DUMMY.map(({ date, exercises }) => (
          <Card title={date} key={date} style={{ marginBottom: 12 }}>
            {exercises.map(({ exercise, sets }) => (
              <Card title={exercise} key={exercise} size="small">
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
