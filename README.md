# Getting Started with Create React App

- This project was bootstrapped with [Create React App] and Tailwind Css 
- See https://tailwindcss.com/docs/guides/create-react-app

# Using Netlify Serverless Functions with Netlify Dev

- Follow https://www.youtube.com/watch?v=bVmUHvVK8Hs&ab_channel=JamesQQuick
    - create file `netlify.toml` with
        ```
        [build]
            functions = "function"
        [[redirects]]
            from = "/api/*"
            to = "./netlify/functions/:slat"
            status = 200
        ```
    - need `npm install -g netlify-cli` 
    - run `netlify dev` (auto detect frontend) https://youtu.be/bVmUHvVK8Hs?t=410
    - using .evn https://youtu.be/bVmUHvVK8Hs?t=566
    - git https://github.com/jamesqquick/Build-a-JAMstack-Course-Tracker-with-React-Serverless-and-Airtable

- example function hello.js