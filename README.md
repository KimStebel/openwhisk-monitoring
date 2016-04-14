# Basic server monitoring with OpenWhisk

I've created this example to monitor the status of a [tmpnb](https://github.com/jupyter/tmpnb) server I'm running, but it can easily be modified to monitor any HTTP server.

## Deploy

 * Sign up for [OpenWhisk](http://www.ibm.com/cloud-computing/bluemix/openwhisk/).
 * [Install the cli.](https://console.ng.bluemix.net/openwhisk/cli)
 * Sign up for a postmark account (or use a different email service and change the mailing code in monitor.js).
 * Place the postmark token into a file named `secret` with the following content:
```
POSTMARK_TOKEN='....'
```
 * run `./setup`
 
## Known issues

Currently each trigger can be executed a maximum of 10000 times. If you execute a trigger every 10 minutes, that will only last a bit over 2 months. After that, a new trigger will have to be created. 
