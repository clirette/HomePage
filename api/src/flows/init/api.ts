import { Hono } from 'hono'

type Household = {
  id: string
  name: string
  admin: string
  members: string[]
}

const households: Household[] = []

// /api/init
export const initRoute = new Hono().post('/create-household', async (c) => {
  const { name, admin, members } = await c.req.json()
  const id = Date.now().toString()
  const newHousehold: Household = {
    id,
    name,
    admin,
    members,
  }
  households.push(newHousehold)
  return c.json({ success: true, household: newHousehold })
})
