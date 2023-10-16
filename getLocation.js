//get location user
var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.ipify.org?format=json', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log('Your IP address is: ' + response.ip);

                // Retrieve the country and city based on the IP address
                var xhr2 = new XMLHttpRequest();
                xhr2.open('GET', 'http://ip-api.com/json/' + response.ip, true);

                xhr2.onload = function() {
                    if (xhr2.status === 200) {
                        var data = JSON.parse(xhr2.responseText);
                        console.log('Country: ' + data.country);
                        console.log('City: ' + data.city);

                        document.getElementById('country').textContent = data.country;
                        document.getElementById('city').textContent = data.city;
                    } else {
                        console.error('Failed to retrieve country and city information.');
                    }
                };

                xhr2.send();
            } else {
                console.error('Failed to retrieve IP address.');
            }
        };

        xhr.send();

//ip can be wrong but we work on this