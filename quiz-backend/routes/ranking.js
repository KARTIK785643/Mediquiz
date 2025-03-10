// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // GET /rankings
// router.get('/rankings', async (req, res) => {
//     try {
//         // Fetch users from database
//         const users = await User.find({})
//             .select('name correctAnswers totalQuestions')
//             .sort({ correctAnswers: -1 })
//             .exec();
        
//         // Add rank property based on position in the sorted array
//         const rankedUsers = users.map((user, index) => {
//             const userObj = user.toObject();
//             userObj.rank = index + 1;
//             return userObj;
//         });
        
//         res.status(200).json(rankedUsers);
//     } catch (error) {
//         console.error('Error fetching rankings:', error);
//         res.status(500).json({ message: 'Failed to fetch rankings' });
//     }
// });

// module.exports = router;