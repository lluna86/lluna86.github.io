---
lang: en
layout: en/default
title: Berta Sanfeliu - Psychologist and Psychotherapist
metadescription: "Psychologist with an integrative approach. Psychotherapy services in Barcelona and online in Spanish, Catalan, and English."
---
{% include home-hero.html lang=page.lang %}
{% assign home = site.data.home[page.lang] %}
<div class="section-band bg-gray-100">
    <h2 class="section-title">{{ home.services_title }}</h2>
    <hr class="section-rule">
    <h3 class="section-kicker">{{ home.services_subtitle | upcase }}</h3>
    {% include services-grid.html lang=page.lang %}
    <div class="section-actions">
        <a class="reviews-button" href="/en/services/">{{ home.services_cta }}</a>
    </div>
</div>

{% include home-about.html lang=page.lang %}

<div class="section-band bg-gray-100">
    <h2 class="section-title">{{ home.modalities_title }}</h2>
    <hr class="section-rule">
    <h3 class="section-kicker">{{ home.modalities_subtitle | upcase }}</h3>
    {% include home-modalities.html lang=page.lang %}
</div>


{% include contact-section.html title="Contact me" subtitle="ASK ME AND I WILL ANSWER YOUR QUESTIONS BY EMAIL, PHONE, WHATSAPP, OR BY FILLING OUT THE FORM." %}
{% include google-reviews.html %}
