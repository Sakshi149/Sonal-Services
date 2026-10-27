/**
 * Sonal Services - Enterprise HR & Employee Portal
 * Core Application Engine & State Controller
 * (c) 2026 Sonal Services Pvt. Ltd.
 */

// =============================================================================
// 1. DATA MODELS & INITIAL STATE
// =============================================================================

const DEFAULT_EMPLOYEES = [
  {
    id: "EMP-1042",
    name: "Rahul Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    email: "rahul.sharma@sonalservices.com",
    phone: "+91 98765 43210",
    dob: "1994-08-14",
    gender: "Male",
    department: "Engineering & IT",
    designation: "Senior Full Stack Developer",
    doj: "2023-01-15",
    employmentType: "Full-Time Permanent",
    manager: "Vikram Malhotra (VP Technology)",
    location: "Pune HQ (Hybrid)",
    status: "Active",
    monthlySalary: 85000,
    currentAddress: "Flat 402, Green Meadows, Viman Nagar, Pune, Maharashtra - 411014",
    permanentAddress: "House No 23, Anand Vihar, Civil Lines, Jaipur, Rajasthan - 302006",
    emergencyContactName: "Sunita Sharma",
    emergencyContactPhone: "+91 98765 01234",
    emergencyRelation: "Mother",
    bankHolder: "Rahul Sharma",
    bankName: "HDFC Bank Ltd.",
    accountNo: "50100458921473",
    ifsc: "HDFC0000045",
    aadhaarMasked: "XXXX-XXXX-5892",
    pan: "ABCPK8921F",
    passport: "Z5829104",
    role: "employee",
    password: "password123"
  },
  {
    id: "EMP-1035",
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
    email: "priya.patel@sonalservices.com",
    phone: "+91 98234 11223",
    dob: "1992-04-22",
    gender: "Female",
    department: "Human Resources",
    designation: "Lead HR Business Partner",
    doj: "2022-06-01",
    employmentType: "Full-Time Permanent",
    manager: "Sonal Shah (Managing Director)",
    location: "Pune HQ",
    status: "Active",
    monthlySalary: 78000,
    currentAddress: "B-12, Kumar Park, Kalyani Nagar, Pune - 411006",
    permanentAddress: "7, Alkapuri Road, Vadodara, Gujarat - 390007",
    emergencyContactName: "Dr. Kirit Patel",
    emergencyContactPhone: "+91 98234 99887",
    emergencyRelation: "Father",
    bankHolder: "Priya Patel",
    bankName: "ICICI Bank",
    accountNo: "000501582941",
    ifsc: "ICIC0000005",
    aadhaarMasked: "XXXX-XXXX-3341",
    pan: "BPYPP3341G",
    passport: "V9941029",
    role: "admin",
    password: "admin"
  },
  {
    id: "EMP-1048",
    name: "Ananya Deshmukh",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
    email: "ananya.d@sonalservices.com",
    phone: "+91 98220 54321",
    dob: "1997-11-03",
    gender: "Female",
    department: "Engineering & IT",
    designation: "UI/UX Product Designer",
    doj: "2024-08-10",
    employmentType: "Full-Time Permanent",
    manager: "Rahul Sharma",
    location: "Pune HQ",
    status: "Active",
    monthlySalary: 65000,
    currentAddress: "C-504, Rohan Mithila, Pune - 411014",
    permanentAddress: "12, Shivaji Nagar, Nagpur - 440010",
    emergencyContactName: "Ramesh Deshmukh",
    emergencyContactPhone: "+91 98220 99999",
    emergencyRelation: "Father",
    bankHolder: "Ananya Deshmukh",
    bankName: "State Bank of India",
    accountNo: "30894102948",
    ifsc: "SBIN0001234",
    aadhaarMasked: "XXXX-XXXX-9124",
    pan: "CJRPD9124K",
    passport: "",
    role: "employee",
    password: "password123"
  },
  {
    id: "EMP-1019",
    name: "Vikram Malhotra",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    email: "vikram.m@sonalservices.com",
    phone: "+91 99887 76655",
    dob: "1985-02-19",
    gender: "Male",
    department: "Engineering & IT",
    designation: "VP Technology",
    doj: "2021-02-01",
    employmentType: "Full-Time Permanent",
    manager: "Sonal Shah (Managing Director)",
    location: "Pune HQ",
    status: "Active",
    monthlySalary: 165000,
    currentAddress: "A-901, Marvel Bounty, Pune - 411028",
    permanentAddress: "B-44, Greater Kailash, New Delhi - 110048",
    emergencyContactName: "Meenakshi Malhotra",
    emergencyContactPhone: "+91 99887 11111",
    emergencyRelation: "Spouse",
    bankHolder: "Vikram Malhotra",
    bankName: "HDFC Bank Ltd.",
    accountNo: "50100984210384",
    ifsc: "HDFC0000045",
    aadhaarMasked: "XXXX-XXXX-4491",
    pan: "ALPMV4491R",
    passport: "P8812903",
    role: "employee",
    password: "password123"
  },
  {
    id: "EMP-1050",
    name: "Rajesh Kulkarni",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    email: "rajesh.k@sonalservices.com",
    phone: "+91 97654 32109",
    dob: "1988-06-12",
    gender: "Male",
    department: "Finance & Accounts",
    designation: "Finance & Payroll Manager",
    doj: "2023-03-12",
    employmentType: "Full-Time Permanent",
    manager: "Sonal Shah (Managing Director)",
    location: "Pune HQ",
    status: "Active",
    monthlySalary: 92000,
    currentAddress: "B-201, Amar Renaissance, Pune - 411045",
    permanentAddress: "45, Tilak Road, Solapur - 413002",
    emergencyContactName: "Aarti Kulkarni",
    emergencyContactPhone: "+91 97654 00000",
    emergencyRelation: "Spouse",
    bankHolder: "Rajesh Kulkarni",
    bankName: "Axis Bank",
    accountNo: "91201004921048",
    ifsc: "UTIB0000123",
    aadhaarMasked: "XXXX-XXXX-6672",
    pan: "BFRPK6672E",
    passport: "",
    role: "employee",
    password: "password123"
  },
  {
    id: "EMP-1028",
    name: "Sneha Iyer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
    email: "sneha.iyer@sonalservices.com",
    phone: "+91 98450 12345",
    dob: "1993-09-30",
    gender: "Female",
    department: "Sales & Marketing",
    designation: "Senior Marketing Strategist",
    doj: "2022-11-18",
    employmentType: "Full-Time Permanent",
    manager: "Priya Patel",
    location: "Bengaluru Office",
    status: "On Notice",
    monthlySalary: 82000,
    currentAddress: "Indiranagar 100ft Road, Bengaluru - 560038",
    permanentAddress: "Mylapore, Chennai - 600004",
    emergencyContactName: "R. Iyer",
    emergencyContactPhone: "+91 98450 99999",
    emergencyRelation: "Father",
    bankHolder: "Sneha Iyer",
    bankName: "Kotak Mahindra Bank",
    accountNo: "4512948201",
    ifsc: "KKBK0000156",
    aadhaarMasked: "XXXX-XXXX-8193",
    pan: "DHYPI8193M",
    passport: "M4481029",
    role: "employee",
    password: "password123"
  }
];

const DEFAULT_DOCUMENTS = [
  {
    id: "DOC-101",
    empId: "EMP-1042",
    name: "Aadhaar Card (Front & Back)",
    category: "Identity",
    fileName: "Aadhaar_Rahul_Sharma_Masked.pdf",
    fileSize: "1.4 MB",
    uploadedDate: "2023-01-16",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "HR Compliance Team",
    remarks: "UIDAI e-Aadhaar verification matched."
  },
  {
    id: "DOC-102",
    empId: "EMP-1042",
    name: "Permanent Account Number (PAN) Card",
    category: "Identity",
    fileName: "PAN_Rahul_Sharma.pdf",
    fileSize: "890 KB",
    uploadedDate: "2023-01-16",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "HR Compliance Team",
    remarks: "NDSL PAN verification successful."
  },
  {
    id: "DOC-103",
    empId: "EMP-1042",
    name: "B.Tech Computer Science Degree & Consolidated Marksheet",
    category: "Education",
    fileName: "BTech_Degree_Certificate.pdf",
    fileSize: "3.2 MB",
    uploadedDate: "2023-01-17",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "Priya Patel (Lead HR)",
    remarks: "First Class with Distinction authenticated."
  },
  {
    id: "DOC-104",
    empId: "EMP-1042",
    name: "HDFC Bank Cancelled Cheque / Statement",
    category: "Financial",
    fileName: "HDFC_Salary_Account_Proof.pdf",
    fileSize: "1.1 MB",
    uploadedDate: "2023-01-18",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "Rajesh Kulkarni (Payroll)",
    remarks: "Salary disbursement mandate configured."
  },
  {
    id: "DOC-105",
    empId: "EMP-1042",
    name: "Previous Employer Relieving & Service Letter",
    category: "Previous Employment",
    fileName: "Cognizant_Relieving_Experience.pdf",
    fileSize: "2.5 MB",
    uploadedDate: "2023-01-18",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "Priya Patel (Lead HR)",
    remarks: "Tenure 2019-2022 confirmed with clean exit."
  },
  {
    id: "DOC-106",
    empId: "EMP-1042",
    name: "Passport Size Formal Photograph",
    category: "Photograph",
    fileName: "Passport_Photo_WhiteBG.jpg",
    fileSize: "450 KB",
    uploadedDate: "2023-01-16",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "HR Operations",
    remarks: "Used for RFID Access Card badge."
  },
  {
    id: "DOC-107",
    empId: "EMP-1042",
    name: "Indian Passport Copy (36 Pages)",
    category: "Identity",
    fileName: "Indian_Passport_Scan.pdf",
    fileSize: "4.1 MB",
    uploadedDate: "2026-09-10",
    status: "Pending",
    expiryDate: "2031-05-18",
    verifiedBy: "Awaiting Verification",
    remarks: "Submitted for onsite client travel verification."
  },
  {
    id: "DOC-108",
    empId: "EMP-1042",
    name: "AWS Certified Solutions Architect Certificate",
    category: "Education",
    fileName: "AWS_Solutions_Architect_2026.pdf",
    fileSize: "1.8 MB",
    uploadedDate: "2026-10-02",
    status: "Pending",
    expiryDate: "2029-10-01",
    verifiedBy: "Awaiting Verification",
    remarks: "Submitted for skill enhancement allowance."
  },
  {
    id: "DOC-201",
    empId: "EMP-1048",
    name: "Aadhaar Card Front & Back",
    category: "Identity",
    fileName: "Ananya_Aadhaar.pdf",
    fileSize: "1.2 MB",
    uploadedDate: "2024-08-11",
    status: "Verified",
    expiryDate: "N/A",
    verifiedBy: "Priya Patel",
    remarks: "Approved."
  },
  {
    id: "DOC-202",
    empId: "EMP-1048",
    name: "B.Des Graduation Certificate",
    category: "Education",
    fileName: "BDes_Certificate.pdf",
    fileSize: "2.1 MB",
    uploadedDate: "2026-10-18",
    status: "Pending",
    expiryDate: "N/A",
    verifiedBy: "Awaiting Verification",
    remarks: "Uploaded for background screening."
  }
];

const DEFAULT_SALARY_SLIPS = [
  {
    id: "PAY-2026-09",
    empId: "EMP-1042",
    month: "September",
    monthNum: "09",
    year: 2026,
    payPeriod: "01 Sep 2026 - 30 Sep 2026",
    paymentDate: "30 Sep 2026",
    basic: 42500,
    hra: 21250,
    special: 16250,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3950,
    netPay: 75650,
    status: "Disbursed",
    refNo: "NEFT/SS/20260930/1042",
    uploadDate: "2026-09-30"
  },
  {
    id: "PAY-2026-08",
    empId: "EMP-1042",
    month: "August",
    monthNum: "08",
    year: 2026,
    payPeriod: "01 Aug 2026 - 31 Aug 2026",
    paymentDate: "31 Aug 2026",
    basic: 42500,
    hra: 21250,
    special: 16250,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3950,
    netPay: 75650,
    status: "Disbursed",
    refNo: "NEFT/SS/20260831/1042",
    uploadDate: "2026-08-31"
  },
  {
    id: "PAY-2026-07",
    empId: "EMP-1042",
    month: "July",
    monthNum: "07",
    year: 2026,
    payPeriod: "01 Jul 2026 - 31 Jul 2026",
    paymentDate: "31 Jul 2026",
    basic: 42500,
    hra: 21250,
    special: 16250,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3950,
    netPay: 75650,
    status: "Disbursed",
    refNo: "NEFT/SS/20260731/1042",
    uploadDate: "2026-07-31"
  },
  {
    id: "PAY-2026-06",
    empId: "EMP-1042",
    month: "June",
    monthNum: "06",
    year: 2026,
    payPeriod: "01 Jun 2026 - 30 Jun 2026",
    paymentDate: "30 Jun 2026",
    basic: 42500,
    hra: 21250,
    special: 16250,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3950,
    netPay: 75650,
    status: "Disbursed",
    refNo: "NEFT/SS/20260630/1042",
    uploadDate: "2026-06-30"
  },
  {
    id: "PAY-2026-05",
    empId: "EMP-1042",
    month: "May",
    monthNum: "05",
    year: 2026,
    payPeriod: "01 May 2026 - 31 May 2026",
    paymentDate: "31 May 2026",
    basic: 42500,
    hra: 21250,
    special: 16250,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3950,
    netPay: 75650,
    status: "Disbursed",
    refNo: "NEFT/SS/20260531/1042",
    uploadDate: "2026-05-31"
  },
  {
    id: "PAY-2026-04",
    empId: "EMP-1042",
    month: "April",
    monthNum: "04",
    year: 2026,
    payPeriod: "01 Apr 2026 - 30 Apr 2026",
    paymentDate: "30 Apr 2026",
    basic: 37500,
    hra: 18750,
    special: 14150,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3100,
    netPay: 66900,
    status: "Disbursed",
    refNo: "NEFT/SS/20260430/1042",
    uploadDate: "2026-04-30"
  },
  {
    id: "PAY-2025-12",
    empId: "EMP-1042",
    month: "December",
    monthNum: "12",
    year: 2025,
    payPeriod: "01 Dec 2025 - 31 Dec 2025",
    paymentDate: "31 Dec 2025",
    basic: 37500,
    hra: 18750,
    special: 14150,
    conveyance: 1600,
    pf: 1800,
    pt: 200,
    tds: 3100,
    netPay: 66900,
    status: "Disbursed",
    refNo: "NEFT/SS/20251231/1042",
    uploadDate: "2025-12-31"
  }
];

const DEFAULT_APPOINTMENT_LETTERS = [
  {
    id: "AL-1042-01",
    empId: "EMP-1042",
    refNo: "SS/HR/AL/2023/1042",
    title: "Official Letter of Employment & Appointment",
    issueDate: "2023-01-10",
    uploadDate: "2023-01-15",
    joiningDate: "2023-01-15",
    designation: "Senior Full Stack Developer",
    department: "Engineering & IT",
    status: "Active & Verified",
    monthlyGross: 72000,
    annualCtc: 864000,
    probation: "6 Months",
    noticePeriod: "60 Days",
    issuedBy: "Priya Patel (Lead HR)",
    terms: "Full-Time employment subject to successful background screening and adherence to the Sonal Services Code of Business Conduct."
  }
];

