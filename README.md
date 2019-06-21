This is a supplementary guide for adding and editing content on the SAC website. Most of the general details can be found in the official <a href="https://isomer.gov.sg/documentation/training-materials/" target="_blank">Isomer Documentation Guide</a>.

<a href="https://isomer.gov.sg/documentation/training-materials/" target="_blank">Isomer Documentation Guide</a>

<a href="https://isomer.gov.sg/documentation/training-materials/" target=&quot;_blank">Isomer Documentation Guide</a>

[Isomer Documentation Guide](https://isomer.gov.sg/documentation/training-materials/){: target="_blank"}

# Table of Contents

* [Introduction - Why Markdown and YAML?](#introduction)
* [Adding / Deleting a Document File](#edit-file)
* [Adding / Editing a Link](#edit-link)
* [Adding / Editing an Image](#edit-image)
* [Adding / Editing a Table](#edit-table)
* [Editing the Homepage](#edit-homepage)
* [Editing the Navigation Bar](#edit-nav)
* [Editing the Content of About Pages](#edit-about)
* [Editing the Content of Industries Pages](#edit-industries)
* [Editing the Content of Services Pages](#edit-services)
* [Editing the Content of Resources Pages](#edit-resources)
* [Editing the Content of Newsroom Pages](#edit-newsroom)
* [Editing the Content of Accredited Org Pages](#edit-accredited)
* [Editing the Content in Contact Us Page](#edit-contact)

<a name="introduction"></a>
## Introduction - Why Markdown and YAML?

Traditionally, in order to edit a website, one had to write in pure HTML. This is challenging for website administrators who had limited experience with HTML as it is not immediately readable or intuitive to non-experienced users. 

Our team decided to go with Markdown (.md) – more human readable syntax – so as to empower non-technical website administrators.

While Markdown is appropriate for writing long segments of text, it alone does not allow users to edit small details of the website (e.g. change the hero-banner image) without diving into the HTML.

We therefore chose to supplement the Markdown syntax with YAML (.yml) – yet another human readable syntax.

Please refer to the [Isomer markdown documentation](https://isomer.gov.sg/documentation/markdown/markdown-usage/) to learn more about Markdown syntax.

<a name="edit-file"></a>
## Adding / Deleting a Document File

Document files (PDF, Doc files) for the website are all stored in the 'files' folder of the Github repository and are organized in their respective folders. The step-by-step guide for adding / deleting a document file are listed in [Isomer documentation for github repository](https://isomer.gov.sg/documentation/github-repository/overview/).

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

The markdown syntax for a direct link is explained in the [Isomer markdown documentation](https://isomer.gov.sg/documentation/markdown/markdown-usage/). All links (including image links are written relative to the base url, so the full link 'https://isomer-sac-demo-staging.netlify.com/about/our-role' can be written as '/about/our-role' in the Github file.  

For this website, **most of the links open in a new window tab**. So we add an additional link attribute `{:target="_blank"}` after the inline link.

* **Syntax for a link that opens in a new window tab:** 
```
[url-name](url-link){:target="_blank"}
```
* **Syntax for an image link that opens in a new window tab:** 
```
[![image-name](image-link)](url-link){:target="_blank"}
```

<a name="create-bookmark"></a>
### Creating a Bookmark Link

HTML bookmarks are used to allow readers to jump to specific parts of a Web page.

To make a bookmark, you must first create the bookmark, and then add a link to it. When the link is clicked, the page will scroll to the location with the bookmark.

First, create a bookmark with the id attribute `{: #custom-id}` which is written as a custom ID attribute before or after the inline header / paragraph / link etc in Markdown:
```
{: #header-1}
## header 1

{: #my-paragraph}
this is a paragraph

# custom ID can also be added after the inline header / paragraph / link
[url1-name](url1-link){: #url1}

```

Then, add a link to the bookmark ("Jump to Header 1"), from within the same page:
```
[Jump to Header 1](#header-1)
```

Or, add a link to the bookmark ("Jump to Header 1"), from another page:
```
[Jump to Header 1](/about/our-role#header-1)
```

<a name="edit-image"></a>
## Adding / Editing an Image

Images for the website are all stored in the 'images' folder of the Github repository and are organized in their respective folders. The step-by-step guide for adding / deleting an image are listed in [Isomer markdown documentation for Github repository](https://isomer.gov.sg/documentation/github-repository/overview/).

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

### Customising an Image

Images are displayed in their full width and height in the centre of each page by default. To edit the image size or alignment, additional attributes can be added after the inline image link.

* Change the image or height of the image:  
```
![image-name](image-link){: style="width:130px;height:130px;"}
```

* Change the alignment (add 'margin-left:0' to align left or 'margin-right:0' to align right ) of the image:  
```
![image-name](image-link){: style="margin-left:0;"}
```

* Multiple attributes can be combined to edit the image:  
```
![image-name](image-link){: style="margin-left:0;width:130px;height:130px;"}
```

* To display 2 images side-by-side, we place them in a table as shown below:  
```
| ![image-name](image-link) | ![image-name](image-link) |
```

* To add an image caption below the image, we enclose the caption text with asterisk (*) as an italic text as shown below:
```
![image-name](image-link)
*Image Caption Text*
```

<a name="edit-table"></a>
## Adding / Editing a Table

The SAC website contains several tables which can be added / edited using Markdown. Alternatively, the tables can be created using conventional HTML syntax as demonstrated in the [Isomer documentation guide here](https://isomer.gov.sg/documentation/markdown/markdown-helper/).

### Using Markdown Tables
If using markdown syntax to create the table, the markdown guide can be found [here](https://kramdown.gettalong.org/syntax.html#tables). In general, the basic syntax for a markdown table is show below:  

* Basic Markdown table syntax
```
| row-1/column-1 | row-1/column-2 |
| row-2/column-1 | row-2/column-2 |
```
* Basic Markdown table with header syntax:
```
| header/column-1 | header/column-2 |
|--
| row-1/column-1 | row-1/column-2 |
| row-2/column-1 | row-2/column-2 |
```
* Basic Markdown table with footer syntax:
```
| row-1/column-1 | row-1/column-2 |
| row-2/column-1 | row-2/column-2 |
|==
| footer-row |
```

Table cells containing multiple lines (such as lists or paragraphs) require inline HTML syntax as Markdown tables do not have support for multiple lines.

* Table with multiple lines (the `<br/>` HTML tag refers to a 'line break' which essentially creates a new line)
```
| row-1/column-1 | row-1/column-2/line1<br/>row-1/column-2/line2<br/>row-1/column-2/line3 |
| row-2/column-1 | row-2/column-2/line1<br/>row-2/column-2/line2 |
```

* Table with lists require the `{::nomarkdown}` attribute tag so that any content within the `{::nomarkdown}{:/}` tags are interpreted as HTML syntax. Un-ordered lists in HTML open with `<ul>` and close with `</ul>`. Ordered lists in HTML open with `<ol>` and close with `</ol>`. Each item in the list opens with `<li>` and closes with `</li>`.
```
| row-1/column-1 | {::nomarkdown}<ul><li>item1</li><li>item2</li><li>item3</li></ul>{:/} |
| row-2/column-1 | row-2/column-2/line1<br/>row-2/column-2/line2 |
```

Tables are styled according to the default Isomerpages template. For certain customised tables in the SAC website, customisation names (or HTML classnames) like `{: .customised-table-name}` or `{: #customised-table-unique-identifier}` are used in conjunction to style the tables, and are placed in front of the Markdown table syntax.

```
{: .groups}
| row-1/column-1 | row-1/column-2 |
| row-2/column-1 | row-2/column-2 |
```

<a name="edit-homepage"></a>
## Editing the Homepage

The step-by-step guide for editing the content in Homepage is listed in [Isomer documentation for homepage](https://isomer.gov.sg/documentation/homepage/overview/).

The index.md file lists the type of Isomerpages layout template used for the homepage, the homepage title and the homepage url link that will appear in the user's Web browser.

To edit the content in homepage, edit the 'homepage.yml' file in the _data folder of the repository. Other sections can be added and deleted from the homepage. (Refer to the [homepage.yml](https://github.com/isomerpages/isomerpages-template/blob/master/_data/homepage.yml) and its [staging website homepage](https://github.com/isomerpages/isomerpages-template/blob/master/_data/homepage.yml) of isomerpages-template for an example).

_For faster loading speeds, try to keep the image size to a maximum of a few hundred kb._

### Editing Programmes Section (a.k.a 'About / What is Accreditation?' Section)
The programmes section of the homepage can be edited similarly by editing the programmes.yml file in the _data folder.

The carousel portion of the programmes section can be hidden or shown using these steps:

1. Select your "Staging" Branch in the repository
2. Go into the "misc" folder
3. Edit the custom.scss file
4. Search for the ".programme-container" code block. Change the "display" attribute to to show or hide the carousel. 
```
.programme-container {
	display: none; //hides the programmes section carousel
}
```

```
.programme-container {
	display: block; //displays the programmes section carousel
}
```

5. Click on "Commit changes" button to save.

### Editing Newsroom Section (a.k.a Resources in the Isomerpages template) in Homepage
The 'Newsroom' page in the SAC website is linked to the 'newsroom' (which has been renamed from 'resources' under Isomerpages template) portion in the homepage. The steps for editing this portion in the homepage  is listed in the official [Isomer documentation](https://isomer.gov.sg/documentation/homepage/changing-resources-section/).

<a name="edit-nav"></a>
## Overview of the Navigation Bar
Each navigation link in the top navigation bar has a corresponding markdown file in the main folder of the Github Repository (e.g. about.md links to the 'About' navigation link) **except for the Newsroom navigation link**. The Github Repository also contains seperate folders that contain the files for each of the sub-links under the top navigation links. 

The _navigation.yml file in the _date folder of the Github Repository lists the full list of the titles and urls of the top navigation links and sub-links, and the _config.yml file lists the 'collection name' for each of the top navigation link (under the section 'collections:'), which has to be consistent in the top header code snippet for all the sub-link pages.

The step-by-step guide for editing the top navigation bar is listed in [Isomer documentation for Navbar and Footer](https://isomer.gov.sg/documentation/navbar-and-footer/overview/).

<a name="edit-about"></a>
## Editing the Content of About Pages

The about.md file lists the type of Isomerpages layout template used for the 'About' navigation/overview page, the title and the page url link that will appear in the user's Web browser. The collection_name displays the top name in the left navigation section of each subsequent 'About' sub-link page in the collection. The breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website, like this:
	
> Home / About / Our Role

The _about folder contains the files of all the sub-links in the 'About' page. The name of each file is preceded with a numbering system  (e.g. '00-our-role.md') so that the desired order of the sub-link pages can be displayed in the left navigation section of each page. Files which have alphabets after the numbers (e.g. '03a-council-committees.md') are second-level inner sub-link pages.

Most of the pages follow the Isomerpages leftnav-page-content template layout. More details for editing each page can be viewed in the official [Isomer documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).

### Editing Videos in 'Collaborations And Recognitions' / 'Working with Regulators' Page
The 'Collaborations And Recognitions' and 'Working with Regulators' pages contain videos which use HTML syntax and a customised name ('bp-youtube') for styling purposes. To edit the video link, change the 'src' attribute within the `<iframe></iframe>` tags as shown below.
```
<div class="bp-youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4bbuKr3lweQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```
More information on adding a youtube video can be found in the [Isomer documentation here](https://isomer.gov.sg/documentation/markdown/markdown-helper/).

### Editing Table in 'Mutual Recognition Arrangement' Page
The 'Mutual Recognition Arrangement' page contains a table for the list osf MRAs. The table has been customised and the customisation name (which also acts as the unique identifier) has been added before the Markdown table syntax, as shown below:
```
{:#mra-table}
| ![mra1-image-name](mra1-image-link){: style=""} mra1-description | {::nomarkdown}<ul><li>mra1 timeline1</li><li>mra1 timeline2</li></ul>{:/} |
| ![mra2-image-name](mra2-image-link){: style=""} mra2-description | {::nomarkdown}<ul><li>mra2 timeline1</li><li>mra2 timeline2</li></ul>{:/} |
```

Essentially, the `{:#mra-table}` unique customisation contains alignment information for the MRA logo images, descriptions and ordered timelines in each table cell. The customisation can be edited using the steps:

1. Select your "Staging" Branch in the repository
2. Go into the "misc" folder
3. Edit the custom.scss file
4. Search for the "#mra-table" code blocks. Change the attributes by amending the section within the code blocks

```
# Sample custom.scss file section for reference
table {
	#mra-table {
	//edit code here
	...
	}
}
```
		
5. Click on "Commit changes" button to save.

The `{::nomarkdown}{:/}` tags are used so that the content within the tags are interpreted as HTML syntax. Refer to [Adding / Editing a Table](#edit-table) for more details.

### Editing 'Our Organisation and Structure' Page 
The 'Our Organisation and Structure' page uses the Isomerpages 'our-team' template layout. The content for the page can be edited by editing the 'our-team.yml' file in the _data folder. 

The 'Organisation Chart' section has been renamed from the 'Board-of-Directors' section in the Isomerpages template, and was customised with specific code. It can be edited using the steps:

1. Select your "Staging" Branch in the repository
2. Go into the "misc" folder
3. Edit the custom.scss file
4. Search for the "#board-of-directors::before" code block. Change the "background-image" attribute to to change a new image path for the chart. 
```
#board-of-directors{
	background-image: url(/images/about/our-organisation-structure/SAC-Org-Chart-August2018.png); //image path for the chart
	...
	...
}
```
5. Click on "Commit changes" button to save.

The 'SAC Council' section has been renamed from the 'Senior-Leadership' section in the Isomerpages template. It lists the names, titles, organisations and image-urls of council members that can be edited inside 'our-team.yml' (under 'senior-leadership:').

The 'Organisational Structure' section contains names and links of SAC committee members that can be edited in 'our-team.yml' (under 'organisational-structure:'). The links are essentially **bookmark links** that allow users to jump to a specific location of another webpage within the website (See ['Creating a Bookmark Link'](#create-bookmark) for more details). 

### Editing Committee Pages

The various committee pages contain several tables listing the details of the committee members, as well as bookmark links that allow users to jump to specific locations of the same page. Please go to ['Adding /Editing a table'](#edit-table) for more information on writing a table in Markdown and ['Creating a Bookmark Link'](#create-bookmark) for more information on bookmark links.

<a name="edit-industries"></a>
## Editing the Content of Industries Pages

The industries.md file lists the type of Isomerpages layout template used for the 'Industries' navigation/overview page, the title and the page url link that will appear in the user's Web browser. The collection_name displays the top name in the left navigation section of each subsequent 'Industries' sub-link page in the collection. The breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website, like this:
	
> Home / Industries / Food

The _industries folder contains the files of all the sub-links in the 'Industries' page. The name of each file is preceded with a numbering system  (e.g. '01-aviation-and-aerospace.md') so that the desired order of the sub-link pages can be displayed in the left navigation section of each page.

Most of the pages follow the Isomerpages leftnav-page-content template layout. More details for editing each page can be viewed in the official [Isomer documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).

### Editing Table in Each Industry Page
Each page in the Industries category contains a Markdown table that lists the relevant accreditation schemes and their related fields. The table has been customised and the customisation name (or HTML 'classname') is added before each Markdown table syntax, as shown below:
```
{:.groups}
| Scheme  | Field          |
|---
| scheme1 | scheme1-field1 |
|         | scheme1-field2 |
|---
| scheme2 | scheme2-field1 |
|         | scheme2-field2 |
```

The `|---` syntax is used to denote a separator line, which splits the table body into multiple body parts. The 'groups' customisation name or classname is then used to style all the related table cells for each table body part. The customisation can be edited using the steps:

1. Select your "Staging" Branch in the repository
2. Go into the "misc" folder
3. Edit the custom.scss file
4. Search for the ".groups" code block. Change the attributes by amending the section within the code block:

```css
# Sample custom.scss file section for reference

table {
	&.groups {
			//edit attributes here
			...
		}
```

5. Click on "Commit changes" button to save.

<a name="edit-services"></a>
## Editing the Content of Services Pages

The services.md file lists the type of Isomerpages layout template used for the 'Services' navigation/overview page, the title and the page url link that will appear in the user's Web browser. The collection_name displays the top name in the left navigation section of each subsequent 'Services' sub-link page in the collection. The breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website, like this:
	
> Home / Services / Accreditation Services

The _services folder contains the files of all the sub-links in the 'Services' page. The name of each file is preceded with a numbering system  (e.g. '0-overview.md') so that the desired order of the sub-link pages can be displayed in the left navigation section of each page. Files which have alphabets after the numbers (e.g. '0a-auditing-organisation.md') are second-level inner sub-link pages.

Most of the pages follow the Isomerpages 'leftnav-page-content' template layout. More details for editing each page can be viewed in the official [Isomer documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).

### Editing Tables in 'Accreditation Services -> Certification Body' Inner Page
The page contains standards tables listing the programme details of the accreditation services available for creditation bodies. If using markdown syntax for tables (instead of the conventional HTML syntax), markdown tables which contain bulleted lists must make use of the `{::nomarkdown}{:/}` tags so that the content within the tags are interpreted as HTML syntax. Refer to [Adding / Editing a Table](#edit-table) for more details.

### Editing 'Training Services - Recent Courses / Workshops / Seminars' Page
The 'Recent Courses / Workshops / Seminars' page contains a table listing the date and title of the latest training courses. Each entry in the 'title' column is linked to a course details page that can be edited by editing the corresponding file in the newsroom/courses/_posts folder. New courses can be added by creating a new file in that folder (see the [Isomer documentation on creating a new post](https://isomer.gov.sg/documentation/resources/creating-a-new-post/) for more details).

The link below the table links to a full list of the training courses(i.e. all the files in the newsroom/courses/_posts folder).

<a name="edit-resources"></a>
## Editing the Content of Resources Pages

The resources.md file lists the type of Isomerpages layout template used for the 'Resources' navigation/overview page, the title and the page url link that will appear in the user's Web browser. The collection_name displays the top name in the left navigation section of each subsequent 'Resources' sub-link page in the collection. The breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website, like this:
	
> Home / Resources / Brochures

The _resources folder contains the files of all the sub-links in the 'Resources' page. The name of each file is preceded with a numbering system (e.g. '0-brochures.md') so that the desired order of the sub-link pages can be displayed in the left navigation section of each page. Files which have alphabets after the numbers (e.g. '1b-certification-body-accreditation.md') are second-level inner sub-link pages.

Most of the pages follow the Isomerpages leftnav-page-content template layout. More details for editing each page can be viewed in the official [Isomer documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).

### Editing 'Brochures' Page
The Brochures page contains a table for each brochure category. The table has been customised and an attribute list of the customisation names (or HTML 'classnames') are added before each Markdown table syntax, as shown below:
```
{:.brochures-table}
| [![brochure1-image-name](brochure1-image-link) brochure1-title](brochure1-url-link){:target="_blank"} | [![brochure2-image-name](brochure2-image-link) brochure2-title](brochure2-url-link){:target="_blank"} |
```

Essentially, the 'brochures-table' customisation contains styling information for aligning the brochure images and titles in each table cell. The customisation can be edited using the steps:

1. Select your "Staging" Branch in the repository
2. Go into the "misc" folder
3. Edit the custom.scss file
4. Search for the ".brochures-table" code block. Change the attributes by amending the section within the code blocks

```css
# Sample custom.scss file section for reference

table {
	&.brochures-table {
		//edit attributes here
	}
```

5. Click on "Commit changes" button to save.

### Editing 'How to use SAC / ILAC / IAF Marks' Page
This page contains tables for some of the images that are aligned side-by-side. In addition, the tables have been customised and the 'image-caption-table' customisation name (or HTML 'classname') is added before each Markdown table syntax, as shown below:
```
{: .image-caption-table}
|![SAC-mark1-image-name](SAC-mark1-image-link) | ![SAC-mark2-image-name](SAC-mark2-image-link) |
| SAC-mark1-caption | SAC-mark2-caption |
```

Essentially, the 'image-caption-table' customisation contains styling information for aligning the SAC mark images and captions in each table cell. The customisation can be edited using the steps:

1. Select your "Staging" Branch in the repository
2. Go into the "misc" folder
3. Edit the custom.scss file
4. Search for the ".image-caption-table" code block. Change the attributes by amending the section within the code blocks

```css
# Sample custom.scss file section for reference

table {
	&.image-caption-table {
		//edit content here
		...
	}
}
```

5. Click on "Commit changes" button to save.

### Editing 'FAQ' Page
The FAQ page follows the customised 'FAQ' template layout. The data in the FAQ page can be edited in the 'faq.yaml' file of the '_data' folder.

1. Select your "Staging" Branch
2. In your repository, go to "_data" folder
3. Edit faq.yaml file
4. Change the content by amending the section below inside faq.yaml. Note that the sections have to be indented correctly or it may not be displayed on the webpage. Since the .yml file structure does not provide a lot of support for multiple paragraphs, each new line in the answers section has to be preceded with an indented 'line:' key name, followed by the data enclosed in quotation marks ('' or ""), e.g. 
```
# Sample faq.yaml file section for reference

answer: 
	- line: "**This is line 1. Markdown syntax can still be used inside here.**"
        - line: "**This is line 2.**"
        - line: '_This is line 3._'
```

5. Click on “Commit changes” button.

<a name="edit-newsroom"></a>
## Editing the Content of NewsRoom Pages
The 'NewsRoom' page in the SAC website has been renamed from the 'resources' page in the Isomerpages website template. It is also linked to the 'newsroom' (or 'resources' section in the Isomerpages template) portion in the homepage. The steps for editing this portion in the homepage  is listed in the official [Isomer documentation here](https://isomer.gov.sg/documentation/homepage/changing-resources-section/).

The 'newsroom' folder contains the index.html file, which lists the type of Isomerpages layout template used for the NewsRoom navigation/overview page, the title and the page url link that will appear in the user's web browser. The breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website.

The 'newsroom' folder also contains different category folders that correspond to the category links in the NewsRoom page, where each category folder contains the files of all the posts or articles for that category. The step-by-step guide for editing the contents in the NewsRoom page can be viewed in the official [Isomer documentation](https://isomer.gov.sg/documentation/resources/overview/). 

The category names are also listed in the resources.yml of the _data folder for better readability, and can be edited easily.
```
categories:
- category-name: newsroom # This is the Resources name: in the case of SAC, it is NewsRoom
- category-name: news-releases
- category-name: events
- category-name: videos
- category-name: case-studies
- category-name: cab-success-stories
```

<a name="edit-accredited"></a>
## Editing the Content of Accredited Org Pages

The accredited-org.md file lists the type of Isomerpages layout template used for the 'Accredited Org' navigation/overview page, the title and the page url link that will appear in the user's Web browser. The collection_name displays the top name in the left navigation section of each subsequent 'Accredited Org' sub-link page in the collection. The breadcrumb navigation provides the name of the previous page link the user navigated through, and shows the user's current location in a website, like this:
	
> Home / Accredited Org / Certified CAB Companies

The _accredited-org folder contains the files of all the sub-links in the 'Services' page. The name of each file is preceded with a numbering system  (e.g. '1-certified-cab-companies.md') so that the desired order of the sub-link pages can be displayed in the left navigation section of each page. 

The 'CAB Status Update' page follows the Isomerpages leftnav-page-content template layout. More details for editing this page can be viewed in the official [Isomer documentation for inner page](https://isomer.gov.sg/documentation/inner-page/overview/).

### Editing 'Certified CAB Companies' Page
The Certified CAB Companies Section page follows the customised 'certified-companies' template layout. The data in the page can be edited in the 'certified-companies.yml' file inside the '_data' folder.

1. Select your "Staging" Branch
2. In your repository, go to "_data" folder
3. Edit certified-companies.yml file. Note that the sections have to be indented correctly or it may not be displayed on the webpage. 
4. Click on "Commit changes" button.

<a name="edit-contact"></a>
## Editing the Content in Contact Us Page
The 'Contact Us' page uses the Isomerpages contact-us template layout. The contact-us.md file is located inside the pages folder which lists the type of Isomerpages layout template used for this page, the title and the page url link that will appear in the user's Web browser. The data in the page can be edited in the 'contact-us.yml' file inside the '_data' folder.

More details for editing this page can be viewed in the official [Isomer documentation for Contact Us page](https://isomer.gov.sg/documentation/contact-us/overview/).
