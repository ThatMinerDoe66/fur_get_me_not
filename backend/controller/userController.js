const User = require('../model/userModel');

//GETS
exports.getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//CREATE
exports.createUser = async (req, res) => {
    console.log(req.body);
    const{firstName, lastName, email, password, role} = req.body;

    console.log("========== Student Profile ==========");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);

try {
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        role,
    });
    await newUser.save();
    res.status(201).json(newUser);
} catch (error) {
    res.status(400).json({ message: error.message });
}

}

//UPDATE