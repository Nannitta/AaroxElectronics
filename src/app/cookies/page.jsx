'use client';

import cookies from '../cookies.json';
import { useLanguageStore } from '../stores/languageStore';
import Link from 'next/link';
import './cookies.css';

export default function Cookies() {
  const language = useLanguageStore((state) => state.language);

  return(
    <main className='cookies-main'>
      <div className='cookies-header'>
        <h1>{cookies[language].title}</h1>
        <h2>{cookies[language].subtitle}</h2>
      </div>
      <section className='cookies-section'>
        <h2>{cookies[language].title}</h2>
        <p>{cookies[language].firstParagraph}</p>
        <p>{cookies[language].secondParagraph}</p>
        <p>{cookies[language].thirdParagraph}</p>
        <p>{cookies[language].fourthParagraph}</p>
        <p>{cookies[language].typesSection}</p>
        <ul>
          <li>
            <span>{cookies[language].analytics.title}</span>
            <p>{cookies[language].analytics.desc}</p>
          </li>
          <li>
            <span>{cookies[language].technical.title}</span>
            <p>{cookies[language].technical.desc.firstPart}<Link href={cookies[language].technical.recaptcha} target='_blank'>{cookies[language].linkTitle}</Link>. {cookies[language].technical.desc.secondPart}<Link href={cookies[language].technical.youtubeMaps} target='_blank'>{cookies[language].linkTitle}</Link>.</p>
          </li>
          <li>
            <span>{cookies[language].marketing.title}</span>
            <p>{cookies[language].marketing.desc}<Link href={cookies[language].marketing.link} target="_blank">{cookies[language].linkTitle}</Link>.</p>
          </li>
          <li>
            <span>{cookies[language].socials.title}</span>
            <p>{cookies[language].socials.desc}<Link href={cookies[language].socials.linkedin} target="_blank">Linkedin</Link>.</p>
          </li>
        </ul>
        <p>{cookies[language].fifthParagraph}</p>
        <ul>
          <li>
            <span>{cookies[language].own.title}</span>
            <p>{cookies[language].own.desc}</p>
          </li>
          <table>
            <thead>
              <tr>
                <th>{cookies[language].own.table.purpose}</th>
                <th>{cookies[language].own.table.name}</th>
                <th>{cookies[language].own.table.description}</th>
                <th>{cookies[language].own.table.duration}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>{cookies[language].own.table.purposeDesc}</td>
                <td>AEC</td>
                <td>{cookies[language].own.table.aecDesc}</td>
                <td>{cookies[language].own.table.months}</td>
              </tr>
              <tr>
                <td>CONSENT y SOCS</td>
                <td>{cookies[language].own.table.socsDesc}</td>
                <td>{cookies[language].own.table.months}</td>
              </tr>
            </tbody>
          </table>
          <li>
            <span>Third parties</span>
            <p>Those installed by entities other than the Publisher or those where the information is managed by third parties, despite the cookies being installed from an equipment or domain managed by the Publisher. The Publisher has integrated add-ons by external providers, such as Google, Inc, on its website. These third parties and their cookies are governed by their own Terms and Conditions, stated previously when describing the types of cookies according to their purpose.</p>
          </li>
        </ul>
        <p>Google, Inc. is located in the USA and the acceptance of the cookies associated to its services entails the international transfer of the data resulting from the cookies to said provider. This transfer is based on the user’s consent, which may be withdrawn at any time. According to the European authorities, US law does not guarantee an adequate level of data protection. Google is affiliated to the Web Choices tool, from which the use of its cookies can be disabled: <Link href={' https://optout.aboutads.info/'} target="_blank">here</Link>.</p>
        <h3>COOKIES</h3>
        <p>Cookies will be installed after obtaining the users’ consent, except for technical or necessary cookies, which will be installed in any case. Users may authorise cookie installation by clicking on “Accept” on the cookie notice.</p>
        <p>Should the user wish to withdraw the consent given, he or she must delete the installed cookies and then choose “Reject” on the cookie notice. In order to prevent their future installation, it is possible to enable the Private Browsing or “Do-Not-Track” options on the browser, that is, to block or disable the installation of cookies.</p>
        <p>The user must keep in mind that some features of the website content are only available if the installation of cookies on the browser is allowed. Should you decide to reject or block certain cookies, depending on their purpose, this may affect, totally or partially, the normal operation of the website or prevent access to some of its services.</p>
        <p>In order to allow, block or delete the cookies installed on an equipment or device by configuring the options of the browser installed on it, the user must follow the instructions provided by the browser. These are the links for the configuration of cookies on the most popular browsers:</p>
        <ul>
          <li>
            <p>Internet Explorer: <Link href={'https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10'} target="_blank">Delete and manage cookies</Link></p>
          </li>
          <li>
            <p>Mozilla Firefox: <Link href={'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox'} target="_blank">Clear cookies</Link> and <Link href={'https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox'} target="_blank">block cookies</Link></p>
          </li>
          <li>
            <p>Google Chrome: <Link href={'https://support.google.com/chrome/answer/95647?hl=en'} target="_blank">Clear, enable and manage cookies</Link></p>
          </li>
          <li>
            <p>Opera: <Link href={'https://help.opera.com/en/latest/web-preferences/#cookies'} target="_blank">Cookie options</Link></p>
          </li>
          <li>
            <p>Safari: <Link href={'https://support.apple.com/en-gb/guide/safari/sfri11471/mac'} target="_blank">Manage cookies</Link></p>
          </li>
        </ul>
        <p>If you use some other browser or if the provided links do not contain the desired information, you can learn how to manage the cookies installed on an equipment by accessing the “Options”, “Settings”, or equivalent menus on the browser, or by referring to the “Help” or “Support” sections on the browser. Some browsers allow the configuration of specific rules —exceptions— in order to manage cookies on a per-site basis, so that the user can disable cookies for all sites except for those he or she trusts.</p>
        <p>On the other hand, if you wish to prevent Google Analytics from collecting data related to your access to the website, you can install the Google Analytics <Link href={'https://tools.google.com/dlpage/gaoptout?hl=en'} target="_blank">opt-out browser add-on</Link> The add-on does not stop the information from being sent to the website or, through other means, to other web analytics services. There are additional privacy configuration options for Google services, available through these links: <Link href={'https://safety.google/intl/en/privacy/privacy-controls/'} target="_blank">Privacy Controls</Link> Google and <Link href={'https://policies.google.com/technologies/partner-sites?hl=en'} target="_blank">Privacy partners Google</Link>.</p>
        <p>The user must set his or her preferences on all the devices he or she uses to browse the Internet.</p>
      </section>
    </main>
  )
}