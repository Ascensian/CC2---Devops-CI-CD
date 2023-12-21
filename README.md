# CC2-Devops-CI-CD

How to start

1. Clone project
2. Run docker compose :

     docker compose -f docker-compose.yml up -d

3. When done, go to http://localhost:9000/
4. Add a password, you'll be redirected to a dashboard, click on your profile, go to Security
5. Generate a token, use global analysis project
6. Grab generated token, go to your docker-compose file and paste token in SONAR_TOKEN environemment variables from sonarscanner service
7. Run the following command to restart your sonar scanner container :

     docker-compose up -d sonarscanner

8. Check sonarscanner container logs to check if analysis is running (for me analysis ran for 13 mins)

![image](https://github.com/Ascensian/CC2---Devops-CI-CD/assets/84803535/092cae18-04f2-4b1b-9053-251c94d8d25f)

9. When analysis is done go back to sonarqube server, if analysis is successful dashboard should look like this

![image](https://github.com/Ascensian/CC2---Devops-CI-CD/assets/84803535/76cb13f5-8209-4f4e-9d12-fb2f9b2daaf0)


