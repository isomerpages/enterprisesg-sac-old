This is a supplementary guide for adding and editing content on the SAC website. Most of the general details can be found in the official [Isomer Documentation Guide](https://isomer.gov.sg/documentation/training-materials/).

# Table of Contents

* [Introduction - Why Markdown and YAML?](#introduction)
* [Adding / Editing an image](#edit-image)
* [Adding / Deleting a file](#edit-file)
* [Adding / Editing a link](#edit-link)
* [Editing content in Homepage](#edit-homepage)
* Changing content in About Page
* Changing content in Industries Page
* Changing Content in Services Page
* Changing Content in Resources Page
* Changing Content in Resources Page
* Changing Content in NewsRoom
* Changing Content in Accredited Org
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

* **Syntax for a link that opens in a new window tab:** [link name](url_link){:target="_blank"}
* **Syntax for an image link that opens in a new window tab:** [![image_name](image_link)](url_link){:target="_blank"}

<a name="edit-homepage"></a>
## Editing content in Homepage

The step-by-step guide for editing the content in Homepage is listed in [isomer markdown documentation for homepage](https://isomer.gov.sg/documentation/homepage/overview/).
