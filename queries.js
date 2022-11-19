//1 Find all the topics and tasks which are thought in the month of October
db.octoberdatas.find({month:"october"},{topic:1,task:1});

//2 Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives.find({date:{$gte:"15-oct-2020",$lte:"31-oct-2020"}});

//3 Find all the company drives and students who are appeared for the placement.
db.driveappear.find({appeared:{$eq:"yes"}},{drive:1,student_name:1});

//4 Find the number of problems solved by the user in codekata
db.codekata.find({user_type:{$eq:"user"}},{user_name:1,solved:1});

// 5 Find all the mentors with who has the mentee's count more than 15
db.mentor.find({mentees:{$gt:15}},{mentor_name:1});

//6 Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.discre.find({date:{$gte:"15-oct-2020",$lte:"31-oct-2020"}});
