const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 8000
const publicRoutes = require('./routes/api/v1/public')
const authRoutes = require('./routes/api/v1/auth')
const adminRoutes = require('./routes/api/v1/admin')
const customerRoutes = require('./routes/api/v1/customer')
const {
  apiRouteVersionPrefixes,
  routeUserPrefixes,
  routeOtherPrefixes
} = require('./app/helpers/http/RouteHelper')

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(`/api/${apiRouteVersionPrefixes.v1.name}`, publicRoutes)
app.use(`/api/${apiRouteVersionPrefixes.v1.name}/${routeOtherPrefixes.auth.name}`, authRoutes)
app.use(`/api/${apiRouteVersionPrefixes.v1.name}/${routeUserPrefixes.admin.name}`, adminRoutes)
app.use(`/api/${apiRouteVersionPrefixes.v1.name}/${routeUserPrefixes.customer.name}`, customerRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})