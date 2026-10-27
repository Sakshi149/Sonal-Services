# Sonal Services - Enterprise Employee & HR Portal

A modern, attractive, secure, and fully responsive Employee and HR Management Portal for **Sonal Services Pvt. Ltd.** built with semantic **HTML5**, **CSS3 (Custom Properties & Flexbox/Grid)**, and vanilla **JavaScript**.

---

## 🌟 Key Features Overview

### 1. Modern Corporate UI / UX Design
- **Theme Palette**: Deep Navy Blue (`#0f172a`, `#1e293b`), Royal Blue (`#1e40af`, `#2563eb`), Crisp White, and subtle light slate backgrounds (`#f8fafc`).
- **Typography**: Google Fonts Inter with high readability and font-weight hierarchy.
- **Icons**: Font Awesome 6.5.1 vector iconography.
- **Micro-Interactions**: Soft elevation shadows, card transitions, responsive drawer navigation, and feedback toasts.
- **Accessibility**: Keyboard navigable, high color contrast, semantic form labels, and focus rings.

### 2. Dual-Role Architecture (Employee vs. HR/Admin)
- **Role-Based Views**: Separate navigation trees, action buttons, and permission scopes for Employees and HR Administrators.
- **1-Click Demo Switcher**: Located in the top navigation bar and login screen to effortlessly toggle between Employee perspective and HR Administrator console during testing.

### 3. Employee Portal Capabilities
- **Summary Dashboard**: KPI metrics (Total Documents, Salary Slips, Official Letters, Pending Actions), quick access tiles, recent uploads, and audit activity timeline.
- **My Profile & KYC**: Personal details editable by the employee, while sensitive organizational data (CTC, designation, joining date, reporting manager) is locked and managed exclusively by HR.
- **Document Vault**: Category-based management (Identity, Education, Bank, Experience, Photos) with drag-and-drop upload, size/type verification, status badges (*Verified*, *Pending*, *Rejected*), and interactive file previewers.
- **Monthly Salary Slips**: Financial year and month filters, detailed pay slips in Indian Currency (₹), gross and net pay breakdown, and 1-click **Print / Save as PDF** on official company payslip letterhead.
- **Official Letters**: Dedicated modules for **Appointment Letters**, **Annual Increment Letters**, and **Experience / Relieving Certificates** with letterhead preview and export.
- **Announcements**: Company-wide broadcasts, holiday schedules, and appraisal timeline notices.

### 4. Admin / HR Management Console
- **HR Command Center**: Live headcount metrics, document verification queue, and quick-action launchers.
- **Employee Directory**: Real-time search by name, ID, or department; status filters (*Active*, *On Notice*, *Inactive*); document compliance progress; add/edit employee modals; and 1-click deactivation.
- **Verification Desk**: Centralized queue to audit submitted employee documents and either Approve or Reject with comments.
- **Appointment Letter Issuance**: Generate or upload appointment letters with agreed CTC, probation terms, and reference tracking.
- **Payroll & Salary Management**: Input earnings and deductions (Basic, HRA, Conveyance, Special Allowance, PF, PT, TDS) with automatic net pay calculation and publication.
- **Increment & Appraisal Module**: Select an employee, view current CTC, input revised salary, automatically calculate hike amount and percentage, set performance ratings, and issue official letters.
- **Experience Letter Issuance**: Generate relieving and service certificates with conduct evaluations for transitioned staff.
- **Audit Reports**: Visual department-level compliance metrics and real-time security audit trails.

---

## 📁 Project File Structure

```
d:\Sakshi\Sonal Services/
├── index.html       # Complete semantic HTML5 markup, views, and modal dialogs
├── style.css        # Responsive stylesheet, CSS tokens, animations, and @media print
├── script.js        # Data store, state management, role controller, and interaction logic
└── README.md        # Documentation, setup guide, API and database architecture
```

---

## 🚀 How to Run the Portal Locally

You can run this portal directly in any modern web browser without needing heavy build tools.

### Option A: Direct Browser Opening
1. Navigate to the project directory: `d:\Sakshi\Sonal Services\`
2. Double click `index.html` or right-click and select **Open with Google Chrome / Microsoft Edge / Firefox**.

### Option B: Local Development Server (Recommended)
Using Python:
```bash
# In PowerShell or Terminal:
cd "d:\Sakshi\Sonal Services"
python -m http.server 8080
```
Then visit: `http://localhost:8080` in your web browser.

