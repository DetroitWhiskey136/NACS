window.onscroll = () => {
  setSticky();
}

window.onload = () => {
  init();
}

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function init() {
  document.getElementById('header-title').innerText = siteData.header.title;
  document.getElementById('header-tagline').innerText = siteData.header.tagline;

  /**
   * Quick Guide
   */
  const quickGuide = document.getElementById('qg');
  const qgTitle = document.createElement('h3');
  qgTitle.innerText = siteData['quick-guide'].header;
  quickGuide.appendChild(qgTitle);
  const qgSource = document.createElement('a');
  qgSource.href = siteData['quick-guide'].reference.url;
  qgSource.innerText = siteData['quick-guide'].reference.name;
  quickGuide.appendChild(qgSource);
  siteData['quick-guide'].content.forEach((i) => {
    const content = document.createElement('p');
    content.innerText = i;
    quickGuide.appendChild(content);
  });

  /**
   * Best Practices
   */
  const bestPractices = document.getElementById('bp');
  const bpTitle = document.createElement('h3');
  bpTitle.innerText = siteData['best-practices'].header;
  bestPractices.appendChild(bpTitle);
  const source = document.createElement('a');
  source.href = siteData['best-practices'].reference.url;
  source.innerText = siteData['best-practices'].reference.name;
  bestPractices.appendChild(source);
  siteData['best-practices'].content.forEach((i) => {
    const content = document.createElement('p');
    content.innerText = i;
    bestPractices.appendChild(content);
  });

   /**
    * FAQ
    */
  const FAQ = document.getElementById('faq');
  const FAQHeader = document.createElement('h3');
  FAQHeader.innerText = 'FAQ:';
  FAQ.appendChild(FAQHeader);
  siteData.faq.forEach((i) => {
    const { question, answer } = i;

    const div = document.createElement('div');
    div.id = question.replace(/\s+/g, '_').toLowerCase();

    const title = document.createElement('p');
    const boldTitle = document.createElement('b');
    boldTitle.innerText = question;
    title.appendChild(boldTitle);
    div.appendChild(title);
    const content = document.createElement('p');
    content.innerText = answer;
    div.appendChild(content);
    div.classList.add('clean_border');


    FAQ.appendChild(div);


  })



}


function setSticky() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky')
  }
}
