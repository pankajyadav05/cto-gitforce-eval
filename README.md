<div align="center">
	<a target="_blank" href="https://gitforcetalent.com">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://gitforcetalent.com/_next/image?url=%2Fimages%2Flogo-light.png&w=1920&q=75">
            <source media="(prefers-color-scheme: light)" srcset="https://gitforcetalent.com/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75">
            <img alt="https://gitforcetalent.com" src="https://gitforcetalent.com/_next/image?url=%2Fimages%2Flogo.png">
        </picture>
	</a>
    <br />
    <br />
</div>

---

---

## Objective
Develop a full-stack application for managing members, with a React frontend Table for data display and a Node.js backend with Express for data manipulation. Finally, deploy the frontend to AWS S3 static web hosting.

## Backend Tasks

1. Implement the following API endpoints:
   - `GET /api/members`: Retrieve all active members (base provided)
   - `DELETE /api/members/:id`: Delete a single member by ID
   - `PUT /api/members`: Update multiple members by their IDs
   
2. Implement the `deleteOneMember(id)` function to remove a member from the `members` array by their ID.

3. Implement the `updateManyByIds(updates)` function to update multiple members. The `updates` parameter should be an array of objects containing the ID and updated fields for each member.

## Frontend Tasks

1. Create a table component that displays the following columns:
   - FirstName
   - LastName
   - Email
   - Age
   - Occupation
   - City
   - Country
   - Actions (Delete)
  
2. Implement the following features:
   - Fetch and display all members from the backend API
   - Allow deletion of a single member (should call the backend API)
   - Allow selection of multiple members for batch update
   - Implement a form or modal for updating selected members' information


## Deployment Task

1. Build the React application for production.
2. Set up an AWS S3 bucket for static website hosting.
3. Upload the built frontend files to the S3 bucket.
4. Configure the S3 bucket for public access and static website hosting.

