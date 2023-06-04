<script lang="ts">
  import Title from "$lib/elements/dataprotection/Title.svelte";
  import LpAfterTitle from "$lib/elements/dataprotection/LpAfterTitle.svelte";
  import Subtitle from "$lib/elements/dataprotection/Subtitle.svelte";
  import LpAfterSubtitle from "$lib/elements/dataprotection/LpAfterSubtitle.svelte";
  import Paragraph from "$lib/elements/dataprotection/Paragraph.svelte";
  import SmallTitle from "$lib/elements/dataprotection/SmallTitle.svelte";
  import OrderProcessing from "$lib/elements/dataprotection/OrderProcessing.svelte";
  import Bulletpoints from "$lib/elements/dataprotection/Bulletpoints.svelte";
  import SectionWrapper from "$lib/elements/dataprotection/SectionWrapper.svelte";

  const BULLETPOINTS = {
    rightToRestrictionOfProcessing: [
      "If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the review, you have the right to request the restriction of the processing of your personal data.",
      "If the processing of your personal data happened/is happening unlawfully, you can request the restriction of data processing instead of deletion.",
      "If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request restriction of the processing of your personal data instead of erasure.",
      "If you have lodged an objection pursuant to Art. 21 (1) DSGVO, a balancing must be carried out between",
    ],
    serverLogData: [
      "Browser type and version",
      "Operatingsystem",
      "Referrer URL",
      "Host name of the accessing computer",
      "Time of the server request",
      "IP-Address",
    ],
  };
</script>

