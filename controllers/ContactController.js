//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({mesagge: "Get all contacts"});
}


//@desc Create New Contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(200).json({mesagge: "Create Contact"});
}

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({mesagge: `Get contact ${req.params.id}`});
}

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({mesagge: `Update contact for ${req.params.id}`});
}

//@desc delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({mesagge: `Delete contact for id ${req.params.id}`});
}



module.exports = {getContacts, createContact, getContact,updateContact,deleteContact};