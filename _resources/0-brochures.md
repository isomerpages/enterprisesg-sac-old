---
layout: leftnav-page-content
title: Brochures
permalink: /resources/brochures
collection_name: resources

##################################################################
# Comment: Edit the data below to edit the content for this page #
##################################################################
brochures:
  imgFolderPath: /images/brochures/
  docFolderPath: /files/brochures/
  categories:

    - title: "Commemorative Booklet: 50 Years of Quality and Standards"
      list:    
      - img: Comm-Book-2016.png
        url: https://share-intranet.enterprisesg.gov.sg/ac/DocLib/Restricted/Events/QS%20Conference/50th%20QS%20Anniversary%20Celebration%20July%202016/Commemorative%20Booklet/QE%20Ann%20Book-Landscape-V19-Final2-13Jul-midres.pdf
 
    
    
    
    - title: "Commemorative Booklet: 50 Years of Quality and Standards"
      list:    
      - img: Comm-Book-2016.png
        url: https://spring.enterprisesg.gov.sg/Resources/Documents/50_years_of_quality_and_standards/web/html5/index.html
    - title: "SAC Brochures"
      list:    
      - name: "SAC Booklet"
        img: SAC-Booklet.jpg
        doc: SAC-Booklet.pdf
      - name: "Accreditation Scheme for Laboratories"
        img: Laboratories.jpg
        doc: SAC-Brochure-Accreditation-Scheme-for-Laboratories.pdf
      - name: "Accreditation Scheme for Inspection Bodies"
        img: Inspection.jpg
        doc: SAC-Brochure-Accreditation-Scheme-for-Inspection-Bodies.pdf 
      - name: "Accreditation Scheme for Management System Certification Bodies"
        img: Certification.jpg
        doc: SAC-Brochure-Accreditation-Scheme-for-Managament-System-Certification-Bodies.pdf 
      - name: "Accreditation Scheme for Management System Personnel Certification Bodies"
        img: Personnel.jpg
        doc: SAC-Brochure-Accreditation-Scheme-for-Product-Certification-Bodies.pdf
      - name: "Good Laboratory Practice Compliance Programme"
        img: GLP.jpg
        doc: SAC-Brochure-Good-Laboratory-Practice-Compliance-Programme.pdf 
      - name: "Accreditation Scheme for Personnel Certification Bodies"
        img: Personnel.jpg
        doc: SAC-Brochure-Accreditation-Scheme-for-Personnel-Certification-Bodies.pdf
      - name: "Accreditation Scheme for Proficiency Testing Providers"
        img: Proficiency.jpg
        doc: SAC-Brochure-Accreditation-Scheme-for-Proficiency-Testing-Providers.pdf 
      - name: "SAC Accreditation Marks"
        img: SAC-Brochures-SAC-Accreditation Marks.jpg
        doc: SAC-Brochure-SAC-Accreditation-Mark.pdf 
      - name: "SAC Accreditation Programmes for the Building and Construction Industry"
        img: SAC-Brochures-Building_Construction.PNG
        doc: SAC-Accreditation-Programmes-for-the-Building-and-Construction-Industry.pdf   
    - title: "SAC Directory"
      list:    
      - img: SAC-Directory-Cover-1617.png
        doc: SAC-Directory-16-17-Final.pdf
    - title: "Other Brochures"
      list:    
      - name: "World Accreditation Day 2018"
        url: http://ilac.org/news-and-events/world-accreditation-day/    
      - name: "ILAC brochures"
        url: https://ilac.org/publications-and-resources/ilac-promotional-brochures/    
      - name: "IAF brochures"
        url: https://www.iaf.nu/articles/Promotional_Documents/300
 
###############
# End of Data #
###############
---

<!-- the code below is used to create HTML tables and populate with the brochures data listed above -->
{::nomarkdown}

{% assign pageBrochures = page.brochures %}
{% for category in pageBrochures.categories %}
  <h4 style="padding-left:1rem;">{{- category.title -}}</h4>
  <hr/>
  {% unless category.list == empty  %}
    {% assign sample = category.list | first %}
    {% if sample.img %}
      <table class="brochures-table">
        {% for item in category.list %}
          {% assign image = pageBrochures.imgFolderPath | append: item.img %}
          {% if item.doc %}
              {% assign link = pageBrochures.docFolderPath | append: item.doc %}
            {% else if item.url %}
              {% assign link = item.url %}
            {% else %}
              {% assign link = '' %}
          {% endif %}
          {% assign temp = forloop.index | minus: 1 | modulo: 3 %}
          {% if temp == 0 %}
            {% if forloop.first == false %}
              </tr>
            {% endif %}
            <tr>
          {% endif %}
          <td><a href="{{- link -}}" target="_blank"><img src="{{- image -}}" />{% if item.name %}{{- item.name -}}{% endif %}</a></td>
          {% comment %} if there are less than 3 table cells for the entire table, populate with empty cells {% endcomment %}
          {% if forloop.last == true and forloop.index < 4 %}
            {% assign temp = 3 | minus: forloop.index %}  
            {% for i in (1..temp) %}
               <td></td>                                 
            {% endfor %}                                      
            </tr>
          {% endif %}
        {% endfor %}
      </table>
    {% else %}
      <ul>
        {% for item in category.list %}
          {% if item.url %}
              {% assign link = item.url %}
            {% else if item.doc %}
              {% assign link = pageBrochures.docFolderPath | append: item.doc %}
            {% else %}
              {% assign link = '' %}
          {% endif %}
          <li><a href="{{- link -}}" target="_blank">{% if item.name %}{{- item.name -}}{% endif %}</a></li>
        {% endfor %}
      </ul>
    {% endif %}
  {% endunless %}
{% endfor %}

{:/}
