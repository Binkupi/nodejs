const express = require('express');
const router = express.Router();

const newsController =require('../app/controllers/NewsController');

router.get('/details',newsController.details);
router.get('/', newsController.news);
module.exports=router;