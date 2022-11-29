import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    <section className="relative rounded-3xl border-3 shadow-xl">
      <article className="mt-6 mx-4">
        <h2 className="font-bold mt-6 text-lg">{news.title}</h2>
        <p className="text-zinc-400">{createTime}</p>
        <p className="my-6">{news.content}</p>
        <p className="text-zinc-400 object-bottom">
          By {news.firstName} {news.lastName}
        </p>
      </article>
      <section className="mt-16">
        <button className="absolute bottom-0 my-2 mx-4 text-zinc-400">
          <i className="fa fa-heart text-xl"></i>
        </button>
        <button className="absolute bottom-0 left-5 my-2 mx-8 text-zinc-400">
          <i className="fa fa-share-alt text-xl"></i>
        </button>
        <button className="absolute bottom-0 right-0 my-2 mx-4 text-zinc-400">
          <i className="fa fa-chevron-down text-xl"></i>
        </button>
      </section>
    </section>
  )
}
