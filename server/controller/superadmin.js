const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Admin = require('../schema/Adminschema'); 
const jwt = require('jsonwebtoken');
const getadmindetails=async(req,res)=>{
    const Admin = req.db.model('Admin');
    const admindetail=await Admin.find();
    res.status(200).json({message:"data fetched successfully",admindata:admindetail});
}
const addadmin = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password, username, superadminId } = req.body;

        if (!email || !password || !username || !superadminId) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const Admin = req.db.model('Admin');
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin with this email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const databaseName = `admin_${username}_${email.replace('@', '_').replace('.', '_')}`;

        const newAdmin = new Admin({
            email,
            password: hashedPassword,
            username,
            superadmin: superadminId,
            status: "active",
            databaseName
        });

        await newAdmin.save();

        res.status(201).json({ message: "Admin added successfully", data: newAdmin });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding admin", error: err });
    }
};
const addsuperadmin = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password, username} = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const Superadmin = req.db.model('Superadmin');
        const existingsuperadminAdmin = await Superadmin.findOne({ email });
        if (existingsuperadminAdmin) {
            return res.status(400).json({ message: "Superadmin with this email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newAdmin = new Superadmin({
            email,
            password: hashedPassword,
            username,
            status: "active",
        });

        await newAdmin.save();

        res.status(201).json({ message: "Superadmin added successfully", data: newAdmin });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding admin", error: err });
    }
};

const superadminlogin=async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body)
    const Superadmin = req.db.model('Superadmin');
    const superadmin= await Superadmin.findOne({email});
    if (!superadmin) {
        return res.status(401).json({ message: "Admin not found." });
    }
     const isMatch = await bcrypt.compare(password, superadmin.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials." });
            }
    const token = jwt.sign({ adminId: superadmin._id, databaseName:"superadmin" ,role:"superadmin"}, process.env.JWT_SECRET, { expiresIn: '1h' });
      
    res.status(200).json({ message: "Login successful", token,admindetails:superadmin});

}

const updateadmin = async (req, res) => {
    try {
        const { adminId } = req.params;
        const { email, password, username, status } = req.body;

        if (!email && !password && !username && !status) {
            return res.status(400).json({ message: "Please provide at least one field to update." });
        }

        const admin = await req.db.Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }

        if (email) admin.email = email;
        if (password) admin.password = await bcrypt.hash(password, 10);
        if (username) admin.username = username;
        if (status) {
            if (!["active", "inactive", "paused"].includes(status)) {
                return res.status(400).json({ message: "Invalid status provided." });
            }
            admin.status = status;
        }

        await admin.save();
        res.status(200).json({ message: "Admin updated successfully", data: admin });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating admin", error: err });
    }
};

const deleteadmin = async (req, res) => {
    try {
        const { adminId } = req.params;

        const admin = await req.db.Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }

        await req.db.Admin.findByIdAndDelete(adminId);
        res.status(200).json({ message: "Admin deleted successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting admin", error: err });
    }
};

const pauseadmin = async (req, res) => {
    try {
        const { adminId } = req.params;

        const admin = await req.db.Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }

        admin.status = "paused";
        await admin.save();

        res.status(200).json({ message: "Admin paused successfully.", data: admin });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error pausing admin", error: err });
    }
};

module.exports = {
    addadmin,
    updateadmin,
    deleteadmin,
    pauseadmin,
    superadminlogin,
    addsuperadmin,
    getadmindetails
};
