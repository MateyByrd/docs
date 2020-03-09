---
title: HTTPS
draft: false
---

> This article is mostly my summary of the Wikipedia page on HTTPS[^wikipedia-https] and TLS[^wikipedia-tls].

HTTPS is the secure version of HTTP, however I was interested in how the security of HTTPS is made up. 
HTTS is also named HTTP over TLS (previously HTTP over SSL). 
Here TLS is providing the layer of security that is supposed to protect our privacy and the integrity of the data we load and send.

## What is encrypted

Since HTTPS is HTTP over TLS we can encrypt the entire HTTP protocol. 
However for the system to be able to transmit the message to the correct destination the ip and port have to be publicly available.

When used correctly it is still possible for eavesdroppers to infer 

- the IP address and possibly the domain name (but not the entire url)
- port number
- the amount of data sent
- the length of the communication

## TLS

The security of HTTPS depends on the TLS layer, this layer typically relies on long term public key cryptography which is used to generate short term session keys for the data between client and server. 
The public key cryptography is based on certificates hosted by certificate authorities (CA's) like LetsEncrypt.

Therefore the *identity* is validated using public key cryptography and CA's, making the data *private* by using symmetric encryption based on a secret key shared using public key cryptography. 
Next to that it is *reliable* as each message includes an integrity check using MAC's.

When carefully configured TLS can even provide extra properties like *forward secrecy*, which ensures that when a key is leaked in the future they cannot be used to decrypt any TLS communications in the past.

## Correct use

It should be noted that even a single page on your website not using HTTPS introduces risks to the user.

Next to that the security depends on the key exchange algorithm, cipher and MAC used. 
This should be looked up before implementation for example on the Wikipedia article on TLS[^wikipedia-tls].

[^wikipedia-https]: [Wikipedia (HTTPS)](https://en.wikipedia.org/wiki/HTTPS)
[^wikipedia-tls]: [Wikipedia (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security)
