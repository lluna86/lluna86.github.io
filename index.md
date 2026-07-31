---
lang: es
layout: default
title: Berta Sanfeliu - Psicóloga y psicoterapeuta
metadescription: "Psicóloga General Sanitaria con enfoque integrador. Servicios de psicoterapia en Barcelona y online en castellano, catalán e inglés."
---
{% include home-hero.html lang=page.lang %}

{% assign home = site.data.home[page.lang] %}
<div class="section-band bg-gray-100">
    <h2 class="section-title">{{ home.services_title }}</h2>
    <hr class="section-rule">
    <h3 class="section-kicker">{{ home.services_subtitle | upcase }}</h3>
    {% include services-grid.html lang=page.lang %}
    <div class="section-actions">
        <a class="reviews-button" href="/servicios/">{{ home.services_cta }}</a>
    </div>
</div>

{% include home-about.html lang=page.lang %}

<div class="section-band bg-gray-100">
    <h2 class="section-title">{{ home.modalities_title }}</h2>
    <hr class="section-rule">
    <h3 class="section-kicker">{{ home.modalities_subtitle | upcase }}</h3>
    {% include home-modalities.html lang=page.lang %}
</div>


{% include contact-section.html title="Contacta" subtitle="PREGÚNTAME Y RESOLVERÉ TUS DUDAS POR EMAIL, TELÉFONO, WHATSAPP O RELLENANDO EL FORMULARIO." %}
{% include google-reviews.html %}
