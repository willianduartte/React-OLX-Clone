import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'
import { AdPage } from '../pages/Adpage'
import { AddAd } from '../pages/Addad'
import { Ads } from '../pages/Ads'
import { MyAccount } from '../pages/MyAccount'
import { EditAd } from '../pages/EditAd'
import RouteHandler from '../components/RouteHandler'
import { EditUser } from '../pages/EditUser'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/editAd/:id" element={<EditAd />} />
      <Route path="/editUser" element={<EditUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
