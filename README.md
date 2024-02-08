# PROXY PILOT

A Node proxy server that intercept any HTTP request and redirect you to a custom landing page.

To intercept HTTP requests first you will have to configure the system proxy settings, you can set up your server as a local proxy server and configure your browser to use it.

Here's how you can do it:

1. Start your proxy server on your local machine. Make sure it's listening on port 8080.

2. Open your browser's network settings. In Chrome, for example, you can go to Settings > Advanced > System > Open your computer's proxy settings.

3. In your computer's proxy settings, configure your browser to use a manual proxy configuration. Enter localhost as the proxy server address and 8080 as the port.

4. Save the settings and close the dialog.

Now, your browser should be configured to use your local proxy server for all HTTP requests. When you enter a URL in the browser, it will go through your proxy server, allowing you to intercept and modify the requests as needed.

Now open you terminal navigate to where you have the project and run: `npm start`
