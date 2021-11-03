---
title: "Articles"
layout: "base.njk"
---


## Latest articles

<ul>
{%- for article in collections.articles -%}
    <li><a href="{{ article.url }}">{{ article.data.title }}</a></li>
{%- endfor -%}
</ul>
