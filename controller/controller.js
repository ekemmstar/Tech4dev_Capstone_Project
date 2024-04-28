const {Couple} = require("../models/coupleuser");
exports.coupleSignup =  async (req, res) => {
    try {
        const {userType, groomFullname, brideFullname, emailAddress, brideDOB, groomDOB, weddingDate, weddingLocation} = req.body;

        // Check if the user type is valid
        // if (userType !== 'vendor' && userType !== 'couple') {
        //     return res.status(400).json({ message: 'Invalid user type' });
        // }

        // // Check if the username already exists
        // const existingUser = await User.findOne({ username: req.body.username });
        // if (existingUser) {
        //     return res.status(400).json({ message: 'Username already exists' });
        // }

        // Hash the password
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newCouple = await Couple.create({
        userType, groomFullname, brideFullname, emailAddress, brideDOB, groomDOB, weddingDate, weddingLocation
      })
      return res.status(201).json({message: 'Username created', data:newCouple})
  
       
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: err.message });
    }
}
