# Linkedin Feed Posts

Here are the steps you need to do:

1. **Fork** this repo in your profile.
2. **Clone the forked repository** in your system, by using this command in your Git bash/Command Prompt. <br />
   Make sure you replace `<your-username>` with your Github username

   ```
   git clone https://github.com/<your-username>/linkedin-feed.git
   ```
  
3. Make a seperate **branch**, other than main, to make changes in this project.
   ```
   git branch <branch-name>
   ```
4. Start the XAMPP (Apache and MYSQL) server in your system and make a blank Database named `link`, using XAMPP.
5. In the project directory, go to `server` folder and run the following command in terminal: 
   ```
   npm install
   ``` 
   After all the node modules gets downloaded, run:
   ```
   npm start
   ```
6. This will start the project in `localhost` server at port `8000`. 
7. In the project directory, go to `web` folder and run the following command in terminal: 
   ```
   npm install
   ``` 
   After all the node modules gets downloaded, run:
   ```
   npm start
   ```
8. This will open a tab in your default browser on URL `http://localhost:3000`. Now, you can see the preview of the project. 