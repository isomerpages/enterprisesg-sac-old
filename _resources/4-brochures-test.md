---
layout: leftnav-page-content
title: Brochures-Test
permalink: /resources/brochures-test
collection_name: resources

brochures:
  - category: "Commemorative Booklet: 50 Years of Quality and Standards"
    list:    
      - name: "SAC Booklet"
        image-url: /images/brochures/SAC-Booklet.jpg
        url: /files/brochures/SAC-Booklet.pdf
      - name: "Accreditation Scheme for Laboratories"
        image-url: /images/brochures/SAC-Brochures-LA.jpg
        url: /files/brochures/SAC-Brochure-Accreditation-Scheme-for-Laboratories.pdf
  - category: "SAC Brochures"
  - category: "SAC Directory"
  
---

{% assign pageBrochures = page.brochures %}
{%- for pageBrochure in pageBrochures -%}
  <h4>{{- pageBrochure.category -}}</h4>
{%- endfor -%}
