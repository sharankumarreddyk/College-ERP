import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

// Import models
import Admin from "./models/admin.js";
import Faculty from "./models/faculty.js";
import Student from "./models/student.js";
import Department from "./models/department.js";
import Subject from "./models/subject.js";
import Notice from "./models/notice.js";
import Test from "./models/test.js";
import Marks from "./models/marks.js";
import Attendance from "./models/attendance.js";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Clear existing data
const clearData = async () => {
  try {
    await Admin.deleteMany({});
    await Faculty.deleteMany({});
    await Student.deleteMany({});
    await Department.deleteMany({});
    await Subject.deleteMany({});
    await Notice.deleteMany({});
    await Test.deleteMany({});
    await Marks.deleteMany({});
    await Attendance.deleteMany({});
    console.log("Cleared existing data");
  } catch (error) {
    console.error("Error clearing data:", error);
  }
};

// Seed departments
const seedDepartments = async () => {
  try {
    const departments = [
      { department: "Computer Science", departmentCode: "CS01" },
      { department: "Information Technology", departmentCode: "IT02" },
      { department: "Electronics", departmentCode: "EC03" },
      { department: "Mechanical", departmentCode: "ME04" },
      { department: "Civil", departmentCode: "CE05" },
      { department: "Electrical Engineering", departmentCode: "EE06" },
      { department: "Chemical Engineering", departmentCode: "CH07" },
      { department: "Biotechnology", departmentCode: "BT08" },
    ];

    await Department.insertMany(departments);
    console.log("Departments seeded successfully");
    return departments;
  } catch (error) {
    console.error("Error seeding departments:", error);
  }
};

// Seed admin
const seedAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash("12341234", 10);
    
    const admin = new Admin({
      name: "Sharan Kumar Reddy K",
      email: "sharankumarreddyk@gmail.com",
      password: hashedPassword,
      username: "sharankumarreddyk@gmail.com",
      department: "Computer Science",
      dob: "01-01-1990",
      joiningYear: "2020",
      contactNumber: 9876543210,
      passwordUpdated: true,
      avatar: "",
    });

    await admin.save();
    console.log("Admin seeded successfully");
    return admin;
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
};

// Seed faculty
const seedFaculty = async () => {
  try {
    const hashedPassword = await bcrypt.hash("12341234", 10);
    
    const facultyMembers = [
      {
        name: "Dr. Faculty Member",
        email: "faculty@gmail.com",
        password: hashedPassword,
        username: "faculty@gmail.com",
        gender: "Male",
        designation: "Assistant Professor",
        department: "Computer Science",
        contactNumber: 9876543211,
        dob: "15-05-1985",
        joiningYear: 2018,
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Dr. Priya Sharma",
        email: "priya.sharma@college.edu",
        password: hashedPassword,
        username: "priya.sharma@college.edu",
        gender: "Female",
        designation: "Associate Professor",
        department: "Computer Science",
        contactNumber: 9876543214,
        dob: "12-03-1980",
        joiningYear: 2015,
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Prof. Rajesh Kumar",
        email: "rajesh.kumar@college.edu",
        password: hashedPassword,
        username: "rajesh.kumar@college.edu",
        gender: "Male",
        designation: "Professor",
        department: "Information Technology",
        contactNumber: 9876543215,
        dob: "25-08-1975",
        joiningYear: 2010,
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Dr. Anita Desai",
        email: "anita.desai@college.edu",
        password: hashedPassword,
        username: "anita.desai@college.edu",
        gender: "Female",
        designation: "Assistant Professor",
        department: "Electronics",
        contactNumber: 9876543216,
        dob: "18-11-1988",
        joiningYear: 2020,
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Prof. Suresh Patel",
        email: "suresh.patel@college.edu",
        password: hashedPassword,
        username: "suresh.patel@college.edu",
        gender: "Male",
        designation: "Professor",
        department: "Mechanical",
        contactNumber: 9876543217,
        dob: "05-07-1970",
        joiningYear: 2008,
        passwordUpdated: true,
        avatar: "",
      },
    ];

    await Faculty.insertMany(facultyMembers);
    console.log("Faculty seeded successfully");
    return facultyMembers;
  } catch (error) {
    console.error("Error seeding faculty:", error);
  }
};

