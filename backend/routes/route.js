const express = require('express');
const router=express.Router();

const {addEmployeeDetails,getEmployeeDetails,EditEmployeeDetails,deleteEmployeeDetails}=require("../Controller/EmployeeController")
const {addHolidayDetails,deleteHolidayDetails,EditHolidayDetails,getHolidayDetails}=require("../Controller/HolidayController")
const {addJobDetails,deleteJobDetails,EditJobDetails,getJobDetails}=require("../Controller/JobController")
const {addLeaveDetails,deleteLeaveDetails,EditLeaveDetails,getLeaveDetails}=require("../Controller/LeaveManagementController")
const {addOrganizationDetails,deleteOrganizationDetails,EditOrganizationDetails,getOrganizationDetails}=require("../Controller/OrganizationController")
const {addPayRollDetails,deletePayRollDetails,EditPayRollDetails,getPayRollDetails}=require("../Controller/PayRollController")
const {signupUser, loginUser}  = require("../Controller/UserController")





router.post('/addEmployee',addEmployeeDetails);
router.post('/addHoliday',addHolidayDetails);
router.post('/addJob',addJobDetails);
router.post('/addLeave',addLeaveDetails);
router.post('/addOrganization',addOrganizationDetails);
router.post('/addPayRoll',addPayRollDetails);


router.get('/getEmployee',getEmployeeDetails);
router.get('/gerHoliday',getHolidayDetails);
router.get('/getJob',getJobDetails);
router.get('/getLeave',getLeaveDetails);
router.get('/getOrganization',getOrganizationDetails);
router.get('/getPayRoll',getPayRollDetails);


router.post('/EditEmployee/:id',EditEmployeeDetails);
router.post('/EditHoliday/:id',EditHolidayDetails);
router.post('/EditJob/:id',EditJobDetails);
router.post('/EditLeave/:id',EditLeaveDetails);
router.post('/EditOrganization/:id',EditOrganizationDetails);
router.post('/EditPayRoll/:id',EditPayRollDetails);


router.post('/deleteEmployee/:id',deleteEmployeeDetails);
router.post('/deleteHoliday/:id',deleteHolidayDetails);
router.post('/deleteJob/:id',deleteJobDetails);
router.post('/deleteLeave/:id',deleteLeaveDetails);
router.post('/deleteOrganization/:id',deleteOrganizationDetails);
router.post('/deletePayRoll/:id',deletePayRollDetails);


router.post('/signup',signupUser);
router.post('/login',loginUser);

module.exports=router;