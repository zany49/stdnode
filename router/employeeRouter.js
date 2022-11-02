// const express = require("express");
import express from 'express';
const router = express.Router();

// const employeeModule = require("../modules/employeeModule");
import { getEmployees, updateEmployees, createEmployees, deleteEmployees } from '../modules/employeeModule.js';


router.get("/get", getEmployees);

router.put("/update/:id", updateEmployees);

router.post("/create", createEmployees);

router.delete("/delete/:id", deleteEmployees);

export{ router }