// Seed subjects
const seedSubjects = async () => {
  try {
    const subjects = [
      // Computer Science Subjects
      {
        subjectName: "Programming Fundamentals",
        subjectCode: "CS100",
        department: "Computer Science",
        totalLectures: 60,
        year: "1",
      },
      {
        subjectName: "Data Structures and Algorithms",
        subjectCode: "CS101",
        department: "Computer Science",
        totalLectures: 60,
        year: "2",
      },
      {
        subjectName: "Database Management Systems",
        subjectCode: "CS102",
        department: "Computer Science",
        totalLectures: 50,
        year: "3",
      },
      {
        subjectName: "Web Development",
        subjectCode: "CS103",
        department: "Computer Science",
        totalLectures: 45,
        year: "3",
      },
      {
        subjectName: "Object Oriented Programming",
        subjectCode: "CS104",
        department: "Computer Science",
        totalLectures: 55,
        year: "2",
      },
      {
        subjectName: "Computer Networks",
        subjectCode: "CS105",
        department: "Computer Science",
        totalLectures: 40,
        year: "4",
      },
      {
        subjectName: "Software Engineering",
        subjectCode: "CS106",
        department: "Computer Science",
        totalLectures: 45,
        year: "4",
      },
      // Information Technology Subjects
      {
        subjectName: "Information Systems",
        subjectCode: "IT101",
        department: "Information Technology",
        totalLectures: 50,
        year: "2",
      },
      {
        subjectName: "Network Security",
        subjectCode: "IT102",
        department: "Information Technology",
        totalLectures: 45,
        year: "3",
      },
      {
        subjectName: "Cloud Computing",
        subjectCode: "IT103",
        department: "Information Technology",
        totalLectures: 40,
        year: "4",
      },
      // Electronics Subjects
      {
        subjectName: "Digital Electronics",
        subjectCode: "EC101",
        department: "Electronics",
        totalLectures: 60,
        year: "2",
      },
      {
        subjectName: "Microprocessors",
        subjectCode: "EC102",
        department: "Electronics",
        totalLectures: 55,
        year: "3",
      },
      {
        subjectName: "VLSI Design",
        subjectCode: "EC103",
        department: "Electronics",
        totalLectures: 50,
        year: "4",
      },
      // Mechanical Subjects
      {
        subjectName: "Thermodynamics",
        subjectCode: "ME101",
        department: "Mechanical",
        totalLectures: 60,
        year: "2",
      },
      {
        subjectName: "Fluid Mechanics",
        subjectCode: "ME102",
        department: "Mechanical",
        totalLectures: 55,
        year: "3",
      },
      {
        subjectName: "Machine Design",
        subjectCode: "ME103",
        department: "Mechanical",
        totalLectures: 50,
        year: "4",
      },
    ];

    const savedSubjects = await Subject.insertMany(subjects);
    console.log("Subjects seeded successfully");
    return savedSubjects;
  } catch (error) {
    console.error("Error seeding subjects:", error);
  }
};

