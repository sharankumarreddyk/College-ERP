# College ERP Seed Data

This script will populate your MongoDB database with initial data for the College ERP system.

## What's Included

The seed data creates:

### User Accounts
- **Admin Account**: sharankumarreddyk@gmail.com (password: 12341234)
- **Faculty Account**: faculty@gmail.com (password: 12341234)
- **Student Account**: student@gmail.com (password: 12341234)

### Supporting Data
- 5 Departments (Computer Science, IT, Electronics, Mechanical, Civil)
- 5 Subjects for Computer Science department
- Sample notices for students and faculty
- Sample tests and marks for the student
- Sample attendance records

## How to Run

1. Make sure your MongoDB connection is properly configured in your `.env` file
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies (if not already done):
   ```bash
   npm install
   ```
4. Run the seed script:
   ```bash
   npm run seed
   ```

## Login Credentials

After running the seed script, you can log in with these credentials:

### Admin Login
- **Email**: sharankumarreddyk@gmail.com
- **Password**: 12341234
- **Username**: ADM2025CS0101

### Faculty Login
- **Email**: faculty@gmail.com
- **Password**: 12341234
- **Username**: FAC2025CS0101

### Student Login
- **Email**: student@gmail.com
- **Password**: 12341234
- **Username**: STU2025CS0101

## Important Notes

⚠️ **Warning**: Running this script will **clear all existing data** in your database and replace it with the seed data.

- All passwords are already hashed using bcrypt
- The `passwordUpdated` flag is set to `true` for all accounts to skip first-time password update
- The student is enrolled in 3rd year Computer Science subjects
- Sample attendance and marks are included for testing

## Troubleshooting

If you encounter any errors:
1. Ensure MongoDB is running
2. Check your `.env` file has the correct `CONNECTION_URL`
3. Make sure all dependencies are installed
4. Verify you're running the command from the server directory
