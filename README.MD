### Project Setup

To set up the project, follow these steps:

Create a .env file in the root directory with the following variables, replacing the placeholders with your own values:
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>

Install project dependencies by running the following command in your terminal:
npm install

Start the project by running the following command:
npm start

## Technical Details

### Enhanced Security
Token-based user authentication and authorization: Implemented using Node.js (Express) to ensure secure REST API access.
Secure REST API: Provides authorized access to user data, ensuring data integrity and confidentiality.

### Data Integrity
MongoDB transactions: Utilized to maintain the integrity of financial data, allowing users to manage their accounts, transfer funds, deposit funds, save beneficiaries, and access transaction histories with confidence in data accuracy.

By following these steps and utilizing the provided technologies, the project ensures robust security and data integrity, providing a reliable and trustworthy platform for users to manage their financial data.