// Seed student
const seedStudents = async (subjects) => {
  try {
    const hashedPassword = await bcrypt.hash("12341234", 10);
    
    const students = [
      {
        name: "Student User",
        email: "student@gmail.com",
        password: hashedPassword,
        username: "student@gmail.com",
        year: 3,
        subjects: subjects.filter(s => s.year === "3" && s.department === "Computer Science").map(s => s._id),
        gender: "Male",
        fatherName: "Father Name",
        motherName: "Mother Name",
        department: "Computer Science",
        section: "A",
        batch: "2023-2027",
        contactNumber: 9876543212,
        fatherContactNumber: 9876543213,
        dob: "10-08-2003",
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Aditi Sharma",
        email: "aditi.sharma@student.edu",
        password: hashedPassword,
        username: "aditi.sharma@student.edu",
        year: 3,
        subjects: subjects.filter(s => s.year === "3" && s.department === "Computer Science").map(s => s._id),
        gender: "Female",
        fatherName: "Ramesh Sharma",
        motherName: "Sunita Sharma",
        department: "Computer Science",
        section: "A",
        batch: "2023-2027",
        contactNumber: 9876543218,
        fatherContactNumber: 9876543219,
        dob: "15-03-2004",
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Rohan Gupta",
        email: "rohan.gupta@student.edu",
        password: hashedPassword,
        username: "rohan.gupta@student.edu",
        year: 2,
        subjects: subjects.filter(s => s.year === "2" && s.department === "Computer Science").map(s => s._id),
        gender: "Male",
        fatherName: "Vikash Gupta",
        motherName: "Priya Gupta",
        department: "Computer Science",
        section: "B",
        batch: "2024-2028",
        contactNumber: 9876543220,
        fatherContactNumber: 9876543221,
        dob: "22-07-2005",
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Kavya Patel",
        email: "kavya.patel@student.edu",
        password: hashedPassword,
        username: "kavya.patel@student.edu",
        year: 3,
        subjects: subjects.filter(s => s.year === "3" && s.department === "Information Technology").map(s => s._id),
        gender: "Female",
        fatherName: "Nitin Patel",
        motherName: "Meera Patel",
        department: "Information Technology",
        section: "A",
        batch: "2023-2027",
        contactNumber: 9876543222,
        fatherContactNumber: 9876543223,
        dob: "08-12-2003",
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Arjun Singh",
        email: "arjun.singh@student.edu",
        password: hashedPassword,
        username: "arjun.singh@student.edu",
        year: 2,
        subjects: subjects.filter(s => s.year === "2" && s.department === "Electronics").map(s => s._id),
        gender: "Male",
        fatherName: "Rajesh Singh",
        motherName: "Kavita Singh",
        department: "Electronics",
        section: "A",
        batch: "2024-2028",
        contactNumber: 9876543224,
        fatherContactNumber: 9876543225,
        dob: "30-09-2005",
        passwordUpdated: true,
        avatar: "",
      },
      {
        name: "Sneha Reddy",
        email: "sneha.reddy@student.edu",
        password: hashedPassword,
        username: "sneha.reddy@student.edu",
        year: 3,
        subjects: subjects.filter(s => s.year === "3" && s.department === "Mechanical").map(s => s._id),
        gender: "Female",
        fatherName: "Krishna Reddy",
        motherName: "Lakshmi Reddy",
        department: "Mechanical",
        section: "A",
        batch: "2023-2027",
        contactNumber: 9876543226,
        fatherContactNumber: 9876543227,
        dob: "14-06-2004",
        passwordUpdated: true,
        avatar: "",
      },
    ];

    await Student.insertMany(students);
    console.log("Students seeded successfully");
    return students;
  } catch (error) {
    console.error("Error seeding students:", error);
  }
};

