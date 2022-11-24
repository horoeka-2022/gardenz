import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    // styling & order of content
    <article className="my-6 mx-4 p-6 rounded-3xl border-3 shadow-xl">
      <h2 className="font-bold ml-6 mt-6 text-lg">{news.title}</h2>
      <p className="ml-6 text-zinc-400">{createTime}</p>
      <p className="my-6">{news.content}</p>
      <p className="text-zinc-400 object-bottom">
        By {news.firstName} {news.lastName}:
      </p>
    </article>
  )
}
