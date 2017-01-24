## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**PhotoContainer**
 - photo_url
 - description
 - tags

**UserContainer**
 - userinfo

**TagContainer**
 - names

**NewTag**
 - NewTag


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/photo/:photoId" | "PhotoContainer" |
| "/home/user/:userId" | "UserContainer" |