// Seed notices
const seedNotices = async () => {
  try {
    const notices = [
      {
        topic: "Welcome to New Academic Year",
        date: "2025-01-01",
        content: "Welcome all students to the new academic year 2025. Classes will commence from January 15th, 2025. Please ensure you have completed all registration formalities.",
        from: "Administration",
        noticeFor: "All Students",
      },
      {
        topic: "Mid-term Examination Schedule",
        date: "2025-03-01",
        content: "Mid-term examinations will be conducted from March 15th to March 25th, 2025. Please check your respective department notice boards for detailed schedule. Hall tickets will be available from March 10th.",
        from: "Examination Department",
        noticeFor: "All Students",
      },
      {
        topic: "Faculty Meeting",
        date: "2025-02-15",
        content: "All faculty members are requested to attend the monthly faculty meeting on February 20th, 2025 at 10:00 AM in the conference hall. Agenda includes curriculum updates and assessment strategies.",
        from: "Administration",
        noticeFor: "Faculty",
      },
      {
        topic: "Technical Symposium - TechFest 2025",
        date: "2025-04-01",
        content: "Our annual technical symposium TechFest 2025 will be held on April 15-16, 2025. Students can participate in coding competitions, project exhibitions, and technical paper presentations. Registration deadline: April 10th.",
        from: "Student Activities Committee",
        noticeFor: "All Students",
      },
      {
        topic: "Library Extended Hours",
        date: "2025-03-10",
        content: "Due to upcoming examinations, the library will remain open until 10:00 PM from March 15th to April 30th, 2025. Students are requested to maintain silence and follow library rules.",
        from: "Library Committee",
        noticeFor: "All Students",
      },
      {
        topic: "Industrial Visit - Final Year Students",
        date: "2025-05-01",
        content: "Industrial visit for final year students has been scheduled for May 20-22, 2025. Companies to be visited include major tech firms and manufacturing units. Registration fee: ₹2500 per student.",
        from: "Training & Placement",
        noticeFor: "Final Year Students",
      },
      {
        topic: "Workshop on AI and Machine Learning",
        date: "2025-03-25",
        content: "A 3-day workshop on Artificial Intelligence and Machine Learning will be conducted from April 1-3, 2025. Industry experts will be conducting sessions. Limited seats available. Registration open for CS and IT students.",
        from: "Computer Science Department",
        noticeFor: "CS and IT Students",
      },
      {
        topic: "Sports Meet 2025",
        date: "2025-02-20",
        content: "Annual Inter-departmental Sports Meet will be held from March 1-5, 2025. Events include cricket, football, basketball, athletics, and indoor games. Students interested in participating should register with their respective HODs.",
        from: "Sports Committee",
        noticeFor: "All Students",
      },
    ];

    await Notice.insertMany(notices);
    console.log("Notices seeded successfully");
  } catch (error) {
    console.error("Error seeding notices:", error);
  }
};

// Seed tests
const seedTests = async (subjects) => {
  try {
    const tests = [
      // Computer Science Tests
      {
        test: "Mid-term Exam",
        subjectCode: "CS102",
        department: "Computer Science",
        totalMarks: 100,
        year: "3",
        section: "A",
        date: "2025-03-20",
      },
      {
        test: "Quiz 1",
        subjectCode: "CS103",
        department: "Computer Science",
        totalMarks: 50,
        year: "3",
        section: "A",
        date: "2025-02-15",
      },
      {
        test: "Assignment 1",
        subjectCode: "CS102",
        department: "Computer Science",
        totalMarks: 25,
        year: "3",
        section: "A",
        date: "2025-02-10",
      },
      {
        test: "Final Exam",
        subjectCode: "CS101",
        department: "Computer Science",
        totalMarks: 100,
        year: "2",
        section: "A",
        date: "2025-05-15",
      },
      {
        test: "Unit Test 1",
        subjectCode: "CS104",
        department: "Computer Science",
        totalMarks: 30,
        year: "2",
        section: "B",
        date: "2025-02-25",
      },
      // Information Technology Tests
      {
        test: "Mid-term Exam",
        subjectCode: "IT102",
        department: "Information Technology",
        totalMarks: 100,
        year: "3",
        section: "A",
        date: "2025-03-22",
      },
      {
        test: "Practical Exam",
        subjectCode: "IT101",
        department: "Information Technology",
        totalMarks: 50,
        year: "2",
        section: "A",
        date: "2025-04-10",
      },
      // Electronics Tests
      {
        test: "Lab Test",
        subjectCode: "EC101",
        department: "Electronics",
        totalMarks: 40,
        year: "2",
        section: "A",
        date: "2025-03-05",
      },
      {
        test: "Mid-term Exam",
        subjectCode: "EC102",
        department: "Electronics",
        totalMarks: 100,
        year: "3",
        section: "A",
        date: "2025-03-18",
      },
      // Mechanical Tests
      {
        test: "Quiz 1",
        subjectCode: "ME101",
        department: "Mechanical",
        totalMarks: 25,
        year: "2",
        section: "A",
        date: "2025-02-28",
      },
      {
        test: "Design Assignment",
        subjectCode: "ME102",
        department: "Mechanical",
        totalMarks: 75,
        year: "3",
        section: "A",
        date: "2025-04-05",
      },
    ];

    const savedTests = await Test.insertMany(tests);
    console.log("Tests seeded successfully");
    return savedTests;
  } catch (error) {
    console.error("Error seeding tests:", error);
  }
};

