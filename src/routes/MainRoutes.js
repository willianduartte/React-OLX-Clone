import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { NotFound } from '../pages/NotFound'
import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'
import { AdPage } from '../pages/Adpage'
import { AddAd } from '../pages/Addad'
import RouteHandler from '../components/RouteHandler'
import { Ads } from '../pages/Ads'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ad/:id" element={<AdPage />} />
      <Route path="/ads" element={<Ads />} />
      <Route
        path="/post-an-ad"
        element={
          <RouteHandler>
            <AddAd />
          </RouteHandler>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
