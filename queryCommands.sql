Create Database PersonDB;

Create table dbo.PhoneNumberType(
PhoneNumberTypeID int,
Name varchar(250),
PRIMARY KEY(PhoneNumberTypeID)
);

Create table dbo.Person(
BusinessEntityID int NOT NULL,
PhoneNumber varchar(11),
PhoneNumberTypeID int,
PRIMARY KEY(BusinessEntityID), 
CONSTRAINT FK_PersonNumberType FOREIGN KEY (PhoneNumberTypeID)
REFERENCES PhoneNumberType(PhoneNumberTypeID)
);

select * 
from dbo.PhoneNumberType;

select * 
from dbo.PersonDB;

insert into dbo.PhoneNumberType values (01,'Celular');
insert into dbo.PhoneNumberType values (02,'Fax');
insert into dbo.PhoneNumberType values (03,'Residencial');
insert into dbo.PersonDB values (01, '19997820239', 01);
insert into dbo.PersonDB values (02, '19995121559', 02);
insert into dbo.PersonDB values (03, '19315984156', 03);