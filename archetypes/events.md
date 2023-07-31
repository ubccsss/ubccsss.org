---
# The title of the event
title: "{{ delimit (split .Name "-" | after 3) " " | title }}"
# Publishing date when the event appears, not the date of the event.
date: {{ delimit (split .Name "-" | first 3) "-" }}
# Tags that apply to the event
tags: []
# Name of the author (you)
author: TODO Your name
# Images associated to this event. Used for banner.
images:
  - /files/TODO-banner.png
# Start date and time. Used for calendar page.
start_date: {{ delimit (split .Name "-" | first 3) "-" }} 12:00:00
# End date and time (defaults to one hour after start). Used for calendar page.
end_date: {{ delimit (split .Name "-" | first 3) "-" }} 11:00:00
---

![](/files/TODO-banner.png)

TODO write description here
