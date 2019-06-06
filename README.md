This is a supplementary guide for adding and editing content on the SAC website. Most of the general details can be found in the official [Isomer Documentation Guide](https://isomer.gov.sg/documentation/training-materials/).

# Table of Contents

* [Introduction - Why Markdown and YAML?](#introduction)
* [Adding / Editing an image](#edit-image)
* [Adding / Deleting a file](#edit-file)
* [Adding / Editing a link](#edit-link)
* [Editing content in Homepage](#edit-homepage)
* [Editing content in About Page](#edit-about)
* Changing content in Industries Page
* [Editing content in Services Page](#edit-services)
* Changing Content in Resources Page
* Changing Content in NewsRoom
* Changing Content in Accredited Org Page
* Changing Content in Contact Us

<a name="introduction"></a>
## Introduction - Why Markdown and YAML?

Traditionally, in order to edit a website, one had to write in pure HTML. This is challenging for website administrators who had limited experience with HTML as it is not immediately readable or intuitive to non-experienced users. 

Our team decided to go with Markdown (.md) – more human readable syntax – so as to empower non-technical website administrators.

While Markdown is appropriate for writing long segments of text, it alone does not allow users to edit small details of the website (e.g. change the hero-banner image) without diving into the HTML.

We therefore chose to supplement the Markdown syntax with YAML (.yml) – yet another human readable syntax.

Please refer to the [isomer markdown documentation](https://isomer.gov.sg/documentation/markdown/markdown-usage/) to learn more about Markdown syntax.

<a name="edit-image"></a>
## Adding / Editing an image

Images for the website are all stored in the 'images' folder of the Github repository and are organized in their respective folders. The step-by-step guide for adding / deleting an image are listed in [isomer markdown documentation for github repository](https://isomer.gov.sg/documentation/github-repository/overview/).

Essentially, the steps are:

1. Select your "Staging" Branch.
2. Go to the "images" folder and then select the folder the that you wish to add or delete an image.
3. To add an image:  
  a. Click on "Upload files" button.  
  b. Choose your image file. Remember to replace the space in the filename with dash (-) for better readability.  
4. To delete an image:  
  a. Go to the image file that you wish to delete.  
  b. Click on "delete" trash button.  
5. Click on "Commit changes" button.

_Image files have to be deleted and re-uploaded to Github everytime you wish to edit an image._

### Customising an image
Images are displayed in their full width and height in the centre of each page by default. To edit the image size or alignment, additional attributes can be added after the inline image link.

* Change the image or height of the image:  
```
![image name](image link){: style="width:130px;height:130px;"}
```

* Change the alignment (add 'margin-left:0' to align left or 'margin-right:0' to align right ) of the image:  
```
![image name](image link){: style="margin-left:0;"}
```

* Multiple attributes can be combined to edit the image:  
```
![image name](image link){: style="margin-left:0;width:130px;height:130px;"}
```

* To display 2 images side-by-side, we place them in a table as shown below:  
```
| ![image name](image link) | ![image name](image link) |
```

<a name="edit-document"></a>
## Adding / Deleting a file

Document files (PDF, Doc files) for the website are all stored in the 'files' folder of the Github repository and are organized in their respective folders. The step-by-step guide for adding / deleting a document file are listed in [isomer markdown documentation for github repository](https://isomer.gov.sg/documentation/github-repository/overview/).

Essentially, the steps are:

1. Select your "Staging" Branch
2. Go to the "files" folder and then select the folder that you wish to add or delete a file.
3. To add a file:  
  a. Click on "Upload files" button.  
  b. Choose your file. It can be of pdf, doc, jpg, png, gif. Remember to replace the space in the filename with dash (-) for better readability.  
4. To delete a file:  
  a. Go to the file that you wish to delete.  
  b. Click on "delete" trash button.  
5. Click on "Commit changes" button.

<a name="edit-link"></a>
## Adding / Editing a link

The markdown syntax for a direct link is explained in the isomer markdown documentation. For this website, **most of the links are opened in a new window tab**. So we add an additional link attribute {:target="_blank"} after the inline link.

* **Syntax for a link that opens in a new window tab:** 
```
[link name](url_link){:target="_blank"}
```
* **Syntax for an image link that opens in a new window tab:** 
```
[![image_name](image_link)](url_link){:target="_blank"}
```

<a name="edit-homepage"></a>
## Editing content in Homepage

The step-by-step guide for editing the content in Homepage is listed in [isomer markdown documentation for homepage](https://isomer.gov.sg/documentation/homepage/overview/).

The index.md file lists the type of isomerpages layout template used for the homepage, the homepage title and the homepage url link that will appear in the user's web browser.

To edit the content in homepage, edit the homepage.yml in the _data folder of the repository. Other sections can be added and deleted from the homepage. (Look at the [homepage.yml](https://github.com/isomerpages/isomerpages-template/blob/master/_data/homepage.yml) and its [staging website homepage](https://github.com/isomerpages/isomerpages-template/blob/master/_data/homepage.yml) of isomerpages-template for an example).

### Editing Programmes Section (a.k.a 'About / What is Accreditation?' Section)
The programmes section of the homepage can be edited similarly by editing the programmes.yml file in the _data folder.

The carousel portion of the programmes section can be hidden or shown using these steps:

1. Select your “Staging” Branch in the repository
2. Go into the “misc” folder
3. Edit the custom.scss file
4. Search for the '.programme-container' code block. Change the "display" attribute to to show or hide the carousel. 
```css
.programme-container {
	display:none; //hides the programmes section carousel
}
```

```css
.programme-container {
	display:block; //displays the programmes section carousel
}
```

5. Click on “Commit changes” button to save.

<a name="edit-about"></a>
## Editing content in About Page

The about.md file lists the type of isomerpages layout template used for the about navigation/overview page, the title and the page url link that will appear in the user's web browser. The collection_name displays the top name in the left navigation section of subsequent 'about' pages in the collection, and the breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website.
	
> Home / About / Our Role

The _about folder contains all the webpages in the 'About' section. The names of the file are preceded with a numbering system  (i.e. '00-our-role.md') so that the desired order of the pages can be displayed in the left navigation section of each page. Pages which have alphabets after the numbers (i.e. '03a-council-committees.md') are second-level inner pages.

Most of the pages follow the isomerpages leftnav-page-content template layout. More details for editing each page can be viewed in the official [isomer markdown documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).

### Editing Our Organisation and Structure Section 
The 'Our Organisation and Structure' Section uses the isomerpages our-team template layout. The content for the page can be edited by editing the our-team.yml file in the _data folder. 

The organisation chart section was customised with specific code. It can be edited using the steps:

The carousel portion of the programmes section can be hidden or shown using these steps:

1. Select your “Staging” Branch in the repository
2. Go into the “misc” folder
3. Edit the custom.scss file
4. Search for the '#board-of-directors::before' code block. Change the "background-image" attribute to to change a new image path for the chart. 
```css
#board-of-directors::before{
	background-image: url(/images/about/our-organisation-structure/SAC-Org-Chart-August2018.png); //image path for the chart
	background-size: contain;
	background-repeat: no-repeat;
	display: block;
	width: 100%;
	height: 100%;
	padding-top:50%;
	content: "";
}
```

5. Click on “Commit changes” button to save.

<a name="edit-services"></a>
## Editing content in Services Page
The services.md file lists the type of isomerpages layout template used for the about navigation/overview page, the title and the page url link that will appear in the user's web browser. The collection_name displays the top name in the left navigation section of subsequent 'services' pages in the collection, and the breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website.
	
> Home / Services / Accreditation Services

The _services folder contains all the webpages in the 'Services' section. The names of the file are preceded with a numbering system  (i.e. '0-overview.md') so that the desired order of the pages can be displayed in the left navigation section of each page. Pages which have alphabets after the numbers (i.e. '0a-auditing-organisation.md') are second-level inner pages.

Most of the pages follow the isomerpages leftnav-page-content template layout. More details for editing each page can be viewed in the official [isomer markdown documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).
