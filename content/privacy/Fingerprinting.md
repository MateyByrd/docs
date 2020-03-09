---
title: Fingerprinting
icon: /img/fingerprint-icon.png
img:
---
Over the last years we have seen many aggressive efforts from different companies (Apple, Mozilla) to limit the amount of tracking that can be done through browsers[^nytimes]. 
Because of these efforts advertisers had to find different ways to track users across the web.

The approach of fingerprinting is using different difficult to hide data-points from a user to identify him/her again on a next visit. 
In contrast to tracking an ip-address or your browsing mode, using this method of tracking, you give "*innocent-looking but largely unchanging technical information about your computer, such as the resolution of your screen, your operating system or the fonts you have installed*"[^washington-post]. 
Together this data creates a profile of your device through which you can be recognised even when hiding your ip-address (through a VPN). 
This does not mean the platforms that are incorporating fingerprinting are able to identify you personally, they are able to identify your device, however if they find your personal identity they are able to combine this to the fingerprint.

The practice relies on whether it can collect enough unique data-points from you such that from all the visitors it can always recognise you. 
A website that allows you to get some insight in how unique your device is is [panopticlick](https://panopticlick.eff.org/tracker) (when you look at the detailed report it shows how unique your instance is, according to its data). 
The technique is much more intrusive than tracking users with cookies as it cannot be disabled by the user.

Fingerprinting is not only used on the web, also apps installed on your phone can collect data about your device (usually even more than a webpage would be able to) and use this to create a fingerprint.

### Using it for good

According to the Washington Post article some companies like Chase, Wells Fargo, Airbnb, Best Buy, eBay and Marriott argue that they use fingerprinting to increase security, to prevent fraud and piracy

### What's the harm?

After all this, what is the actual harm that this tracking could do? 
Here the same argument applies as with any form of tracking. 
The data collected about you can be used to harm or exploit you, if not now it could happen in the future. 
As described from an interview with Patrick Jackson in the Washington Post: “*Data collected today can be used against us today, tomorrow or even 10 years from now ... Your browsing history, the apps you use and the data you give companies can lead to voter manipulation, targeted behaviour modification, and further aids the mass surveillance of our activities on and offline.*”[^washington-post]

### How to fight against it?

Disabling fingerprinting isn't as easy as blocking cookies or changing settings in your browser. 
It is possible to make it harder to fingerprint you by increasing the amount of similarities with other devices. 
Browsers such as Safari are doing this by limiting the amount of data websites can gather about your device. 
For more information you can take a look at the article by the New York Times[^nytimes].

[^washington-post]: [Washington Post, 2019](https://www.washingtonpost.com/technology/2019/10/31/think-youre-anonymous-online-third-popular-websites-are-fingerprinting-you/)
[^nytimes]: [New York Times, 2019](https://www.nytimes.com/2019/07/03/technology/personaltech/fingerprinting-track-devices-what-to-do.html)