<script>
    import TestimonialCard from "./cardTemplates/TestimonialsCard.svelte";
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Autoplay, Pagination, Navigation } from "swiper";
    import 'swiper/css';
    import 'swiper/css/pagination';
    import "swiper/css/navigation";
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section class="py-12 overflow-hidden md:py-20 lg:py-24">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
                slidesPerView={1}
                spaceBetween={2}
                slidesPerGroup={1}
                speed={1400}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    dynamicBullets: true,
                }}
        >
            <SwiperSlide>
                <!--Shopgate-->
                <TestimonialCard>
                    <img slot="logo" class="mx-auto h-16" src="/logos/shopgate.svg" alt="Workcation">
                    <p slot="statement">&ldquo;Wir kamen mit confgames auf der code.talks commerce in Berlin zum ersten Mal in Berührung. Wir lernten innerhalb kürzester Zeit viele Konferenzteilnehmer kennen, kamen anhand der Fragen leicht ins Gespräch und konnten einige interessante Kontakte knüpfen.&rdquo;</p>
                    <div slot="image"><img class="mx-auto h-14 w-14 rounded-full" loading="lazy" src="./testimonials/nadine_zimmermann.webp" alt="Bild von Nadine Zimmermann"></div>
                    <div slot="person" class="text-base font-medium text-gray-900">Nadine Zimmermann</div>
                    <div slot="company" class="text-base font-medium text-gray-500">CEO, Shopgate</div>
                </TestimonialCard>
            </SwiperSlide>

            <!--OTTO-->
            <SwiperSlide>
                <TestimonialCard>
                    <img slot="logo" class="mx-auto h-16" src="/logos/otto.png" alt="Workcation">
                    <p slot="statement">&ldquo;Wir sind super zufrieden mit confgames. Eine tolle Idee und Möglichkeit mit Teilnehmern ins Gespräch zu kommen. Die Gewinne sind so attraktiv, dass es zu richtigen Challenges bei den Teilnehmern kommt und sie anspornt, daran teilzunehmen.&rdquo;</p>
                    <div slot="image"><img class="mx-auto h-14 w-14 rounded-full" loading="lazy" src="./testimonials/ildiko_peter.webp" alt="Bild von Ildiko Peter"></div>
                    <div slot="person" class="text-base font-medium text-gray-900">Ildiko Peter</div>
                    <div slot="company" class="text-base font-medium text-gray-500">Head of Events, OTTO</div>
                </TestimonialCard>
            </SwiperSlide>

            <!--Spryker-->
            <SwiperSlide>
                <TestimonialCard>
                    <img slot="logo" class="mx-auto h-16" src="/logos/spryker.png" alt="Workcation">
                    <p slot="statement">&ldquo;Das Conference Game hat zu super Interaktionen und spannenden Gesprächen bei uns am Stand geführt - und by the way hat auch ein gutes Drittel der Teilnehmer einer Datenerhebung zugestimmt und so konnten wir wertvolle Kontakte generieren&rdquo;</p>
                    <div slot="image"><img class="mx-auto h-14 w-14 rounded-full" loading="lazy" src="./testimonials/eileen_vollrath.webp" alt="Bild von Eileen Vollrath"></div>
                    <div slot="person" class="text-base font-medium text-gray-900">Eileen Vollrath </div>
                    <div slot="company" class="text-base font-medium text-gray-500">Senior Event Manager, Spryker</div>
                </TestimonialCard>
            </SwiperSlide>

            <SwiperSlide>
                <!--Mirko-->
                <TestimonialCard>
                    <img slot="logo" class="mx-auto h-16" src="/testimonials/MiRKo_2022_Marketing_Logo_quadratisch_groß-01.png" alt="Workcation">
                    <p slot="statement">&ldquo;CONFGAMES hat einen echten Mehrwert für unsere Konferenz geliefert. Unsere Ausstellenden hatten durch das innovative Gamification- Konzept permanent neue Leads an ihren Ständen und wurden rund um perfekt betreut. Unsere Teilnehmenden waren sehr glücklich über die vielen verschiedenen Gewinne und hatten sehr viel Spaß beim Standbesuch. Eine absolute Bereicherung für jede Konferenz.&rdquo;</p>
                    <div slot="image"><img class="mx-auto h-14 w-14 rounded-full" loading="lazy" src="testimonials/Sebastian_Mirko.jpg" alt="Bild von Nadine Zimmermann"></div>
                    <div slot="person" class="text-base font-medium text-gray-900">Sebastian Nieland</div>
                    <div slot="company" class="text-base font-medium text-gray-500">Geschäftsführer, MiRKo Dresden UG</div>
                </TestimonialCard>
            </SwiperSlide>
        </Swiper>
    </div>
</section>
