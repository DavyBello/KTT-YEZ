const express = require('express')
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production'})
// const app = next({dev: false})
const handle = app.getRequestHandler()
const port = process.env.PORT || 9000
const the411 = require('./lib/the411ng/apiPlugin')
const serviceRouter = require('./routes/services')

app.prepare().then(() => {
  const server = express();



  server.get('/', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('/fetch-breaking-articles', async (req, res) => {
    console.log('fetching breaking');
    try {
      const articles = await the411.getBreakingArticles();
      res.json(articles);
    } catch (e) {
      res.json(e);
    }
  })

  server.use('/services', serviceRouter)

  server.get('/fetch-articles', async (req, res) => {
    console.log('fetching articles list');
    try {
      const articles = await the411.getArticles();
      res.json(articles);
    } catch (e) {
      res.json(e);
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