Using Node.js (`npx serve` or `live-server`):
```bash
npx serve .
```

---

## 🔑 Demo Login Credentials

The login page contains a **Quick Demo Access** switcher button above the credentials form:

| Role | Username / Identifier | Password | Access Scope |
| :--- | :--- | :--- | :--- |
| **Employee** (Default) | `EMP-1042` or `rahul.sharma@sonalservices.com` | `password123` | View own documents, salary slips, profile, and letters |
| **Admin / HR** | `EMP-1035` or `priya.patel@sonalservices.com` | `admin` | Full HR command center, employee management, verification & issuance |

> **Tip:** You can also click the **"Switch: HR Admin / Employee"** pill in the top navbar at any time while logged in to test both experiences instantly.

---

## 🖨️ PDF Generation & Official Letterheads

All official documents (Appointment Letters, Increment Letters, Experience Certificates, and Salary Statements) are formatted with **Sonal Services official corporate letterheads**, CIN/GSTIN details, authorized signatory seals, and layout formatting.
- Clicking **"Download Official PDF"** or **"Print / Save as PDF"** triggers the browser's native print engine.
- The included `@media print` CSS rules automatically strip sidebars, navbars, and buttons, producing an executive-grade PDF document ready for filing or physical signature.

---

## 🛡️ Production-Ready Backend & Architecture Blueprint

For production deployment with sensitive employee data (Aadhaar numbers, PAN, bank accounts, and payroll slips), implement the following backend architecture:

### 1. Database Schema (PostgreSQL / MySQL / Firestore)

#### Table: `employees`
- `id` (VARCHAR(20), Primary Key) e.g. `EMP-1042`
- `email` (VARCHAR(150), Unique, Indexed)
- `password_hash` (VARCHAR(255), Argon2id or bcrypt)
- `role` (ENUM('employee', 'hr_admin', 'payroll_admin', 'super_admin'))
- `full_name` (VARCHAR(100))
- `department` (VARCHAR(60))
- `designation` (VARCHAR(100))
- `date_of_joining` (DATE)
- `employment_status` (ENUM('Active', 'On Notice', 'Terminated', 'Relieved'))
- `reporting_manager_id` (VARCHAR(20), Foreign Key referencing `employees.id`)
- `current_monthly_gross` (DECIMAL(12, 2))
- `created_at`, `updated_at` (TIMESTAMP)

#### Table: `employee_personal_details`
- `employee_id` (VARCHAR(20), Primary Key, Foreign Key)
- `date_of_birth` (DATE)
- `gender` (VARCHAR(20))
- `contact_number` (VARCHAR(20))
- `current_address` (TEXT)
- `permanent_address` (TEXT)
- `emergency_contact_name` (VARCHAR(100))
- `emergency_contact_phone` (VARCHAR(20))
- `emergency_relationship` (VARCHAR(50))
- `bank_account_holder` (VARCHAR(100))
- `bank_name` (VARCHAR(100))
- `bank_account_number_encrypted` (BYTEA / Encrypted AES-256)
- `bank_ifsc_code` (VARCHAR(20))
- `aadhaar_last_four` (CHAR(4))
- `aadhaar_vault_token` (VARCHAR(255))
- `pan_number` (VARCHAR(10))

#### Table: `documents`
- `id` (UUID, Primary Key)
- `employee_id` (VARCHAR(20), Foreign Key, Indexed)
- `category` (ENUM('Identity', 'Education', 'Financial', 'Previous Employment', 'Photograph', 'Other'))
- `document_name` (VARCHAR(150))
- `storage_path` (VARCHAR(500)) — Secure private Cloud Storage / S3 URI
- `file_hash` (VARCHAR(64)) — SHA-256 checksum for tamper-proofing
- `status` (ENUM('Pending', 'Verified', 'Rejected'))
- `verified_by` (VARCHAR(20), Foreign Key to `employees.id`)
- `verification_remarks` (TEXT)
- `uploaded_at` (TIMESTAMP)

