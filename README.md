# firecloud
fluffy duff to shield you from the heat

## Now the real explanation for this project...

We started with a solid plan on how to tackle the challenge. Tae had experience with iOS development so he assigned himself to that side of the tasking while Jeroen prepared the Firebase realtime backend and the Angular frontend. Through persistent Googling and a steady supply of sugar and caffeine, the iOS app was able to communicate flawlessly with the web interface and show data points on the map near-real time (internet connectivity was a pain point for us).


The iOS app was designed with two functions in mind. On the one hand, the app is expected to provide a quick overview of the current situation. Nearby fires hotspots, displaced civilians, and more are all easily visible. On the other hand top of that we built functionality to allow the user to report new fires, missing friends and family, and locate the nearest safe zone. Through an intuitive design, we were able to convey functionality without hindering the user experience.


The web application was built using Angular 5 on top of core HTML and CSS code. The page is designed with the focus on allowing the user to get a quick glance of what's going on. A live map with clearly indicated fire areas, volunteers, and people in need of assistance covers the majority of the screen, while the bottom half is composed of four tables. These tables consist of announcements listed in order with the newest on top, a list of fires as well as the severity of each hearth, a list of people marked as missing and their current status, and a list of safe zones complete with capacity and occupancy numbers.


The whole project comes together through the use of Firebase (a Google Cloud product) which provides realtime data communication across all platforms. From iOS to web to the control panel, the data is transmitted quickly and efficiently. Additionally, this platform was chosen because of its ability to scale. While our demo only includes a handful of records in each table, we're only skimming the potential of this platform.


While the realtime applications are certainly handy during the event, the data collected and stored in the database will prove very useful for analysis later on. From the ability to watch the progress of the firemen to the areas covered and most affected, the data can be put to use for educational and evaluational purposes after the facts.


Potential candidates for improvements are plentiful. One aspect we were keen on trying to make work but failed to materialize was the ability to use the new Apple watch (series 4) and use the heartbeat sensor as well as the GPS module as sensors to provide realtime information about the condition of the brave men and women battling the blazes. Alerts can be broadcast should someone's heart rate slow down or speed up to a dangerous rhythm, which because of the realtime data transfer will enable a faster response time for medical personnel and thus the saving of previous lives. Other improvements include real time analytics to predict burn paths based on weather conditions and other data sources.
