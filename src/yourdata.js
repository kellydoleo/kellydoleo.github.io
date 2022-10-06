// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// images 
import kellyPic from "./images/kelly-doleo.jpg"
import remedy from "./images/Remedy.png"
import bobaStory from "./images/boba-story.png"
import stopMotion from "./images/stop-motion.png"
import miniGame from "./images/mini-game.png"
import xfinity from "./images/xfinity-app.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Kelly D'oleo",
  headerTagline: [
    //Line 1 For Header
    "A full-stack software engineer",
    //Line 2 For Header
    "based in Philly",
    //Line 3 For Header
    "",
  ],
  //   Header Paragraph
  headerParagraph:
    "currently at Comcast NBCUniversal",

  //Contact Email
  contactEmail: "kellydeoleo@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "My Remedy", //Project Title - Add Your Project Title Here
      para:
        "An app dedicated to sharing and building your menstrual remedy. My Remedy allows people to login and access the community guide of tips, advice, and shared holistic healthcare practices surrounding menstrual health.", // Add Your Service Type Here
      //Project Image - Add Your Project Imagxe Here
      imageSrc:
        remedy,
      //Project URL - Add Your Project Url Here
      url: "http://my-remedy.herokuapp.com/",
    },
    {
      title: "Boba Story", //Project Title - Add Your Project Title Here
      para:
        "A bubble tea mobile game under Honey B Games. I currently assist with updating the mobile game in Unity and Java", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bobaStory,
      //Project URL - Add Your Project Url Here
      url: "https://www.bubbleteagame.com/boba-story",
    },
    {
      title: "Mini Game", //Project Title - Add Your Project Title Here
      para:
        "Using Unity and C#, I built a micro game that resembles a micro game in the mobile game Among Us.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        miniGame,
      //Project URL - Add Your Project Url Here
      url: "https://play.unity.com/mg/other/microgame-294",
    },
    {
      title: "Xfinity App", //Project Title - Add Your Project Title Here
      para:
        "Collaborate daily with product manager and UX designers to develop native customer facing features within the Xfinity iOS application using UIKit and SwiftUI frameworks", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        xfinity,
      //Project URL - Add Your Project Url Here
      url: "https://www.xfinity.com/apps",
    },
    {
      title: "Creative Coding", //Project Title - Add Your Project Title Here
      para:
        "As a student in Creative Coding at NYU IDM MicroMaster's Program, I created a stop motion animation", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        stopMotion,
      //Project URL - Add Your Project Url Here
      url: "https://openprocessing.org/sketch/1617268",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    kellyPic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/kellydoleo" },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