<SectionWrapper>
  <slot>
    <div class="text-NFTW-blue-50">
      <!--1. Privacy at a glance-->
      <section>
        <Title title="1. Privacy at a glance" />
        <LpAfterTitle>
          <Subtitle subtitle="General information" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="The following notices provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. For detailed information on data protection, please refer to our privacy policy listed below this text."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Data collection on this website" />
          <LpAfterSubtitle>
            <SmallTitle
              smallTitle="Who is responsible for data collection on this website?"
            />
            <Paragraph
              paragraph="Data processing on this website is carried out by the website operator. You can find his contact details in the Notice about the responsible party section of this privacy policy."
            />

            <SmallTitle smallTitle="How do we collect your data?" />
            <Paragraph
              paragraph="Your data is collected, on the one hand, by you providing it to us. This can be, for example, data that you enter in a contact form."
            />
            <Paragraph
              paragraph="Other data is collected automatically or after your consent when you visit the website by our IT systems. These are mainly technical data (e.g. Internet browser, operating system or time of page view). The collection of this data takes place automatically as soon as you enter this website."
            />

            <SmallTitle smallTitle="What do we use your data for?" />
            <Paragraph
              paragraph="Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior."
            />

            <SmallTitle
              smallTitle="What rights do you have regarding your data?"
            />
            <Paragraph
              paragraph="You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have a right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority."
            />

            <Paragraph
              paragraph="For this purpose, as well as for further questions on the subject of data protection, you can contact us at any time."
            />
          </LpAfterSubtitle>
          <Subtitle subtitle="Third-party analytics and tools" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="When visiting this website, your surfing behavior may be statistically analyzed. This is done primarily with so-called analysis programs."
            />
            <Paragraph
              paragraph="Detailed information about these analysis programs can be found in the following privacy policy."
            />
          </LpAfterSubtitle>
        </LpAfterTitle>
      </section>

      <!--2. Hosting-->
      <section>
        <Title title="2. Hosting" />
        <Paragraph
          paragraph="We host the content of our website with the following provider:"
        />
        <LpAfterTitle>
          <Subtitle subtitle="External hosting" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="This website is hosted externally. The personal data collected on this website is stored on the servers of the hoster(s). This may be v. IP addresses, contact requests, meta and communication data, contract data, contact data, names, website accesses and other data generated through a website."
            />
            <Paragraph
              paragraph="External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b DSGVO) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f DSGVO). Insofar as a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information in the user's terminal device (e.g. device fingerprinting) as defined by the TTDSG. The consent can be revoked at any time.						"
            />
            <Paragraph
              paragraph="Our hoster(s) will process your data only to the extent necessary to fulfill its performance obligations and follow our instructions with respect to such data."
            />
            <Paragraph paragraph="We use the following hoster:" />
            <p>
              Vercel Inc.<br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              privacy@vercel.com<br /><br />
            </p>
            <OrderProcessing
              text="We have concluded a contract on order processing (AVV) for the use of the above service. This is a contract required by data protection law, which ensures that this processes the personal data of our website visitors only according to our instructions and in compliance with the DSGVO."
            />
          </LpAfterSubtitle>
        </LpAfterTitle>
      </section>

      <!--3. General notes and mandatory information-->
      <section>
        <Title title="3. General notes and mandatory information" />
        <LpAfterTitle>
          <Subtitle subtitle="Data protection" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy."
            />
            <Paragraph
              paragraph="When you use this website, various personal data are collected. Personal data is data by which you can be personally identified. This Privacy Policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done."
            />
            <Paragraph
              paragraph="We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Note on the responsible entity" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="The responsible party for data processing on this website is:"
            />
            <p class="">
              NFTW Adventures<br />
              Tom Cook <br />
              NFTW Park 1 <br />
              95014 Cupertino <br /><br />
              Telefon: 0123456789 <br />
              E-Mail: tom@nftw.cool <br /><br />
            </p>
            <Paragraph
              paragraph="The controller is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g., names, e-mail addresses, or the like)."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Memory duration" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="Unless a more specific retention period has been mentioned within this Privacy Policy, your personal data will remain with us until the purpose for processing the data no longer applies. If you assert a legitimate request for deletion or revoke consent for data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., retention periods under tax or commercial law); in the latter case, the data will be deleted after these reasons no longer apply."
            />
          </LpAfterSubtitle>

          <Subtitle
            subtitle="General information on the legal basis for data processing on this website"
          />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) DSGVO or Art. 9(2)(a) DSGVO, if special categories of data are processed pursuant to Art. 9(1) DSGVO. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 (1) a DSGVO. If you have consented to the storage of cookies or to the access to information in your terminal device (e.g. via device fingerprinting), the data processing is additionally carried out on the basis of Section 25 (1) TTDSG. The consent can be revoked at any time. If your data is required for the performance of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b DSGVO. Furthermore, if your data is required for the fulfillment of a legal obligation, we process it on the basis of Art. 6 para. 1 lit. c DSGVO. Furthermore, the data processing may be carried out on the basis of our legitimate interest according to Art. 6 para. 1 lit. f DSGVO. Information about the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Revocation of your consent to data processing" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation."
            />
          </LpAfterSubtitle>

          <Subtitle
            subtitle="Right to object to data collection in specific cases and to direct marketing (Art. 21 GDPR)"
          />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="IF DATA PROCESSING IS BASED ON ART. 6 ABS. 1 LIT. E OR F DSGVO, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA CONCERNED UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING IS FOR THE PURPOSE OF ASSERTING, EXERCISING OR DEFENDING LEGAL CLAIMS (OBJECTION UNDER ARTICLE 21 (1) DSGVO)."
            />
            <Paragraph
              paragraph="IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS CONNECTED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION PURSUANT TO ART. 21 PARA. 2 DSGVO)."
            />
          </LpAfterSubtitle>

          <Subtitle
            subtitle="Right of appeal to the competent supervisory authority"
          />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="In the event of breaches of the GDPR, data subjects shall have a right of appeal to a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged breach. The right of appeal is without prejudice to any other administrative or judicial remedy."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Right to data portability" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="You have the right to have data that we process automatically on the basis of your consent or in performance of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done insofar as it is technically feasible."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Access, correction and deletion" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of data processing and, if necessary, a right to correction or deletion of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Right to restriction of processing" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="You have the right to request the restriction of the processing of your personal data. For this purpose, you can contact us at any time. The right to restriction of processing exists in the following cases:"
            />
            <Bulletpoints
              bulletpoints={BULLETPOINTS.rightToRestrictionOfProcessing}
            />
            <Paragraph
              paragraph="If you have restricted the processing of your personal data, this data may - apart from being stored - only be processed with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a Member State."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Information, correction and deletion" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or requests that you send to us as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from http:// to https:// and by the lock symbol in your browser line."
            />
            <Paragraph
              paragraph="If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Objection to promotional emails" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="The use of contact data published within the framework of the imprint obligation to send advertising and information materials not expressly requested is hereby prohibited. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam e-mails."
            />
          </LpAfterSubtitle>
        </LpAfterTitle>
      </section>

      <!--4. Data collection on this website-->
      <section>
        <Title title="4. Data collection on this website" />
        <LpAfterTitle>
          <Subtitle subtitle="Server log files" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:"
            />
            <Bulletpoints bulletpoints={BULLETPOINTS.serverLogData} />

            <Paragraph
              paragraph="We do not merge this data with other data sources."
            />

            <Paragraph
              paragraph="The collection of this data is based on Art. 6 para. 1 lit. f DSGVO. The website operator has a legitimate interest in the technically error-free presentation and optimization of its website - for this purpose, the server log files must be collected."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Contact form" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="If you send us inquiries via contact form, your information from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent."
            />
            <Paragraph
              paragraph="The processing of this data is based on Art. 6 (1) lit. b DSGVO, if your request is related to the performance of a contract or is necessary for the performance of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of requests addressed to us (Art. 6 para. 1 lit. f DSGVO) or on your consent (Art. 6 para. 1 lit. a DSGVO) if this has been requested; the consent can be revoked at any time."
            />
            <Paragraph
              paragraph="The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g. after we have completed processing your request). Mandatory legal provisions - in particular retention periods - remain unaffected."
            />
          </LpAfterSubtitle>

          <Subtitle subtitle="Request by e-mail, phone or fax" />
          <LpAfterSubtitle>
            <Paragraph
              paragraph="If you contact us by e-mail, telephone or fax, your inquiry including all personal data resulting from it (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent."
            />
            <Paragraph
              paragraph="The processing of this data is based on Art. 6 (1) lit. b DSGVO, if your request is related to the performance of a contract or is necessary for the performance of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of requests addressed to us (Art. 6 para. 1 lit. f DSGVO) or on your consent (Art. 6 para. 1 lit. a DSGVO) if this has been requested; the consent can be revoked at any time."
            />
            <Paragraph
              paragraph="The data you send to us via contact requests will remain with us until you request us to delete it, revoke your consent to store it, or the purpose for storing the data no longer applies (e.g. after your request has been processed). Mandatory legal provisions - in particular legal retention periods - remain unaffected."
            />
          </LpAfterSubtitle>
        </LpAfterTitle>
      </section>
    </div>
  </slot>
</SectionWrapper>