const DEFAULT_INCREMENT_LETTERS = [
  {
    id: "INC-1042-02",
    empId: "EMP-1042",
    refNo: "SS/HR/INC/2026/04",
    title: "Annual Appraisal & Compensation Revision 2026",
    effectiveDate: "2026-05-01",
    issueDate: "2026-04-20",
    designation: "Senior Full Stack Developer",
    previousSalary: 72000,
    revisedSalary: 85000,
    hikeAmount: 13000,
    hikePercent: "18.06",
    rating: "Outstanding (Exceeds Expectations)",
    remarks: "Exceptional architecture work on client enterprise pipelines and leading core platform stability initiatives.",
    issuedBy: "Priya Patel (Lead HR)"
  },
  {
    id: "INC-1042-01",
    empId: "EMP-1042",
    refNo: "SS/HR/INC/2024/05",
    title: "Annual Appraisal & Compensation Revision 2024",
    effectiveDate: "2024-05-01",
    issueDate: "2024-04-18",
    designation: "Full Stack Developer",
    previousSalary: 62000,
    revisedSalary: 72000,
    hikeAmount: 10000,
    hikePercent: "16.13",
    rating: "Very Good (Consistently Meets High Bar)",
    remarks: "Promoted to Senior Full Stack Developer following outstanding delivery on Q1 deliverables.",
    issuedBy: "Priya Patel (Lead HR)"
  }
];

const DEFAULT_EXPERIENCE_LETTERS = [
  {
    id: "EXP-1004-01",
    empId: "EMP-1004",
    refNo: "SS/HR/EXP/2025/1004",
    title: "Service Experience & Relieving Certificate",
    empName: "Amit Verma",
    designation: "Operations Lead",
    department: "Operations",
    startDate: "2020-01-10",
    relievingDate: "2025-12-15",
    issueDate: "2025-12-18",
    status: "Issued",
    conduct: "Exemplary",
    remarks: "During his tenure with Sonal Services, we found him hardworking, technically adept, and dedicated. He was relieved of his duties upon mutual consent with all company dues cleared."
  }
];

const DEFAULT_ANNOUNCEMENTS = [
  {
    id: "ANN-101",
    title: "Annual Performance Appraisal & Increment Cycle FY 2026-27",
    category: "Appraisal",
    date: "2026-10-15",
    author: "Human Resources Department",
    content: "The annual appraisal window opens from 01 November 2026. All managers and team members are requested to complete self-appraisals and KPI submissions by 20 November 2026. Increments will be effective from January 2027.",
    isUrgent: true
  },
  {
    id: "ANN-102",
    title: "Diwali Festivities & Extended Long Weekend Holiday",
    category: "Holiday",
    date: "2026-10-22",
    author: "HR Operations",
    content: "Sonal Services offices will remain closed from Thursday, 29 October to Monday, 02 November on account of Diwali. Festive gift hampers and annual performance bonus payouts will be disbursed along with October payroll.",
    isUrgent: false
  },
  {
    id: "ANN-103",
    title: "Group Health & Critical Care Insurance Policy Renewal",
    category: "Policy",
    date: "2026-09-28",
    author: "Employee Benefits Desk",
    content: "The corporate Group Mediclaim policy has been enhanced to ₹7.5 Lakhs family floater coverage with cashless hospital networks expanded across 12,000+ top hospitals in India. Please verify nominee details under My Profile.",
    isUrgent: false
  }
];

const DEFAULT_TIMELINE = [
  {
    title: "September 2026 Salary Slip Published",
    desc: "Payroll disbursed via NEFT with tax deduction statement attached.",
    time: "30 Sep 2026, 17:30",
    type: "payroll"
  },
  {
    title: "AWS Certification Uploaded",
    desc: "Verification pending with HR Compliance Desk.",
    time: "02 Oct 2026, 11:15",
    type: "doc"
  },
  {
    title: "Annual Increment Letter SS/HR/INC/2026/04 Issued",
    desc: "Monthly CTC enhanced to ₹85,000 effective May 2026.",
    time: "20 Apr 2026, 14:00",
    type: "letter"
  },
  {
    title: "Aadhaar Card Verified",
    desc: "Identity verified by UIDAI database integration.",
    time: "16 Jan 2023, 10:20",
    type: "verified"
  }
];

const DEFAULT_NOTIFICATIONS = [
  {
    id: "NTF-1",
    title: "September 2026 Payslip Ready",
    desc: "Your monthly salary statement has been credited to your HDFC Bank account.",
    time: "3 days ago",
    read: false,
    icon: "fa-receipt text-emerald"
  },
  {
    id: "NTF-2",
    title: "Appraisal Cycle FY26 Announced",
    desc: "HR has published the timeline for self-evaluation reviews.",
    time: "5 days ago",
    read: false,
    icon: "fa-bullhorn text-primary"
  },
  {
    id: "NTF-3",
    title: "Document Review Pending",
    desc: "Your uploaded Indian Passport copy is under review by compliance.",
    time: "1 week ago",
    read: false,
    icon: "fa-clock-rotate-left text-amber"
  }
];

// =============================================================================
// 2. STATE STORE & LOCALSTORAGE PERSISTENCE
// =============================================================================

class Store {
  constructor() {
    this.employees = this.load("ss_employees", DEFAULT_EMPLOYEES);
    this.documents = this.load("ss_documents", DEFAULT_DOCUMENTS);
    this.salarySlips = this.load("ss_salary_slips", DEFAULT_SALARY_SLIPS);
    this.appointmentLetters = this.load("ss_appointment_letters", DEFAULT_APPOINTMENT_LETTERS);
    this.incrementLetters = this.load("ss_increment_letters", DEFAULT_INCREMENT_LETTERS);
    this.experienceLetters = this.load("ss_experience_letters", DEFAULT_EXPERIENCE_LETTERS);
    this.announcements = this.load("ss_announcements", DEFAULT_ANNOUNCEMENTS);
    this.timeline = this.load("ss_timeline", DEFAULT_TIMELINE);
    this.notifications = this.load("ss_notifications", DEFAULT_NOTIFICATIONS);
    
    // Active session
    this.currentUser = this.load("ss_active_user", this.employees[0]); // default Rahul Sharma
    this.currentRole = this.currentUser ? this.currentUser.role : "employee";
  }

  load(key, fallback) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn("LocalStorage load error for " + key, e);
      return fallback;
    }
  }

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("LocalStorage save error for " + key, e);
    }
  }

  saveAll() {
    this.save("ss_employees", this.employees);
    this.save("ss_documents", this.documents);
    this.save("ss_salary_slips", this.salarySlips);
    this.save("ss_appointment_letters", this.appointmentLetters);
    this.save("ss_increment_letters", this.incrementLetters);
    this.save("ss_experience_letters", this.experienceLetters);
    this.save("ss_announcements", this.announcements);
    this.save("ss_timeline", this.timeline);
    this.save("ss_notifications", this.notifications);
    this.save("ss_active_user", this.currentUser);
  }

  getEmployee(id) {
    return this.employees.find(e => e.id === id) || this.employees[0];
  }
}

const state = new Store();

// Helper to format currency in Indian style (₹ 85,000)
function formatINR(val) {
  if (val === undefined || val === null || isNaN(val)) return "₹ 0";
  return "₹ " + Number(val).toLocaleString('en-IN');
}

// Helper to format date
function formatDate(dateStr) {
  if (!dateStr || dateStr === "N/A") return "N/A";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  } catch (e) {
    return dateStr;
  }
}

// Convert numbers to words for pay slip (Indian Rupee format)
function numberToWords(num) {
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  num = Math.floor(Number(num));
  if (num === 0) return 'Zero';
  
  function inWords(n) {
    let str = "";
    if (n > 99) {
      str += a[Math.floor(n / 100)] + 'Hundred ';
      n %= 100;
    }
    if (n > 19) {
      str += b[Math.floor(n / 10)] + ' ' + a[n % 10];
    } else {
      str += a[n];
    }
    return str;
  }

  let crore = Math.floor(num / 10000000);
  num %= 10000000;
  let lakh = Math.floor(num / 100000);
  num %= 100000;
  let thousand = Math.floor(num / 1000);
  num %= 1000;
  let hundred = Math.floor(num / 100);
  let rest = num % 100;

  let res = "";
  if (crore > 0) res += inWords(crore) + 'Crore ';
  if (lakh > 0) res += inWords(lakh) + 'Lakh ';
  if (thousand > 0) res += inWords(thousand) + 'Thousand ';
  if (hundred > 0) res += a[hundred] + 'Hundred ';
  if (rest > 0) {
    if (res !== "") res += 'and ';
    res += inWords(rest);
  }
  return res.trim() + " Rupees Only";
}

// =============================================================================
// 3. AUTHENTICATION MODULE
// =============================================================================

