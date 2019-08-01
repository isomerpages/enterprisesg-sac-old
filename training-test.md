---
layout: simple-page
title: test
permalink: /test
---

{%- for post in site.posts -%}
  <p>
  {{- post.title -}}&nbsp;&nbsp;
  {%- for category in post.categories -%}
  {{- category -}}&nbsp;&nbsp;
  </p>
  {%- endfor -%}
{%- endfor -%}
