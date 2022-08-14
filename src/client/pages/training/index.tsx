import React, { useState } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Card, Radio } from 'antd'
import Layout from '../../components/Layout/Layout'
import { Part } from '../../../types'

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
  const [part, setPart] = useState<Part>('脚')
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
        {['脚', '胸', '背中', '肩', '腕', '腹'].map(part => (
          <Radio.Button key={part} value={part}>
            {part}
          </Radio.Button>
        ))}
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
