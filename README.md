## Tickitz-Frontend

This is a frontend part for [api project](https://github.com/NamaTeam/tickitz-backend).

## Getting started

To get the React app running locally:

* Clone this repo with `git clone https://github.com/NamaTeam/tickitz-frontend-2.git`
* `cd tickitz-frontend-2`
* `npm install` to install all required dependencies
* Create a `.env` file and reference the `dotenv.example` file
* `npm start` to start the local server

## Folder Structure

    ├── public                    
    │   ├── logo              
    │   ├── svg              
    │   └── index.html            
    ├── src
    │   ├── Redux
    │   │   ├── Actions 
    │   │   │   ├── auth.js  
    │   │   │   ├── cinema.js 
    │   │   │   ├── movie.js 
    │   │   │   ├── order.js    
    │   │   │   ├── payment.js 
    │   │   │   ├── schedule.js    
    │   │   │   ├── seat.js
    │   │   │   ├── stats.js   
    │   │   │   └── user.js    
    │   │   ├── Reducers   
    │   │   │   ├── ...      
    │   │   │   └── index.js    
    │   |   └── store.js
    │   ├── components 
    │   │   ├── Partials
    │   │   │   ├── styles 
    │   │   │   │   └── style.css    
    │   │   │   ├── Footer.js  
    │   │   │   ├── Navbar.js     
    │   │   │   └── index.js      
    │   │   ├── Routes 
    │   │   │   ├── privateRoute.js  
    │   │   │   ├── publicRoute.js     
    │   │   │   └── index.js     
    │   |   └── index.js    
    │   ├── pages 
    │   │   ├── Admin     
    │   │   │   └── ...    
    │   │   ├── Auth 
    │   │   │   └── ... 
    │   │   └── ...     
    │   ├── App.js
    |   ├── index.js
    |   └── ...   
    └── ...
    
## Screenshot

![dashboard](https://i.ibb.co/8DKGBP3/dashboard-3.png)  ![dashboard-sm](https://i.ibb.co/PgXqMkK/dasboard-mobile-3.png) 

![movie-page](https://i.ibb.co/WcZnLyf/movie-page-2.png)  ![movie-page-sm](https://i.ibb.co/z5LpR6x/movie-page-sm-3.png) 


