---
layout: index.layout.html
title: Samyak's Afterthoughts
---

# Samyak's Afterthoughts

---

Hello, World! - This is the line that results from the first program many of us write, well look where we are now.

Anyways, here are some afterthoughts:

{% assign currentYear = "" %}

{% for post in collections.posts reversed %}

{% assign postYear = post.date | date: "%Y" %}

{% if postYear != currentYear %}

## {{ postYear }}

    {% assign currentYear = postYear %}

{% endif %}

- [{{ post.data.title }}]({{ post.url }}) — {{ post.data.description }}

{% endfor %}
