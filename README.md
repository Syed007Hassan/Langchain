# Langchain

The SQL Agent provided by LangChain is a tool that allows you to interact with SQL databases using natural language. It is designed to be more 
flexible and more powerful than the standard SQLDatabaseChain, and it can be used to answer more general questions about a database, as well as recover from errors.

Here are some of the advantages of using the SQL Agent:

- It can answer questions based on the databases' schema as well as on the databases' content (like describing a specific table)
- It can recover from errors by running a generated query, catching the traceback and regenerating it correctly.
- It is compatible with any SQL dialect supported by SQLAlchemy (e.g., MySQL, PostgreSQL, Oracle SQL, Databricks, SQLite).

An Example usecase is implemented in [SQL-AGENT](https://github.com/Syed007Hassan/Langchain/blob/main/SQL-AGENTS/index2.js)


```
prompt used: "Employees who were hired after 2005?"
```
### Output

```

[
  {
    "action": {
      "tool": "list-tables-sql",
      "toolInput": "",
      "log": "Action: list-tables-sql\nAction Input: \"\""
    },
    "observation": "Categories, CustomerCustomerDemo, CustomerDemographics, Customers, EmployeeTerritories, Order Details, Orders, Products, Regions, Shippers, Suppliers, Territories, Employees"
  },
  {
    "action": {
      "tool": "info-sql",
      "toolInput": "Employees",
      "log": " I should look at the Employees table to see what columns I can query.\nAction: info-sql\nAction Input: \"Employees\""
    },
    "observation": "CREATE TABLE Employees (\nEmployeeID INTEGER , LastName TEXT , FirstName TEXT , Title TEXT , TitleOfCourtesy TEXT , BirthDate DATE , HireDate DATE , Address TEXT , City TEXT , Region TEXT , PostalCode TEXT , Country TEXT , HomePhone TEXT , Extension TEXT , ReportsTo INTEGER , PhotoPath TEXT ) \nSELECT * FROM \"Employees\" LIMIT 3;\n EmployeeID LastName FirstName Title TitleOfCourtesy BirthDate HireDate Address City Region PostalCode Country HomePhone Extension ReportsTo PhotoPath\n 1 Davolio Nancy Sales Representative Ms. 1968-12-08 2012-05-01 507 - 20th Ave. E.Apt. 2A Seattle North America 98122 USA (206) 555-9857 5467 2 http://accweb/emmployees/davolio.bmp\n 2 Fuller Andrew Vice President, Sales Dr. 1972-02-19 2012-08-14 908 W. Capital Way Tacoma North America 98401 USA (206) 555-9482 3457 null http://accweb/emmployees/fuller.bmp\n 3 Leverling Janet Sales Representative Ms. 1983-08-30 2012-04-01 722 Moss Bay Blvd. Kirkland North America 98033 USA (206) 555-3412 3355 2 http://accweb/emmployees/leverling.bmp\n"
  },
  {
    "action": {
      "tool": "query-sql",
      "toolInput": "SELECT * FROM Employees WHERE HireDate > '2005-01-01' LIMIT 10;",
      "log": " I should query the Employees table for employees hired after 2005.\nAction: query-sql\nAction Input: SELECT * FROM Employees WHERE HireDate > '2005-01-01' LIMIT 10;"
    },
    "observation": "[{\"EmployeeID\":1,\"LastName\":\"Davolio\",\"FirstName\":\"Nancy\",\"Title\":\"Sales Representative\",\"TitleOfCourtesy\":\"Ms.\",\"BirthDate\":\"1968-12-08\",\"HireDate\":\"2012-05-01\",\"Address\":\"507 - 20th Ave. E.Apt. 2A\",\"City\":\"Seattle\",\"Region\":\"North America\",\"PostalCode\":\"98122\",\"Country\":\"USA\",\"HomePhone\":\"(206) 555-9857\",\"Extension\":\"5467\",\"ReportsTo\":2,\"PhotoPath\":\"http://accweb/emmployees/davolio.bmp\"},{\"EmployeeID\":2,\"LastName\":\"Fuller\",\"FirstName\":\"Andrew\",\"Title\":\"Vice President, Sales\",\"TitleOfCourtesy\":\"Dr.\",\"BirthDate\":\"1972-02-19\",\"HireDate\":\"2012-08-14\",\"Address\":\"908 W. Capital Way\",\"City\":\"Tacoma\",\"Region\":\"North America\",\"PostalCode\":\"98401\",\"Country\":\"USA\",\"HomePhone\":\"(206) 555-9482\",\"Extension\":\"3457\",\"ReportsTo\":null,\"PhotoPath\":\"http://accweb/emmployees/fuller.bmp\"},{\"EmployeeID\":3,\"LastName\":\"Leverling\",\"FirstName\":\"Janet\",\"Title\":\"Sales Representative\",\"TitleOfCourtesy\":\"Ms.\",\"BirthDate\":\"1983-08-30\",\"HireDate\":\"2012-04-01\",\"Address\":\"722 Moss Bay Blvd.\",\"City\":\"Kirkland\",\"Region\":\"North America\",\"PostalCode\":\"98033\",\"Country\":\"USA\",\"HomePhone\":\"(206) 555-3412\",\"Extension\":\"3355\",\"ReportsTo\":2,\"PhotoPath\":\"http://accweb/emmployees/leverling.bmp\"},{\"EmployeeID\":4,\"LastName\":\"Peacock\",\"FirstName\":\"Margaret\",\"Title\":\"Sales Manager\",\"TitleOfCourtesy\":\"Ms.\",\"BirthDate\":\"1963-09-19\",\"HireDate\":\"2005-05-03\",\"Address\":\"4110 Old Redmond Rd.\",\"City\":\"Redmond\",\"Region\":\"North America\",\"PostalCode\":\"98052\",\"Country\":\"USA\",\"HomePhone\":\"(206) 555-8122\",\"Extension\":\"5176\",\"ReportsTo\":2,\"PhotoPath\":\"http://accweb/emmployees/peacock.bmp\"},{\"EmployeeID\":5,\"LastName\":\"Buchanan\",\"FirstName\":\"Steven\",\"Title\":\"Sales Manager\",\"TitleOfCourtesy\":\"Mr.\",\"BirthDate\":\"1975-03-04\",\"HireDate\":\"2013-10-17\",\"Address\":\"14 Garrett Hill\",\"City\":\"London\",\"Region\":\"British Isles\",\"PostalCode\":\"SW1 8JR\",\"Country\":\"UK\",\"HomePhone\":\"(71) 555-4848\",\"Extension\":\"3453\",\"ReportsTo\":2,\"PhotoPath\":\"http://accweb/emmployees/buchanan.bmp\"},{\"EmployeeID\":6,\"LastName\":\"Suyama\",\"FirstName\":\"Michael\",\"Title\":\"Sales Representative\",\"TitleOfCourtesy\":\"Mr.\",\"BirthDate\":\"1983-07-02\",\"HireDate\":\"2013-10-17\",\"Address\":\"Coventry House\\nMiner Rd.\",\"City\":\"London\",\"Region\":\"British Isles\",\"PostalCode\":\"EC2 7JR\",\"Country\":\"UK\",\"HomePhone\":\"(71) 555-7773\",\"Extension\":\"428\",\"ReportsTo\":5,\"PhotoPath\":\"http://accweb/emmployees/suyama.bmp\"},{\"EmployeeID\":7,\"LastName\":\"King\",\"FirstName\":\"Robert\",\"Title\":\"Sales Representative\",\"TitleOfCourtesy\":\"Mr.\",\"BirthDate\":\"1980-05-29\",\"HireDate\":\"2014-01-02\",\"Address\":\"Edgeham Hollow\\nWinchester Way\",\"City\":\"London\",\"Region\":\"British Isles\",\"PostalCode\":\"RG1 9SP\",\"Country\":\"UK\",\"HomePhone\":\"(71) 555-5598\",\"Extension\":\"465\",\"ReportsTo\":5,\"PhotoPath\":\"http://accweb/emmployees/king.bmp\"},{\"EmployeeID\":8,\"LastName\":\"Callahan\",\"FirstName\":\"Laura\",\"Title\":\"Inside Sales Coordinator\",\"TitleOfCourtesy\":\"Ms.\",\"BirthDate\":\"1978-01-09\",\"HireDate\":\"2014-03-05\",\"Address\":\"4726 - 11th Ave. N.E.\",\"City\":\"Seattle\",\"Region\":\"North America\",\"PostalCode\":\"98105\",\"Country\":\"USA\",\"HomePhone\":\"(206) 555-1189\",\"Extension\":\"2344\",\"ReportsTo\":2,\"PhotoPath\":\"http://accweb/emmployees/callahan.bmp\"},{\"EmployeeID\":9,\"LastName\":\"Dodsworth\",\"FirstName\":\"Anne\",\"Title\":\"Sales Representative\",\"TitleOfCourtesy\":\"Ms.\",\"BirthDate\":\"1986-01-27\",\"HireDate\":\"2014-11-15\",\"Address\":\"7 Houndstooth Rd.\",\"City\":\"London\",\"Region\":\"British Isles\",\"PostalCode\":\"WG2 7LT\",\"Country\":\"UK\",\"HomePhone\":\"(71) 555-4444\",\"Extension\":\"452\",\"ReportsTo\":5,\"PhotoPath\":\"http://accweb/emmployees/dodsworth.bmp\"}]"
  }
]

```

### Data in the form of a table from observations

| EmployeeID | LastName  | FirstName | Title                 | TitleOfCourtesy | BirthDate   | HireDate   | Address                     | City       | Region        | PostalCode | Country | HomePhone       | Extension | ReportsTo | PhotoPath                            |
|------------|-----------|-----------|-----------------------|-----------------|-------------|------------|-----------------------------|------------|---------------|------------|---------|-----------------|-----------|-----------|-------------------------------------|
| 1          | Davolio   | Nancy     | Sales Representative | Ms.             | 1968-12-08  | 2012-05-01 | 507 - 20th Ave. E.Apt. 2A   | Seattle    | North America | 98122      | USA     | (206) 555-9857 | 5467      | 2         | http://accweb/emmployees/davolio.bmp |
| 2          | Fuller    | Andrew    | Vice President, Sales| Dr.             | 1972-02-19  | 2012-08-14 | 908 W. Capital Way          | Tacoma     | North America | 98401      | USA     | (206) 555-9482 | 3457      | null      | http://accweb/emmployees/fuller.bmp  |
| 3          | Leverling | Janet     | Sales Representative | Ms.             | 1983-08-30  | 2012-04-01 | 722 Moss Bay Blvd.          | Kirkland   | North America | 98033      | USA     | (206) 555-3412 | 3355      | 2         | http://accweb/emmployees/leverling.bmp |
| 4          | Peacock   | Margaret  | Sales Manager         | Ms.             | 1963-09-19  | 2005-05-03 | 4110 Old Redmond Rd.        | Redmond    | North America | 98052      | USA     | (206) 555-8122 | 5176      | 2         | http://accweb/emmployees/peacock.bmp |
| 5          | Buchanan  | Steven    | Sales Manager         | Mr.             | 1975-03-04  | 2013-10-17 | 14 Garrett Hill             | London     | British Isles | SW1 8JR    | UK      | (71) 555-4848  | 3453      | 2         | http://accweb/emmployees/buchanan.bmp |
| 6          | Suyama    | Michael   | Sales Representative | Mr.             | 1983-07-02  | 2013-10-17 | Coventry House\nMiner Rd.   | London     | British Isles | EC2 7JR    | UK      | (71) 555-7773  | 428       | 5         | http://accweb/emmployees/suyama.bmp  |
| 7          | King      | Robert    | Sales Representative | Mr.             | 1980-05-29  | 2014-01-02 | Edgeham Hollow\nWinchester Way| London     | British Isles | RG1 9SP   | UK      | (71) 555-5598  | 465       | 5         | http://accweb/emmployees/king.bmp   |
| 8          | Callahan  | Laura     | Inside Sales Coordinator | Ms.         | 1978-01-09  | 2014-03-05 | 4726 - 11th Ave. N.E.       | Seattle    | North America | 98105      | USA     | (206) 555-1189 | 2344      | 2         | http://accweb/emmployees/callahan.bmp |
| 9          | Dodsworth | Anne      | Sales Representative | Ms.             | 1986-01-27  | 2014-11-15 | 7 Houndstooth Rd.           | London     | British Isles | WG2 7LT   | UK      | (71) 555-4444  | 452       | 5         | http://accweb/emmployees/dodsworth.bmp |

The SQL Agent works by first generating a SQL query from the user's natural language question. It then executes the query and returns the results to the user. If the query fails, the SQL Agent will attempt to recover by interpreting the error in a subsequent LLM call and rectifying the issue.
