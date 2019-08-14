---
layout: leftnav-page-content
title: Brochures-Test
permalink: /resources/brochures-test
collection_name: resources

brochures:
  - title: "Commemorative Booklet: 50 Years of Quality and Standards"
  - title: "SAC Brochures"
  - title: "SAC Directory"
  
---

{::nomarkdown}
  {% assign pageBrochures = page.brochures %}
  {%- for pageBrochure in pageBrochures -%}
    <h4>{{- pageBrochure.title -}}</h4>
  {%- endfor -%}
{:/}
