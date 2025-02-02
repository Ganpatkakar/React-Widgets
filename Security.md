# Bellow are the security details we need to keep an eye on

## 1. Cross site scripting attach.

Query parameter based redirct errors or in other words javascript// protocal error
Bellow is a vullnerable code

```
import React from 'react';
import {useLocation} from 'react-router-dom';

function useQueryFunc() {
  const {search} = useLocation();
  return React.useMemo(() => new UrlSearchParams(search), [search]);
}

function RedirectBasedOnHref() {
  const query = useQueryFunc();
  return (
    <div>
      <h1>Redirec to home</h1>
      <a href={query.get('redirec')}>Click to go home</a>
    </div>
  )
}
```

Now in above code at line number 15 there is an issue of a mallicious redirect to any different type of protocol
for example what if the return or query.get('redirec') param will return javascript//doSomething() is returned
which will in turn try to run a specific js function and it may run any type of arbitrary code.

How to fix this issue.
We need to alway validate the protocol of the url which we want to redirect to.

```
function RedirectBasedOnHref() {
  const query = useQueryFunc();
  const validateUrl = (url) => {
    const newURL = new URL(url);
    if (newURL.protocol === 'https:') return url;
    return '/';
  }
  return (
    <div>
      <h1>Redirec to home</h1>
      <a href={validateUrl(query.get('redirec'))}>Click to go home</a>
    </div>
  )
}
```

## 2. Server side request forgery

Imagin a scenario where an internal site of a company has some publicly available data and on an a single api response we return those api urls in a query param to be requested later from the response api.

```
// Below is server side code in node js.

api.get('/api/url', async (req, res) => {
  const requestUrl = req.query.url;
  try {

    const result = await fetch(requestUrl);
    const data = result.json();
    
    res.status(200).json({data});
  } catch (err) {
    console.log(err);
    res.status(500).json({err: err.msg});
  }
})
```

In above case imagin a scenario where user is requesting a site url which is not internal publickly available site url and they are requesting some secret information processing url.
As server is not aware of any such info so server will take that url and will try to fetch data from respective url and return in res.

In this case if server is allwoing all types of urls to be fetched from the service then there could be some othe urls can be injected to fetch the different vulenerable data from the server, because server have higher level of access to process and provide that data, which generally an outside user will not have access of.

How to fix this scenario.
We need to add a list of all the allowed urls on server to check that currently provided url is included in allowed urls list or not, before making each fetch request.

```
const allowedURLsList = ['/countriesList', '/statesList'];

// add a condition before making the api request
if (!allowedURLsList.includes(requestUrl)) {
  res.status(400).json({err: 'Bad url'});
}
```

## 3. Timing attach

In JavaScript tripple equals "===" compare strings with each charater of the both side of string. <br />
For example  <br />
"ABC"==="C" <br />
Here first charater didn't match so it will stop comparing and return false; <br />
<br />
"ABC"==="ABD" <br />
In this case first JavaScript will try to match A with A which is true, then B with B which is true and then C with D which will fail and then js will return false.
<br />
> But as we can see the second comparision will take more time as its comparing each charater, and then gives some type of indication that some process succedded and then later it failed.
  
> Now if an attacker who has all the time in world will try to match specific strings and keep note of time and see how many characters matched and can eventually arrive to a conclusion on the final string which will match.

#### This attack is called timing attach.

Here is an example of timing attach
```
export function checkToken(userSupplied) {
  const account = account.retrieveToken(userSupplied);
  if (account) {
      if (account.service.token === user.service.token) {
      return true;
    }
  }
  return false;
}
```

As you may have gussed here that comparing two token string can eventually lead to a correct result based on the timing results of api response.  
How to fix this.
```
import crypto from 'crypto';
export function checkToken(userSupplied) {
  const account = account.retrieveToken(userSupplied);
  if (account) {
    if (crypto.timingSafeEqual(account.service.token, user.service.token)) {
      return true;
    }
  }
  return false;
}
```

## 4. 
