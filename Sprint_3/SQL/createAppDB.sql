DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `Applications`;
DROP TABLE IF EXISTS `AdminAnnouncements`;


CREATE TABLE IF NOT EXISTS Users (
	userId int AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cohortNum VARCHAR(255) NOT NULL,
    appUseOptions VARCHAR(3) DEFAULT NULL,
    customNotes VARCHAR(255) NOT NULL,
    isAdmin BIT NOT NULL DEFAULT 0,
    createdTime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Applications (
    applicationId int AUTO_INCREMENT PRIMARY KEY,
    userId int NOT NULL,
    jobPosition varchar(255) NOT NULL,
    descriptionURL varchar(255) NOT NULL,
    status varchar(50) NOT NULL, 
    notes varchar(500),
    dateApplied date DEFAULT CURRENT_DATE NOT NULL,
   followUpDate date NOT NULL,
   appliedAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,

   FOREIGN KEY(userId) REFERENCES Users(userId)
);

CREATE TABLE IF NOT EXISTS AdminAnnouncements (
    announcementId int AUTO_INCREMENT PRIMARY KEY,
    userId int NOT NULL,
    jobType varchar(20) NOT NULL,
    location varchar(255) NOT NULL,
    employer varchar(255) NOT NULL, 
    moreInfo varchar(255) NOT NULL,
    url varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    createdDate DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,

    FOREIGN KEY(userId) REFERENCES Users(userId)
);