window.auth = {
  fillCredentials: function(role) {
    const identInput = document.getElementById("loginIdentifier");
    const pwdInput = document.getElementById("loginPassword");
    const empBtn = document.getElementById("demoEmpBtn");
    const adminBtn = document.getElementById("demoAdminBtn");
    const roleBadge = document.getElementById("previewRoleBadge");

    if (role === "admin") {
      identInput.value = "priya.patel@sonalservices.com";
      pwdInput.value = "admin";
      adminBtn.classList.add("active");
      empBtn.classList.remove("active");
      roleBadge.innerHTML = '<i class="fa-solid fa-user-shield"></i> Role: Admin / HR';
      roleBadge.style.color = "#dc2626";
      roleBadge.style.background = "#fee2e2";
    } else {
      identInput.value = "EMP-1042";
      pwdInput.value = "password123";
      empBtn.classList.add("active");
      adminBtn.classList.remove("active");
      roleBadge.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Role: Employee';
      roleBadge.style.color = "var(--color-primary)";
      roleBadge.style.background = "var(--color-primary-light)";
    }
    document.getElementById("loginIdentifierError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";
  },

  togglePassword: function(fieldId, btn) {
    const input = document.getElementById(fieldId);
    const icon = btn.querySelector("i");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  },

  handleLogin: function(e) {
    e.preventDefault();
    const ident = document.getElementById("loginIdentifier").value.trim();
    const pwd = document.getElementById("loginPassword").value.trim();
    const errIdent = document.getElementById("loginIdentifierError");
    const errPwd = document.getElementById("loginPasswordError");
    const submitBtn = document.getElementById("loginSubmitBtn");

    errIdent.textContent = "";
    errPwd.textContent = "";

    if (!ident) {
      errIdent.textContent = "Please enter your Employee ID or Corporate Email.";
      return;
    }
    if (!pwd) {
      errPwd.textContent = "Please enter your portal password.";
      return;
    }

    // Button loading state
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';

    setTimeout(() => {
      // Find matching employee
      let matched = state.employees.find(
        emp => emp.id.toLowerCase() === ident.toLowerCase() || emp.email.toLowerCase() === ident.toLowerCase()
      );

      // Demo fallback: if entered "admin" or "hr"
      if (!matched && (ident.toLowerCase().includes("admin") || ident.toLowerCase().includes("hr"))) {
        matched = state.employees.find(emp => emp.role === "admin") || state.employees[1];
      }

      if (!matched) {
        // Fallback default for demo if test value entered
        matched = state.employees[0];
      }

      state.currentUser = matched;
      state.currentRole = matched.role;
      state.saveAll();

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;

      window.ui.showToast(`Signed in successfully as ${matched.name} (${matched.role.toUpperCase()})`, "success");
      window.ui.initPortalUI();
    }, 600);
  },

  handleLogout: function() {
    window.ui.showToast("Signed out of Sonal Services Portal", "info");
    document.getElementById("appLayout").classList.add("hidden");
    document.getElementById("authScreen").classList.remove("hidden");
  },

  switchRoleQuick: function() {
    if (state.currentRole === "admin") {
      // Switch to Rahul Sharma (employee)
      state.currentUser = state.employees.find(e => e.id === "EMP-1042") || state.employees[0];
      state.currentRole = "employee";
    } else {
      // Switch to Priya Patel (admin)
      state.currentUser = state.employees.find(e => e.role === "admin") || state.employees[1];
      state.currentRole = "admin";
    }
    state.saveAll();
    window.ui.showToast(`Switched view to ${state.currentUser.name} [${state.currentRole.toUpperCase()}]`, "info");
    window.ui.initPortalUI();
  },

  showForgotModal: function(e) {
    if (e) e.preventDefault();
    window.ui.openModal("forgotPasswordModal");
  },

  handleForgotSubmit: function(e) {
    e.preventDefault();
    const email = document.getElementById("forgotEmail").value.trim();
    window.ui.closeModal("forgotPasswordModal");
    window.ui.showToast(`Password recovery link dispatched to ${email}`, "success");
  }
};

// =============================================================================
// 4. UI SHELL & NAVIGATION CONTROLLER
// =============================================================================

window.ui = {
  currentView: "employee-dashboard",

  initPortalUI: function() {
    document.getElementById("authScreen").classList.add("hidden");
    const appLayout = document.getElementById("appLayout");
    appLayout.classList.remove("hidden");

    const user = state.currentUser;
    const role = state.currentRole;

    // Update topbar & sidebar user profiles
    document.getElementById("sidebarUserName").textContent = user.name;
    document.getElementById("sidebarUserDesignation").textContent = user.designation;
    document.getElementById("sidebarUserAvatar").src = user.avatar;
    document.getElementById("sidebarUserRoleBadge").textContent = role === "admin" ? "HR Administrator" : "Employee";
    document.getElementById("sidebarRoleSubtitle").textContent = role === "admin" ? "HR Executive Suite" : "Employee Portal";

    document.getElementById("topbarUserName").textContent = user.name;
    document.getElementById("topbarUserRole").textContent = role === "admin" ? "HR Admin" : user.department;
    document.getElementById("topbarUserAvatar").src = user.avatar;
    document.getElementById("dropdownFullName").textContent = user.name;
    document.getElementById("dropdownEmail").textContent = user.email;
    document.getElementById("dropdownRoleTag").textContent = role.toUpperCase();

    // Fast switch button label
    const switchText = document.getElementById("switchRoleText");
    if (switchText) {
      switchText.textContent = role === "admin" ? "View as Employee" : "View as HR Admin";
    }

    // Toggle navigation menus
    const empNav = document.getElementById("employeeNav");
    const adminNav = document.getElementById("adminNav");

    if (role === "admin") {
      empNav.classList.add("hidden");
      adminNav.classList.remove("hidden");
      window.ui.navigate("admin-dashboard");
    } else {
      adminNav.classList.add("hidden");
      empNav.classList.remove("hidden");
      window.ui.navigate("employee-dashboard");
    }

    // Update notification badge & dropdown
    window.ui.renderNotifications();

    // Render modules
    window.ui.renderEmployeeDashboard();
    window.profile.renderProfile();
    window.salary.renderSalarySlips();
    window.docs.renderDocuments();
    window.ui.renderAppointmentLetterSection();
    window.ui.renderIncrementLetterSection();
    window.ui.renderExperienceLetterSection();
    window.ui.renderAnnouncements();

    if (role === "admin") {
      window.admin.renderAdminDashboard();
      window.admin.renderEmployeeDirectory();
      window.admin.renderVerificationQueue();
      window.admin.renderAppointmentLetters();
      window.admin.renderSalaryManagement();
      window.admin.renderIncrementLetters();
      window.admin.renderExperienceLetters();
      window.admin.renderAuditReports();
    }
  },

  navigate: function(viewId, event) {
    if (event) event.preventDefault();
    window.ui.currentView = viewId;

    // Hide all view sections
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.add("hidden");
    });

    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
      targetSection.classList.remove("hidden");
    }

    // Update active nav-link classes
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("data-view") === viewId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Close mobile sidebar if open
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    }

    // Close any open dropdowns
    document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.add("hidden"));

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  toggleSidebar: function() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  },

  toggleNotifications: function(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById("notifMenu");
    menu.classList.toggle("hidden");
    document.getElementById("userDropdownMenu").classList.add("hidden");
  },

  toggleUserMenu: function(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById("userDropdownMenu");
    menu.classList.toggle("hidden");
    document.getElementById("notifMenu").classList.add("hidden");
  },

  renderNotifications: function() {
    const container = document.getElementById("notifListContainer");
    const countBadge = document.getElementById("unreadNotifCount");
    const unread = state.notifications.filter(n => !n.read).length;

    countBadge.textContent = unread;
    countBadge.style.display = unread > 0 ? "flex" : "none";

    container.innerHTML = state.notifications.map(n => `
      <div class="notif-item ${n.read ? '' : 'unread'}" onclick="window.ui.markNotifRead('${n.id}')">
        <div class="notif-icon bg-blue-subtle">
          <i class="fa-solid ${n.icon}"></i>
        </div>
        <div class="notif-content">
          <strong>${n.title}</strong>
          <p>${n.desc}</p>
          <span>${n.time}</span>
        </div>
      </div>
    `).join("");
  },

  markNotifRead: function(id) {
    const n = state.notifications.find(item => item.id === id);
    if (n) {
      n.read = true;
      state.saveAll();
      window.ui.renderNotifications();
    }
  },

  markAllNotificationsRead: function() {
    state.notifications.forEach(n => n.read = true);
    state.saveAll();
    window.ui.renderNotifications();
    window.ui.showToast("All notifications marked as read", "info");
  },

  showToast: function(message, type = "info", title = "") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconClass = "fa-circle-info text-info";
    let defaultTitle = "Information";
    if (type === "success") {
      iconClass = "fa-circle-check text-success";
      defaultTitle = "Success";
    } else if (type === "error") {
      iconClass = "fa-circle-exclamation text-danger";
      defaultTitle = "Attention Required";
    } else if (type === "warning") {
      iconClass = "fa-triangle-exclamation text-warning";
      defaultTitle = "Notice";
    }

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <div class="toast-content">
        <div class="toast-title">${title || defaultTitle}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button type="button" class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 4500);
  },

  openModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
    }
  },

  closeModal: function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hidden");
    }
  },

  showHelpModal: function() {
    window.ui.showToast("For HR support, email hr@sonalservices.com or call ext 1004", "info", "Sonal Services Helpdesk");
  },

  handleGlobalSearch: function(query) {
    const dropdown = document.getElementById("globalSearchResults");
    query = query.trim().toLowerCase();
    if (!query) {
      dropdown.classList.add("hidden");
      dropdown.innerHTML = "";
      return;
    }

    const results = [];

    // Search docs
    state.documents.filter(d => d.empId === state.currentUser.id || state.currentRole === "admin").forEach(d => {
      if (d.name.toLowerCase().includes(query) || d.category.toLowerCase().includes(query)) {
        results.push({
          type: "Document",
          title: d.name,
          sub: d.category + " • " + d.status,
          icon: "fa-file-lines text-primary",
          action: () => { window.docs.openDocPreview(d.id); dropdown.classList.add("hidden"); }
        });
      }
    });

    // Search salary slips
    state.salarySlips.filter(s => s.empId === state.currentUser.id).forEach(s => {
      if (s.month.toLowerCase().includes(query) || String(s.year).includes(query)) {
        results.push({
          type: "Salary Slip",
          title: `Salary Slip - ${s.month} ${s.year}`,
          sub: `Net: ${formatINR(s.netPay)}`,
          icon: "fa-receipt text-emerald",
          action: () => { window.salary.openSlipPreview(s.id); dropdown.classList.add("hidden"); }
        });
      }
    });

    // Search announcements
    state.announcements.forEach(a => {
      if (a.title.toLowerCase().includes(query) || a.content.toLowerCase().includes(query)) {
        results.push({
          type: "Announcement",
          title: a.title,
          sub: a.category,
          icon: "fa-bullhorn text-sky",
          action: () => { window.ui.navigate("announcements"); dropdown.classList.add("hidden"); }
        });
      }
    });

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-item text-muted">No matching records found for "${query}"</div>`;
    } else {
      dropdown.innerHTML = results.slice(0, 6).map((r, i) => `
        <div class="search-item" id="searchItem_${i}">
          <i class="fa-solid ${r.icon}"></i>
          <div>
            <strong>${r.title}</strong>
            <span style="font-size: 0.72rem; color: #64748b; display: block;">${r.type} &bull; ${r.sub}</span>
          </div>
        </div>
      `).join("");

      results.slice(0, 6).forEach((r, i) => {
        document.getElementById(`searchItem_${i}`).onclick = r.action;
      });
    }

    dropdown.classList.remove("hidden");
  },

  // ===========================================================================
  // DASHBOARD RENDERING
  // ===========================================================================
  renderEmployeeDashboard: function() {
    const user = state.currentUser;
    const userDocs = state.documents.filter(d => d.empId === user.id);
    const userSlips = state.salarySlips.filter(s => s.empId === user.id);
    const userAppt = state.appointmentLetters.filter(l => l.empId === user.id);
    const userInc = state.incrementLetters.filter(l => l.empId === user.id);
    const pendingDocs = userDocs.filter(d => d.status === "Pending" || d.status === "Missing");

    // Welcome Greetings
    const greetingEl = document.getElementById("welcomeGreeting");
    if (greetingEl) {
      greetingEl.textContent = `Welcome back, ${user.name.split(" ")[0]}! 👋`;
    }

    // Set Live date badge
    const dateBadge = document.getElementById("welcomeDateBadge");
    if (dateBadge) {
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      dateBadge.innerHTML = `<i class="fa-regular fa-calendar"></i> ${now.toLocaleDateString("en-US", options)}`;
    }

    // Stats
    document.getElementById("empStatTotalDocs").textContent = userDocs.length;
    document.getElementById("empStatSalarySlips").textContent = userSlips.length;
    document.getElementById("empStatOfficialLetters").textContent = userAppt.length + userInc.length;
    document.getElementById("empStatPendingDocs").textContent = pendingDocs.length;

    // Sidebar badge
    const navBadge = document.getElementById("empPendingDocsNavBadge");
    if (navBadge) {
      navBadge.textContent = pendingDocs.length;
      navBadge.style.display = pendingDocs.length > 0 ? "inline-block" : "none";
    }

    // Employment details summary card
    document.getElementById("dashEmpStatusBadge").textContent = user.status;
    document.getElementById("dashEmpStatusBadge").className = `badge-status badge-${user.status === 'Active' ? 'active' : 'notice'}`;
    document.getElementById("dashEmpId").textContent = user.id;
    document.getElementById("dashEmpDept").textContent = user.department;
    document.getElementById("dashEmpDesignation").textContent = user.designation;
    document.getElementById("dashEmpDoj").textContent = formatDate(user.doj);
    document.getElementById("dashEmpManager").textContent = user.manager;
    document.getElementById("dashEmpLocation").textContent = user.location;
    document.getElementById("dashEmpType").textContent = user.employmentType;
    document.getElementById("dashEmpGross").textContent = formatINR(user.monthlySalary) + " / mo";

    // HR Mini announcements
    const miniAnn = document.getElementById("dashMiniAnnouncements");
    miniAnn.innerHTML = state.announcements.slice(0, 3).map(a => `
      <div class="ann-mini-item">
        <span class="ann-tag">${a.category}</span>
        <strong>${a.title}</strong>
        <p>${a.content.substring(0, 110)}...</p>
        <span class="ann-date"><i class="fa-regular fa-clock"></i> ${formatDate(a.date)}</span>
      </div>
    `).join("");

    // Recent Documents Table
    const recentTable = document.getElementById("dashRecentDocsTableBody");
    const recentDocs = [...userDocs].reverse().slice(0, 5);
    recentTable.innerHTML = recentDocs.map(d => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <i class="fa-solid fa-file-pdf text-danger" style="font-size: 1.2rem;"></i>
            <div>
              <strong>${d.name}</strong>
              <div style="font-size: 0.72rem; color: #64748b;">${d.fileName}</div>
            </div>
          </div>
        </td>
        <td><span class="badge-pill bg-light">${d.category}</span></td>
        <td>${formatDate(d.uploadedDate)}</td>
        <td><span class="badge-status badge-${d.status.toLowerCase()}">${d.status}</span></td>
        <td>
          <button type="button" class="btn-action-icon" title="Preview Document" onclick="window.docs.openDocPreview('${d.id}')">
            <i class="fa-regular fa-eye"></i>
          </button>
        </td>
      </tr>
    `).join("");

    // Activity Timeline
    const timelineEl = document.getElementById("dashActivityTimeline");
    timelineEl.innerHTML = state.timeline.slice(0, 4).map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
        <span class="timeline-time"><i class="fa-regular fa-clock"></i> ${item.time}</span>
      </div>
    `).join("");
  },

  // ===========================================================================
  // APPOINTMENT LETTER SECTION
  // ===========================================================================
  renderAppointmentLetterSection: function() {
    const user = state.currentUser;
    const letter = state.appointmentLetters.find(l => l.empId === user.id);
    const container = document.getElementById("appointmentLetterContainer");
    const adminActionPlaceholder = document.getElementById("adminApptLetterActionPlaceholder");

    if (state.currentRole === "admin") {
      adminActionPlaceholder.innerHTML = `
        <button type="button" class="btn-primary" onclick="window.admin.openUploadAppointmentModal()">
          <i class="fa-solid fa-file-arrow-up"></i> Issue / Replace Appointment Letter
        </button>
      `;
    } else {
      adminActionPlaceholder.innerHTML = "";
    }

    if (!letter) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-file-signature"></i></div>
          <h3>Appointment Letter Pending</h3>
          <p>Your official appointment letter has not been published yet. The HR team is preparing your documentation.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <span class="badge-status badge-verified"><i class="fa-solid fa-check"></i> ${letter.status}</span>
          <h3 style="font-size: 1.3rem; font-weight: 800; margin-top: 0.5rem; color: var(--color-navy);">${letter.title}</h3>
          <p style="color: var(--color-text-muted); font-size: 0.85rem;">Reference No: <strong class="font-mono text-primary">${letter.refNo}</strong> &bull; Issued on ${formatDate(letter.issueDate)}</p>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button type="button" class="btn-secondary" onclick="window.ui.openLetterModal('appointment', '${letter.id}')">
            <i class="fa-regular fa-eye"></i> View Full Letter
          </button>
          <button type="button" class="btn-primary" onclick="window.ui.downloadLetterDirect('appointment', '${letter.id}')">
            <i class="fa-solid fa-download"></i> Download Official PDF
          </button>
        </div>
      </div>

      <div class="info-list-grid">
        <div class="info-cell">
          <span class="info-label">Appointed Designation</span>
          <strong class="info-val">${letter.designation}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Department</span>
          <strong class="info-val">${letter.department}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Annual Gross CTC</span>
          <strong class="info-val text-primary">${formatINR(letter.annualCtc)} / annum</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Probation & Notice</span>
          <strong class="info-val">${letter.probation} &bull; ${letter.noticePeriod} Notice</strong>
        </div>
      </div>
    `;

    // History table
    const histTable = document.getElementById("appointmentHistoryTableBody");
    histTable.innerHTML = `
      <tr>
        <td><strong>v1.0 (Original)</strong></td>
        <td><span class="font-mono">${letter.refNo}</span></td>
        <td>${formatDate(letter.issueDate)}</td>
        <td>${letter.issuedBy}</td>
        <td><span class="badge-status badge-verified">Approved & Stamped</span></td>
        <td>
          <button type="button" class="btn-action-icon" title="View" onclick="window.ui.openLetterModal('appointment', '${letter.id}')">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button type="button" class="btn-action-icon" title="Download" onclick="window.ui.downloadLetterDirect('appointment', '${letter.id}')">
            <i class="fa-solid fa-download"></i>
          </button>
        </td>
      </tr>
    `;
  },

  // ===========================================================================
  // INCREMENT LETTER SECTION
  // ===========================================================================
  renderIncrementLetterSection: function() {
    const user = state.currentUser;
    const userLetters = state.incrementLetters.filter(l => l.empId === user.id);
    const container = document.getElementById("incrementLetterContainer");
    const adminActionPlaceholder = document.getElementById("adminIncrementBtnPlaceholder");

    if (state.currentRole === "admin") {
      adminActionPlaceholder.innerHTML = `
        <button type="button" class="btn-primary" onclick="window.admin.openIssueIncrementModal()">
          <i class="fa-solid fa-money-bill-trend-up"></i> Issue New Increment
        </button>
      `;
    } else {
      adminActionPlaceholder.innerHTML = "";
    }

    if (userLetters.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
          <h3>No Increment Letters Issued Yet</h3>
          <p>Annual appraisal revisions are published here upon completion of performance reviews.</p>
        </div>
      `;
      document.getElementById("incrementHistoryTableBody").innerHTML = `
        <tr><td colspan="7" class="text-center text-muted py-4">No historical appraisal records found.</td></tr>
      `;
      return;
    }

    const latest = userLetters[0];
    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <span class="badge-status badge-verified"><i class="fa-solid fa-award"></i> Latest Appraisal Revision</span>
          <h3 style="font-size: 1.3rem; font-weight: 800; margin-top: 0.5rem; color: var(--color-navy);">${latest.title}</h3>
          <p style="color: var(--color-text-muted); font-size: 0.85rem;">Reference: <strong class="font-mono text-primary">${latest.refNo}</strong> &bull; Effective Date: <strong>${formatDate(latest.effectiveDate)}</strong></p>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button type="button" class="btn-secondary" onclick="window.ui.openLetterModal('increment', '${latest.id}')">
            <i class="fa-regular fa-eye"></i> View Letter
          </button>
          <button type="button" class="btn-primary" onclick="window.ui.downloadLetterDirect('increment', '${latest.id}')">
            <i class="fa-solid fa-download"></i> Download PDF
          </button>
        </div>
      </div>

      <div class="info-list-grid">
        <div class="info-cell">
          <span class="info-label">Previous Monthly CTC</span>
          <strong class="info-val text-muted">${formatINR(latest.previousSalary)}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Revised Monthly CTC</span>
          <strong class="info-val text-success font-bold" style="font-size: 1.15rem;">${formatINR(latest.revisedSalary)}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Monthly Increment Hike</span>
          <strong class="info-val text-primary">+${formatINR(latest.hikeAmount)} (${latest.hikePercent}%)</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Appraisal Rating</span>
          <strong class="info-val text-amber">${latest.rating}</strong>
        </div>
      </div>
      <div style="margin-top: 1.25rem; padding: 0.85rem 1rem; background: var(--color-bg-subtle); border-radius: var(--radius-md); font-size: 0.85rem;">
        <strong>Manager's Commendation:</strong>
        <p style="color: var(--color-text-muted); margin-top: 0.25rem;">${latest.remarks}</p>
      </div>
    `;

    // History table
    const histTable = document.getElementById("incrementHistoryTableBody");
    histTable.innerHTML = userLetters.map(l => `
      <tr>
        <td><strong>${formatDate(l.effectiveDate)}</strong></td>
        <td>${l.designation}</td>
        <td>${formatINR(l.previousSalary)}</td>
        <td class="text-success font-bold">${formatINR(l.revisedSalary)}</td>
        <td><span class="badge-pill bg-green-subtle text-success">+${l.hikePercent}%</span></td>
        <td>${l.rating}</td>
        <td class="text-right">
          <button type="button" class="btn-action-icon" title="View" onclick="window.ui.openLetterModal('increment', '${l.id}')">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button type="button" class="btn-action-icon" title="Download" onclick="window.ui.downloadLetterDirect('increment', '${l.id}')">
            <i class="fa-solid fa-download"></i>
          </button>
        </td>
      </tr>
    `).join("");
  },

  // ===========================================================================
  // EXPERIENCE LETTER SECTION
  // ===========================================================================
  renderExperienceLetterSection: function() {
    const user = state.currentUser;
    const expLetter = state.experienceLetters.find(l => l.empId === user.id);
    const container = document.getElementById("experienceLetterContainer");
    const adminActionPlaceholder = document.getElementById("adminExperienceBtnPlaceholder");

    if (state.currentRole === "admin") {
      adminActionPlaceholder.innerHTML = `
        <button type="button" class="btn-primary" onclick="window.admin.openIssueExperienceModal()">
          <i class="fa-solid fa-certificate"></i> Generate Experience Letter
        </button>
      `;
    } else {
      adminActionPlaceholder.innerHTML = "";
    }

    if (!expLetter) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon text-primary"><i class="fa-solid fa-user-check"></i></div>
          <h3>Active Employment in Good Standing</h3>
          <p>You are currently an active employee of Sonal Services. Official Experience and Relieving Certificates are generated upon successful completion of service tenure.</p>
          <div style="margin-top: 1.5rem;">
            <span class="badge-pill bg-blue-subtle text-primary">Tenure to Date: Since ${formatDate(user.doj)}</span>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <span class="badge-status badge-verified"><i class="fa-solid fa-certificate"></i> Official Relieving Certificate</span>
          <h3 style="font-size: 1.3rem; font-weight: 800; margin-top: 0.5rem; color: var(--color-navy);">${expLetter.title}</h3>
          <p style="color: var(--color-text-muted); font-size: 0.85rem;">Ref: <strong class="font-mono text-primary">${expLetter.refNo}</strong> &bull; Issued: ${formatDate(expLetter.issueDate)}</p>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button type="button" class="btn-secondary" onclick="window.ui.openLetterModal('experience', '${expLetter.id}')">
            <i class="fa-regular fa-eye"></i> View Letter
          </button>
          <button type="button" class="btn-primary" onclick="window.ui.downloadLetterDirect('experience', '${expLetter.id}')">
            <i class="fa-solid fa-download"></i> Download Official Certificate
          </button>
        </div>
      </div>

      <div class="info-list-grid">
        <div class="info-cell">
          <span class="info-label">Tenure Duration</span>
          <strong class="info-val">${formatDate(expLetter.startDate)} to ${formatDate(expLetter.relievingDate)}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Designation Held</span>
          <strong class="info-val">${expLetter.designation}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Conduct & Integrity</span>
          <strong class="info-val text-success">${expLetter.conduct}</strong>
        </div>
        <div class="info-cell">
          <span class="info-label">Relieving Status</span>
          <strong class="info-val">All Dues Cleared & Relieved</strong>
        </div>
      </div>
      <div style="margin-top: 1.25rem; padding: 0.85rem 1rem; background: var(--color-bg-subtle); border-radius: var(--radius-md); font-size: 0.85rem;">
        <strong>Certificate Body:</strong>
        <p style="color: var(--color-text-muted); margin-top: 0.25rem;">${expLetter.remarks}</p>
      </div>
    `;
  },

  // ===========================================================================
  // ANNOUNCEMENTS VIEW
  // ===========================================================================
  renderAnnouncements: function() {
    const container = document.getElementById("announcementsListContainer");
    const adminBtnPlaceholder = document.getElementById("adminAnnouncementBtnPlaceholder");

    if (state.currentRole === "admin") {
      adminBtnPlaceholder.innerHTML = `
        <button type="button" class="btn-primary" onclick="window.admin.openNewAnnouncementModal()">
          <i class="fa-solid fa-bullhorn"></i> Broadcast Announcement
        </button>
      `;
    } else {
      adminBtnPlaceholder.innerHTML = "";
    }

    container.innerHTML = state.announcements.map(a => `
      <div class="section-card" style="margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <span class="ann-tag">${a.category}</span>
            <h3 style="font-size: 1.2rem; font-weight: 700; margin-top: 0.35rem; color: var(--color-navy);">${a.title}</h3>
            <span style="font-size: 0.75rem; color: #64748b;">Published on ${formatDate(a.date)} by <strong>${a.author}</strong></span>
          </div>
          ${a.isUrgent ? '<span class="badge-status badge-rejected"><i class="fa-solid fa-circle-exclamation"></i> High Priority</span>' : ''}
        </div>
        <p style="color: #334155; font-size: 0.92rem; line-height: 1.6;">${a.content}</p>
      </div>
    `).join("");
  },

  // ===========================================================================
  // OFFICIAL LETTER PREVIEW MODAL & PRINT ENGINE
  // ===========================================================================
  openLetterModal: function(type, id) {
    const printArea = document.getElementById("printableLetterArea");
    let letter, emp;

    if (type === "appointment") {
      letter = state.appointmentLetters.find(l => l.id === id);
      emp = state.getEmployee(letter ? letter.empId : state.currentUser.id);
      document.getElementById("letterModalTitle").textContent = "Appointment & Employment Agreement";
      document.getElementById("letterModalSubtitle").textContent = `Ref: ${letter.refNo} • Sonal Services Corporate Letterhead`;

      printArea.innerHTML = `
        <div class="letterhead-sheet">
          <div class="letterhead-top">
            <div class="letterhead-logo">
              <div class="payslip-logo-icon"><i class="fa-solid fa-building-columns"></i></div>
              <div>
                <h2>Sonal Services Pvt. Ltd.</h2>
                <p>Enterprise Technology Solutions & Consulting</p>
              </div>
            </div>
            <div class="letterhead-corp-info">
              Corporate Tower B, Tech Park, Pune - 411014<br>
              CIN: U72900MH2020PTC345678 &bull; GSTIN: 27AABCS1234F1Z5<br>
              hr@sonalservices.com &bull; www.sonalservices.com
            </div>
          </div>

          <div class="letter-meta-row">
            <span><strong>Ref:</strong> ${letter.refNo}</span>
            <span><strong>Date:</strong> ${formatDate(letter.issueDate)}</span>
          </div>

          <div class="letter-recipient">
            <strong>To,</strong><br>
            <strong>${emp.name}</strong><br>
            ${emp.currentAddress}<br>
            Email: ${emp.email} &bull; Contact: ${emp.phone}
          </div>

          <div class="letter-subject">
            SUBJECT: APPOINTMENT LETTER FOR THE POST OF ${letter.designation.toUpperCase()}
          </div>

          <p class="letter-body-p">Dear <strong>${emp.name}</strong>,</p>
          <p class="letter-body-p">
            With reference to your interview and subsequent interactions with our technical leadership, the Management of <strong>Sonal Services Pvt. Ltd.</strong> is pleased to appoint you as <strong>${letter.designation}</strong> in our <strong>${letter.department}</strong> department on the following agreed terms and conditions:
          </p>

          <table class="letter-terms-table">
            <tr>
              <td class="term-col">Employee ID</td>
              <td><strong>${emp.id}</strong></td>
            </tr>
            <tr>
              <td class="term-col">Designation</td>
              <td>${letter.designation}</td>
            </tr>
            <tr>
              <td class="term-col">Effective Date of Joining</td>
              <td>${formatDate(letter.joiningDate)}</td>
            </tr>
            <tr>
              <td class="term-col">Monthly Gross Salary</td>
              <td><strong>${formatINR(letter.monthlyGross)}</strong> (Rupees ${numberToWords(letter.monthlyGross)})</td>
            </tr>
            <tr>
              <td class="term-col">Annual CTC Package</td>
              <td><strong>${formatINR(letter.annualCtc)}</strong> per annum</td>
            </tr>
            <tr>
              <td class="term-col">Work Location & Mode</td>
              <td>${emp.location}</td>
            </tr>
            <tr>
              <td class="term-col">Probation Period</td>
              <td>${letter.probation} from the date of joining</td>
            </tr>
            <tr>
              <td class="term-col">Notice Period</td>
              <td>${letter.noticePeriod} upon confirmation</td>
            </tr>
          </table>

          <p class="letter-body-p">
            You will be governed by the standard rules, employment policies, intellectual property assignments, and non-disclosure obligations of Sonal Services Pvt. Ltd. We welcome you to our team and wish you a rewarding, enriching career with us.
          </p>

          <div class="payslip-signatures">
            <div class="sig-box">
              <div class="sig-stamp">DIGITALLY SIGNED<br>SONAL HR</div>
              <div class="sig-line"></div>
              <span><strong>Priya Patel</strong><br>Lead HR Business Partner<br>Sonal Services Pvt. Ltd.</span>
            </div>
            <div class="sig-box">
              <div style="height: 48px;"></div>
              <div class="sig-line"></div>
              <span><strong>${emp.name}</strong><br>Candidate Acceptance Signature<br>Date: _______________</span>
            </div>
          </div>
        </div>
      `;
    } else if (type === "increment") {
      letter = state.incrementLetters.find(l => l.id === id);
      emp = state.getEmployee(letter ? letter.empId : state.currentUser.id);
      document.getElementById("letterModalTitle").textContent = "Official Appraisal & Increment Letter";
      document.getElementById("letterModalSubtitle").textContent = `Ref: ${letter.refNo} • Sonal Services Letterhead`;

      printArea.innerHTML = `
        <div class="letterhead-sheet">
          <div class="letterhead-top">
            <div class="letterhead-logo">
              <div class="payslip-logo-icon"><i class="fa-solid fa-building-columns"></i></div>
              <div>
                <h2>Sonal Services Pvt. Ltd.</h2>
                <p>Enterprise Technology Solutions & Consulting</p>
              </div>
            </div>
            <div class="letterhead-corp-info">
              Corporate Tower B, Tech Park, Pune - 411014<br>
              CIN: U72900MH2020PTC345678 &bull; GSTIN: 27AABCS1234F1Z5<br>
              hr@sonalservices.com &bull; www.sonalservices.com
            </div>
          </div>

          <div class="letter-meta-row">
            <span><strong>Ref:</strong> ${letter.refNo}</span>
            <span><strong>Date:</strong> ${formatDate(letter.issueDate)}</span>
          </div>

          <div class="letter-recipient">
            <strong>To,</strong><br>
            <strong>${emp.name}</strong> (Emp ID: ${emp.id})<br>
            Designation: ${letter.designation}<br>
            Department: ${emp.department}
          </div>

          <div class="letter-subject">
            SUBJECT: ANNUAL APPRAISAL & COMPENSATION REVISION
          </div>

          <p class="letter-body-p">Dear <strong>${emp.name}</strong>,</p>
          <p class="letter-body-p">
            In recognition of your dedicated contributions, professionalism, and high performance during the annual appraisal assessment cycle, the Leadership Team of <strong>Sonal Services Pvt. Ltd.</strong> is delighted to revise your compensation structure effective from <strong>${formatDate(letter.effectiveDate)}</strong>.
          </p>

          <table class="letter-terms-table">
            <tr>
              <td class="term-col">Performance Evaluation Rating</td>
              <td><strong class="text-primary">${letter.rating}</strong></td>
            </tr>
            <tr>
              <td class="term-col">Previous Monthly Gross CTC</td>
              <td>${formatINR(letter.previousSalary)}</td>
            </tr>
            <tr>
              <td class="term-col">Revised Monthly Gross CTC</td>
              <td><strong class="text-success" style="font-size: 1.05rem;">${formatINR(letter.revisedSalary)}</strong></td>
            </tr>
            <tr>
              <td class="term-col">Monthly Enhancement</td>
              <td><strong>+${formatINR(letter.hikeAmount)} (${letter.hikePercent}%)</strong></td>
            </tr>
            <tr>
              <td class="term-col">Revised Annual CTC</td>
              <td><strong>${formatINR(letter.revisedSalary * 12)}</strong> per annum</td>
            </tr>
          </table>

          <p class="letter-body-p">
            <strong>Appraisal Remarks:</strong><br>
            "${letter.remarks}"
          </p>
          <p class="letter-body-p">
            All other terms and conditions of your employment contract remain unchanged. We look forward to your continued leadership and high impact in the upcoming quarters.
          </p>

          <div class="payslip-signatures">
            <div class="sig-box">
              <div class="sig-stamp">DIGITALLY SIGNED<br>SONAL HR</div>
              <div class="sig-line"></div>
              <span><strong>Priya Patel</strong><br>Lead HR Business Partner<br>Sonal Services Pvt. Ltd.</span>
            </div>
            <div class="sig-box">
              <div class="sig-stamp" style="border-color: #1e3a8a; color: #1e3a8a;">EXECUTIVE SEAL<br>SONAL SERVICES</div>
              <div class="sig-line"></div>
              <span><strong>Vikram Malhotra</strong><br>Vice President - Technology<br>Sonal Services Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      `;
    } else if (type === "experience") {
      letter = state.experienceLetters.find(l => l.id === id);
      emp = state.getEmployee(letter ? letter.empId : state.currentUser.id);
      document.getElementById("letterModalTitle").textContent = "Experience & Relieving Certificate";
      document.getElementById("letterModalSubtitle").textContent = `Ref: ${letter.refNo} • Sonal Services Letterhead`;

      printArea.innerHTML = `
        <div class="letterhead-sheet">
          <div class="letterhead-top">
            <div class="letterhead-logo">
              <div class="payslip-logo-icon"><i class="fa-solid fa-building-columns"></i></div>
              <div>
                <h2>Sonal Services Pvt. Ltd.</h2>
                <p>Enterprise Technology Solutions & Consulting</p>
              </div>
            </div>
            <div class="letterhead-corp-info">
              Corporate Tower B, Tech Park, Pune - 411014<br>
              CIN: U72900MH2020PTC345678 &bull; GSTIN: 27AABCS1234F1Z5<br>
              hr@sonalservices.com &bull; www.sonalservices.com
            </div>
          </div>

          <div class="letter-meta-row">
            <span><strong>Ref:</strong> ${letter.refNo}</span>
            <span><strong>Date:</strong> ${formatDate(letter.issueDate)}</span>
          </div>

          <div style="text-align: center; margin: 1.5rem 0; font-size: 1.15rem; font-weight: 800; letter-spacing: 0.05em; text-decoration: underline;">
            TO WHOMSOEVER IT MAY CONCERN
          </div>

          <div class="letter-subject">
            EXPERIENCE & SERVICE RELIEVING CERTIFICATE
          </div>

          <p class="letter-body-p">
            This is to certify that <strong>${letter.empName || emp.name}</strong> (Employee ID: <strong>${emp.id}</strong>) was employed with <strong>Sonal Services Pvt. Ltd.</strong> from <strong>${formatDate(letter.startDate)}</strong> to <strong>${formatDate(letter.relievingDate)}</strong>.
          </p>
          <p class="letter-body-p">
            At the time of relieving, they were holding the designation of <strong>${letter.designation}</strong> in our <strong>${letter.department}</strong> department.
          </p>
          <p class="letter-body-p">
            During their tenure of service with us, we found them to be sincere, diligent, and professionally competent. Their professional conduct and integrity were evaluated as <strong>${letter.conduct}</strong>.
          </p>
          <p class="letter-body-p">
            They have completed all exit formalities and handover requirements, and all outstanding company accounts stand completely reconciled and cleared.
          </p>
          <p class="letter-body-p">
            We take this opportunity to thank them for their valued contributions to Sonal Services and wish them the very best in all their future career pursuits.
          </p>

          <div class="payslip-signatures">
            <div class="sig-box">
              <div class="sig-stamp">DIGITALLY SIGNED<br>SONAL HR</div>
              <div class="sig-line"></div>
              <span><strong>Priya Patel</strong><br>Lead HR Business Partner<br>Sonal Services Pvt. Ltd.</span>
            </div>
            <div class="sig-box">
              <div class="sig-stamp" style="border-color: #1e3a8a; color: #1e3a8a;">CORPORATE SEAL<br>AUTHORIZED</div>
              <div class="sig-line"></div>
              <span><strong>Corporate HR Department</strong><br>Pune Head Office</span>
            </div>
          </div>
        </div>
      `;
    }

    window.ui.openModal("letterPreviewModal");
  },

  downloadLetterDirect: function(type, id) {
    window.ui.openLetterModal(type, id);
    setTimeout(() => {
      window.ui.printCurrentLetter();
    }, 300);
  },

  printCurrentLetter: function() {
    window.print();
  }
};

