# l00t

Traceroute website assets via a Chrome Extension.
Get further info on hostnames. Hunt for highscores.

## Install

- Go to Chrome > Tools > Developer Mode > Load unpacked extension
- Select this directory 

## Backend

1. `port install py27-libdnet`
2. `port install libdnet`
3. `cp /opt/local/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/site-packages/dnet.so /Library/Python/2.7/site-packages`
4. `pip install -r requirements.txt`