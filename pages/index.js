<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="viewport" content=
"width=device-width, initial-scale=1.0">
    <title>Redirect Example</title>
</head>
 
<body>
    <h2>Redirect Example</h2>
    <button onclick="redirectToRelativeURL()">Redirect</button>
 
    <script>
        // Function to redirect to a relative URL
        function redirectToRelativeURL() {
            // Relative URL to redirect to
            const relativeURL = 
'https://www.geeksforgeeks.org/';
            // Construct absolute URL based 
            // on the current location
            const absoluteURL = 
            new URL(relativeURL, window.location.href);
 
            // Log the absolute URL (optional)
            console.log('Redirecting to:', absoluteURL.href);
 
            // Redirect to the absolute URL
            window.location.href = absoluteURL.href;
        }
    </script>
</body>
 
</html>
