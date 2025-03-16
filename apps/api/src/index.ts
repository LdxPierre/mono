import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'hello world',
  })
})

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    // eslint-disable-next-line no-undef
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
