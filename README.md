# Docker Compose Sample Code

Sample front end (Angular 6) and back end (asp.net core 2.1) in docker containers.

# Build Front End (Angular)

Install Angular CLI (Optional, if you don't have it already)

``` npm install -g @angular/cli ```

``` cd client/ ```

``` ng build --prod ```

# Build Back End (asp.net core)

Download and install asp.net core (2.1) SDK

``` dotnet publish ```

# Docker

To start: ``` docker-compose up ```

Client should now be available at http://localhost:4200

Server should now be available at http://localhost:5000/api/values

To Stop ``` docker-compose down ```
