# Newsclip_Test
How to get the Web application running

Database setup
-----------------
*Open the SQL query located in the repository, then all of queries indervidually in Microsoft SQL Server Management Studio
*Once you have done that the database and all its componenets will be on your local machine.

Api setup
---------------
*The C# api file if found in the repository and should be opened with Visual Studio
*The connection string in the appsettings.json file might need to be changed by editing the server name that corliats to the server name where the StockDB can be found.

Frontend setup
---------------
*The only thing that might need to be changed on the frontend is the URL that connects to the api it is currently 'https://localhost:7086/api/Stock' will probably be 
 different, if so make use of the new api link that can be found by running the C# api and coping the URL and pasiting it into the script.js file where the old url is
 currently located. (5 places in the script.js)
 
If there are any questions please contact me with kylewarren08@gmail.com
