# Gardenz

> Empowering community gardens in New Zealand

## Setup

To get started, clone this repo and then:

```
cd gardenz
npm install
npm run db:migrate
npm run db:seed
cp server/.env.example server/.env
npm run dev
```

`IMPORTANT:` Please ask one of the facilitators to give the actual values that should be in the `.env` file.

You can find the server running on [http://localhost:3000](http://localhost:3000).
___
## Tech used in this Project
- Storybook: is a tool for UI development: [video introduction](https://www.youtube.com/watch?v=gdlTFPebzAU), [docs](https://storybook.js.org/docs/react/get-started/introduction)
- Vite: a fast bundler: [video introduction](https://www.youtube.com/watch?v=KCrXgy8qtjM), [docs](https://vitejs.dev/guide/)
- leaflet: component to view maps: [docs](https://leafletjs.com/reference.html)
- visx: to plot graphs: [docs](https://airbnb.io/visx/docs)
- formik/yup: validating forms [formik docs](https://formik.org/docs/overview)
- tailwindcss: utility classes for styling: [video introduction](https://www.google.com/search?q=tailwind&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjj68-pgMP7AhV21jgGHWukCe0Q_AUoBHoECAEQBg&biw=1440&bih=789&dpr=2#fpstate=ive&vld=cid:0d59cd2c,vid:mr15Xzb1Ook), [docs](https://tailwindcss.com/docs/installation)
- playwright: end-to-end testing [docs](https://playwright.dev/docs/intro)
___
## Testing

### Unit/Integration tests

To test an individual test, use **npx**:

```
npx jest events.test.js
```

To run all tests:

```
npm run test
```

To run one single test, add `.only` after `it`

```
it.only('my test name goes here', () => {
  // here test goes here
))

```

Then you can run the test file individually, `npx jest events.test.js`.

### E2E tests

```
npm run test:e2e
```

update the .env file with testing email and password, make sure that this account has been created with Auth0
___
## Auth0

#### **First-time using Gardenz**

In Gardenz, click on _Register_ and add your email and password and click _Coninue_. You'll be redirected to Gardenz to enter additional information.

#### **After Database migration**

Your user account exists in Auth0 but not locally on your DB. Go to Gardenz, and click _Register_, this time click on **Log in** at the bottom and enter your email and password. There is no need to Register new emails at all, you can always sign in using your same email you used in the step above.
You'll be redirected to Gardenz to enter additional information.

#### **Admin Role**

Create an account in Auth0.com, register with your personal email and ask one of the facilitators to give you a global access as a Tenant Admin.
___
## User stories (from highest priority)

1. As a community member, I want to see the gardens in my area.
1. As a garden administrator, I want to post a new garden event.
1. As a community member, I want to be notified of new garden events.
1. As a community member, I want to volunteer at my garden's events.
1. As a garden administrator, I want to see event volunteers.
1. As a garden administrator, I want to track event volunteers.
___
## User interface / Wireframes

When you are working on a page please find the layout of the page in the Figma wireframes. If you have ay questions about layout please ask a facilitator

[Figma wireframe desgin](https://www.figma.com/file/QbkygWObPAOmQzMRvVV6ma/gardenz?node-id=0%3A1&t=pjERH9un4JlyLZSb-0)
___
## API routes
<details>
<summary><b>See api routes here</b></summary>
Failure response (HTTP status: 500):

```json
{
  "error": {
    "title": "Sanitised error message here"
  }
}
```

### `GET /api/v1/gardens`

Response (200):

```json
{
  "gardens": [
    {
      "id": 1,
      "name": "Kelmarna Gardens",
      "address": "12 Hukanui Crescent",
      "lat": -36.86011508905973,
      "lon": 174.7330772002716,
      "url": "http://www.kelmarnagardens.nz"
    }
  ]
}
```

### `GET /api/v1/gardens/:id`

Response (200):

```json
{
  "id": 1,
  "name": "Kelmarna Gardens",
  "address": "12 Hukanui Crescent",
  "description": "Kelmarna Gardens is a city farm and ...",
  "lat": -36.86011508905973,
  "lon": 174.7330772002716,
  "url": "http://www.kelmarnagardens.nz",
  "events": [
    {
      "id": 1,
      "volunteersNeeded": 8,
      "title": "Weeding Worker Bee",
      "date": "2020-12-31",
      "description": "It's time to get these weeds under control.",
      "totalVolunteers": 13,
      "isVolunteer": false
    }
  ]
}
```

### `POST /api/v1/events`

Request:

```json
{
  "gardenId": 1,
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control."
}
```

Response (201):

```json
{
  "id": 167,
  "gardenId": 1,
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control."
}
```

### `GET /api/v1/events/:id`

Response for GUEST (200):

```json
{
  "id": 167,
  "gardenId": 1,
  "gardenName": "Kelmarna Gardens",
  "gardenAddress": "12 Hukanui Crescent",
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control."
}
```

Response for MEMBER (200):

```json
{
  "id": 167,
  "gardenId": 1,
  "gardenName": "Kelmarna Gardens",
  "gardenAddress": "12 Hukanui Crescent",
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control.",
  "isVolunteer": true
}
```

Response for ADMIN (200):

```json
{
  "id": 167,
  "gardenId": 1,
  "gardenName": "Kelmarna Gardens",
  "gardenAddress": "12 Hukanui Crescent",
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control.",
  "volunteers": [
    {
      "userId": 3,
      "firstName": "Johnny",
      "lastName": "Dawg"
    }
  ]
}
```

### `PATCH /api/v1/events/:id`

Request:

```json
{
  "id": 167,
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control."
}
```

Response (201):

```json
{
  "id": 167,
  "gardenId": 1,
  "volunteersNeeded": 8,
  "title": "Weeding Worker Bee",
  "date": "2020-12-31",
  "description": "It's time to get these weeds under control."
}
```

### `POST /api/v1/volunteers`

Request:

```json
{
  "eventId": 167,
  "userId": 48
}
```

Response (201)

### `DELETE /api/v1/volunteers`

Request:

```json
{
  "eventId": 167,
  "userId": 48
}
```

Response (200)

### `GET /api/v1/producetypes`

Response:
```json
{
  "produceTypes": [
    {"id": 1, "name": "Veggie"},
    {"id": 2, "name": "Fruits"},
  ]
}
```

### `GET /api/v1/produce`

Response:
```json
{
  "produce": [
    {"id": 1, "name": "Spinach", "produceType": "Leafy greens"},
    {"id": 2, "name": "Apple", "produceType": "Fruits"},
  ]
}
```

### `POST /api/v1/produce`

Request:
```json
{
  "name": "Pinapple",
  "produceTypeId": 2
}
```

Response (201)

### `GET /api/v1/gardenproduce/:gardenId`
ResponseL
```json
{
  "produce": [
    {"id": 1, "name": "Spinach", "produceType": "Leafy greens"},
    {"id": 2, "name": "Apple", "produceType": "Fruits"},
  ]
}
```
### `POST /api/v1/gardenproduce`

Request:
```json
{
  "produceId": 1,
  "gardens": [
    1,
    2,
    3
  ]
}
```

Response (201)
</details>

___
## Database schema (proposal)

This has grown and will continue to grow as we add new tables
[Gardenz ERD on dbdiagram.io](https://dbdiagram.io/d/5f61c9407da1ea736e2e0bda)
___
## Sendgrid

Email notifications are being sent via https://sendgrid.com/ from the address admin@gardenz.eda.nz

In order to change the template log in (as a team member) to Don's/EDA account and select 'Email API' from the side panel and then 'Dynamic templates'

The template is called 'newEvent' and utilises handlebars to display personalised data.

The email template id is also referenced here and currently has the id 'd-5f8909decdc94fa08d818b740e47a025' which needs to be referenced in the notifications.js file (in server/notifications folder).

Within the notifications.js file personalised data is contained within the 'dynamic_template_data' object.

To change the volunteer button in the template, select the button and the url will display on the left hand side of the screen. The url will have to change if testing the volunteer link on localhost or once it has been deployed.

http://localhost:3000/api/v1/volunteer/emailsignup?token={{token}}

https://gardenz-app.herokuapp.com/api/v1/volunteer/emailsignup?token={{token}}

___
## Tailwind CSS

Familarise yourself with Tailwinds Utility first approach: https://tailwindcss.com/docs/utility-first

The styling throughout GardeNZ closely follows the Tailwind docs. Please refer to the sidebar nvaigation to find classes that fit the component that you are building: https://tailwindcss.com/docs/container

You can find the design files here: [figma](https://www.figma.com/file/QbkygWObPAOmQzMRvVV6ma/gardenz?node-id=0%3A1)



