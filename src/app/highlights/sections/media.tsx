const mediaVideos = [
  "https://www.youtube.com/embed/1wKvqLa9rd8?si=bx1Q_oscG5Tn99Bq",
  "https://www.youtube.com/embed/UBULwjwGg0E?si=HVbbCZiiJ3CT4HHO",
  "https://www.youtube.com/embed/XWc2hGirjF8?si=hQMwIxGpxV4fO86Q",
  "https://www.youtube.com/embed/oOjwzJX6Jxc?si=rvO2gZN1KCRgUNGS",
  "https://www.youtube.com/embed/3uy5oRby2Hs?si=EndnvpmZxRb6mdtl",
  "https://www.youtube.com/embed/RCYkQelTOeI?si=rxt0oliBED1oqq3T",
  "https://www.youtube.com/embed/jOiE6yxFSuk?si=j_pBuMJRjRPFdpyw",
];

const mediaLinks = [
  {
    title: "11 साल के 'कंप्यूटर बॉय' ने बनाया ई वोटिंग सिस्टम",
    url: "https://www.amarujala.com/uttar-pradesh/aligarh/aligarh-computer-boy-ashish-aggarwal-e-voting-system-2024-04-15?pageId=2",
    channel: "Amar Ujala Uttar Pradesh",
  },
  {
    title: "10 साल की उम्र में बना डाली कई वेबसाइट्स और गेम्स",
    url: "https://hindi.news18.com/news/uttar-pradesh/aligarh-10-year-old-child-ashish-agarwal-became-computer-boy-2-7281129.html",
    channel: "News18 Uttar Pradesh",
  },
  {
    title:
      "अलीगढ़ के 10 साल के बच्चे ने गूगल-एप्पल के आईटी इंजीनियरों को पछाड़ा, हर तरफ हो रही वाहवाही",
    url: "https://zeenews.india.com/hindi/india/up-uttarakhand/uttar-pradesh/aligarh-computer-boy-ashish-wrote-books-on-programming-language-design-websites/1831607",
    channel: "Zee News",
  },
  {
    title:
      "Computer Boy: 10 साल के बच्चे का नाम पड़ा 'कंप्यूटर बॉय', बना डाली कई वेबसाइट्स और गेम्स #Local18",
    url: "https://hindi.news18.com/videos/computer-boy-10-year-old-child-named-computer-boy-made-many-websites-and-games-local18-7296783.html",
    channel: "News18 Local",
  },
  {
    title:
      "11 साल के कंप्यूटर ब्वॉय ने बनाया घर बैठे वोट करने का पोर्टल, दावा- 5 मिनट में होगी काउंटिंग - E Voting Portal",
    url: "https://www.etvbharat.com/hi/!bharat/11-year-old-ashish-aggarwal-created-e-voting-portal-in-aligarh-will-be-able-to-vote-in-1-minute-counting-will-be-done-in-5-minutes-upn24041705142",
    channel: "ETV Bharat",
  },
  {
    title:
      "छोटी सी उम्र में दिमाग चलता है कंप्यूटर से भी तेज, प्रोग्रामिंग लैंग्वेज पर लिखी हैं पांच किताबें",
    url: "https://www.etvbharat.com/hindi/uttar-pradesh/state/aligarh/kanpur-ashish-brain-faster-than-computer-wrote-programming-language-book/up20230815230837024024291",
    channel: "ETV Bharat",
  },
  {
    title:
      "Inspirational Story: आपदा काल सीखा कम्प्यूटर ज्ञान, 11 साल की उम्र में प्रोग्रामिंग पर पांच किताबें लिख डाली",
    url: "https://www.jagran.com/uttar-pradesh/aligarh-city-inspiration-story-computer-boy-aashish-wrote-five-books-on-programming-by-age-of11-23514480.html",
    channel: "Danik Jagran",
  },
  {
    title:
      "Aligarh News: 10 साल का आशीष बना कंप्यूटर बॉय, प्रोग्रामिंग लैंग्वेज के साथ लिख चुका हैं 5 किताबें",
    url: "https://newstrack.com/uttar-pradesh/aligarh/student-ashish-called-computer-boy-written-5-books-with-programming-language-aligarh-news-in-hindi-444571",
    channel: "NewsTrack",
  },
];

export default function Media() {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-semibold text-transparent mb-2 mt-4 bg-gradient-to-r from-green-400 to-orange-400 via-yellow-400 bg-clip-text">
        ★ Media&apos;s Highlights
      </h2>
      <p className="text-lg text-slate-100 mb-4">
        I have been featured in a few articles, podcasts, and videos. Here are
        some of the highlights:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaVideos.map((vid, index) => (
          <iframe
            key={index}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-auto"
            src={vid}
          ></iframe>
        ))}
      </div>
      <p className="text-lg text-slate-100 my-4">Also, articles:</p>
      <div>
        <ul className="list-disc list-inside text-white text-lg">
          {mediaLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" className="border-b border-b-blue-400 cursor-pointer">{link.title}</a> - {link.channel}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
