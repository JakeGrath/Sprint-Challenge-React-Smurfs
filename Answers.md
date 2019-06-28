1.  Explain the differences between `client-side routing` and `server-side routing`.

    Client side routing allows us to update and render portions of a webpage without having to refresh the page.
    It makes for a smoother user experience, since the data is being loaded in at once, and selectively displayed.

    Server sided routing is where the server handles what displays on the web page and has to send that data back
    to the user's client. You can tell a webpage is using server sided routing when the whole page has to refresh/load
    when navigating. 

1.  What does HTTP stand for?

    HyperText transfer protocol.

1.  What does CRUD stand for?

    This is the 4 basic functions of persistent storage.
    C- Create - Adds data to storage.
    R- Read - Reads data from storage.
    U- Update - Updates existant data in storage.
    D- Delete - Removes data from storage.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    POST - Success: 201. Failure: 404, 409.
    GET - Success: 200. Failure: 404.
    PUT - Success: 200. Failure: 204, 404.
    DELETE - Success: 200. Failure: 404.

    Source - https://www.restapitutorial.com/lessons/httpmethods.html


1.  Mention three tools we can use to make AJAX requests

    Fetch(Not universally supported)
    Axios
    Http