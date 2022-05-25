## JavaScript
* Run code
  * ```deno run app.js```  
  * ```deno fmt``` Lint
  
* Run code, open up your browser and go to the address 'http://localhost:port'
  * ```deno run --allow-net app.js``` then, open it.  E.g. http://localhost:80  
http the default port is 80, and for https, the default port is 443.  

* Semantics
  * ```() => {...}``` funcition e.g. 
  ```
  hello = () => {
    console.log("Hello world!");
  };
  ```

## HTML
Status codes:  
1**: Information messages (e.g. 100 "Continue")  
2**: Succesful events (e.g. 200 "OK")  
3**: Additional actions required from the client (e.g. 301 "Moved Permanently", which often is accompanied by a header that tells the new location, which the client then can retrieve)  
4**: Error in the request or other issues (e.g. 401 "Not Authorized" and 404 "Not Found")  
5**: Error on the server e.g. 500 "Internal Server Error")  

