
TOKEN="FIXME"
curl -G https://www.strava.com/api/v3/activities -H "Authorization: Bearer $TOKEN" > listactivities.json

#curl -G https://www.strava.com/api/v3/activities/405308582 -H "Authorization: Bearer $TOKEN" > testactivity.json

# curl -G https://www.strava.com/api/v3/segment_efforts/9720082742 -H "Authorization: Bearer $TOKEN" > testeffort.json

# curl -G https://www.strava.com/api/v3/activities/405308582/streams/heartrate -H "Authorization: Bearer $TOKEN" > teststream.json

# curl -G https://www.strava.com/api/v3/segment_efforts/123/streams/latlng -H "Authorization: Bearer $TOKEN" -d resolution=low
