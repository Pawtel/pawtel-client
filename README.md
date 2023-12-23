# Pawtel - Client Side

Welcome to the client side repository of Pawtel, a React-based hotel booking application designed for pets! Pawtel makes it easy for pet owners to find and book accommodations for their beloved furry friends.

## Getting Started

To get started with the Pawtel client-side application, follow these steps:

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/Pawtel/pawtel-client.git
    ```

2. Navigate to the project directory.

    ```bash
    cd pawtel-client
    ```

3. Install dependencies using npm or yarn.

    ```bash
    npm install
    ```

4. Start the development server.

    ```bash
    npm run dev
    ```

5. Open your browser and visit `http://localhost:3000` to view the Pawtel application.

## Testing

Pawtel uses `vitest` for testing. To run the tests, use the following command:

```bash
   npm test
```

This will execute the test suite and provide information about the test results.

## Features

-   Browse and search for pet-friendly accommodations.
-   View detailed information about each hotel.
-   Book a stay for your pet with ease.

## Technologies Used

-   React
-   React Router
-   Vite
-   FontAwesome
-   Vitest
-   Netlify

## Deployment

The Pawtel client-side application is deployed on [Netlify](https://www.netlify.com/). Visit the deployed application at [Pawtel App](https://pawtel.netlify.app).

## Repository

The Pawtel client-side repository is hosted on [GitHub](https://github.com/Pawtel/pawtel-client)
The Pawtel server0side reposity is hosted on [Heroku](https://pawtel-48da552cecec.herokuapp.com/)

## Authors

-   [Luke Wheldale](https://github.com/Looch8)
-   [Jessica Liong](https://github.com/jessicacliong)

### Task Management

#### Trello/Kanban System

Given the collaborative nature of the Pawtel project with Luke Wheldale handling the front end and Jessica Liong managing the back end, we opted for a streamlined approach to task management. Instead of utilizing a Trello or Kanban board, we relied on our Part A content, which served as a comprehensive guide for project planning. Regular stand-up meetings, conducted 1-2 times weekly, allowed us to discuss progress, address challenges, and communicate effectively.

### Git Workflow

#### Branch Management

Our Git workflow was integral to maintaining a structured development process. Both Luke and Jessica worked on separate repositories (front end and back end), allowing for modular development. Although we didn't use Trello for branching, we adhered to a disciplined Git branching strategy.

#### Deleted Branches

Branch deletion was a part of our Git workflow when deemed necessary. Deleting branches after merging or discarding changes helps keep the repository clean and avoids clutter. Deleted branches, though not explicitly visible, are reflected in the commit history.

### Manual Testing

Manual testing played a crucial role in ensuring the Pawtel app's functionality and user experience. Both developers actively engaged in testing various features, including user authentication, data submission, and page navigation.

### Application Overview

The Pawtel app is a full-stack application designed for a pet hotel. It features a home page, login functionality (with sign-up option), about page, and a contact page. While initially considering a separate admin dashboard, time constraints led to the decision for Luke and Jessica to assume admin roles within the app.

### Conclusion

The collaboration between Luke Wheldale and Jessica Liong resulted in the successful development of the Pawtel app. Despite not using a Trello or Kanban board for task management, our structured Git workflow and frequent stand-up meetings facilitated effective communication and project progress. Manual testing ensured the reliability of key features, and any tweaks made during Part A were carefully documented. The Pawtel app stands as a testament to our collaborative efforts and commitment to quality development.

## Reflecting on the Development Process

### Areas for Improvement

#### Continuous Integration Process

One aspect we would reconsider for future projects is the adoption of a more robust continuous integration (CI) process. Given that Luke Wheldale handled the front end, and Jessica Liong managed the back end in separate repositories, implementing a CI strategy would have offered several benefits.

#### Feature Integration and Testing

In hindsight, adopting a CI approach could have involved completing one feature at a time and then testing it on both the front end and back end simultaneously. This would have allowed us to identify and address integration issues early in the development cycle. By working on separate repositories and only connecting the front end to the back end in the later stages, we encountered challenges related to code refactoring.

#### Code Refactoring Challenges

Connecting the front end with the back end necessitated significant code refactoring. This had a cascading effect on the CSS styling and test cases, leading to additional work in these areas. With a more integrated testing approach, these challenges could have been identified earlier, reducing the overall refactoring effort.

#### Improved Collaboration

While our frequent stand-up meetings were valuable for communication, a more integrated CI process could have improved collaboration by providing a more continuous feedback loop between the front end and back end development.

### Summary

Reflecting on the development process, we acknowledge the potential benefits of a more integrated continuous integration process. The challenges encountered during the later stages, such as code refactoring and the impact on styling and testing, highlight areas where improvements could be made. In future collaborations, we would explore incorporating a more systematic CI approach to enhance efficiency and reduce complexities during the integration phase.
