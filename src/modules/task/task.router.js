import Router from 'express'
import * as Tc from '../../modules/task/task.controller.js'
const taskrouter =Router()

categoryrouter.get('/getTasks',Tc.getTasks)
categoryrouter.post('/addtask',Tc.addtask)