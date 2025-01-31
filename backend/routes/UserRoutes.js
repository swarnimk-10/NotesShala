const express = require('express');
const { signupUser,loginUser,logoutUser,updateUser,getUserProfile } = require('../controllers/UserController');
const ProtectUser = require('../middleware/ProtectRoute');

const router = express.Router();

router.get('/profile/:username',getUserProfile)
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.put('/update/:id',ProtectUser, updateUser)

module.exports = router;