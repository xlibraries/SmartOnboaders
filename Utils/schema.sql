CREATE TABLE PersonalDetails (
    ID INT PRIMARY KEY,
    FirstName VARCHAR(100),
    MiddleName VARCHAR(100),
    LastName VARCHAR(100),
    FullNameAsPerAadharCard VARCHAR(255),
    TelNo VARCHAR(15),
    MobNo VARCHAR(15),
    EmailID VARCHAR(255),
    Gender CHAR(1),
    DateOfBirth DATE,
    Age INT,
    MaritalStatus VARCHAR(50),
    IsCurrentAddressSameAsPermanent BOOLEAN
);

CREATE TABLE NationalityDetails (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    Citizenship VARCHAR(50),
    Nationality VARCHAR(50),
    PAN VARCHAR(10),
    WorkAuthorization VARCHAR(50),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE AddressDetails (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    Country VARCHAR(50),
    Address VARCHAR(255),
    City VARCHAR(50),
    State VARCHAR(50),
    Pincode VARCHAR(6),
    ShippingAddress VARCHAR(255),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE HealthDetails (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    CriticalIllness BOOLEAN,
    BloodGroup VARCHAR(3),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE ProfessionalReferences (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    KnowSomeoneInOrg BOOLEAN,
    Name VARCHAR(100),
    PhoneNumber VARCHAR(15),
    Address VARCHAR(255),
    KnownFrom DATE,
    KnownTo DATE,
    Capacity VARCHAR(100),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE FamilyDetails (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    Name VARCHAR(100),
    Relation VARCHAR(50),
    Age INT,
    Occupation VARCHAR(100),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE EducationDetails (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    EducationQualification VARCHAR(100),
    YearOfPassing YEAR,
    PercentageOrCGPA DECIMAL(5,2),
    University VARCHAR(100),
    Country VARCHAR(50),
    State VARCHAR(50),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE AdditionalQualifications (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    Title VARCHAR(100),
    Institute VARCHAR(100),
    PartTime BOOLEAN,
    Duration INT,
    YearOfPassing YEAR,
    CertificateNumber VARCHAR(100),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE Skills (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    PrimarySkill VARCHAR(100),
    SecondarySkill VARCHAR(100),
    OtherSkills VARCHAR(255),
    DomainExpertise VARCHAR(100),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE EmploymentHistory (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    HasWorkExperience BOOLEAN,
    OrgName VARCHAR(100),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE AdditionalInformation (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    CareerAchievements VARCHAR(255),
    Comments VARCHAR(255),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);

CREATE TABLE DocumentsUploaded (
    ID INT PRIMARY KEY,
    PersonalDetailsID INT,
    S3BucketLink VARCHAR(255),
    FOREIGN KEY (PersonalDetailsID) REFERENCES PersonalDetails(ID)
);
