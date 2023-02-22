const {check}=require("express-validator")

exports.Employee=[

    check('Name').not().isEmpty(),
    check('EmployeeCode').not().isEmpty(),
    check('Department').not().isEmpty(),
    check('Designation').not().isEmpty(),
    check('Gender').not().isEmpty(),
    check('ContactNumber').not().isEmpty(),
    check('Email').not().isEmpty(),
    check('DateOfJoining').not().isEmpty(),
    check('DOB').not().isEmpty(),
    check('Address').not().isEmpty(),

]


exports.Holiday=[

    check('Title').not().isEmpty(),
    check('HolidayType').not().isEmpty(),
    check('HolidayStartDate').not().isEmpty(),
    check('HolidayEndDate').not().isEmpty(),
    check('HolidayDetails').not().isEmpty()

]



exports.Job=[

    check('JobTitle').not().isEmpty(),
    check('PositionType').not().isEmpty(),
    check('Department').not().isEmpty(),
    check('NoOfPositions').not().isEmpty(),
    check('InterviewDate').not().isEmpty(),
    check('location').not().isEmpty(),
    check('ReportingTo').not().isEmpty(),
    check('DesiredQualification').not().isEmpty()

]


exports.Leave=[

    check('EmployeeName').not().isEmpty(),
    check('LeaveType').not().isEmpty(),
    check('FromDate').not().isEmpty(),
    check('ToDate').not().isEmpty(),

]



exports.Organization=[

    check('DepartmentName').not().isEmpty(),
    check('DesignationName').not().isEmpty(),

]


exports.payRoll=[

    check('EmpId').not().isEmpty(),
    check('Name').not().isEmpty(),
    check('Disignation').not().isEmpty(),
    check('Mobile').not().isEmpty(),
    check('Email').not().isEmpty(),
    check('Salary').not().isEmpty(),
    check('joiningDate').not().isEmpty(),

]