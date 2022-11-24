import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IsUser from '../subcomponents/IsUser/IsUser'
import Home from '../views/Index/Index'
import PageNotFound from '../views/PageNotFound/PageNotFound'
import About from '../views/user/Gardens/about/About'
import GardenEvents from '../views/user/Gardens/Events/GardenEvents'
import Gallery from '../views/user/Gardens/Gallery/Gallery'
import GardensList from '../views/user/Gardens/Index/Index'
import News from '../views/user/Gardens/News/News'
import Shop from '../views/user/Gardens/Shop/Shop'
import Profile from '../views/user/Profile/Profile'

function UserRoutes() {
  return (
    <IsUser key="user">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gardens" element={<GardensList />} />
        <Route
          path="/gardens/:id/news"
          element={
            <>
              <News />
            </>
          }
        />
        <Route
          path="/gardens/:id/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/gardens/:id/events"
          element={
            <>
              <GardenEvents />
            </>
          }
        />
        <Route
          path="/gardens/:id/gallery"
          element={
            <>
              <Gallery />
            </>
          }
        />
        <Route
          path="/gardens/:id/shop"
          element={
            <>
              <Shop />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </IsUser>
  )
}

export default UserRoutes
