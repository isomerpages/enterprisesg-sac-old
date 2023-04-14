---
layout: leftnav-page-content
title: Training, Courses & Seminars
permalink: /services/training/
breadcrumb: training
collection_name: services
---

<!-- COMMENT: The HTML code in between the '{::nomarkdown}{:/}' tags is used to display the table of training courses in different quarters of the different years -->
{::nomarkdown}

{%- assign posts = site.categories['courses'] -%}
{%- assign latestCourse = posts | first -%}
{%- assign latestCourseYear = latestCourse.course_date | date: '%Y' | plus:0 -%}
{%- assign earliestCourse = posts | last -%}
{%- assign earliestCourseYear = earliestCourse.course_date | date: '%Y' | plus:0 -%}
{%- assign currYear = site.time | date: '%Y' | plus:0 -%}
{%- assign temp = latestCourseYear | minus: currYear -%}
{%- if temp > 1 -%}
	{%- assign latestCourseYear = currYear | plus: 1 -%}
{%- endif -%}
{%- assign temp = currYear | minus: earliestCourseYear -%}
{%- if temp > 3 -%}
	{%- assign earliestCourseYear = currYear | minus: 3 -%}
{%- endif -%}
{%- assign numYears = latestCourseYear | minus: earliestCourseYear -%}

<div id="training-calendar">	
	<h3>TRAINING CALENDAR&nbsp;<span id="training-calendar-year-title">{{- currYear -}}</span></h3>
	<div style="padding:1rem;font-size:1rem;background-color:#ED2E38;color:#FFFFFF;">
		<span style="display:inline-block;max-width:84%;vertical-align:middle;">ENHANCING THE CAPABILITIES OF CONFORMITY ASSESSEMENT BODIES</span>
		<span style="display:inline-block;width:14%;height:50px;vertical-align:middle;background:url('/images/services/training-table-icon.png') no-repeat center center;background-size:contain;"></span>
	</div>
	{%- for i in (0..numYears) -%}
		{%- assign currCourseYear = latestCourseYear | minus:i -%}
		{%- assign filteredCourses = posts | where_exp: "item", "item.course_date contains currCourseYear" | reverse -%}
		{%- if filteredCourses and filteredCourses.size > 0 -%}
		<table id="training-table-{{- currCourseYear -}}" class="trainingCoursesTable" {%- if currCourseYear == currYear -%}style="display:table;"{%- endif -%}>
			<thead>
				<tr>
					{%- for j in (1..4) -%}
					<th style="border:0;"><p class="trainingCoursesTableHeaderBar">Q{{- j -}}</p></th>
					{%- endfor -%}
				</tr>
			</thead>						
			<tbody>
				<tr>
					{%- assign currentQuarter = 0 -%}
					{%- assign currentQuarterEnd = currentQuarter | times: 3 -%}
					{%- for course in filteredCourses -%}
						{%- assign currentCourseMonth = course.course_date | date: '%m' | plus: 0 -%}
						{%- if currentCourseMonth > currentQuarterEnd  -%}						
							{%- for j in (1..4) -%}
								{%- if currentQuarter > 0 -%}</td>{%- endif -%}								
								<td>								
								{%- assign currentQuarter = currentQuarter | plus:1 -%}
								{%- assign currentQuarterEnd = currentQuarter | times: 3 -%}
									<p class="trainingCoursesTableHeaderBar">Q{{- currentQuarter -}}</p>
								{%- if currentCourseMonth <= currentQuarterEnd -%}
									{%- break -%}
								{% endif %}
							{%- endfor -%}	
						{%- endif -%}	
						<a href="{{- course.permalink -}}">
							<span style="font-weight:bold;">{{- course.title -}}</span>
							<br/>{{- course.course_date -}}
						</a>
						<br/><br/>											 
					{%- endfor -%}
					{%- if currentQuarter < 4  -%}						
						{%- for j in (1..4) -%}
							{%- if currentQuarter > 0 -%}</td>{%- endif -%}								
							<td>								
							{%- assign currentQuarter = currentQuarter | plus:1 -%}
							{%- assign currentQuarterEnd = currentQuarter | times: 3 -%}
								<p class="trainingCoursesTableHeaderBar">Q{{- currentQuarter -}}</p>
							{%- if currentQuarter >= 4 -%}
								{%- break -%}
							{% endif %}
						{%- endfor -%}	
					{%- endif -%}	
				</tr>	
			</tbody>	
			{%- comment -%} display the calendar year at the bottom of the table {%- endcomment -%}
			<tfoot>
					<tr>
						<td colspan="4">
						{%- if forloop.last == false -%}
						{%- capture previousYear -%}{{- currCourseYear | minus:1 -}}{%- endcapture -%}
						<a href="#training-calendar" class="trainingYearSelect" data-currYear="{{- currCourseYear -}}" data-refYear="{{- previousYear -}}" style="left:0;">&lt;&nbsp;{{- previousYear -}}</a>
						{%- endif -%}
						{%- if forloop.first == false -%}
						{%- capture nextYear -%}{{- currCourseYear | plus:1 -}}{%- endcapture -%}
						<a href="#training-calendar" class="trainingYearSelect" data-currYear="{{- currCourseYear -}}" data-refYear="{{- nextYear -}}" style="right:0;">{{- nextYear -}}&nbsp;&gt;</a>
						{%- endif -%}
					</td>
					</tr>
			</tfoot>
		</table>
		{%- else -%}			
			{%- continue -%}
		{% endif %}
	{%- endfor -%}		
</div>
{:/}
<!-- COMMENT: End of HTML code -->

---



### Training Programmes

SAC facilitates the following training sesssions when available.
For more information on the course details, please click on the options below:

<!-- COMMENT: The {:target="_blank"} syntax at the end of the Markdown document link is used to open the document in a new window tab -->

*Upcoming*

* [Method Validation in Chemical Analysis Workshop](/files/training/MV-(chemical)-workshop.pdf){:target="_blank"}
* [Measurement Uncertainty in Chemical Analysis Workshop](/files/training/MU-(chemical)-workshop.pdf){:target="_blank"}


*Past*
* [Laboratory Management Course (based on ISO/IEC 17025)](/files/training/Course-Objectives-LM.pdf){:target="_blank"}
* [Internal Audit Course](/files/training/Course-Objectives-IA.pdf){:target="_blank"}
* [ISO/IEC 17020 Course (for Inspection Body)](/files/training/ISO-17020-Course.pdf){:target="_blank"}
* [ISO 15189:2012 Course (for Medical Laboratory and Medical Imaging Facility)](/files/training/ISO-15189-Course-Overview-June-2013.pdf){:target="_blank"}
* [GLP Implementation Workshop](/files/training/GLP-Implementation-Workshop.pdf){:target="_blank"}


For enquiries on training courses, please refer to the contact details within the respective training links/materials.

