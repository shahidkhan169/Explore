const User = require('../models/explore');

module.exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        
        res.status(201).send('User registered');
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
            // Duplicate key error
            res.status(400).send(`Username '${error.keyValue.username}' is already taken.`);
        } else {
            console.error(error);
            res.status(500).send('Error registering user');
        }
    }
}
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).send('Invalid credentials');
        }
        
        res.status(200).send('Login successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}
