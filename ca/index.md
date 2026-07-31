---
lang: ca
layout: ca/default
title: Berta Sanfeliu - Psicòloga i psicoterapeuta
metadescription: "Psicòloga General Sanitària amb enfocament integrador. Serveis de psicoteràpia a Barcelona i online en castellà, català i anglès."
---

{% include home-hero.html lang=page.lang %}

{% assign home = site.data.home[page.lang] %}
<div class="section-band bg-gray-100">
    <h2 class="section-title">{{ home.services_title }}</h2>
    <hr class="section-rule">
    <h3 class="section-kicker">{{ home.services_subtitle | upcase }}</h3>
    {% include services-grid.html lang=page.lang %}
    <div class="section-actions">
        <a class="reviews-button" href="/ca/serveis/">{{ home.services_cta }}</a>
    </div>
</div>

{% include home-about.html lang=page.lang %}

<div class="section-band bg-gray-100">
    <h2 class="section-title">{{ home.modalities_title }}</h2>
    <hr class="section-rule">
    <h3 class="section-kicker">{{ home.modalities_subtitle | upcase }}</h3>
    {% include home-modalities.html lang=page.lang %}
</div>


{% include contact-section.html title="Contacta" subtitle="PREGUNTA'M I RESOLDRÉ ELS TEUS DUBTES PER EMAIL, TELÈFON, WHATSAPP O OMPLINT EL FORMULARI." %}
{% include google-reviews.html %}