#### Table: `salary_slips`
- `id` (UUID, Primary Key)
- `employee_id` (VARCHAR(20), Foreign Key, Indexed)
- `salary_month` (TINYINT, 1-12)
- `salary_year` (SMALLINT)
- `basic_pay` (DECIMAL(10, 2))
- `hra` (DECIMAL(10, 2))
- `special_allowance` (DECIMAL(10, 2))
- `conveyance` (DECIMAL(10, 2))
- `provident_fund` (DECIMAL(10, 2))
- `professional_tax` (DECIMAL(10, 2))
- `tds` (DECIMAL(10, 2))
- `net_salary` (DECIMAL(10, 2))
- `disbursement_ref_no` (VARCHAR(60))
- `published_at` (TIMESTAMP)
- Unique constraint on (`employee_id`, `salary_year`, `salary_month`)

#### Table: `official_letters`
- `id` (UUID, Primary Key)
- `employee_id` (VARCHAR(20), Foreign Key, Indexed)
- `letter_type` (ENUM('Appointment', 'Increment', 'Experience', 'Relieving', 'Promotion'))
- `reference_number` (VARCHAR(50), Unique)
- `metadata_json` (JSONB) — terms, previous salary, revised salary, hike %, etc.
- `pdf_storage_path` (VARCHAR(500))
- `issued_by` (VARCHAR(20), Foreign Key)
- `issued_at` (TIMESTAMP)

#### Table: `audit_logs`
- `id` (BIGINT, Primary Key Auto-Increment)
- `actor_id` (VARCHAR(20))
- `action` (VARCHAR(100)) e.g. `SALARY_SLIP_VIEWED`, `DOCUMENT_VERIFIED`, `EMPLOYEE_UPDATED`
- `resource_id` (VARCHAR(100))
- `ip_address` (VARCHAR(45))
- `user_agent` (VARCHAR(255))
- `timestamp` (TIMESTAMP)

---

### 2. RESTful API Endpoints Specifications

#### Authentication & Session
- `POST /api/v1/auth/login` — Authenticates credentials, issues HTTP-only Secure JWT Cookie (`access_token` & `refresh_token`).
- `POST /api/v1/auth/logout` — Revokes refresh token in Redis and clears cookies.
- `POST /api/v1/auth/forgot-password` — Generates rate-limited HMAC email token.

#### Employee Self-Service
- `GET /api/v1/me/profile` — Retrieves the authenticated employee's profile.
- `PATCH /api/v1/me/profile` — Updates permitted personal fields (validates payload schema).
- `GET /api/v1/me/documents` — Lists authenticated user's uploaded documents.
- `POST /api/v1/me/documents` — Multipart upload with file-type scanning and virus checking.
- `GET /api/v1/me/salary-slips?year=2026&month=09` — Fetches salary slips.
- `GET /api/v1/me/letters/appointment` — Returns appointment letter and signed S3 URL.
- `GET /api/v1/me/letters/increment` — Returns appraisal history.

#### Admin & HR Management (Protected by Role Middleware: `requireRole(['admin', 'hr'])`)
- `GET /api/v1/admin/employees` — Search, filter, and paginate employee records.
- `POST /api/v1/admin/employees` — Creates employee master record and credentials.
- `PATCH /api/v1/admin/employees/:id` — Edits job designation, salary, department, or status.
- `GET /api/v1/admin/documents/pending` — Verification queue.
- `POST /api/v1/admin/documents/:id/verify` — Approves or rejects submitted document with audit log.
- `POST /api/v1/admin/salary-slips` — Batch or single generation of pay slips.
- `POST /api/v1/admin/letters/increment` — Issues salary hike letter and updates compensation.
- `POST /api/v1/admin/letters/experience` — Generates relieving letter and marks status inactive.

---

### 3. Essential Security & Compliance Rules
1. **Never Trust the Client**: Frontend locks and button hiding are strictly for UX. Server-side middleware must enforce role checks (`JWT` claims + DB verification).
2. **Document Protection**: All identity files (Aadhaar, PAN, Passports) must be stored in private buckets without public read access. Downloads must only be served via short-lived signed URLs (e.g. 5-minute expiration) generated after verifying employee ownership.
3. **Data Masking**: Statutory IDs must be masked in transit and in logs (e.g., `XXXX-XXXX-1234`).
4. **Audit Trail**: Every document download or salary view must record an immutable audit row (`audit_logs`) for compliance with Indian IT Act and ISO 27001 data protection guidelines.

---

&copy; 2026 **Sonal Services Pvt. Ltd.** All rights reserved.

