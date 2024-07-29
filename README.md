# Getting Started with React Test Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install node modules.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Contentful CMS`

In src/Content.tsx file, it gets post data (title, content, author) from Contentful CMS.

If we got error while fetching data from CMS or there is no data, the page will show [Can not get data from Contentful CMS]() text.

In src/Content.tsx file, there is a query variable (Line 27).

```code
const query = `
{
  postCollection {
    items {
      title
      author
      description
      date
    }
  }
}`;
```

I've created my personal account on Contentful CMS, and published some test data on that CMS.

With GraphQL API, we can fetch data from the CMS and display on our pages. (Line 43 shows how we fetch data from CMS)

You should get spaceId and accessToken from the CMS account.

In my code, spaceID is `172666ru6dsk`, accessToken is `cCbgOYfI0ZiNooQc8-OJ0RzHjs8oL4LePGcz54QUwH8`

```code
useEffect(() => {
    window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/172666ru6dsk/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer cCbgOYfI0ZiNooQc8-OJ0RzHjs8oL4LePGcz54QUwH8",
        },
        body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
        if (errors) {
            console.error(errors);
        }

        setPost(data.postCollection.items[0]);
        });
}, []);
```

After fetching datas succesfully, it is displayed on our page. (Line 98, 128, 252)
