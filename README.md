# My-RESTful-API

- RESTful API:- So rest is just an architectural style to design API's 'REpresentationsal State Transfer'.

- In HTTP request may be somebody might hijack our card details..
That's why we can also use cryptography and encrypt our request so if anybody does intercept the request they won't be able to know what it says.

- HTTP verbs "GET POST PUT PATCH DELETE", theses verbs that we should we use to make API RESTful

- app.get(READ): We pass a callback responds the request and sends the result and request related to a database that is equivalent to searching our database and returning the data as the result

- app.post(CREATE): Whenever we created a form on our website we've used app.post and then we call back with our request and response. When data is posted to our server then we create an entry in our database and we save that data for later so, in this case, the request will contain the data and the response will simply be a success or maybe an error code if there is a problem

- The next one is PUT and PATCH and they both update our database.

- PUT: Order a new  bicycle and  some fault in their handle then we replace the entire bicycle (so updating database by sending an entry to replace to previous one)
and the other option to change a default thing only or what was the only thing that was broken and rest the bike is fine
so change the handle is much better to replace the entire bicycle so this is the same as a patch

- When you send a patch request to the server then you're only sending the piece of data that needs to be updated, instead of the entire entry that will be replaced.

- DELETE(DELETE): Just deleted or destroy a particular piece of data in our database.