// Seed marks
const seedMarks = async (students, tests) => {
  try {
    const marks = [];
    
    // Generate marks for each student-test combination where applicable
    students.forEach((student, studentIndex) => {
      tests.forEach((test, testIndex) => {
        // Only create marks for tests in the same department as student
        if (test.department === student.department) {
          const baseScore = 60 + (studentIndex * 5) + (testIndex * 2); // Varied scoring
          const randomVariation = Math.floor(Math.random() * 20) - 10; // ±10 variation
          let finalScore = Math.min(test.totalMarks, Math.max(0, baseScore + randomVariation));
          
          marks.push({
            exam: test._id,
            student: student._id,
            marks: finalScore,
          });
        }
      });
    });

    await Marks.insertMany(marks);
    console.log("Marks seeded successfully");
  } catch (error) {
    console.error("Error seeding marks:", error);
  }
};

// Seed attendance
const seedAttendance = async (students, subjects) => {
  try {
    const attendance = [];
    
    students.forEach(student => {
      // Get subjects for this student's department and year
      const studentSubjects = subjects.filter(s => 
        s.department === student.department && 
        s.year === student.year.toString()
      );
      
      studentSubjects.forEach(subject => {
        const totalLectures = Math.floor(Math.random() * 30) + 20; // Random between 20-50
        const attendanceRate = 0.6 + (Math.random() * 0.35); // 60% to 95% attendance
        const lecturesAttended = Math.floor(totalLectures * attendanceRate);
        
        attendance.push({
          student: student._id,
          subject: subject._id,
          totalLecturesByFaculty: totalLectures,
          lectureAttended: lecturesAttended,
        });
      });
    });

    await Attendance.insertMany(attendance);
    console.log("Attendance seeded successfully");
  } catch (error) {
    console.error("Error seeding attendance:", error);
  }
};

// Main seed function
const seedDatabase = async () => {
  try {
    await connectDB();
    console.log("Starting database seeding...");
    
    await clearData();
    
    const departments = await seedDepartments();
    const admin = await seedAdmin();
    const facultyMembers = await seedFaculty();
    const subjects = await seedSubjects();
    const students = await seedStudents(subjects);
    await seedNotices();
    const tests = await seedTests(subjects);
    await seedMarks(students, tests);
    await seedAttendance(students, subjects);
    
    console.log("\n=== COMPREHENSIVE SEED DATA CREATED SUCCESSFULLY ===");
    console.log("\nDatabase Statistics:");
    console.log("====================");
    console.log(`✅ Departments: ${departments.length}`);
    console.log(`✅ Faculty Members: ${facultyMembers.length}`);
    console.log(`✅ Students: ${students.length}`);
    console.log(`✅ Subjects: ${subjects.length}`);
    console.log(`✅ Tests: ${tests.length}`);
    console.log(`✅ Notices: 8`);
    console.log("✅ Marks and Attendance: Generated for all applicable combinations");
    
    console.log("\nLogin Credentials:");
    console.log("====================");
    console.log("ADMIN:");
    console.log("Email: sharankumarreddyk@gmail.com");
    console.log("Password: 12341234");
    console.log("Username: sharankumarreddyk@gmail.com");
    console.log("");
    console.log("FACULTY (Main):");
    console.log("Email: faculty@gmail.com");
    console.log("Password: 12341234");
    console.log("Username: faculty@gmail.com");
    console.log("");
    console.log("STUDENT (Main):");
    console.log("Email: student@gmail.com");
    console.log("Password: 12341234");
    console.log("Username: student@gmail.com");
    console.log("");
    console.log("Additional Demo Accounts:");
    console.log("========================");
    console.log("Faculty: priya.sharma@college.edu, rajesh.kumar@college.edu");
    console.log("Students: aditi.sharma@student.edu, rohan.gupta@student.edu");
    console.log("Password for all: 12341234");
    console.log("====================\n");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
