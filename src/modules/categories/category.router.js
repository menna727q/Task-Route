import Router from 'express'
import * as cC from '../../modules/categories/category.controller.js'
const categoryrouter =Router()

categoryrouter.get('/getcategory',cC.getcategories)
categoryrouter.post('/addcategories',cC.addcategories)