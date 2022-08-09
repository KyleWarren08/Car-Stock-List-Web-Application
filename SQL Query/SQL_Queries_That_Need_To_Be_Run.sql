--All scripts must be run indervidually, use the comment seperation to run each query indervidually.

----------------------------Creating the database------------------
USE MASTER
-------------------------------------------------------------------
IF EXISTS (SELECT * FROM sys.databases WHERE NAME = 'StockDb')
DROP DATABASE StockDb
-------------------------------------------------------------------
CREATE DATABASE StockDb;
-------------------------------------------------------------------
USE StockDb;
-------------------------------------------------------------------
----------------------------Create Table Stock---------------------
CREATE TABLE Stock (
Id UNIQUEIDENTIFIER NOT NULL,
CarMakeModel NVARCHAR (MAX) NOT NULL,
CarAmount INT NOT NULL,
CarFeatures NVARCHAR (MAX) NOT NULL,
IsVisable BIT NOT NULL
);
--------------------------------------------------------------------
----------------------------Inserting into Stock Table--------------
INSERT INTO Stock (Id, CarMakeModel, CarAmount, CarFeatures, IsVisable)
VALUES ('7B8BC372-C5E5-4DE3-AC6F-0434CFB4E55A', 'Polo Vivo Hatch', 250, 'Add even more style to your Polo Vivo with the Black Style package. This sleek design includes a gloss black finish on the roof, mirror caps, 16” Portago wheels and pillar covers. Other striking features like the matt black side sill covers, lowered suspension (-15mm), body-coloured R-Line boot spoiler, privacy glass and chrome exhaust tip, give this package even more attitude. Available on the Comfortline Manual and Highline models and offered in all our colour options.', 0),
('7B8BC372-C5E5-4DE3-AC6F-0434CFB4E65A', 'Polo Sedan', 200, 'The Polo Sedan comes equipped with safety features such as front and side airbags, ISOFIX child seat mounts and childproof locks on the rear doors. When you combine these with the safety technologies like Electronic Stability Programme (ESP), and ABS brakes with electronic brake force distribution (EBD), you can rest assured that the Polo Sedan will keep you and your family safe on the road.', 0),
('7B8BC372-C5E6-4DE3-AC6F-0434CFB4E65A', 'New T-Roc', 150, 'The ever-stylish SUV displays an undeniable sportiness that’s sure to turn heads wherever it goes. Its modern exterior introduces a new era of Volkswagen that’s as bold as it is practical. Its daring yet sophisticated shape is beautifully enhanced by a striking chrome strip that runs the length of the side roofline. Your choice of complementary or contrasting colours for the roof, A-pillar, and door mirror housings allow you to bring your unique vision to life and show the world who you are.', 0),
('7B8BC372-C5E6-4DE3-AC6F-0534CFB4E65A', 'New Caddy Cargo', 80, 'While you’re plotting your next business move, the new Caddy Cargo’s efficient functionality works hard to get you there. From large loads and precious cargo to building your brand image, the new Caddy Cargo is a van that’s suited to all your business needs. The stylish exterior shows that you mean business while the robust interior lets you get to business. With a large load capacity, improved technical functionality and ease of access, it’s a van that works for you.', 0),
('7B8BC372-C5E6-4DE3-AC6F-0534CFB4E69A', 'Amarok', 120, 'The Amarok transforms expectations of what a bakkie should be. In addition to the countless benchmark features, you have come to expect from the Amarok, its 3.0 litre V6 TDI engine delivers a brutish 190kW and 580Nm of torque. The Amarok V6 has exactly what it takes to get the job done, and then some...', 0);
---------------------------------------------------------------------
 
