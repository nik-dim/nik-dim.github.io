---
title: Home
use_math: true
# The About page
# v2.0
# https://github.com/cotes2020/jekyll-theme-chirpy
# © 2017-2019 Cotes Chung
# MIT License
---



Hello! I'm Nikolaos Dimitriadis. I go by Nikos.

I am a senior undergraduate ECE student @ NTUA. I work on Machine Learning and Tropical Geometry under the supervision of Professor [Petros Maragos](https://https://robotics.ntua.gr/members/maragos/). I am very interested in conducting research in the intersection of ML, Optimization and multi-agent systems.

I am also an avid classical guitar player! I love playing pieces by Agustín Barrios Mangoré. Check out [this](https://www.youtube.com/watch?v=JEIqk8KPyDY) beautiful performance!

# Education
<div id="archives" class="pl-xl-4">
{% for ed in site.data.education %}
  {% capture this_year %}{{ ed.dateEnd | date: "%Y" }}{% endcapture %}
  {% capture pre_year %}{{ ed.dateEnd | date: "%Y" }}{% endcapture %}
  {% if forloop.first %}
    {% assign last_day = "" %}
    {% assign last_month = "" %}
  <span class="lead">Now</span>
  <ul class="list-unstyled">
  {% endif %}
    <li>
      <div>
        {% capture this_day %}{{ ed.dateStart }}{% endcapture %}
        {% capture this_month %}{{ ed.dateEnd }}{% endcapture %}
        <!-- <span class="date day">{{ this_day }}</span> -->
        <span class="date day small text-muted">{{ this_day }} - {{ this_month }}</span>
        <!-- <span class="date month small text-muted">{{ this_month }}</span> -->
        <a href="{{ site.baseurl }}{{ ed.url }}">{{ ed.description }}</a>
      </div>
    </li>
  {% if forloop.last %}
  </ul>
  {% elsif this_year != pre_year %}
  </ul>
  <span class="lead">{{pre_year}}</span>
  <ul class="list-unstyled">
    {% assign last_day = "" %}
    {% assign last_month = "" %}
  {% endif %}
{% endfor %}
</div>


# Projects

<div id="projects" class="pl-xl-2">
{% for post in site.posts %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture pre_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
  <!-- <span class="lead">{{this_year}}</span> -->
  <!-- <ul class="list-unstyled">
    <li>
      <div>
        {% capture this_day %}{{ post.date | date: "%d" }}{% endcapture %}
        {% capture this_month %}{{ post.date | date: "%b" }}{% endcapture %}
        <span class="date day">{{ this_day }}</span>
        <span class="date month small text-muted">{{ this_month }}</span>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </div>
    </li>
  </ul> -->
  <ul class="post-content pl-0">
    <li class="d-flex justify-content-between pl-md-3 pr-md-3">
      <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
      <span class="dash flex-grow-1"></span>
      <span class="text-muted small">{{ post.date | date: site.data.date_format.post }}</span>
    </li>
  </ul>
{% endfor %}
</div>
