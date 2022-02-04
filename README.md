# 30-day-mini-habit

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

# Authentication

- https://supabase.com/docs/guides/with-react

- Setup schema https://supabase.com/docs/guides/with-react#set-up-the-database-schema
    - create profiles   
```
-- Create a table for public "profiles"
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  username text unique,
  avatar_url text,
  about text,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);
```
    - security
```
alter table profiles enable row level security;

-- create policy "Public profiles are viewable by everyone."
--   on profiles for select
--   using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );
```
    - no need for real time or storage.

# Sign in, Sign up

- See https://ruanmartinelli.com/posts/supabase-authentication-react