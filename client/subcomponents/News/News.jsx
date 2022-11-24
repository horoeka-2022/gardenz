import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    // styling & order of content
    <article className="w-64 my-4 mx-4 p-6 rounded-lg border-3 shadow-xl ">
      <h2 className="font-bold ml-6 text-lg">{news.title}</h2>
      <p className="ml-6 text-zinc-400">{createTime}</p>
      <p>{news.content}</p>
      <p>
        By {news.firstName} {news.lastName}:
      </p>
    </article>
  )
}
