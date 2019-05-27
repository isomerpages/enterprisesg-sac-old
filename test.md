---
layout: default
title: test
permalink: /test
---
{%- assign name = "1" -%}


<section class="bp-section is-small bp-section-pagetitle">
    <div class="bp-container">
        <div class="row">
            <div class="col">
                <h1 class="has-text-white"><b>{{- name -}}</b></h1>
            </div>
        </div>
    </div>
</section>

{::options parse_block_html="true" /}
<div markdown="1">
    ## test
    Have **fun!**
</div>