// =============================================================================
// 5. EMPLOYEE PROFILE CONTROLLER
// =============================================================================

window.profile = {
  renderProfile: function() {
    const user = state.currentUser;
    const isEmp = state.currentRole === "employee";

    // Header banner
    document.getElementById("profHeaderAvatar").src = user.avatar;
    document.getElementById("profHeaderName").textContent = user.name;
    document.getElementById("profHeaderStatus").textContent = user.status;
    document.getElementById("profHeaderStatus").className = `badge-status badge-${user.status === 'Active' ? 'active' : 'notice'}`;
    document.getElementById("profHeaderDesignation").textContent = `${user.designation} • ${user.department}`;
    document.getElementById("profHeaderId").textContent = user.id;
    document.getElementById("profHeaderEmail").textContent = user.email;
    document.getElementById("profHeaderPhone").textContent = user.phone;
    document.getElementById("profHeaderLocation").textContent = user.location;

    // SECTION A: Personal info (Editable)
    document.getElementById("pFullName").value = user.name;
    document.getElementById("pDob").value = user.dob;
    document.getElementById("pGender").value = user.gender;
    document.getElementById("pPhone").value = user.phone;
    document.getElementById("pEmail").value = user.email;
    document.getElementById("pEmergencyContactName").value = user.emergencyContactName;
    document.getElementById("pEmergencyContactPhone").value = user.emergencyContactPhone;
    document.getElementById("pEmergencyRelation").value = user.emergencyRelation || "Spouse";
    document.getElementById("pCurrentAddress").value = user.currentAddress;
    document.getElementById("pPermanentAddress").value = user.permanentAddress;

    // SECTION B: Employment info (Restricted to HR)
    document.getElementById("pEmpId").value = user.id;
    document.getElementById("pDepartment").value = user.department;
    document.getElementById("pDesignation").value = user.designation;
    document.getElementById("pDoj").value = user.doj;
    document.getElementById("pEmploymentType").value = user.employmentType;
    document.getElementById("pManager").value = user.manager;
    document.getElementById("pLocation").value = user.location;
    document.getElementById("pStatus").value = user.status;
    document.getElementById("pSalary").value = formatINR(user.monthlySalary) + " / month (Gross)";

    const lockBadge = document.getElementById("empInfoLockBadge");
    if (!isEmp) {
      lockBadge.innerHTML = '<i class="fa-solid fa-lock-open"></i> HR Unlocked';
      lockBadge.className = 'badge-status badge-verified';
      // Enable fields for HR
      ["pDepartment", "pDesignation", "pDoj", "pEmploymentType", "pManager", "pLocation", "pStatus"].forEach(id => {
        document.getElementById(id).readOnly = false;
        document.getElementById(id).classList.remove("input-readonly");
      });
    } else {
      lockBadge.innerHTML = '<i class="fa-solid fa-lock"></i> HR Restricted';
      lockBadge.className = 'badge-status badge-rejected';
      ["pDepartment", "pDesignation", "pDoj", "pEmploymentType", "pManager", "pLocation", "pStatus"].forEach(id => {
        document.getElementById(id).readOnly = true;
        document.getElementById(id).classList.add("input-readonly");
      });
    }

    // SECTION C: Bank details
    document.getElementById("pBankHolder").value = user.bankHolder;
    document.getElementById("pBankName").value = user.bankName;
    document.getElementById("pAccountNo").value = user.accountNo;
    document.getElementById("pIfsc").value = user.ifsc;

    // SECTION D: Identity
    document.getElementById("pAadhaarNo").value = user.aadhaarMasked;
    document.getElementById("pPanNo").value = user.pan;
    document.getElementById("pPassportNo").value = user.passport || "";
  },

  saveProfile: function(e) {
    e.preventDefault();
    const user = state.currentUser;

    user.name = document.getElementById("pFullName").value.trim();
    user.dob = document.getElementById("pDob").value;
    user.gender = document.getElementById("pGender").value;
    user.phone = document.getElementById("pPhone").value.trim();
    user.email = document.getElementById("pEmail").value.trim();
    user.emergencyContactName = document.getElementById("pEmergencyContactName").value.trim();
    user.emergencyContactPhone = document.getElementById("pEmergencyContactPhone").value.trim();
    user.emergencyRelation = document.getElementById("pEmergencyRelation").value.trim();
    user.currentAddress = document.getElementById("pCurrentAddress").value.trim();
    user.permanentAddress = document.getElementById("pPermanentAddress").value.trim();

    user.bankHolder = document.getElementById("pBankHolder").value.trim();
    user.bankName = document.getElementById("pBankName").value.trim();
    user.accountNo = document.getElementById("pAccountNo").value.trim();
    user.ifsc = document.getElementById("pIfsc").value.trim();
    user.passport = document.getElementById("pPassportNo").value.trim();

    // If Admin, also update employment details
    if (state.currentRole === "admin") {
      user.department = document.getElementById("pDepartment").value;
      user.designation = document.getElementById("pDesignation").value.trim();
      user.doj = document.getElementById("pDoj").value;
      user.employmentType = document.getElementById("pEmploymentType").value.trim();
      user.manager = document.getElementById("pManager").value.trim();
      user.location = document.getElementById("pLocation").value.trim();
      user.status = document.getElementById("pStatus").value;
    }

    // Update in employees list
    const idx = state.employees.findIndex(emp => emp.id === user.id);
    if (idx !== -1) {
      state.employees[idx] = user;
    }
    state.saveAll();

    // Re-render UI
    window.ui.initPortalUI();
    window.ui.showToast("Personal details updated successfully in HR records.", "success");
  },

  handleAvatarUpload: function(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      window.ui.showToast("Please upload a valid image file (JPG, PNG).", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(evt) {
      state.currentUser.avatar = evt.target.result;
      const idx = state.employees.findIndex(emp => emp.id === state.currentUser.id);
      if (idx !== -1) state.employees[idx].avatar = evt.target.result;
      state.saveAll();

      document.getElementById("profHeaderAvatar").src = evt.target.result;
      document.getElementById("sidebarUserAvatar").src = evt.target.result;
      document.getElementById("topbarUserAvatar").src = evt.target.result;
      window.ui.showToast("Profile photograph updated successfully.", "success");
    };
    reader.readAsDataURL(file);
  },

  resetProfileForm: function() {
    window.profile.renderProfile();
    window.ui.showToast("Form changes reverted.", "info");
  }
};

// =============================================================================
// 6. SALARY SLIPS CONTROLLER
// =============================================================================

window.salary = {
  currentSlips: [],

  renderSalarySlips: function() {
    const user = state.currentUser;
    const adminUploadPlaceholder = document.getElementById("adminSalaryUploadBtnPlaceholder");

    if (state.currentRole === "admin") {
      adminUploadPlaceholder.innerHTML = `
        <button type="button" class="btn-primary" onclick="window.admin.openUploadSalaryModal()">
          <i class="fa-solid fa-file-circle-plus"></i> Upload & Issue Salary Slip
        </button>
      `;
    } else {
      adminUploadPlaceholder.innerHTML = "";
    }

    window.salary.filterSlips();
  },

  filterSlips: function() {
    const user = state.currentUser;
    const year = document.getElementById("salaryFilterYear").value;
    const month = document.getElementById("salaryFilterMonth").value;

    let slips = state.salarySlips.filter(s => s.empId === user.id);

    if (year !== "all") {
      slips = slips.filter(s => String(s.year) === String(year));
    }
    if (month !== "all") {
      slips = slips.filter(s => s.monthNum === month);
    }

    window.salary.currentSlips = slips;

    // Calculate YTD Net
    const totalYtd = slips.reduce((sum, item) => sum + item.netPay, 0);
    document.getElementById("salaryYtdNet").textContent = formatINR(totalYtd);

    const tbody = document.getElementById("salarySlipsTableBody");
    const emptyState = document.getElementById("salaryEmptyState");

    if (slips.length === 0) {
      tbody.innerHTML = "";
      emptyState.classList.remove("hidden");
      return;
    }

    emptyState.classList.add("hidden");
    tbody.innerHTML = slips.map(s => {
      const allowances = s.hra + s.special + s.conveyance;
      const deductions = s.pf + s.pt + s.tds;
      return `
        <tr>
          <td>
            <strong>${s.month} ${s.year}</strong>
          </td>
          <td><span style="font-size: 0.8rem; color: #64748b;">${s.payPeriod}</span></td>
          <td class="font-mono">${formatINR(s.basic)}</td>
          <td class="font-mono">${formatINR(allowances)}</td>
          <td class="font-mono text-danger">-${formatINR(deductions)}</td>
          <td class="font-mono text-success font-bold" style="font-size: 0.95rem;">${formatINR(s.netPay)}</td>
          <td><span class="badge-status badge-verified"><i class="fa-solid fa-check"></i> ${s.status}</span></td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View Payslip" onclick="window.salary.openSlipPreview('${s.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Print / Download PDF" onclick="window.salary.downloadSlipDirect('${s.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openSlipPreview: function(slipId) {
    const slip = state.salarySlips.find(s => s.id === slipId);
    if (!slip) return;
    const emp = state.getEmployee(slip.empId);

    document.getElementById("slipModalSubtitle").textContent = `Pay Statement for the month of ${slip.month} ${slip.year}`;
    const printArea = document.getElementById("printableSalarySlipArea");

    const grossEarnings = slip.basic + slip.hra + slip.special + slip.conveyance;
    const totalDeductions = slip.pf + slip.pt + slip.tds;

    printArea.innerHTML = `
      <div class="payslip-sheet">
        <!-- Company Header -->
        <div class="payslip-company-header">
          <div class="payslip-logo-group">
            <div class="payslip-logo-icon"><i class="fa-solid fa-building-columns"></i></div>
            <div class="payslip-company-details">
              <h2>Sonal Services Pvt. Ltd.</h2>
              <p>Corporate Office: Tower B, Tech Park, Viman Nagar, Pune - 411014</p>
              <p>CIN: U72900MH2020PTC345678 &bull; PAN: ABCDE1234F &bull; TAN: PNE00142A</p>
            </div>
          </div>
          <div class="payslip-doc-badge">
            <h3>SALARY STATEMENT</h3>
            <span>Pay Slip for ${slip.month} ${slip.year}</span>
          </div>
        </div>

        <!-- Employee Metadata Grid -->
        <table class="payslip-emp-meta-table">
          <tr>
            <td class="meta-label">Employee ID</td>
            <td><strong>${emp.id}</strong></td>
            <td class="meta-label">Employee Name</td>
            <td><strong>${emp.name}</strong></td>
          </tr>
          <tr>
            <td class="meta-label">Designation</td>
            <td>${emp.designation}</td>
            <td class="meta-label">Department</td>
            <td>${emp.department}</td>
          </tr>
          <tr>
            <td class="meta-label">Date of Joining</td>
            <td>${formatDate(emp.doj)}</td>
            <td class="meta-label">Pay Period</td>
            <td>${slip.payPeriod}</td>
          </tr>
          <tr>
            <td class="meta-label">Bank Name</td>
            <td>${emp.bankName}</td>
            <td class="meta-label">Bank Account No</td>
            <td class="font-mono"><strong>${emp.accountNo}</strong></td>
          </tr>
          <tr>
            <td class="meta-label">IFSC Code</td>
            <td class="font-mono">${emp.ifsc}</td>
            <td class="meta-label">PAN Number</td>
            <td class="font-mono">${emp.pan}</td>
          </tr>
          <tr>
            <td class="meta-label">Payment Mode</td>
            <td>NEFT Direct Credit</td>
            <td class="meta-label">Transfer Reference</td>
            <td class="font-mono">${slip.refNo}</td>
          </tr>
        </table>

        <!-- Earnings & Deductions Breakdown -->
        <div class="payslip-breakdown-grid">
          <!-- Earnings Column -->
          <div>
            <div class="payslip-col-header">Earnings</div>
            <table class="payslip-subtable">
              <tr>
                <td>Basic Salary</td>
                <td class="amount-col">${formatINR(slip.basic)}</td>
              </tr>
              <tr>
                <td>House Rent Allowance (HRA)</td>
                <td class="amount-col">${formatINR(slip.hra)}</td>
              </tr>
              <tr>
                <td>Special Allowance</td>
                <td class="amount-col">${formatINR(slip.special)}</td>
              </tr>
              <tr>
                <td>Conveyance Allowance</td>
                <td class="amount-col">${formatINR(slip.conveyance)}</td>
              </tr>
              <tr class="payslip-total-row">
                <td><strong>Gross Earnings (A)</strong></td>
                <td class="amount-col text-primary font-bold">${formatINR(grossEarnings)}</td>
              </tr>
            </table>
          </div>

          <!-- Deductions Column -->
          <div style="border-left: 1px solid #0f172a;">
            <div class="payslip-col-header">Deductions & Withholdings</div>
            <table class="payslip-subtable">
              <tr>
                <td>Provident Fund (PF - Employee)</td>
                <td class="amount-col">${formatINR(slip.pf)}</td>
              </tr>
              <tr>
                <td>Professional Tax (PT)</td>
                <td class="amount-col">${formatINR(slip.pt)}</td>
              </tr>
              <tr>
                <td>Tax Deducted at Source (TDS)</td>
                <td class="amount-col">${formatINR(slip.tds)}</td>
              </tr>
              <tr>
                <td>Other Statutory Deductions</td>
                <td class="amount-col">₹ 0</td>
              </tr>
              <tr class="payslip-total-row">
                <td><strong>Total Deductions (B)</strong></td>
                <td class="amount-col text-danger font-bold">${formatINR(totalDeductions)}</td>
              </tr>
            </table>
          </div>
        </div>

        <!-- Net Pay Banner -->
        <div class="payslip-net-banner">
          <div>
            <div style="font-size: 0.75rem; text-transform: uppercase; color: #475569; font-weight: 700;">Net Salary Disbursed (A - B)</div>
            <div class="net-words">In Words: <strong>${numberToWords(slip.netPay)}</strong></div>
          </div>
          <div class="net-figures">
            <span>Net Transfer Amount</span>
            <h3>${formatINR(slip.netPay)}</h3>
          </div>
        </div>

        <!-- Signatures & Disclaimer -->
        <div class="payslip-signatures">
          <div class="sig-box">
            <div class="sig-stamp">DIGITALLY SIGNED<br>PAYROLL DESK</div>
            <div class="sig-line"></div>
            <span>Authorized Signatory<br>Sonal Services Payroll</span>
          </div>
          <div style="font-size: 0.72rem; color: #64748b; max-width: 380px; text-align: center;">
            This is a computer-generated official pay advice and does not require physical pen signature when downloaded through authenticated portal credentials.
          </div>
          <div class="sig-box">
            <div class="sig-stamp" style="border-color: #10b981; color: #10b981;">PAID & CLEARED<br>NEFT DISBURSED</div>
            <div class="sig-line"></div>
            <span>Disbursement Officer<br>Finance & Accounts</span>
          </div>
        </div>
      </div>
    `;

    window.ui.openModal("salarySlipModal");
  },

  downloadSlipDirect: function(slipId) {
    window.salary.openSlipPreview(slipId);
    setTimeout(() => {
      window.salary.printSalarySlip();
    }, 300);
  },

  printSalarySlip: function() {
    window.print();
  }
};

// =============================================================================
// 7. PERSONAL DOCUMENTS VAULT CONTROLLER
// =============================================================================

window.docs = {
  currentCategory: "all",
  activeDocForPreview: null,
  stagedFile: null,

  renderDocuments: function() {
    const user = state.currentUser;
    const userDocs = state.documents.filter(d => d.empId === user.id);

    // Counts
    const idCount = userDocs.filter(d => d.category === "Identity").length;
    const eduCount = userDocs.filter(d => d.category === "Education").length;
    const finCount = userDocs.filter(d => d.category === "Financial").length;
    const prevCount = userDocs.filter(d => d.category === "Previous Employment").length;

    document.getElementById("countAllDocs").textContent = userDocs.length;
    document.getElementById("countIdDocs").textContent = idCount;
    document.getElementById("countEduDocs").textContent = eduCount;
    document.getElementById("countFinDocs").textContent = finCount;
    document.getElementById("countPrevDocs").textContent = prevCount;

    // Progress calculation (8 mandatory documents benchmark)
    const verifiedCount = userDocs.filter(d => d.status === "Verified").length;
    const progressPercent = Math.min(100, Math.round((verifiedCount / 8) * 100));

    document.getElementById("docCompletionBadge").textContent = `${progressPercent}% Complete`;
    document.getElementById("docProgressBar").style.width = `${progressPercent}%`;

    // Checklist chips
    const requiredList = [
      { name: "Aadhaar Card", verified: userDocs.some(d => d.name.toLowerCase().includes("aadhaar") && d.status === "Verified") },
      { name: "PAN Card", verified: userDocs.some(d => d.name.toLowerCase().includes("pan") && d.status === "Verified") },
      { name: "Graduation Degree", verified: userDocs.some(d => d.category === "Education" && d.status === "Verified") },
      { name: "Bank Cheque", verified: userDocs.some(d => d.category === "Financial" && d.status === "Verified") },
      { name: "Passport Photo", verified: userDocs.some(d => d.category === "Photograph" && d.status === "Verified") },
      { name: "Relieving Letter", verified: userDocs.some(d => d.category === "Previous Employment" && d.status === "Verified") }
    ];

    document.getElementById("docChecklistSummary").innerHTML = requiredList.map(item => `
      <span class="check-item-tag ${item.verified ? 'verified' : 'missing'}">
        <i class="fa-solid ${item.verified ? 'fa-circle-check' : 'fa-circle-dashed'}"></i>
        ${item.name}: ${item.verified ? 'Verified' : 'Pending'}
      </span>
    `).join("");

    window.docs.filterCategory(window.docs.currentCategory);
  },

  filterCategory: function(cat, btn) {
    window.docs.currentCategory = cat;
    if (btn) {
      document.querySelectorAll("#docCategoryTabs .tab-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
    }

    const user = state.currentUser;
    let docs = state.documents.filter(d => d.empId === user.id);

    if (cat !== "all") {
      docs = docs.filter(d => d.category === cat);
    }

    const grid = document.getElementById("docsGridContainer");
    if (docs.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon"><i class="fa-solid fa-folder-open"></i></div>
          <h3>No documents in this category</h3>
          <p>Click "Upload New Document" to submit files for HR review.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = docs.map(d => `
      <div class="doc-card">
        <div>
          <div class="doc-card-top">
            <div class="doc-file-icon">
              <i class="fa-solid ${d.fileName.endsWith('.pdf') ? 'fa-file-pdf text-danger' : 'fa-file-image text-primary'}"></i>
            </div>
            <div class="doc-file-info">
              <h4>${d.name}</h4>
              <span class="doc-cat-tag"><i class="fa-solid fa-folder"></i> ${d.category}</span>
            </div>
          </div>

          <div class="doc-card-meta">
            <div class="meta-row">
              <span>File Name:</span>
              <strong style="max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.fileName}</strong>
            </div>
            <div class="meta-row">
              <span>Uploaded On:</span>
              <strong>${formatDate(d.uploadedDate)}</strong>
            </div>
            <div class="meta-row">
              <span>File Size:</span>
              <strong>${d.fileSize}</strong>
            </div>
            <div class="meta-row">
              <span>Verification Desk:</span>
              <strong>${d.verifiedBy}</strong>
            </div>
            ${d.remarks ? `
              <div style="margin-top: 0.35rem; font-size: 0.74rem; color: #64748b; font-style: italic;">
                "${d.remarks}"
              </div>
            ` : ''}
          </div>
        </div>

        <div class="doc-card-footer">
          <span class="badge-status badge-${d.status.toLowerCase()}">${d.status}</span>
          <div>
            <button type="button" class="btn-action-icon" title="View Document" onclick="window.docs.openDocPreview('${d.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Download Document" onclick="window.docs.downloadDocDirect('${d.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
            ${d.status === "Rejected" ? `
              <button type="button" class="btn-action-icon danger" title="Re-upload" onclick="window.docs.openUploadModal('${d.category}', '${d.name}')">
                <i class="fa-solid fa-arrow-rotate-right"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `).join("");
  },

  openUploadModal: function(prefillCat = "", prefillName = "") {
    document.getElementById("uploadDocCategory").value = prefillCat;
    document.getElementById("uploadDocName").value = prefillName;
    document.getElementById("uploadDocExpiry").value = "";
    document.getElementById("uploadFileError").textContent = "";
    window.docs.clearSelectedFile();
    window.ui.openModal("docUploadModal");
  },

  handleCategoryChange: function(val) {
    const nameInput = document.getElementById("uploadDocName");
    if (!nameInput.value) {
      if (val === "Identity") nameInput.value = "Aadhaar Card Front & Back";
      else if (val === "Education") nameInput.value = "Degree Certificate";
      else if (val === "Financial") nameInput.value = "Cancelled Cheque";
      else if (val === "Photograph") nameInput.value = "Passport Size Photograph";
    }
  },

  handleFileSelected: function(file) {
    if (!file) return;
    const allowed = [".pdf", ".jpg", ".jpeg", ".png"];
    const ext = "." + file.name.split('.').pop().toLowerCase();

    if (!allowed.includes(ext)) {
      document.getElementById("uploadFileError").textContent = "Invalid file type. Please upload a PDF, JPG, or PNG.";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      document.getElementById("uploadFileError").textContent = "File size exceeds 10MB limit.";
      return;
    }

    window.docs.stagedFile = file;
    document.getElementById("uploadFileError").textContent = "";
    document.getElementById("dropzoneFileName").textContent = file.name;
    document.getElementById("dropzoneFileSize").textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";

    document.querySelector(".dropzone-content").classList.add("hidden");
    document.getElementById("dropzoneFilePreview").classList.remove("hidden");
  },

  clearSelectedFile: function(e) {
    if (e) e.stopPropagation();
    window.docs.stagedFile = null;
    document.getElementById("actualFileInput").value = "";
    document.querySelector(".dropzone-content").classList.remove("hidden");
    document.getElementById("dropzoneFilePreview").classList.add("hidden");
  },

  handleDocUploadSubmit: function(e) {
    e.preventDefault();
    const cat = document.getElementById("uploadDocCategory").value;
    const name = document.getElementById("uploadDocName").value.trim();
    const expiry = document.getElementById("uploadDocExpiry").value || "N/A";
    const file = window.docs.stagedFile;

    if (!file) {
      document.getElementById("uploadFileError").textContent = "Please select or drag a document file to upload.";
      return;
    }

    const newDoc = {
      id: "DOC-" + Date.now(),
      empId: state.currentUser.id,
      name: name,
      category: cat,
      fileName: file.name,
      fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      uploadedDate: new Date().toISOString().split("T")[0],
      status: "Pending",
      expiryDate: expiry,
      verifiedBy: "Awaiting Verification",
      remarks: "Uploaded by employee for verification."
    };

    state.documents.push(newDoc);
    state.timeline.unshift({
      title: `${name} Uploaded`,
      desc: "Submitted for HR verification and compliance review.",
      time: "Just now",
      type: "doc"
    });
    state.saveAll();

    window.ui.closeModal("docUploadModal");
    window.ui.showToast(`Document "${name}" submitted for HR verification.`, "success");
    window.docs.renderDocuments();
    window.ui.renderEmployeeDashboard();
  },

  openDocPreview: function(docId) {
    const doc = state.documents.find(d => d.id === docId);
    if (!doc) return;

    window.docs.activeDocForPreview = doc;
    document.getElementById("docPreviewTitle").textContent = doc.name;
    document.getElementById("docPreviewMeta").innerHTML = `
      Category: <strong>${doc.category}</strong> &bull; Uploaded: <strong>${formatDate(doc.uploadedDate)}</strong> &bull; Status: <span class="badge-status badge-${doc.status.toLowerCase()}">${doc.status}</span>
    `;

    const contentArea = document.getElementById("docPreviewScreenContent");
    contentArea.innerHTML = `
      <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: var(--radius-md); padding: 2.5rem; text-align: center; box-shadow: var(--shadow-sm);">
        <div style="font-size: 3.5rem; color: #2563eb; margin-bottom: 1rem;">
          <i class="fa-solid ${doc.fileName.endsWith('.pdf') ? 'fa-file-pdf text-danger' : 'fa-file-image text-primary'}"></i>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a;">${doc.fileName}</h3>
        <p style="color: #64748b; font-size: 0.85rem; margin-top: 0.25rem;">File Size: ${doc.fileSize} &bull; SHA-256 Verified Encrypted Checksum</p>
        
        <div style="max-width: 480px; margin: 1.5rem auto; padding: 1rem; background: #f8fafc; border-radius: var(--radius-sm); text-align: left; font-size: 0.85rem; border: 1px dashed #cbd5e1;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
            <span>Document ID:</span>
            <strong class="font-mono">${doc.id}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
            <span>Verification Desk:</span>
            <strong>${doc.verifiedBy}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>HR Compliance Notes:</span>
            <span style="font-style: italic; color: #334155;">${doc.remarks || 'None'}</span>
          </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 0.85rem;">
          <button type="button" class="btn-primary" onclick="window.docs.downloadCurrentDoc()">
            <i class="fa-solid fa-download"></i> Download ${doc.fileName}
          </button>
        </div>
      </div>
    `;

    window.ui.openModal("docPreviewModal");
  },

  downloadDocDirect: function(docId) {
    const doc = state.documents.find(d => d.id === docId);
    if (doc) {
      window.ui.showToast(`Downloading secure file: ${doc.fileName}`, "success");
    }
  },

  downloadCurrentDoc: function() {
    if (window.docs.activeDocForPreview) {
      window.ui.showToast(`Downloading secure file: ${window.docs.activeDocForPreview.fileName}`, "success");
    }
  }
};

// =============================================================================
// 8. ADMIN & HR MANAGEMENT MODULE
// =============================================================================

window.admin = {
  currentVerifFilter: "Pending",
  targetVerifDoc: null,

  renderAdminDashboard: function() {
    const activeCount = state.employees.filter(e => e.status === "Active").length;
    const pendingVerif = state.documents.filter(d => d.status === "Pending").length;
    const issuedLetters = state.appointmentLetters.length + state.incrementLetters.length + state.experienceLetters.length;

    document.getElementById("adminStatTotalEmp").textContent = state.employees.length;
    document.getElementById("adminStatActiveEmp").textContent = activeCount;
    document.getElementById("adminStatPendingVerif").textContent = pendingVerif;
    document.getElementById("adminStatSalarySlips").textContent = `${state.employees.length}/${state.employees.length}`;
    document.getElementById("adminStatLettersIssued").textContent = issuedLetters;

    // Badges in sidebar
    const badge = document.getElementById("adminPendingDocsBadge");
    if (badge) {
      badge.textContent = pendingVerif;
      badge.style.display = pendingVerif > 0 ? "inline-block" : "none";
    }

    // Recently onboarded table
    const recentTable = document.getElementById("adminRecentEmployeesTable");
    const recentList = [...state.employees].reverse().slice(0, 4);
    recentTable.innerHTML = recentList.map(e => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${e.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
            <div>
              <strong>${e.name}</strong>
              <div style="font-size: 0.72rem; color: #64748b;">${e.id}</div>
            </div>
          </div>
        </td>
        <td>${e.department}</td>
        <td>${formatDate(e.doj)}</td>
        <td><span class="badge-status badge-${e.status === 'Active' ? 'active' : 'notice'}">${e.status}</span></td>
        <td>
          <button type="button" class="btn-action-icon" title="Edit Employee" onclick="window.admin.openEditEmployeeModal('${e.id}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    `).join("");

    // Quick tasks list
    const tasksEl = document.getElementById("adminQuickTasksContainer");
    const pendingDocs = state.documents.filter(d => d.status === "Pending").slice(0, 4);

    if (pendingDocs.length === 0) {
      tasksEl.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: #64748b; font-size: 0.85rem;">
          <i class="fa-solid fa-circle-check text-success" style="font-size: 1.5rem; margin-bottom: 0.5rem; display: block;"></i>
          All submitted employee documents are verified.
        </div>
      `;
    } else {
      tasksEl.innerHTML = pendingDocs.map(d => {
        const emp = state.getEmployee(d.empId);
        return `
          <div class="admin-task-item">
            <div class="task-info">
              <strong>${d.name}</strong>
              <span>Submitted by ${emp.name} (${emp.id})</span>
            </div>
            <button type="button" class="btn-outline-sm" onclick="window.admin.openVerifyDocModal('${d.id}')">
              <i class="fa-solid fa-clipboard-check"></i> Audit
            </button>
          </div>
        `;
      }).join("");
    }
  },

  // ===========================================================================
  // ADMIN EMPLOYEE DIRECTORY
  // ===========================================================================
  renderEmployeeDirectory: function() {
    window.admin.filterEmployeeDirectory();
  },

  filterEmployeeDirectory: function() {
    const search = (document.getElementById("adminEmpSearchInput")?.value || "").toLowerCase().trim();
    const dept = document.getElementById("adminDeptFilter")?.value || "all";
    const status = document.getElementById("adminStatusFilter")?.value || "all";

    let emps = [...state.employees];

    if (search) {
      emps = emps.filter(e => 
        e.name.toLowerCase().includes(search) || 
        e.id.toLowerCase().includes(search) || 
        e.email.toLowerCase().includes(search)
      );
    }
    if (dept !== "all") {
      emps = emps.filter(e => e.department === dept);
    }
    if (status !== "all") {
      emps = emps.filter(e => e.status === status);
    }

    document.getElementById("adminFilteredCount").textContent = emps.length;
    const tbody = document.getElementById("adminEmployeesTableBody");

    tbody.innerHTML = emps.map(e => {
      const docs = state.documents.filter(d => d.empId === e.id);
      const verified = docs.filter(d => d.status === "Verified").length;
      const pct = Math.min(100, Math.round((verified / 8) * 100));

      return `
        <tr>
          <td><strong class="font-mono">${e.id}</strong></td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <img src="${e.avatar}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover;">
              <div>
                <strong>${e.name}</strong>
                <div style="font-size: 0.74rem; color: #64748b;">${e.email}</div>
              </div>
            </div>
          </td>
          <td>${e.department}</td>
          <td>${e.designation}</td>
          <td>${formatDate(e.doj)}</td>
          <td>
            <span class="badge-status badge-${e.status === 'Active' ? 'active' : (e.status === 'On Notice' ? 'notice' : 'rejected')}">
              ${e.status}
            </span>
          </td>
          <td>
            <div style="width: 110px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; margin-bottom: 2px;">
                <span>${verified}/8 Docs</span>
                <strong>${pct}%</strong>
              </div>
              <div class="progress-bar-wrap" style="height: 6px; margin: 0;">
                <div class="progress-bar-fill" style="width: ${pct}%;"></div>
              </div>
            </div>
          </td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View Profile" onclick="window.admin.viewEmployeeAs('${e.id}')">
              <i class="fa-regular fa-user"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Edit Employee" onclick="window.admin.openEditEmployeeModal('${e.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-action-icon danger" title="Toggle Status (Active / Inactive)" onclick="window.admin.toggleEmployeeStatus('${e.id}')">
              <i class="fa-solid fa-power-off"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  viewEmployeeAs: function(empId) {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp) return;
    state.currentUser = emp;
    window.profile.renderProfile();
    window.ui.navigate("employee-profile");
    window.ui.showToast(`Viewing profile of ${emp.name} (${emp.id})`, "info");
  },

  openAddEmployeeModal: function() {
    document.getElementById("adminEmpModalTitle").textContent = "Add New Employee";
    document.getElementById("adminEditEmpIndex").value = "-1";
    document.getElementById("aeId").value = "EMP-" + (1050 + state.employees.length);
    document.getElementById("aeId").readOnly = false;
    document.getElementById("aeName").value = "";
    document.getElementById("aeEmail").value = "";
    document.getElementById("aePhone").value = "";
    document.getElementById("aeDept").value = "Engineering & IT";
    document.getElementById("aeDesignation").value = "";
    document.getElementById("aeDoj").value = new Date().toISOString().split("T")[0];
    document.getElementById("aeStatus").value = "Active";
    document.getElementById("aeGross").value = "75000";
    document.getElementById("aeManager").value = "Vikram Malhotra";
    document.getElementById("aeLocation").value = "Pune HQ";
    document.getElementById("aePassword").value = "Sonal@2026";
    window.ui.openModal("adminEmployeeModal");
  },

  openEditEmployeeModal: function(empId) {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp) return;

    document.getElementById("adminEmpModalTitle").textContent = `Edit Employee: ${emp.name}`;
    document.getElementById("adminEditEmpIndex").value = emp.id;
    document.getElementById("aeId").value = emp.id;
    document.getElementById("aeId").readOnly = true;
    document.getElementById("aeName").value = emp.name;
    document.getElementById("aeEmail").value = emp.email;
    document.getElementById("aePhone").value = emp.phone;
    document.getElementById("aeDept").value = emp.department;
    document.getElementById("aeDesignation").value = emp.designation;
    document.getElementById("aeDoj").value = emp.doj;
    document.getElementById("aeStatus").value = emp.status;
    document.getElementById("aeGross").value = emp.monthlySalary;
    document.getElementById("aeManager").value = emp.manager;
    document.getElementById("aeLocation").value = emp.location;
    document.getElementById("aePassword").value = emp.password || "password123";

    window.ui.openModal("adminEmployeeModal");
  },

  saveEmployeeRecord: function(e) {
    e.preventDefault();
    const editId = document.getElementById("adminEditEmpIndex").value;
    const empId = document.getElementById("aeId").value.trim().toUpperCase();
    const name = document.getElementById("aeName").value.trim();
    const email = document.getElementById("aeEmail").value.trim();
    const phone = document.getElementById("aePhone").value.trim();
    const dept = document.getElementById("aeDept").value;
    const designation = document.getElementById("aeDesignation").value.trim();
    const doj = document.getElementById("aeDoj").value;
    const status = document.getElementById("aeStatus").value;
    const salary = Number(document.getElementById("aeGross").value);
    const manager = document.getElementById("aeManager").value.trim();
    const location = document.getElementById("aeLocation").value.trim();
    const pwd = document.getElementById("aePassword").value.trim();

    if (editId !== "-1") {
      // Edit existing
      const emp = state.employees.find(item => item.id === editId);
      if (emp) {
        emp.name = name;
        emp.email = email;
        emp.phone = phone;
        emp.department = dept;
        emp.designation = designation;
        emp.doj = doj;
        emp.status = status;
        emp.monthlySalary = salary;
        emp.manager = manager;
        emp.location = location;
        emp.password = pwd;
      }
      window.ui.showToast(`Updated employee record for ${name} (${empId})`, "success");
    } else {
      // Create new
      const newEmp = {
        id: empId,
        name: name,
        avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 90000000)}?auto=format&fit=crop&w=250&q=80`,
        email: email,
        phone: phone,
        dob: "1996-01-01",
        gender: "Male",
        department: dept,
        designation: designation,
        doj: doj,
        employmentType: "Full-Time Permanent",
        manager: manager,
        location: location,
        status: status,
        monthlySalary: salary,
        currentAddress: "Pune, Maharashtra",
        permanentAddress: "India",
        emergencyContactName: "Family",
        emergencyContactPhone: phone,
        emergencyRelation: "Contact",
        bankHolder: name,
        bankName: "HDFC Bank",
        accountNo: "50100" + Math.floor(100000000 + Math.random() * 900000000),
        ifsc: "HDFC0000045",
        aadhaarMasked: "XXXX-XXXX-" + Math.floor(1000 + Math.random() * 9000),
        pan: "ABCDE" + Math.floor(1000 + Math.random() * 9000) + "F",
        passport: "",
        role: "employee",
        password: pwd
      };
      state.employees.push(newEmp);
      window.ui.showToast(`Added new employee ${name} (${empId})`, "success");
    }

    state.saveAll();
    window.ui.closeModal("adminEmployeeModal");
    window.admin.filterEmployeeDirectory();
    window.admin.renderAdminDashboard();
  },

  toggleEmployeeStatus: function(empId) {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp) return;
    emp.status = emp.status === "Active" ? "Inactive" : "Active";
    state.saveAll();
    window.ui.showToast(`Status of ${emp.name} changed to ${emp.status}`, "info");
    window.admin.filterEmployeeDirectory();
    window.admin.renderAdminDashboard();
  },

  // ===========================================================================
  // ADMIN DOCUMENT VERIFICATION QUEUE
  // ===========================================================================
  renderVerificationQueue: function() {
    window.admin.filterVerifQueue(window.admin.currentVerifFilter);
  },

  filterVerifQueue: function(status, btn) {
    window.admin.currentVerifFilter = status;
    if (btn) {
      document.querySelectorAll("#adminVerifStatusTabs .tab-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
    }

    const pending = state.documents.filter(d => d.status === "Pending").length;
    const approved = state.documents.filter(d => d.status === "Verified").length;
    const rejected = state.documents.filter(d => d.status === "Rejected").length;

    document.getElementById("verifPendingCount").textContent = pending;
    document.getElementById("verifApprovedCount").textContent = approved;
    document.getElementById("verifRejectedCount").textContent = rejected;

    let docs = [...state.documents];
    if (status !== "all") {
      docs = docs.filter(d => d.status === status);
    }

    const tbody = document.getElementById("adminVerifTableBody");
    if (docs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-4">No documents found matching this filter.</td></tr>`;
      return;
    }

    tbody.innerHTML = docs.map(d => {
      const emp = state.getEmployee(d.empId);
      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <img src="${emp.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
              <div>
                <strong>${emp.name}</strong>
                <div style="font-size: 0.72rem; color: #64748b;">${emp.id} &bull; ${emp.department}</div>
              </div>
            </div>
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-file-pdf text-danger"></i>
              <strong>${d.name}</strong>
            </div>
          </td>
          <td><span class="badge-pill bg-light">${d.category}</span></td>
          <td>${formatDate(d.uploadedDate)}</td>
          <td><span class="badge-status badge-${d.status.toLowerCase()}">${d.status}</span></td>
          <td style="max-width: 220px; font-size: 0.8rem; color: #64748b;">${d.remarks || 'Pending audit review.'}</td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View Document" onclick="window.docs.openDocPreview('${d.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-outline-sm" onclick="window.admin.openVerifyDocModal('${d.id}')">
              <i class="fa-solid fa-clipboard-check"></i> Audit
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openVerifyDocModal: function(docId) {
    const doc = state.documents.find(d => d.id === docId);
    if (!doc) return;

    window.admin.targetVerifDoc = doc;
    const emp = state.getEmployee(doc.empId);

    document.getElementById("adminVerifDocSubtitle").textContent = `Reviewing: ${doc.name} (${doc.fileName})`;
    document.getElementById("adminVerifSummaryBox").innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.83rem;">
        <div><span>Employee:</span> <strong>${emp.name} (${emp.id})</strong></div>
        <div><span>Category:</span> <strong>${doc.category}</strong></div>
        <div><span>File Name:</span> <strong>${doc.fileName}</strong></div>
        <div><span>Uploaded:</span> <strong>${formatDate(doc.uploadedDate)}</strong></div>
      </div>
    `;

    document.getElementById("adminVerifRemarks").value = doc.status === "Verified" 
      ? "UIDAI / NDSL record matched. Document verified as authentic."
      : "Verified and authenticated by HR Compliance.";

    window.ui.openModal("adminVerifyDocModal");
  },

  submitVerificationDecision: function(e) {
    e.preventDefault();
    const doc = window.admin.targetVerifDoc;
    if (!doc) return;

    const decision = document.querySelector('input[name="verifDecision"]:checked').value;
    const remarks = document.getElementById("adminVerifRemarks").value.trim();

    doc.status = decision;
    doc.remarks = remarks;
    doc.verifiedBy = `${state.currentUser.name} (HR)`;

    state.timeline.unshift({
      title: `${doc.name} ${decision}`,
      desc: remarks,
      time: "Just now",
      type: decision === "Verified" ? "verified" : "rejected"
    });
    state.saveAll();

    window.ui.closeModal("adminVerifyDocModal");
    window.ui.showToast(`Document marked as ${decision.toUpperCase()}`, decision === "Verified" ? "success" : "warning");
    window.admin.renderVerificationQueue();
    window.admin.renderAdminDashboard();
  },

  // ===========================================================================
  // ADMIN APPOINTMENT LETTERS MANAGEMENT
  // ===========================================================================
  renderAppointmentLetters: function() {
    const tbody = document.getElementById("adminApptTableBody");
    tbody.innerHTML = state.appointmentLetters.map(l => {
      const emp = state.getEmployee(l.empId);
      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <img src="${emp.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
              <div>
                <strong>${emp.name}</strong>
                <div style="font-size: 0.72rem; color: #64748b;">${emp.id}</div>
              </div>
            </div>
          </td>
          <td>${l.department}</td>
          <td><span class="font-mono">${l.refNo}</span></td>
          <td>${formatDate(l.issueDate)}</td>
          <td class="font-mono text-primary font-bold">${formatINR(l.monthlyGross)}</td>
          <td><span class="badge-status badge-verified">${l.status}</span></td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View" onclick="window.ui.openLetterModal('appointment', '${l.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Print / Download" onclick="window.ui.downloadLetterDirect('appointment', '${l.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openUploadAppointmentModal: function() {
    const select = document.getElementById("alEmpSelect");
    select.innerHTML = state.employees.map(e => `
      <option value="${e.id}">${e.name} (${e.id}) - ${e.designation}</option>
    `).join("");

    window.admin.syncAppointmentEmpDetails(state.employees[0].id);
    document.getElementById("alIssueDate").value = new Date().toISOString().split("T")[0];
    window.ui.openModal("adminAppointmentModal");
  },

  syncAppointmentEmpDetails: function(empId) {
    const emp = state.getEmployee(empId);
    document.getElementById("alRefNo").value = `SS/HR/AL/2026/${emp.id.replace("EMP-", "")}`;
    document.getElementById("alGross").value = emp.monthlySalary;
  },

  saveAppointmentLetter: function(e) {
    e.preventDefault();
    const empId = document.getElementById("alEmpSelect").value;
    const refNo = document.getElementById("alRefNo").value.trim();
    const issueDate = document.getElementById("alIssueDate").value;
    const gross = Number(document.getElementById("alGross").value);
    const terms = document.getElementById("alTerms").value.trim();
    const emp = state.getEmployee(empId);

    const newLetter = {
      id: "AL-" + empId + "-" + Date.now(),
      empId: empId,
      refNo: refNo,
      title: "Official Letter of Employment & Appointment",
      issueDate: issueDate,
      uploadDate: new Date().toISOString().split("T")[0],
      joiningDate: emp.doj,
      designation: emp.designation,
      department: emp.department,
      status: "Active & Verified",
      monthlyGross: gross,
      annualCtc: gross * 12,
      probation: "6 Months",
      noticePeriod: "60 Days",
      issuedBy: `${state.currentUser.name} (HR)`,
      terms: terms
    };

    // Replace if existing for this employee or add
    const existingIdx = state.appointmentLetters.findIndex(l => l.empId === empId);
    if (existingIdx !== -1) {
      state.appointmentLetters[existingIdx] = newLetter;
    } else {
      state.appointmentLetters.push(newLetter);
    }

    state.timeline.unshift({
      title: `Appointment Letter Issued for ${emp.name}`,
      desc: `Ref: ${refNo} with Gross CTC: ${formatINR(gross)}/mo.`,
      time: "Just now",
      type: "letter"
    });
    state.saveAll();

    window.ui.closeModal("adminAppointmentModal");
    window.ui.showToast(`Appointment Letter issued for ${emp.name}`, "success");
    window.admin.renderAppointmentLetters();
  },

  // ===========================================================================
  // ADMIN SALARY MANAGEMENT
  // ===========================================================================
  renderSalaryManagement: function() {
    const tbody = document.getElementById("adminSalaryTableBody");
    tbody.innerHTML = state.salarySlips.map(s => {
      const emp = state.getEmployee(s.empId);
      const allowances = s.hra + s.special + s.conveyance;
      const deductions = s.pf + s.pt + s.tds;

      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <img src="${emp.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
              <div>
                <strong>${emp.name}</strong>
                <div style="font-size: 0.72rem; color: #64748b;">${emp.id}</div>
              </div>
            </div>
          </td>
          <td><strong>${s.month} ${s.year}</strong></td>
          <td class="font-mono">${formatINR(s.basic)}</td>
          <td class="font-mono">${formatINR(allowances)}</td>
          <td class="font-mono text-danger">-${formatINR(deductions)}</td>
          <td class="font-mono text-success font-bold">${formatINR(s.netPay)}</td>
          <td>${formatDate(s.uploadDate)}</td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View Payslip" onclick="window.salary.openSlipPreview('${s.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Print / Download" onclick="window.salary.downloadSlipDirect('${s.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openUploadSalaryModal: function() {
    const select = document.getElementById("asEmpSelect");
    select.innerHTML = state.employees.map(e => `
      <option value="${e.id}">${e.name} (${e.id}) - Current Gross: ${formatINR(e.monthlySalary)}</option>
    `).join("");

    window.admin.syncSalaryCalculations(state.employees[0].id);
    window.ui.openModal("adminSalaryModal");
  },

  syncSalaryCalculations: function(empId) {
    const emp = state.getEmployee(empId);
    const gross = emp.monthlySalary;

    // Indian payroll standard breakdown
    const basic = Math.round(gross * 0.50);
    const hra = Math.round(basic * 0.50);
    const conveyance = 1600;
    const special = Math.max(0, gross - (basic + hra + conveyance));

    document.getElementById("asBasic").value = basic;
    document.getElementById("asHra").value = hra;
    document.getElementById("asSpecial").value = special;
    document.getElementById("asConveyance").value = conveyance;
    document.getElementById("asPf").value = 1800;
    document.getElementById("asPt").value = 200;
    document.getElementById("asTds").value = Math.round(gross * 0.05);

    window.admin.recalculateNetPay();
  },

  recalculateNetPay: function() {
    const basic = Number(document.getElementById("asBasic").value) || 0;
    const hra = Number(document.getElementById("asHra").value) || 0;
    const special = Number(document.getElementById("asSpecial").value) || 0;
    const conveyance = Number(document.getElementById("asConveyance").value) || 0;

    const pf = Number(document.getElementById("asPf").value) || 0;
    const pt = Number(document.getElementById("asPt").value) || 0;
    const tds = Number(document.getElementById("asTds").value) || 0;

    const gross = basic + hra + special + conveyance;
    const deductions = pf + pt + tds;
    const net = Math.max(0, gross - deductions);

    document.getElementById("asNetPay").value = net;
  },

  saveSalarySlip: function(e) {
    e.preventDefault();
    const empId = document.getElementById("asEmpSelect").value;
    const month = document.getElementById("asMonth").value;
    const year = Number(document.getElementById("asYear").value);
    const emp = state.getEmployee(empId);

    const monthMap = {
      "January": "01", "February": "02", "March": "03", "April": "04",
      "May": "05", "June": "06", "July": "07", "August": "08",
      "September": "09", "October": "10", "November": "11", "December": "12"
    };

    const basic = Number(document.getElementById("asBasic").value);
    const hra = Number(document.getElementById("asHra").value);
    const special = Number(document.getElementById("asSpecial").value);
    const conveyance = Number(document.getElementById("asConveyance").value);
    const pf = Number(document.getElementById("asPf").value);
    const pt = Number(document.getElementById("asPt").value);
    const tds = Number(document.getElementById("asTds").value);
    const netPay = Number(document.getElementById("asNetPay").value);

    const newSlip = {
      id: `PAY-${year}-${monthMap[month]}-${empId.replace("EMP-", "")}`,
      empId: empId,
      month: month,
      monthNum: monthMap[month],
      year: year,
      payPeriod: `01 ${month.substring(0, 3)} ${year} - 30 ${month.substring(0, 3)} ${year}`,
      paymentDate: `30 ${month.substring(0, 3)} ${year}`,
      basic: basic,
      hra: hra,
      special: special,
      conveyance: conveyance,
      pf: pf,
      pt: pt,
      tds: tds,
      netPay: netPay,
      status: "Disbursed",
      refNo: `NEFT/SS/${year}${monthMap[month]}30/${empId.replace("EMP-", "")}`,
      uploadDate: new Date().toISOString().split("T")[0]
    };

    // Prepend slip
    state.salarySlips.unshift(newSlip);
    state.timeline.unshift({
      title: `${month} ${year} Salary Slip Published for ${emp.name}`,
      desc: `Net pay: ${formatINR(netPay)} credited via NEFT transfer.`,
      time: "Just now",
      type: "payroll"
    });
    state.saveAll();

    window.ui.closeModal("adminSalaryModal");
    window.ui.showToast(`Salary slip for ${emp.name} (${month} ${year}) published successfully.`, "success");
    window.admin.renderSalaryManagement();
  },

  // ===========================================================================
  // ADMIN INCREMENT LETTERS
  // ===========================================================================
  renderIncrementLetters: function() {
    const tbody = document.getElementById("adminIncrementTableBody");
    tbody.innerHTML = state.incrementLetters.map(l => {
      const emp = state.getEmployee(l.empId);
      return `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <img src="${emp.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
              <div>
                <strong>${emp.name}</strong>
                <div style="font-size: 0.72rem; color: #64748b;">${emp.id}</div>
              </div>
            </div>
          </td>
          <td><strong>${formatDate(l.effectiveDate)}</strong></td>
          <td class="font-mono">${formatINR(l.previousSalary)}</td>
          <td class="font-mono text-success font-bold">${formatINR(l.revisedSalary)}</td>
          <td><span class="badge-pill bg-green-subtle text-success">+${l.hikePercent}%</span></td>
          <td><span class="font-mono">${l.refNo}</span></td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View" onclick="window.ui.openLetterModal('increment', '${l.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Print / Download" onclick="window.ui.downloadLetterDirect('increment', '${l.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openIssueIncrementModal: function() {
    const select = document.getElementById("incEmpSelect");
    select.innerHTML = state.employees.map(e => `
      <option value="${e.id}">${e.name} (${e.id}) - Current: ${formatINR(e.monthlySalary)}</option>
    `).join("");

    window.admin.syncIncrementEmp(state.employees[0].id);
    document.getElementById("incEffectiveDate").value = new Date().toISOString().split("T")[0];
    window.ui.openModal("adminIncrementModal");
  },

  syncIncrementEmp: function(empId) {
    const emp = state.getEmployee(empId);
    document.getElementById("incCurrentSalary").value = emp.monthlySalary;
    document.getElementById("incRevisedSalary").value = Math.round(emp.monthlySalary * 1.15);
    window.admin.calcIncrementMetrics();
  },

  calcIncrementMetrics: function() {
    const current = Number(document.getElementById("incCurrentSalary").value) || 0;
    const revised = Number(document.getElementById("incRevisedSalary").value) || 0;

    const diff = revised - current;
    const pct = current > 0 ? ((diff / current) * 100).toFixed(2) : 0;

    document.getElementById("incAmountDiff").value = `+ ${formatINR(diff)}`;
    document.getElementById("incPercentDiff").value = `${pct}%`;
  },

  saveIncrementLetter: function(e) {
    e.preventDefault();
    const empId = document.getElementById("incEmpSelect").value;
    const emp = state.getEmployee(empId);
    const currentSalary = Number(document.getElementById("incCurrentSalary").value);
    const revisedSalary = Number(document.getElementById("incRevisedSalary").value);
    const effectiveDate = document.getElementById("incEffectiveDate").value;
    const rating = document.getElementById("incRating").value;
    const remarks = document.getElementById("incRemarks").value.trim();

    if (revisedSalary <= currentSalary) {
      window.ui.showToast("Revised salary must be greater than current salary.", "error");
      return;
    }

    const diff = revisedSalary - currentSalary;
    const pct = ((diff / currentSalary) * 100).toFixed(2);
    const refNo = `SS/HR/INC/2026/${Math.floor(10 + Math.random() * 90)}`;

    const newLetter = {
      id: "INC-" + empId + "-" + Date.now(),
      empId: empId,
      refNo: refNo,
      title: "Annual Appraisal & Compensation Revision",
      effectiveDate: effectiveDate,
      issueDate: new Date().toISOString().split("T")[0],
      designation: emp.designation,
      previousSalary: currentSalary,
      revisedSalary: revisedSalary,
      hikeAmount: diff,
      hikePercent: pct,
      rating: rating,
      remarks: remarks || "Promoted and salary enhanced for commendable dedication.",
      issuedBy: `${state.currentUser.name} (HR)`
    };

    // Update employee master CTC
    emp.monthlySalary = revisedSalary;
    state.incrementLetters.unshift(newLetter);
    state.timeline.unshift({
      title: `Salary Hike Issued for ${emp.name}`,
      desc: `Revised to ${formatINR(revisedSalary)}/mo (+${pct}% hike).`,
      time: "Just now",
      type: "letter"
    });
    state.saveAll();

    window.ui.closeModal("adminIncrementModal");
    window.ui.showToast(`Increment letter issued for ${emp.name} (+${pct}% hike)`, "success");
    window.admin.renderIncrementLetters();
    window.admin.renderEmployeeDirectory();
  },

  // ===========================================================================
  // ADMIN EXPERIENCE LETTERS
  // ===========================================================================
  renderExperienceLetters: function() {
    const tbody = document.getElementById("adminExperienceTableBody");
    tbody.innerHTML = state.experienceLetters.map(l => {
      return `
        <tr>
          <td><strong>${l.empName}</strong> (${l.empId})</td>
          <td>${l.designation}</td>
          <td>${formatDate(l.startDate)}</td>
          <td>${formatDate(l.relievingDate)}</td>
          <td>${formatDate(l.issueDate)}</td>
          <td><span class="badge-status badge-verified">${l.status}</span></td>
          <td class="text-right">
            <button type="button" class="btn-action-icon" title="View" onclick="window.ui.openLetterModal('experience', '${l.id}')">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-action-icon" title="Print / Download" onclick="window.ui.downloadLetterDirect('experience', '${l.id}')">
              <i class="fa-solid fa-download"></i>
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  openIssueExperienceModal: function() {
    const select = document.getElementById("expEmpSelect");
    select.innerHTML = state.employees.map(e => `
      <option value="${e.id}">${e.name} (${e.id}) - ${e.status}</option>
    `).join("");

    window.admin.syncExperienceEmp(state.employees[0].id);
    document.getElementById("expLastDate").value = new Date().toISOString().split("T")[0];
    window.ui.openModal("adminExperienceModal");
  },

  syncExperienceEmp: function(empId) {
    const emp = state.getEmployee(empId);
    document.getElementById("expDoj").value = emp.doj;
    document.getElementById("expDesignation").value = emp.designation;
  },

  saveExperienceLetter: function(e) {
    e.preventDefault();
    const empId = document.getElementById("expEmpSelect").value;
    const emp = state.getEmployee(empId);
    const doj = document.getElementById("expDoj").value;
    const lastDate = document.getElementById("expLastDate").value;
    const designation = document.getElementById("expDesignation").value.trim();
    const remarks = document.getElementById("expRemarks").value.trim();

    const refNo = `SS/HR/EXP/2026/${empId.replace("EMP-", "")}`;
    const newLetter = {
      id: "EXP-" + empId + "-" + Date.now(),
      empId: empId,
      refNo: refNo,
      title: "Service Experience & Relieving Certificate",
      empName: emp.name,
      designation: designation,
      department: emp.department,
      startDate: doj,
      relievingDate: lastDate,
      issueDate: new Date().toISOString().split("T")[0],
      status: "Issued",
      conduct: "Exemplary",
      remarks: remarks || "Relieved upon mutual agreement with all accounts reconciled."
    };

    // Mark employee inactive / relieved
    emp.status = "Inactive";
    state.experienceLetters.unshift(newLetter);
    state.timeline.unshift({
      title: `Experience & Relieving Certificate Issued for ${emp.name}`,
      desc: `Ref: ${refNo}. Tenure: ${formatDate(doj)} to ${formatDate(lastDate)}.`,
      time: "Just now",
      type: "letter"
    });
    state.saveAll();

    window.ui.closeModal("adminExperienceModal");
    window.ui.showToast(`Experience certificate generated for ${emp.name}`, "success");
    window.admin.renderExperienceLetters();
    window.admin.renderEmployeeDirectory();
  },

  // ===========================================================================
  // ADMIN ANNOUNCEMENTS
  // ===========================================================================
  openNewAnnouncementModal: function() {
    document.getElementById("annTitle").value = "";
    document.getElementById("annContent").value = "";
    window.ui.openModal("adminAnnouncementModal");
  },

  saveAnnouncement: function(e) {
    e.preventDefault();
    const title = document.getElementById("annTitle").value.trim();
    const cat = document.getElementById("annCategory").value;
    const content = document.getElementById("annContent").value.trim();

    const newAnn = {
      id: "ANN-" + Date.now(),
      title: title,
      category: cat,
      date: new Date().toISOString().split("T")[0],
      author: `${state.currentUser.name} (HR)`,
      content: content,
      isUrgent: cat === "Appraisal" || cat === "Policy"
    };

    state.announcements.unshift(newAnn);
    state.notifications.unshift({
      id: "NTF-" + Date.now(),
      title: title,
      desc: content.substring(0, 90) + "...",
      time: "Just now",
      read: false,
      icon: "fa-bullhorn text-primary"
    });
    state.saveAll();

    window.ui.closeModal("adminAnnouncementModal");
    window.ui.showToast("HR Announcement broadcast to all employees.", "success");
    window.ui.renderAnnouncements();
    window.ui.renderNotifications();
  },

  // ===========================================================================
  // ADMIN AUDIT LOGS
  // ===========================================================================
  renderAuditReports: function() {
    const timeline = document.getElementById("adminAuditTimeline");
    const auditLogs = [
      { title: "Salary Slip Disbursed (September 2026)", desc: "Triggered bulk payroll NEFT advice for 48 active staff.", time: "30 Sep 2026 17:30" },
      { title: "UIDAI Aadhaar Verification Complete", desc: "EMP-1042 credential matched against statutory API.", time: "16 Jan 2023 10:20" },
      { title: "Role Authorization Elevated", desc: "Priya Patel granted Super-Admin HR credentials.", time: "01 Jun 2022 09:00" },
      { title: "Access Log - TLS Session Authenticated", desc: "User EMP-1042 logged in via secure IP 103.21.200.4", time: "Today 09:15" }
    ];

    timeline.innerHTML = auditLogs.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot" style="background: #2563eb;"></div>
        <strong>${item.title}</strong>
        <p>${item.desc}</p>
        <span class="timeline-time"><i class="fa-solid fa-shield"></i> ${item.time}</span>
      </div>
    `).join("");
  }
};

// =============================================================================
// 9. DOM INITIALIZATION ON LOAD
// =============================================================================

document.addEventListener("DOMContentLoaded", function() {
  // Pre-fill employee credentials on login screen
  window.auth.fillCredentials("employee");

  // Global close on backdrop clicks
  window.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal-backdrop")) {
      e.target.classList.add("hidden");
    }
    // Close topbar menus
    if (!e.target.closest(".notification-dropdown")) {
      document.getElementById("notifMenu")?.classList.add("hidden");
    }
    if (!e.target.closest(".user-dropdown")) {
      document.getElementById("userDropdownMenu")?.classList.add("hidden");
    }
    if (!e.target.closest(".search-box")) {
      document.getElementById("globalSearchResults")?.classList.add("hidden");
    }
  });

  // ESC key closes modals
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.add("hidden"));
      document.getElementById("notifMenu")?.classList.add("hidden");
      document.getElementById("userDropdownMenu")?.classList.add("hidden");
      document.getElementById("globalSearchResults")?.classList.add("hidden");
    }
  });
});

