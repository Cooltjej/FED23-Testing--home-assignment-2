### Unit Testing with vitest  

You are to create end-to-end (E2E) tests for the simple (but confident) movie database "Mostly Mundane Movies" that I have provided for you.  

---------------------------------------------------------------------  

### Requirements Specification  
  
You are to write end-to-end (E2E) tests using Cypress for the movie database "Mostly Mundane Movies" (https://mostly-mundane-movies...), where you will test, among other things, the ability to search for movies and read more about a movie.  
  
For each test, you should ensure what you consider reasonable (hint: as much as possible).  
  
Note: You should test that the displayed messages contain the correct text.  

For a passing grade (Godkänt), you should test the "happy path":  

Cannot search without entering a title.  

Cannot search without entering at least 3 characters.  

Can search for "The Matrix" and receive at least X number of search results.  

While searching, a loading spinner should be displayed.  

Can click on the first search result (after the page has finished loading), and the page you land on should match the movie's ID (via a data attribute).  

---------------------------------------------------------------------   

### Hygiene Requirements  
  
The following hygiene requirements must be met regardless of the grade level.  

Utilize Cypress.  
  
Be written in TypeScript.
