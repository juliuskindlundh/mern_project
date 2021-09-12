const express = require("express");
const router = express.Router();
const Dto = require("../models/Dto");

router.get("/get", (req, res) => {
    Dto.find({},(err,dtos) => {
        if (err) {
            res.status(500);
        }
        else {
            res.json(dtos)           
        }
    });
});

router.put("/updateById", (req, res) => {
    const _id = req.body._id;
    Dto.findByIdAndUpdate(_id,req.body, (err) => {
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    });
});

router.delete("/deleteById", (req, res) => {
    const _id = req.body._id;
    Dto.findByIdAndDelete(_id, (err) => {
        if (err) {
            res.status(500).send();
        }
        else {
            res.status(200).send();
        }
    });
});

router.post("/create", (req, res) => {
    const newDto = new Dto({
        firstName: req.body.firstName,
    });
    newDto.lastName = req.body.lastName;
    newDto.phoneNumber = req.body.phoneNumber;
    newDto.email = req.body.email;
    newDto.save((err) => {
        if (err) {
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    });
});

module.exports = router;