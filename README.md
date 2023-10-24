# odin-rock-paper-scissors

## JavaScript project one for The Odin Project Foundations course

### Project Goals:

The goal of this project is both to gain experience working with basic JavaScript, as well as to practice & cement a basic problem-solving framework that can be applied to other problems moving forward.

My intention is to focus on the following areas when completing this project:

- Practicing basic problem solving with JavaScript as well as using correct syntax, variables, conditionals, loops, and the other basic parts of JS covered so far
- Utilize the problem solving framework of understand, plan, and divide & conquer, as laid out in the Odin Project problem solving lesson
- Practice taking the time to slow down and properly understand a problem, while checking for assumptions you may have that may not be correct
- Plan how to move forward in solving the problem, including thinking about how the program will be displayed, what the input and output should be, and what the required steps will be from input to output to get the desired result
- Lay these steps out into pseudocode to develop an algorithm to solve the problem, before a single line of code is written
- Use the pseudocode as guideposts to break the problem down into smaller, more manageable problems that can be solved one by one without becoming overwhelming
- Test each chunk of code as it is written to make sure that it is working as expected, to help avoid searching for bugs in the entire program
- When problems arise, practice proper debugging techniques using dev tools, the debugger, and console.log, as well as being sure to properly read & understand any errors that crop up
- Proper use of googling to understand what errors mean and what can cause them

### After-thoughts

Overall, I think this project was a success, in terms of both solving the problem at hand and fulfilling the intentions I set for the project.

Being the first JS project in the Odin Project curriculum, this project is fairly small in scope. This meant that it was a perfect time to practice the actual process of problem solving, without getting too lost in the weeds. And even in a small project like this, it is easy to temporarily lose track of what you're doing at a particular moment in the code, at least in these early stages of using JavaScript. Having this problem solving scaffolding helped a lot to organize my thoughts and keep my attention focused on one thing at a time. What I found most helpful was that this problem solving framework can be used recursively. Not only does it help when initially looking at the problem, but it can also be used to break down sub-problems that are complicated enough to warrant a structured approach. This framework can be used over and over until every step you have laid out is something you know how to do, or is easy to google.

Using this step by step approach goes hand in hand with testing your code one chunk at a time as you go along. Building a function, testing it with the proper inputs, confirming it gives the proper outputs, and then calling that function in future code, helps a lot with managing the growth of the project. Having these self-contained pieces of logic that you know are working, helps you to just plug the function in once it's written and free up your mind to other/bigger picture problems. One thing I realized, which I assume is best practice, is to make sure that mock variables for testing are still passed into a function from the outside, rather than being declared in the function, just to simulate the final context as closely as possible.

This approach also simplified the testing process, as each chunk of code was tested and confirmed to be working individually before moving on. This meant that there was less code to focus on at a time, less space for bugs to hide, and a clear result the code should produce. This made bug hunting easy using simple console.logs and reading/thinking through the code. Also, when you get things working chunk by chunk, testing as you go, and run into an error, you know there's a good chance that the error is occurring in the code you're currently working on. However, moving forward I'd like to expand and solidify my debugging process to utilize the dev tools debugger as projects get more complex. I think I will quickly reach a point where this is the only type of debugging that will make sense to do.

One thing that proved a bit more challenging was refactoring code. For example, when I decided I wanted to take all the code related to receiving and parsing a user choice, and add it into its own function. The relevent code had previously just been written right where it was needed. Moving this code into its own function wasn't that difficult, but did take a bit of care in making sure the code worked in the new context and was plugged in to the rest of the code correctly. While going about this process, I thought about how I could approach the initial problem solving stages more thoroughly. For example, by deciding up front which actions outlined in the pseudocode will warrant their own functions, writing these functions first, and then putting everything together in a more broad function. This of course won't prevent all refactoring issues, which I assume are unavoidable, and will be a process that I need to hone over time. But I think it's important to be ever thoughtful about my problem solving process and to always be open to ways that it could be improved. This way, I'm always continuing to advance this skill to suit my needs as I grow as a developer.

Lastly, I just think it's worth noting how much clarity I received about the code by simply playing the game over and over. For example, this made me aware of a use case that I hadn't considered: the user closing the choice prompt instead of typing something in. At first this caused an error, due to calling a string method on the choice which was null, but once I realized it was happening I was able to account for this event. By having the code check for the choice being null, I was able to change the closing of the prompt to essentially a quit game function. I think it's important to keep in mind that even in a simple program like this, using the program over and over, and getting into the mindset of the user is crucial. This will only become more important as I get into bigger and more complex projects.

### Update - 10/23/23

As laid out in the Odin Project curriculum, I am circling back to this project to remove the interactivity from the console and add a basic user interface to the page itself. For this update, I will be focusing on the following as my educational goals:

- Practicing the basic workflow of using git branches, including creating, switching, merging, and deleting branches and their respective git commands
- Working with the DOM, including selecting elements and setting their behavior using event listeners
- Proper organization of code, including making sure that code is broken down into small chunks/functions to keep the work focused and to avoid repeating code that is used in multiple places
- Practice refactoring code in an organized manner to avoid confusion when moving bits of code around/altering logic
- Continue to practice proper problem solving technique where applicable