---
layout: index.layout.html
title: Samyak's Afterthoughts
---

# Samyak's Afterthoughts

---

`Hello, World!` - This is the line that results from the first program many of us write, well look where we are now.

Anyways, here are some afterthoughts:

{% assign currentYear = "" %}

{% for post in collections.posts reversed %}

{% assign postYear = post.date | date: "%Y" %}

{% if postYear != currentYear %}

## {{ postYear }}

    {% assign currentYear = postYear %}

{% endif %}

- [{{ post.data.title }}]({{ post.url }}) — _{{ post.data.description }}_

{% endfor %}

## About Me

I'm Samyak, a Computer Engineering student from Mumbai, India. I'm interested in Low-level Programming and Compiler Development.

I like metalcore (Of Mice & Men, Erra, Polaris), rock (Crazy Town, Staind, Incubus), and sometimes house music (Prospa, Fred Again). Always open to talking about anything that interests me and exploring new things as well :)

[GitHub](https://github.com/smyk07) | [e-mail](mailto:bambole@duck.com)
