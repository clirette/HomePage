import { Hono } from 'hono'
import { logger } from 'hono/logger'
import initApi from './flows/init'

const app = new Hono()

app.use('*', logger())

app.route('/api/init', initApi)

app.get('/', (c) => {
  return c.text('Hello Hono123!')
})

export default app
