const express = require('express')
const router = express.Router()
const Contact = require('../../model/Contact')

router.get('/contact', async (req, res) => {
    await Contact.find({},(err,contacts)=>{
        res.send(contacts)
    })
    
})
router.post('/contact', async (req, res) => {
    let contact= new Contact(req.body)
    await contact.save()
})
