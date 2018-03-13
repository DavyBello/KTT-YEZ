const express = require('express')
const serviceRouter = express.Router()
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const arr = ['career-advice', 'internship', 'training', 'entrepreneurship', 'community-action','employment','scholarship','competition','seminars']

app.prepare().then(() => {
    const server = express();

    // define the home page route
    serviceRouter.get('/', function (req, res) {
    res.send('Birds home page')
    })
    // define the about route
    serviceRouter.get('/:service', function (req, res) {
        if (arr.find(e => req.params.service === e )) 
        return app.render(req, res, '/service', { service: req.params.service })
        res.redirect('/')
    })
})

module.exports = serviceRouter