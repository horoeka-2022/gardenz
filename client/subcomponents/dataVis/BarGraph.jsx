import React, { useMemo } from 'react'
import { Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis'

const verticalMargin = 120

export default function BarGraph({ events }) {
  const clickAlert = true
  const width = 400
  const height = 400
  const xMax = width
  const yMax = height - verticalMargin
  const getDates = (d) => Date.parse(d.date)
  const getSortedDates = (data) => data.sort()
  const getVolunteersNeeded = (d) => Number(d.totalVolunteers)
  const data = events
  const margin = { top: 61, right: 0, bottom: 40, left: 0 }

  const formatDate = (d) => {
    let date = ''
    data.map((obj) => {
      const parsed = Date.parse(obj.date)
      if (d === parsed) {
        date = obj.date
      }
    })
    return date
  }

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        round: true,
        domain: getSortedDates(data.map(getDates)),
        padding: 0.42,
      }),
    [xMax, data]
  )
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getVolunteersNeeded))],
      }),
    [yMax, data]
  )

  const dateScale = scaleBand({
    domain: getSortedDates(data.map(getDates)),
    nice: true,
  })
  const volunteerScale = scaleLinear({
    domain: [0, Math.max(...data.map(getVolunteersNeeded))],
    nice: true,
  })
  dateScale.rangeRound([0, xMax])
  volunteerScale.rangeRound([yMax, 0])
  //
  //
  return width < 10 ? null : (
    <>
      <svg
        data-testid="bar-graph"
        className="graph"
        key="barChart"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="url(#teal)" rx={14} />
        <Group top={verticalMargin / 2}>
          {data.map((d) => {
            const dates = getDates(d)
            const barWidth = xScale.bandwidth()
            const barHeight = yMax - (yScale(getVolunteersNeeded(d)) ?? 0)
            const barX = xScale(dates)
            const barY = yMax - barHeight
            const id = d.id
            return (
              <Bar
                key={`bar-${id}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgba(23, 233, 217, .5)"
                onClick={() => {
                  if (clickAlert)
                    alert(
                      `clicked: ${d.title} \nVolunteers: ${d.totalVolunteers}/${d.volunteersNeeded}`
                    )
                }}
              />
            )
          })}

          <AxisBottom
            top={yMax}
            left={margin.left + 5}
            scale={dateScale}
            tickFormat={formatDate}
            tickLabelProps={() => ({
              fontSize: 6,
              textAnchor: 'middle',
            })}
            label="Date"
          />
          <AxisLeft
            scale={volunteerScale}
            left={margin.left + 50}
            label="Number of volunteers"
          />
        </Group>
      </svg>
    </>
  )
}
