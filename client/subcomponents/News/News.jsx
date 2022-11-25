import React from 'react'
import moment from 'moment'

export default function News({ news }) {
  const createTime = moment(news.createdOn, 'DD/MM/YYYY').fromNow()

  return (
    <div className="relative rounded-3xl border-3 shadow-xl">
      <article className="mt-6 mx-4">
        <h2 className="font-bold mt-6 text-lg">{news.title}</h2>
        <p className="text-zinc-400">{createTime}</p>
        <p className="my-6">{news.content}</p>
        <p className="text-zinc-400 object-bottom">
          By {news.firstName} {news.lastName}:
        </p>
      </article>

      <div className="mt-14">
        <div className="absolute inset-x-0 bottom-0 my-2 mx-4">
          <button className="text-zinc-400 ">
            <i className="fa fa-heart"></i>
          </button>
        </div>
        <div className="absolute bottom-0 left-5 my-2 mx-8">
          <button className="text-zinc-400">
            <i className="fa fa-share-alt"></i>
          </button>
        </div>
        <div className="absolute bottom-0 right-0 my-2 mx-4">
          <button className="text-zinc-400">
            <i className="fa fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
